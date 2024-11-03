
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // State to manage the input values
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]); // default to first category

  // Event handlers for input fields
  function handleTextChange(event) {
    setTaskText(event.target.value);
  }

  function handleCategoryChange(event) {
    setTaskCategory(event.target.value);
  }

  // Submit handler
  function handleSubmit(event) {
    event.preventDefault();
    // Create new task object
    const newTask = {
      text: taskText,
      category: taskCategory,
    };
    // Pass the new task up to the App component
    onTaskFormSubmit(newTask);
    // Clear form fields after submission
    setTaskText("");
    setTaskCategory(categories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={taskText}
        onChange={handleTextChange}
      />
      <select value={taskCategory} onChange={handleCategoryChange}>
        {categories
          .filter(category => category !== "All") // Exclude "All" category
          .map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
