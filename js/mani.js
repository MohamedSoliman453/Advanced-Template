let server = document.querySelectorAll(".server");
server.forEach((s) => {
  s.addEventListener('click', () => {
    server.forEach((s) => {
      s.classList.remove('active');
    })
    s.classList.add('active');
  })
});

