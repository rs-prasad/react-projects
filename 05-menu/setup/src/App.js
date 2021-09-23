import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => getCategories(items), []);

  const getCategories = (data) => {
    let categoriesList = data.map((item) => item.category);
    categoriesList = [...new Set(categoriesList)];
    categoriesList.unshift("All");
    setCategories(categoriesList);
  };
  const filterItems = (category) => {
    let newItems = items;
    if (category !== "All") {
      newItems = items.filter((item) => item.category === category);
    }
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
