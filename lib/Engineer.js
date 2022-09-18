const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getRole(){
        const role = 'Engineer';
        return role;
    }
    getGithub(){
        const github = this.github
        return github;
    }
}
module.exports = Engineer;