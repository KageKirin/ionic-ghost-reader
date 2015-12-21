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

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/menu.html',
		controller: 'AppCtrl'
	})

	.state('app.search', {
		url: '/search',
		views: {
			'menuContent': {
				templateUrl: 'templates/search.html'
			}
		}
	})

	.state('app.browse', {
		url: '/browse',
		views: {
			'menuContent': {
				templateUrl: 'templates/browse.html'
			}
		}
	})

	//post states
	.state('app.posts', {
		url: "/posts",
		views: {
				'menuContent': {
						templateUrl: "templates/posts.html",
						controller: 'BlogPostListCtrl'
				}
		}
	})

	.state('app.post', {
		url: "/posts/:postId",
		views: {
				'menuContent': {
					templateUrl: "templates/post.html",
					controller: 'BlogPostCtrl'
			}
		}
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


	//tag states
	.state('app.tags', {
		url: "/tags",
		views: {
				'menuContent': {
						templateUrl: "templates/tags.html",
						controller: 'BlogTagListCtrl'
				}
		}
	})

	.state('app.tag', {
		url: "/tags/:tagId",
		views: {
				'menuContent': {
					templateUrl: "templates/tag.html",
					controller: 'BlogTagCtrl'
			}
		}
	})


	//user states
	.state('app.users', {
		url: "/users",
		views: {
				'menuContent': {
						templateUrl: "templates/users.html",
						controller: 'BlogUserListCtrl'
				}
		}
	})

	.state('app.user', {
		url: "/users/:userId",
		views: {
				'menuContent': {
					templateUrl: "templates/user.html",
					controller: 'BlogUserCtrl'
			}
		}
	})

	//closing semicolon follows
	;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/cover');
});
