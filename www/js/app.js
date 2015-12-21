// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', [
	'ionic',
	'ngSanitize',
	'starter.endpoints',
	'starter.globals',
	'starter.controllers',
	'starter.filters'
])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function ($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			'self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/embed/.+$'),
			'self', new RegExp('^(http[s]?):\/\/(w{3}.)?player.vimeo\.com/.+$')
		]);
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	//state for left sidemenu
	.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/taglist_sidemenu.html',
		controller: 'BlogTagListCtrl'
	})

	//cover state
	.state('app.cover', {
		url: "/cover",
		views: {
				'menuContent': {
					templateUrl: "templates/cover.html"
			}
		}
	})

	//per-tag post list
	.state('app.tag', {
		url: "/tags/:tagId",
		views: {
				'menuContent': {
					templateUrl: "templates/tag_postlist.html",
					controller: 'BlogTagCtrl'
			}
		}
	})

	//single post view
	.state('app.post', {
		url: "/posts/:postId",
		views: {
				'menuContent': {
					templateUrl: "templates/post.html",
					controller: 'BlogPostCtrl'
			}
		}
	})

	//video view
	.state('app.video', {
		url: "/videos/:videoId",
		views: {
				'menuContent': {
					templateUrl: "templates/video.html",
					controller: 'VideoCtrl'
			}
		}
	})

	//closing semicolon follows
	;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/cover');
});
