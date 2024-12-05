// Write your solution here!
// helpers.js

// Initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// Destructive functions:

// Appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions:

// Appends a cat to the cats array and returns a new array
function appendCat(name) {
  return [...cats, name];
}

// Prepends a cat to the cats array and returns a new array
function prependCat(name) {
  return [name, ...cats];
}

// Removes the last cat from the cats array and returns a new array
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Removes the first cat from the cats array and returns a new array
function removeFirstCat() {
  return cats.slice(1);
}

