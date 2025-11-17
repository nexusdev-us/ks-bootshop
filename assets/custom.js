/*
  Add here your own custom javascript codes
*/

// Multi-level dropdown support for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Handle submenu dropdowns on desktop
  if (window.innerWidth > 991) {
    const submenuItems = document.querySelectorAll('.dropdown-submenu');

    submenuItems.forEach(function(item) {
      let timeout;

      item.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        const submenu = this.querySelector('.dropdown-menu');
        if (submenu) {
          submenu.style.display = 'block';
          submenu.style.visibility = 'visible';
        }
      });

      item.addEventListener('mouseleave', function() {
        const submenu = this.querySelector('.dropdown-menu');
        if (submenu) {
          // Small delay before hiding to allow smooth transition
          timeout = setTimeout(function() {
            submenu.style.display = 'none';
            submenu.style.visibility = 'hidden';
          }, 100);
        }
      });
    });

    // Enable main dropdown hover on desktop
    const mainDropdowns = document.querySelectorAll('.navbar .nav-item.dropdown');

    mainDropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('mouseenter', function() {
        const menu = this.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.add('show');
        }
      });

      dropdown.addEventListener('mouseleave', function() {
        const menu = this.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      });
    });
  }
});
