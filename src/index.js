import validator from './validator.js';
const btnEnviar= document.getElementById("buttonOne")

btnEnviar.addEventListener('click', ()=>{
    document.getElementById("cardInformation").innerHTML = "";
    document.getElementById("secondInformation").innerHTML = "";
    let name = document.getElementById("nameCard").value;
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

    // Si la tarjeta es válida, se visualizara el "secondPage"... Si la tarjeta es inválida se visualizara el "thirdPage"
       if (isValid === true){
        document.getElementById("secondPage").style.display = "block";
        document.getElementById("cardInformation").innerHTML += `<p class="letters">${maskify}</p>`
        document.getElementById("cardInformation").innerHTML += `<p class="letters">${name+ " tu tarjeta es válida"}</p>`

             } else {
            document.getElementById("thirdPage").style.display = "block";
            document.getElementById("secondInformation").innerHTML += `<p class="letters">${maskify}</p>`
            document.getElementById("secondInformation").innerHTML += `<p class="letters">${name+ " tu tarjeta es inválida"}</p>`
            } 


})
const btnHouse= document.getElementById("house")

btnHouse.addEventListener('click', ()=>{


    // Al presionar el boton "house" se devolvera la pagina de inicio
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";


})

const btnHouseTwo= document.getElementById("houseTwo")

btnHouseTwo.addEventListener('click', ()=>{

    // Al presionar el boton "home" se devolvera la pagina de inicio
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";


})


