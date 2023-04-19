const displayMessage = require("./console.js");
displayMessage();

/**
 * remove extenstion from file name within folder
 */

const fs = require("fs");
const path = require("path");

const folderPath = "./tadajson"; // Replace with your folder path

fs.readdir(folderPath, (err, files) => {


  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const oldPath = path.join(folderPath, file);
    const newName = path.parse(file).name; // Get file name without extension
    const newPath = path.join(folderPath, newName);

    fs.rename(oldPath, newPath, (err) => {
      if (err) console.error(err);
    });
  });
});
