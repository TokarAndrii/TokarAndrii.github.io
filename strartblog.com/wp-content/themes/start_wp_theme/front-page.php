<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package start_wp_theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<div class="main__wrapper"><!-- main__wrapper -->
				<div class="main__1"><!-- main__1 -->
					<p class="main1__name">SERVICES</p>
					<ul class="main1__list">
						<li class="main1__listItem"><a href=""><img class="main1__picture" src="<?php echo(get_template_directory_uri()); ?>/img/coffee.png" alt=""></a>
							<span class="main1__titleItem">COFFE</span><p class="main1__textItem">Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes.</p>
						</li>
						<li class="main1__listItem"><a href=""><img src="<?php echo(get_template_directory_uri()); ?>/img/instant.png" alt=""></a>
							<span class="main1__titleItem">COFFE</span><p class="main1__textItem">Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes.</p>
						</li>
						<li class="main1__listItem"><a href=""><img src="<?php echo(get_template_directory_uri()); ?>/img/serious.png" alt=""></a>
							<span class="main1__titleItem">COFFE</span><p class="main1__textItem">Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes.</p>
						</li>
						<li class="main1__listItem"><a href=""><img src="<?php echo(get_template_directory_uri()); ?>/img/frame.png" alt=""></a>
							<span class="main1__titleItem">COFFE</span><p class="main1__textItem">Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes.</p>
						</li>
					</ul>
				</div><!-- main__1 -->
				<div class="main__2"><!-- main__2 -->
					<p class="main2__name">PORTFOLIO</p>
					<ul>
						<li><a href="">ALL</a></li>
						<li><a href="">PANORAMAS</a></li>
						<li><a href="">PORTRAITS</a></li>
						<li><a href="">MACRO</a></li>
						<li><a href="">JOURNAL</a></li>
					</ul>
					<div class="main__2Gallery">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo1.png" alt="">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo2.png" alt="">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo3.png" alt="">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo4.png" alt="">
					</div>
					<div class="main__2Gallery">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo5.png" alt="">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo6.png" alt="">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo7.png" alt="">
						<img src="<?php echo(get_template_directory_uri()); ?>/img/portfolio_photo8.png" alt="">
					</div>
				</div><!-- main__2 -->
				<div class="main__3"><!-- main__3 -->
					<div class="main__3left"><!-- main__3left -->
						<p class="main3__name">Just default Section</p>
						<p>Bear claw marzipan bear claw applicake I love muffin. Lemon drops gummi bears pastry gummi bears sesame snaps I love unerdwear.com. Soufflé cotton candy dessert candy ice cream wafer gummies cheesecake brownie.</p>
						<p>Muffin chupa chups jelly beans sweet pie applicake. Croissant chocolate cake I love pudding. Ice cream I love powder pudding apple pie marshmallow. Cupcake marzipan oat cake bonbon I love candy canes toffee.</p>
						<input type="submit" value="VISIT ME">
					</div><!-- main__3left -->
					<video width="560" height="312" autoplay loop muted>
					    <source src="<?php echo(get_template_directory_uri()); ?>/img/surf.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
				  	</video>
					</div><!-- main__3 -->
					<div class="main__4"><!-- main__4 -->
					<div class="main__4top">
						<p class="main4__name">TWITTER</p>
						<img src="<?php echo(get_template_directory_uri()); ?>/img/icon-twitter.png" alt="" class="main4__img">
					</div>
						<p class="main4__text">Unerdwear cookie liquorice. Cake donut cupcake lollipop soufflé candy. Chocolate oat cake<br>&#64;cheesecake tootsie roll.</p>
					</div><!-- main__4 -->
					<div class="main__5"><!-- main__5 -->
						<p class="main5__name">Who is john doe?</p>
						<div class="main__5left">
							<p class="main__5text">Bear claw marzipan bear claw applicake I love muffin. Lemon drops gummi bears pastry gummi bears sesame snaps I love unerdwear.com. Soufflé cotton candy dessert candy ice cream wafer gummies cheesecake brownie.</p>
							<p class="main__5text">Muffin chupa chups jelly beans sweet pie applicake. Croissant chocolate cake I love pudding. Ice cream I love powder pudding apple pie marshmallow. Cupcake marzipan oat cake bonbon I love candy canes toffee.</p>
						</div>
						<div class="main__5right">
							<p class="main__5text">Pudding dessert jujubes tiramisu gingerbread croissant tiramisu applicake. Sesame snaps sugar plum cotton candy chocolate bonbon lemon drops candy canes cotton candy. Cake toffee pie bear claw pastry.</p>
							<div class="icons">
								<a href="#"><img src="<?php echo(get_template_directory_uri()); ?>/img/icon-twitter.png" alt=""></a>
								<a href="#"><img src="<?php echo(get_template_directory_uri()); ?>/img/icon-google-plus.png" alt=""></a>
								<a href="#"><img src="<?php echo(get_template_directory_uri()); ?>/img/icon-dribbble.png" alt=""></a>
								<a href="#"><img src="<?php echo(get_template_directory_uri()); ?>/img/icon-coffee.png" alt=""></a>
							</div>
						</div>
					</div><!-- main__5 -->
					<div class="main__6">
						<p class="main6__name">Testimonials</p>
						<p class="main6__txt">Applicake chocolate cake wafer toffee pie soufflé wafer. Tart marshmallow wafer macaroon cheesecake jelly. Gingerbread cookie soufflé sweet roll sweet roll jelly-o.</p>
						<p class="main6__author">-Walter White</p>
					</div>
					<div class="main__7">
						<p class="main7__name">CONTACT</p>
						<div class="main__7left">
							<form action="#">
								<label for="fullname">FULL NAME</label><input id="fullname" type="text">
								<label for="email">EMAIL</label><input id="email" type="email">	
								<label for="message">MESSAGE</label><input id="message" type="text">
								<input type="submit" class="button" value="MESSAGE">
							</form>
						</div>
						<div class="main7__txt">
							<p class="main7__txt1">Jujubes bear claw croissant wafer sweet lemon drops brownie chocolate bar. Sweet lollipop halvah tootsie roll cake fruitcake. Chocolate cake chocolate bar gingerbread lollipop tart. Jujubes bear claw donut chupa chups.</p>
						<p class="main7__txt2">Linda Newman<br>W325 State Road 123<br>Mondovi, WI(Wisconsin) 98746-54321<br>(715) 946 - 1234</p>
						</div>
					</div>
			</div><!-- main__wrapper -->

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
