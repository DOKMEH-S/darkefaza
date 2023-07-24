<?php get_header(); ?>
    <main class="wrapper blogWrapper">
        <?php while (have_posts()) : the_post();
            $postID = get_the_ID(); ?>
            <section class="singleBlogSlogan mBox">
                <!--                <img src="./assets/img/sample/blog-1.jpg" alt="" class="parallax-img">-->
                <?php echo get_the_post_thumbnail($postID, 'full', array('class' => 'parallax-img')); ?>
            </section>
            <section class="title-date-wrap padding-class-sm mBox">
                <h1><?php the_title(); ?></h1>
                <?php $format = is_rtl() ? 'Y/m/d' : 'd/m/Y';?>
                <span class="date"><?php echo get_the_date($format); ?></span>
            </section>
            <section class="singleBlogSideBarWrapper padding-class-sm">
                <div class="single-blog-content">
                    <?php the_content(); ?>
                </div>
                <?php $categories = wp_get_object_terms($postID, 'category', array('fields' => 'ids'));
                $query_args = array(
                    'post_type' => 'post',
                    'category__in' => ($categories),
                    'post__not_in' => array($postID),
                    'posts_per_page' => '2',
                );

                $related_cats_post = new WP_Query($query_args);

                if ($related_cats_post->have_posts()):
                    $rel = true;
                else:
                    $query_args = array(
                        'post_type' => 'post',
                        'post__not_in' => array($postID),
                        'posts_per_page' => '2',
                        'orderby' => 'date'
                    );
                    $related_cats_post = new WP_Query($query_args);
                endif;
                if ($related_cats_post->have_posts()):?>
                    <aside class="singleBlogOtherB">
                        <h2><?php echo $rel?  __('Related news','dokmeh') : __('Latest news','dokmeh');?></h2>
                        <?php while ($related_cats_post->have_posts()): $related_cats_post->the_post();
                            $relID = get_the_ID(); ?>
                            <a href="<?php the_permalink();?>" class="otherBlogWrap menuItem">
                                <div class="blog-media">
                                    <?php echo get_the_post_thumbnail($relID, 'full', array('class' => 'parallax-img')); ?>
                                </div>
                                <div class="blog-info">
                                    <?php $format = is_rtl() ? 'Y/m/d' : 'd/m/Y';?>
                                    <span class="date"><?php echo get_the_date($format); ?></span>
                                    <h3><?php the_title(); ?></h3>
                                    <div class="content">
                                        <?php $summary = get_field('summary');?>
                                        <p><?php echo $summary? $summary: wp_trim_words(get_the_content(),25,' ...');?></p>
                                    </div>
                                </div>
                            </a>
                        <?php endwhile; ?>
                    </aside>
                <?php endif; ?>
            </section>
        <?php endwhile; ?>
    </main>
<?php get_footer();
