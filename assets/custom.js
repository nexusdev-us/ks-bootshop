/*
  Add here your own custom javascript codes
*/

// Mobile menu - close offcanvas ONLY when clicking submenu items (dropdown-item class)
document.addEventListener('DOMContentLoaded', function() {
  const offcanvasMenu = document.getElementById('offcanvas-menu');

  if (offcanvasMenu) {
    // Use event delegation to catch clicks on submenu items only
    offcanvasMenu.addEventListener('click', function(e) {
      // Check if the clicked element is a dropdown-item (submenu link)
      if (e.target.classList.contains('dropdown-item')) {
        // Close the offcanvas
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasMenu);
        if (bsOffcanvas) {
          bsOffcanvas.hide();
        }
      }
      // For anything else (nav-links with collapse toggles), do nothing - let Bootstrap handle it
    });
  }
});
