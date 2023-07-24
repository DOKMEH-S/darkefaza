<?php get_header(); ?>
    <main class="wrapper singleProjectWrapper">
        <?php while (have_posts()) : the_post();
            $projectID = get_the_ID(); ?>
            <section class="singleProjectGalleryTitleWrap padding-class-sm">
                <div class="swiper myGallerySwiper">
                    <div class="swiper-wrapper">
                        <?php $gallery = get_field('gallery');
                        if ($gallery):
                            foreach ($gallery as $img):?>
                                <div class="swiper-slide s-project">
                                    <div class="projectMedia">
                                        <img src="<?php echo $img['url']; ?>"
                                             alt="<?php echo get_post_meta($img['ID'], '_wp_attachment_image_alt', true); ?>">
                                    </div>
                                </div>
                            <?php endforeach;
                        else: ?>
                            <div class="swiper-slide s-project">
                                <div class="projectMedia">
                                    <?php echo get_the_post_thumbnail($projectID, 'full'); ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="title-arrows-wrapper">
                    <div class="swiper-button-prev p1"></div>
                    <h1><?php the_title(); ?></h1>
                    <div class="swiper-button-next n1"></div>
                </div>
            </section>
            <section class="singleProjectContainer padding-class">
                <h2><?php _e('projects details','dokmeh');?></h2>
                <div class="sPC">
                    <?php if (have_rows('project_info')): ?>
                        <ul class="projectsDetails">
                            <?php while (have_rows('project_info')):the_row(); ?>
                                <li><span><?php echo get_sub_field('title'); ?></span><span><?php echo get_sub_field('text'); ?></span></li>
                            <?php endwhile; ?>
                        </ul>
                    <?php endif; ?>
                    <div class="singleProjectContentWrap">
                        <div class="content-project-wrapper">
                            <?php the_content();?>
                        </div>
                        <?php $images = get_field('images');
                        if($images):?>
                        <div class="project-gallery-grid-container">
                            <h2><?php _e('Project gallery','dokmeh');?></h2>
                            <div class="grid-gallery-wrap gallery">
                                <?php foreach ($images as $image):?>
                                <a href="<?php echo $image['url'];?>" class="gallery-box"><img
                                            src="<?php echo $image['sizes']['medium'];?>" alt="<?php echo get_post_meta($image['ID'], '_wp_attachment_image_alt', true); ?>"></a>
                            <?php endforeach;?>
                            </div>
                        </div>
                        <?php endif;
                        $location = get_field('location');
                        $address = get_field('address');
                        if($location OR $address):?>
                        <div class="project-map-container">
                            <h2><?php _e('project location','dokmeh');?></h2>
                            <?php if($address):?>
                            <div class="address-box">
                                <p><?php _e('address:','dokmeh');?></p>
                                <p><?php echo $address;?></p>
                            </div>
                            <?php endif;
                            if($location):?>
                            <div id="project-map"></div>
                            <?php endif;?>
                        </div>
                        <?php endif;?>
                    </div>
                </div>
            </section>
        <?php endwhile; ?>
    </main>
<?php include get_template_directory() . '/footer.php';
