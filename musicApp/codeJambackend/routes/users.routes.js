const express = require('express');
let router = express.Router();
let user = require('../models/users.models');

router.get('/all', (req, res)=>{
    user.getAll(req, res);
})

router.post('/signup', (req, res)=>{
    user.signup(req, res);
})

router.post('/login', (req, res)=>{
    user.login(req, res);
})

module.exports = router;