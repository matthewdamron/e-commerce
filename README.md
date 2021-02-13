<h1 align="center">
E-commerce
</h1>

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#Acceptance-criteria)
- [Screencast](#screencast)
- [Installation](#installation)
- [License](#license)
- [Language](#language)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
Node app that will save e-commerce goods in mysql database.<br />
You can add, update, delete categories, products or tags.

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Screencast
[![Watch the video](./images/e-commerce.png)](https://drive.google.com/file/d/1REYWzOAj2-yPz6bse1be4GG63_LVusrW/view?usp=sharing)

## Installation
Setup mysql database in mysql console `source db\schema.sql`<br />
Install npm with npm install or npm i to install node.js<br />
To seed the database run `npm run seed`<br />

## License
![GitHub](https://img.shields.io/github/license/matthewdamron/e-commerce)<br />
This application is covered by the MIT license. 

## Language
<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>

## Contributors
Matt

## Questions
- Find me on GitHub: [Matt Damron](https://github.com/matthewdamron)<br />
- Email me [Matt Damron](mailto:mattdamron@msn.com)
