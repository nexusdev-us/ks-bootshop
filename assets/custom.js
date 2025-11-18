/*
  Add here your own custom javascript codes
*/

// Mobile menu - close offcanvas when clicking a link (but not collapse toggles)
document.addEventListener('DOMContentLoaded', function() {
  const offcanvasMenu = document.getElementById('offcanvas-menu');

  if (offcanvasMenu) {
    // Only get links that are actual navigation links (not collapse toggles)
    const navigationLinks = offcanvasMenu.querySelectorAll('a.dropdown-item');

    navigationLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Close the offcanvas when clicking a submenu item
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      });
    });

    // Handle top-level links that don't have children
    const topLevelLinks = offcanvasMenu.querySelectorAll('.nav-item:not(.collapse-wrapper) > a.nav-link');
    topLevelLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Close the offcanvas when clicking a top-level link without children
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      });
    });
  }
});
