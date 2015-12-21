angular.module('starter.endpoints', ['ngResource', 'starter.services'])

.constant('GhostApiEndpoint', {
	url: 'http://localhost:8100/api'
})

.constant('GhostBlogEndpoint', {
	url: 'http://localhost:8100/api/blog'
})

.constant('VideoEndpoint', {
	url: 'stubs/videos.json'
})

;
