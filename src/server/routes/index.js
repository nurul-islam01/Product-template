const express = require('express');
const redirectHandler = require('../handlers/redirect');
const router = express.Router();

router.get('/redirect/:type', redirectHandler);

module.exports = router;
