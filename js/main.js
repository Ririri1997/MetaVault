'use strict'
window.addEventListener('resize', mobile)


const dataAttr = document.querySelectorAll('[data-wow-delay]');

function mobile(){
  if( window.innerWidth <= 680 ){
    dataAttr.forEach(function(element) {
      element.removeAttribute('data-wow-delay');
    });
 }
}
mobile();
//animate 
new WOW().init();