 ### Project Introduction 
    This project is developed by using Express. Which is a library of Node.js. I used TypeScript, integrated MongoDB with Mongoose for user data management and Joi for user validation. Some other tools like cors, eslint and prettier for organize the codes, bcrypt to secure password, and dotenv tool for secure other stuff.

 ### To setup this project in your Local computer follow the below instruction 

 ### Step 1 
    * Clone the github repository: https://github.com/webdevmahdi/l2-assignment-2.git
 ### Step 2 
    * Install all tools and dependencies: npm install
 ### Step 3 
    * Setup mongodb database: 
        1:-) Create a file by the name of .env
        2:-) Provide your port (ex: PORT=5000)
        3:-) Create a user in mongodb website and copy the database name and password and also copy the uri from mongodb (ex: DATABASE_URL=mongodb+srv://<username>:<databasePassword>@cluster0.gle9hc9.mongodb.net/<newDatabaseName>?retryWrites=true&w=majority)

### API endpoints
 ### Step 1(Create a new user) 
    * Local Endpoint : POST http://localhost:5000/api/users
    * Online Deployed: POST https://l2assignment2-cyan.vercel.app/api/users

 ### Step 2(Get a list of all users) 
    * Local Endpoint : GET http://localhost:5000/api/users
    * Online Deployed: GET https://l2assignment2-cyan.vercel.app/api/users

 ### Step 3(Retrieve a specific user by ID) 
    * Local Endpoint : GET http://localhost:5000/api/users/:userId
    * Online Deployed: GET https://l2assignment2-cyan.vercel.app/api/users/:userId

 ### Step 4(Update user information) 
    * Local Endpoint : PUT http://localhost:5000/api/users/:userId
    * Online Deployed: PUT https://l2assignment2-cyan.vercel.app/api/users/:userId

### Step 5(Delete a user)
    
    * Local Endpoint : DELETE http://localhost:5000/api/users/:userId
    * Online Deployed: DELETE https://l2assignment2-cyan.vercel.app/api/users/:userId
    

 ### Step 6(Start the app) 
    * Run the application in your local server by running: "npm run start:dev" command

 ### Step 7(Start the application) 
    * The app will run on http://localhost:5000

 ### Step 8(Start the application) 
    * Type "http://localhost:5000" in your browser