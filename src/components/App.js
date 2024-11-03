import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit} 
      />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
