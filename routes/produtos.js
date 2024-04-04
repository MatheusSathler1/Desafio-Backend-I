const express = require('express');
const router = express.Router();

const { ProdutoController } = require('../controllers/produto');
const { ProdutoMiddleware } = require('../middlewares/produto');

const controller = new ProdutoController();
const middleware = new ProdutoMiddleware();


router.get('/', controller.getAll);

router.post('/', middleware.validateBody, controller.create);

router.put('/', middleware.validateBody, controller.update);

router.delete('/:id', controller.delete);

module.exports = router;
