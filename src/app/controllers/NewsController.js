class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('News Details!!!');
    }
}

module.exports = new NewsController();
