const displayMessage = require("./console.js");
displayMessage();

const fs = require("fs");
const path = require("path");

const folderPath = "./rename"; // replace with your folder path
const files = fs.readdirSync(folderPath);

files.forEach((file) => {
  const filePath = path.join(folderPath, file);
  const data = JSON.parse(fs.readFileSync(filePath));

  delete data.generator;
  data.description = "This is a new description";
  data.image = data.image.replace("__CID__", "new_CID");
  data.uid = path.parse(file).name;
  data.name = `bapes #${data.uid}`;

  fs.writeFileSync(filePath, JSON.stringify(data));
});
