angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('sliderContainer.html',
    "<div class=\"slider-container\">\n" +
    "\t<ul>\n" +
    "\t\t<li class=\"content-tile\" ng-repeat=\"slide in slideDeck\">\n" +
    "\t\t\t<h2 class=\"content-title\">{{slide.title}} <span>{{slide.titleBold}}</span></h2>\n" +
    "\t\t\t<h4 class=\"content-subtitle\">{{slide.subtitle}}</h4>\n" +
    "\t\t\t<img class=\"content-image\" ng-src=\"{{slide.imageUrl}}\"></img>\n" +
    "\t\t\t<div class=\"content-copy\">\n" +
    "\t\t\t\t<p ng-repeat=\"text in slide.texts\">{{text}}</p>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"text-fade\"></div>\n" +
    "\t\t</li>\n" +
    "\t</ul>\n" +
    "</div>"
  );

}]);
