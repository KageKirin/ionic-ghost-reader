angular.module('starter.endpoints', ['ngResource', 'starter.services'])

.constant('GhostApiEndpoint', {
	url: 'http://localhost:8100/api'		//'https://kyokushindoapp.herokuapp.com/ghost/api/v0.1'
})

.constant('GhostBlogEndpoint', {
	url: 'http://localhost:8100/api/blog'	//'https://kyokushindoapp.herokuapp.com'
})

.constant('VideoEndpoint', {
	url: 'stubs/videos.json'
})

;
