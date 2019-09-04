'use strict';

const base = [
    { value: 1000, char: 'M' },
    { value: 900, char: 'CM' },
    { value: 500, char: 'D' },
    { value: 400, char: 'CD' },
    { value: 100, char: 'C' },
    { value: 90, char: 'XC' },
    { value: 50, char: 'L' },
    { value: 40, char: 'XL' },
    { value: 10, char: 'X' },
    { value: 9, char: 'IX' },
    { value: 5, char: 'V' },
    { value: 4, char: 'IV' },
    { value: 1, char: 'I' }
]

function digitToRoman(number) {
    if (!number) return '';

    return base.reduce((result, currentValue) => {
        while (number >= currentValue.value) {
            result += currentValue.char;
            number -= currentValue.value;
        }

        return result;
    }, ''); 
}

function romanToDigit(str) {
    if (typeof str !== "string") {
       return;
    }
    str = str.toUpperCase();
	
    return base.reduce((result, currentValue) => {
        while (currentValue.char === str.substr(0, currentValue.char.length)) {
	    if (str.length !== 0) {
		result +=  currentValue.value;
		str = str.substr(0 + currentValue.char.length);
	    }
	}
	return  result;
    }, 0 );
}

const roman = value => {
    const number = parseInt(value, 10);
    if (Number.isNaN(number)) {
	return romanToDigit(value);
    }
    return digitToRoman(number);
};
