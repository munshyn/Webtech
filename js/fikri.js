window.onscroll = function() {navBar()};

function navBar() {
  var header = document.querySelector("header");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    header.classList.add('nav-active');
  } else {
    header.classList.remove('nav-active');

  }
}