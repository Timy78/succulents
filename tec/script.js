var html = document.documentElement;
var body = document.body;

function scrollCheck() {
  var scrollTop = html.scrollTop || body && body.scrollTop || 0;
  scrollTop -= html.clientTop; // IE7-
  if(scrollTop > 600){
    document.getElementById("scroll_top").style.display = "block";
  }
  else{
    document.getElementById("scroll_top").style.display = "none";
  }
};
window.addEventListener("scroll", scrollCheck);
