function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;

}

function generateMarkdown(data) {
  return `
  #  ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
## Table of Content
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Test](#Test)
- [Questions](#questions)
## Installation
  ${data.installation}
## Usage
  ${data.usage}
${renderLicenseSection(data.license)}
## Contributing
  ${data.contributing}
## Test
  ${data.test}
## Questions
If you have any question, Email me at: ${data.email} 
  
  Find me on GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
