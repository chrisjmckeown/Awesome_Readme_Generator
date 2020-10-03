const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your git user name:",
            name: "gitUserName"
        },
        {
            type: "input",
            message: "Please enter email address for questions:",
            name: "emailAddress"
        },
        {
            type: "input",
            message: "Please enter the title of your repo:",
            name: "reponame"
        },
        {
            type: "input",
            message: "Please enter a short description of your repo:",
            name: "shortDescription"
        },
        {
            type: "input",
            message: "Please enter installation information:",
            name: "installation"
        },
        {
            type: "input",
            message: "Please enter usage information:",
            name: "usage"
        },
        {
            type: "input",
            message: "Please enter additional license information:",
            name: "license"
        },
        {
            type: "input",
            message: "Please enter contributing information:",
            name: "contributing"
        },
        {
            type: "list",
            message: "Include badge to code_of_conduct.md?",
            name: "contributingBadge",
            choices: [
                "yes",
                "no"
            ]
        },
        {
            type: "input",
            message: "Please enter contributing information:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Please enter potential tests to run:",
            name: "tests"
        }
    ]);
}

module.exports = {
    promptUser: promptUser
};
