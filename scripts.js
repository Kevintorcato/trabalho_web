// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento que contém o texto
    const targetElement = document.getElementById('texto-maquina');
    // Armazena o HTML original do elemento
    const originalHTML = targetElement.innerHTML;
    // Limpa o conteúdo inicial para iniciar a animação de digitação
    targetElement.innerHTML = '';
    // Inicializa o índice para percorrer o HTML
    let index = 0;
    // Flag para controlar se estamos dentro de uma tag HTML
    let tag = false;

    // Função que adiciona caracteres um a um, incluindo HTML
    function typeEffect() {
        if (index < originalHTML.length) {
            let char = originalHTML.charAt(index);

            // Verifica se o caractere é o início ou o fim de uma tag HTML
            if (char === '<') tag = true;
            if (char === '>') {
                tag = false;
                char = originalHTML.charAt(index); // Inclui o fechamento da tag antes de pausar
            }

            // Adiciona o caractere ao HTML do elemento
            targetElement.innerHTML += char;
            index++;
            
            // Continua a animação, com um pequeno delay, ou sem delay se dentro de uma tag
            setTimeout(typeEffect, tag ? 0 : 30);
        }
    }

    // Inicia o efeito de digitação
    typeEffect();
});

// Função auto-executável para carregar emblemas do Credly
(function(){
    var e, t, a, d, r, i, m, n, u, o, c;
    // Define a versão do script
    window.CREDLY_EMBED_JS_LOADER_VERSION="20210331";
    e="www.credly.com";
    // Função para validar o host do emblema
    o=function(e){
        return null != e && /(.*\.credly.com$|(acclaim\.local|localhost|web):500[0-1]$)/.test(e) ? e : void 0;
    };
    // Função para encontrar todos os elementos que possuem um certo atributo de dados
    r=function(e){
        if(null != document.querySelectorAll) return document.querySelectorAll("[data-"+e+"]");
        var l = [], d, r;
        var t = document.getElementsByTagName("*");
        for(d = 0, r = t.length; d < r; d++){
            if(t[d].getAttribute("data-"+e)) l.push(t[d]);
        }
        return l;
    };
    // Encontra todos os elementos com 'data-share-badge-id'
    m = r("share-badge-id");
    for(i = 0, n = m.length; i < n; i++){
        d = m[i];
        a = d.getAttribute("data-share-badge-id");
        c = window.getComputedStyle(d).getPropertyValue('--badge-width') || 150; // Valor padrão se não definido
        l = window.getComputedStyle(d).getPropertyValue('--badge-height') || 240; // Valor padrão se não definido
        t = o(d.getAttribute("data-badge-host")) || e;
        d.innerHTML = '<iframe name="acclaim-badge" allowTransparency="true" frameborder="0" id="embedded-badge-'+a+'" scrolling="no" src="//'+t+'/embedded_badge/'+a+'" style="width: '+c+'px; height: '+l+'px;" title="View my verified achievement on Credly." ></iframe>';
    }
}).call(this);

// Adiciona um ouvinte de eventos ao formulário para controlar o envio
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        alert('As informações foram enviadas com sucesso!'); // Exibe uma mensagem de sucesso
        window.location.reload(); // Recarrega a página após fechar o alerta
    });
});
