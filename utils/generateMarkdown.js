// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    

  }
  else if (license === "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  else if (license === "SIL"){
    return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none"){
    return ""
    
  }
  else {
    return "* [Licenses](#Licenses)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return ""
    
  }
  else {
    return "# Licenses"
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contribution)
* [Testing](#Testing)
${renderLicenseLink(data.license)}
* [Questions](#Questions)

# Description
  ${data.description}

# Installation 
  ${data.installation}

# Usage
   ${data.usage}
# Any Contributions
   ${data.contribution}
# Testing
   ${data.test}
${renderLicenseSection(data.license)}
# Questions
  If you have questions, please send to [My Email](mailto:${data.email})
  If you want more information of my work, please go to [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
