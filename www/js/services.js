angular.module('starter.services', ['ngResource', 'starter.endpoints', 'starter.globals'])

.factory('BlogService', function ($resource, GhostBlogEndpoint) {
	console.log('GhostBlogEndpoint.url:', GhostBlogEndpoint.url);
	return $resource(GhostBlogEndpoint.url,
		{},
		{
			'query': {
				method:'GET',
				isArray:false,
				cache: true
		 },
		 'get_post': {
			 method:'GET',
			 isArray:false,
			 cache: true,
			 url: GhostBlogEndpoint.url + '/:postId/',
			 params: {
				 postId:'@postId'
				 //include:'author,tags'
			 }
		 },
		 'get_tag': {
			 method:'GET',
			 isArray:false,
			 cache: true,
			 url: GhostBlogEndpoint.url + '/tag/:tagId/',
			 params: {
				 tagId:'@tagId'
				 //include:'count.posts'
			 }
		 },
		 'get_user': {
			 method:'GET',
			 isArray:false,
			 cache: true,
			 url: GhostBlogEndpoint.url + '/author/:userId/',
			 params: {
				 userId:'@userId'
				 //include:'count.posts'
			 }
		 }
	 },
	 {
		 stripTrailingSlashes: false
	 }
	);
})

//module closing semicolon below
;
