/**
*	Anti pluque project - 2017/01/13
*	---------
*	Author 		: 	Jafar rezaei
*	mail 		: 	Bomber.man87@yahoo.com
*	website		: 	http://rezaei.ir
*/
!function(a){function b(){a(".navbar").offset().top>80?a(".navbar-fixed-top").addClass("top-nav-collapse"):a(".navbar-fixed-top").removeClass("top-nav-collapse")}jQuery(window).load(function(){jQuery("#preloader").delay(100).fadeOut("slow"),jQuery("#load").delay(100).fadeOut("slow")}),b(),a(window).scroll(function(){b()}),a(function(){a(".navbar-nav li a").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top},1500,"easeInOutExpo"),b.preventDefault()}),a(".page-scroll a").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top},1500,"easeInOutExpo"),b.preventDefault()})}),a(".parallax").parallax()}(jQuery);