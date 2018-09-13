/* global proximus, trivia, langObj */

function calcTrivia() { // eslint-disable-line
	let triviaRes = trivia.getCheck();
	let count = {};
	triviaRes.forEach(i => {
		count[i] = (count[i] || 0) + 1;
	});

	let max = Object.keys(count).reduce((key, val) => (count[key] > count[val] ? key : val));

	document.getElementById('trivia').style.display = 'none';
	document.getElementById('questions__results').style.display = 'block';

	let resObj = proximus.getKeyValue(langObj, 'respuestas');

	if (max === 'a') {
		document.getElementById('triviaTitle').innerHTML = resObj.A.titulo;
		document.getElementById('triviaText').innerHTML = resObj.A.text;
	} else if (max === 'b') {
		document.getElementById('triviaTitle').innerHTML = resObj.B.titulo;
		document.getElementById('triviaText').innerHTML = resObj.B.text;
	} else {
		document.getElementById('triviaTitle').innerHTML = resObj.Other.titulo;
		document.getElementById('triviaText').innerHTML = resObj.Other.text;
	}
}

function showTrivia() { // eslint-disable-line
	document.getElementById('doctor_container').style.display = 'none';
	document.getElementsByClassName('mobile-yes')[0].style.display = 'none';
	document.getElementsByClassName('mobile-no')[0].style.display = 'block';
	window.location.href = '#triviaTitle';
}

function goForm() { // eslint-disable-line
	document.getElementById('name').focus();
	document.getElementById('name').select();
}

function goTarjeta() { // eslint-disable-line
	document.getElementById('card').focus();
	document.getElementById('card').select();
}

function goHome() { // eslint-disable-line
	window.location.href = '/';
}

function goGoogle() { // eslint-disable-line
	window.location.href = 'http://google.com';
}

function goPayment() { // eslint-disable-line
	window.location.href = 'payment.html';
}

function goConfirm() { // eslint-disable-line
	window.location.href = 'confirm.html';
}

// Media Queries
function runMediaOnly() { // eslint-disable-line
	if (matchMedia) {
		const mq = window.matchMedia('(max-width: 990px)');
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
}

// media query change
function WidthChange(mq){
	if(mq.matches){
		document.getElementsByClassName('mobile-no')[0].style.display = 'none';
		document.getElementsByClassName('mobile-yes')[0].style.display = 'block';
	}else{
		document.getElementsByClassName('mobile-yes')[0].style.display = 'none';
		document.getElementsByClassName('mobile-no')[0].style.display = 'block';
	}
}
