<!DOCTYPE html>
<?php
if (!isset($_COOKIE['theme_color'])) {
    setcookie('theme_color', 'blue', time() + 86400 * 30, '/', '.' . parse_url(site_url(''))['host']);
}
if (!isset($_COOKIE['grayscale'])) {
    setcookie('grayscale', 0, time() + 86400 * 30, '/', '.' . parse_url(site_url(''))['host']);
}
$Value = $_COOKIE['theme_color'];
$grayscale = $_COOKIE['grayscale'];
$First = false;
if (is_front_page()) {
    $landing = $_SERVER['HTTP_REFERER'];
    $url_parts = parse_url(home_url('/'));
    $domain = $url_parts['host'];
    if ($landing == '' OR !str_contains($landing, $domain)) {
        $First = true;
    }
} ?>
<html <?php language_attributes(); ?> data-color="<?php echo $Value ? $Value : 'blue'; ?>"
                                      class="<?php if ($grayscale == 1) echo 'grayscale'; ?> <?php if ($First) {
                                          echo 'firstView';
                                      } ?>">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php if (is_page_template('tpls/Contact.php')): ?>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"
              type="text/css">
        <link rel="stylesheet" href="<?php ThemeAssets('css/bootstrap.min.css'); ?>">
    <?php endif;
    if (is_rtl()):?>
        <link href="<?php ThemeAssets('css/fonts-fa.css'); ?>" rel="preload" as="style"
              onload="this.onload=null;this.rel='stylesheet'">
    <?php else: ?>
        <link href="<?php ThemeAssets('css/fonts.css'); ?>" rel="preload" as="style"
              onload="this.onload=null;this.rel='stylesheet'">
    <?php endif; ?>
    <?php if (is_singular('projects')): ?>
        <link href="<?php ThemeAssets('css/swiper-bundle.min.css'); ?>" rel="preload" as="style"
              onload="this.onload=null;this.rel='stylesheet'">
        <link href="<?php ThemeAssets('css/simple-lightbox.min.css'); ?>" rel="preload" as="style"
              onload="this.onload=null;this.rel='stylesheet'">
    <?php endif;
    if (is_singular('arts')):?>
        <link href="<?php ThemeAssets('css/swiper-bundle.min.css'); ?>" rel="preload" as="style"
              onload="this.onload=null;this.rel='stylesheet'">
    <?php endif; ?>
    <?php wp_head(); ?>
    <style>
        main.wrapper, #menu-container, header, .router-overlay {
            opacity: 0;
        }

        <?php if(is_singular('projects')):?>
        #galleySloganContainer {
            display: none;
        }

        <?php endif;?>
    </style>
</head>
<?php if ($First) { ?>
    <div id="loading">
        <div class="progress progress-rounded progress-1">
            <div class="progress-bar js-progress-bar-search"><p id="count">0%
                <p></div>
        </div>
    </div>
<?php } ?>
<body data-pageType="<?php if (is_front_page()) echo 'home'; elseif (is_post_type_archive('projects')) echo 'projects" onload="loadGrid()'; elseif (is_singular('projects')) echo 'singleProject'; elseif (is_singular('arts')) echo 'singleArt'; elseif (is_post_type_archive('arts')) echo 'peaceOfArt'; elseif (is_page_template('tpls/About.php')) echo 'aboutUs'; elseif (is_singular('post') or is_home()) echo 'blog'; ?>">
<?php if (!$First): ?>
    <div class="router-overlay-first"></div>
<?php endif; ?>
<header>
    <?php if (is_post_type_archive(array('projects', 'arts'))): ?>
    <div class="identity-text-title-wrap">
        <?php endif; ?>
        <a href="<?php echo home_url('/'); ?>" class="identity menuItem">
            <svg width="54" height="102" viewBox="0 0 54 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_50_48)">
                    <path d="M54 0.00627135V8.50575C53.822 8.5165 53.6439 8.538 53.4658 8.538C48.1448 8.53979 42.8238 8.53979 37.5027 8.53979C37.313 8.53979 37.1232 8.53979 36.911 8.53979V17.0446H45.2527V25.545H36.9101V33.9639H53.8076V58.3146H45.2725V42.4741H36.8696V59.5241H44.0989V68.0962H36.9146V76.5903H53.8444C53.8444 76.7936 53.8444 76.9415 53.8444 77.0884C53.8444 85.2438 53.8444 93.3984 53.8444 101.554C53.8444 101.703 53.83 101.851 53.8229 102H28.4371C28.4245 101.838 28.4011 101.676 28.4011 101.513C28.3993 67.8462 28.3993 34.1789 28.3993 0.512459V0C28.8939 0 29.339 0 29.7851 0C37.857 0.00179182 45.929 0.00447954 54.0009 0.00627135H54ZM45.2635 85.027H36.8606V93.5507H45.2635V85.027Z"
                          fill="#3354FF"/>
                    <path d="M17.3147 102C17.3111 99.1375 17.3067 96.2751 17.304 93.4127C17.304 93.3849 17.3228 93.3571 17.3426 93.3025H25.7455V101.999H17.3138L17.3147 102Z"
                          fill="#3354FF"/>
                    <path d="M8.70507 30.1088V55.6242H25.6943V84.735H17.2428V64.3513H0.126831V30.1088H8.70507Z"
                          fill="#3354FF"/>
                    <path d="M25.7059 19.365V53.2993H16.9982V27.9191H0V19.3659H25.7059V19.365Z" fill="#3354FF"/>
                    <path d="M25.7014 16.9586H17.0009V8.51201H8.26439V16.9479H0.0098877V0.108398H25.7014V16.9586Z"
                          fill="#3354FF"/>
                    <path d="M53.8075 68.0737H45.3237V59.5339H53.8075V68.0737Z" fill="#3354FF"/>
                </g>
                <defs>
                    <clipPath id="clip0_50_48">
                        <rect width="54" height="102" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </a>
        <?php if (is_post_type_archive(array('projects', 'arts'))): ?>
        <div class="textTitle" id="textTitle"></div>
    </div>
<?php endif; ?>
    <?php if (current_user_can('manage_options')) :?>
    <div class="menu-language-wrap">
        <div class="language-box">
            <div><?php do_action('wpml_add_language_selector'); ?></div>
        </div>
        <div id="menu">
            <div data-text="<?php _e('close', 'dokmeh'); ?>" class="text hover-target">
                <span><?php _e('menu', 'dokmeh'); ?></span>
            </div>
            <div class="menuBoxes">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 102.68">
                    <rect x="10.61" y="87.12" width="21" height="15" style="fill:none"/>
                    <rect x="0.89" y="64.62" width="17" height="15" style="fill:none"/>
                    <rect x="0.89" y="33.62" width="17" height="28" style="fill:none"/>
                    <rect x="8.39" y="0.62" width="19" height="30" style="fill:none"/>
                    <rect x="32.89" y="13.62" width="14" height="17" style="fill:none"/>
                    <rect x="21.11" y="33.62" width="31" height="50" style="fill:none"/>
                </svg>
            </div>
        </div>
    </div>
</header>
<div id="menu-container" <?php if (is_front_page()){ ?>style="opacity: 0;" <?php } ?>>
    <div class="colorPallet-title-container">
        <div class="text"><?php _e('What is <br>your <br> FAV color', 'dokmeh'); ?></div>
        <div class="colorPallet-container selected">
            <div class="colorPallet-item <?php if ($Value == 'blue') {
                echo 'selected';
            } ?>" data-color="blue"><span></span></div>
            <div class="colorPallet-item <?php if ($Value == 'red') {
                echo 'selected';
            } ?>" data-color="red"><span></span></div>
            <div class="colorPallet-item <?php if ($Value == 'green') {
                echo 'selected';
            } ?>" data-color="green"><span></span></div>
            <div class="colorPallet-item <?php if ($Value == 'orange') {
                echo 'selected';
            } ?>" data-color="orange"><span></span></div>
        </div>
        <div class="grayscale-color">
            <div class="grayscale-item"></div>
        </div>
    </div>
    <?php $menu_phone = get_field('menus_phone', 'option');
    if ($menu_phone):?>
        <div class="menu-contact-info-wrap">
            <span><?php echo get_field('number_title', 'option'); ?></span>
            <a href="tel:<?php echo str_replace(' ', '', $menu_phone) ?>"><?php echo $menu_phone; ?></a>
        </div>
    <?php endif; ?>
    <?php $menu = get_field('pages', 'option');
    if ($menu):?>
        <nav class="menu">
            <div class="top">
                <?php $page = $menu[0];
                if ($page):?>
                    <a href="<?php echo $page['page']; ?>" class="menu-item menuItem">
                        <div class="img">
                            <?php $media = $page['video']; ?>
                            <?php if ($media): ?>
                                <video autoplay poster="<?php echo $page['image']['sizes']['medium']; ?>">
                                    <source src="<?php echo $media; ?>" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            <?php else: ?>
                                <img src="<?php echo $page['image']['sizes']['medium']; ?>" alt="">
                            <?php endif; ?>
                        </div>
                        <span data-number="01"><?php echo $page['title']; ?></span>
                    </a>
                <?php endif; ?>
                <?php $page = $menu[1];
                if ($page):?>
                    <a href="<?php echo $page['page']; ?>" class="menu-item menuItem">
                        <div class="img">
                            <?php $media = $page['video']; ?>
                            <?php if ($media): ?>
                                <video autoplay poster="<?php echo $page['image']['sizes']['medium']; ?>">
                                    <source src="<?php echo $media; ?>" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            <?php else: ?>
                                <img src="<?php echo $page['image']['sizes']['medium']; ?>" alt="">
                            <?php endif; ?>
                        </div>
                        <span data-number="02"><?php echo $page['title']; ?></span>
                    </a>
                <?php endif; ?>
            </div>
            <div class="middle">
                <div class="containTwo">
                    <?php $page = $menu[2];
                    if ($page):?>
                        <a href="<?php echo $page['page']; ?>" class="menu-item menuItem">
                            <div class="img">
                                <?php $media = $page['video']; ?>
                                <?php if ($media): ?>
                                    <video autoplay poster="<?php echo $page['image']['sizes']['medium']; ?>">
                                        <source src="<?php echo $media; ?>" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                <?php else: ?>
                                    <img src="<?php echo $page['image']['sizes']['medium']; ?>" alt="">
                                <?php endif; ?>
                            </div>
                            <span data-number="03"><?php echo $page['title']; ?></span>
                        </a>
                    <?php endif; ?>
                    <?php $page = $menu[3];
                    if ($page):?>
                        <a href="<?php echo $page['page']; ?>" class="menu-item menuItem">
                            <div class="img">
                                <?php $media = $page['video']; ?>
                                <?php if ($media): ?>
                                    <video autoplay poster="<?php echo $page['image']['sizes']['medium']; ?>">
                                        <source src="<?php echo $media; ?>" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                <?php else: ?>
                                    <img src="<?php echo $page['image']['sizes']['medium']; ?>" alt="">
                                <?php endif; ?>
                            </div>
                            <span data-number="04"><?php echo $page['title']; ?></span>
                        </a>
                    <?php endif; ?>
                </div>
                <?php $page = $menu[4];
                if ($page):?>
                    <a href="<?php echo $page['page']; ?>" class="menu-item menuItem">
                        <div class="img">
                            <?php $media = $page['video']; ?>
                            <?php if ($media): ?>
                                <video autoplay poster="<?php echo $page['image']['sizes']['medium']; ?>">
                                    <source src="<?php echo $media; ?>" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            <?php else: ?>
                                <img src="<?php echo $page['image']['sizes']['medium']; ?>" alt="">
                            <?php endif; ?>
                        </div>
                        <span data-number="05"><?php echo $page['title']; ?></span>
                    </a>
                <?php endif; ?>
            </div>
            <div class="bottom">
                <?php $page = $menu[5];
                if ($page):?>
                    <a href="<?php echo $page['page']; ?>" class="menu-item menuItem">
                        <div class="img">
                            <?php $media = $page['video']; ?>
                            <?php if ($media): ?>
                                <video autoplay poster="<?php echo $page['image']['sizes']['medium']; ?>">
                                    <source src="<?php echo $media; ?>" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            <?php else: ?>
                                <img src="<?php echo $page['image']['sizes']['medium']; ?>" alt="">
                            <?php endif; ?>
                        </div>
                        <span data-number="06"><?php echo $page['title']; ?></span>
                    </a>
                <?php endif; ?>
            </div>
        </nav>
    <?php endif; ?>
</div>
<?php endif;?>
<?php if (is_post_type_archive('projects')): ?>
    <div class="progressLoading">
        <div class="progress-container-loading">
            <label>L</label>
            <label>O</label>
            <label>A</label>
            <label>D</label>
            <label>I</label>
            <label>N</label>
            <label>G</label>
        </div>
    </div>
<?php endif; ?>
<div id="smooth-wrapper">
    <div id="smooth-content">