const express = require('express');
const router = express.Router();

// Logout
router.get('/', function(req, res, next) {
	// remove the req.user property and clear the login session
	// req.logout();
	res.clearCookie('remember_me');
      
	// destroy session data
	req.session.destroy();
      
	// redirect to homepage
	res.redirect('/');
});

module.exports = router;