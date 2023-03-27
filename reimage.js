const displayMessage = require("./console.js");
displayMessage();

const fs = require("fs");
const path = require("path");

const folderPath = "./seqfiles";
const prefix = "ba";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const oldPath = path.join(folderPath, file);
    const newName = prefix + file;
    const newPath = path.join(folderPath, newName);
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${file} to ${newName}`);
  });
});
