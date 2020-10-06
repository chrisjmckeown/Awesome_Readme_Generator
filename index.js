const getUserInput = require("./get-user-input.js");
const createReadmeFile = require("./create-readme-file.js");
const fs = require('fs');
const util = require('util');
const path = require('path');
const writeFileAsync = util.promisify(fs.writeFile);
const folderExistsAsync = util.promisify(fs.lstatSync);

function folderExists(outputPath) {
    try {
        return fs.lstatSync(outputPath).isDirectory();
    } catch (_) {
        return false;
    }
}

async function createReadMe() {
    try {
        const response = await getUserInput.promptUserGitHub();
        if (response) {
            const readme = createReadmeFile.createReadme(response);
            if (folderExists(response.outputPath)) {
                const outputPath = path.join(response.outputPath, "readme.md");
                await writeFileAsync(outputPath, readme, "utf8");
                console.log(`Successfully generated the readme file. \nSee here: ${outputPath}`);
            }
            else {
                await writeFileAsync("_README.md", readme, "utf8");
                console.log("Successfully generated the readme file.");
            }
        }
    } catch (err) {
        console.log("Error generating the readme file.", err);
    }
}

createReadMe();