const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([{
    type: "input",
    name: "project_title",
    message: "What is the project title?",
},

{
    type: "input",
    name: "description",
    message: "Write the brief description of your project",
},

{
    type: "input",
    name: "installaton",
    message: "What command should be run to install dependencies?",
},

{
    type: "input",
    name: "usage",
    message: "Describe the usage of your project",
},

{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "Apache", "GPL", "Mozilla", "none"],
},

{
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?"
},

{
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
},

{
    type: "input",
    name: "username",
    message: "Enter your GitHub username",
},

{
    type: "input",
    name: "email",
    message: "Enter your Email",
},
]).then(function (response) {
    console.log(response);
    //fs.unlinkSync("readme.md");
    fs.writeFile("readme.md", "# " + response.project_title + "\n", function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("success");
        }
    })

    fs.appendFile("readme.md", "\n" + "## Description" + "\n" + response.description + "\n"
        + "\n" + "## Table of Contents" + "\n" + "- [Installation](#installation)"
        + "\n" + "- [Usage](#usage)" + "\n" + "- [License](#license)"
        + "\n" + "- [Contribution](#contribution)" + "\n" + "- [Tests](#tests)"
        + "\n" + "- [Questions](questions)" + "\n"
        + "\n" + "## Installation" + "\n" + response.installaton + "\n"
        + "\n" + "## Usage" + "\n" + response.usage + "\n"
        + "\n" + "## License" + "\n" + response.license + "\n"
        + "\n" + "## Contribution" + "\n" + response.contribution + "\n"
        + "\n" + "## Tests" + "\n" + response.test + "\n"
        + "\n" + "## Questions" + "\n" + "### Link to GitHub page: " + "https://github.com/" + response.username + "\n"
        + "\n" + "### Email: " + response.email + "\n",
        function (error) {
            if (error) {
                console.log(error);

            }
            else {
                console.log("success");

            }
        })

})
