/* eslint-disable require-jsdoc */
class ProdutoMiddleware {
    validateBody(req, res, next) {
        const { body } = req;
        const messages = [];

        if (!body.nome || body.nome === '') {
            messages.push('O campo nome é obrigatório');
        }

        if (!body.descricao || body.descricao === '') {
            messages.push('O campo descricao é obrigatório');
        }

        if (!body.preco || body.preco === '') {
            messages.push('O campo preco é obrigatório');
        }

        if (isNaN(parseFloat(body.preco)) || parseFloat(body.preco) < 0) {
            messages.push('O campo preco deve ser um numero positivo');
        }


        return messages.length ? res.status(400).json({ messages }) : next();
    }
}

module.exports = { ProdutoMiddleware };
