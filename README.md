# back-end
This repository contains the back-end code for the Grove server.

We're using a PostgreSQL database, and the server is written in Node.js with Sequelize as an ORM.

### Database

You can check out our [data model](https://dbdiagram.io/d/604903fffcdcb6230b238639) to get a sense for the types of data that can be stored in our database. We have a database running on Heroku's free tier.

### Server

The current server code is in the "server" folder. The actual code is in "src."

- /Procfile: Defines the script that Heroku runs when the code is deployed to its computers.
- /package.json: Specifies project info, dependencies, and (most relevantly) the start script that "npm start" calls.
- /package-lock.json: Specifies the Node packages required to run our code.
- /config/development.json: Credentials for connecting to the database.
- /node_modules: The node packages.

In /src:
 
- /Sequelize.js: Configures Sequelize to be used properly.
- /sequelize-auto.config.json: Was used to auto-generate the Sequelize models, can be ignored.
- /config.js: Configures the Node environment.
- **/index.js**: The start script, which initializes the server when called.
- **/routes.js**": Specifies the endpoints which can be accessed, and which controller functions that are called when they're accessed.
- **/models**: Contains the Sequelize models for our database, which were auto-generated from our database. These should only need to be edited when our data model is edited.
- **/controllers**: Contains all the controllers called when endpoints are accessed. The "index.js" file runs all the controllers as a Promise. When new controller files are added, they'll need to be imported into this file and added to the function. The rest of the files have the controllers, one for each entity we care about. The "test.js" file contains test controllers for the "Test" model, one for each CRUD operation, and the rest are empty.

### Processes

#### Running and Testing the Server

First, make sure you have Node.js with npm installed, and clone this whole "back-end" repository into a suitable folder. Run "npm install" in /server/src to install all the needed packages. Then run "npm start" (still in /server/src), and you should be off to the races.

If the node environment hasn't been set, run the command SET NODE_ENV=development.

To test the endpoints (only "/api/test" and "/api/test/{id}" work right now), you can either go to them in your browser (https://localhost:8080), or get the [Advanced Rest Client Chrome Extension](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo), which makes it easier to test UPDATE and POST requests.

#### Adding a controller function

1. Define the endpoint it will use in "routes.js." Follow the naming convention there for the controller function, and the endpoint URI should match the relevant entity.
2. In the controller file for the relevant entity, add the controller function, making sure to use the same name you specified in the route.
3. Check to make sure the controller file is imported in "/controllers/index.js", and that the entity is listed in the function. 

### Previous Versions

The "old_server" file contains a previous version of our database, as well as two old server setups.
