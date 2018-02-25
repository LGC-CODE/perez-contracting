var app = angular.module('myApp', []);

app.directive('ngAlt', function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			if (attrs.ngAlt) {
				elem.on('load', function (event) {
					elem[0].setAttribute("alt", attrs.ngAlt);
				});
			}
		}
	};
});

app.controller('galleryCtrl', ['$scope', function($scope){
	$scope.images = [];
	
	for(var i = 1; i <= 63; i++){
		var gallery = {};
		gallery.image = `/images/con${i}.jpg`;
		gallery.alt = 'drywall, fences, concrete, earthquake reinforcement, gutters, paint, demolition, carpentry, windows, doors';
		
		console.log(gallery);
		$scope.images.push(gallery);
	}
}]);