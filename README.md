
## About Fast Shopping

Fast shopping is a test for Sancrisoft Agency to build a small app which allows any user to make a purchase in a few steps.

## Entity-relationship Diagram
![ModelImage](https://github.com/websterhf18/fast_shopping/blob/master/MER_fastShopping.png?raw=true)

## Api Rest Endpoints Documentation

 `npm run start` Run NODEJS server and Compile React Client

 `npm run server-dev` Run nodemon to HotReload Api Server NOT REACT HOT RELOAD

`npm run client-dev` Run React Dev Server to HotReload Api Server NOT HOT RELOAD

	URL: localhost:3000/api-docs/ API documentation Swagger

##  Environment Variables

    PORT=3000 // Port on run the app
    
    DB_HOST=127.0.0.1 //Host Of MYSQL Server
    DB_PORT=8889 //Port Of MYSQL Server
    DB_DATABASE=fast_shopping //Database Name Of MYSQL Server
    DB_USERNAME=root //User Of MYSQL Server
    DB_PASSWORD=root //Pass Of MYSQL Server
     
    API_URL=http://localhost:3000 // Complete URL of App
    HTTPS_SWAGGER=false // If on secure server change true

## Production URL

[Production Fast Shop](https://sancrisoft.kapei.dev)

## Steps to instal locally the project

Step 1: Clone the project on your local device

Step 2: Copy SQL script on your MYSQL Database

Step 3: Run the command to install the dependencies

    npm install
    
Step 4: Copy a .env file

    cp ./.env.dev ./.env
 
 Step 5: Config the environment Variables
 
Step 6: Run the project

    npm run start

