import React, { useState } from "react";
import "./AssignWorkouts.css"; // Add styles

const AssignWorkouts = () => {
  const [workouts, setWorkouts] = useState([
    { day: "Monday", workout: "pull-ups", weight: 10, sets: 3, reps: 4, rest: 5, description: "Work out for that day" },
  ]);

  const [assignTo, setAssignTo] = useState("Member");
  const [member, setMember] = useState("Maria 24");
  const [fromDate, setFromDate] = useState("");
  const [repeatDays, setRepeatDays] = useState("");

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const workoutOptions = ["Pull-ups", "Push-ups", "Deadlifts", "Squats", "Bench Press", "Plank"];

  const addWorkout = () => {
    setWorkouts([...workouts, { day: "Monday", workout: "pull-ups", weight: "", sets: "", reps: "", rest: "", description: "" }]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedWorkouts = [...workouts];
    updatedWorkouts[index][name] = value;
    setWorkouts(updatedWorkouts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!fromDate || !repeatDays) {
      alert("Please fill in all required fields!");
      return;
    }

    console.log("Assigned Workouts:", {
      assignedBy: "Manas Prabhu",
      assignTo,
      member,
      fromDate,
      repeatDays,
      workouts,
    });
    
    alert("Workout Assigned Successfully!");
  };

  const handleReset = () => {
    setWorkouts([{ day: "Monday", workout: "pull-ups", weight: "", sets: "", reps: "", rest: "", description: "" }]);
    setFromDate("");
    setRepeatDays("");
  };

  return (
    <div className="assign-workouts-container">
      <h2>Assign Workouts</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Assigned By:</label>
          <input type="text" value="Manas Prabhu" disabled />
        </div>

        <div className="form-group">
          <label>Assign To *</label>
          <div>
            <input type="radio" name="assignTo" value="Member" checked={assignTo === "Member"} onChange={() => setAssignTo("Member")} /> Member
            <input type="radio" name="assignTo" value="Class" checked={assignTo === "Class"} onChange={() => setAssignTo("Class")} /> Class
          </div>
        </div>

        <div className="form-group">
          <label>Member *</label>
          <select value={member} onChange={(e) => setMember(e.target.value)}>
            <option>Maria 24</option>
            <option>John 28</option>
            <option>Emma 30</option>
          </select>
        </div>

        <div className="form-group">
          <label>From Date *</label>
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>No Of Days Repeat *</label>
          <input type="number" value={repeatDays} onChange={(e) => setRepeatDays(e.target.value)} required />
        </div>

        <h3>Workouts</h3>
        {workouts.map((workout, index) => (
          <div key={index} className="workout-row">
            <select name="day" value={workout.day} onChange={(e) => handleInputChange(index, e)}>
              {daysOfWeek.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
            <select name="workout" value={workout.workout} onChange={(e) => handleInputChange(index, e)}>
              {workoutOptions.map((work) => (
                <option key={work} value={work}>{work}</option>
              ))}
            </select>
            <input type="number" name="weight" value={workout.weight} onChange={(e) => handleInputChange(index, e)} placeholder="Weight (Kg)" />
            <input type="number" name="sets" value={workout.sets} onChange={(e) => handleInputChange(index, e)} placeholder="Sets" />
            <input type="number" name="reps" value={workout.reps} onChange={(e) => handleInputChange(index, e)} placeholder="Reps" />
            <input type="number" name="rest" value={workout.rest} onChange={(e) => handleInputChange(index, e)} placeholder="Rest (min)" />
            <input type="text" name="description" value={workout.description} onChange={(e) => handleInputChange(index, e)} placeholder="Description" />
          </div>
        ))}

        <button type="button" onClick={addWorkout}>+ Add New</button>

        <div className="buttons">
          <button type="submit" className="assign-btn">Assign</button>
          <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default AssignWorkouts;