<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package start_wp_theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'start_wp_theme' ); ?></a>

	<header class="site-header">
		<div class="wrapper"><!-- .wrapper -->
			<h1 class="logo">blu<span class="blue">e</span>asy</h1>
			<nav class="main-navigation" role="navigation">
						<?php
					wp_nav_menu( array(
						'theme_location' => 'menu-1',
						'menu_id'        => 'primary-menu',
					) );
				?>
			</nav><!-- #site-navigation -->
		</div><!-- .wrapper -->
		<p class="header__title">“I’m looking for the unexpected.</p><br>
		<p class="header__title">I’m looking for things I’ve never seen before.”</p>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
