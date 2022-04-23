//popup vai interagir com o usuário

const speedInput = document.getElementById("speedInput");
const startStopButton = document.getElementById("startStopButton");

let speed = Number.parseInt(localStorage.getItem("speed")) || 2; //se não houver opção, a velocidade será dois
speedInput.value = speed;

speedInput.addEventListener("change",event => {   //acionado sempre que houver uma mudança, atualizando a velocidade
    speed = Number.parseInt(event.target.value);  //repassando um número inteiro para o speed
    localStorage.setItem("speed",speed)    //se clicar fora e retornar, a velocidade anteriormente escolhida será salva
})

startStopButton.addEventListener('click',() => {
    sendMessage({ speed : speed })  //poderia ser só {speed}
})

function sendMessage(message){
    chrome.tabs.query({ active:true, currentWindow:true},
        ( tabs ) => {
            chrome.tabs.sendMessage(tabs[0].id,message,(response) => {})
    })
}