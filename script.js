window.onload = async function(){
    
    raccoltaDati();
    grafici();
    
}

async function raccoltaDati(){
    let busta = await fetch("http://localhost:1337/tuttiProdot", 
    {
      "method":"POST",
    });

    let risposta = await busta.json();
    console.log(risposta);

    let _Prodotto;


    let selectCod = document.getElementById("selUt");
    let selectNegozio = document.getElementById("selNegozio");
    let selectProdotto = document.getElementById("selProdotto");

    for(Element of risposta.negozio){
        let option = document.createElement("option");
        option.innerHTML = Element;
        selectNegozio.appendChild(option);
    }

    for(Element of risposta.prodotti){
        let option = document.createElement("option");
       
        for(prodotto of Element.prodotti){
            _Prodotto = prodotto;
            option.innerHTML = _Prodotto;
            selectProdotto.appendChild(option);
        }
    }

    for(Element of risposta.ut){
        let option = document.createElement("option");
        option.innerHTML = Element;
        selectCod.appendChild(option);
    }
}

async function MandaSpesa(){
   let cod = document.getElementById("selUt").value; 
   let negozio = document.getElementById("selNegozio").value;
   let prodotto = document.getElementById("selProdotto").value;

   let obj = {
    cd:cod,
    neg:negozio,
    prod:prodotto
   }

   let busta = await fetch("http://localhost:1337/add",
   {
        "method":"POST",
        "headers":{"Content-type":"application/json"},
        "body":JSON.stringify(obj)
   });

   let risposta = await busta.json();
   
}

async function grafici(){
    let busta = await fetch("http://localhost:1337/grafic", 
    {
      "method":"POST",
    });
    let risposta = await busta.json();
    

    let obj={
        desc:risposta.negozio,
        prod:risposta.prodotti,
        imp:risposta.importo,
        dt:risposta.data

    }

    disegnaGrafico(document.getElementById("canvasUt0"),"polarArea",obj,"nProdotti");
}

function disegnaGrafico(canvas, tipo, data, label){
    let dati = {
        labels: [],
        datasets: [{
          label: label,
          data: []
        }]
    };

   
      dati.labels= data.val;
      dati.datasets[0].data=data.importo;
    
  
      Chart.defaults.color = '#FFF'; 
      let grafico = new Chart(canvas, {
          type: tipo,
          data: dati,
          options: {
              plugins: {
                  legend: {
                      display: false
                  },
              }
          }});
  }
