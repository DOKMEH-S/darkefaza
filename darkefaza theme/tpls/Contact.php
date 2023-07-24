<?php /* Template Name:Contact Tpl*/
get_header(); ?>
    <main class="wrapper contactUsWrapper">
        <?php while (have_posts()) : the_post();
            $postID = get_the_ID(); ?>
            <div class="contactContainer padding-class mBox">
                <div class="contact_info">
                    <h1 class="title">
                        <span><?php echo get_field('title_1'); ?></span>
                        <span><?php echo get_field('title_2'); ?></span>
                    </h1>
                    <?php echo get_field('text'); ?>
                    <div class="contactFeature-container">
                        <?php $Address = get_field('address', 'option');
                        if ($Address):
                            $location = get_field('location', 'option'); ?>
                            <div class="contactFeature-item undefined"><p class="title"></p><a <?php if ($location) {
                                    echo 'href="https://www.google.com/maps/dir/?api=1&destination=' . $location['lat'] . ',' . $location['lat'] . '"';
                                } ?>><?php echo $Address; ?></a>
                            </div>
                        <?php endif; ?>
                        <?php if (have_rows('emails', 'option')): ?>
                            <div class="contactFeature-item mail"><p
                                        class="title"><?php echo get_field('email_title', 'option'); ?></p>
                                <?php while (have_rows('emails', 'option')):the_row();
                                    $Email = get_sub_field('email'); ?>
                                    <a href="mailto:<?php echo antispambot($Email); ?>"><?php echo antispambot($Email); ?></a>
                                <?php endwhile; ?>
                            </div>
                        <?php endif; ?>
                        <?php if (have_rows('phones', 'option')): ?>
                            <div class="contactFeature-item phone"><p
                                        class="title"><?php echo get_field('phone_title', 'option'); ?></p>
                                <?php while (have_rows('phones', 'option')):the_row();
                                    $phone = get_sub_field('phone'); ?><a
                                    href="tel:<?php echo str_replace(' ', '', $phone); ?>"><?php echo $phone; ?></a>
                                <?php endwhile; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <?php if (have_rows('social_media')): ?>
                        <div class="contactSocialMediaBoxes">
                            <p class="title"><?php echo get_field('block_title'); ?></p>
                            <ul class="menu-social-media-items">
                                <?php while (have_rows('social_media')): the_row(); ?>
                                    <li>
                                        <a href="<?php echo get_sub_field('link'); ?>"><?php echo get_sub_field('icon'); ?></a>
                                    </li>
                                <?php endwhile; ?>
                            </ul>
                        </div>
                    <?php endif; ?>
                    <div class="contactItemsWrap" id="map">
<!--                        <img src="--><?php //ThemeAssets('img/sample/rect.png'); ?><!--" alt="">-->
                    </div>
                </div>
                <div class="contact-tabs">
                    <div class="tabs">
                        <div>
                            <p class="title"><?php _e('HOW CAN I HELP?','dokmeh');?>*</p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="tab-1" data-bs-toggle="tab"
                                            data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1"
                                            aria-selected="true"><?php _e('your project','dokmeh');?>
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="tab-2" data-bs-toggle="tab" data-bs-target="#tab2"
                                            type="button" role="tab" aria-controls="tab2" aria-selected="false"><?php _e('join us','dokmeh');?>
                                    </button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="tab1" role="tabpanel"
                                     aria-labelledby="tab-1">
                                    <?php $form = is_rtl() ? '[contact-form-7 id="267" title="Contact form Fa"]' : '[contact-form-7 id="204" title="Contact form En"]';
                                    echo do_shortcode($form);?>
                                </div>
                                <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab-2">
                                    <form>
                                        tab ..2
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endwhile; ?>
    </main>
<?php include get_template_directory() . '/footer.php';
