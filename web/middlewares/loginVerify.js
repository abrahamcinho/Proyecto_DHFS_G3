const loginVerify = (req, res, next) => {
	if (res.locals.isAuthenticated) {
		res.locals.isAuthenticated = true;
		res.locals.userLogged = req.session.userLogged;
		res.user = req.session.userLogged;
		res.redirect('/');
	}
	next();
}
    
module.exports = loginVerify;