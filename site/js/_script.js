var bgimgs = [];
//GEN :
// https://developers.facebook.com/tools/explorer/1651368258471958?method=GET&path=556862554433643%2Fphotos%2Fuploaded%3Ffields%3Did%2Cname%2Cimages%2Clink&version=v2.4
// https://graph.facebook.com/oauth/access_token?%20client_id=1651368258471958&%20client_secret=477e7d1723f2030e057ea48daed5d436&%20grant_type=fb_exchange_token&%20fb_exchange_token=CURRENT_TOKEN
var tokn = 'CAAXd6SJwiBYBAFm5nICoW8pZC6UCaZCAVqcjBGGqBZCJZCnELxsz2d4yyZBiIENGqhqoHk4CWsZCbxTQhTKgUbtZAjB0YsgtDGHzOifP2LXzRgGc7uzKOdVZCH4U5qkbbG6TEZBVoZCacYUmBB7zf3s9ZApZCby7TLc95EaiZBCzXUcI8n2MjtAfeQy5zPEPW21hnTl9hp171j2Vg9AZDZD';
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1651368258471958',
      xfbml      : true,
      version    : 'v2.4'
    });

    FB.api(
        "/808899039229992/photos",
        {access_token: tokn, fields:"id,name,images,link"},
        function (response) {
          if (response && !response.error) {
            /* handle the result */


            $('.fbStatus .facebookStatus:nth-child(1) p').html(response.data[0].name);
            $('.fbStatus .facebookStatus:nth-child(2) p').html(response.data[1].name);
            $('.fbStatus .facebookStatus:nth-child(3) p').html(response.data[2].name);
            $('.fbStatus .facebookStatus:nth-child(4) p').html(response.data[3].name);

            $('.fbStatus .facebookStatus:nth-child(1) .image').css('background-image','url('+response.data[0].images[0].source+')');
            $('.fbStatus .facebookStatus:nth-child(2) .image').css('background-image','url('+response.data[1].images[0].source+')');
            $('.fbStatus .facebookStatus:nth-child(3) .image').css('background-image','url('+response.data[2].images[0].source+')');
            $('.fbStatus .facebookStatus:nth-child(4) .image').css('background-image','url('+response.data[3].images[0].source+')');

            $('.fbStatus .facebookStatus:nth-child(1) a').attr('href',response.data[0].link);
            $('.fbStatus .facebookStatus:nth-child(2) a').attr('href',response.data[1].link);
            $('.fbStatus .facebookStatus:nth-child(3) a').attr('href',response.data[2].link);
            $('.fbStatus .facebookStatus:nth-child(4) a').attr('href',response.data[3].link);

          }
        }
    );
    FB.api(
        "/808979472555282/photos",
        {access_token: tokn, fields:"id,name,images,link"},
        function (response) {
          console.log(response);
          if (response && !response.error) {
            /* handle the result */
            $('.promocion').attr('href', response.data[0].images[0].source);

          }
        }
      );
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



$(function(){
/*################################################*/
  /*################################################*/
    /*################################################*/
      /*################################################*/
  /* framework plugins */


  // FORMULARIO SIMPLE

  if($('form.simple').length>0){
    $('form.simple').submit(function(e){
      var resultado;
      var _this = $(this);
      e.preventDefault();
      var datos = $(this).serialize();
      _this.find('.resultado').html('<i class="fa fa-circle-o-notch fa-spin"></i>');
      $.get('http://www.dragonbarbudo.com/api/email.php?'+datos, function(result){
        resultado = JSON.parse(result);
        if( resultado[0].status === "sent" ){
          _this.find('.resultado').html('Mensaje correctamente enviado.');
        } else {
          _this.find('.resultado').html('Ocurrió un error. Inténtelo de nuevo más tarde.');
        }
      });
    });
  }


  // SCROLLREVEAL
  if($('[data-sr]').length>0){
    window.sr = new scrollReveal({
      reset:true,
      mobile:true
    });
  }


  // BACKSTRETCH

  if($('.bgslider').length>0){

      $('.bgslider').each(function(index){
        bgimgs[index] = [];
        $(this).children('div').each(function(){
          bgimgs[index].push($(this).attr('data'));
        });
        $( $(this).attr('data') ).backstretch(bgimgs[index], {duration: 3000, fade: 750});
      });

   }

  // MODALBOX

  if($('.box').length>0){
    $('.box').swipebox();
  }

  // SLIDERS
  if($('.slider.one').length>0){
    $('.slider.one').slick({
      prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
      nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
      autoplay: true
    });
  }
  if($('.slider.multiple, .slider.multiplebox').length>0){
    $('.slider.multiple, .slider.multiplebox').slick({
      prevArrow: '<button class="slick-prev fa fa-caret-left"></button>',
      nextArrow: '<button class="slick-next fa fa-caret-right"></button>',
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        { breakpoint: 960, settings: { slidesToShow: 2,   slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
      ]
    });
  }
      /*################################################*/
    /*################################################*/
  /*################################################*/
/*################################################*/
  /* custom */










}); // JQUERY END
