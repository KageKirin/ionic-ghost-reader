angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.loginData = {};

	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/login.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeLogin = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.login = function() {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function() {
			$scope.closeLogin();
		}, 1000);
	};
})

/// blog controllers
// list controllers
.controller('BlogPostListCtrl', function($scope, BlogService) {
	var response = BlogService.query(function() {
		console.log(response);
		$scope.posts = response.posts;
	});
})

.controller('BlogTagListCtrl', function($scope, BlogService) {
	var response = BlogService.query(function() {
		console.log(response);
		$scope.tags = response.tags;
	});
})

.controller('BlogUserListCtrl', function($scope, BlogService) {
	var response = BlogService.query(function() {
		console.log(response);
		$scope.users = response.users;
	});
})

// single controllers
.controller('BlogPostCtrl', function($scope, $stateParams, BlogService) {
	console.log('BlogPostCtrl:', $stateParams);
	var response = BlogService.get_post({postId: $stateParams.postId}, function() {
		console.log('BlogPostCtrl.success -- response:', response);
		$scope.post = response.posts[0];
	},
	function() {
		console.log('BlogPostCtrl.failure -- response:', response, response.$promise);
	});
})

.controller('BlogTagCtrl', function($scope, $stateParams, BlogService) {
	console.log('BlogTagCtrl:', $stateParams);
	var response = BlogService.get_tag({tagId: $stateParams.tagId}, function() {
		console.log('BlogTagCtrl.success -- response:', response);
		$scope.tag = response.tags[0];
		$scope.posts = response.posts;
	},
	function() {
		console.log('BlogTagCtrl.failure -- response:', response, response.$promise);
	});
})

.controller('BlogUserCtrl', function($scope, $stateParams, BlogService) {
	console.log('BlogUserCtrl:', $stateParams);
	var response = BlogService.get_user({userId: $stateParams.userId}, function() {
		console.log('BlogUserCtrl.success -- response:', response);
		$scope.user = response.users[0];
		$scope.posts = response.posts;
	},
	function() {
		console.log('BlogUserCtrl.failure -- response:', response, response.$promise);
	});
})

//semicolon must come last
;
