// Both rest and spred use same "..." dots but
// in where we use make the differnce 
// e.g rest is used to store the rest of the value on function call where as spread is store expaded 
// https://www.youtube.com/watch?v=oob7bxg-Ctc ===> Rest vs spread.


const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// SPREAD IN FUNCTIONS
Math.max(nums) //NaN
Math.max(...nums) //53456
// Spread is basically used to just remove the outer bracket and put it inside the final output.

// SPREAD IN ARRAYS
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];


// SPREAD IN OBJECTS
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine };
//here last spread just overwrites if there is something common in between.

// {...[2,4,6]}
// equal to {0:2,1:4,2:6}

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
