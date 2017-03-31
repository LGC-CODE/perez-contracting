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
	$scope.images = [
		{image: 'images/con4.jpg', alt: 'drywall oakland ca'},
		{image: 'images/con5.jpg', alt: 'gutters san leandro ca'},
		{image: 'images/con6.jpg', alt: 'demolition in the bay area'},
		{image: 'images/con7.jpg', alt: 'window installations oakland'},
		{image: 'images/con8.jpg', alt: 'door installation oakland'},
		{image: 'images/con9.jpg', alt: 'fence installation oakland'},
		{image: 'images/con10.jpg', alt: 'roofing services oakland ca'},
		{image: 'images/con11.jpg', alt: 'home painting service oakland ca'},
		{image: 'images/con12.jpg', alt: 'oakland handyman'},
		{image: 'images/con13.jpg', alt: 'san leandro construction'},
		{image: 'images/con14.jpg', alt: 'berkeley construction services'},
		{image: 'images/con15.jpg', alt: 'oakland home remodeling'},
		{image: 'images/con16.jpg', alt: 'san francisco remodelations'},
		{image: 'images/con17.jpg', alt: 'drywall installations in the bay area'},
		{image: 'images/con18.jpg', alt: 'window installations in san leandro'},
		{image: 'images/con19.jpg', alt: 'handyman services in oakland ca'},
		{image: 'images/con0.jpg', alt: 'drywall oakland ca'},
		{image: 'images/con20.jpg', alt: 'gutters san leandro ca'},
		{image: 'images/con21.jpg', alt: 'demolition in the bay area'},
		{image: 'images/con22.jpg', alt: 'window installations oakland'},
		{image: 'images/con23.jpg', alt: 'door installation oakland'},
		{image: 'images/con24.jpg', alt: 'fence installation oakland'},
		{image: 'images/con25.jpg', alt: 'roofing services oakland ca'},
		{image: 'images/con26.jpg', alt: 'home painting service oakland ca'},
		{image: 'images/con27.jpg', alt: 'oakland handyman'},
		{image: 'images/con28.jpg', alt: 'san leandro construction'},
		{image: 'images/con29.jpg', alt: 'berkeley construction services'},
		{image: 'images/con30.jpg', alt: 'oakland home remodeling'},
		{image: 'images/con31.jpg', alt: 'san francisco remodelations'},
		{image: 'images/con32.jpg', alt: 'drywall installations in the bay area'},
		{image: 'images/con33.jpg', alt: 'window installations in san leandro'},
		{image: 'images/con34.jpg', alt: 'handyman services in oakland ca'},
		{image: 'images/con35.jpg', alt: 'drywall oakland ca'},
		{image: 'images/con36.jpg', alt: 'gutters san leandro ca'},
		{image: 'images/con37.jpg', alt: 'demolition in the bay area'},
		{image: 'images/con38.jpg', alt: 'door installation oakland'},
		{image: 'images/con39.jpg', alt: 'fence installation oakland'},
		{image: 'images/con40.jpg', alt: 'roofing services oakland ca'},
		{image: 'images/con41.jpg', alt: 'home painting service oakland ca'},
		{image: 'images/con42.jpg', alt: 'oakland handyman'},
		{image: 'images/con43.jpg', alt: 'san leandro construction'},
		{image: 'images/con44.jpg', alt: 'berkeley construction services'},
		{image: 'images/con45.jpg', alt: 'oakland home remodeling'},
		{image: 'images/con46.jpg', alt: 'san francisco remodelations'},
		{image: 'images/con47.jpg', alt: 'drywall installations in the bay area'},
		{image: 'images/con48.jpg', alt: 'window installations in san leandro'},
		{image: 'images/con49.jpg', alt: 'handyman services in oakland ca'},
		{image: 'images/con50.jpg', alt: 'handyman services in oakland ca'}
	]
}]);