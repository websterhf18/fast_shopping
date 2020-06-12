module.exports = server => {
    server.get('/api/products', function(req, res) {
        res.send('im the product page!');
    });
    server.post('/api/products', function(req, res) {
        res.send('im the product page!');
    });
}