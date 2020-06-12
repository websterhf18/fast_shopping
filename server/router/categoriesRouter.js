var models = require('../models');
module.exports = (server) => {
    /**
     * @swagger
     * /api/categories:
     *   get:
     *     description: Get all categories
     *     tags:
     *       - Categories
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successful operation
     */
    server.get('/api/categories', function(req, res, next) {
        models.Categories.findAll().then(function(categories){
            res.send(categories);
            return next();
        });
    });
}