/*
    CIT 281 Project 1
    Name: Steven Shinmachi
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

console.log(lowerAlpha[getRandomInteger(5, 26)]) 

// used 26 for max value because max is exclusive; need to be max + 1 so 25 + 1 = 26