var url = window.location.href
var params = url.split('=')

var person = params[1].split('&')
person = params[1].replace('+', ' ')
var message = document.querySelector('#the-message')
message.innerHTML = "Hello " + person 
