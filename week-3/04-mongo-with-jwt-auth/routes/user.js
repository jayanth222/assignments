const jwt=require("jsonwebtoken");  
const { Router, response } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg: "User created Succesfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    const user=await User.find({
        username,
        password
    })
    if(!user){
        res.status(411).json({
            msg: "Incorrect username or password"
        })
    }
    const token=jwt.sign({
        username
    },JWT_SECRET)
    res.json({
        token
    })
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses= await Course.find({});
    res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId=req.params.courseId;
    console.log(courseId);
    const username=req.username;
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCources: courseId
        }
    })
    res.json({
        msg: "Purchase complete"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({
        username: req.username
    });
    const courses=await Course.find({
        _id:{
            "$in": user.purchasedCources
        }
    });
    res.json({
        courses: courses
    })
});

module.exports = router