const Course = require('../models/Course');

class SiteController {
    //[GET] /
    index(req, res) {
        Course.find({}, function (err, docs) {
            if (!err) {
                res.json(docs);
                return;
            }
            res.status(400).json({ error: 'ERROR!' });
        });

        // res.render('home');
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
