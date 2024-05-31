const connection = require('../configs/dbConfig');
const NodeCache = require('node-cache');
const localcache = new NodeCache();

class ClientesService {
    

    async getAll() {
        
        const clientesCache = localcache.get("clientes")

        if (clientesCache !== undefined) {
            console.log('Dados do cache para URL: clientes');
            return clientesCache;
        } else {
            console.log('Dados não encontrados no cache para URL: clientes');
            const clientes = await (await connection).execute('SELECT * FROM clientes');
            localcache.set('clientes', clientes[0], 60);
            return clientes[0]
        }
    }

    async create(client) {
        const query =
            // eslint-disable-next-line max-len
            'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';

        const values =
            [client.nome, client.sobrenome, client.email, client.idade];

        const result = await (await connection).execute(query, values);

        localcache.flushAll();
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
        
        localcache.flushAll();
        return result[0].affectedRows;
    }

    async delete(id) {
        const query = 'DELETE FROM clientes WHERE id = ?';
        const result = await (await connection).execute(query, [id]);

        localcache.flushAll();
        return result[0].affectedRows;
    }
}

module.exports = {ClientesService};
