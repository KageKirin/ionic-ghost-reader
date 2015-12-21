angular.module('starter.endpoints', ['ngResource', 'starter.services'])

.constant('SessionApiEndpoint', {
	url: 'http://localhost:8100/api/sessions'
})

.constant('GhostApiEndpoint', {
	url: 'http://localhost:8100/api'
})

.constant('GhostBlogEndpoint', {
	url: 'http://localhost:8100/api/blog'
})

.constant('VideoApiEndpoint', {
	url: 'stubs/videos.json'
})

;
