// Declare and initialize the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Destructively append a cat to the end
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Destructively prepend a cat to the beginning
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Destructively remove the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Destructively remove the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat without modifying the original array
function appendCat(name) {
  return [...cats, name]; // Returns a new array with 'name' added at the end
}

// Prepend a cat without modifying the original array
function prependCat(name) {
  return [name, ...cats]; // Returns a new array with 'name' added at the beginning
}

// Remove the last cat without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array without the last element
}

// Remove the first cat without modifying the original array
function removeFirstCat() {
  return cats.slice(1); // Returns a new array without the first element
}
