var models = require('../models');
module.exports = server => {
    /**
     * @swagger
     * definitions:
     *  Products:
     *       type: object
     *       properties:
     *           quantity:
     *               type: integer
     *               format: int32
     *           id:
     *               type: integer
     *               format: int32
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