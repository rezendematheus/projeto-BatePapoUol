let time; let from; let to; let text; let userStatus; let nome; let count = 0;


const message = `<mensagem>${time} <b>${from}</b> para <b>${to}</b> ${text}</mensagem>`
const status = `<mensagem>${time} <b>${from}</b> entrou na sala...</mensagem>`

function html(){
    document.querySelector("header").innerHTML = ` <img src="./img/logo 1.png" alt=""> <ion-icon  name="people-outline"></ion-icon>`
    document.querySelector("footer").innerHTML =  `<input type="text" placeholder="Escreva aqui..."> <ion-icon name="paper-plane-outline"></ion-icon>`   
}

html()

function mandaStatus(){
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", nome);
    
}

function pedirNome (){
    nome = {
        name: prompt("Digite um nome de usuário:")
    }
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nome)
    promise.catch(function(error){
        // Em caso de erros
        console.log(error);
        if(error.status === 400){
            alert("Usuário inválido, tente outro")
            pedirNome()
        }
        else{
            alert("Algo deu errado, atualize a página e tente novamente")
        }
    });
    promise.then(function(response){
        //Em caso de sucesso
        console.log(response);
    })
    setInterval(mandaStatus, 4000);
}



function entrarSala(){
    pedirNome()
}
function atualizaMensagens(){
    axios.get("")
}