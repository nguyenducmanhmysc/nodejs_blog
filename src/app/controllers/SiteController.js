
class SiteController {
    // [GET] /
    index(req, res) {
        
        const Course = require('../models/Course');
        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses);
            } else {
                res.status(400).json({ error: 'ERROR!!!'});
            }
        });

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
