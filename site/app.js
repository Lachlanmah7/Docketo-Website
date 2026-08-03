
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll('[data-progress]').forEach(el => {
    const progressObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.progress;
        }
      });
    }, { threshold: 0.5 });
    progressObserver.observe(el);
  });

  const sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    window.addEventListener('scroll', () => {
      sticky.classList.toggle('show', window.scrollY > 650);
    });
  }

  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
      const group = button.closest('[data-tabs]');
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      button.classList.add('active');
      group.querySelector(`#${button.dataset.target}`).classList.add('active');
    });
  });
});
