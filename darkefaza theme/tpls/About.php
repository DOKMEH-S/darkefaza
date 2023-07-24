<?php /* Template Name:About Tpl*/
get_header(); ?>
    <main class="wrapper aboutUsWrapper">
        <?php while (have_posts()) : the_post();
            $pageID = get_the_ID(); ?>
            <section class="aboutContainer padding-class mBox">
                <?php $summary = get_field('summary');
                if ($summary):?>
                    <div class="info-wrap">
                        <?php echo $summary; ?>
                    </div>
                <?php endif; ?>
                <div class="element-wrap">
                    <h1><?php the_title(); ?></h1>
                </div>
            </section>
            <?php if (have_rows('text_block')): ?>
                <section class="aboutMissionVisionContainer padding-class mBox">
                    <?php while (have_rows('text_block')):the_row(); ?>
                        <div class="missionVisionWrap gs_reveal">
                            <h2><?php echo get_sub_field('title'); ?></h2>
                            <div class="content">
                                <?php echo get_sub_field('text'); ?>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </section>
            <?php endif;
            if(have_rows('founder')):?>
            <section class="aboutCEOWrapper padding-class-big">
                <?php while(have_rows('founder')):the_row();?>
                <div class="CEOWrap gs_reveal">
                    <div class="ceo-info">
                        <h2><?php echo get_sub_field('title');?></h2>
                        <div class="content">
                            <?php echo get_sub_field('text');?>
                        </div>
                    </div>
                    <?php $img = get_sub_field('image');?>
                    <div class="ceo-media">
                        <img src="<?php echo $img['sizes']['featured_medium']; ?>" alt="<?php echo get_post_meta($img['ID'], '_wp_attachment_image_alt', true); ?>" class="parallax-img">
                    </div>
                </div>
                <?php endwhile;?>
            </section>
            <?php endif;
            if(have_rows('awards')):?>
            <section class="aboutAwardsContainer padding-class">
                <h2 class="gs_reveal"><?php echo get_field('award_title');?></h2>
                <div class="awards-wrapper">
                    <?php while(have_rows('awards')):the_row();?>
                    <div class="awards-wrap gs_reveal">
                        <?php $img = get_sub_field('image');?>
                        <div class="award-media">
                            <img src="<?php echo $img['sizes']['featured_medium']; ?>" alt="<?php echo get_post_meta($img['ID'], '_wp_attachment_image_alt', true); ?>" >
                        </div>
                        <p class="awards-title"> <?php echo get_sub_field('title');?></p>
                        <p class="awards-year"> <?php echo get_sub_field('year');?></p>
                        <?php $projectID = get_sub_field('project');
                        if($projectID):?>
                        <a href="<?php echo get_the_permalink($projectID); ?>" class="awards-for-whose-project menuItem"><?php echo get_the_title($projectID); ?></a>
                    <?php endif;?>
                            </div>
                    <?php endwhile;?>
                </div>
            </section>
            <?php endif;
            if(have_rows('members')):?>
            <section class="aboutMemberContainer padding-class">
                <h2 class="gs_reveal"><?php echo get_field('member_title');?></h2>
                <div class="membersWrapper gs_reveal">
                    <?php while(have_rows('members')):the_row();?>
                    <div class="memberCard">
                        <?php $img = get_sub_field('image');?>
                        <img src="<?php echo $img['sizes']['featured_medium']; ?>" alt="<?php echo get_post_meta($img['ID'], '_wp_attachment_image_alt', true); ?>" >
                        <div class="text">
                            <h3 <?php if(!is_rtl()){?>data-splitting=""<?php }?>><?php echo get_sub_field('name');?></h3>
                            <p <?php if(!is_rtl()){?>data-splitting=""<?php }?>><?php echo get_sub_field('job');?></p>
                        </div>
                    </div>
                    <?php endwhile;?>
                </div>
            </section>
            <?php endif;?>
        <?php endwhile; ?>
    </main>
<?php get_footer();
