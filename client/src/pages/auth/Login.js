import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import backgroundImage from "../../assets/login.jpg";  // ✅ Import image correctly

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      console.log(res.data);
      alert("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid Credentials!");
    }
  };

  return (
    <div 
      className="login-page"
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div className="login-cube">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;