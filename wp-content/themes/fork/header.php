<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title><?php echo wp_title(); ?></title>

    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

      <?php wp_head(); ?>

    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/library/css/lity.css" />
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/min/main.css" />

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160267439-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-160267439-1');
    </script>

  </head>

  <body <?php body_class(); ?>>

    <header>
      <div class='container'>
        <a href='/' class='logo'
           style='background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/library/images/logo.svg)'></a>
      </div>
    </header>
