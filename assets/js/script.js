window.addEventListener("load",function(){

    loader.style.height= "100px";

    loader.style.width = "100px";

    loader.style.borderRadius = "50%";

    loader.style.visibility = "hidden";

});

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
    document.getElementById("navmenu").style.top = "0";
   
 } else {
    document.getElementById("navmenu").style.top = "-100px";
    
  }
   prevScrollpos = currentScrollPos;
}

// 
  $(document).ready(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("navbar1");
        } else {
          $(".navbar").removeClass("navbar1");
        }
    });
  });


