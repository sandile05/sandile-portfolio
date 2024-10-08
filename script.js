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

// close nav menu on click
const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768){
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    })
};

// Function to handle screen resizing
const handleResize = () => {
  if (window.innerWidth > 768) {
    // Reset navbar for larger screens
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'none';
  } else {
    // Reset navbar for smaller screens
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
  }
};

// Event listener for screen resizing
window.addEventListener('resize', handleResize);

// Initial check to set the correct state on load
handleResize();


