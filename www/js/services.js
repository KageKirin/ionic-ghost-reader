angular.module('starter.services', ['ngResource', 'starter.endpoints', 'starter.globals'])

.factory('BlogService', function ($resource, GhostBlogEndpoint) {
	console.log('GhostBlogEndpoint.url:', GhostBlogEndpoint.url);
	return $resource(GhostBlogEndpoint.url + '/:type/:id/',
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
			 params: {
				 id:'@id'
				 //include:'author,tags'
			 }
		 },
		 'get_tag': {
			 method:'GET',
			 isArray:false,
			 cache: true,
			 params: {
				 id:'@id',
				 type:'tag'
				 //include:'count.posts'
			 }
		 },
		 'get_user': {
			 method:'GET',
			 isArray:false,
			 cache: true,
			 params: {
				 id:'@id',
				 type:'author'
				 //include:'count.posts'
			 }
		 }
	 },
	 {
		 stripTrailingSlashes: false
	 }
	);
})


.factory('VideoService', function ($resource, VideoEndpoint) {
	console.log('VideoEndpoint.url:', VideoEndpoint.url);
	return $resource(VideoEndpoint.url,
		{},
		{
			'query': {
				method:'GET',
				isArray:false,
				cache: true
			},
			'get': {
				method:'GET',
				isArray:false,
				cache: true,
				params: {
					videoId:'@videoId'
				}
			}
		},
		{}
 );
})


//module closing semicolon below
;
