const customExpress = require('./config/customExpress');
const app = customExpress();
const conexao = require('./infra/conexao');
const Tabelas = require('./infra/Tabelas');
const TabelaPedidos = require('./infra/TabelaPedidos');
const TabelaItensPedidos = require('./infra/TabelaItensPedidos');
conexao.connect( erro => {
    if(erro){
        console.log(erro);
    }else{
        console.log("Banco de dados conectado com sucesso");

        Tabelas.init(conexao);

        TabelaPedidos.init(conexao);

        TabelaItensPedidos.init(conexao);

        app.listen(3000, ()=> console.log("Servidor rodando na porta 3000, acesse: http://localhost:3000"));

    }
})

