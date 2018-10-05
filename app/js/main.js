"use strict";var cookie=function(e){var t=function(t,i,o){var a="";if(o.days){var r=new Date;r.setTime(r.getTime()+24*o.days*60*60*1e3),a="expires="+r.toUTCString()}if(null==t||void 0==t)return"Cookie key not set: "+t;if(null==i||void 0==i)return"Cookie Value not set: "+t;var l=t+"="+i+";"+a+";path="+o.path+";";return null!=o.domain&&(l=l+"Domain="+o.domain+";"),o.secure&&(l+="secure;"),o.httpOnly&&(l+="HttpOnly;"),null!=o.sameSite&&(l=l+"SameSite="+o.sameSite+";"),e.cookie=l,n.length>0?"cookie create => Name: "+t+", Value: "+i+", Expires in: "+o.days+" days":null},n=function(t){if(null==t||void 0==t)return"Cookie key not set: "+t;var n=("; "+e.cookie).split("; "+t+"=");return 2==n.length?n.pop().split(";").shift():null};return{create:function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.sameSite,a=void 0===o?1:o,r=i.secure,l=void 0!==r&&r,u=i.httpOnly,s=void 0!==u&&u,d=i.path,c=void 0===d?"/":d,v=i.domain,p=void 0===v?null:v,m=i.days;return 1===a&&(a=null),2===a&&(a="Strict"),3===a&&(a="Lax"),t(e,n,{sameSite:a,secure:l,httpOnly:s,path:c,domain:p,days:void 0===m?0:m})},read:function(e){return n(e)},delete:function(e){return null==(i=e)||void 0==i?"Cookie key not set: "+i:(t(i,"",{path:"/",days:-1}),n.length>0?"Cookie Deleted":null);var i}}}(document); 


window.onload = function() {
	document.getElementById('btn_welcome').addEventListener('touchstart', function(e) {
		e.stopPropagation();
		document.getElementById('btn_welcome').click();
	});
};

document.getElementById('btn_welcome').addEventListener('click', btn_welcome);

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
	document.getElementById('questions_img_container').style.display = 'none';
	document.getElementsByClassName('mobile-yes')[0].style.display = 'none';
	document.getElementsByClassName('mobile-no')[0].style.display = 'block';
	document.getElementsByClassName('questions__row')[0].style.width = '95%';
	window.location.href = '#triviaTitle';
}

function goForm() { 
	document.getElementById('go_form_first').focus();
	document.getElementById('go_form_first').select();
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

function btn_welcome(e) { 
	e.preventDefault();
	callEndpoint('address');
	showMobile();
}
function btn_end_page() { 
	callEndpoint('end_page');
	goForm();
}

function callEndpoint(step) {
	var cc =  cookie.read('campaign');
	var vv =  cookie.read('landing_version');
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://cr.ommovils.com/stats');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onreadystatechange = function(event) {
		return event.target.response;
	};
	var data = JSON.stringify({'cc': cc, 'v': vv, 'step': step});
	xhr.send(data);

	}

window.onload = function() {
	var closeBtn = document.getElementsByClassName('close')[0];
	if(closeBtn){
		closeBtn.addEventListener('click', closeErrorMsg);
	}
};

function closeErrorMsg() {
	document.getElementById('errorExplanation').style.display = 'none';
}

