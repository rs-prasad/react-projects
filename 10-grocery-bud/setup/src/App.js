import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: true,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Enter values", "danger");
    } else if (name && isEditing) {
      showAlert(true, "Item edited", "success");
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          } else {
            return item;
          }
        })
      );
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "Item added to list", "success");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ ...alert, show, msg, type });
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3000);
  };
  const clearList = () => {
    showAlert(true, "Empty List", "danger");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setList(list.filter((item) => item.id != id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            placeholder="Enter Item"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear all
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
