
This repository contains Playwright tests written in TypeScript to automate testing of a shopping cart functionality on a sample website.

## Getting Started

To run the tests, follow these steps:

### 1. Download the Repository

Download the repository to your local machine. You can clone it using Git:

git clone <repository-url>
Alternatively, you can download the ZIP file from GitHub and extract it.

### 2. Open Visual Studio Code
Open Visual Studio Code and load the project folder.

Launch Visual Studio Code.
Click on File > Open Folder....
Navigate to and select the ATM folder that you just downloaded or extracted.


### 3. Install Dependencies
Once the folder is open in Visual Studio Code, open a new terminal window:

Click on Terminal > New Terminal.
In the terminal, run the following commands to install the necessary dependencies:

npm install

and then:

npm install playwright


### 4. Run the Tests
   
To run all the tests, execute the following command in the terminal:

npx playwright test
This will execute all the tests defined in the project and display the results in the terminal.

Project Structure
The project structure is as follows:

To run all the tests, execute the following command in the terminal:

npx playwright test
This will execute all the tests defined in the project and display the results in the terminal.

### 5. Troubleshooting

All test cases have succesfully passed, so in case that every taste fails, run npx playwright install in the terminal

Project Structure
The project structure is as follows:
ATM/
├── tests/
│   └── ViewTest.specs.ts
│   │__ RemoveTest.specs.ts
│   │__ AddTest.specs.ts
│   │__ TotalTest.specs.ts
│    
├── README.md
├── package-lock.json
├── package.json
├── playwright.config.ts
├── tsconfig.json


tests/: Contains the test files.
README.md: This file, containing instructions on how to set up and run the tests.
package-lock.json: Automatically generated file that ensures consistent installs.
package.json: Lists the project dependencies and scripts.
playwright.config.ts: Configuration file for Playwright.
tsconfig.json: Configuration file for TypeScript.
Additional Information
Make sure you have Node.js and npm installed on your machine. You can download them from Node.js.
Ensure you are using a compatible version of Visual Studio Code.

Happy testing!
