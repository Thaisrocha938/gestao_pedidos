
const conexao = require('../infra/conexao');

class Conta {
    mostarConta(res){
        const sql = 'SELECT I.pedido, C.nomeCliente, I.quantidade, PD.nomeProduto, (I.quantidade * PD.valorProduto) as valorTotal FROM itenspedidos I join pedido P on I.pedido = P.idPedido join produto PD on I.produto = PD.idproduto join cliente C on P.Cliente_idCliente = C.idCliente';
        
        conexao.query(sql, res, (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }
            else{
                res.status(200).json(resultado);
            }
        })
    }
}
module.exports = new Conta