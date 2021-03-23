const inquirer = require("inquirer");
const fs = require("fs");


const Prompts = require("./prompt.js")
const renderPage = require("./renderPage.js")

function init(){
    inquirer.prompt(Prompts).then(renderPage).then(createPage())
}

init()