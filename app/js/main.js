"use strict";

function calcTrivia() {
  var triviaRes = trivia.getCheck();
  var count = {};
  triviaRes.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  var max = Object.keys(count).reduce(function (key, val) {
    return count[key] > count[val] ? key : val;
  });
  document.getElementById('trivia').style.display = 'none';
  document.getElementById('questions__results').style.display = 'block';
  var resObj = proximus.getKeyValue(langObj, 'respuestas');

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

function goForm() {
  document.getElementById('name').focus();
  document.getElementById('name').select();
}

function goHome() {
  window.location.href = '/';
}