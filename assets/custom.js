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

    // Submenu handling - improved with shared timeout references
    const submenuItems = document.querySelectorAll('.dropdown-submenu');

    submenuItems.forEach(function(item) {
      const submenu = item.querySelector('.dropdown-menu');
      if (!submenu) return;

      // Create a shared timeout object for this item and its submenu
      const timeouts = {
        show: null,
        hide: null
      };

      // Function to show submenu
      function showSubmenu() {
        clearTimeout(timeouts.hide);
        clearTimeout(timeouts.show);
        submenu.style.display = 'block';
        submenu.style.visibility = 'visible';
      }

      // Function to hide submenu
      function hideSubmenu() {
        clearTimeout(timeouts.show);
        clearTimeout(timeouts.hide);
        timeouts.hide = setTimeout(function() {
          submenu.style.display = 'none';
          submenu.style.visibility = 'hidden';
        }, 400); // 400ms delay before hiding
      }

      // Parent item hover - show immediately
      item.addEventListener('mouseenter', function() {
        showSubmenu();
      });

      // Parent item leave
      item.addEventListener('mouseleave', function(e) {
        // Only hide if not moving to the submenu
        if (!submenu.contains(e.relatedTarget)) {
          hideSubmenu();
        }
      });

      // Submenu itself - keep it open when hovering
      submenu.addEventListener('mouseenter', function() {
        showSubmenu();
      });

      submenu.addEventListener('mouseleave', function() {
        hideSubmenu();
      });
    });
  }
});
