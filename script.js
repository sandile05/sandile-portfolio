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

//  MixItUp for filtering projects
var mixer = mixitup('.projects__container', {
    selectors: {
        target: '.project'
    },
    animation: {
        duration: 300
    }
});

// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Smooth scroll back to top when button is clicked
  document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


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


