function consultingStocks(event) {
    event.preventDefault()



    let stocksEl = document.querySelector("#stocks").value
    let showStocksEl = document.querySelector("#show-stocks")

    if (stocksEl !== ""){
        clear()
        showMsg(`<strong>Aguarde!<br/> 
        
        Estamos consultando nossa base de dados...</strong>`)


        let url = `https://api-cotacao-b3.labdo.it/api/cotacao/cd_acao/${stocksEl}/`
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then(jsonBody => {
                showStocksEl.innerHTML =
                `
                <span><strong>Data do Último Pregão: ${jsonBody[0].dt_pregao}</strong></span><br/><br/>
                ===========================================<br/>
                <strong>Ação:</strong> ${stocksEl}<br/>
                <strong>Nome da empresa:</strong> ${jsonBody[0].nm_empresa_rdz}<br/>
                <strong>Preço Atual:</strong> R$ ${jsonBody[0].vl_fechamento} <br/>
                ===========================================<br/>
                <strong>Preço de Abertura:</strong> R$ ${jsonBody[0].vl_abertura}<br/>
                <strong>Preço da Máxima:</strong> R$ ${jsonBody[0].vl_maximo}<br/>
                <strong>Preço da Mínima:</strong> R$ ${jsonBody[0].vl_minimo}<br/>
                <strong>Preço de Fechamento:</strong> R$ ${jsonBody[0].vl_fechamento}<br/>
                
                `
            }).catch(function (e) {
                showStocksEl.innerHTML = `Não foi possível realizar sua consulta.<br/>
                Por favor, digite o código da ação. Ex: Petr4`
                               
            })
            
            
    } else if(stocksEl == "") {
        clear()
        showStocksEl.innerHTML = `Não foi possível realizar sua consulta.<br/>
        Por favor, digite o código da ação. Ex: Petr4`       
        
    }


        
}

// function to clear data
function clear(){
    stocksEl = document.querySelector("#stocks").value = ''
    showStocksEl = document.querySelector("#show-stocks").style.display = "block"
    //document.querySelector(".resultado").style.display = "none";
    
}

// function to open box msg
function showBox(){
    var showStocksEl = document.querySelector("#show-stocks")

    if (showStocksEl.style.display != "none"){
        showStocksEl.style.display = "block"
    } else {
        showStocksEl.style.display = "none"
    }
}



//function to show msg

function showMsg(msg){
    showStocksEl =  document.querySelector("#show-stocks").innerHTML = msg
}





/*var userId
function toReq(userId) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(response => response.json())
    .then(jsonBody => {

        document.querySelector("#app").innerHTML = 
        `User Id: ${jsonBody.userId}
        Id: ${jsonBody.id}
        Title: ${jsonBody.title}`


        console.log(jsonBody)
    })
}

toReq(55)*/
