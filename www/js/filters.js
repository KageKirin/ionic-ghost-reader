angular.module('starter.filters', [])

//uriComponent
.filter('encode', function() {
	return function(text) {
		return encodeURIComponent(text);
	};
})

.filter('decode', function() {
	return function(encoded_text) {
		return decodeURIComponent(encoded_text);
	};
})

//module closing semicolon below
;
