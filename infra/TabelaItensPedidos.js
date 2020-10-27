class TabelaItensPedidos {
    init(conexao){
        this.conexao = conexao;
        this.criarItensPedidos();
    }
    criarItensPedidos() {
        const sql = 'CREATE TABLE IF NOT EXISTS ItensPedidos (idItensPedidos INT NOT NULL AUTO_INCREMENT PRIMARY KEY, quantidade INT NOT NULL, idProduto INT NOT NULL, idPedido INT NOT NULL, FOREIGN KEY (idPedido) REFERENCES Pedido (idpedido), FOREIGN KEY (idProduto) REFERENCES Produto (idproduto))';

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Conta criada com sucesso! ");
            }
        });
    } 
}
module.exports = new TabelaItensPedidos;