const renterRouter = require('./renter');
const siteRouter = require('./site');

function route(app) {
    /* app.get('/renter', (req, res) => {
        res.render('renter')
    }) */

    app.use('/renter', renterRouter);
    app.use('/', siteRouter);
}

module.exports = route;
