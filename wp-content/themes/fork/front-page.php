<?php get_header(); ?>

<div class='hero' id='hero'>
  <div class='container small'>
    <h1>Focus on what <span>Matters</span></h1>
    <p>Fork helps decrease the clutter caused by the wide variety of messaging apps, by merging your favourite ones into
      one powerful platform.</p>

    <form action=''>
      <input type='email' placeholder='E-mail address'>
      <button>Update me</button>
    </form>
  </div>
</div>

<div class='usps'>
  <div class='single-usp'>
    <h2>Secure</h2>
    <p>End to end encryption provides the best possible security for your data. Never breached, never at risk.</p>
  </div>

  <div class='single-usp'>
    <h2>Affordable</h2>
    <p>No monthly subscriptions or unforeseen costs. A one time payment for a lifetime of comfort</p>
  </div>

  <div class='single-usp'>
    <h2>Just for you</h2>
    <p>We strife to make sure that your favourite messaging applications are always supported with our weekly updates</p>
  </div>
</div>

<div class='testimonial'>
  <h3>"Fork is better than any other platform I've worked with, and I tried them all."</h3>
  <p class='author'>- Lars van Duijkeren</p>
</div>

<div class='partners'>
  <img src='<?php echo get_stylesheet_directory_uri(); ?>/library/images/facebook.svg' alt=''>
  <img src='<?php echo get_stylesheet_directory_uri(); ?>/library/images/discord.svg' alt=''>
  <img src='<?php echo get_stylesheet_directory_uri(); ?>/library/images/whatsapp.svg' alt=''>
  <img src='<?php echo get_stylesheet_directory_uri(); ?>/library/images/telegram.svg' alt=''>
  <img src='<?php echo get_stylesheet_directory_uri(); ?>/library/images/twitter.svg' alt=''>
</div>

<?php get_footer(); ?>