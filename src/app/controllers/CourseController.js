const Course = require('../models/Course');
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {
    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
}

module.exports = new CourseController();
