const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your full name (copyright info):",
            name: "yourName"
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
            message: "Please enter technologies utilized:",
            name: "technologiesutilized"
        },
        {
            type: "input",
            message: "Please enter usage information:",
            name: "usage"
        },
        {
            type: "input",
            message: "Please enter a long description of your repo:",
            name: "longDescription"
        },
        {
            type: "input",
            message: "Please enter license information:",
            name: "license"
        },
        {
            type: "input",
            message: "Please enter contributing information:",
            name: "contributing"
        },
        {
            type: "input",
            message: "Please enter test information:",
            name: "tests"
        },
        {
            type: "input",
            message: "Please enter email address for questions:",
            name: "emailAddress"
        }
    ]);
}

module.exports = {
    promptUser: promptUser
};
