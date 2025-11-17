/*
  Add here your own custom javascript codes
*/

// Multi-level dropdown support for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Only enable hover on desktop
  if (window.innerWidth > 991) {

    // Main dropdown handling with delay
    const mainDropdowns = document.querySelectorAll('.navbar .nav-item.dropdown');

    mainDropdowns.forEach(function(dropdown) {
      let showTimeout;
      let hideTimeout;

      // Show dropdown on hover (with slight delay)
      dropdown.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeout);
        const menu = this.querySelector('.dropdown-menu');
        if (menu) {
          showTimeout = setTimeout(function() {
            menu.classList.add('show');
          }, 150); // 150ms delay before showing
        }
      });

      // Keep dropdown open when hovering over the menu itself
      dropdown.addEventListener('mouseleave', function() {
        clearTimeout(showTimeout);
        const menu = this.querySelector('.dropdown-menu');
        if (menu) {
          hideTimeout = setTimeout(function() {
            menu.classList.remove('show');
          }, 300); // 300ms delay before hiding
        }
      });
    });

    // Submenu handling - using CSS hover instead of complex JavaScript
    // CSS will handle show/hide, JavaScript just ensures cleanup
    const submenuItems = document.querySelectorAll('.dropdown-submenu');

    submenuItems.forEach(function(item) {
      const submenu = item.querySelector('.dropdown-menu');
      if (!submenu) return;

      console.log('Submenu found for:', item.querySelector('.dropdown-item').textContent);

      // Just ensure submenus are properly set up
      // CSS :hover will handle the display
    });
  }
});
