function fusionSetAnimationData(i){"off"===fusionAnimationsVars.status_css_animations||cssua.ua.mobile&&"desktop_and_mobile"!==fusionAnimationsVars.status_css_animations?jQuery("body").addClass("dont-animate").removeClass("do-animate"):(jQuery("body").addClass("do-animate").removeClass("dont-animate"),void 0!==i&&void 0!==i.data.custom&&jQuery(window).initElementAnimations())}!function(i){"use strict";window.awbAnimationObservers={},i.fn.initElementAnimations=function(){i.each(window.awbAnimationObservers,function(n,t){i.each(t[0],function(i,n){t[1].unobserve(n)}),delete window.awbAnimationObservers[n]}),"IntersectionObserver"in window?i.each(fusion.getObserverSegmentation(i(".fusion-animated")),function(n){var t=fusion.getAnimationIntersectionData(n),e=new IntersectionObserver(function(n,o){i.each(n,function(n,o){var a,s,u,r,d=i(o.target);o.isIntersecting&&(r=!0,0!==t.threshold&&(i(window).height()<d.outerHeight()?i(window).height()/d.outerHeight()>o.intersectionRatio&&(r=!1):1>o.intersectionRatio&&(r=!1)),r&&(d.parents(".fusion-delayed-animation").length||(d.css("visibility","visible"),a=d.data("animationtype"),s=d.data("animationduration"),d.addClass(a),s&&(d.css("animation-duration",s+"s"),u=d,setTimeout(function(){u.removeClass(a)},1e3*s))),e.unobserve(o.target)))})},t);i(this).each(function(){e.observe(this)}),window.awbAnimationObservers[n]=[this,e]}):i(".fusion-animated").each(function(){i(this).parents(".fusion-delayed-animation").length||i(this).css("visibility","visible")})}}(jQuery),jQuery(document).ready(function(){fusionSetAnimationData()}),jQuery(window).on("load",function(){jQuery("body").hasClass("fusion-builder-live")||setTimeout(function(){jQuery(window).initElementAnimations()},300)}),jQuery(window).on("CSSAnimations",{custom:!0},fusionSetAnimationData);