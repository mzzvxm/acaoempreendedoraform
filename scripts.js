// Seleção dos elementos do formulário
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const serie = document.getElementById("serie");

// Verifica se o formulário e os elementos necessários estão presentes na página
if (form && username && email && serie) {
  // Adiciona o evento de submissão ao formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    // Remove espaços em branco e obtém os valores dos campos
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const serieValue = serie.value.trim();

    // Validação do campo "username"
    if (usernameValue === "") {
      setErrorFor(username, "O nome de usuário é obrigatório.");
    } else {
      setSuccessFor(username);
    }

    // Validação do campo "email"
    if (emailValue === "") {
      setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");
    } else {
      setSuccessFor(email);
    }

    // Validação do campo "serie"
    if (serieValue === "") {
      setErrorFor(serie, "A série é obrigatória.");
    } else {
      setSuccessFor(serie);
    }

    // Verifica se todos os campos estão válidos
    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });

    // Envia o formulário se todos os campos estiverem válidos
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
      enviarEmailJS();  // Função de envio com EmailJS
    }
  }

  // Define erro para o campo
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
  }

  // Define sucesso para o campo
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  // Validação de e-mail com regex
  function checkEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

} else {
  console.error("Erro: Elementos do formulário não encontrados.");
}
