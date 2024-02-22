import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [fullTaskList, setFullTaskList] = useState(TASKS);
  const [categoriesToDisplay, setCategoriesToDisplay] = useState('All');


  //Creating the delete task feature (passed down as a callback function)
  function deleteTaskButton(id) {
    return (
      setFullTaskList((fullTaskList) => fullTaskList.filter((task) => {
        return task.text !== id
      })
      )
    )
  };


  //Creating the Filter feature (passed down as a callback function)
  function filterCategoriesClick(event) {
    setCategoriesToDisplay(event.target.value)
  };


  const taskToDisplay = fullTaskList.filter((task) => {
    if (categoriesToDisplay === 'All') {
      return true
    }
    else {
      return task.category === categoriesToDisplay
    }
  })



  //Controlled Form States
  const [details, setDetails] = useState("");
  const [categoryForm, setCategoryForm] = useState("");

  function handleDetailsChange(event) {
    // console.log(event.target.value)
    setDetails(event.target.value)
  };

  function handleCategoryChange(event) {
    setCategoryForm(event.target.value)
  };


  function addTaskTest(event) {
    event.preventDefault();
    // console.log(categoryForm);
    // console.log(details);
    // console.log(event.target);

    const newFullTaskList = [...fullTaskList, { text: details, category: categoryForm }]
    setFullTaskList(newFullTaskList);
    setDetails("");
  }



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterCategoriesClick={filterCategoriesClick} />
      <NewTaskForm
        categories={CATEGORIES}
        categoryFomr={categoryForm}
        details={details}
        handleDetailsChange={handleDetailsChange}
        handleCategoryChange={handleCategoryChange}
        addTaskTest={addTaskTest} />
      <TaskList tasks={taskToDisplay} deleteTaskButton={deleteTaskButton} />
    </div>
  );
}

export default App;
