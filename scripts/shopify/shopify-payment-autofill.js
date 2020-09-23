var cc = 2222222
var expirationMonth = 08
var expirationYear = 20
var ccName = "Jeff Li"
var cvv = 123

var information = {
    'number': cc,
    'name': ccName,
    'expiry': `${expirationMonth}/${expirationYear}`,
    'verification_value': cvv
}

window.onload = function () {
    for(var key in information) {
        let element = document.getElementById(key)
        element.value = information[key]
        element.dispatchEvent(new Event('change'));
    }
};