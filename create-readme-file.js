function createReadme(userInput) {
    const readme =
        `# ${userInput.reponame}
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

### Technologies Utilized
${userInput.technologiesutilized}

## Usage
${userInput.usage}

### Description
${userInput.longDescription}

## License
${userInput.license}

## Contributing
${userInput.contributing}

## Tests
${userInput.tests}

## Questions
* Please contact me at: ${userInput.emailAddress}

© 2019 ${userInput.yourName}`;
    return readme;
}

module.exports = {
    createReadme: function (userInput) {
        return createReadme(userInput);
    },
};