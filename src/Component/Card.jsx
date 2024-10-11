import React from "react";
import "../Styles/Card.css";

const Card = ({ item , handelClick}) => {
    const { img, title, author, price } = item;

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>Price- {price} Rs</p>
        <button onClick={()=> handelClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
