module.exports = function toReadable(number) {
    const singleNumber = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: '',
    }

    const decimalSingle = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const decimalPrefix = {
        0: '',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }

    const strNumber = number + '';
    const strLength = strNumber.length;
    const inputNumber = strNumber.split('');
    let strResult = '';

    let hundredNumber = '',
        decimalNumber = '';

    switch (strLength) {
        case 3: {
            decimalNumber = '';
            hundredNumber = singleNumber[inputNumber[0]] + ' hundred';

            if (((inputNumber[1] + inputNumber[2]) % 10 == 0) && ((inputNumber[1] + inputNumber[2]) != 0)) {
                decimalNumber = ' ' + decimalPrefix[(inputNumber[1] + inputNumber[2])]
            }
            if (inputNumber[1] + inputNumber[2] < 10 && ((inputNumber[1] + inputNumber[2]) != 0)) {
                decimalNumber = ' ' + singleNumber[inputNumber[2]]
            }

            if ((inputNumber[1] + inputNumber[2] >= 10) && (inputNumber[1] + inputNumber[2] <= 19)) {
                decimalNumber = ' ' + decimalSingle[inputNumber[1] + inputNumber[2]];
            }

            if (((inputNumber[1] + inputNumber[2]) % 10 != 0) && (inputNumber[1] + inputNumber[2] > 19)) {
                decimalNumber = ' ' + decimalPrefix[inputNumber[1] + '0'] + ' ' + singleNumber[inputNumber[2]]
            }

            if (((inputNumber[1] + inputNumber[2]) == 0)) decimalNumber = '';

            strResult = hundredNumber + decimalNumber;
            break;
        }

        case 2: {
            if (((inputNumber[0] + inputNumber[1]) % 10 == 0)) {
                decimalNumber = decimalPrefix[inputNumber[0] + '0']
            }
            if (((inputNumber[0] + inputNumber[1]) < 10)) {
                decimalNumber = singleNumber[inputNumber[2]];
            }
            if (((inputNumber[0] + inputNumber[1]) >= 10) && ((inputNumber[0] + inputNumber[1]) <= 19)) {
                decimalNumber = decimalSingle[inputNumber[0] + inputNumber[1]]
            }
            if ((inputNumber[0] + inputNumber[1]) > 20 && (inputNumber[0] + inputNumber[1]) % 10 != 0) {
                decimalNumber = decimalPrefix[inputNumber[0] + '0'] + ' ' + singleNumber[inputNumber[1]];
            }
            strResult = decimalNumber;
            break;
        }

        case 1: {

            if (inputNumber[0] == 0) {
                strResult = 'zero'
            } else {
                strResult = singleNumber[inputNumber[0]]
            }

            break;
        }

    }
    return strResult;
}



