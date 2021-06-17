const animals = [
  {
    name: "cat",
    sound: "meow",
    req: {
      food: 2,
      water: 4
    }
  },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };
