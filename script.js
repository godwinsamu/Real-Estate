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

