window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = '#2a2a2a';
    } else {
      navbar.style.backgroundColor = '#1e1e1e';
    }
  }
  