<?php get_header(); ?>
    <main class="wrapper singleArtWrapper padding-class mBox">
        <?php while (have_posts()) : the_post();
            $ArtID = get_the_ID(); ?>
            <section class="singleArtSliderContainer">
                <div class="swiper mySwiper2">
                    <div class="swiper-wrapper">
                        <?php $gallery = get_field('gallery');
                        if ($gallery):
                            foreach ($gallery as $img):?>
                                <div class="swiper-slide s-project">
                                    <img src="<?php echo $img['url']; ?>"
                                         alt="<?php echo get_post_meta($img['ID'], '_wp_attachment_image_alt', true); ?>">
                                </div>
                            <?php endforeach;
                        else: ?>
                            <div class="swiper-slide s-project">
                                <?php echo get_the_post_thumbnail($ArtID, 'full'); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
                <?php if ($gallery): ?>
                    <div class="thumbnails-arrows-container">
                        <div class="swiper-button-next nA1"></div>
                        <div thumbsSlider="" class="swiper mySwiperThumb">
                            <div class="swiper-wrapper">
                                <?php foreach ($gallery as $img): ?>
                                    <div class="swiper-slide">
                                        <img src="<?php echo $img['sizes']['medium']; ?>"/>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                        <div class="swiper-button-prev pA1"></div>
                    </div>
                <?php endif; ?>
            </section>
            <section class="singleArtContainer">
                <h1><?php the_title();?></h1>
                <div class="sPC">
                    <div class="singleProjectContentWrap">
                        <div class="content-project-wrapper">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </div>
            </section>
        <?php endwhile; ?>
    </main>
<?php //get_footer();
include get_template_directory() . '/footer.php';
