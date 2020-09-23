
var email = "email@aaaaa.com"
var firstName = "Jeff"
var lastName = "Li"
var address1 = "123 4th Avenue"
var address2 = "A1"
var city = "New York"
var country = "United States"
var state = "NY"
var zipCode = "10000"
var phoneNumber = "1111111111"


// info is [#id:value]
var information = {
	'#checkout_email': email,
	'#checkout_shipping_address_first_name': firstName,
	'#checkout_shipping_address_last_name': lastName,
	'#checkout_shipping_address_address1': address1,
	'#checkout_shipping_address_address2': address2,
	'#checkout_shipping_address_city': city,
	'#checkout_shipping_address_country': country,
	'#checkout_shipping_address_zip': zipCode,
	'#checkout_shipping_address_phone': phoneNumber,
	'#checkout_shipping_address_province': state,
	'#checkout_billing_address_first_name': firstName,
	'#checkout_billing_address_last_name': lastName,
	'#checkout_billing_address_address1': address1,
	'#checkout_billing_address_address2': address2,
	'#checkout_billing_address_city': city,
	'#checkout_billing_address_country': country,
	'#checkout_billing_address_zip': zipCode,
	'#checkout_billing_address_phone': phoneNumber,
	'#checkout_billing_address_province': state
}

for(var key in information) {
	$(key).val(information[key])
}


// in case the page does not load completely
$(function() {
	for(var key in information) {
		$(key).val(information[key])
	}
});
