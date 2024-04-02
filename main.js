function ativarBotao(botao) {
    // Verificar se o botão está ativado
    var estaAtivo = botao.classList.contains("ativo");
    
    // Desativar todos os botões
    var botoes = document.querySelectorAll(".botao");
    for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativo");
    }
    
    // Ativar o botão apenas se não estiver ativado
    if (!estaAtivo) {
    botao.classList.add("ativo");
    }
    }
    // Definir a data-alvo (sete dias a partir da data atual)
    var dataAlvo = new Date();
    dataAlvo.setDate(dataAlvo.getDate() + 7);
    dataAlvo.setHours(23);
    dataAlvo.setMinutes(59);
    dataAlvo.setSeconds(59);
    dataAlvo = dataAlvo.getTime();
    
    // Atualizar o contador a cada segundo
    var intervalo = setInterval(function() {
    // Obter a data e hora atuais
    var agora = new Date().getTime();
    
    // Calcular a diferença entre a data-alvo e a data atual
    var diferenca = dataAlvo - agora;
    
    // Calcular dias, horas, minutos e segundos restantes
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Exibir o contador na página
    document.getElementById("dias").innerHTML = formatarTempo(dias);
    document.getElementById("horas").innerHTML = formatarTempo(horas);
    document.getElementById("minutos").innerHTML = formatarTempo(minutos);
    document.getElementById("segundos").innerHTML = formatarTempo(segundos);
    
    // Se a contagem regressiva terminar, exibir uma mensagem
    if (diferenca < 0) {
    clearInterval(intervalo);
    document.getElementById("timer").innerHTML = "EXPIRADO";
    }
    }, 1000); // Atualizar a cada segundo
    
    // Função para formatar o tempo (adicionar zero à esquerda, se necessário)
    function formatarTempo(tempo) {
    return tempo < 10 ? "0" + tempo : tempo;
    }
    // Função para formatar o tempo (remover zero à esquerda, se necessário)
    function formatarTempo(tempo) {
    return tempo < 10 ? tempo.toString() : tempo;
    }