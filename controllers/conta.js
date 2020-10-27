const Conta = require('../models/Conta');
 module.exports=app => {
    app.get('/conta', (req, res) => {
        Conta.mostarConta(res);
    })
 }