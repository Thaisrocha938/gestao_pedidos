const conexao = require('../infra/conexao');

class Funcionario {
    
    adiciona(funcionario, res) {
        const sql = 'INSERT INTO Funcionario SET ?';
        conexao.query(sql, funcionario, (erro, resultados) =>{
            if(erro) {
                res.status(400).json(erro);
            }else{
                res.status(201).json(resultados);
            }
        });
    }
    lista(res) {
        const sql = 'SELECT * FROM Funcionario'

        conexao.query(sql, (erro, resultados) =>{
            if(erro) res.status(400).json(erro);

            else res.status(200).json(resultados);
        });
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Funcionario WHERE id=${id}`

       
        conexao.query(sql, (erro, resultados)=>{
            const funcionario = resultados[0]
            if(erro) res.status(400).json(erro);

            else res.status(200).json(funcionario);
        });
    }
    excluir(id, res){
        const sql = `DELETE FROM Funcionario where id= ${id}`;


        conexao.query(sql, id, (erro, resultado) => {
            if(erro) res.status(400).json(erro);
            else res.status(200).json({id});
        });
    }
    alterar(id, valores, res){
        const sql = 'UPDATE Funcionario SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) res.status(400).json(erro);

            else res.status(200).json(resultados);
        }) ;

    }
}

module.exports = new Funcionario;