const http = require ("http"); // Importação do Módulo HTTP
const host ="http://localhost";
const port = 3000;

const stats = require('./pcRamUsage'); // Importação do Módulo Stats

// console.log (http); -> Para verificar a importação do módulo

http.createServer((req, res) => { // Criando um Servidor

    let url = req.url;
    // Criação da Rota Secreta
    if (url === '/stats'){// Se a URL for igual a nossa pasta padrão (Localhost:3000)
        res.end(JSON.stringify(stats, null, 2)); // Mensagem do Server indicando que está funcionando no navegador
    }else{
        res.end("<h1>Seja Bem-vindo!</h1>");
    }
})
.listen(port, () => console.log(`Server funcionando em ${host}:${port}`)); // Comunicação pela porta 3000 (definida na variável) e informando (no terminal) que o Server está funcionando
