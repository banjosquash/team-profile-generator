const fs = require('fs')

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [teamMember, memberRole] = profileDataArgs;

const generatePage = (teamMember, memberRole ) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>team profile generator</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <section class="team-members">

        <div class="member1">
            <h2>${teamMember}</h2>
            <h3>${memberRole}</h3>
            <ul class="team-items">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

        <div class="member2">
            <h2>${teamMember}</h2>
            <h3>${memberRole}</h3>
            <ul class="team-items">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

        
        <div class="member3">
            <h2>${teamMember}</h2>
            <h3>${memberRole}</h3>
            <ul class="team-items">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

        
        <div class="member4">
            <h2>${teamMember}</h2>
            <h3>${memberRole}</h3>
            <ul class="team-items">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>

        
        <div class="member5">
            <h2>${teamMember}</h2>
            <h3>${memberRole}</h3>
            <ul class="team-items">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    </section>

</body>

</html>
`;
}

fs.writeFile('index.html', generatePage(teamMember, memberRole), err => {
    if (err) throw err;
  
    console.log('Check out index.html to see the output!');
  });


  
  module.exports = generatePage;