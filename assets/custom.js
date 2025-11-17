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

    // Submenu handling
    const submenuItems = document.querySelectorAll('.dropdown-submenu');

    submenuItems.forEach(function(item) {
      let showTimeout;
      let hideTimeout;
      const submenu = item.querySelector('.dropdown-menu');

      // Parent item hover
      item.addEventListener('mouseenter', function() {
        clearTimeout(hideTimeout);
        if (submenu) {
          showTimeout = setTimeout(function() {
            submenu.style.display = 'block';
            submenu.style.visibility = 'visible';
          }, 100); // 100ms delay for submenus
        }
      });

      item.addEventListener('mouseleave', function(e) {
        clearTimeout(showTimeout);
        // Check if we're moving to the submenu
        if (submenu && !submenu.contains(e.relatedTarget)) {
          hideTimeout = setTimeout(function() {
            submenu.style.display = 'none';
            submenu.style.visibility = 'hidden';
          }, 300); // 300ms delay before hiding
        }
      });

      // Submenu itself - keep it open when hovering
      if (submenu) {
        submenu.addEventListener('mouseenter', function() {
          clearTimeout(hideTimeout);
          this.style.display = 'block';
          this.style.visibility = 'visible';
        });

        submenu.addEventListener('mouseleave', function() {
          hideTimeout = setTimeout(function() {
            submenu.style.display = 'none';
            submenu.style.visibility = 'hidden';
          }, 300);
        });
      }
    });
  }
});
