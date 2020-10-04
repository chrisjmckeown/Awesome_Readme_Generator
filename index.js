const getUserInput = require("./get-user-input.js");
const createReadmeFile = require("./create-readme-file.js");
const fs = require('fs');
const util = require('util');
const path = require('path');
const writeFileAsync = util.promisify(fs.writeFile);
const folderExistsAsync = util.promisify(fs.stat);

async function createReadMe() {
    try {
        const response = await getUserInput.promptUserGitHub();
        if (response) {
            const readme = createReadmeFile.createReadme(response);
            if (await folderExistsAsync(response.outputPath)) {
                await writeFileAsync(path.join(response.outputPath, "readme.md"), readme, "utf8");
                console.log("Path found.");
            }
            else {
                await writeFileAsync("readme.md", readme, "utf8");
                console.log("Path not found.");
            }
            console.log("Successfully generated the readme file.");
        }
    } catch (err) {
        console.log("Error generating the readme file.", err);
    }
}

createReadMe();