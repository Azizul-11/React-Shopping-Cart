import React from "react";
import list from "../list";
import Card from "./Card";
// import "../Styles/Card.css";

const Shop = ({ handelClick }) => {
  return (
    <section>
      {list.map((item) => {
        return <Card item={item} key={item.id} handelClick={handelClick} />;
      })}
    </section>
  );
};

export default Shop;
