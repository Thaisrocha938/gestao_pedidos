class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarFuncionario();
        this.criarCliente();
        this.criarProduto();
    }

    criarFuncionario() {
        const sql = 'CREATE TABLE IF NOT EXISTS Funcionario (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100) NOT NULL, cpf VARCHAR(11) NOT NULL, email VARCHAR(50) NOT NULL, senha VARCHAR(10) NOT NULL)';

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela Funcionario criada com sucesso! ");
            }
        })
    }
    criarCliente() {
        const sql = 'CREATE TABLE IF NOT EXISTS Cliente (idCliente INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cpfCliente VARCHAR(11) NULL, nomeCliente VARCHAR(100) NOT NULL, endereco VARCHAR(100) NOT NULL)';

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela cliente criada com sucesso! ");
            }
        })
    }
    criarProduto() {
        const sql = 'CREATE TABLE IF NOT EXISTS Produto ( idproduto INT NOT NULL AUTO_INCREMENT PRIMARY KEY, nomeProduto VARCHAR(100) NOT NULL, valorProduto DECIMAL(10,2) NOT NULL, tempoPreparo TIME NOT NULL)';

        this.conexao.query(sql, erro =>{
            if(erro){
                console.log(erro);
            }else{
                console.log("Tabela produto criada com sucesso! ");
            }
        })
    }

}

module.exports = new Tabelas;