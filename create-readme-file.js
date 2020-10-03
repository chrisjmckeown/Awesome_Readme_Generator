function createReadme(userInput) {
    let readme =
        `# ${userInput.reponame}
[![license](https://img.shields.io/github/license/${userInput.gitUserName}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.gitUserName}/${userInput.reponame}/blob/master/LICENSE)

${userInput.shortDescription}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${userInput.installation}

## Usage
${userInput.usage}

## License
${userInput.license}

[![license](https://img.shields.io/github/license/${userInput.gitUserName}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.gitUserName}/${userInput.reponame}/blob/master/LICENSE)

## Contributing
${userInput.contributing}`;
    if (userInput.contributingBadge === "yes") {
        readme += `\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`;
    }
    readme += `## Tests
${userInput.tests}

## Questions
* Follow me at: <a href="https://github.com/${userInput.gitUserName}" target="_blank">https://github.com/${userInput.gitUserName}</a>
* Please email with any question at: ${userInput.emailAddress}

© 2019 ${userInput.gitUserName}`;
    return readme;
}

module.exports = {
    createReadme: function (userInput) {
        return createReadme(userInput);
    },
};