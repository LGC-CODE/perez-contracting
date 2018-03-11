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

app.controller('homeCtrl', ['$scope', '$window', function($scope, $window){
	$scope.closeModal = function(){
		$('.overlay').fadeOut(1500);
	}
}]);

app.controller('galleryCtrl', ['$scope', '$window', function($scope, $window){
	$scope.images = [];
	var limit = $window.location.pathname === '/' ? 12 : 73;
	console.log(limit);
	
	for(var index = 1; index <= limit; index++){
		if(index !== 10 && index !== 11 && index !== 2 && index !== 17 && index !== 12 && index !== 20  && index !== 34  && index !== 37  && index !== 39  && index !== 40  && index !== 42 && index !== 45  && index !== 55) {
			var gallery = {};
			gallery.image = `/images/con${index}.jpg`;
			gallery.alt = 'drywall, fences, concrete, earthquake reinforcement, gutters, paint, demolition, carpentry, windows, doors';
			$scope.images.push(gallery);
		}
	}
}]);