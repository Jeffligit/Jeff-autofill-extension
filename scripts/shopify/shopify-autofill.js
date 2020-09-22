
var email = "email@dbsaidnasifbaifba.com"
var firstName = "Jeff"
var lastName = "Li"
var address1 = "123 4th Avenue"
var address2 = "A1"
var city = "New York"
var country = "United States"
var state = "NY"
var zipCode = "10000"
var phoneNumber = "1111111111"

// physical items - it's usually checkout_shipping
$('#checkout_email').val(email);
$('#checkout_shipping_address_first_name').val(firstName);
$('#checkout_shipping_address_last_name').val(lastName);
$('#checkout_shipping_address_address1').val(address1);
$('#checkout_shipping_address_address2').val(address2);
$('#checkout_shipping_address_city').val(city);
$('#checkout_shipping_address_country').val(country);
$('#checkout_shipping_address_zip').val(zipCode);
$('#checkout_shipping_address_phone').val(phoneNumber);
$('#checkout_shipping_address_province').val(state);


// digital items - it's usually checkout_billing
$('#checkout_billing_address_first_name').val(firstName);
$('#checkout_billing_address_last_name').val(lastName);
$('#checkout_billing_address_address1').val(address1);
$('#checkout_billing_address_address2').val(address2);
$('#checkout_billing_address_city').val(city);
$('#checkout_billing_address_country').val(country);
$('#checkout_billing_address_zip').val(zipCode);
$('#checkout_billing_address_phone').val(phoneNumber);
$('#checkout_billing_address_province').val(state);


$(function() {
	try {
		$('#checkout_email').val(email);
		$('#checkout_shipping_address_first_name').val(firstName);
		$('#checkout_shipping_address_last_name').val(lastName);
		$('#checkout_shipping_address_address1').val(address1);
		$('#checkout_shipping_address_address2').val(address2);
		$('#checkout_shipping_address_city').val(city);
		$('#checkout_shipping_address_country').val(country);
		$('#checkout_shipping_address_zip').val(zipCode);
		$('#checkout_shipping_address_phone').val(phoneNumber);
		$('checkout_shipping_address_province').val(state);
	} catch (err) {
		console.log(err)
	}
	try {
		$('#checkout_billing_address_first_name').val(firstName);
		$('#checkout_billing_address_last_name').val(lastName);
		$('#checkout_billing_address_address1').val(address1);
		$('#checkout_billing_address_address2').val(address2);
		$('#checkout_billing_address_city').val(city);
		$('#checkout_billing_address_country').val(country);
		$('#checkout_billing_address_zip').val(zipCode);
		$('#checkout_billing_address_phone').val(phoneNumber);
		$('#checkout_billing_address_province').val(state);
	} catch (err) {
		console.log(err)
	}

});
