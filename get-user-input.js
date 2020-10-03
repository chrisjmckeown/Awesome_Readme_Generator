const inquirer = require("inquirer");
const axios = require("axios");

// function promptReadmeInputs() {
//     return inquirer.prompt([
//         {
//             type: "input",
//             message: "Please enter your git user name:",
//             name: "gitUserName"
//         },
//         {
//             type: "input",
//             message: "Please enter email address for questions:",
//             name: "emailAddress"
//         },
//         {
//             type: "input",
//             message: "Please enter the title of your repo:",
//             name: "reponame"
//         },
//         {
//             type: "input",
//             message: "Please enter a short description of your repo:",
//             name: "shortDescription"
//         },
//         {
//             type: "input",
//             message: "Please enter installation information:",
//             name: "installation"
//         },
//         {
//             type: "input",
//             message: "Please enter usage information:",
//             name: "usage"
//         },
//         {
//             type: "input",
//             message: "Please enter additional license information:",
//             name: "license"
//         },
//         {
//             type: "input",
//             message: "Please enter contributing information:",
//             name: "contributing"
//         },
//         {
//             type: "list",
//             message: "Include badge to code_of_conduct.md?",
//             name: "contributingBadge",
//             choices: [
//                 "yes",
//                 "no"
//             ]
//         },
//         {
//             type: "input",
//             message: "Please enter contributing information:",
//             name: "contributing"
//         },
//         {
//             type: "input",
//             message: "Please enter potential tests to run:",
//             name: "tests"
//         }
//     ]);
// }
function promptInputs(section) {
    return inquirer.prompt([
        {
            type: "input",
            message: `Please enter ${section}:`,
            name: section
        }
    ]);
}

function promptUserName() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your GitHub username:",
            name: "username"
        }
    ]);
}

function promptEmail() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Please enter your email address:",
            name: "email"
        }
    ]);
}

function promptRepo(repoNames) {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select the repo:",
            name: "reponame",
            choices: [
                ...repoNames
            ]
        }
    ]);
}

function promptReadmeOptional() {
    return inquirer.prompt([
        {
            type: "checkbox",
            message: "Which optional section would you like to create?",
            name: "readmeOptional",
            choices: [
                "Installation",
                "Usage",
                "License",
                "Contributing",
                "Tests"
            ]
        },
    ]);
}

async function promptUserGitHub() {
    // prompt for user git hub name
    const { username } = await promptUserName();
    // use the git repos and email to reduce user inputs and focus on created repos
    const queryUrlRepos = `https://api.github.com/users/${username}/repos`;
    const responseRepos = await axios.get(queryUrlRepos);
    const queryUrlUser = `https://api.github.com/users/${username}`;
    const responseUser = await axios.get(queryUrlUser);
    var { email } = responseUser;
    // only public email address are avaliable via git api, although found even though me email is public, it still came back null
    if (!email) {
        var { email } = await promptEmail();
    }
    // extract only the repo name to a list and prompt user for the repo to create the readme for
    const repoNames = responseRepos.data.map(repo => repo.name);
    const { reponame } = await promptRepo(repoNames);
    // prompt user for sections to create, may not want each section all the time
    const readmeOptional = await promptReadmeOptional();
    // combined list of readme for creations
    const readmeSections = ["Description", ...readmeOptional.readmeOptional];
    const userInput = {
        reponame: reponame,
        email: email,
        username: username
    }
    for (var section of readmeSections) {
        switch (section) {
            case "Description":
                const { Description } = await promptInputs(section);
                userInput.Description = Description;
                break;
            case "Installation":
                const { Installation } = await promptInputs(section);
                userInput.Installation = Installation;
                break;
            case "Usage":
                const { Usage } = await promptInputs(section);
                userInput.Usage = Usage;
                break;
            case "License":
                const { License } = await promptInputs(section);
                userInput.License = License;
                break;
            case "Contributing":
                const { Contributing } = await promptInputs(section);
                userInput.Contributing = Contributing;
                break;
            case "Tests":
                const { Tests } = await promptInputs(section);
                userInput.Tests = Tests;
                break;
            default:
        }
    }
    return userInput;
}

module.exports = {
    promptUserGitHub: promptUserGitHub
};
