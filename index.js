const inquirer = require("inquirer");

const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const teamMambers = [];
let manager;
let teamTitle;

function managerData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of this team/project?",
        name: "teamTitle",
      },
      {
        type: "input",
        message: "Who is the manager of this project?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((managerAnswers) => {
      manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerID,
        managerAnswers.managerEmail,
        managerAnswers.officeNumber
      );
      teamTitle = managerAnswers.teamTitle;
      console.log("Now we will ask for employee information.");
      employeeData();
    });
}
function employeeData() {
  inquirer.prompt([
    {
      type: "list",
      message: "what is the employees role?",
      name: "employeeRole",
      choices: ["intern", "engineer"],
    },
    {
      type: "input",
      message: "name of the employee?",
      name: "employeeName",
    },
    {
      type: "input",
      message: "What is the employee ID?",
      name: "employeeID",
    },
    {
      type: "input",
      message: "What is the employee email?",
      name: "employeeEmail",
    },
    {
      type: "input",
      message: "what is the Engineer github?",
      name: "github",
      when: (userInput) => userInput.employeeRole === "Engineer",
    },
    {
      type: "input",
      message: "what is the Intern school?",
      name: "school",
      when: (userInput) => userInput.employeeRole === "intern",
    },
    {
      type: "confirm",
      name: "newEmployee",
      message: "Would you like to add another team member?",
    },
  ]).then(answers =>{
    if (answers.employeeRole === "Intern"){
      const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school)
      teamMambers.push(employee)
      
    }
  })
}
