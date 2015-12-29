angular.module('starter.controllers', [
	'starter.services',
	'starter.filters'
])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

})

/// Ionic controllers
// Dash Controller -- used to updated the app via Ionic Deploy
.controller('DashCtrl', function($scope) {
	var deploy = new Ionic.Deploy();

	// Update app code with new release from Ionic Deploy
	$scope.doUpdate = function() {
		deploy.update().then(function(res) {
			console.log('Ionic Deploy: Update Success! ', res);
		}, function(err) {
			console.log('Ionic Deploy: Update error! ', err);
		}, function(prog) {
			console.log('Ionic Deploy: Progress... ', prog);
		});
	};

	// Check Ionic Deploy for new code
	$scope.checkForUpdates = function() {
		console.log('Ionic Deploy: Checking for updates');
		deploy.check().then(function(hasUpdate) {
			console.log('Ionic Deploy: Update available: ' + hasUpdate);
			$scope.hasUpdate = hasUpdate;
		}, function(err) {
			console.error('Ionic Deploy: Unable to check for updates', err);
		});
	}
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
	var response = BlogService.get_post({id: $stateParams.postId}, function() {
		console.log('BlogPostCtrl.success -- response:', response);
		$scope.post = response.posts[0];
	},
	function() {
		console.log('BlogPostCtrl.failure -- response:', response, response.$promise);
	});
})

.controller('BlogTagCtrl', function($scope, $stateParams, BlogService) {
	console.log('BlogTagCtrl:', $stateParams);
	var response = BlogService.get_tag({id: $stateParams.tagId}, function() {
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
	var response = BlogService.get_user({id: $stateParams.userId}, function() {
		console.log('BlogUserCtrl.success -- response:', response);
		$scope.user = response.users[0];
		$scope.posts = response.posts;
	},
	function() {
		console.log('BlogUserCtrl.failure -- response:', response, response.$promise);
	});
})


///video controller
.controller('VideoCtrl', function($scope, $stateParams, $filter, VideoService) {
	console.log('VideoCtrl:', $stateParams);
	$scope.videoUrl = $filter('base64_decode')($stateParams.videoId);
	console.log('url:', $scope.videoUrl);
})


//semicolon must come last
;
