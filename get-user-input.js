const inquirer = require("inquirer");
const axios = require("axios");

function promptInput(question) {
    return inquirer.prompt([
        {
            type: "input",
            message: `${question}`,
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

async function promptUserGitHub() {
    // prompt for user git hub name
    const { answer: username } = await promptInput("Please enter your GitHub username:");
    var email = "";
    // use the git repos and email to reduce user inputs and focus on created repos
    try {
        const queryUrlRepos = `https://api.github.com/users/${username}/repos`;
        const responseRepos = await axios.get(queryUrlRepos);
        const queryUrlUser = `https://api.github.com/users/${username}`;
        const responseUser = await axios.get(queryUrlUser);
        var { email } = responseUser;
        // only public email address are avaliable via git api, although found even though me email is public, it still came back null
        if (!email) {
            var { answer: email } = await promptInput("Please enter your email address:");
        }
        // extract only the repo name to a list and prompt user for the repo to create the readme for
        const repoNames = responseRepos.data.map(repo => repo.name);
        const { reponame } = await promptRepo(repoNames);
        // prompt user for sections to create, may not want each section all the time
        const readmeOptional = await promptReadmeOptional();
        // prompt user for sections to create, may not want each section all the time
        const { answer: outputPath } = await promptInput("Please enter output path (optional):");
        // combined list of readme for creations
        const readmeSections = ["Description", ...readmeOptional.readmeOptional];
        const userInput = {
            reponame: reponame,
            email: email,
            username: username,
            outputPath: outputPath
        }
        if (readmeSections.includes("Description")) {
            const { answer } = await promptInput("Please enter eye catching description:");
            userInput.Description = answer;
        }
        if (readmeSections.includes("Installation")) {
            const { answer } = await promptInput("Please enter steps required to install the project:");
            userInput.Installation = answer;
        }
        if (readmeSections.includes("Usage")) {
            const { answer } = await promptInput("Please enter instructions and examples for use:");
            userInput.Usage = answer;
        }
        if (readmeSections.includes("License")) {
            const { answer } = await promptInput("Please enter additional licensing infor (a Badge will be displayed by default):");
            userInput.License = answer + " "; //spaced added to ensure this section is created.
        }
        if (readmeSections.includes("Contributing")) {
            const { answer } = await promptInput("Please enter additional contributing guidelines (a Conventry Badge will be displayed by default):");
            userInput.Contributing = answer + " "; //spaced added to ensure this section is created.
        }
        if (readmeSections.includes("Tests")) {
            const { answer } = await promptInput("Please enter tests for the application and how to run:");
            userInput.Tests = answer;
        }
        return userInput;
    }
    catch (err) {
        console.log("GitHub user name: ", err.response.statusText);
        return;
    }
}

module.exports = {
    promptUserGitHub: promptUserGitHub
};
