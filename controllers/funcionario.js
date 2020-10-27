const Funcionario = require('../models/Funcionario')

module.exports = app =>{
    app.get('/funcionario', (req, res) => {
        Funcionario.lista(res)
    });
    
    app.get('/funcionario/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        Funcionario.buscaPorId(id, res)
    });

    app.post('/funcionario', (req, res) => {
        
        const funcionario = req.body

        Funcionario.adiciona(funcionario, res);
    });

    app.patch('/funcionario/:id', (req, res)=> {
        const id = parseInt(req.params.id);
        const valores = req.body;

        Funcionario.alterar(id, valores, res);
    });

    app.delete('/funcionario/:id', (req, res)=>{
        const id = parseInt(req.params.id);

        Funcionario.excluir(id, res);

    });

}