/*
  Add here your own custom javascript codes
*/

// Mobile menu - close offcanvas when clicking actual navigation links only
document.addEventListener('DOMContentLoaded', function() {
  const offcanvasMenu = document.getElementById('offcanvas-menu');

  if (offcanvasMenu) {
    // Wait for Bootstrap to be ready
    setTimeout(function() {
      // Get ALL links in the offcanvas
      const allLinks = offcanvasMenu.querySelectorAll('a');

      allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          const hasToggle = this.getAttribute('data-bs-toggle');

          // Only close if:
          // 1. It's a real URL (not a collapse toggle starting with #offcanvas-menu-collapse)
          // 2. It doesn't have data-bs-toggle="collapse"
          if (href &&
              !href.startsWith('#offcanvas-menu-collapse') &&
              hasToggle !== 'collapse') {

            // This is a navigation link, close the menu
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
            if (bsOffcanvas) {
              bsOffcanvas.hide();
            }
          }
          // If it has data-bs-toggle="collapse", do nothing and let Bootstrap handle it
        });
      });
    }, 100);
  }
});
