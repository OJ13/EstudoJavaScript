console.log('Arquivo externo de javascript');
/*
var number = 0;
var number1 = 1;
var bool = false;
var double = 0.0;

console.log(typeof number);

number = "0" + number1;

console.log(number);

console.log(typeof number);

function myFunction(){
	var number = 0.1 + 1;
	console.log(number);
};

myFunction();

var age = prompt('How old are you? ');
var ageParser = parseInt(age);
if (ageParser >= 18) {
	console.log('You are authorized');
}else{
	console.log('you are not authorized');
}

switch(true){
	case(ageParser >= 18):
		console.log('You are authorized(switch)');
		break;
	case(ageParser < 18):
		console.log('You are not authorized(switch)');
		break;
	default:
		console.log('default function');
		break;
}
*/
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
for (var a = 0; a <= 10; a++) {
    console.log(a);
}
//Temos também o foreach que tem callback