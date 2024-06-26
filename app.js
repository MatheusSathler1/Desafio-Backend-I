const express = require('express');
const app = express();
const port = 3000;

const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);


app.get('/', (req, res) => {
    res.json({ message: 'ok' });
});

app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
