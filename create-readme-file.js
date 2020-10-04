function createReadmeBody(userInput) {
    // build the body to match the user requirements
    let readme = "";
    if (userInput.Installation) readme += `\n\n## Installation\n${userInput.Installation}`;
    if (userInput.Usage) readme += `\n\n## Usage\n${userInput.Usage}`;
    if (userInput.License) readme += `\n\n## License\n${userInput.License}\n[![license](https://img.shields.io/github/license/${userInput.user}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.user}/${userInput.reponame}/blob/master/LICENSE)`;
    if (userInput.Contributing) readme += `\n\n## Contributing\n${userInput.Contributing}\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`;
    if (userInput.Tests) readme += `\n\n## Tests\n${userInput.Tests}`;
    return readme;
}

function createReadmeHeader(userInput) {
    // build the title, license and description
    let readme = `# ${userInput.reponame}
    \n[![license](https://img.shields.io/github/license/${userInput.username}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.username}/${userInput.reponame}/blob/master/LICENSE)
    \n${userInput.Description}
    \n## Table of Contents`;
    // build the table of contents to match the use input.
    if (userInput.Installation) readme += `\n* [Installation](#Installation)`;
    if (userInput.Usage) readme += `\n* [Usage](#Usage)`;
    if (userInput.License) readme += `\n* [License](#License)`;
    if (userInput.Contributing) readme += `\n* [Contributing](#Contributing)`;
    if (userInput.Tests) readme += `\n* [Tests](#Tests)`;
    readme += `\n* [Questions](#Questions)`
    return readme;
}

function createReadmeFooter(userInput) {
    const year = new Date().getFullYear();
    const readme = `\n\n## Questions
    \n* Follow me at: <a href="https://github.com/${userInput.username}" target="_blank">https://github.com/${userInput.username}</a>
    \n* Please email with any question at: ${userInput.email}
    \n© ${year} ${userInput.username}`;
    return readme;
}

function createReadme(userInput) {
    const header = createReadmeHeader(userInput);
    const body = createReadmeBody(userInput);
    const footer = createReadmeFooter(userInput);
    return header + body + footer;
}

module.exports = {
    createReadme: function (userInput) {
        return createReadme(userInput);
    },
};