import React, { useState } from "react";
import "./styles.css";

const cuisineData = {
  Chinese: [
    {
      name: "Dumplings 🥟",
      description:
        "A dish that consist of pieces of dough wrapped around a filling",
      rating: "5/5"
    },
    {
      name: "Noodles 🍜",
      description:
        "A type of food made from unleavened dough which is rolled flat and cut.",
      rating: "4.5/5"
    },
    {
      name: "Spring Rolls 🌯",
      description:
        "A large variety of filled, rolled appetizers or dim sum found in East Asian.",
      rating: "4/5"
    },
    {
      name: "fried rice 🥘",
      description: "A cooked rice mixed with veggies.",
      rating: "4/5"
    }
  ],
  Italian: [
    {
      name: "Margherita Pizza 🍕",
      description:
        "A typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese,etc.",
      rating: "5/5"
    },
    {
      name: "White Sauce Pasta 🍲",
      description: "Pasta coated in sauce made with butter, flour and milk",
      rating: "5/5"
    },
    {
      name: "Spaghetti Aglio e olio  🍝",
      description:
        "Spaghetti aglio e olio translates to spaghetti with garlic and oil",
      rating: "4.5/5"
    }
  ],
  Indian: [
    {
      name: "Malai Kofta 🍲",
      description:
        "North Indian creamy curry recipe made with aloo or paneer balls.",
      rating: "5/5"
    },
    {
      name: "Rajma Chawal 🍛",
      description: "North Indian dish made with kidney beans.",
      rating: "4.5/5"
    },
    {
      name: "Palak Panner 🍵",
      description:
        "Classic curry dish from North Indian cuisine made with fresh spinach",
      rating: "4.5/5"
    },
    {
      name: "Dal Makhani 🥘",
      description: "North Indian Punjabi cuisine made with Whole Black Lentils",
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
                margin: "1rem 1rem",
                borderRadius: "0.5rem",
                fontWeight: "bold"
              }}
            >
              <div>Dish Name: {dish.name} </div>
              <div>Description: {dish.description}</div>
              <div>Rating: {dish.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
