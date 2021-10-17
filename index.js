const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Employee");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {employeeQuestions, managerQuestions, engineerQuestions, internQuestions} = require("./src/questions");


//controlls choices
menu = () => {
    inquirer.prompt(questions.managerQuestions).then(({name,id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
    })
}

menu = () => {
    inquirer.prompt(questions.engineerQuestions).then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
    })
}

menu = () => {
    inquirer.prompt(questions.internQuestions).then(({name, id, email, school}) => {
        const intern = new intern(name, id, email, school);
    })
}


