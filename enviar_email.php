<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $para = "vinicius.bonifacio@escola.pr.gov.br";
    $assunto = "Nova mensagem do formulário de contato";
    $conteudo = "Nome: $nome\nEmail: $email\nMensagem: $mensagem";

    $headers = "From: $email";

    if (mail($para, $assunto, $conteudo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar mensagem.";
    }
}
?>
