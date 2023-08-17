var url = window.location.href
var params = url.split('=')

var email = document.querySelector('#email')
email.value = params[1].replace('%40', '@')
