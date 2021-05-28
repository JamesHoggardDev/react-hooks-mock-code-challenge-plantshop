import React, { useState } from "react";

function PlantCard({plant}) {
  const [isInStock, setisInStock] = useState(true)
  const { id, name, image, price } = plant;

  function handleToggleStock(){
    setisInStock((isInStock) => !isInStock);
  }

  return (
    <li className="card" key={id}>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button onClick={handleToggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

