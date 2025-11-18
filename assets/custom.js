/*
  Add here your own custom javascript codes
*/

// Mobile menu - add dismiss attribute to links
document.addEventListener('DOMContentLoaded', function() {
  const offcanvasMenu = document.getElementById('offcanvas-menu');

  if (offcanvasMenu) {
    // Get all links in the offcanvas menu
    const menuLinks = offcanvasMenu.querySelectorAll('a.nav-link, a.dropdown-item');

    menuLinks.forEach(link => {
      const href = link.getAttribute('href');

      // Only add dismiss to actual page links (not collapse toggles)
      if (href && !href.startsWith('#offcanvas-menu-collapse') && !href.startsWith('#modal')) {
        link.setAttribute('data-bs-dismiss', 'offcanvas');
      }
    });
  }
});
