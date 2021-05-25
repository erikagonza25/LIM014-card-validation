const validator = {

    isValid : function(cardV) {
        let doubleUp = false;
        let sum = 0;
        let curDigit = "";
        // Recorre a la inversa el string ingresado
        for (let i = cardV.length - 1; i >= 0; i--) {
        //Toma cada caracter numerico enteros ingresado en la tarjeta
           curDigit = parseInt(cardV.charAt(i));

        // Doble cada 2 digitos comenzando por el penultimo
        if (doubleUp) {
            //Si un número duplicado resultante es mayor que 9, reste 9 de él
            if ((curDigit*2) > 9) {
                sum +=(curDigit*2)-9;
            // Si no multiplique por 2
            } else {
                sum += curDigit*2;
            }
        } else {
            sum += curDigit;
        }
        doubleUp =!doubleUp;
             }
             // Si el residuo de la division es igual a 0 la tarjeta es valida
             return (sum % 10) == 0  ? true : false;
    },

        maskify: function(card){
        let result = ""
        // Calcula el largo del número de tarjeta
        for(let i=0; i < card.length; i++){
         // Oculta el largo de los números con #
         if (i < card.length - 4) {
            result += "#"
          //Si no muestre los ultimos 4
         } else {
        result += card[i]
            }
            }
        return result

    }

};


export default validator;