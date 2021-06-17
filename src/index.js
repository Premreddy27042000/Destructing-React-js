// import animals, { useAnimals } from "./data";

// const [cat, dog] = animals;
// // var cat = animals[0];
// // console.log(cat);
// // const { name: n, sound: sdf } = cat;
// // console.log(n);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// const { name = "fluffy", sound = "Buuur" } = cat;
// console.log(name);

// const {
//   name,
//   sound,
//   req: { food, water }
// } = cat;

// // console.log(req.food);
// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// console.log(cars);

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
