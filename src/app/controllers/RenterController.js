class RenterController {
    // [GET] /renter
    index(req, res) {
        res.render('renter');
    }

    // [GET] /renter/:slug
    show(req, res) {
        res.send('Home for rent details!!');
    }
}

module.exports = new RenterController();
