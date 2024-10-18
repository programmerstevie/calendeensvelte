const fs = require("fs");
const { execSync } = require("child_process");
const path = require("path");

// Function to extract unique Mustache placeholders (e.g., {{place}})
const extractProps = (html) => {
  const propSet = new Set();
  const regex = /{{(.*?)}}/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    propSet.add(match[1].trim());
  }
  return Array.from(propSet);
};

// Function to compile MJML using npx and generate a JavaScript template function
const compileTemplate = (mjmlFilePath) => {
  // Define the output path for the temporary HTML file
  const tempHtmlFilePath = path.join(path.dirname(mjmlFilePath), "temp-output.html");

  // Run npx mjml to compile MJML into HTML
  try {
    execSync(`npx mjml "${mjmlFilePath}" -o "${tempHtmlFilePath}"`);
    console.log(`MJML successfully compiled to ${tempHtmlFilePath}`);
  } catch (error) {
    console.error("Error running MJML:", error.message);
    process.exit(1);
  }

  // Read the compiled HTML file
  const html = fs.readFileSync(tempHtmlFilePath, "utf8");

  // Clean up by removing the temporary HTML file
  fs.unlinkSync(tempHtmlFilePath);

  // Extract unique props from the compiled HTML
  const propsArray = extractProps(html);

  // Convert Mustache-style props {{place}} into JavaScript template literals ${props.place}
  const jsTemplateString = html.replace(/{{(.*?)}}/g, (_, match) => `\${props.${match.trim()}}`);

  // Determine output JS file name (same folder as MJML file)
  const outputJsFilePath = path.join(
    path.dirname(mjmlFilePath),
    path.basename(mjmlFilePath, ".mjml") + ".js"
  );

  // Generate JSDoc for the props type definition
  const propsJSDoc = `/**
 * @typedef {Object} Props
${propsArray.map((prop) => ` * @property {unknown} ${prop}`).join("\n")}
 */`;

  // Generate JSDoc for the function, referencing the props type
  const functionJSDoc = `/**
 * Generates the email template.
 * @param {Props} props - The properties to inject into the template.
 * @returns {string} The generated email HTML.
 */`;

  // Create the JS function that takes 'props'
  const jsFileContent = `${propsJSDoc}\n\n${functionJSDoc}
const withProps = (props) => \`${jsTemplateString}\`;
export const template = { withProps };
`;

  // Write the JS function and JSDoc to the output file
  fs.writeFileSync(outputJsFilePath, jsFileContent, "utf8");
  console.log(`Template successfully compiled and saved to ${outputJsFilePath}`);
};

// Main function to process all .mjml files in the /emails folder
const main = () => {
  const emailsFolderPath = path.join(__dirname, "../emails");

  // Check if the /emails folder exists
  if (!fs.existsSync(emailsFolderPath)) {
    console.error(`Error: The /emails folder does not exist.`);
    process.exit(1);
  }

  // Read all files in the /emails folder
  const files = fs.readdirSync(emailsFolderPath);

  // Filter out only .mjml files
  const mjmlFiles = files.filter((file) => file.endsWith(".mjml"));

  if (mjmlFiles.length === 0) {
    console.log("No .mjml files found in the /emails folder.");
    return;
  }

  // Compile each .mjml file
  mjmlFiles.forEach((file) => {
    const filePath = path.join(emailsFolderPath, file);
    compileTemplate(filePath);
  });
};

// Run the main function
main();
