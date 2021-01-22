const validator = {

    isValid : function(cardV) {
        let doubleUp = false;
        let sum = 0;
        let curDigit = "";

        for (let i = cardV.length - 1; i >= 0; i--) {

           curDigit = parseInt(cardV.charAt(i));

        if (doubleUp) {

            if ((curDigit*2) > 9) {
                sum +=(curDigit*2)-9;
            } else {
                sum += curDigit*2;
            }
        } else {
            sum += curDigit;
        }
        doubleUp =!doubleUp;
             }
             return (sum % 10) == 0  ? true : false;
    },

        maskify: function(card){
        let result = ""
        for(let i=0; i < card.length; i++){

        if (i <= card.length - 5) {
            result += "#"

        } else {
            result += card[i]
        }
        }
        return result

    }

};


export default validator;