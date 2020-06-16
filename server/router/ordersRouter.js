var models = require('../models');
module.exports = server => {
    /**
     * @swagger
     * /api/orders:
     *   get:
     *     description: Get all orders
     *     tags:
     *       - Orders
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Successful operation
     */
    server.get('/api/orders', function(req, res) {
        models.Orders.findAll().then(function(orders){
            res.send(orders);
            return next();
        });
    });
    /**
     * @swagger
     * /api/orders:
     *   post:
     *     description: Get all Customers
     *     tags:
     *       - Orders
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: type_user
     *         description: new or existing
     *         in: formData
     *         required: true
     *         type: string
     *       - name: info_user
     *         description: Info object of user.
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/Customer'
     *       - name: products
     *         description: Products of order.
     *         in: body
     *         required: true
     *         schema:
     *           type: array
     *           items:
     *             $ref: '#/definitions/Products'
     *     responses:
     *       400:
     *         description: Missing Field
     *       200:
     *         description: Successful operation
     */
    function generateCodeOrder(){
        var length = 8;
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    function createOrder(userData){
        var codeOrder = generateCodeOrder();
        var order = models.Orders.create({
            code: codeOrder,
            status: 'pending',
            customers_id: userData.id 
        });
        return order;
    }
    function createProductsOrder(product, order_id){
        var productOrder = models.Products_Order.create({
            quantity: product.quantity,
            products_id: product.id,
            orders_id: order_id 
        });
        return productOrder;
    }
    server.post('/api/orders', function(req, res, next) {
        if (req.body.type_user && req.body.info_user && req.body.products) {
            if(req.body.type_user === 'new'){
                models.Customers.create({
                    fullname: req.body.info_user.fullname,
                    phone: req.body.info_user.phone,
                    address: req.body.info_user.address,
                    email: req.body.info_user.email   
                }).then(user => {
                    var userData = { id : user.id }; 
                    var orderData = createOrder(userData);
                    orderData.then(order => {
                        var products = req.body.products;
                        products.forEach(product => {
                            createProductsOrder(product, order.id);
                        });
                        res.send(order);
                    });
                })
            }else{
                var userData = req.body.info_user
                var orderData = createOrder(userData);
                orderData.then(order => {
                    var products = req.body.products;
                    products.forEach(product => {
                        createProductsOrder(product, order.id);
                    });
                    res.send(order);
                });
            }
        } else {
            res.send(400, { response: "Missing Field" });
        }
        return next();
    });
}