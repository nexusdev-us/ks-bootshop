/*
  Add here your own custom javascript codes
*/

// Mobile menu - close offcanvas when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const offcanvasMenu = document.getElementById('offcanvas-menu');

  if (offcanvasMenu) {
    // Get all links in the offcanvas menu
    const menuLinks = offcanvasMenu.querySelectorAll('a.nav-link, a.dropdown-item');

    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Only close if it's an actual link (not a collapse toggle)
        if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#offcanvas-menu-collapse')) {
          // Close the offcanvas
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
          if (bsOffcanvas) {
            bsOffcanvas.hide();
          }
        }
      });
    });
  }
});
