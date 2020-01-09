const router = require('express').Router();
const path = require("path");

router.get('/', (req, res) => {
    return res.sendFile(path.resolve("src/views/index.html"));
});

module.exports = router;