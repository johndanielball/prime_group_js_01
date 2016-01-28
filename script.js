//John Rachuy II
//Juan Ball
//Andrew Glenn
//Savio Nguyen

var atticus = ['Atticus', '2405', '47000', 3];
var jem = ['Jem', '62347', '63500', 4];
var boo = ['Boo', '11435', '54000', 3];
var scout = ['Scout', '6243', '74750', 5];

var employees = [atticus, jem, boo, scout];

function stiCalc (val) {
	var stiPercent;
	var adjAnnual;
	var totalBonus;

	var stiArray = [];

	stiArray.push(val[0]);
	
	if (val[3] <= 2) {
		stiPercent = 0;
	} else if (val[3] == 3) { 
		stiPercent = 4;
	} else if (val[3] == 4) { 
		stiPercent = 6;
	} else if (val[3] == 5) { 
		stiPercent = 10;
	};

	if (val[1].length == 4) {
		stiPercent += 5;
	}

	if (parseInt(val[2]) > 65000) {
		stiPercent -= 1;
	}

	if (stiPercent > 13) {
		stiPercent = 13;
	}

	stiArray.push(stiPercent);

	adjAnnual = parseInt(val[2]) + parseInt(val[2]) * (stiPercent / 100);

	stiArray.push(adjAnnual);

	totalBonus = Math.round(adjAnnual - parseInt(val[2]));
	
	stiArray.push(totalBonus);

	return stiArray
}

for (var i = 0; i < employees.length; i++) {
	var stiInfo = stiCalc(employees[i]);
	console.log(stiInfo);
};