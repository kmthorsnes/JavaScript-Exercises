//****************************************************
//Javascript Exercises #1//
//****************************************************

//Create an array and add three numbers to it.
var KalleArray = [16,5,1985];

//Use your array to return the second number.
KalleArray[1];

/* What data type?

123/12 =  number
"Things in quotes!"? = String
undefined = undefined (duuuh)

*/

//Write an if statement that returns true.
var Myfavoritenumber = 10;
var Favoritenumber = function (Favoritenumber) {
if (Myfavoritenumber = Favoritenumber){
return "True";
}
else {
return "False";
}
};
Favoritenumber(10);

//Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = []. Use a for loop to add our names to emptyArray. (Hint: n needs to be the length of the array. Google a helper method for finding the length of an array in Javascript. Is it the same as Ruby?)
var MyArray = ['Thomas', 'Amber', 'Raoul'];
var emptyArray = [];

for (var i=0; i<myArray.length; i++) {
  emptyArray.push(myArray);
}

//****************************************************
//Javascript Exercises #2//
//****************************************************

//Write a function that returns your first name. Call it.
function MyFirstname(firstname) {
  return firstname;
}

MyFirstname('Kalle');
//Write a new function that takes your name as an input. The function should return your first name, plus your last name, as one string. (Hint: strings can be combined with a +)
function myFullname (firstname, lastname) {
  return "Hi! My name is (what?), My name is (who?), My name is " + firstname + ' ' + lastname + '!';

}
myFullname('Kalle', 'Thorsnes');
