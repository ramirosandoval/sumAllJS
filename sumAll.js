const sumAll = function(number1,number2) {
    let finalSum = 0;

    if(typeof number1 != "number" || typeof number2 != "number" || number1 < 0 || number2 < 0){
        return 'ERROR';
    }

    if (number1<number2){

        for (number1; number1 <= number2; number1++) {
            finalSum+=number1;
        }
        return finalSum;

    }else if (number1>number2){

        for (number2; number2 <= number1; number2++) {
            finalSum+=number2;
        }
        return finalSum;
    }
}

console.log(sumAll(-65, -123));

module.exports = sumAll
