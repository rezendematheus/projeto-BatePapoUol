let time; let from; let to; let text; let userStatus;


const message = `<mensagem>${time} <b>${from}</b> para <b>${to}</b> ${text}</mensagem>`
const status = `<mensagem>${time} <b>${from}</b> entrou na sala...</mensagem>`

function html(){
    document.querySelector("header").innerHTML = ` <img src="./img/logo 1.png" alt=""> <ion-icon  name="people-outline"></ion-icon>`
    document.querySelector("footer").innerHTML =  `<input type="text" placeholder="Escreva aqui..."> <ion-icon name="paper-plane-outline"></ion-icon>`   
}

html()

function statusCode(promisse){
    const userStatus = promisse.status;
    return userStatus
}

function pedirNome (){
    const nome = {
        name: prompt("Digite um nome de usuário:")
    }
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nome)
    promise.catch(function(error){
        // Em caso de erros
        console.log(error);
        alert("Usuário inválido, tente outro")
        pedirNome()
    });
    promise.then(function(response){
        //Em caso de sucesso
        console.log(response);
    })
}

function entrarSala(){
    pedirNome()
}
function atualizaMensagens(){
    axios.get("")
}