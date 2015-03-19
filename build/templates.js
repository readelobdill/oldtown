angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('sliderContainer.html',
    "<div class=\"slider-container\"><ul><li class=\"content-tile\" ng-repeat=\"slide in slideDeck\"><div class=\"content-title\">{{slide.title}}</div><div class=\"content-subtitle\">{{slide.subtitle}}</div><div class=\"content-image\"></div><div class=\"content-copy\">{{slide.text}}</div></li></ul></div>"
  );

}]);
