function createReadme(userInput) {
    let readme = `# ${userInput.reponame}
[![license](https://img.shields.io/github/license/${userInput.username}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.username}/${userInput.reponame}/blob/master/LICENSE)

${userInput.Description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${userInput.Installation}

## Usage
${userInput.Usage}

## License
${userInput.License}

[![license](https://img.shields.io/github/license/${userInput.user}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.user}/${userInput.reponame}/blob/master/LICENSE)

## Contributing
${userInput.Contributing}

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Tests
${userInput.Tests}

## Questions
* Follow me at: <a href="https://github.com/${userInput.username}" target="_blank">https://github.com/${userInput.username}</a>
* Please email with any question at: ${userInput.email}

© 2019 ${userInput.username}`;
    return readme;
}

module.exports = {
    createReadme: function (userInput) {
        return createReadme(userInput);
    },
};

// ;
//     if (userInput.contributingBadge === "yes") {
//         readme += `\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`;
//     }
//     readme += 