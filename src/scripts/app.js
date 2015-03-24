(function(){
	/* App Module */
var sliderData = [
	[
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		}, 
		{
			title: 'WANDERING',
			titleBold: 'APP',
			subtitle: 'NOT ALL WHO WONDER ARE LOST',
			imageUrl: '/assets/pics/Wandering_App.jpg',
			texts: [
				'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.',
				'Old Town specializes in online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
			]
		},
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		},
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			texts: [
				'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.',
				'Old Town specializes in online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
			]
		}
	],
	[
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			texts: [
				'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.',
				'Old Town specializes in online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
			]
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		}, 
		{
			title: 'WANDERING',
			titleBold: 'APP',
			subtitle: 'NOT ALL WHO WONDER ARE LOST',
			imageUrl: '/assets/pics/Wandering_App.jpg',
			texts: [
				'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.',
				'Old Town specializes in online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
			]
		},
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			texts: [
				'Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.',
				'Old Town specializes in online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.'
			]
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		}
	],
	[
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		}
	],
	[ 
		{
			title: 'WANDERING',
			titleBold: 'APP',
			subtitle: 'NOT ALL WHO WONDER ARE LOST',
			imageUrl: '/assets/pics/Wandering_App.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		},
		{
			title: 'THIS IS',
			titleBold: 'WHERE WE WORK',
			subtitle: 'THIS IS WHITEFISH, MT',
			imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		},
		{
			title: 'INTRODUCING',
			titleBold: 'OLD TOWN',
			subtitle: 'ADD WHERE TO YOUR DIGITAL EXPERIENCE',
			imageUrl: '/assets/pics/OTC_Office.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		},
		{
			title: 'NATIONAL GEOGRAPHIC',
			titleBold: 'GEOSTORIES',
			subtitle: 'A NEW KIND OF STORYTELLING',
			imageUrl: '/assets/pics/GeoStories.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		}
	],
	[
		{
			title: 'CONTACT',
			titleBold: 'OLD TOWN CREATIVE + INTERACTIVE',
			subtitle: "PRODUCTS, MAPS, AND PROGRAMMING, IT'S WHAT WE DO",
			// imageUrl: '/assets/pics/Introducing-Old-Town.jpg',
			texts: ['Old Town specializes in providing online software solutions and creative expertise that is unique to the world of outdoor recreation and active travel. We help businesses and organizations tell the story of their place and provide the tools they need to connect active people with great experiences.']
		}
	]
]
angular.module('app', [])
    .controller('appCtrl', ['$scope', function($scope){ 
    	$scope.leftNavItems = [
    		"our work",
    		"our products",
    		"where we work",
    		"about",
    		"contact us"
    	];

    	// TODO - get data from API?
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
			link: function(scope, elem){
				var unslider;
				scope.$watch('contentIndex', function(){
					$contentImage = $(elem).find('.content-image')
					if(unslider){
						$contentImage.off('swipeleft').off('swiperight');
						unslider.destroy();
					};

					$(elem).unslider({
							delay: false,
							dots: scope.slideDeck.length > 1,
							fluid: true
						}
					);
					unslider = $(elem).data('unslider');

					$contentImage.on('swiperight', unslider.prev)
								 .on('swipeleft', unslider.next);
				});

			}
		};
	});
})();