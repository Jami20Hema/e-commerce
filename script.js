document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
   }); 
   window.addEventListener('scroll', () => {
       const header = document.querySelector('header');
       if (window.scrollY > 50) {
           header.style.background = 'mistyrose';
       } else {
           header.style.background = 'mistyrose';
       }
   });
   
   // Get the button
   const scrollToTopBtn = document.getElementById('scrollToTopBtn');
   
   // Show button when scrolling down
   window.addEventListener('scroll', () => {
       if (window.scrollY > 300) {
           scrollToTopBtn.classList.add('show');
       } else {
           scrollToTopBtn.classList.remove('show');
       } 
   });
   
   // Scroll to top when button is clicked
   scrollToTopBtn.addEventListener('click', (event) => {
       event.preventDefault();
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   });
   
   //for login page
   var Loginform = document.getElementById("Loginform");
   var regform = document.getElementById("regform");
   var indicator = document.getElementById("indicator");

   function register() {
       regform.style.transform = "translateX(0px)";
       Loginform.style.transform = "translateX(-300px)";
       indicator.style.transform = "translateX(100px)";
   }

   function login() {
       regform.style.transform = "translateX(300px)";
       Loginform.style.transform = "translateX(0px)";
       indicator.style.transform = "translateX(0px)";
   }

   
   