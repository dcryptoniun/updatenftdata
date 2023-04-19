const displayMessage = require("./console.js");
displayMessage();

/* to genrate files with seq. no as filename */
const fs = require("fs");
const path = require("path");

const folderPath = "seqfiles";
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

for (let i = 1; i <= 1000; i++) {
  const fileName = `${i}.txt`;
  const data = { id: i, name: `file ${i}` };
  const filePath = path.join(folderPath, fileName);
  fs.writeFileSync(filePath, JSON.stringify(data));
}

/* to genrate files with seq. no as filename and write predefined data from data.json to thoes file. */

// const fs = require("fs");
// const path = require("path");

// const data = JSON.parse(fs.readFileSync("data.json"));

// const folderName = "tadajson";
// if (!fs.existsSync(folderName)) {
//   fs.mkdirSync(folderName);
// }

// for (let i = 0; i < 10000; i++) {
//   const fileName = `${i}.json`;
//   const filePath = path.join(__dirname, folderName, fileName);
//   fs.writeFileSync(filePath, JSON.stringify(data));
// }
