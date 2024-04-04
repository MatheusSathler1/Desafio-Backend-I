/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
const connection = require('../configs/dbConfig');

class ProdutosService {
    async getAll() {
        const products = await (await connection).execute('SELECT * FROM produtos');
        return products[0];
    }

    async create(product) {
        const query =
            'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)';

        const values = [product.nome, product.descricao, product.preco];

        const result = await (await connection).execute(query, values);

        return result[0].affectedRows;
    }

    async update(product) {
        const query =
            'UPDATE produtos set nome = ?, descricao = ?, preco = ? WHERE id = ?';

        const values =
            [product.nome, product.descricao, product.preco, product.id];

        const result = await (await connection).execute(query, values);

        return result[0].affectedRows;
    }

    async delete(id) {
        const query = 'DELETE FROM produtos WHERE id = ?';
        const result = await (await connection).execute(query, [id]);

        return result[0].affectedRows;
    }
}

module.exports = { ProdutosService };
