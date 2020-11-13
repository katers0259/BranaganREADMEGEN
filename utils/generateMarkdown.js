// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ### ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  
  ### Description
  ${data.Description}


  ### Table Of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributors](#contributors)
  *[Test](#test)
  *[Contact](#contact)
  ### Installation
  The following must be installed for the application to run.
 
  ### Usage
  To use this app, ${data.Usage}

  ### License
  This project is licensed under ${data.License}.

  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

### Contributors:
${data.Contributors}

### Test
This is needed to test the application: ${data.Test}.

### Contact
For questions about this app you can contact me at ${data.Username} or ${data.Email}.
`;
}

module.exports = generateMarkdown;
