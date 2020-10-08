function createReadmeBody(userInput) {
    // build the body to match the user requirements
    let readme = "";
    if (userInput.Installation) {
        readme += `\n\n## Installation\n${userInput.Installation}\n\n### Technologies Utilized\n![GitHub language count](https://img.shields.io/github/languages/count/${userInput.username}/${userInput.reponame}?style=flat-square)![GitHub top language](https://img.shields.io/github/languages/top/${userInput.username}/${userInput.reponame}?style=flat-square)\n\n"Remove unwanted badges"\n<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>`;
    }
    if (userInput.Usage) readme += `\n\n## Usage\n${userInput.Usage}`;
    if (userInput.License) readme += `\n\n## License\n${userInput.License}\n[![license](https://img.shields.io/github/license/${userInput.username}/${userInput.reponame}.svg?style=flat-square)](https://github.com/${userInput.username}/${userInput.reponame}/blob/master/LICENSE)`;
    if (userInput.Contributing) readme += `\n\n## Contributing\n${userInput.Contributing}\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`;
    if (userInput.Tests) readme += `\n\n## Tests\n${userInput.Tests}`;
    return readme;
}

function createReadmeHeader(userInput) {
    // build the title, license and description
    let readme = `# ${userInput.reponame}
    \n![GitHub stars](https://img.shields.io/github/stars/${userInput.username}/${userInput.reponame}?style=social)![GitHub forks](https://img.shields.io/github/forks/${userInput.username}/${userInput.reponame}?style=social)![GitHub watchers](https://img.shields.io/github/watchers/${userInput.username}/${userInput.reponame}?style=social)![GitHub followers](https://img.shields.io/github/followers/${userInput.username}?style=social)
    \n[![license](https://img.shields.io/github/license/${userInput.username}/${userInput.reponame}?style=flat-square)](https://github.com/${userInput.username}/${userInput.reponame}/blob/master/LICENSE)![GitHub repo size](https://img.shields.io/github/repo-size/${userInput.username}/${userInput.reponame}?style=flat-square)![GitHub last commit](https://img.shields.io/github/last-commit/${userInput.username}/${userInput.reponame}?style=flat-square)[![GitHub contributors](https://img.shields.io/github/contributors/${userInput.username}/${userInput.reponame}?style=flat-square)](https://GitHub.com/${userInput.username}/${userInput.reponame}/graphs/contributors/)[![GitHub pull-requests](https://img.shields.io/github/issues-pr/${userInput.username}/${userInput.reponame}?style=flat-square)](https://GitHub.com/${userInput.username}/${userInput.reponame}/pull/)
    \n## Description
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