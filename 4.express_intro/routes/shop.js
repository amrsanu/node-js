const path = require('path');

const express = require('express');
const adminData = require('./admin');

const rootDir = require('../util/path');

const router = express.Router();

const publicDir = rootDir + '/public';
router.use(express.static(publicDir));

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    imagePath: "/images/book1.jpg",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
