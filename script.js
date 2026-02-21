// Log a welcome message in the browser console
console.log("Welcome, Raj! JavaScript is running.");

// Change the intro paragraph text dynamically
const heroSubtitle = document.querySelector('.hero p');
if (heroSubtitle) {
  heroSubtitle.textContent = "BCA Student | Web Developer | Always Learning";
}

// Add a button to toggle dark/light background (for some interactivity)
const introDiv = document.querySelector('.intro');

// Create the button element
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Toggle Light/Dark Mode";
toggleBtn.style.padding = "10px 20px";
toggleBtn.style.marginTop = "20px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.background = "#22c55e";
toggleBtn.style.color = "#020617";
toggleBtn.style.fontWeight = "600";

// Append the button to the intro section
if (introDiv) {
  introDiv.appendChild(toggleBtn);
}

// Toggle background colors on click
toggleBtn.addEventListener('click', () => {
  if (document.body.style.backgroundColor === 'white') {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    introDiv.style.background = 'rgba(255, 255, 255, 0.05)';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    introDiv.style.background = 'rgba(0, 0, 0, 0.1)';
  }
});
