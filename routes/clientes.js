const express = require('express');
const router = express.Router();

const { ClienteController } = require('../controllers/cliente');
const { ClientMiddleware } = require('../middlewares/cliente');

const controller = new ClienteController();
const middleware = new ClientMiddleware();


router.get('/', controller.getAll);

router.post('/', middleware.validateBody, controller.create);

router.put('/', middleware.validateBody, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
