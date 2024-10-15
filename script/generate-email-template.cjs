const fs = require('fs');
const mjml2html = require('mjml');
const path = require('path');

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

// Function to compile MJML and Mustache into a JavaScript template function with JSDoc comments
const compileTemplate = (mjmlFilePath) => {
    // Read the MJML file
    const mjmlContent = fs.readFileSync(mjmlFilePath, 'utf8');

    // Convert MJML to HTML
    const { html } = mjml2html(mjmlContent);

    // Extract unique props from the MJML file
    const propsArray = extractProps(html);

    // Convert Mustache-style props {{place}} into JavaScript template literals ${props.place}
    const jsTemplateString = html.replace(/{{(.*?)}}/g, (_, match) => `\${props.${match.trim()}}`);

    // Determine output JS file name (same folder as MJML file)
    const outputJsFilePath = path.join(
        path.dirname(mjmlFilePath),
        path.basename(mjmlFilePath, '.mjml') + '-template.js'
    );

    // Generate JSDoc for the props type definition
    const propsJSDoc = `
/**
 * @typedef {Object} Props
${propsArray.map(prop => ` * @property {unknown} ${prop}`).join('\n')}
 */
`;

    // Generate JSDoc for the function, referencing the props type
    const functionJSDoc = `
/**
 * Generates the email template.
 * @param {Props} props - The properties to inject into the template.
 * @returns {string} The generated email HTML.
 */
`;

    // Create the JS function that takes 'props'
    const jsFileContent = `
${propsJSDoc}
${functionJSDoc}
const emailTemplate = (props) => \`${jsTemplateString}\`;
export default emailTemplate;
    `;

    // Write the JS function and JSDoc to the output file
    fs.writeFileSync(outputJsFilePath, jsFileContent, 'utf8');
    console.log(`Template successfully compiled and saved to ${outputJsFilePath}`);
};

// Main function to handle command line arguments
const main = () => {
    // Check if the MJML file path is provided
    const mjmlFilePath = process.argv[2];
    if (!mjmlFilePath) {
        console.error('Error: Please provide the path to the MJML file.');
        process.exit(1);
    }

    // Call the compile function
    compileTemplate(mjmlFilePath);
};

// Run the main function
main();
