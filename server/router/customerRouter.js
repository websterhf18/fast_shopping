var models = require('../models');
module.exports = server => {
    /**
     * @swagger
     * /api/customers:
     *   get:
     *     description: Get all Customers
     *     tags:
     *       - Customers
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successful operation
     */
    server.get('/api/customers', function(req, res, next) {
        models.Customers.findAll().then(function(customers){
            res.send(customers);
            return next();
        });
    });
    /**
     * @swagger
     * definitions:
     *  Customer:
     *       type: object
     *       properties:
     *           fullname:
     *               type: string
     *           phone:
     *               type: string
     *           address:
     *               type: string
     *           email:
     *               type: string
     * /api/customer/find:
     *   post:
     *     description: Get all Customers
     *     tags:
     *       - Customers
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: email
     *         description: Email to use for login.
     *         in: formData
     *         required: true
     *         type: string
     *     responses:
     *       400:
     *         description: Missing Field
     *       200:
     *         description: Successful operation
     */
    server.post('/api/customer/find', function(req, res, next) {
        if (req.body.email) {
            var emailField = req.body.email;
            models.Customers.findOne({
                where: {
                    email: emailField,
                }
            }).then(function(customers){
                if(!customers){
                    res.send(200, { response: "not-found" });
                }else{
                    res.send(customers);
                }
            });
        } else {
            res.send(400, { response: "Missing Field" });
        }
        return next();
    });
}