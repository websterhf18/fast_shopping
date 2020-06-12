module.exports = server => {
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
    server.get('/api/categories', function(req, res) {
        res.send('im the product page!');
    });
    server.post('/api/categories', function(req, res) {
        res.send('im the product page!');
    });
}