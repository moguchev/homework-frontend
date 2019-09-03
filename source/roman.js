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
	if (!(typeof str === "string"))
		return;
	str = str.toUpperCase();

	let ret = 0;
	let i = 0;
	let pos = 0;
	while (i < base.length && pos < str.length ) {
		if(str.substr(pos, base[i].char.length) == base[i].char) {
			ret += base[i].value;
			pos += base[i].char.length;
		} else {
			i++;
		}
	}
	
	return ret;
}

const roman = value => {
    let number = parseInt(value);
    if (isNaN(number)) {
		return romanToDigit(value);
    } else {
        return digitToRoman(number);
	}
};
