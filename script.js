// Smooth scroll for internal links (if you add #section IDs)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-to-top button (optional)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = "↑ Top";
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background: #0077b5;
  color: white;
  cursor: pointer;
  z-index: 999;
`;
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Console greeting
console.log('%cWelcome to Puja Kumari\'s Portfolio!', 'color: #0077b5; font-size: 18px; font-weight: bold;');
