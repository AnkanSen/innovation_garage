
    window.addEventListener("scroll", () => {
      const indicatorBar = document.querySelector(".scroll-indicator-bar");

      const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = (pageScroll / height) * 100;

      indicatorBar.style.width = scrollValue + "%";
    });

    const menuBtn = document.querySelector(".nav-menu-btn");
    const closeBtn = document.querySelector(".nav-close-btn");
    const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      navigation.classList.remove("active");
    });

    // loader
    var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
    

// Back To Top Button
jQuery(window).scroll(function(){
  if(jQuery(window).scrollTop()<50){
      jQuery('#rocketmeluncur').slideUp(500);
  }else{
      jQuery('#rocketmeluncur').slideDown(500);
  }
  var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
  var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
  jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
          duration: 600,  
          easing: 'linear'
      });
  
  var self = this;
  this.className += ' '+"launchrocket";
  setTimeout(function(){
    self.className = 'showrocket';
  },800)
});