const fs = require('fs');

const generatePage = (employees) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>team profile generator</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <section class="container">
        ${generateEmployeeCards(employees)}
    </section>

</body>

</html>
`;
}

const generateEmployeeCard = (employee) => {
    return `
    <div class=" card shadow bg-white rounded">
    <div class="card-header">
            <h2>${employee.getName()}</h2>
            <h3>${employee.getRole()}</h3>
        <div class="card small-card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">email: ${employee.getEmail()}</li>
                <li class="list-group-item"> </li>
            </ul>
        </div>
    </div>
</div>`;
        
};

const generateEmployeeCards = (employees) => {
    let employeeCards = '';
    employees.forEach(employee => {
        employeeCards += generateEmployeeCard(employee) 
    });
    return employeeCards;
};





  
  module.exports = generatePage;