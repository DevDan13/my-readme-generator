const inquirer = require("inquirer");
const fs = require("fs");

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
                choices: ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                 "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                 "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                 "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
                 "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"],
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
            },{
                type: "input",
                message:"Where can users reach you for question?: ",
                name: "email"
            },
        ]);
    } catch(error){
        console.log(error);
    } 
}

async function writeReadME(){
    const {title, description, installation, usage, license, contributing, test, email} = await getUserInput

    const myReadMe = `
        #${title}
        
        ${description}
        
        ##Table of Contents

        [Installation] (#installation)
        [Usage] (#usage)
        [License] (#license)
        [Contributing] (#contributing)
        [test] (#test)
        [email] (#email)
        
        ##Installation
        
        ${installation}
        
        ##Usage
        
        ${usage}
        
        ##License
        ${license}
        
        ##Contributing
        
        ${contributing}
        
        ##Test
        
        ${test}
        
        ##Email
        
        ${email} please reach me here if you have questions or concerns.  
        Any further ideas for the project are also appreciated.
    `

    fs.writeFile("README.md", myReadMe, (err) =>
    err ? console.log(err) : console.log("Success")
    );
}