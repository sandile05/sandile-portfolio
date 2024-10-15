const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

// Function to open the navigation menu
const openNavHandler = () => {
  navMenu.style.display = 'flex';
  navOpenBtn.style.display = 'none';
  navCloseBtn.style.display = 'inline-block';
};

// Function to close the navigation menu
const closeNavHandler = () => {
  navMenu.style.display = 'none';
  navOpenBtn.style.display = 'inline-block';
  navCloseBtn.style.display = 'none';
};

// Event listeners for the open/close buttons
navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);

// close nav menu on click for mobile only
const navItems = navMenu.querySelectorAll('a');

// Function to handle screen resizing
const handleResize = () => {
  if (window.innerWidth > 768) {
    // Reset navbar for larger screens (Desktop)
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'none';

    // Remove event listeners for mobile behavior
    navItems.forEach(item => {
      item.removeEventListener('click', closeNavHandler);
    });

  } else {
    // Reset navbar for smaller screens (Mobile)
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';

    // Add event listeners for mobile behavior (close on click)
    navItems.forEach(item => {
      item.addEventListener('click', closeNavHandler);
    });
  }
};

// Event listener for screen resizing
window.addEventListener('resize', handleResize);

// Initial check to set the correct state on load
handleResize();

// Close the nav menu when clicking outside of it (only for mobile)
document.addEventListener('click', (event) => {
  if (window.innerWidth < 768) {
    const isClickInsideNavMenu = navMenu.contains(event.target);
    const isClickInsideNavButton = navOpenBtn.contains(event.target) || navCloseBtn.contains(event.target);

    // Closes the nav menu if the click is outside of the nav menu and buttons
    if (!isClickInsideNavMenu && !isClickInsideNavButton) {
      closeNavHandler();
    }
  }
});
