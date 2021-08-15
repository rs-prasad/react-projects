import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </footer>
      <p>
        {readMore ? info : info.substring(0, 200)}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Not interested
      </button>
    </article>
  );
};

export default Tour;
