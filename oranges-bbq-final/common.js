const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const orderDropdown = document.getElementById('orderDropdown');
const orderDropdownBtn = document.querySelector('.dropdown-btn');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
      if (orderDropdown) orderDropdown.classList.remove('active');
    });
  });
}

if (orderDropdown && orderDropdownBtn) {
  orderDropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    orderDropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!orderDropdown.contains(e.target)) {
      orderDropdown.classList.remove('active');
    }
  });
}
