//content vai atuar na página

let isRunning = false;

function startStop(speed){   //essa função é ativada sempre que começar ou parar um scroll
    isRunning = (!isRunning)  //se ele for verdadeira, passa a ser falso, e o contrario também é válido
    if(isRunning) 
    move(speed);
}

function move(speed){ //função recursiva, ativada sempre que a página for executada/atualizada
    requestAnimationFrame(() => {   //quando sai da página o movimento para
        window.scrollBy(0,speed)  //apenas alteração no eixo y
        if(isRunning) 
        move(speed);  //se isRunning for false a animação é finalizada, a função para de ser chamada
    })
}

setTimeout(() => {  //dispara depois de 2 segundos
    isRunning= true
    move(3)  //starta o movimento com 3 segundos
}, 2000);

chrome.runtime.onMessage.addListener((request , sender , sendResponse) => {  
    startStop(request.speed);   //recebe mensagem quando se clica no start/stop
})