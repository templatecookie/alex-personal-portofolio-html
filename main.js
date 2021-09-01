// import main scss file
import './src/scss/main.scss'
import 'bootstrap/scss/bootstrap.scss'

  // var swiper = new Swiper(".mySwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  // var swiper = new Swiper(".testimonialSlider", {
  //   direction: 'vertical',
  //   mousewheelControl: true,
  //   slidesPerView: 2,
  //   mousewheel: true,
  //   freeMode: true,
  //   // freeModeSticky: true,
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //     hide: false,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });


      var swiper = new Swiper(".testimonialSlider", {
        direction: 'vertical',
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
        },
        navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
      });

      var swiper = new Swiper(".portfolio-slider-tab", {
        slidesPerView: 4,
      });
   



  const tabItems = document.querySelectorAll('.tab-item')
  const contentItems = document.querySelectorAll('.content-item')
  
  const clearActiveClass = (element, className = 'is-active') => {
      element.forEach(item => item.classList.remove(`${ className }`))
  }
  
  const setActiveClass = (element, index, className = 'is-active') => {
      element[index].classList.add(`${ className }`)
  }
  
  const checkoutTabs = (item, index) => {
      item.addEventListener('click', () => {
          if (item.classList.contains('is-active')) return
          
          const currentItem = index
          
          clearActiveClass(tabItems)
          clearActiveClass(contentItems)
          
          setActiveClass(tabItems, currentItem)
          setActiveClass(contentItems, currentItem)
      })
  }
  
  tabItems.forEach(checkoutTabs)



  



  var swiper = new Swiper('.alex-portfolio-swiper-container', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.alax-portfolio-swiper-button-next',
      prevEl: '.alax-portfolio-swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }



function darkFunction() {
 
    var apply = document.getElementById("dark");
    // apply.classList.add("dark-theme");
    alert("hy");
 }




 // external js: isotope.pkgd.js


// init Isotope
// var $grid = $('.all-portfolio-item').isotope({
//   itemSelector: '.element-item',
//   layoutMode: 'fitRows',
//   getSortData: {
//     name: '.name',
//     symbol: '.symbol',
//     number: '.number parseInt',
//     category: '[data-category]',
//     weight: function( itemElem ) {
//       var weight = $( itemElem ).find('.weight').text();
//       return parseFloat( weight.replace( /[\(\)]/g, '') );
//     }
//   }
// });



// $('.all-portfolio-item').isotope({
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });


// init Isotope
var $grid = $('.all-items-portfolio').isotope({
  // options
});
// filter items on button click
$('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$('.scroll-shift').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 400);
  }
});