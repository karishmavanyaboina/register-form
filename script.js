function submitForm(event) {
  event.preventDefault();

  // Fetch values from the form
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Display the submitted values (you can modify this part)
  alert(`Registration successful!\n\nFull Name: ${fullName}\nEmail: ${email}\nPassword: ${password}`);
}
