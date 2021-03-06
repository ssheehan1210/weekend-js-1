// weekend-js-1
// Long_Weekend covering loops, functions, and datatypes



// Conceptual Questions

// How do we assign a value to a variable?
	// First you set up the variable with either 'const' or 'let', depending on whether or not that variable's value could change later on.
	// After typing out the name of the variable, place an equals sign (=) and then assign what the value is in accordance to its data type.

// How do we change the value of a variable?
	// To change the value without straight up reassigning the entire variable, then make the variable equal itself plus whatever changes to it you want.
	// Example: numberVariable = numberVariable + 7; (calling numberVariable from then on would return the resulting sum of it plus 7)

// How do we assign an existing variable to a new variable?
	// If the variable was set up with 'const', then in most cases you will need to change it to 'let' so its value can change later on in the file.
	// Otherwise, just reassign a value to the variable in the same or similar manner as it was first made (i.e. variableName = newValue;).


// Strings

// Create a variable called firstVariable.
//   assign it the value of a string => "Hello World"
//   change the value of this variable to a number.
//   store the value of firstVariable into a new variable called secondVariable
//   change the value of secondVariable to a string.
//   What is the value of firstVariable?
let firstVariable = "Hello World";
firstVariable = 8;
let secondVariable = firstVariable;
secondVariable = "Greetings World";
firstVariable; // The value equals the number 8.

// Create a variable called yourName and set it equal to your name as a string.
//   Write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
//   ex: Hello, my name is Jean Valjean
const yourName = "Sam Sheehan";
console.log("Hello, my name is " + yourName);



// Booleans

// Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. 👋
	const a = 4;
	const b = 53;
	const c = 57;
	const d = 16;
	const e = 'Kevin';
// 1) a ___ b;
	a < b;
// 2) c ___ d;
	c > d;
// 3) 'Name' ___ 'Name';
	'Name' === 'Name';
// 4) a ___ b ___ c;
	a < b < c;
// 5) a ___ a ___ d;
	a < a + d;
// 6) e ___ 'Kevin';
	e === 'Kevin';
// 7) 48 ___ '48';
	48 !== '48';



// The Farm

// Write code that will print out "mooooo" if the variable animal is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, your should print out "Hey! You're not a cow."
let animal = "";
if (animal === "cow"){
	console.log("mooooo");
} else {
	console.log("Hey! You're not a cow.");
}
animal = "cow";
animal = "dog";



// Driver's Ed

// Write a variable that will hold a person's age.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// Change your code so that if the age is younger than 16, a message will print "Sorry, you're too young."
let personAge = 18;
if (personAge >= 16){
	console.log("Here are the keys.");
} else {
	console.log("Sorry, you're too young.");
}
personAge = 12;
personAge = 16;
personAge = 21;



// Just Loop It

// Write code that will print out all the numbers in the range 0 - 10.
// Write code that will print out all the numbers in the range 10 - 4000.
// Write code that will print out every other number in the range 10 - 4000.
for (let a = 0; a < 11; a++){
	console.log(a);
};
for (a = 10; a < 4001; a++){
	console.log(a);
};
for (a = 10; a < 4002; a += 2){
	console.log(a);
};



// Let's get even

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to the even number that says: "is an even number".
//   Example Output:
//   2 is an even number
//   4 is an even number
//   6 is an even number
for (let b = 2; b < 102; b += 2){
	console.log(b + " is an even number");
};



// Give me Five

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
//   Example Output:
//   I found a 5. High five!
//   I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
//   Example Output:
//   I found a 3. Three is a crowd
//   I found a 5. High five!
//   I found a 6. Three is a crowd
//   I found a 9. Three is a crowd
//   I found a 10. High five!
for (let c = 1; c < 101; c++){
	if (0 === c % 5 && c % 3 === 0){
		console.log("I found a " + c + ". High five!");
		console.log("I found a " + c + ". Three is a crowd");
	} else if (c % 5 === 0){
		console.log("I found a " + c + ". High five!");
	} else if (c % 3 === 0){
		console.log("I found a " + c + ". Three is a crowd");
	}
};



// Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//   Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//   Check your work! Your bank_account should have $10,100 in it.
let bank_account = 0;
for (let d = 1; d < 11; d++){
	bank_account += d;
};
console.log(bank_account);
bank_account = 0;
for (d = 1; d < 101; d++){
	bank_account += d * 2;
};
console.log(bank_account);



// Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
//   👏 You just solved Project Euler problem 1! 👏
let naturalNumberSum = 0;
for (let e = 1; e < 1000; e++){
	if (0 === e % 3 || e % 5 === 0){
		naturalNumberSum += e;
	}
};
naturalNumberSum; // The result is 233168


// Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["Nailed it!", "It's also a gun.", "Do you believe in destiny?"];



// Random

// Given the following array const randomThings = [1, 10, "Hello", true]
//   how do you access the 1st element in the array?
//   Change the value of "Hello" to "World".
//   Check the value of the array to make sure it updated the array.
const randomThings = [1, 10, "Hello", true];
randomThings[0]; // returns the value of the first element: 1
randomThings[2] = "World";
randomThings;



// We've Got Class

// Given the following array const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]
//   What would you write to access the 3rd element of the array?
//   Change the value of "Github" to "Octocat"
//   Add a new element, "Cloud City" to the array.
const ourClass = ["Gizmo", "Zoom", "Github", "Slack"];
ourClass[2]; // returns the value of the third element: "Github"
ourClass[2] = "Octocat";
ourClass.push("Cloud City");



// Mix It Up

// Given the following array const myArray = [5 ,10 ,500, 20]
// 	 using the push method, add the string "Egon" to the end of the array.
// 	 using a method, remove the string from the end of the array.
// 	 using the unshift method, add the string "Bob Marley" to the beginning of the array
// 	 using a different method, remove the string from the beginning of the array
// 	 use the reverse method on this array
const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.pop();
myArray.unshift("Bob Marley");
myArray.shift();
myArray.reverse();



// Biggie Smalls

// Write an if..else statement:
//   console.log little number if the number is entered is less than 100
//   If the number entered is 100 or more, alert big number.
let numberInput = 0;
if (numberInput < 100){
	console.log("little number");
} else {
	alert("big number");
}
numberInput = 50;
numberInput = 101;



// Monkey in the Middle:

// Write an if...else if...else statement:
//   console.log little number if the number entered is less than 5.
//   If the number entered is more than 10, log big number.
//   Otherwise, console.log "monkey".
let monkeyNumber = 2;
if (monkeyNumber < 5){
	console.log("little number");
} else if (monkeyNumber > 10){
	console.log("big number");
} else {
	console.log("monkey");
}
monkeyNumber = 15;
monkeyNumber = 7;



// What's in Your Closet?

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
const kristynShoe = kristynsCloset.shift();
kristynsCloset.splice(5, 0, "raybans"); // array.splice(start, deleteCount, item1, item2, ...)
kristynsCloset[4] = "stained knit hat";
thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][1];
console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1] + "!");
thomsCloset[1][2] = "Footie Pajamas";



// Functions

// printGreeting

// Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.
//   console.log(printGreeting("Slimer"));
//   => Hello there, Slimer!
const printGreeting = (name) => {
	return "Hello there, " + name + "!";
};
console.log(printGreeting("Slimer"));

// reverseWordOrder

// Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
//   console.log(reverseWordOrder("Ishmael me Call"));
//   => "Call me Ishmael"
//   console.log(reverseWordOrder("I use Lâncome on my comb"));
//   => "comb my on Lâncome use I"
const reverseWordOrder = (string) => {
	let reverseString = string.split(' ').reverse().join(' ');
	return reverseString;
};
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// calculate

// Write a function called calculate.
// This function should take three arguments, two numbers and a string.
// Name the parameters num1, num2, and operation.
// If the function receives the string "add" for the operation parameter, it will return the sum of num1 and num2.
// If the function receives the string "sub" for the operation parameter, it will return num1 minus num2.
// Do the same thing for multiplication "mult", division "div", and exponent "exp" (where num2 is the exponent of num1).
//   console.log(calculate(4, 3, "sub"));
//   => 1
//   console.log(calculate(4, 3, "exp"));
//   => 64
const calculate = (num1, num2, operation) => {
	if (operation === "add"){
		return num1 + num2;
	} else if (operation === "sub"){
		return num1 - num2;
	} else if (operation === "mult"){
		return num1 * num2;
	} else if (operation === "div"){
		return num1 / num2;
	} else if (operation === "exp"){
		return Math.pow(num1, num2);
	} else {
		console.log("Wrong operation input. Please use either 'add', 'sub', 'mult', 'div' or 'exp' to calculate.")
	}
};
console.log(calculate(4, 3, "sub"));
console.log(calculate(4, 3, "exp"));



// 1

// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
//   console.log(printCool("Captain Reynolds"));
//   => "Captain Reynolds is cool";
const printCool = (argument) => {
	return argument + " is cool";
};
console.log(printCool("Captain Reynolds"));

// 2

// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
//   console.log(calculateCube(5));
//   => 125
const calculateCube = (singleNumber) => {
	return singleNumber * singleNumber * singleNumber;
};
console.log(calculateCube(5));

// 3

// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
//   console.log(isAVowel("a"));
//   => true
const isAVowel = (character) => {
	if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U"){
		return true;
	} else {
		return false;
	}
};
console.log(isAVowel("a"));

// 4

// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
//   console.log(getTwoLengths("Hank", "Hippopopalous"));
//   => [4, 13]
const getTwoLengths = (str1, str2) => {
	const lengthArray = [str1.length, str2.length];
	return lengthArray;
};
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
//   console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//   => [5, 4, 2, 2, 4]
const getMultipleLengths = (strArr) => {
	const multipleLengthArray = [];
	for (f = 0; f < strArr.length; f++){
		multipleLengthArray.push(strArr[f].length);
	};
	return multipleLengthArray;
};
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// 6

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
//   console.log(maxOfThree(6, 9, 1));
//   => 9
const maxOfThree = (number1, number2, number3) => {
	const threeNumArray = [number1, number2, number3];
	threeNumArray.sort(function(a, b){return a - b});
	return threeNumArray[2];
};
console.log(maxOfThree(6, 9, 1));

// 7

// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
//   console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//   => "Peanutbutter"
const printLongestWord = (strArray) => {
	let longestWord = '';
	for (let g = 0; g < strArray.length; g++){
		if (strArray[g].length > longestWord.length){
			longestWord = strArray[g];
		}
	};
	return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// 8

// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
//   console.log(transmogrify(5, 3, 2));
//   => 225
const transmogrify = (firstNum, secondNum, thirdNum) => {
	const numberProduct = firstNum * secondNum;
	return Math.pow(numberProduct, thirdNum);
};
console.log(transmogrify(5, 3, 2));



// Objects

// Syntax

// List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.
//   Example: {} curly braces define the object.
const objectName = {
	prop1: value1,
	prop2: value2,
	prop3: value3
};
console.log("const - declares the object in the file.");
console.log("objectName - the assigned name for the entire object.");
console.log("{} - contains the properties and associated values that define what the object is (put semi-colon after the close bracket to indicate that the object is finished being defined).");
console.log("prop - the key attributes/characteristics/functions/properties that are present in the object.");
console.log(": - colons separate the key's (prop's) name from it's associated value.");
console.log("value - the associated values to each key prop that provide specific details on what configuration/type of attribute/characteristic/function/property it is.");
console.log(", - commas separate each key-value pair from each other so as to not confuse how they should be read in the code (the last value doesn't have a comma).");

// Me

// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.
//   The object would look something like this if we console logged it:
//   console.log(me);
//   => {name: "Kristyn", age: 98, email: "kristyn@foo.bar"}
// Using dot notation, access the name property in your object.
// Without writing directly into the object, update the value of age to be 1000 years old.
// Using dot notation, verify that age has been updated.
// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
// Access the value of "place of residence"
const me = {
	name: "Sam Sheehan",
	age: 25,
	email: "ssheehan1210@yahoo.com"
};
me.name;
me.age = 1000;
me.age;
me['place of residence'] = "Springfield";
me['place of residence'];


// Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
};
// Given the slimer object:
//   What would you write to access the name and console.log it?
//   What would you write to change the type to 'creature' (without changing it inside the object)
//   What would you write to add a key to the object called age, and set the age to 6?
//   console.log the object to make sure type is creature, and age is 6.
console.log(monster.name);
monster.type = "creature";
monster.age = 6;
console.log(monster.age);

// Ogres

// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
// Using objects, create models and have them interact.
//   how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
//   how would you model an ogre? Your ogre will want hitpoints.
//   Write a very small program that will simulate a battle between your adventurer and an ogre. You can use the same techniques you used in your landscaping game from the weekend.
//     When your adventurer's hitpoints reach 0 the game is over.
//     When your ogre's hitpoints reach 0 the game is over.
//   If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).
let adventurer = {
	name: "Thendrell Davenport",
	hitpoints: 30,
	weapons: [{
		weaponName: "scimitar (right hand)",
		weight: "light",
		damage: 15
	},
	{
		weaponName: "scimitar (left hand)",
		weight: "light",
		damage: 15
	}],
	speed: 3,
	playerDamageOutput() {
		let totalPlayerDamageOutput = 0;
		for (h = 0; h < adventurer.weapons.length; h++){
			totalPlayerDamageOutput += adventurer.weapons[h].damage;
		};
		return totalPlayerDamageOutput;
	}
};

let ogre = {
	name: "Drunk Ogre",
	hitpoints: 60,
	weapons: [{weaponName: "giant log", weight: "heavy", damage: 25}],
	speed: 1,
	ogreDamageOutput() {
		let totalOgreDamageOutput = 0;
		for (i = 0; i < ogre.weapons.length; i++){
			totalOgreDamageOutput += ogre.weapons[i].damage;
		};
		return totalOgreDamageOutput;
	}
};

const battleEngaged = (player, enemy) => {
	// set up turn order based on speed
	let turnOrder = [];
	let playerHP = player.hitpoints;
	let enemyHP = enemy.hitpoints
	if (player.speed > enemy.speed){
		turnOrder.push(player);
		turnOrder.push(enemy);
	} else {
		turnOrder.push(enemy);
		turnOrder.push(player);
	}

	// give current hp of combatants and commence the battle
	console.log("Beginning battle phase. Player HP: " + playerHP + ". Enemy HP: " + enemyHP + ".");

	// set up loop for fastest combatant to deplete other combatant hp based on damage output, then have other combatant do the same
	// return the final value based on who loses all their hp first
	// if both live, then print their current hp
	for (j = 0; j < turnOrder.length; j++){
		if (turnOrder[j] === player){
			let enemyDamageTaken = player.playerDamageOutput();
			enemyHP -= enemyDamageTaken;
			if (enemyHP === 0){
				return "Battle over. " + enemy.name + " has been defeated. VICTORY";
			} else {
				console.log("Player has finished attacking. Player HP: " + playerHP + ". Enemy HP: " + enemyHP + ".");
			}
		} else if (turnOrder[j] === enemy) {
			let playerDamageTaken = enemy.ogreDamageOutput();
			playerHP -= playerDamageTaken;
			if (playerHP === 0){
				return "Battle over. " + player.name + " has died. GAME OVER";
			} else {
				console.log("Enemy has finished attacking. Player HP: " + playerHP + ". Enemy HP: " + enemyHP + ".");
			}
		}
	};

	// if both live, then print their current hp.
	if (playerHP > 0 && enemyHP > 0){
		player.hitpoints = playerHP;
		enemy.hitpoints = enemyHP
		console.log("Current battle phase completed. Player HP: " + playerHP + ". Enemy HP: " + enemyHP + ". Engage the next battle phase when ready...");
	}
};

battleEngaged(adventurer, ogre);
console.log(adventurer.hitpoints);
console.log(ogre.hitpoints);

