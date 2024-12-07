// Chapter 21 to 25
// Assignment 1
// let firstName = prompt("Please enter your first name:");
// let lastName = prompt("Please enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

// Assignment 2
// let phoneModel = prompt("What is your favorite mobile phone model?");
//         let length = phoneModel.length;
//         document.write("My favorite phone is: " + phoneModel + "<br>");
//         document.write("Length of string: " + length);

// Assignment 3
// let word = "Pakistani";
//         let index = word.indexOf("n");
//         document.write("Word: " + word + "<br>");
//         document.write("Index of letter 'n': " + index);

// Assignment 4
// let word = "Hello World";
//         let index = word.lastIndexOf("l");
//         document.write("Word: " + word + "<br>");
//         document.write("Index of letter 'l': " + index);

// Assignment 5
// let word = "Pakistani";
//         let character = word.charAt(3);
//         document.write("Word: " + word + "<br>");
//         document.write("Character at 3rd index: " + character);

// Assignment 6
// let firstName = prompt("Enter your first name:");
//         let lastName = prompt("Enter your last name:");
//         let fullName = firstName.concat(" ", lastName);
//         alert("Hello, " + fullName + "! Welcome!");

// Assignment 7
// let city = "Hyderabad";
//         let newCity = city.replace("Hyder", "Islam");
//         document.write("City: " + city + "<br>");
//         document.write("After replacement: " + newCity);

// Assignment 8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
//         let updatedMessage = message.replace(/and/g, "&");
//         document.write("Original Message: " + message + "<br><br>");
//         document.write("Updated Message: " + updatedMessage);

// Assignment 9
// let strValue = "472";
//         let numValue = Number(strValue);
//         document.write("String value: " + strValue + " (Type: " + typeof strValue + ")<br>");
//         document.write("Number value: " + numValue + " (Type: " + typeof numValue + ")");

// Assignment 10
// let userInput = prompt("Please enter some text:");
//         let capitalizedInput = userInput.toUpperCase();
//         document.write("Original input: " + userInput + "<br>");
//         document.write("Converted to uppercase: " + capitalizedInput);

// Assignment 11
        // let userInput = prompt("Please enter some text:");
        // function toTitleCase(str) {
        //     return str.split(' ').map(function(word) {
        //         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        //     }).join(' ');
        // }
        // let titleCaseInput = toTitleCase(userInput);
        // document.write("Original input: " + userInput + "<br>");
        // document.write("Converted to title case: " + titleCaseInput);

// Assignment 12
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write("Original number: " + num + "<br>");
// document.write("Converted and modified string: " + numString);

// Assignment 13
// function isValidUsername(username) {
//         const specialSymbols = ['@', '.', ',', '!'];
//         return !specialSymbols.some(symbol => username.includes(symbol));
//       }
//       let username = prompt("Enter your username:");
      
//       while (!isValidUsername(username)) {
//         username = prompt(
//           "Invalid username! Your username should not contain any of the following symbols: @ . , !\nPlease enter a valid username:"
//         );
//       }
      
//       console.log("Valid username stored:", username);

// Assignment 14
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];
// function searchItem(array, item) {
//   return array.some(element => element.toLowerCase() === item.toLowerCase());
// }
// const userInput = prompt("Enter the item you want to search for:");
// if (searchItem(A, userInput)) {
//   alert(`${userInput} is available in the list!`);
// } else {
//   alert(`${userInput} is not available in the list.`);
// }

// Assignment 15
// function isValidPassword(password) {
//         if (password.length < 6) {
//           return "Password must be at least 6 characters long.";
//         }
//         if (!isNaN(password[0])) {
//           return "Password should not start with a number.";
//         }
//         const hasLetter = /[a-zA-Z]/.test(password); // Check for alphabets
//         const hasNumber = /[0-9]/.test(password);    // Check for numbers
//         if (!hasLetter || !hasNumber) {
//           return "Password must contain both alphabets and numbers.";
//         }
//         return true;
//       }
//       let password = prompt("Enter your password:");
      
//       while (true) {
//         const validationResult = isValidPassword(password);
      
//         if (validationResult === true) {
//           alert("Password is valid!");
//           break; // Exit the loop
//         } else {
//           password = prompt(validationResult + "\nPlease enter a valid password:");
//         }
//       }
      
//       console.log("Your valid password is:", password);
      
// Assignment 16
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write("<h3>Array Elements:</h3>");
universityArray.forEach(element => {
  document.write(element + "<br>");
});

// Assignment 17
// let userInput = prompt("Enter a string:");

// if (userInput) {
//   let lastCharacter = userInput[userInput.length - 1];
//   alert("The last character of your input is: " + lastCharacter);
// } else {
//   alert("You did not enter any string.");
// }

// Assignment 18
// let sentence = "The quick brown fox jumps over the lazy dog";
// let lowerCaseSentence = sentence.toLowerCase();
// let words = lowerCaseSentence.split(" ");
// let count = words.filter(word => word === "the").length;
// console.log(`The word "the" appears ${count} time(s) in the sentence.`);

// Chapter 26 t0 30
// Assignment 1
// let userInput = prompt("Enter a positive integer:");
// let number = parseFloat(userInput);

// if (number > 0 && !isNaN(number)) {
//   let rounded = Math.round(number);
//   let floored = Math.floor(number);
//   let ceiled = Math.ceil(number);
//   document.write("<h3>Number Details:</h3>");
//   document.write("a. Number: " + number + "<br>");
//   document.write("b. Rounded-off value: " + rounded + "<br>");
//   document.write("c. Floor value: " + floored + "<br>");
//   document.write("d. Ceil value: " + ceiled + "<br>");
// } else {
//   document.write("Please enter a valid positive integer.");
// }

// Assignment 2
// let userInput = prompt("Enter a negative floating-point number:");
// let number = parseFloat(userInput);

// if (number < 0 && !isNaN(number)) {

//   let rounded = Math.round(number);
//   let floored = Math.floor(number);
//   let ceiled = Math.ceil(number);

//   document.write("<h3>Number Details:</h3>");
//   document.write("a. Number: " + number + "<br>");
//   document.write("b. Rounded-off value: " + rounded + "<br>");
//   document.write("c. Floor value: " + floored + "<br>");
//   document.write("d. Ceil value: " + ceiled + "<br>");
// } else {
//   document.write("Please enter a valid negative floating-point number.");
// }

// Assignment 3
// let userInput = prompt("Enter a number:");
// let number = parseFloat(userInput);

// if (!isNaN(number)) {
//   let absoluteValue = Math.abs(number);
//   document.write("<h3>Absolute Value:</h3>");
//   document.write("The absolute value of " + number + " is " + absoluteValue + ".");
// } else {
//   document.write("Please enter a valid number.");
// }

// Assignment 4
let diceValue = Math.floor(Math.random() * 6) + 1;
document.write("<h3>Dice Roll:</h3>");
document.write("You rolled a " + diceValue + ".");

// Assignment 5
let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
document.write("<h3>Coin Toss:</h3>");
document.write("The coin landed on: " + coinToss);

// Assignment 6
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<h3>Random Number:</h3>");
// document.write("Your random number is: " + randomNumber);

// Assignment 7
// let userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// let weight = parseFloat(userInput);

// if (!isNaN(weight)) {
//   document.write("<h3>Your Weight:</h3>");
//   document.write("Your weight is: " + weight + " kilograms.");
// } else {
//   document.write("<h3>Invalid Input:</h3>");
//   document.write("Please enter a valid weight.");
// }

// Assignment 8
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// if (userGuess === secretNumber) {
//   document.write("<h3>Congratulations!</h3>");
//   document.write("You guessed it right! The secret number was " + secretNumber + ".");
// } else {
//   document.write("<h3>Try Again!</h3>");
//   document.write("Your guess was incorrect. The secret number was " + secretNumber + ".");
// }
