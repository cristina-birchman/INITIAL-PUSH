$(document).ready(function(){function s(){var s=$("body"),a=$("#top-bar"),i=768;$(window).width()<i?(s.addClass("mobile"),a.addClass("inactive")):(s.removeClass("mobile"),a.removeClass("inactive"))}function a(){var s=$("#list");s.append('<li class="listItem">                <div class="row new"><span class="icon-page"></span>                <div class="wrapper-news"><h5 class="status">Nuevo</h5>                <p class="news">Lorem ipsum dolor sit amet.</p>                <span class="icon-smile"></span>                <span class="icon-smile"></span>                <span class="icon-smile"></span>                </div></div></li>')}function i(){var s=$("#leftMenuPanel");s.addClass("open")}s(),$(window).resize(s);for(var n=0;5>n;n++)$("#ctaLoad").click(function(){a()});$("#menuButton").click(function(){i(),console.log("Menu opened")})});
//# sourceMappingURL=main.js.map