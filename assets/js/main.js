// Mobile menu
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Hero crossfade slider (2 images)
const slider = document.querySelector('[data-slider]');
if (slider) {
  const imgs = Array.from(slider.querySelectorAll('img'));
  let idx = 0;
  imgs.forEach((img, i) => img.classList.toggle('is-on', i === 0));
  setInterval(() => {
    imgs[idx].classList.remove('is-on');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('is-on');
  }, 5500);
}

// Inquiry form placeholder behavior:
// Opens a mailto draft if no backend is connected.
const form = document.getElementById('inquiryForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = encodeURIComponent(fd.get('name') || '');
    const email = encodeURIComponent(fd.get('email') || '');
    const phone = encodeURIComponent(fd.get('phone') || '');
    const message = encodeURIComponent(fd.get('message') || '');
    const subject = encodeURIComponent('5 Walnut | Private Preview Request');
    const body =
      `Name: ${decodeURIComponent(name)}\n` +
      `Email: ${decodeURIComponent(email)}\n` +
      `Phone: ${decodeURIComponent(phone)}\n\n` +
      `${decodeURIComponent(message)}\n\n` +
      `— Sent from 5 Walnut website`;

    // Replace YOUR_EMAIL_HERE with your preferred inbox
    window.location.href = `mailto:YOUR_EMAIL_HERE?subject=${subject}&body=${encodeURIComponent(body)}`;
  });
}