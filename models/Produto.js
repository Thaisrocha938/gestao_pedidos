const conexao = require('../infra/conexao');

class Produto {
    adiciona(produto, res){
        const sql = 'INSERT INTO produto SET ?';
        conexao.query(sql, produto, (erro, resultados)=> {
            if(erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(201).json(resultados);
            }
        })
    }
    listaProduto(res){
        const sql = 'SELECT * FROM produto';
        conexao.query(sql, res, (erro, resultado)=>{
            if(erro) res.status(400).json(erro);
            else res.status(200).json(resultado);
        })
    }
    buscaPorId(id, res){
        const sql = `SELECT * FROM produto WHERE idproduto=${id}`;
        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }
    alteraProduto(id, valores, res){
        const sql = 'UPDATE produto SET ? WHERE idproduto = ?';
        conexao.query(sql, [valores, id], (erro, resultado)=>{
            if(erro){
                res.status(400).json(erro);
            }else {
                res.status(200).json(resultado);
            }
        })
    }
}
module.exports = new Produto;