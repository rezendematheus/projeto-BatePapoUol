const message = `<mensagem>${time} <b>${from}</b> para <b>${to}</b> ${text}</mensagem>`
const status = `<mensagem>${time} <b>${from}</b> entrou na sala...</mensagem>`

function html(){
    document.querySelector("header").innerHTML = ` <img src="./img/logo 1.png" alt=""> <ion-icon  name="people-outline"></ion-icon>`
    document.querySelector("footer").innerHTML =  `<input type="text" placeholder="Escreva aqui..."> <ion-icon name="paper-plane-outline"></ion-icon>`   
}
html()