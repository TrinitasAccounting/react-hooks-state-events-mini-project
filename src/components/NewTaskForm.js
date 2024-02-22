import React from "react";

function NewTaskForm({ categories, details, handleDetailsChange, categoryForm, handleCategoryChange, addTaskTest }) {

  const renderCategoryElements = categories.map((categ) => {
    if (categ !== 'All') {
      return <option key={categ} value={categ}>{categ}</option>
    }
  })


  return (
    <form className="new-task-form" onSubmit={addTaskTest}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {renderCategoryElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
