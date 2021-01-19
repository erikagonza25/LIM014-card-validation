import validator from './validator.js';
let btnEnviar= document.getElementById("buttonOne")

btnEnviar.addEventListener('click', ()=>{
    let name = document.getElementById("nameText").value;
    let number = document.getElementById("numberCardV").value;

    // Si ingresan un valor que no sea un numero y si el espacio esta vacio, saldra una alerta
    if (number === "" || (isNaN(number) === true) ){
        alert("Ingrese un número de tarjeta válido");
        return;
        }
    // Si el campo del nombre esta vacio saldra una alerta
    if(name !==""){
        document.getElementById("firstPage").style.display = "none";
        }else{
        alert("Ingrese su nombre");
        return;
        }

    // Si la tarjeta es valida, se visualizara el "secondPage"... Si la tarjeta es inválida se visualizara el "thirdBody"
       /* if (number ===  ){
            document.getElementById("secondPage").style.display = "block";   
             } else {
            document.getElementById("thirdPage").style.display = "block";   
 
             } */

        document.getElementById("secondPage").style.display = "block"; 

    // Espacios vacios donde ira el número que ingresen y nombre del "secondPage"
        document.getElementById("secondBody").innerHTML += `<p id= "greentingNumber" class="secondLetters">${number+ " Ocultar digitos"}</p>`
        document.getElementById("secondBody").innerHTML += `<p id= "greentingName" class="secondLetters">${name+ " tu tarjeta es válida"}</p>`
     
    // Espacios vacios donde ira el número que ingresen y nombre del "thirdPage"
        document.getElementById("thirdBody").innerHTML += `<p id= "greentingNumberTwo" class="thirdLetters">${number+ " Ocultar digitos"}</p>`
        document.getElementById("thirdBody").innerHTML += `<p id= "greentingNameTwo" class="thirdLetters">${name+ " tu tarjeta es inválida"}</p>`
        
let btnHouse= document.getElementById("house")

btnHouse.addEventListener('click', ()=>{

    // Al presionar el boton "house" se devolvera la pagina de inicio
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";
    
let btnHome= document.getElementById("home")

btnHome.addEventListener('click', ()=>{

    // Al presionar el boton "home" se devolvera la pagina de inicio
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";


})

})

})
 


console.log(validator);
