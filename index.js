
const fs = require("fs");

fs.copyFile("file1.txt", "file2.txt", (err) => {
  if (err) throw err;

  console.log("Se ha copiado exitosamente el archivo file1.txt a file2.txt");
});
