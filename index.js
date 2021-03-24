const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const renderPage = require("./renderPage.js");

const team = [];
// let teamTitle = "";


function managerData(){ 
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
      // teamTitle = managerAnswers.teamTitle;
      console.log("Now we will ask for employee information.");
      // console.log(team);
      askData()
    });
  }

function internData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "name of the employee?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the employee ID?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is the employee email?",
        name: "internEmail",
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
     
        const intern = new Intern(
          answers.internName,
          answers.internID,
          answers.internEmail,
          answers.school
        );
        team.push(intern);
        // console.log(team);
      
      if (answers.newEmployee === true){
        askData()
      }else {
        createPage();
      }
    });
}

function engineerData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "name of the employee?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the employee ID?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is the employee email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "what is the Engineer github?",
        name: "github",
      },
      {
        type: "confirm",
        name: "newEmployee",
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.github
        );
        team.push(engineer);
        // console.log(team);
      if (answers.newEmployee === true){
        askData()
      }else {
        createPage();
      }
    });
}

const menu = [
  {
    type: "list",
    message: "Menu",
    name: "menu",
    choices: ["add intern", "add engineer"],
  },
];

function askData() {
  inquirer.prompt(menu).then((data) => {
    if (data.menu === "add engineer") {
      engineerData();
    } else if (data.menu === "add intern") {
      internData();
    } 
  });
}

function createPage() {
  fs.writeFileSync("./dist/team.html", renderPage(team), "UTF-8");
}

function init() {
  managerData();
}

init();