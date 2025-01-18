const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// Toggle Navbar
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active'); // Expand or collapse nav-links
  burger.classList.toggle('toggle'); // Animate burger icon
});
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 500; // Adjust speed for animation
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});


document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorMessages = document.querySelectorAll('.error-message');

  let isValid = true;

  // Reset error messages
  errorMessages.forEach(msg => (msg.style.display = 'none'));

  // Validate Name
  if (nameInput.value.trim() === '') {
    const errorMessage = nameInput.nextElementSibling;
    errorMessage.textContent = 'Name cannot be empty';
    errorMessage.style.display = 'block';
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === '') {
    const errorMessage = emailInput.nextElementSibling;
    errorMessage.textContent = 'Email cannot be empty';
    errorMessage.style.display = 'block';
    isValid = false;
  }

  // Validate Message
  if (messageInput.value.trim() === '') {
    const errorMessage = messageInput.nextElementSibling;
    errorMessage.textContent = 'Message cannot be empty';
    errorMessage.style.display = 'block';
    isValid = false;
  }

  // If valid, show toast notification
  if (isValid) {
    console.log('Form is valid, showing toast...');
    const toast = document.getElementById('toast');
    toast.classList.add('show');

    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      console.log('Toast hidden.');
    }, 3000);

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  } else {
    console.log('Form validation failed.');
  }
});
// document.querySelectorAll('.submenu-item').forEach(item => {
//   item.addEventListener('click', (e) => {
//       const selectedFilter = e.target.textContent.toLowerCase().replace(/\s+/g, '-'); // e.g., '1bhk', 'residential-plot'

//       filterProperties(selectedFilter);
//   });
// });

// document.querySelectorAll('.submenu-item').forEach(item => {
//   item.addEventListener('click', (e) => {
//       const selectedFilter = e.target.textContent.toLowerCase().replace(/\s+/g, '-'); // e.g., '1bhk', 'residential-plot'

//       filterProperties(selectedFilter);
//   });
// });

// // Function to filter property cards based on selection
// function filterProperties(filter) {
//   const allProperties = document.querySelectorAll('.property-card');
//   allProperties.forEach(card => {
//       if (card.classList.contains(filter) || filter === "all") {
//           card.style.display = 'block';  // Show matching property
//       } else {
//           card.style.display = 'none';  // Hide non-matching property
//       }
//   });
// }
// document.querySelectorAll('.submenu-item').forEach(item => {
//   item.addEventListener('click', (e) => {
//       const selectedFilter = e.target.textContent.toLowerCase().replace(/\s+/g, '-'); // e.g., '1bhk', 'residential-plot'
      
//       // Special cases
//       if (selectedFilter === 'house') {
//           filterProperties('1bhk', '2bhk', '3bhk'); // Show all house properties
//       } else if (selectedFilter === 'plot') {
//           filterProperties('residential-plot', 'commercial-plot'); // Show all plot properties
//       } else if (selectedFilter === 'lands') {
//           filterProperties('lands'); // Show all land properties
//       } else {
//           filterProperties(selectedFilter); // Filter specific property type
//       }
//   });
// });

// // Function to filter properties based on multiple filters or a single filter
// function filterProperties(...filters) {
//   const allProperties = document.querySelectorAll('.property-card');
//   allProperties.forEach(card => {
//       // Show cards that match any of the given filters or the 'all' category
//       if (filters.includes(card.classList[1]) || filters.includes("all")) {
//           card.style.display = 'block';  // Show matching property
//       } else {
//           card.style.display = 'none';  // Hide non-matching property
//       }
//   });
// }
