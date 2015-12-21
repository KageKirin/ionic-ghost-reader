angular.module('starter.filters', [])

.filter('decode', function() {
	return function(encoded_text) {
		return decodeURIComponent(encoded_text);
	};
})

//module closing semicolon below
;
