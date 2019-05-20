const router = require('express').Router();

router.use('/leads', require('./routes/lead'));

module.exports = router;