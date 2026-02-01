(function () {
  emailjs.init("cv0m_rqGVpYQ17Nty");
})();

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.send("service_17brfja", "template_6kbn8z4", {
    name: document.getElementById("name").value,
    user_email: document.getElementById("email").value
  })
  .then(function () {
    alert("Successfully registered! Message sent.");
  }, function (error) {
    alert("Error: " + error.text);
  });
});
