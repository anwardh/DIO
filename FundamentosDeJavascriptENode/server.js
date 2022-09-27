const http = require ("http"); // Importação do Módulo HTTP
const host ="http://localhost";
const port = 3000;

// console.log (http); -> Para verificar a importação do módulo

http.createServer((req, res) => { // Criando um Servidor
    res.end("<h1>Funcionando</h1>") // Mensagem do Server indicando que está funcionando no navegador
}).listen(port, () => console.log(`Server funcionando em ${host}:${port}`)); // Comunicação pela porta 3000 (definida na variável) e informando (no terminal) que o Server está funcionando
