const fs = require("fs");

function renderPage(team) {
  let employees = "";
  for (let i = 0; i < team.length; i++) {
       if (team[i].role === "Manager") {
      `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${team[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item">Office number: ${team[i].officeNumber}</li>                   
                </ul>
            </div>
        </div>`;
    }
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
                    <li class="list-group-item">Office number: ${team[i].github}</li>                    
                </ul>
            </div>
        </div>`;
    }
    if (team[i].role === "Intern") {
      `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${team[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${team[i].role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${team[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
                    <li class="list-group-item">Office number: ${team[i].school}</li>              
                </ul>
            </div>
        </div>`;
    }
  }
  let page = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
  </head>
  <body>
      <h1 id = "teamName"></h1>
  
      <div class="container">
          <!-- Content here -->
          ${employees}
        </div>
  
      
  </body>
  </html>`;

  return page;
}

module.exports = renderPage;
