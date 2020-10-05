const inquirer = require("inquirer");
const axios = require("axios");

async function getInput(question) {
    const { answer } = await promptInputQuestion(question);
    if (answer) {
        const { answer } = await promptInputEditor();
        return answer + " ";
    }
    else {
        const { answer } = await promptInput();
        return answer + " ";
    }
}

function promptInputQuestion(question) {
    return inquirer.prompt([
        {
            type: "confirm",
            message: `${question} Mult-line(y) Single-line (n)`,
            name: "answer",
        }
    ]);
}

function promptInput() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Input:",
            name: "answer"
        }
    ]);
}

function promptInputMessage(mesage) {
    return inquirer.prompt([
        {
            type: "input",
            message: mesage,
            name: "answer"
        }
    ]);
}

function promptInputEditor() {
    return inquirer.prompt([
        {
            type: "editor",
            message: "Input:",
            name: "answer"
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

async function promptUserReposByName(username) {
    try {
        const queryUrlRepos = `https://api.github.com/users/${username}/repos`;
        const responseRepos = await axios.get(queryUrlRepos);
        return responseRepos;
    }
    catch (err) {
        console.log("GitHub user repos: ", err.response.statusText);
        return;
    }
}

async function promptUserEmailByName(username) {
    try {
        const queryUrlUser = `https://api.github.com/users/${username}`;
        const responseUser = await axios.get(queryUrlUser);
        return responseUser.email;
    }
    catch (err) {
        console.log("GitHub user email: ", err.response.statusText);
        return;
    }
}

async function promptUserGitHub() {
    // prompt for user git hub name
    const { answer: username } = await promptInputMessage("Please enter your GitHub username:");
    // use the git repos and email to reduce user inputs and focus on created repos
    try {
        const responseRepos = await promptUserReposByName(username);
        if (!responseRepos) return;
        const responseEmail = await promptUserEmailByName(username)
        var email = responseEmail;
        // only public email address are avaliable via git api, although found even though me email is public, it still came back null
        if (!email) {
            var { answer: email } = await promptInputMessage("Please enter your email address:");
        }
        // extract only the repo name to a list and prompt user for the repo to create the readme for
        const repoNames = responseRepos.data.map(repo => repo.name);
        const { reponame } = await promptRepo(repoNames);
        // prompt user for sections to create, may not want each section all the time
        const readmeOptional = await promptReadmeOptional();
        // prompt for path to place the readme file.
        const { answer: outputPath } = await promptInputMessage("Please enter output path (optional):");
        // combined list of readme for creations
        const readmeSections = ["Description", ...readmeOptional.readmeOptional];
        const userInput = {
            reponame: reponame,
            email: email,
            username: username,
            outputPath: outputPath
        }
        if (readmeSections.includes("Description")) {
            userInput.Description = await getInput("Please enter eye catching description:")
        }
        if (readmeSections.includes("Installation")) {
            userInput.Installation = await getInput("Please enter steps required to install the project:")
        }
        if (readmeSections.includes("Usage")) {
            userInput.Usage = await getInput("Please enter instructions and examples for use:");
            userInput.Usage = answer + " ";
        }
        if (readmeSections.includes("License")) {
            userInput.License = await getInput("Please enter additional licensing infor (a Badge will be displayed by default):");
        }
        if (readmeSections.includes("Contributing")) {
            userInput.Contributing = await getInput("Please enter additional contributing guidelines (a Conventry Badge will be displayed by default):");
        }
        if (readmeSections.includes("Tests")) {
            userInput.Tests = await getInput("Please enter tests for the application and how to run:");
        }
        return userInput;
    }
    catch (err) {
        console.log("Failed to get user inputs: ", err);
        return;
    }
}

module.exports = {
    promptUserGitHub: promptUserGitHub
};
