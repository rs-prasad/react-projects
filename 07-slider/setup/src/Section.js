import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import React from "react";

const Section = ({ people }) => {
  //console.log(people);
  const [index, setIndex] = useState(0);
  const check = (num) => {
    if (num < 0) {
      return num + people.length;
    }
    return num % people.length;
  };
  return (
    <section className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        } else if (
          personIndex === index - 1 ||
          (personIndex == people.length - 1 && index === 0)
        ) {
          position = "lastSlide";
        }

        //code
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="prev" onClick={() => setIndex(check(index - 1))}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(check(index + 1))}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Section;
