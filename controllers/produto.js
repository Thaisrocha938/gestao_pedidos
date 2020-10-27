const Produto = require('../models/Produto');
module.exports = app =>{
    app.get('/produto', (req, res)=>{
        Produto.listaProduto(res);
    });
    app.get('/produto/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        Produto.buscaPorId(id, res);
    });
    app.post('/produto', (req, res)=>{
        const produto = req.body;
        Produto.adiciona(produto, res);
    });
    app.patch('/produto/:id', (req, res) =>{
        const id = parseInt(req.params.id);
        const valores = req.body;
        Produto.alteraProduto(id, valores, res);
    });
}