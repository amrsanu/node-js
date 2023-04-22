// For ADMIN: To handle the creation of products

const express = require('express');
const path = require('path');

const rootDir = require('../utils/path');


// Router: Mini express to handle the routes. 
const router = express.Router();

// GET/POST... makes sure to match the exact route.
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// Only for POST: /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;