const fs = require("fs");

function renderPage(team) {
  let employees = "";
  for (let i = 0; i < team.length; i++) {
    if (team[i].role === "Engineer") {
      employees += `
    <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${team[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item">Office number: ${team[i].officeNumber}</li>                    </ul>
            </div>
        </div>`;
    }
    if(team[i].role === "Manager"){
        `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${team[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item">Office number: ${team[i].officeNumber}</li>                    </ul>
            </div>
        </div>`
    }
    if(team[i].role === "Intern"){
        `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${team[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item">Office number: ${team[i].officeNumber}</li>                    </ul>
            </div>
        </div>`
    }
  }
  let page = `HTML PAGE
BODY
${employees}`;
  return page;
}

function createPage() {
    fs.writeFileSync('./dist/team.html', renderPage(team), 'UTF-8');
 }

module.exports = renderPage;
