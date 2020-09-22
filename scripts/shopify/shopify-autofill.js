

var email = "email@email.com"
var firstName = "Jeff"
var lastName = "Li"
var address1 = "123 4th Avenue"
var address2 = "A1"
var city = "New York"
var country = "United States"
var state = "NY"
var zipCode = "10000"
var phoneNumber = "1111111111"

function shopifyAutofill() {
	try {
		document.getElementById("checkout_email").value = email
		document.getElementById("checkout_shipping_address_first_name").value = firstName
		document.getElementById("checkout_shipping_address_last_name").value = lastName
		document.getElementById("checkout_shipping_address_address1").value = address1
		document.getElementById("checkout_shipping_address_address2").value = address2
		document.getElementById("checkout_shipping_address_city").value = city
		document.getElementById("checkout_shipping_address_country").value = country
		document.getElementById("checkout_shipping_address_province").value = state
		document.getElementById("checkout_shipping_address_zip").value = zipCode
		document.getElementById("checkout_shipping_address_phone").value = phoneNumber
	} catch {
		console.log("not checkout page")
	}
	
}


// shopifyAutofill()
$(function() {
	$("#checkout_email").hide();

});