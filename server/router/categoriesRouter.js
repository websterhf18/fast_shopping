module.exports = server => {
    /**
     * @swagger
     * /api/puppies:
     *   get:
     *     tags:
     *       - Puppies
     *     description: Returns all puppies
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of puppies
     *         schema:
     *           $ref: '#/definitions/Puppy'
     */
    server.get('/api/categories', function(req, res) {
        res.send('im the product page!');
    });
    server.post('/api/categories', function(req, res) {
        res.send('im the product page!');
    });
}