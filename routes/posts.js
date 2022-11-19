const router = require('express').Router();
const verify = require('./verifyTokens');

router.get('/', verify, (req, res) => {
    res.json({ posts: { tittle: 'my first post', description: "random data that needs to be private" } })
});



module.exports = router;