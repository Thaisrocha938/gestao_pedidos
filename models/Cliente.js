const conexao = require('../infra/conexao');

class Cliente {
    adiciona(cliente, res) {
        const sql = 'INSERT INTO Cliente SET ?';
        conexao.query(sql, cliente, (erro, resultados) => {
            if(erro){
               res.status(400).json(erro);
            }else{
                res.status(201).json(resultados);
            }
        });
    }
    lista(res){
        const sql = 'SELECT * FROM Cliente';

        conexao.query(sql, (erro, resultados) => {
            if(erro) res.status(400).json(erro);

            else res.status(200).json(resultados);
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Cliente WHERE ${id}`;
        conexao.query(sql, id, (erro, resultado) => {
            const cliente = resultado[0];
            if(erro){
                res.status(400).json(erro);
            }else res.status(200).json(cliente);
        })
    }
}
module.exports = new Cliente;