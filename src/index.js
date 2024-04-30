import validator from './validator.js';

const btnEnviar = document.getElementById("buttonOne");
const numberInput = document.getElementById("numberCardV");
const nameInput = document.getElementById("nameCard");

const numeroTarjeta = document.querySelector('#tarjeta .numero')
const nombreTarjeta = document.querySelector('#tarjeta .nombre')
const logoMarca = document.querySelector('#logo-marca')

function checkInputs() {
    const numberValue = numberInput.value.trim();
    const nameValue = nameInput.value.trim();
    
    if (numberValue !== "" && nameValue !== "") {
        btnEnviar.removeAttribute("disabled");
    } else {
        btnEnviar.setAttribute("disabled", "disabled");
    }
}

numberInput.addEventListener("input", (e) => {
    checkInputs
    const valorInput = e.target.value;
    numeroTarjeta.textContent = valorInput;
    if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHTML = '';
	}
    if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = './images/Project/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = './images/Project/master.png';
		logoMarca.appendChild(imagen);
	}
    else if(valorInput[0] == 3){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = './images/Project/dinners.png';
		logoMarca.appendChild(imagen);
	}
});

nameInput.addEventListener("input", (e) => {
    checkInputs
    const valorInput = e.target.value;
    nombreTarjeta.textContent = valorInput;
    if(valorInput == ''){
		nombreTarjeta.textContent = 'John Doe';
	}
});

nameInput.addEventListener("input", checkInputs);

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    
    let name = nameInput.value.trim();
    let number = numberInput.value.trim();
    let maskify = validator.maskify(number);
    let isValid = validator.isValid(number);

    Swal.fire({
        title: isValid ? "Tarjeta válida" : "Oops...",
        html: `
            <p>${maskify}</p>
            <p>${name} tu tarjeta es ${isValid ? 'válida' : 'inválida'}</p>
        `,
        icon: isValid ? "success" : "error"
    });
    if (isValid) {
        nameInput.value = '';
        numberInput.value = '';
    }
});

