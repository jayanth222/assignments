const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username= req.body.username;
    const password= req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin Created Succesfully"
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title =req.body.title;
    const description =req.body.description;
    const imageLink =req.body.imageLink;
    const price =req.body.price;
    //zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        msg: "New course has been created",
        course_Id: newCourse._id
    })
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const allcourses= await Course.find({});
    res.json({
        courses: allcourses
    })
});

module.exports = router;