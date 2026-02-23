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

<script>
  (function () {
    const form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const action = form.getAttribute('action');
      const formData = new FormData(form);

      try {
        const res = await fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          window.location.href = '/thank-you.html';
        } else {
          alert('Something went wrong. Please try again or email us directly.');
        }
      } catch (err) {
        alert('Network error. Please try again.');
      }
    });
  })();
</script>