const router = require('express').Router();
const controller = require('../controllers/lead');

router.post('/', controller.store);
router.get('/', controller.index);
router.get('/:id', controller.get);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;