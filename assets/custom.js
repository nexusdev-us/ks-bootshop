/*
  Add here your own custom javascript codes
*/

// Multi-level dropdown support for navigation
document.addEventListener('DOMContentLoaded', function() {
  // Handle submenu dropdowns on desktop
  if (window.innerWidth > 991) {
    const submenuItems = document.querySelectorAll('.dropdown-submenu');

    submenuItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        const submenu = this.querySelector('.dropdown-menu');
        if (submenu) {
          submenu.style.display = 'block';
        }
      });

      item.addEventListener('mouseleave', function() {
        const submenu = this.querySelector('.dropdown-menu');
        if (submenu) {
          submenu.style.display = 'none';
        }
      });
    });
  }
});
