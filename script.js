let type; let time; let from; let to; let text; let userStatus; let nome; let data;

pedirNome();    

function html(){
    document.querySelector("header").innerHTML = ` <img src="./img/logo 1.png" alt=""> <ion-icon  name="people-outline"></ion-icon>`
    document.querySelector("footer").innerHTML =  `<input type="text" placeholder="Escreva aqui..."> <ion-icon class = "sender" onclick="enviaMensagem()" name="paper-plane-outline"></ion-icon>`   
}

html()

function mandaStatus(){
    axios.post("https://mock-api.driven.com.br/api/v6/uol/status", nome);
}

function buscaMensagens(){
    document.querySelector("chat").innerHTML =""
    const response = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    response.then(function(response){
        data = response.data
        data.forEach((element) => {
            
            if(element.to === "Todos" || element.to === nome){
                document.querySelector("chat").innerHTML += `<${element.type}><p><time>(${element.time})</time> <span>${element.from}</span> para <span>${element.to}</span> ${element.text}</p></${element.type}>`;
            }
        })
        document.querySelector  ("chat").lastChild.scrollIntoView()
    },
    )
    response.catch(function(error){
        console.log(error)
    })
}

function enviaMensagem() {
    const texto = document.querySelector("input").value
    document.querySelector("input").value = ""
    let message = {from: nome.name, to: "Todos", text:texto, type:"message"}
    axios.post("https://mock-api.driven.com.br/api/v6/uol/messages", message)
    .then((response) => console.log(response), buscaMensagens())
    .catch((error) => {if(error.status ==! 200){
        console.log(error)
        window.location.reload()
    }
    } 
)
}

function pedirNome (){
    nome = {
        name: prompt("Digite um nome de usuário:")
    }
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", nome)
    promise.catch(function(error){
        // Em caso de erros
        console.log(error);
        alert("Usuário inválido, tente outro");
        pedirNome();

    });
    promise.then(function(response){
        //Em caso de sucesso
        console.log(response);
        setInterval(mandaStatus, 2000);
        buscaMensagens();
        setInterval(buscaMensagens, 5000, response);
    })
}

