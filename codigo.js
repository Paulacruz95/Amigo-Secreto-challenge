let listaAmigos=[];
let intentos=0;
let numeroMaximo=2;

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function lista_Amigos(){
    let nombreAmigo=document.getElementById("valorUsuario").value.trim();

    if(nombreAmigo===""){
        alert("Por favor ingresa un nombre correcto");
    }else{
        if(listaAmigos.includes(nombreAmigo)){
            alert("El nombre que acabas de colocar ya esta ingresado");
            limpiarCaja();
        }else{
            let soloLetras=/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; //ayuda a tomar solo texto
            if(!soloLetras.test(nombreAmigo)){
                alert("Por favor ingresa solo letras, sin números ni símbolos.");
                limpiarCaja();
                return;
            }else{
            if(listaAmigos.length==numeroMaximo){
                asignarTextoElemento('h1','Puedes oprimir Sortear');
                asignarTextoElemento('p','Ya asignaste el número total de amigos');
                limpiarCaja();
               
            }else{
                limpiarCaja();
                listaAmigos.push(nombreAmigo);
                document.getElementById("usuario").innerText=listaAmigos.join("\n");
            }
        }
         
        }        
    } 

}
function Sortear(listaAmigos){
    if(listaAmigos.length==numeroMaximo){
    let sorteo = Math.floor(Math.random() * listaAmigos.length);
    return listaAmigos[sorteo];
    }else{
        alert("Te falta ingresar mas amigos en la lista");//cuando se ingresan menos de 9 personas
        document.getElementById('reiniciar').removeAttribute('disabled');//activa botón reiniciar
        exit;
    }
}

function sortearNumero(){
    limpiarContenedor();
    document.getElementById("usuario").innerText= `¡Tu amigo secreto es ${(Sortear(listaAmigos))}!`;
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function limpiarCaja() {
    document.querySelector("#valorUsuario"). value ='';
}

function limpiarContenedor(){
    document.querySelector("#usuario"). innerText ='';
}


function condicionesIniciales(){
    asignarTextoElemento('h1','¡Juguemos! Seremos 10 personas');
    asignarTextoElemento('p','Ingresa el nombre de cada uno de tus amigos');
    intentos=1;
  
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarContenedor();
    //limpiar el contenedor
    limpiarCaja();
    listaAmigos=[];
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //deshabilitar el botón de nuevo juego
  
}

condicionesIniciales();
