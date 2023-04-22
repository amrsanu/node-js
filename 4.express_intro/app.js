// Core package
const http = require('http');
const path = require('path');

// Third party packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use defined packages
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// Parses the html body(forms here) and calls next(). 
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(express.static(path.join(__dirname, 'public')));
//  Using the routes defined in other packages.
// Can have filter for routes using the pre route.
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
