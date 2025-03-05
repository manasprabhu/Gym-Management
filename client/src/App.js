import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import WorkoutPlan from "./pages/WorkoutPlan";
import "./App.css"; // Import global styles

function App() {
  return (
    <>
      {/* Dynamic Page Title & Favicon */}
      <Helmet>
        <title>Gym Management</title>
        <link rel="icon" href="/logo.png" />
      </Helmet>

      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workoutplan" element={<WorkoutPlan />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;