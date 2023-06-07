/*====================IS MOBILE=====================*/
(function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(l){return function($){return $.test(l)}}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l&&l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f}else if(typeof define==="function"&&define.amd){define(function(){return f})}else{this["isMobile"]=f}})();
/*====================IS MOBILE=====================*/
var pageTag = $('body').attr('data-pageType');
var direction = document.querySelector('html').getAttribute('dir');
$('a').addClass('hover-target menuItem');
$('#menu').addClass('hover-target');
/*====================DETECT TIME=====================*/
const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20;
if (isDayTime === false) {
    $('html').attr('id', 'night');
}
/*====================DETECT TIME=====================*/
/*====================DETECT COLOR=====================*/
$('#menu-container .colorPallet-container .colorPallet-item').each(function (){
    $(this).click(function (){
        var pickedColor=$(this).attr('data-color')
        $('html').attr('data-color',pickedColor)
    })
})
/*====================DETECT COLOR=====================*/
/*====================OP-MENU=====================*/
$('header #menu').click(function (){
    $('body').toggleClass('opMenu')
})
/*====================OP-MENU=====================*/
/*====================DETECT DEVICE=====================*/
var is_OSX = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
var is_iOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);

var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var is_iPhone = navigator.platform == "iPhone";
var is_iPod = navigator.platform == "iPod";
var is_iPad = navigator.platform == "iPad";
/*====================DETECT DEVICE=====================*/
/*====================DEFINE GSAP=====================*/
if(!is_Mac){
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother,SplitText);
    if(!isMobile.any){
        const smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content:'#smooth-content',
            smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true,           // looks for data-speed and data-lag attributes on elements
            smoothTouch: false,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        });
        smoother.effects('.parallax-img',{speed: 'auto'});
    }
}
if(is_Mac){
    gsap.registerPlugin(ScrollTrigger,SplitText);
    $('.parallax-img').addClass('no-parallax');
}
/*====================DEFINE GSAP=====================*/
$(document).ready(function () {
    ajaxSucses();
    if($('html').hasClass('firstView') == true){
        setTimeout(function () {
            $('html').addClass('loaded');
        },2200)
    } else {
        setTimeout(function () {
            $('html').addClass('loaded');
            TweenMax.to(".router-overlay-first", 1.2, {y: '-100%', ease: "power4.out"});
            setTimeout(function () {
                initSlogan();
            },1300)
        },100)
    }
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
    $('#menuMobile').click(function () {
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
function ajaxSucses(){
    switch (pageTag){
        case "home":
            if($('html').hasClass('firstView') == true){
                let splitLoading = new SplitText($('#loading .loading-text p'),{type: "words, chars, lines", charsClass: "char",wordsClass:"word",linesClass:'line', position: "relative" });
                TweenMax.to("#loading .loading-text p", 0.2, {opacity: 1, ease: "power4.out",delay:0.4});
                let tl3 = gsap.timeline({
                    delay: 0.6,
                    defaults: {
                        ease: 'power4.out',
                    },
                });
                tl3.to( '#loading .loading-text p .char', {
                    y: 0,
                    opacity:1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: 'power4.out',
                });
                setTimeout(function () {
                    $('html').addClass('loaded');
                    setTimeout(function () {
                        initTitle()
                    },500)
                },2200)
            } else {
                setTimeout(function () {
                    setTimeout(function () {
                        initTitle();
                    },500)
                },100)
            }
            let splitTitle = new SplitText($('section.home-slogan-container .slogan-info h1'),{type: "words, chars, lines", charsClass: "char",wordsClass:"word",linesClass:'line mBox', position: "relative" });
            let splitDate = new SplitText($('main.homeWrapper section.home-slogan-container .slogan-info p'),{type: "words, chars, lines", charsClass: "char",wordsClass:"word mBox",linesClass:'line', position: "relative" });
        function initTitle(){
            let tl2 = gsap.timeline({
                delay: .02,
                defaults: {
                    ease: 'power4.out',
                },
            });
            tl2.to( '.mBox', {
                y: 0,
                opacity:1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power4.out',
            });
        }
            break;
        case "aboutUs":
            setTimeout(function () {
                setTimeout(function () {
                    $('.wrapper').addClass('loaded');
                },500)
            },100)

            var widthCEOImg = $('.aboutCEOWrapper .CEOWrap .ceo-media').width();
            $('.aboutCEOWrapper .CEOWrap .ceo-media').css('height',widthCEOImg);
            Splitting();
            var widthMemberImg = $('section.aboutMemberContainer .membersWrapper .memberCard').width();
            $('section.aboutMemberContainer .membersWrapper .memberCard').css('height',widthMemberImg);
            break;
        case "singleProject":
            setTimeout(function () {
                setTimeout(function () {
                    // initSlogan();
                    var swiperGallery = new Swiper(".myGallerySwiper", {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        loop: true,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                },500)
            },100)
            break;
        case "blog":
            setTimeout(function () {
                setTimeout(function () {
                    $('.wrapper').addClass('loaded');
                },500)
            },100)
            break;
        case "projects":
            setTimeout(function () {
                setTimeout(function () {
                    $('.projectsWrapper').addClass('loaded');
                    $('#filter').addClass('loaded');
                    loadTextScramble()
                },500)
            },100)
            // ——————————————————————————————————————————————————
            // TextScramble
            // ——————————————————————————————————————————————————

        class TextScramble {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.update = this.update.bind(this);
            }
            setText(newText) {
                const oldText = this.el.innerText;
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise(resolve => this.resolve = resolve);
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || '';
                    const to = newText[i] || '';
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="dud">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }}

            function loadTextScramble(){
                let phrases = ['I am a very smart assist here for you'];


                let el = document.getElementById('textTitle');
                let fx = new TextScramble(el);

                let counter = 0;
                fx.setText(phrases[counter])
            }
            // ——————————————————————————————————————————————————
            // Example
            // ——————————————————————————————————————————————————
            $('section.projectsWrapper').mouseleave(function () {
                console.log('mouseLeave')
                $('.projectWrap').removeClass('hide-project-box');
                let phrases = ['I am a very smart assist here for you'];


                let el = document.getElementById('textTitle');
                let fx = new TextScramble(el);

                let counter = 0;
                fx.setText(phrases[counter])
            })
            $('section.projectsWrapper .projectWrap').each(function () {
                var backColor = $(this).attr('data-color');
                $(this).children('.projectMediaOverlayBoxWrap').children('.projectOverlayWrap').css('backgroundColor',backColor);
                $(this).mouseenter(function () {
                    let currentCategory = $(this).attr('data-category');
                    $('.projectWrap').addClass('hide-project-box');
                    $('.projectWrap[data-category="'+currentCategory+'"]').removeClass('hide-project-box');
                    let currentTitle = $(this).children('span').text();
                    const phrasesCurrentt = [currentTitle];
                    let ell = document.getElementById('textTitle');
                    let fxx = new TextScramble(ell);
                    let counterr = 0;
                    fxx.setText(phrasesCurrentt[counterr])
                })
                $(this).mouseleave(function () {
                    //$('.projectWrap').removeClass('hide-project-box');
                })
            })

            $('section.projectsWrapper .grid-item .projectWrap .projectMediaOverlayBoxWrap .projectOverlayWrap').each(function () {
                let currentHeight = $(this).siblings('.projectMedia').children().height();
                $(this).css('height',currentHeight);
            })
            setTimeout(function () {
                $('section.projectsWrapper .grid-item .projectWrap .projectMediaOverlayBoxWrap .projectOverlayWrap').each(function () {
                    let currentHeight = $(this).siblings('.projectMedia').children().height();
                    $(this).css('height',currentHeight);
                })
            },2500)
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