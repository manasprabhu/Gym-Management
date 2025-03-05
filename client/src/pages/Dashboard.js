import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Importing images
import chestImg from "../assets/chest.jpg";
import backImg from "../assets/back.jpg";
import legsImg from "../assets/legs.jpg";
import armsImg from "../assets/arms.jpg";
import shouldersImg from "../assets/shoulders.jpg";
import gym1 from "../assets/gym1.jpg";
import gym2 from "../assets/gym2.jpg";
import gym3 from "../assets/gym3.jpg";

const Dashboard = () => {
    const navigate = useNavigate();

    const tips = [
        "💧 Stay hydrated before, during, and after workouts.",
        "🏋️‍♂️ Proper form is more important than lifting heavy weights.",
        "🔥 Always warm up and cool down to prevent injuries.",
        "🛌 Get enough sleep for better muscle recovery.",
        "🥗 Eat a balanced diet rich in protein and healthy carbs.",
    ];

    const exercises = [
        { bodyPart: "Chest", name: "Bench Press", img: chestImg, path: "/exercise/chest" },
        { bodyPart: "Back", name: "Pull-ups", img: backImg, path: "/exercise/back" },
        { bodyPart: "Legs", name: "Squats", img: legsImg, path: "/exercise/legs" },
        { bodyPart: "Arms", name: "Bicep Curls", img: armsImg, path: "/exercise/arms" },
        { bodyPart: "Shoulders", name: "Overhead Press", img: shouldersImg, path: "/exercise/shoulders" },
    ];

    return (
        <div className="dashboard">
            {/* Welcome Section */}
            <section className="welcome-section">
                <h1>🏋️ Welcome to Your Gym Dashboard</h1>
                <p>Your ultimate fitness companion for workouts, nutrition, and tracking progress.</p>
            </section>

            {/* Gym Tips Section */}
            <section className="tips-section">
                <h2>🔥 Gym Tips</h2>
                <ul>
                    {tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </section>

            {/* Exercises Section */}
            <section className="exercises-section">
                <h2>💪 Exercises by Body Part</h2>
                <div className="exercise-grid">
                    {exercises.map((exercise, index) => (
                        <div
                            key={index}
                            className="exercise-card"
                            onClick={() => navigate(exercise.path)}
                        >
                            <img src={exercise.img} alt={exercise.name} className="exercise-img" />
                            <h3>{exercise.name}</h3>
                            <p>{exercise.bodyPart}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <h2>📸 Gym Gallery</h2>
                <div className="gallery-grid">
                    <img src={gym1} alt="Gym 1" />
                    <img src={gym2} alt="Gym 2" />
                    <img src={gym3} alt="Gym 3" />
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <h2>🚀 Start Your Fitness Journey Today!</h2>
                <p>Join now and transform your body with expert guidance and tracking tools.</p>
                <button className="cta-button" onClick={() => navigate("/signup")}>Sign Up Now</button>
            </section>
        </div>
    );
};

export default Dashboard;