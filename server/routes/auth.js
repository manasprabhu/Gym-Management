const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// User Signup
router.post(
    "/signup",
    [
        body("name", "Name is required").not().isEmpty(),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: "User already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            user = new User({
                name,
                email,
                password: hashedPassword,
            });

            await user.save();

            const payload = { user: { id: user.id } };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.json({ token });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

// User Login
router.post(
    "/login",
    [
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password is required").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid credentials" });
            }

            const payload = { user: { id: user.id } };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

            res.json({ token });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

module.exports = router;