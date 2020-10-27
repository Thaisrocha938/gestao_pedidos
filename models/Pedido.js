const conexao = require('../infra/conexao');

class Pedido {
    adicionaPedido(pedido, res){
        const sql = 'INSERT INTO Pedido SET ?'
        conexao.query(sql, pedido, (erro, resultado) =>{
            if(erro) res.status(400).json(erro);
            else res.status(201).json(resultado);
        });
    }
    mostraPedido(res){
        const sql = 'SELECT P.idPedido, C.nomeCliente FROM pedido P join cliente C on P.Cliente_idCliente = C.idCliente'
        conexao.query(sql, res, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json(resultado);
            }
        });
    }

    alteraPedido(id, valor, res) {
        const sql = 'UPDATE FROM Pedido SET ?  WHERE idPedido = ?'
        conexao.query(sql, [valor, id], (erro, resultado) =>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json(resultado);
            }
        });
    }
}
module.exports = new Pedido;