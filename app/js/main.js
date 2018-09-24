
function calcTrivia() { 
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
	window.location.href = '#triviaTitle';
}

function showTrivia() { 
	document.getElementById('doctor_container').style.display = 'none';
	document.getElementsByClassName('mobile-yes')[0].style.display = 'none';
	document.getElementsByClassName('mobile-no')[0].style.display = 'block';
	window.location.href = '#triviaTitle';
}

function goForm() { 
	document.getElementById('name').focus();
	document.getElementById('name').select();
}

function goTarjeta() { 
	document.getElementById('card').focus();
	document.getElementById('card').select();
}

function goHome() { 
	window.location.href = '/';
}

function goGoogle() { 
	window.location.href = 'http://google.com';
}

function goPayment() { 
	window.location.href = 'payment.html';
}

function goConfirm() { 
	window.location.href = 'confirm.html';
}

function showMobile() { 
	let elementsBlock = document.getElementsByClassName('hide_Mobile-block');
	let elementsFlex = document.getElementsByClassName('hide_Mobile-flex');

		for(let i = 0; i < elementsBlock.length; i++){
		elementsBlock[i].style.display = 'block';
	}
	for(let i = 0; i < elementsFlex.length; i++){
		elementsFlex[i].style.display = 'flex';
	}

	goForm();
}

function runMediaOnly() { 
	if (matchMedia) {
		const mq = window.matchMedia('(max-width: 990px)');
		mq.addListener(WidthChange);
		WidthChange(mq);
	}
}

function WidthChange(mq){
	if(mq.matches){
		document.getElementsByClassName('mobile-no')[0].style.display = 'none';
		document.getElementsByClassName('mobile-yes')[0].style.display = 'block';
	}else{
		document.getElementsByClassName('mobile-yes')[0].style.display = 'none';
		document.getElementsByClassName('mobile-no')[0].style.display = 'block';
	}
}

function mobile_btn1() { 
	let res = callEndpoint('POST', 'url', JSON.stringify({age: 23, height: 72, income: 2500}));
	console.log(res);
}

function callEndpoint(method, url, params = null) {
	let xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader('Content-Type', 'application/json');

	if(params != null)
		xhr.send(params);
	else
		xhr.send();

		xhr.onreadystatechange = function(event) {
		return event.target.response;
	};
}
