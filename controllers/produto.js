/* eslint-disable require-jsdoc */
const { ProdutosService } = require('../services/produto');

const service = new ProdutosService();

class ProdutoController {
    async getAll(req, res) {
        const list = await service.getAll();
        return res.status(200).json(list);
    }

    async create(req, res) {
        const produto = req.body;
        const result = await service.create(produto);
        return result ?
            res.status(200).json('Produto criado com sucesso') :
            res.status(400).json('Erro ao criar o produto');
    }

    async update(req, res) {
        const produto = req.body;
        const result = await service.update(produto);
        return result ?
            res.status(200).json('Produto atualizado com sucesso') :
            res.status(400).json('Erro ao atualizar o produto');
    }

    async delete(req, res) {
        const { id } = req.params;
        const result = await service.delete(id);
        return result ?
            res.status(200).json('Produto excluido com sucesso') :
            res.status(400).json('Erro ao deletar o produto');
    }
}

module.exports = { ProdutoController };
