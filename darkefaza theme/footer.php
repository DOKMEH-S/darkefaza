<?php if(!is_front_page()):?>
    <footer>
        <div class="footerContactInfo">
            <h3><?php echo is_rtl() ? 'تماس با ما' : 'Contact us';?></h3>
            <ul>
                <?php if (have_rows('emails', 'option')): ?>
                    <?php while (have_rows('emails', 'option')):the_row();
                        if(get_sub_field('show')){
                            $Email = get_sub_field('email'); ?>
                            <li><a href="mailto:<?php echo antispambot($Email); ?>"><?php echo antispambot($Email); ?></a> </li>
                        <?php }
                    endwhile; ?>
                <?php endif; ?>
                <?php if (have_rows('phones', 'option')): ?>
                    <?php while (have_rows('phones', 'option')):the_row();
                        if(get_sub_field('show')){
                            $phone = get_sub_field('phone'); ?><li><a  href="tel:<?php echo str_replace(' ', '', $phone); ?>"><?php echo $phone; ?></a> </li>
                        <?php }
                    endwhile; ?>
                <?php endif; ?>
                <?php $Address = get_field('address', 'option');
                if ($Address):
                    $location = get_field('location', 'option'); ?>
                    <li> <a <?php if ($location) { echo 'href="https://www.google.com/maps/dir/?api=1&destination=' . $location['lat'] . ',' . $location['lat'] . '"';} ?>><?php echo $Address; ?></a></li>
                <?php endif; ?>
            </ul>
        </div>
        <div class="copyright-wrap">
            <a href="https://hidokmeh.com/" <?php if (!is_front_page()):?> rel="nofollow" <?php endif;?>><span><?php echo is_rtl() ? 'وب سایتی دیگر از' : 'another website by';?></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1072.22 341.63"><path d="M279.3,84h54.42c51.28,0,90,37.48,90,85.85s-38.69,85.87-90,85.87H279.3Zm54.42,145.6c36.77,0,61.43-25.88,61.43-59.75s-24.66-59.74-61.43-59.74H307.36V229.58Z" transform="translate(0 0.01)"/><path d="M421.11,195.23c0-34.59,27.09-62.4,62.9-62.4s62.88,27.81,62.88,62.4S519.8,257.64,484,257.64s-62.9-27.83-62.9-62.41m98.44,0c0-21.28-14.5-37.49-35.54-37.49S448.2,174,448.2,195.23,463,232.73,484,232.73s35.54-16.21,35.54-37.5" transform="translate(0 0.01)"/><polygon points="546.77 83.99 573.38 83.99 573.38 189.93 628.84 134.79 661.5 134.79 603.86 191.86 660.46 255.72 626.83 255.72 573.38 195.25 573.38 255.72 546.77 255.72 546.77 83.99"/><path d="M738.26,187.49c0-16.93-8.22-30-24.66-30-11.61,0-21.29,6.77-26.13,17.9v80.3H660.86V134.81h26.61v11.12c8.23-9.19,20.32-13.06,31.69-13.06,16.44,0,28.3,7,35.8,17.9,8.7-11.16,23.21-18,39.65-18,30.72,0,47.17,21.29,47.17,51.52v71.35h-26.6V187.49c0-16.93-8-30-24.43-30-11.36,0-21,6-26.36,18.87.24,2.66.48,5.32.48,8v71.35H738.26Z" transform="translate(0 0.01)"/><path d="M962.66,84h26.61v62.15c8.46-9.43,21.28-13.3,34.1-13.3,29.75,0,48.85,20.56,48.85,51.52V255.7h-26.61V187.49c0-17.17-9.66-30-27.56-30-13.31,0-23.71,7.26-28.78,19.84v78.36H962.66Z" transform="translate(0 0.01)"/><path d="M902.87,256.75c-35.56,0-61.09-26.25-61.09-62.05,0-35.31,24.58-62,61.34-62,36.5,0,62,27.92,59.64,68.49h-95c1,18.13,14.79,32.45,36,32.45,13.12,0,24.58-5.25,30.07-16.7h27.44c-6.68,22.43-28.16,39.85-58.46,39.85m-34.13-74.21h65.93c-4.06-19.34-17.66-27.92-32.21-27.92-16.47,0-30.07,9.54-33.65,27.92" transform="translate(0 0.01)"/><path d="M205.49,339.46,79.19,213.16a3.65,3.65,0,0,1,0-5.15h0L205.49,81.69c5.74-5.73,15.09,1,11.47,8.26,0,0-45.53,78.47-63.75,111.93a18.1,18.1,0,0,0,0,17.4C171.43,252.74,217,331.21,217,331.21c3.62,7.26-5.73,14-11.47,8.25" transform="translate(0 0.01)"/><path d="M12.27,2.15,138.61,128.46a3.65,3.65,0,0,1,0,5.15h0L12.27,259.93c-5.74,5.73-15.09-1-11.46-8.26,0,0,44.09-78.77,61.85-112.07a18.15,18.15,0,0,0,0-17.12C44.9,89.18.81,10.41.81,10.41c-3.63-7.26,5.72-14,11.46-8.26" transform="translate(0 0.01)"/></svg></a>
        </div>
    </footer>
<?php endif;?>
</div>
</div>
<?php if(is_singular(array('projects','arts'))):
    if($gallery):?>
        <div id="galleySloganContainer">
            <div class="galleryWrapper">
                <div class="swiper mySwiper myModalGallery">
                    <div class="swiper-wrapper">
                        <?php foreach ($gallery as $img):?>
                            <div class="swiper-slide">
                                <img src="<?php echo $img['url']; ?>"  alt="<?php echo get_post_meta($img['ID'], '_wp_attachment_image_alt', true); ?>">
                            </div>
                        <?php endforeach;?>
                    </div>
                    <div class="swiper-button-next n2"></div>
                    <div class="swiper-button-prev p2"></div>
                </div>
            </div>
            <div id="closeGallery" class="hover-target">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
            </div>
        </div>
    <?php endif;
endif;?>
<div class="router-overlay"></div>
<div class='cursor' id="cursor"></div>
<div class='cursor2' id="cursor2"></div>
<div class='cursor3' id="cursor3"></div>
<script src="<?php ThemeAssets('js/jQuery.min.js');?>"></script>
<script src="<?php ThemeAssets('js/gsap.min.js');?>"></script>
<script src="<?php ThemeAssets('js/ScrollTrigger.min.js');?>"></script>
<script src="<?php ThemeAssets('js/ScrollSmoother.min.js');?>"></script>
<script src="<?php ThemeAssets('js/SplitText.min.js');?>"></script>
<?php if (is_rtl()): ?>
    <script src="<?php ThemeAssets('js/persianumber.js');?>"></script>
<?php endif;?>
<?php if (is_post_type_archive(array('projects','arts'))): ?>
    <script src="<?php ThemeAssets('js/isotope.pkgd.min.js');?>"></script>
<?php endif;?>
<?php if(is_page_template('tpls/Contact.php')):?>
    <script src="<?php ThemeAssets('js/bootstrap.min.js');?>"></script>
<?php endif;?>
<?php if(is_singular('projects')):?>
    <script src="<?php ThemeAssets('js/swiper-bundle.min.js');?>"></script>
    <script src="<?php ThemeAssets('js/simple-lightbox.min.js');?>"></script>
<?php endif;
if(is_singular('arts')):?>
    <script src="<?php ThemeAssets('js/swiper-bundle.min.js');?>"></script>
<?php endif;
if(is_page_template(array('tpls/Contact.php','tpls/About.php'))):?>
    <script src="<?php ThemeAssets('js/splitting.min.js');?>"></script>
<?php endif;?>
<script src="<?php ThemeAssets('js/script.js?v=1.0.5');?>"></script>
<?php if(is_front_page()):?>
    <script src="<?php ThemeAssets('js/qube.js');?>"></script>
<?php endif;?>
<?php wp_footer();?>

<script>
    <?php if (is_rtl()): ?>
       $(document).ready(function(){
          $('*').persiaNumber();
       });
    <?php endif;?>
    function ready(){
        document.querySelector('main.wrapper').style.opacity = '1';
        document.querySelector('header').style.opacity = '1';
    }
    document.addEventListener("DOMContentLoaded", ready);
    $(document).ready(function () {
        <?php if(is_front_page()):
        if($video_day):?>
        let dayVideoUrl = "<?php echo $video_day;?>",
            nightVideoUrl = "<?php echo $video_night;?>",
            video = document.getElementById('sloganVideo'),
            currentTime = $('html').attr('id');
        if(currentTime === 'day'){
            $('#sloganVideo source').attr('src',dayVideoUrl);
            video.load();
            video.play()
        } else if (currentTime === 'night'){
            $('#sloganVideo source').attr('src',nightVideoUrl);
            video.load();
            video.play()
        }
        <?php endif;
        endif;
        if(is_post_type_archive(array('projects','arts'))):?>
        $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer',
                horizontalOrder: true
            }
        });
        <?php endif;?>
        setTimeout(function () {
            document.querySelector('.router-overlay').style.opacity = '1';
            document.getElementById('menu-container').style.opacity = '1';
            <?php if(is_singular(array('projects','arts'))):?>
            document.getElementById('galleySloganContainer').style.display = 'block';
            <?php endif;?>
        },2000)
    })
</script>
<?php if(is_singular('projects') OR is_page_template('tpls/Contact.php')):
    if($location):?>
        <script>
            var ID ='<?php echo is_page_template('tpls/Contact.php') ? 'map' :'project-map';?>';
        </script>
        <script type="text/javascript"
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGSjuazfR5jJ4HLuqJ2DmyGkZR766ayRI"></script>
        <script type="text/javascript">
            let currentColor = '',
                colorPickHtml = $('html').attr('data-color'),
                currentTime = $('html').attr('id');
            if(currentTime === 'day'){
                currentColor = '#3354FF';
                switch (colorPickHtml) {
                    case "red":
                        currentColor = '#B22D2D';
                        break;
                    case "blue":
                        currentColor = '#3354FF';
                        break;
                    case "green":
                        currentColor = '#006039';
                        break;
                    case "orange":
                        currentColor = '#FA6705';
                        break;

                }
            } else if (currentTime === 'night'){
                currentColor = '#99AAFF';
                switch (colorPickHtml) {
                    case "red":
                        currentColor = '#DA6C6C';
                        break;
                    case "blue":
                        currentColor = '#99AAFF';
                        break;
                    case "green":
                        currentColor = '#29CC8A';
                        break;
                    case "orange":
                        currentColor = '#FCAA73';
                        break;

                }
            }
            // When the window has finished loading create our google map below
            if(currentTime === 'day'){
                google.maps.event.addDomListener(window, 'load', initDay(currentColor,colorPickHtml));
            } else if(currentTime === 'night'){
                google.maps.event.addDomListener(window, 'load', initDark(currentColor,colorPickHtml));
            }

            function loadMap(color,colorName){
                if(currentTime === 'day'){
                    google.maps.event.addDomListener(window, 'load', initDay(color,colorName));
                } else if(currentTime === 'night'){
                    google.maps.event.addDomListener(window, 'load', initDark(color,colorName));
                }
            }
            function initDark(color,colorName) {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                let urlImage = "<?php echo get_template_directory_uri();?>/assets/img/pin-"+colorName+"-dark.png";
                var image = new google.maps.MarkerImage(urlImage);

                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(<?php echo $location['lat'];?>,<?php echo $location['lng'];?>), // Tehran 35.6892° N, 51.3890° E
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": color
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": color
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": color
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 21
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.business",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": color
                                },
                                {
                                    "lightness": "0"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": color
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#2c2c2c"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": color
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": color
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById(ID);

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(<?php echo $location['lat'];?>,<?php echo $location['lng'];?>),
                    map: map,
                    url: 'https://www.google.com/maps/dir/?api=1&destination='+'<?php echo $location['lat'];?>'+','+'<?php echo $location['lng'];?>',
                    title: "<?php echo get_bloginfo('name');?>",
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    icon: image,
                });
                google.maps.event.addListener(marker, 'click', function () {
                    window.open(
                        marker.url,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                });
            }
            function initDay(color,colorName) {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                let urlImage = "<?php echo get_template_directory_uri();?>/assets/img/pin-"+colorName+".png";
                let image = new google.maps.MarkerImage(urlImage);

                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(<?php echo $location['lat'];?>,<?php echo $location['lng'];?>), // Tehran 35.6892° N, 51.3890° E
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                },
                                {
                                    "hue": color
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById(ID);

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(<?php echo $location['lat'];?>,<?php echo $location['lng'];?>),
                    map: map,
                    url: 'https://www.google.com/maps/dir/?api=1&destination='+'<?php echo $location['lat'];?>'+','+'<?php echo $location['lng'];?>',
                    title : "<?php echo get_bloginfo('name');?>",
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    icon: image,
                });
                google.maps.event.addListener(marker, 'click', function () {
                    window.open(
                        marker.url,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                });
            }

            $('#menu-container .colorPallet-container .colorPallet-item').click(function () {
                let currentColor = '',
                    colorP = $(this).attr('data-color');
                currentTime = $('html').attr('id');
                if(currentTime === 'day'){
                    switch (colorP) {
                        case "red":
                            currentColor = '#B22D2D';
                            break;
                        case "blue":
                            currentColor = '#3354FF';
                            break;
                        case "green":
                            currentColor = '#006039';
                            break;
                        case "orange":
                            currentColor = '#FA6705';
                            break;

                    }
                } else if (currentTime === 'night'){
                    switch (colorP) {
                        case "red":
                            currentColor = '#DA6C6C';
                            break;
                        case "blue":
                            currentColor = '#99AAFF';
                            break;
                        case "green":
                            currentColor = '#29CC8A';
                            break;
                        case "orange":
                            currentColor = '#FCAA73';
                            break;

                    }
                }
                loadMap(currentColor,colorP)
            })
        </script>
    <?php endif;?>
<?php endif;?>
<script>
    $(document).ready(function () {
        $('.colorPallet-item').click(function () {
            var newColor =  $(this).attr('data-color');
            // alert(newColor)
            document.cookie = "theme_color" + "=" + newColor + ";domain=." + document.location.host + "; path=/";
        })
        $('.grayscale-item').click(function () {
            var Gray = ($('html').hasClass("grayscale")) ? 1 : 0;

            document.cookie = "grayscale" + "=" + Gray + ";domain=." + document.location.host + "; path=/";

        })
    });
</script>
</body>
</html>