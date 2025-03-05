import React, { useState } from "react";
import "./WorkoutPlan.css"; // Import styles

const WorkoutPlan = () => {
    const [userData, setUserData] = useState({
        gender: "",
        age: "",
        height: "",
        weight: "",
        goal: "",
        experience: "",
        timing: "",
    });

    const [workouts, setWorkouts] = useState([
        { bodyPart: "Back", exercise: "", weight: "", reps: "" },
        { bodyPart: "Shoulder", exercise: "", weight: "", reps: "" },
        { bodyPart: "Chest", exercise: "", weight: "", reps: "" },
        { bodyPart: "Lats", exercise: "", weight: "", reps: "" },
        { bodyPart: "Biceps", exercise: "", weight: "", reps: "" },
        { bodyPart: "Abs", exercise: "", weight: "", reps: "" },
        { bodyPart: "Forearms", exercise: "", weight: "", reps: "" },
        { bodyPart: "Traps", exercise: "", weight: "", reps: "" },
        { bodyPart: "Triceps", exercise: "", weight: "", reps: "" },
        { bodyPart: "Legs (Glutes, Hamstring, Calves)", exercise: "", weight: "", reps: "" },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleWorkoutChange = (index, e) => {
        const { name, value } = e.target;
        const updatedWorkouts = [...workouts];
        updatedWorkouts[index][name] = value;
        setWorkouts(updatedWorkouts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", userData);
        console.log("Workout Plan:", workouts);
        alert("Workout Plan Submitted Successfully!");
    };

    return (
        <div className="workout-plan-container">
            <h2>💪 Create Your Workout Plan</h2>

            {/* User Details Form */}
            <form onSubmit={handleSubmit}>
                <div className="user-info">
                    <label>Gender:</label>
                    <select name="gender" value={userData.gender} onChange={handleInputChange}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <label>Age:</label>
                    <input type="number" name="age" value={userData.age} onChange={handleInputChange} placeholder="Years" />

                    <label>Height (cm):</label>
                    <input type="number" name="height" value={userData.height} onChange={handleInputChange} placeholder="cm" />

                    <label>Weight (kg):</label>
                    <input type="number" name="weight" value={userData.weight} onChange={handleInputChange} placeholder="kg" />

                    <label>Fitness Goal:</label>
                    <select name="goal" value={userData.goal} onChange={handleInputChange}>
                        <option value="">Select</option>
                        <option value="Build Muscle">Build Muscle</option>
                        <option value="Keep Fit">Keep Fit</option>
                        <option value="Lose Weight">Lose Weight</option>
                    </select>

                    <label>Experience Level:</label>
                    <select name="experience" value={userData.experience} onChange={handleInputChange}>
                        <option value="">Select</option>
                        <option value="Newbie">Newbie</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <label>Preferred Workout Timing:</label>
                    <select name="timing" value={userData.timing} onChange={handleInputChange}>
                        <option value="">Select</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>

                {/* Workout Plan Table */}
                <h3>📝 Workout Plan</h3>
                <div className="workout-table">
                    {workouts.map((workout, index) => (
                        <div key={index} className="workout-row">
                            <span>{workout.bodyPart}</span>
                            <input type="text" name="exercise" value={workout.exercise} onChange={(e) => handleWorkoutChange(index, e)} placeholder="Exercise" />
                            <input type="number" name="weight" value={workout.weight} onChange={(e) => handleWorkoutChange(index, e)} placeholder="Weight (Kg)" />
                            <input type="number" name="reps" value={workout.reps} onChange={(e) => handleWorkoutChange(index, e)} placeholder="Reps" />
                        </div>
                    ))}
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Save Plan</button>
            </form>
        </div>
    );
};

export default WorkoutPlan;