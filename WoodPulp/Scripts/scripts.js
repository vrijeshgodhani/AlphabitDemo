function map() {
    document.getElementById("map1").style.display = "block";
}
function back(){
   document.getElementById("map1").style.display = "none";
}

var slideIndex = 1;
   showDivs(slideIndex);

   function plusDivs(n) {
     showDivs(slideIndex += n);
   }

   function showDivs(n) {
     var i;
     var x = document.getElementsByClassName("mySlides");
     if (n > x.length) {slideIndex = 1}
     if (n < 1) {slideIndex = x.length} ;
     for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
     }
     x[slideIndex-1].style.display = "block";
}


        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  let topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
  