import React, { useState } from "react";
import "./styles.css";

const cuisineData = {
  Chinese: [
    {
      name: "Dumplings 🥟",
      rating: "5/5"
    },
    {
      name: "Noodles 🍜",
      rating: "4.5/5"
    },
    {
      name: "Spring Rolls 🌯",
      rating: "4/5"
    },
    {
      name: "fried rice 🥘",
      rating: "4/5"
    }
  ],
  Italian: [
    {
      name: "Margherita Pizza 🍕",
      rating: "5/5"
    },
    {
      name: "White Sauce Pasta 🍲",
      rating: "5/5"
    },
    {
      name: "Spaghetti Aglio e olio  🍝",
      rating: "4.5/5"
    }
  ],
  Indian: [
    {
      name: "Malai Kofta 🍲",
      rating: "5/5"
    },
    {
      name: "Rajma Chawal 🍛",
      rating: "4.5/5"
    },
    {
      name: "Palak Panner 🍵",
      rating: "4.5/5"
    },
    {
      name: "Dal Makhani 🥘",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [cuisineType, setType] = useState("Chinese");

  function cuisineClickHandler(cuisine) {
    setType(cuisine);
  }
  return (
    <div className="App">
      <h1>Hungry Coder</h1>
      <div>
        {Object.keys(cuisineData).map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => cuisineClickHandler(cuisine)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 2rem",
              border: "2px solid gray",
              borderRadius: "0.5rem",
              margin: " 1rem 1.5rem"
            }}
          >
            {cuisine}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul>
          {" "}
          {cuisineData[cuisineType].map((dish) => (
            <li
              key={dish.name}
              style={{
                padding: "1rem",
                border: "2px solid black",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <div> {dish.name} </div>
              <div> {dish.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
