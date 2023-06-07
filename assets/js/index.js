/*====================IS MOBILE=====================*/
(function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(l){return function($){return $.test(l)}}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l&&l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f}else if(typeof define==="function"&&define.amd){define(function(){return f})}else{this["isMobile"]=f}})();
/*====================IS MOBILE=====================*/
var pageTag = $('body').attr('data-pageType');
var direction = document.querySelector('html').getAttribute('dir');
$('a').addClass('hover-target');
$('#menu').addClass('hover-target');
/*====================DETECT DEVICE=====================*/
var is_OSX = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var is_iOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);

var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var is_iPhone = navigator.platform == "iPhone";
var is_iPod = navigator.platform == "iPod";
var is_iPad = navigator.platform == "iPad";
/*====================DETECT DEVICE=====================*/
/*====================DEFINE GSAP=====================*/
if(is_Mac){
    gsap.registerPlugin(ScrollTrigger,SplitText);
    $('.parallax-img').addClass('no-parallax');
}
/*====================DEFINE GSAP=====================*/
$(document).ready(function () {
    ajaxSucses();
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    $(window).resize(function(){
        (function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(l){return function($){return $.test(l)}}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l&&l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f}else if(typeof define==="function"&&define.amd){define(function(){return f})}else{this["isMobile"]=f}})();
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('header').addClass('bg-effect');
        } else {
            $('header').removeClass('bg-effect');
        }
    });
    $('#menu').click(function () {
        $('html').toggleClass('op-menu');
    })

    $('.menuItem').click(function (e) {
        e.preventDefault();
        $('.router-overlay').addClass('inSight');
        var URL = $(this).attr('href');
        setTimeout(function () {
            window.location = URL;
        }, 1200);

    });
})
function loadGrid(){
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            horizontalOrder: true
        }
    });
}
/*=========Effect on text*/
if(! isMobile.any){
    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;

        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }
    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }
    document.addEventListener("DOMContentLoaded", function() {
        gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function() { animateFrom(elem) },
                onEnterBack: function() { animateFrom(elem, -1) },
                onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
            });
        });
    });
}
/*=========Effect on SLOGAN*/
let splitTitle = new SplitText($('.sloganTitle'),{type: "words, chars, lines", charsClass: "char",wordsClass:"word",linesClass:'line', position: "relative" });
function initSlogan(){
    let tl4 = gsap.timeline({
        delay: .02,
        defaults: {
            ease: 'power4.out',
        },
    });
    tl4.to( '.sloganTitle .char', {
        y: 0,
        opacity:1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power4.out',
    }).to('.sloganText p',{
        y:0,
        opacity:1,
        duration: 1,
        ease: 'power4.out',
    }).to('.loadBox',{
        y:0,
        opacity:1,
        duration: 1,
        ease: 'power4.out',
    });
}
/*=========Effect on SLOGAN*/
function ajaxSucses(){
    switch (pageTag){
        case "projects":
            setTimeout(function () {
                $('html').addClass('loaded');
                TweenMax.to(".router-overlay-first", 1.2, {y: '-100%', ease: "power4.out"});
                setTimeout(function () {
                    $('.projectsWrapper').addClass('loaded');
                },500)
            },100)
            $('#filter').click(function () {
                $('html').addClass('op-filter');
            })
            $('#close-filter').click(function () {
                $('html').removeClass('op-filter');
            })
            $('#body-overlay').click(function () {
                $('html').removeClass('op-filter');
            })
            break;
        default:
    }
}

/*================CURSOR*/
(function($) { "use strict";

    //Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
            t.style.top = n.clientY + "px",
            e.style.left = n.clientX + "px",
            e.style.top = n.clientY + "px",
            i.style.left = n.clientX + "px",
            i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

})(jQuery);