$(document).ready(function(){
    /*========slick nav js=========*/
   $("#main-nav").slicknav({
        prependTo:'.mobile-manu-wrap',
        allowParentLinks:true
    });
    
  $(".testmonial-slide").owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  margin: 30,
  autoplay: false,
  navText: ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
}
});
    
    
    
    
    
    
    
    
    
    
    
    
});