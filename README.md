# my-readme-generator
This Project required the making of a readme generator using the inquirer package.  In order to accomplish the task,

```bash 
npm init - y
``` 
was used to obtain the package.JSON and then inquirer is isntalled as a dependancy.  This was done doing the command in the terminal 

```bash
npm install inquirer
```

The async/await was used to write the getUserInput() and writeReadMe() functions. Object deconstruction was used for the data object in index.js.

try catch was also used in getUserInput(), and fs.writeFile was used with the callback function and terniary operator to log the error or a success when writing the file, all to demonstrate ES6 understanding.

Finally the generated readme was created using template literals and written completely in markdown. The user then answers all fields in the terminal once "installed" and the code handles their new MYREADME.md file!

## Demo Link
<br>

https://drive.google.com/file/d/1GI3keXqBLWTnvgYFuLFPpZ71aQPBfVo9/view

<br>

## Demo Gif
<br>

![DemoGif](assets/DemoGifReadGen.gif)