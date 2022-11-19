const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// validation 


// creating out routes 
// as the req and res are asynchronous we can add try catch to see if there are any errors 
router.post('/register', async (req, res) => {

    // Validate the user data before we make a user
    //const validation = joi.validate(req.body, schema);
    //const { error } = schema.validate(req.body);
    //res.send(error.details[0].message);
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // see if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send("Email already exists!!");

    // hash the password 
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    const user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: hashedpassword,

        }
    );
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    }
    catch (err) {
        res.status(400).send(err);
    }
});

// login url 
router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // see if the user is already in the database
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send("email id is not in the database !");

    // password is correct 
    const validPass = await bcrypt.compare(req.body.password, user.password);
    // user.password is from database 
    if (!validPass) return res.status(400).send("Invalid passowrd");

    //res.send("Logged in !!");

    // jwt web token create and assign 
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    // add the token to the header
    res.header('auth-token', token).send(token);
});

module.exports = router;
