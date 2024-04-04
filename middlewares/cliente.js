/* eslint-disable require-jsdoc */
class ClientMiddleware {
    validateBody(req, res, next) {
        const { body } = req;
        const messages = [];

        if (!body.nome || body.nome === '') {
            messages.push('O campo nome é obrigatório');
        }

        if (!body.sobrenome || body.sobrenome === '') {
            messages.push('O campo sobrenome é obrigatório');
        }

        if (!body.email || body.email === '') {
            messages.push('O campo email é obrigatório');
        }

        if (!body.idade || body.idade === '') {
            messages.push('O campo idade é obrigatório');
        }

        if (
            isNaN(parseInt(body.idade)) ||
            parseInt(body.idade) < 0 ||
            parseInt(body.idade) > 130
        ) {
            messages.push(
                'O campo idade deve ser inteiro positivo e valor possível',
            );
        }


        return messages.length > 0 ?
            res.status(400).json({ messages }) : next();
    }
}

module.exports = { ClientMiddleware };
