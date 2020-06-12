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
     *         in: formData
     *         required: true
     *         type: object
     *       - name: products
     *         description: Products of order.
     *         in: formData
     *         required: true
     *         type: object
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
    function createOrderProducts(userData, products){
        //Create Order
        var codeOrder = generateCodeOrder();
        models.Orders.create({
            code: codeOrder,
            status: 'pending',
            customers_id: userData.id 
        }).then(order => {
            //Create Products
            products.forEach(function(products, index, arr) {
                models.Products_Order.create({
                    quantity: products.quantity,
                    products_id: products.products_id,
                    orders_id: order.id
                });
            });
            return order;
        })
    }
    server.post('/api/orders', function(req, res, next) {
        if (req.body.type_user && req.body.info_user && req.body.products) {
            var userData;
            //Create User
            if(req.body.type_user == 'new'){
                models.Customers.create({
                    fullname: req.body.info_user.fullname,
                    phone: req.body.info_user.phone,
                    address: req.body.info_user.address,
                    email: req.body.info_user.email   
                }).then(user => {
                   userData = { id : user.id }; 
                   var orderData = createOrderProducts(userData, req.body.products);
                   res.send(orderData);
                })
            }else{
                userData = req.body.info_user
                var orderData = createOrderProducts(userData, req.body.products);
                res.send(orderData);
            }
        } else {
            res.send(400, { response: "Missing Field" });
        }
        return next();
    });
}