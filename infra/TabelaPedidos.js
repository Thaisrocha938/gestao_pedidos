class TabelaPedidos {
    init(conexao){
        this.conexao=conexao;
        this.criarPedido();

    }

    criarPedido() {
        const sql = 'CREATE TABLE IF NOT EXISTS Pedido (idPedido INT NOT NULL PRIMARY KEY, idcliente INT, FOREIGN KEY (idCliente) REFERENCES Cliente (idCliente))';


        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Pedido criada com sucesso! ");
            }
        });
    }
}
module.exports = new TabelaPedidos;