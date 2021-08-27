const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Consistent ordering in array
const pepsi: [string, boolean, number] = ['brwon', true, 40];

// Type Alias
// We can reuse this for ordering in array
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// Tuples not used often because it is hard to read at a glance for developer
const carSpecs: [number, number] = [400, 3354];
// Object preferred than Tuples
const carStats = {
  horsepower: 400,
  weight: 3354,
};

