// $(function() {
//   $('submit').on(click, function()
//   alert("button clicked");
//   )

// });

// mmost loved products carousel from flickity @ https://flickity.metafizzy.co/ 
$('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    percentPosition:false,
    autoPlay:true,
    prevNextButtons:false,
  });
//  smooth scrolling source @ https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });