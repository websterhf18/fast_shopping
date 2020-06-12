var models = require('../models');
module.exports = server => {
    /**
     * @swagger
     * /api/products:
     *   get:
     *     description: Get all Products
     *     tags:
     *       - Products
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successful operation
     */
    server.get('/api/products', function(req, res, next) {
        models.Products.findAll({
            attributes: {
                exclude: ['categories_id']
            },
            include: [{
                model: models.Categories,
                as: 'category'
            }]
        }).then(function(categories){
            res.send(categories);
            return next();
        });
    });
}