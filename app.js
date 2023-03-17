

var botones =["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/"]

function renderizarGUI(){

    

    const divCalc = document.createElement("div"); 
    divCalc.setAttribute("id","calculadora");
    divCalc.setAttribute("class", "text-center")
    divCalc.setAttribute("style","width:50%; margin:25% auto;")
    document.body.appendChild(divCalc)

    const titulo = document.createElement("h1");
    titulo.innerHTML="Calculadora";
    titulo.setAttribute("style","margin: 20px")
    divCalc.appendChild(titulo);  

    const divPantalla = document.createElement("div");
    divPantalla.setAttribute("id", "pantalla");
    divCalc.appendChild(divPantalla)

    //input de pantalla
    const pantalla = document.createElement("input");
    pantalla.setAttribute("id", "pant");
    pantalla.setAttribute("type", "text");
    pantalla.setAttribute("value", "0");
    pantalla.setAttribute("disabled","true")
    pantalla.setAttribute("class","form-control text-rigth")
    divPantalla.appendChild(pantalla)

    //division de botones
    const divBotones = document.createElement("div");
    divBotones.setAttribute("id", "botones");
    divCalc.appendChild(divBotones)

    for(let i= 0; i< botones.length;i++){
        //creacion de las filas
        if(i%4==0){
            const divFila = document.createElement("div")
            divFila.setAttribute("class","row");
            divBotones.appendChild(divFila);
        }
        let boton  = document.createElement("button"); 
        boton.setAttribute("id","boton"+boton[i]);
        boton.innerHTML=botones[i] // agregar denetro de un elemento un texto <buton>elment </buttom>
           //eventos
        console.log(boton.innerHTML)
        boton.addEventListener("click",function(){
           procesarBoton(boton)
        })
        
        boton.setAttribute("class","btn btn-primary col-3 border-white")
        divBotones.appendChild(boton);
     
    };
    const borrado = document.createElement("button")

    borrado.innerHTML = "Borrar datos"
    borrado.setAttribute("class","btn btn-secondary  col-12 border-white  ")
    borrado.setAttribute("id","borrado")
    divBotones.appendChild(borrado)

    borrado.addEventListener("click",function(){
        borradopantalla=document.getElementById("pant")
        pantalla.value=""
    })

    //eventos 
}    


function procesarBoton(boton){
    let pantalla = document.getElementById("pant")
    if(pantalla.value == "0"){
        pantalla.value=""
    }
    if(boton.innerHTML != "="){
        window.onerror = function(e){
            pantalla.value="error borre y escriba denuevo"
        }
         pantalla.value += boton.innerHTML
    }else{
        let resultado = math.evaluate(pantalla.value)
        pantalla.value=resultado
    }
}

renderizarGUI();