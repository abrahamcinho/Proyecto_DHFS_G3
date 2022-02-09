const express = require('express')
const router = express.Router();

const HOME_PAGE = '/views/home.ejs';

router.get('/', (req, res) => res.sendFile(path.join(__dirname, HOME_PAGE)));

module.exports = router;