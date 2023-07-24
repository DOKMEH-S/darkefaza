<?php get_header(); ?>
    <main class="wrapper blogWrapper padding-class-sm">
        <section class="blogContainer mBox">
            <?php $query_args = array(
                'post_type' => 'post',
                'posts_per_page' => -1,
            );
            $Blogs = new WP_Query($query_args);
            if ($Blogs->have_posts()):
                while ($Blogs->have_posts()): $Blogs->the_post();
                    $PostID = get_the_ID(); ?>
                <a href="<?php the_permalink(); ?>" class="blog-wrap menuItem">
                    <div class="blog-media-info-wrap">
                        <div class="blog-media">
                            <?php echo get_the_post_thumbnail($PostID, 'full', array('class' => 'parallax-img')); ?>
                        </div>
                        <div class="blog-info">
                            <h2><?php the_title();?></h2>
                            <div class="content">
                                <?php $summary = get_field('summary');?>
                                <p><?php echo $summary? $summary: wp_trim_words(get_the_content(),25,' ...');?></p>
                            </div>
                        </div>
                    </div>
                    <div class="news-date">
                        <?php $format = is_rtl() ? 'Y/m/d' : 'd/m/Y';?>
                        <span><?php echo get_the_date($format); ?></span>
                    </div>
                </a>
            <?php endwhile;
                endif; ?>
        </section>
    </main>
<?php get_footer();
