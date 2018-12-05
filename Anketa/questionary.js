'use strict';

var personInformation = {};

while (!personInformation.surname) {
    personInformation.surname = prompt("Enter your surname:").trim();
}

while (!personInformation.firstName) {
    personInformation.firstName = prompt("Enter your first name:").trim();
}

while (!personInformation.fatherName) {
    personInformation.fatherName = prompt("Enter your father's name:").trim();
}

while (!isFinite(personInformation.age) || personInformation.age < 0) {
    personInformation.age = +prompt("Enter your age:");
}

personInformation.ageInDays = personInformation.age * 365;
personInformation.ageInFuture = personInformation.age + 5;

personInformation.genderMale = confirm("Are you male?");

personInformation.gender = personInformation.genderMale ? "male" : "female";

personInformation.isRetired = (((personInformation.gender == "male") && (personInformation.age >= 60)) ||
                              ((personInformation.gender == "female") && (personInformation.age >= 55))) ? "yes" : "no";

alert("Your full name: " + personInformation.surname + ' ' + personInformation.firstName + ' ' + personInformation.fatherName +
    "\nYour age: " + personInformation.age +
    "\nYour age in days: " + personInformation.ageInDays +
    "\nIn 5 years you will be: " + personInformation.ageInFuture +
    "\nYour gender: " + personInformation.gender +
    "\nAre you retired: " + personInformation.isRetired);