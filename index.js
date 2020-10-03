const getUserInput = require("./get-user-input.js");
const createReadmeFile = require("./create-readme-file.js");
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

async function createReadMe() {
    try {
        const response = await getUserInput.promptUser();
        console.log(response);
        const readme = createReadmeFile.createReadme(response);
        await writeFileAsync("readme.md", readme, "utf8");
        console.log("Successfully generated the readme file.");
    } catch (err) {
        console.log("Error generating the readme file.", err);
    }
}

createReadMe();