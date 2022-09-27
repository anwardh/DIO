const os = require ("os");

setInterval (() => { // Esta função irá, a cada milisegundo, executar o códio em seu interior que lhe trará, em "tempo real", o status dos componentes do computador.

    // console.log (os); -> Testando o Módulo OS

    const {arch, platform, totalmem, freemem} = os; // Uso da "Desestruturação" para a retirada de alguns métodos contidos no OS
    const tRam = totalmem()/1024/1024; // Para conversão em MB
    const fRam = freemem()/1024/1024; // Para conversão em MB
    const usage = (fRam / tRam) * 100; // Para verificar a porcentagem de RAM que está sendo consumida em tempo real



    const stats = {
        OS: platform(), // Identifica o tipo de Sis. Operacional
        Arch: arch(), // Identifica a Arquitetura da Placa-mãe
        TotalRAM: `${parseInt(tRam)} MB`, // Identifica o Total de bytes da RAM (ocupados) passados pelo método "parseInt" em formato de String
        Freemen: `${parseInt(fRam)} MB`, // Identifica o Total de bytes da RAM (livres) passados pelo método "parseInt" em formato de String
        Usage: `${usage.toFixed(2)} %`, // Configura em 2 casas decimais o percentual de RAM consumidos em tempo real
    }

    console.clear(); // Para manter a tela do console "limpa"
    console.table(stats); // Para imprimir na tela em forma de Tabela


    exports.stats = stats; // Exportação do Módulo Stats

}, 1000);