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

  // Enhanced dropdown experience for product cards on desktop
  if (window.innerWidth >= 992) {
    const productDropdowns = document.querySelectorAll('.product-card select.form-select, .product-card .form-select');

    productDropdowns.forEach(dropdown => {
      // Add smooth fade-in effect when dropdown appears
      if (dropdown) {
        dropdown.style.opacity = '0';
        dropdown.style.animation = 'none';

        // Use IntersectionObserver for smooth appearance
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.3s ease-out';
              }, 100);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });

        observer.observe(dropdown);

        // Add smooth focus/blur effects
        dropdown.addEventListener('focus', function() {
          this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        dropdown.addEventListener('blur', function() {
          this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        // Add subtle pulse effect on hover
        dropdown.addEventListener('mouseenter', function() {
          this.style.animation = 'none';
          void this.offsetWidth; // Trigger reflow
          this.style.animation = 'subtlePulse 0.5s ease-out';
        });
      }
    });
  }
});
