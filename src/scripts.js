(function(){
	var unslider;
	// $(document).on('ready', function(){
	// 	var $sliderContainer = $('.slider-container').unslider({
	// 		delay: false,
	// 		dots: true,
	// 		fluid: true
	// 	});
	// 	unslider = $sliderContainer.data('unslider');

	// 	$('.nav-item').on('click', function(){
	// 		unslider.move($(this).data('index'));
	// 		$('.nav-item').removeClass('active');
	// 		$(this).addClass('active');
	// 	});

	// 	$sliderContainer.on('unslider.move', function(event, index){
	// 		$('.nav-item').removeClass('active');
	// 		$('.nav-item[data-index=' + index + ']').addClass('active');
	// 	});
	// });
})();
/* App Module */
var sliderData = [
	[
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}, 
		{
			title: 'WANDERING',
			titleBold: 'APP',
			subtitle: 'NOT ALL WHO WONDER ARE LOST',
			imageUrl: '/assets/pics/Wandering_App.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}
	],
	[
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}, 
		{
			title: 'WANDERING',
			titleBold: 'APP',
			subtitle: 'NOT ALL WHO WONDER ARE LOST',
			imageUrl: '/assets/pics/Wandering_App.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}
	],
	[
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}
	],
	[ 
		{
			title: 'WANDERING',
			titleBold: 'APP',
			subtitle: 'NOT ALL WHO WONDER ARE LOST',
			imageUrl: '/assets/pics/Wandering_App.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}
	],
	[
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			text: 'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
		}
	]
]
angular.module('app', [])
    .controller('appCtrl', ['$scope', function($scope){ 
    	$scope.slideDeck = sliderData[0];

    	$scope.changeIndex = function(index){
    		$scope.slideDeck = sliderData[index];
    		$scope.contentIndex = index;
    	};
	}])
    .directive('sliderContainer', function(){
		return {
			restrict: "E",
			replace: true,
			templateUrl:'sliderContainer.html',
			scope: true,
			link: function(scope, elem){
				var unslider;
				scope.$watch('contentIndex', function(){
					if(unslider){
						unslider.destroy();						
					}
					$(elem).unslider({
							delay: false,
							dots: scope.slideDeck.length > 1,
							fluid: true
						}
					);
					unslider = $(elem).data('unslider');
				});

			}
		};
	});