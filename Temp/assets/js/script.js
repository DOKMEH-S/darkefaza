/*====================IS MOBILE=====================*/
(function () {var f={};var g=/iPhone/i,i=/iPod/i,j=/iPad/i,k=/\biOS-universal(?:.+)Mac\b/i,h=/\bAndroid(?:.+)Mobile\b/i,m=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,d=/Silk/i,b=/Windows Phone/i,n=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,q=/BB10/i,s=/Opera Mini/i,t=/\b(CriOS|Chrome)(?:.+)Mobile/i,u=/Mobile(?:.+)Firefox\b/i,v=function(l){return void 0!==l&&"MacIntel"===l.platform&&"number"==typeof l.maxTouchPoints&&l.maxTouchPoints>1&&"undefined"==typeof MSStream};function w(l){return function($){return $.test(l)}}function x(l){var $={userAgent:"",platform:"",maxTouchPoints:0};l||"undefined"==typeof navigator?"string"==typeof l?$.userAgent=l:l&&l.userAgent&&($={userAgent:l.userAgent,platform:l.platform,maxTouchPoints:l.maxTouchPoints||0}):$={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0};var a=$.userAgent,e=a.split("[FBAN");void 0!==e[1]&&(a=e[0]),void 0!==(e=a.split("Twitter"))[1]&&(a=e[0]);var r=w(a),o={apple:{phone:r(g)&&!r(b),ipod:r(i),tablet:!r(g)&&(r(j)||v($))&&!r(b),universal:r(k),device:(r(g)||r(i)||r(j)||r(k)||v($))&&!r(b)},amazon:{phone:r(c),tablet:!r(c)&&r(d),device:r(c)||r(d)},android:{phone:!r(b)&&r(c)||!r(b)&&r(h),tablet:!r(b)&&!r(c)&&!r(h)&&(r(d)||r(m)),device:!r(b)&&(r(c)||r(d)||r(h)||r(m))||r(/\bokhttp\b/i)},windows:{phone:r(b),tablet:r(n),device:r(b)||r(n)},other:{blackberry:r(p),blackberry10:r(q),opera:r(s),firefox:r(u),chrome:r(t),device:r(p)||r(q)||r(s)||r(u)||r(t)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}f=x();if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f}else if(typeof define==="function"&&define.amd){define(function(){return f})}else{this["isMobile"]=f}})();
/*====================IS MOBILE=====================*/
var pageTag = $('body').attr('data-pageType');
var direction = document.querySelector('html').getAttribute('dir');
$('a').addClass('hover-target');
$('#menu').addClass('hover-target');
/*====================DETECT TIME=====================*/
const hours = new Date().getHours()
const isDayTime = hours > 6 && hours < 20;
if (isDayTime === false) {
    document.querySelector('html').style.backgroundColor = '#1E1E1E';
    $('html').attr('id', 'night');
    loadPage();
} else {
    $('html').attr('id', 'day');
    loadPage();
}
/*====================DETECT TIME=====================*/
/*====================DETECT COLOR=====================*/
$('#menu-container .colorPallet-container .colorPallet-item').each(function (){
    $(this).click(function (){
        var pickedColor=$(this).attr('data-color')
        $('html').attr('data-color',pickedColor)
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $(this).parents('.colorPallet-container').addClass('selected')
    })
})
$('#menu-container .colorPallet-container').mouseenter(function (){
    $(this).removeClass('selected');
})
$('#menu-container .colorPallet-container').mouseleave(function (){
    $(this).addClass('selected');
})
$('.grayscale-item').click(function () {
    $('html').toggleClass('grayscale');
})
/*====================DETECT COLOR=====================*/
/*==============CHANGE THUMB SCROLL COLOR=============*/
/*let root = document.querySelector(":root");
$('#menu-container .colorPallet-container .colorPallet-item').click(function () {
    let colorInput = $(this).attr('data-color');
    let currentColorr = '';
    switch (colorInput) {
        case "red":
            currentColorr = '#DA6C6C';
            break;
        case "blue":
            currentColorr = '#99AAFF';
            break;
        case "green":
            currentColorr = '#29CC8A';
            break;
        case "orange":
            currentColorr = '#FCAA73';
            break;
    }
    setInterval(function () {
        root.style.setProperty("--scrollbar-color", currentColorr);
    },1000)
})*/
/*==============CHANGE THUMB SCROLL COLOR=============*/
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
gsap.registerPlugin(ScrollTrigger, ScrollSmoother,SplitText);
if(!isMobile.any){
    const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content:'#smooth-content',
        smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true,           // looks for data-speed and data-lag attributes on elements
        smoothTouch: true,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
    smoother.effects('.parallax-img',{speed: 'auto'});
}
/*====================DEFINE GSAP=====================*/
function loadPage(){
    if($('html').hasClass('firstView') == true){
        setTimeout(function () {
            $('html').addClass('loaded');
            setTimeout(function () {
                initTitle();
            },500)
        },3400)
    } else {
        setTimeout(function () {
            $('html').addClass('loaded');
            TweenMax.to(".router-overlay-first", 1.2, {scaleX: '0', ease: "power4.out"});
            setTimeout(function () {
                if(!isMobile.any){
                    initSlogan();
                }
            },1300)
        },100)
    }
}
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
            $('html').addClass('scroll');
        } else {
            $('header').removeClass('bg-effect');
            $('html').removeClass('scroll');
        }
    });
    $('#menuMobile').click(function () {
        $('html').toggleClass('op-menu');
    })
    /*==============DETECT SCROLL DIRECTION=============*/
    var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
            // downscroll code
            $('html').removeClass('scrollTop');
            $('html').addClass('scrollDown');
        } else if (st < lastScrollTop) {
            $('html').removeClass('scrollDown');
            $('html').addClass('scrollTop');
        } // else was horizontal scroll
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
    /*==============DETECT SCROLL DIRECTION=============*/
})
window.addEventListener('unload', function(event) {
    if (event.currentTarget.performance && event.currentTarget.performance.navigation) {
        if (event.currentTarget.performance.navigation.type === PerformanceNavigation.TYPE_RELOAD) {
            // The user refreshed the page
            console.log("Browser refresh button is clicked.");
        } else if (event.currentTarget.performance.navigation.type === PerformanceNavigation.TYPE_BACK_FORWARD) {
            // The user clicked the browser's back button
            console.log("Browser back button is clicked.");
        }
    } else {
        if (event.clientX < 40 && event.clientY < 0) {
            // The user clicked the browser's back button
            console.log("Browser back button is clicked.");
        } else {
            // The user refreshed the page
            console.log("Browser refresh button is clicked.");
        }
    }
});
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
    tl4.to( '.mBox', {
        y: 0,
        opacity:1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power4.out',
    });
}
/*=========Effect on SLOGAN*/
/*=========Effect on SLOGAN HOME*/
let splitTitlee = new SplitText($('section.home-slogan-container .slogan-info h1'),{type: "words, chars", charsClass: "char",wordsClass:"word mBox", position: "relative" });
let splitDatee = new SplitText($('main.homeWrapper section.home-slogan-container .slogan-info p'),{type: "words, chars, lines", charsClass: "char",wordsClass:"word mBox",linesClass:'line', position: "relative" });
let splitContentt = new SplitText($('main.homeWrapper section.home-about-container .content'),{type: "words, chars, lines", charsClass: "char",wordsClass:"word",linesClass:'line mBox', position: "relative" });
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
/*=========Effect on SLOGAN HOME*/
function loadGrid(){
    $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            horizontalOrder: true
        }
    });
    $('html').addClass('loadIsotope');
    setTimeout(function () {
        $('section.projectsContainer').css('pointer-events','auto');
    },1500)
}
function ajaxSucses(){
    switch (pageTag){
        case "home":
            $('header').addClass('homeHeader');
            if(isMobile.phone){

            }
            if($('html').hasClass('firstView') == true){
                let progressbar = $('.js-progress-bar-search');

                let tween = new TweenLite(progressbar, 2.5, {
                    width: '100%',
                    ease: Linear.easeNone,
                    onUpdate:countPercent,
                    onComplete: function(){ // progressbar completed
                        //progressbar.css({"width": "100%"});
                        progressbar.addClass("complete");
                        TweenMax.to(".progress", .8, {y: '100%', ease: "power4.out",delay:.2});
                    }
                });
                function countPercent() {
                    newPercent = (tween.progress()*100).toFixed();
                    $('#count').text(newPercent + "%");
                }
                setTimeout(function () {
                    setTimeout(function () {
                        if(!isMobile.any){

                        }
                    },500)
                },2200)
            } else {
                setTimeout(function () {
                    setTimeout(function () {
                        if(isMobile.any){
                            initTitle();
                        }
                    },500)
                },100)
            }
            break;
        case "aboutUs":
            var widthCEOImg = $('.aboutCEOWrapper .CEOWrap .ceo-media').width();
            $('.aboutCEOWrapper .CEOWrap .ceo-media').css('height',widthCEOImg);
            Splitting();
            var widthMemberImg = $('section.aboutMemberContainer .membersWrapper .memberCard').width();
            $('section.aboutMemberContainer .membersWrapper .memberCard').css('height',widthMemberImg);
            break;
        case "singleProject":
            const $gGridBox = $('section.singleProjectContainer .sPC .singleProjectContentWrap .project-gallery-grid-container .grid-gallery-wrap.gallery .gallery-box')
            setTimeout(function () {
                setTimeout(function () {
                    // initSlogan();
                    var swiperGallery = new Swiper(".myGallerySwiper", {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        navigation: {
                            nextEl: ".swiper-button-next.n1",
                            prevEl: ".swiper-button-prev.p1",
                        },
                    });
                },500)
            },100)
            var swiperModal = new Swiper(".myModalGallery", {
                spaceBetween: 30,
                effect: "fade",
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next.n2",
                    prevEl: ".swiper-button-prev.p2",
                },
            });
            $('.s-project').click(function () {
                swiperModal.slideTo($(this).index() + 1);
                console.log($(this).index());
                $('html').addClass('openGallery noSroll');
            });
            $('#closeGallery').click(function () {
                $('html').removeClass('openGallery noSroll');
            });
            new SimpleLightbox('.gallery a', {
                overlayOpacity: .95
            });
            $gGridBox.css('height',$gGridBox.width());
            break;
        case "blog":
            setTimeout(function () {
                setTimeout(function () {
                    $('.wrapper').addClass('loaded');
                },500)
            },100)
            break;
        case "projects":
            $('header').addClass('projectHeader');
            setTimeout(function () {
                loadTextScramble()
            },2000)
            var inputs = $(".progress-container-loading").find($("label") );
            for(var i =0 ; i< inputs.length; i ++) {
                var index = i +1;
                var time = ((inputs.length)-i ) * 100;
                $(".progress-container-loading label:nth-child("+ index+")").css( "-webkit-animation", "anim 3s "+time+"ms infinite ease-in-out" );
                $(".progress-container-loading label:nth-child("+index+")").css( "-animation", "anim 3s "+time+"ms infinite ease-in-out" );
            }
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
            var isScroll = true;
            function showProjectName(){
                $('section.projectsContainer .grid-item .projectWrap').on('mouseover',function () {
                    let element = $(this),
                        projectName = $('header.projectHeader .identity-text-title-wrap'),
                        projectNameWidth = projectName.width(),
                        currentWidth = element.width(),
                        windowsWidth = $('section.projectsContainer').width(),
                        elementTop = element.offset().top,
                        elementLeft = element.offset().left,
                        finalCorX = currentWidth + elementLeft,
                        paddingX = parseInt($('main.projectsWrapper').css('paddingRight')),
                        distanceToRight = windowsWidth - paddingX,
                        windowsScrollTop = $(window).scrollTop(),
                        finalCorY = elementTop - windowsScrollTop;
                    setTimeout(function () {
                        projectNameWidth = projectName.width();
                        return projectNameWidth;
                    },100)
                    /*if(isScroll) {
                        finalCorY = elementTop - scrollTopY;
                    } else {
                        finalCorY = elementTop - scrollTopY;
                    }*/

                    if(distanceToRight > finalCorX){
                        projectName.css({
                            'left':finalCorX,
                            'top':finalCorY
                        })
                    } else if (distanceToRight < finalCorX) {
                        projectName.css({
                            'left':finalCorX - currentWidth - projectNameWidth - 40,
                            'top':finalCorY
                        })
                    }
                    projectName.addClass('moving');
                });
            }
            $('section.projectsContainer .projectWrap').each(function () {
                var backColor = $(this).attr('data-color');
                //$(this).children('.projectMediaOverlayBoxWrap').children('.projectOverlayWrap').css('backgroundColor',backColor);
                $(this).mouseover(function () {
                    let currentCategory = $(this).attr('data-category');
                    $('.projectWrap').addClass('hide-project-box');
                    $('.projectWrap[data-category="'+currentCategory+'"]').removeClass('hide-project-box');
                    let currentTitle = $(this).children('.project-title-code').children('span').text();
                    const phrasesCurrentt = [currentTitle];
                    let ell = document.getElementById('textTitle');
                    let fxx = new TextScramble(ell);
                    let counterr = 0;
                    fxx.setText(phrasesCurrentt[counterr])
                })
            })
            var isHere = true;
            console.log(isScroll);
            $('section.projectsContainer').mousemove(function () {
                isHere= true;
                if(isHere){
                    isScroll = false;
                   showProjectName(0);
                }
            })
            $('section.projectsContainer').mouseleave(function () {
                isHere = false;
                isScroll = true;
                $('.projectWrap').removeClass('hide-project-box');
                let phrasessss = ['I am a very smart assist here for you'];
                let elll = document.getElementById('textTitle');
                let fxxx = new TextScramble(elll);
                let counterrrr = 0;
                fxxx.setText(phrasessss[counterrrr]);

                let projectName = $('header.projectHeader .identity-text-title-wrap');
                projectName.css({
                    'left':'0',
                    'top':'0'
                })
                projectName.removeClass('moving');
            })
            $(window).scroll(function () {
                var scrollT = $(window).scrollTop();
                if(scrollT > 0 ) {
                    isScroll = true;
                    showProjectName();
                } else {
                    isScroll = false;
                    showProjectName();
                }
            });
            $('section.projectsContainer .grid-item .projectWrap .projectMediaOverlayBoxWrap .projectOverlayWrap').each(function () {
                let currentHeight = $(this).siblings('.projectMedia').children().height();
                $(this).css('height',currentHeight);
            })
            setTimeout(function () {
                $('section.projectsContainer .grid-item .projectWrap .projectMediaOverlayBoxWrap .projectOverlayWrap').each(function () {
                    let currentHeight = $(this).siblings('.projectMedia').children().height();
                    $(this).css('height',currentHeight);
                })
            },2500)
            break;
        case "peaceOfArt":
            let artBox = $('main.artWrapper section.artContainer .itemBox.artWrap .itemBox-image');
            artBox.css('height' , artBox.width());
            $(document).ready(function(){
                let classes = ["one", "two", "three" ,"four"];
                $(".itemBox").each(function(){
                    $(this).addClass(classes[~~(Math.random()*classes.length)]);
                });
                let unit = artBox.width() + 'px'
                $('.itemBox.one .itemBox-image .triangle').css({"border-top-width":unit, "border-right-width":unit , "top":'0'});
                $('.itemBox.two .itemBox-image .triangle').css({"border-top-width":unit, "border-left-width":unit ,  "right":'0' ,"left":'auto'});
                $('.itemBox.three .itemBox-image .triangle').css({"border-bottom-width":unit, "border-left-width":unit , "right":'0' ,"left":'auto' ,"bottom":'0' , "top":'auto'});
                $('.itemBox.four .itemBox-image .triangle').css({"border-bottom-width":unit, "border-right-width":unit , "bottom":'0' , "top":'auto'});
            });
            break;
        case "singleArt":
            var swiper = new Swiper(".mySwiperThumb", {
                spaceBetween: 10,
                freeMode: true,
                slidesPerView: 2,
                watchSlidesProgress: true,
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    769: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                },
            });
            var swiper2 = new Swiper(".mySwiper2", {
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next.nA1",
                    prevEl: ".swiper-button-prev.pA1",
                },
                thumbs: {
                    swiper: swiper,
                },
            });
            var swiperModal = new Swiper(".myModalGallery", {
                spaceBetween: 30,
                effect: "fade",
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next.n2",
                    prevEl: ".swiper-button-prev.p2",
                },
            });
            let $widthThumbBox = $('main.singleArtWrapper section.singleArtSliderContainer .thumbnails-arrows-container .swiper.mySwiperThumb img');
            $widthThumbBox.css('height',$widthThumbBox.width());
            $('.s-project').click(function () {
                swiperModal.slideTo($(this).index() + 1);
                console.log($(this).index());
                $('html').addClass('openGallery noSroll');
            });
            $('#closeGallery').click(function () {
                $('html').removeClass('openGallery noSroll');
            });
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

/*====================Route=====================*/
$(document).ready(function () {
    $('.menuItem').click(function (event) {
        event.preventDefault();
        var URL = $(this).attr('href');
        TweenMax.to(".router-overlay", 1.2, {scaleX: '1', ease: "power4.out"});
        setTimeout(function () {
            window.location = URL;
        },1200);
        //$('.router-overlay').addClass('inSight');
    })
})
/*====================Route=====================*/