const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    port: process.env.PORT,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbDatabase: process.env.DB_DATABASE,
    dbUser: process.env.DB_USERNAME,
    dbPass: process.env.DB_PASSWORD,
    forceSwagger: process.env.HTTPS_SWAGGER
};