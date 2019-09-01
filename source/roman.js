'use strict';

var arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
var rom = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];

function arabToRoman(number) {
	if(!number) return '';

	var ret = '';
	var i = arab.length - 1;
	while(number > 0) {
		if(number >= arab[i]) {
			ret += rom[i];
			number -= arab[i];
		} else {
			i--;
		}
	}
	return ret;
};

function romanToArab(str)
{
	str = str.toUpperCase();

	var ret = 0;
	var i = arab.length - 1;
	var pos = 0;
	while(i >= 0 && pos < str.length ) {
		if(str.substr(pos, rom[i].length) == rom[i]) {
			ret += arab[i];
			pos += rom[i].length;
		} else {
			i--;
		}
	
	}
	return ret;
};

const roman = function (value)
{
    var number = Number(value);
    if(isNaN(number)) {
        return romanToArab(value.toUpperCase());
    } else {
        return arabToRoman(number);
    }
};
