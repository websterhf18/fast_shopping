module.exports = server => {
    server.get('/api/orders', function(req, res) {
        res.send('im the product page!');
    });
    server.post('/api/orders', function(req, res) {
        res.send('im the product page!');
    });
}