/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const connection = require('../configs/dbConfig');

class ClientesService {
    async getAll() {
        const clientes = await (await connection).execute('SELECT * FROM clientes');
        return clientes[0];
    }

    async create(client) {
        const query =
            // eslint-disable-next-line max-len
            'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';

        const values =
            [client.nome, client.sobrenome, client.email, client.idade];

        const result = await (await connection).execute(query, values);

        return result[0].affectedRows;
    }

    async update(client) {
        const query =
            // eslint-disable-next-line max-len
            'UPDATE clientes set nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?';

        const values =
            [
                client.nome,
                client.sobrenome,
                client.email,
                client.idade,
                client.id,
            ];
        const result = await (await connection).execute(query, values);

        return result[0].affectedRows;
    }

    async delete(id) {
        const query = 'DELETE FROM clientes WHERE id = ?';
        const result = await (await connection).execute(query, [id]);

        return result[0].affectedRows;
    }
}

module.exports = {ClientesService};
