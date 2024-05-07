const fs = require("fs");

const tsDeclarationFile = "dist/index.d.ts";
const readmeFile = "README.md";

fs.readFile(tsDeclarationFile, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const functionRegex = /declare const (\w+):/g;
  const descriptionRegex = /\/\*\*\n\s\* (.+?)\n\s\* @/g;

  let functionDetails = [];
  let match;

  while ((match = functionRegex.exec(data)) !== null) {
    const functionName = match[1];
    const parameters = match[2];

    const descriptionMatch = descriptionRegex.exec(data);
    const description = descriptionMatch ? descriptionMatch[1].trim() : "";

    functionDetails.push({
      name: functionName,
      parameters: parameters,
      description: description,
    });
  }

  const readmeContent = functionDetails
    .map((detail) => `\`${detail.name}\`: ${detail.description}\n\n`)
    .join("");

  fs.writeFile(readmeFile, readmeContent, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README.md updated successfully!");
  });
});
