module.exports = {

managerQuestions : [ 
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
}],

engineerQuestions : [ 
    {
        type:"input",
        name:"name",
        message:"Enter the engineer's name.",
        //Validation Here
    },
    {
        type:"input",
        name:"id",
        message:"What is the engineer's id?",
        //Validation Here
    },
    {
        type:"input",
        name:"email",
        message:"What is the team Engineer's email?"
    },
    {
        type:"input",
        name:"github",
        message:"what is the engineers github username?",
        //validation here
    }]
}