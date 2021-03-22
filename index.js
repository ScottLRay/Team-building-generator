const inquirer = require("inquirer");
const fs = require("fs")

const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const prompt = require("./prompt.js")

const teamMambers = [];
let manager;
let teamTitle;


