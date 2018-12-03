'use strict';

var surname,
    firstName,
    fatherName,
    age,
    genderMale,
    ageInDays,
    ageInFuture,
    gender,
    isRetired,
    personInformation = {};

while (!surname) {
    surname = prompt("Enter your surname:").trim();
}

while (!firstName) {
    firstName = prompt("Enter your first name:").trim();
}

while (!fatherName) {
    fatherName = prompt("Enter your father's name:").trim();
}

while (!isFinite(age) || age < 0) {
    age = +prompt("Enter your age:");
}

ageInDays = age * 365;
ageInFuture = age + 5;

genderMale = confirm("Are you male?");

gender = genderMale ? "male" : "female";

if ( ( (gender == "male") && (age >= 60)) || ( (gender == "female") && (age >= 55))) {
    isRetired = "yes";
} else {
    isRetired = "no";
}

personInformation.surname = surname;
personInformation.firstName = firstName;
personInformation.fatherName = fatherName;
personInformation.age = age;
personInformation.ageInDays = ageInDays;
personInformation.ageInFuture = ageInFuture;
personInformation.gender = gender;
personInformation.isRetired = isRetired;

alert("Your full name: " + personInformation.surname + ' ' + personInformation.firstName + ' ' + personInformation.fatherName +
    "\nYour age: " + personInformation.age +
    "\nYour age in days: " + personInformation.ageInDays +
    "\nIn 5 years you will be: " + personInformation.ageInFuture +
    "\nYour gender: " + personInformation.gender +
    "\nAre you retired: " + personInformation.isRetired);
