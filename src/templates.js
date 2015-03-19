angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('sliderContainer.html',
    "<div class=\"slider-container\">\n" +
    "\t<ul>\n" +
    "\t\t<li class=\"content-tile\" ng-repeat=\"slide in slideDeck\">\n" +
    "\t\t\t<div class=\"content-title\">{{slide.title}} <span>{{slide.titleBold}}</span></div>\n" +
    "\t\t\t<div class=\"content-subtitle\">{{slide.subtitle}}</div>\n" +
    "\t\t\t<img class=\"content-image\" ng-src=\"{{slide.imageUrl}}\"></img>\n" +
    "\t\t\t<div class=\"content-copy\">{{slide.text}}</div>\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "</div>"
  );

}]);
