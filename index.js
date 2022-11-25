// Open the full screen search box 
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box 
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

//to make the loader stop after loading page completely 
//$(document).ready(function() {
//Preloader
//$(window).load(function() {
//preloaderFadeOutTime = 500;
//function hidePreloader() {
//var preloader = $('.spinner-wrapper');
//preloader.fadeOut(preloaderFadeOutTime);
//}
//hidePreloader();
//});
//});

<script>
$(document).ready(function() {
//Preloader
$(window).on(‘load’, function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
})
</script>



$(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 