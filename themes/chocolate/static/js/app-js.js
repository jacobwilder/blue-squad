"use strict";(function(a){function b(){a(".mdl-layout__drawer").hasClass("is-visible")&&(a(".mdl-layout__drawer .mdl-navigation").find("[title=\"Home\"]").focus(),a("header").attr("aria-hidden","true"))}setTimeout(function(){var c=a(".mdl-layout__drawer"),d=a(".mdl-layout__obfuscator");a(".mdl-layout__drawer-button").attr("aria-label","Open the navigation drawer"),a(".mdl-layout__drawer-button").on("click",function(){b()}),a(".mdl-layout__drawer-button").on("keydown",function(a){var c=a.which;"13"==c&&b()}),a(".mdl-layout__drawer .mdl-navigation .mdl-navigation__link:nth-last-child(1)").on("keydown",function(b){b.preventDefault();var c=b.which;"9"==c&&a(".mdl-layout__drawer .mdl-navigation").find("[title=\"Home\"]").focus()})},3e3)})(jQuery),"use strict",function(a){var b=a("body");b.on("keyup.tabwatcher",function(a){9==a.which&&(a.preventDefault(),b.addClass("tabbed"),b.off("keyup.tabwatcher"))})}(jQuery),"use strict",function(a){a(".skip-to-content").click(function(a){skipTo(),a.preventDefault()}),a(".skip-to-content").keyup(function(a){"13"==a.which&&(skipTo(),a.preventDefault())})}(jQuery);function skipTo(){$("main").attr("tabindex",0).focus(),$("html,body").animate({scrollTop:$("main").offset().top})}