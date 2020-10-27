const Cliente = require ('../models/Cliente');

module.exports = app => {
    app.get('/cliente', (req, res)=> {
        Cliente.lista(res);
    });

    app.get('/cliente/:id', (req, res)=> {
        const id = parseInt(req.params.id);
        Cliente.buscaPorId(id, res);
    });

    app.post('/cliente', (req, res) => {
        const cliente = req.body;
        Cliente.adiciona(cliente, res);
    });

}