//my dependencies
const inquirer = require("inquirer");
const fs = require("fs");


//this function uses a try catch, catch logging an error should one arise. this function is also an async function where our data object 
//awaits the answers for the inquirer prompts from the user.  data is returned into the writeReadMe function.
async function getUserInput(){
    try{
        const data = await inquirer.prompt([
            {
                type: "input",
                message:"Please enter your project's title: ",
                name: "title"
            },
            {
                type: "input",
                message:"Please describe your project: ",
                name: "description"
            },
            {
                type: "input",
                message:"Please describe your installation command: ",
                name: "installation"
            },
            {
                type: "input",
                message:"Please demonstrate your package's usage: ",
                name: "usage"
            },
            {
                type: "list",
                message:"Please select the license you wish to use: ",
                choices: ["Apache","MIT","IBM","Mozilla","Eclipse"],
                name: "license"
            },
            {
                type: "input",
                message:"Please write a message for potential contributors: ",
                name: "contributing"
            },
            {
                type: "input",
                message:"Please provide test instructions: ",
                name: "test"
            },
            {
                type: "input",
                message:"Please enter your GitHub username: ",
                name: "github"
            },
            {
                type: "input",
                message:"Where can users reach you for question?: ",
                name: "email"
            },
        ])
        return data;
    } catch(error){
        console.log(error);
    } 
}

//await async is used to keep the order of the statements flowing as it should...IN ORDER!  data is deconstructed and used in the remplate literal variable.
async function writeReadME(){
    let {title, description, installation, usage, license, contributing, test, github, email} = await getUserInput()

    //switch statement written to allow the user to select from the license name rather than the entire links in the terminal.
    switch(license){
        case "Apache":
        license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;

        case "MIT":
        license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;

        case "IBM":
        license = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
        break;

        case "Mozilla":
        license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        break;

        case "Eclipse":
        license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        break;
    }
//template literal variable completely written in markdown.

const myReadMe = `
# ${title}

${license}

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [test](#test)
* [Questions](#Questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Test

${test}

## Questions

Check out more of my work at my GitHub profile [${github}](https://github.com/${github}) 

If you have any further questions, you can reach me at ${email}.
`
    //file system write file function that writes MYREADME.md with the third parameter being a callback function using a 
    //terniary operator to log an error if one occurs else log success!
    fs.writeFile("MYREADME.md", myReadMe, (err) =>
    err ? console.log(err) : console.log("Success")
    );
}
//the call to writeReadMe to our code can run.
writeReadME();