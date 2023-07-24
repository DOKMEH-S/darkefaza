<?php //Template Name: Home tpl
get_header();?>
<main class="wrapper homeWrapper">
    <section class="home-slogan-container">
        <div class="slogan-overlay">
            <canvas id="C"></canvas>
            <video loop muted autoplay playsinline preload="metadata" id="sloganVideo">
                <source src="" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="slogan-info">
            <?php if (current_user_can('manage_options')) :?>
            <h1><?php echo get_field('main_title');?></h1>
            <p><?php echo get_field('sub_title');?></p>
            <?php else:?>
            <h1>Coming soon</h1>
            <?php endif;?>
        </div>
    </section>
    <section class="home-about-container">
        <div class="content">
            <?php echo get_field('text');?>
        </div>
        <?php $video = get_field('video');?>
        <?php $poster = get_field('poster');
        if($video OR $poster):?>
        <div class="video-wrap mBox">
            <video  loop muted autoplay playsinline preload="metadata" <?php if($poster){?>poster="<?php echo $poster['sizes']['featured_medium'];?>" <?php }?>>
                <source src="<?php echo $video;?>" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <?php endif;?>
    </section>
    <?php $menu_phone = get_field('menus_phone','option');
    if($menu_phone):?>
    <footer class="home-footer-contact-info mBox">
            <span><?php echo get_field('number_title','option');?></span>
            <a href="tel:<?php echo str_replace(' ','',$menu_phone)?>"><?php echo $menu_phone;?></a>
        </footer>
    <?php endif;?>
</main>
<?php $video_day = get_field('video_day');
 $video_night = get_field('video_night');
include get_template_directory() . '/footer.php';
