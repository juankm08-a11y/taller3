const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("input[name='email']").value;
  const password = document.querySelector("input[name='password']").value;

  if (password.length < 8) {
    alert("La contraseña debe tener mínimo 8 caracteres");
    return;
  }
  alert("Formulario enviado correctamente");
});
