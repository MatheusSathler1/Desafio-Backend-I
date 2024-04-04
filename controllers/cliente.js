/* eslint-disable require-jsdoc */
const { ClientesService } = require('../services/cliente');

const service = new ClientesService();

class ClienteController {
    async getAll(req, res) {
        const list = await service.getAll();
        return res.status(200).json(list);
    }

    async create(req, res) {
        const cliente = req.body;
        const result = await service.create(cliente);
        return result ?
            res.status(200).json('Cliente criado com sucesso') :
            res.status(400).json('Erro ao criar o cliente');
    }

    async update(req, res) {
        const cliente = req.body;
        const result = await service.update(cliente);
        return result ?
            res.status(200).json('Cliente atualizado com sucesso') :
            res.status(400).json('Erro ao atualizar o cliente');
    }

    async delete(req, res) {
        const { id } = req.params;
        const result = await service.delete(id);
        return result ?
            res.status(200).json('Cliente excluido com sucesso') :
            res.status(400).json('Erro ao deletar o cliente');
    }
}

module.exports = { ClienteController };
