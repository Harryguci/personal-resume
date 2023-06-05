const express = require('express');
const router = express.Router();
const messageRouter = require('./MessageRouter');

router.use('/message', messageRouter);
router.get('/', (req, res, next) => {
    res.send('<h1>ERROR 404</h1>');
})
module.exports = router;
