var burger =document.querySelector(".burger");
var nav= document.querySelector("nav");
var cross= document.querySelector(".icon_cross");

burger.onclick=function(){
  burger.classList.toggle("block");
  burger.classList.toggle("show");
  nav.classList.toggle("block");
  cross.classList.toggle("block");


}
cross.onclick=function(){
  nav.classList.toggle("block");
  nav.classList.toggle("show");
  cross.classList.toggle("block");
  cross.classList.toggle("show");
  burger.classList.toggle("show");
  burger.classList.toggle("block");



}





$('.your-class').slick({
  autoplay: true,
  autoplaySpeed: 2000,

  infinite: true,
  speed: 500,
  fade: true,
    arrows : false,
  cssEase: 'linear'

});