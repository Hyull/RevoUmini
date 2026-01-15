// Greeting name
const namePrompt = prompt("Please enter your name:");
if (namePrompt) {
  document.getElementById("userName").innerText = namePrompt;
}

// Form Validation & Show Result
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("All fields are required!");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>Submitted Data</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
