
const Course = require('../models/Course');
const { singleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // res.send(req.params.slug);
        Course.findOne({ slug: req.params.slug})
        .then(course => {
            res.render('courses/show', { course: singleMongooseToObject(course)});
        })
        .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res. render("courses/create");
    }
    
    // [POST] /courses/store
    store(req, res, next) {
        let formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .then(err => {

            });
    }

    // [GET] /courses/:id/store
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: singleMongooseToObject(course),
            }))
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
} 

module.exports = new CourseController();