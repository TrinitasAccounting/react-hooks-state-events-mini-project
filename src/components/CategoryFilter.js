import React from "react";

function CategoryFilter({ categories, filterCategoriesClick }) {

  const renderCategories = categories.map((categ) => {
    return (
      <button key={categ} className="" value={categ} onClick={filterCategoriesClick}>{categ}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {renderCategories}
    </div>
  );
}

export default CategoryFilter;
