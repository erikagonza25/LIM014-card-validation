import validator from './validator.js';
let btnEnviar= document.getElementById("buttonOne")

btnEnviar.addEventListener('click', ()=>{
    document.getElementById("new").innerHTML = "";
    document.getElementById("newTwo").innerHTML = "";
    let name = document.getElementById("nameText").value;
    let number = document.getElementById("numberCardV").value;
    let maskify = validator.maskify(number);
    let isValid = validator.isValid(number);


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

    // Si la tarjeta es valida, se visualizara el "secondPage"... Si la tarjeta es inválida se visualizara el "thirdBody", por ahora esta con Name
       if (isValid === true){
        document.getElementById("secondPage").style.display = "block";
        document.getElementById("new").innerHTML += `<p id= "greentingNumber" class="secondLetters">${maskify}</p>`
        document.getElementById("new").innerHTML += `<p id= "greentingName" class="secondLetters">${name+ " tu tarjeta es válida"}</p>`

             } else {
            document.getElementById("thirdPage").style.display = "block";
            document.getElementById("newTwo").innerHTML += `<p id= "greentingNumberTwo" class="thirdLetters">${maskify}</p>`
            document.getElementById("newTwo").innerHTML += `<p id= "greentingNameTwo" class="thirdLetters">${name+ " tu tarjeta es inválida"}</p>`
            } 


})
let btnHouse= document.getElementById("house")

btnHouse.addEventListener('click', ()=>{


    // Al presionar el boton "house" se devolvera la pagina de inicio
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";


})

let btnHouseTwo= document.getElementById("houseTwo")

btnHouseTwo.addEventListener('click', ()=>{

    // Al presionar el boton "home" se devolvera la pagina de inicio
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";


})


