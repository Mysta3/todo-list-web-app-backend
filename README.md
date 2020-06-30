# MERN Stack ToDo List - BackEnd

![Project In Browser](https://i.imgur.com/nmho5K7.png)

- [Frontend Repo](https://github.com/Mysta3/todo-list-web-app "Link to frontend repo")

## Description

Task: Create a to-do list as a web application.
For this I decided to go with using the MERN stack as React allows for me to write modulated code while using JSX to implement conditional rendering. MongoDB allows me to build DB's at a faster pace while I am able to run test actions and it gives me the flexibility to change my DB schema as I see fit while using an ODM like mongoose allows me to better manipulate the data that is stored in the database. I decided to use 1 database for simplicity while only storing part of a users information while integrating firebase authentication to handle storing the rest of a users information.

## User Stories

- A user will be able to login and either see a previously created todo List or create a new todo list.
- A user will add to a todo list that is then stored in a database.
- A user will be able to delete a item off of their todo list.

## Technologies Used

- ReactJs with Hooks
- SASS
- MongoDB
- ExpressJs
- NodeJs
- Axios
- Mocha/Chai/Supertest - testing
- React Bootstrap

## Future Implementations

- Sign Up feature for new Users
- Users will be able to create multiple todo List's specific to a topic. Ex: 'Productive ToDo List, Chores ToDo List, etc'

## Get Started

- Clone & or Download
- Navigate to folder
- run `npm i`
- I recommend using 3 terminals, I personally use terminal within VSCODE
- run MongoDB in terminal using mongo command
- In another terminal run seed file using `node db/seeds.js` command
- In 3rd terminal run `node app.js`
