const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const formData = new FormData(form);
  const action = form.action;

  fetch(action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if(response.ok){
      alert('Message sent successfully! ✅');
      form.reset();
    } else {
      alert('Oops! Something went wrong. ❌');
    }
  })
  .catch(() => {
    alert('Oops! Could not send message. ❌');
  });
});
