exports.getLogin = (req, res, next) => {
    const isLoggedIn = req.get('Cookie').trim().split('=')[1];
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: isLoggedIn,
    });
};

exports.postLogin = (req, res, next) => {
    // req.isLoggedIn = true; // will not work as expected, this get lost when new page loads
    // res.setHeader('Set-Cookie', 'loggedIn=true');
    // using session
    req.session.isLoggedIn = true;
    res.redirect('/');
};