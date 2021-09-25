import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import Section from "./Section";
function App() {
  const [people, setPeople] = useState(data);
  //const [index, setIndex] = useState(1);
  /*const check = (num) => {
    if (num < 0) {
      return num + people.length;
    }
    return num % people.length;
  };*/

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <Section people={people} />
    </section>
  );
}

export default App;
