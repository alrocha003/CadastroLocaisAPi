'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "About Page",
        description: "I'm a description for the About Page :D",
        data: new Date().getDate()
    })
});

module.exports = router;