const Pedido = require('../models/Pedido');

module.exports = app =>{
    app.get('/pedido', (req, res) =>{
        Pedido.mostraPedido(res);
    });
    app.post('/criaPedido', (req, res) =>{
        const pedido = req.body;
        Pedido.adicionaPedido(pedido, res);
    });
    app.patch('/alteraPedido/:id', (req, res) =>{
        const id = parseInt(req.params.id);
        const valor = req.body;
        Pedido.alteraPedido(id, valor, res);
    });
}