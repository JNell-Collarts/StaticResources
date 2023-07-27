document.addEventListener('readystatechange', function () {
  if (document.readyState == 'complete') {
    $(document).ready(function () {
      var sliderClass = document.documentElement.querySelector('.partner_slider');
      if (sliderClass !== null) {
        $(sliderClass).slick({ dots: !0, infinite: !0, autoplay: !0, slidesToShow: 1, slidesToScroll: 1, arrows: false });
      }
      $(window).scroll(function () {
        var top = $(window).scrollTop();
        var headerClass = document.documentElement.querySelector('.header-upper');
        if (headerClass !== null) {
          var total = $(document.documentElement.querySelector('.header-upper')).outerHeight();
          if (top >= total) {
            $(document.documentElement.querySelector(".header-module")).addClass("header-fixed");
          } else {
            $(document.documentElement.querySelector(".header-module")).removeClass("header-fixed");
          }
        }
      });

      /* blog carousel */

      var blogCarousel = document.documentElement.querySelector('.hs-recent-post-slider');
      if (blogCarousel !== null) {
        $(blogCarousel).slick({
          dots: true,
          infinite: false,
          autoplay: true,
          speed: 300,
          prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">«</button>',
          nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button">»</button>',
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 800, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
          ],
          nav: false
        });
      }

      /**Video Carousel**/
      var sliderVideoClass = document.documentElement.querySelector('.video_slider');
      if (sliderVideoClass !== null) {
        $(sliderVideoClass).slick({
          dots: true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
          nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false
              }
            }
          ]
        });
      };

      var sliderPlayVideo1Class = document.documentElement.querySelector('.play-video1');
      if (sliderPlayVideo1Class !== null) {
        $(document).ready(function () {
          $(sliderPlayVideo1Class).on('click', function (ev) {
            var sliderVideo1Class = document.documentElement.querySelector('.video1');
            if (sliderVideo1Class !== null) {
              $(sliderVideo1Class).css("display", "block");
              $(sliderVideo1Class)[0].src += "&autoplay=1&mute=0";
            }
            ev.preventDefault();
          });
        });
      };

      var sliderPlayVideo2Class = document.documentElement.querySelector('.play-video2');
      if (sliderPlayVideo2Class !== null) {
        $(document).ready(function () {
          $(sliderPlayVideo2Class).on('click', function (ev) {
            var sliderVideo2Class = document.documentElement.querySelector('.video2');
            if (sliderVideo2Class !== null) {
              $(sliderVideo2Class).css("display", "block");
              $(sliderVideo2Class)[0].src += "&autoplay=1&mute=0";
            }
            ev.preventDefault();
          });
        });
      };

      var sliderPlayVideo3Class = document.documentElement.querySelector('.play-video3');
      if (sliderPlayVideo3Class !== null) {
        $(document).ready(function () {
          $(sliderPlayVideo3Class).on('click', function (ev) {
            var sliderVideo3Class = document.documentElement.querySelector('.video3');
            if (sliderVideo3Class !== null) {
              $(sliderVideo3Class).css("display", "block");
              $(sliderVideo3Class)[0].src += "&autoplay=1&mute=0";
            }
            ev.preventDefault();
          });
        });
      }

      var sliderPlayVideo4Class = document.documentElement.querySelector('.play-video4');
      if (sliderPlayVideo4Class !== null) {
        $(document).ready(function () {
          $(sliderPlayVideo4Class).on('click', function (ev) {
            var sliderVideo4Class = document.documentElement.querySelector('.video4');
            if (sliderVideo4Class !== null) {
              $(sliderVideo4Class).css("display", "block");
              $(sliderVideo4Class)[0].src += "&autoplay=1&mute=0";
            }
            ev.preventDefault();
          });
        });
      }

    });

    var courseSelectClass = document.documentElement.querySelector('.course_selction');
    if (courseSelectClass !== null) {
      $(courseSelectClass).on("change", function () {
        var courseSelectInnerClass = document.documentElement.querySelector('.cos_innertable');
        if (courseSelectInnerClass !== null) {
          $(courseSelectInnerClass).attr("class", "cos_innertable " + $(this).val());
        }
      })
    }
  };

  if (document.documentElement.querySelector('.team-member-body .fourcol') !== null) {
    document.documentElement.querySelector('.team-member-body .fourcol').forEach(function () {
      var divs3 = $(document).children(".team-member-row");
      for (var i = 0; i < divs3.length; i += 4) {
        divs3.slice(i, i + 4).wrapAll("<div class='team-member-row-group'><div class='team-member-row-inner clearfix'></div></div>");
      }
    });
  }

  if (document.documentElement.querySelector('.team-member-row .team-member-pop-content') !== null) {
    document.documentElement.querySelector('.team-member-row .team-member-pop-content').each(function () {
      $(document).clone().appendTo($(document).parents('.team-member-row-group'));
      $(document).removeAttr('id');
    });
  }

  $(document.documentElement.querySelector('.team-member-item-wrapper')).click(function () {
    $(document.documentElement.querySelector('.team-member-row-group > .team-member-pop-content ')).not($(document).attr('data-target')).slideUp();
    $(document.documentElement.querySelector('.team-member-row .team-member-pop-content')).not($(document).next('.team-member-pop-content')).slideUp();
    $($(document).attr('data-target')).slideDown(function () {
      if (target.length) {
        document.documentElement.querySelector('html,body').animate({
          scrollTop: target.offset().top - 61
        }, 1000);
        return false;
      }
    });
    $(document).next('.team-member-pop-content').slideDown();
  });

  $(document).ready(function () {
    new WOW().init();
  })

  /* home page make banner black */

  if (window.location.pathname == '/') {
    header = document.documentElement.querySelector('.header-container .container');
    header.style.backgroundColor = "black";
  }

  //anchor links from nav
  var hash = new URL(document.URL).hash;
  if (hash != "") {
    var dataId = hash.substring(1);

    var yOffset = -50;
    const element = document.documentElement.querySelector('[data-id="' + dataId + '"]');
    if(element.classList.contains("phaseitem")){
      yOffset = -100;
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    //open content if accordion

    if(element.classList.contains("phaseitem")){
      var content = element.querySelector('.accordion-content');
      content.style.display = "block";
    }
  }

  //anchor links
  if (document.documentElement.querySelector('a[href*="#"]') !== null) {
    document.documentElement.querySelectorAll('a[href*="#"]').forEach(anchor => {
      if (anchor.getAttribute('href') != "#") {
        anchor.addEventListener('click', scrollToItem);
      }
    });
  }

  function scrollToItem(e) {
    if (this.getAttribute('role') != "menuitem") {
      e.preventDefault();
    }

    document.documentElement.querySelectorAll('.accordion-content').forEach(accordion => {
      accordion.style.display = "none";
    });

    var dataId = this.getAttribute('href').split('#')[1];
    if (dataId == undefined) {
      dataId = this.getAttribute('href').split('#')[0];
    }

    var yOffset = -50;
    const element = document.documentElement.querySelector('[data-id="' + dataId + '"]');
    if(element.classList.contains("phaseitem")){
      yOffset = -100;
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    const timeout = setTimeout(readdListeners, 1000);

    //hack because container got modified so event listeners disappeared
    function readdListeners() {
      document.documentElement.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', scrollToItem);
      });

      //open content if accordion

    if(element.classList.contains("phaseitem")){
      const newElement = document.documentElement.querySelector('[data-id="' + dataId + '"]');
      var content = newElement.querySelector('.accordion-content');
      content.style.display = "block";
    }

      clearTimeout(timeout);
    }
  }

  //mobile nav

  $(document.documentElement.querySelector('.mobile-trigger')).click(function () {
    $('body').toggleClass('mobile-open');
    $('header-lower .hs-menu-wrapper').toggleClass('menu-open');
    $(this).toggleClass('active-re');
    $('.header-lower .hs-menu-wrapper').slideToggle();
    $('.child-trigger').removeClass('child-open');
    return false;
  });

  document.documentElement.querySelectorAll('.child-trigger').forEach(btn => {
    btn.addEventListener('click', function (e) {
      $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').siblings().removeClass('child-open');
      $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
      $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
      $(this).next('.hs-menu-children-wrapper').slideToggle(250);
      $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
      $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
      $(this).toggleClass('child-open');
      $(this).siblings().toggleClass('child-open');
      return false;
    });
  });

  //home banner on mobile
  if (window.innerWidth < 768) {
    document.documentElement.querySelectorAll('.header-lower-col[c-collartsComp_CardsHover_collartsComp_CardsHover]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        document.documentElement.querySelectorAll('.header-lower-col[c-collartsComp_CardsHover_collartsComp_CardsHover]').forEach(allBtn => {
          allBtn.classList.remove('active');
        });
        $(this).addClass('active')
      });
    });

  }

  //top promo banner

  if (localStorage.getItem("collartsPromoShown") != 'yes') {
    setTimeout(function () { $(document.documentElement.querySelector('.top-promo-banner')).addClass("banner-down"); localStorage.setItem('collartsPromoShown', 'yes') }, 5000);

  }

  $(document.documentElement.querySelector('.banner-close-btn')).click(function () {
    $(document.documentElement.querySelector('.top-promo-banner')).removeClass("banner-down");
  });

});

$('.threecol').each(function () {
  var divs = $(this).children(".team-member-row");
  for (var i = 0; i < divs.length; i += 3) {
    divs.slice(i, i + 3).wrapAll("<div class='team-member-row-group'><div class='team-member-row-inner clearfix'></div></div>");
  }
});
$('.fourcol').each(function () {
  var divs3 = $(this).children(".team-member-row");
  for (var i = 0; i < divs3.length; i += 4) {
    divs3.slice(i, i + 4).wrapAll("<div class='team-member-row-group'><div class='team-member-row-inner clearfix'></div></div>");
  }
});
$('.team-member-row .team-member-pop-content').each(function () {
  $(this).clone().appendTo($(this).parents('.team-member-row-group'));
  $(this).removeAttr('id');
});
$(document.documentElement.querySelector('.team-member-item-wrapper')).click(function () {
  $(document.documentElement.querySelector('.team-member-row-group > .team-member-pop-content ')).not($(this).attr('data-target')).slideUp();
  $(document.documentElement.querySelector('.team-member-row .team-member-pop-content')).not($(this).next('.team-member-pop-content')).slideUp();
  $($(this).attr('data-target')).slideDown(function () {
    var target = $($(this));
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 61
      }, 1000);
      return false;
    }
  });
  $(this).next('.team-member-pop-content').slideDown();
});
$('.close-expanded').click(function () {
  $('.team-member-pop-content').slideUp();
  return false;
});