const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Employee")
const Intern = require("./lib/Intern")
// import additional Employees
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");


//controlls choices
menu = () => {
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Enter the team manager's Name.",
            //Validation Here
        },
        {
            type:"input",
            name:"id",
            message:"What is the manager's id?",
            //Validation Here
        },
        {
            type:"input",
            name:"email",
            message:"What is the team Manager's email?"
        },
        {
            type:"input",
            name:"officeNumber",
            message:"what is the team manager's office number?",
            //validation here
        },
    ]).then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber)
    })
}

menu = () => {}