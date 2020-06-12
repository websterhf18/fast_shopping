module.exports = server => {
    server.get('/api/customer', function(req, res) {
        res.send('im the product page!');
    });
    server.post('/api/customer', function(req, res) {
        res.send('im the product page!');
    });
}