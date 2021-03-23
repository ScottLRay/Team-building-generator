const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const renderPage = require("./renderPage.js");

const team = [];

init();

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
      const manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerID,
        managerAnswers.managerEmail,
        managerAnswers.officeNumber
      );
      team.push(manager);
      teamTitle = managerAnswers.teamTitle;
      console.log("Now we will ask for employee information.");
      console.log(team);
    });
}

function internData() {
  inquirer
    .prompt([
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
        message: "what is the Intern school?",
        name: "school",
      },
      {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
      if (answers.employeeRole === "Intern") {
        const intern = new Intern(
          answers.employeeName,
          answers.employeeId,
          answers.employeeEmail,
          answers.school
        );
        team.push(intern);
      }
    });
}

function engineerData() {
  inquirer
    .prompt([
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
      },
    ])
    .then((answers) => {
      if (answers.employeeRole === "Engineer") {
        const engineer = new Engineer(
          answers.employeename,
          answers.employeeId,
          answers.employeeEmail,
          answers.github
        );
        team.push(engineer);
      }
    });
}

const menu = [
  {
    type: "list",
    message: "Menu",
    name: "menu",
    choices: ["add intern", "add engineer", "finish building team"],
  },
];

function askData() {
  prompt(menu).then((data) => {
    if (data.menu === "add engineer") {
      engineerData();
    } else if (data.menu === "add intern") {
      internData();
    } else {
      createPage();
    }
  });
}

function createPage() {
  fs.writeFileSync("./dist/team.html", renderPage(team), "UTF-8");
}

function init() {
  inquirer.prompt(managerData()).then(askData());
}
