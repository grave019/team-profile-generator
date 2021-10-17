module.exports = {

employeeQuestions: [
{
    type:"confirm",
    name:"manager",
    message:"Would you like to add a manager?",
    
},
],

managerQuestions: [ 
{
    type:"input",
    name:"name",
    message:"Enter the team manager's Name.",
    validate: (value) => {if (value) {return true} else
    {return console.log("Please enter a valid manager name.")}}
},
{
    type:"input",
    name:"id",
    message:"What is the manager's id?",
    validate: (value) => {if (value) {return true} else
    {return console.log("Please enter a valid id.")}}
},
{
    type:"input",
    name:"email",
    message:"What is the team Manager's email?",
    validate: (value) => {if (value) {return true} else
    {return console.log("Please enter a valid email.")}}
},
{
    type:"input",
    name:"officeNumber",
    message:"what is the team manager's office number?",
    validate: (value) => {if (value) {return true} else
    {return console.log("Please enter a valid office number.")}}
}],


engineerQuestions : [ 
    {
        type:"input",
        name:"name",
        message:"Enter the engineer's name.",
        validate: (value) => {if (value) {return true} else
        {return console.log("Please enter a valid name for engineer.")}}
    },
    {
        type:"input",
        name:"id",
        message:"What is the engineer's id?",
        validate: (value) => {if (value) {return true} else
        {return console.log("Please enter a valid id for engineer.")}}
    },
    {
        type:"input",
        name:"email",
        message:"What is the team Engineer's email?"
        validate: (value) => {if (value) {return true} else
        {return console.log("Please enter a valid email for engineer.")}}
    },
    {
        type:"input",
        name:"github",
        message:"what is the engineers github username?",
        validate: (value) => {if (value) {return true} else
        {return console.log("Please enter a valid github username.")}}
    }],

internQuestions : [ 
        {
            type:"input",
            name:"name",
            message:"Enter the intern's name.",
            //Validation Here
        },
        {
            type:"input",
            name:"id",
            message:"What is the intern's id?",
            //Validation Here
        },
        {
            type:"input",
            name:"email",
            message:"What is the team intern's email?"
        },
        {
            type:"input",
            name:"school",
            message:"What is the intern's school?",
            //validation here
        }],
}