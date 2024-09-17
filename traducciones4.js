$(document).ready(function () {

    // LOGIN
            $("#head_pag1").text("Acesso a MyPlace");
            $("#desc1_pag1").html("Seja bem-vindo a esta área exclusiva para sócios. Este é um espaço onde poderá continuar a desfrutar da experiência Holmes Place.<br />O seu clube, a qualquer hora, em qualquer lugar.");
            $("#username").attr("placeholder", "E-mail");
            $("#password").attr("placeholder", "Password");
            $(".forget-password").text("Esqueci-me da minha password");
            $("#btnLogin_pag1").text("Aceder");
            $("#head2_pag1").text("Crie a sua conta de acesso");
            $("#desc2_pag1").text("Se já é sócio Holmes Place pode registar-se ao clicar no botão \"Criar a minha conta\".");
            $("#btnAlta_pag1").text("Criar a minha conta");
            $("#btnContactar_pag1").text("Contacte-nos");

            $("#hidRespuesta").val("Foi-lhe enviado um e-mail. Verifique por favor na sua caixa de entrada, ou spam.");

            // LOGIN VERIFICADO + QUIERE INFO
            $("#head_verificado").text("Obrigado");
            $("#desc_verificado").text("O seu registo foi efetuado com sucesso.");
            $("#btn_verificado").text("Acesso a MyPlace");

            // ERROR 0 --> No se encuentra en la base de datos
            $("#head_error0").text("Password incorreta");
            $("#desc_error0").text("Volte por favor a introduzir o seu e-mail e password para poder aceder à sua conta.");
            $("#btn_error0").text("Voltar");

            // ERROR 1
            $("#head_error1").text("E-mail inválido");
            $("#desc1_error1").html("Não recebemos a verificação do seu e-mail.<br /><br />Faça clique nolink para enviarmos novamente um email onde poderá completar a criação da sua conta.");
            $("#btnCancel_error1").text("Acesso a MyPlace");
            $("#btn_error1").text("Voltar a enviar validação");

            // ERROR 2
            $("#head_error2").text("Utilizador sem permissões");
            $("#desc_error2").text("O seu utilizador não tem permissões de acesso. Entre por favor em contacto connosco.");
            $("#btn_error2").text("Contacte-nos");

            // ERROR 3
            $("#head_error3").text("Utilizador já registado");
            $("#desc_error3").html("O seu número de sócio já se encontra registado. Faça login na página principal com o seu e-mail e password.<br /><br />Se não se recorda da sua password, pode recuperá-la.");
            $("#btn_error3").text("Aceitar");

            // ERROR 4
            $("#head_error4").text("Email existente");
            $("#desc_error4").html("Email já existe em nosso banco de dados, por favor use outro email.");
            $("#btn_error4").text("Aceitar");

            // RECUPERAR CONTRASEÑA
            $("#head_pag2").text("Recuperação da password");
            $("#desc1_pag2").text("Introduza o seu e-mail para recuperar a sua password");
            $("#emailRecoveryPass").attr("placeholder", "Introduzir e-mail");
            $("#btn1_pag2").text("Recuperar password");
            $("#desc3_pag2").text("Se já tem utilizador e password, pode aceder ao MyPlace neste link.");
            $("#btn2_pag2").text("Acesso MyPlace");

            // CAMBIA CONTRASEÑA
            $("#head_pag2_2").text("Alteração de password");
            $("#desc_pag2_2").text("A password deve ter um mínimo de 8 caracteres e um máximo de 20.");
            $("#pass_pag2_2").text("Nova password");
            $("#passR_pag2_2").text("Introduza novamente a sua password");
            $("#btnCancel_pag2_2").text("Cancelar");
            $("#btn_pag2_2").text("Continuar");

            // ALTA 1
            $(".head_pag3").text("Crie a sua conta de acesso");
            $("#desc_pag3_1").html("Seja bem-vindo a esta área exclusiva para sócios. Este é um espaço onde poderá continuar a desfrutar da experiência Holmes Place.<br />O seu clube, a qualquer hora, em qualquer lugar.");
            $("#lblClub").text("Escolha o seu clube");
            $("#numSocio").attr("placeholder", "Na frente do seu cartão de acesso");
            $("#numSocio_t").text("Número de sócio(a)");
            $("#docSocio").attr("placeholder", "Introduza o seu NIF");
            $("#docSocio_t").text("Número de Identificação Fiscal");
            $("#btnCancel_pag3_1").text("Cancelar");
            $("#btn_pag3_1").text("Continuar");

            // ALTA 2
            $("#desc_pag3_2").html("Introduza o seu e-mail.<br />Este será o seu utilizador para aceder a MyPlace");
            $("#emailIdentifier_t").text("Este foi o e-mail que encontrámos na sua ficha de sócio(a).");
            $("#emailIdentifier").attr("placeholder", "Introduzir e-maill");
            $("#passIdentifier_t").text("Password");
            $("#passIdentifierR_t").text("Volte a introduzir a sua password");
            $("#desc4_pag3_2").text("A password deve ter um mínimo de 8 caracteres e um máximo de 20.");
            $("#desc2_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Aceito as <a href='https://www.holmesplace.com/pt/pt/privacy-center' target='_blank'>condições de privacidade</a>.");
            $("#desc3_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Quero receber informação sobre produtos e serviços. <a href='https://www.holmesplace.com/pt/pt/privacy-policy' target='_blank'>Proteção de dados</a>");
            $("#btnCancel_pag3_2").text("Cancelar");
            $("#btn_pag3_2").text("Criar a minha conta");

            // ALTA 3
            $("#desc_pag3_3").html("Foi-lhe enviado um e-mail para que possa validar o seu registo. <br />Abra por favor o seu e-mail e clique no link que se encontra no mesmo.<br /><br />Se está com problemas em efetuar o seu registo, contacte-nos.");
            $("#btn_pag3_3").text("Contacte-nos");
            $("#btnVolver_pag3_3").text("Voltar");

            // CONSULTA
            $(".head_pag4").text("Contacte-nos");
            $("#desc1_pag4").html("Se tem alguma dúvida, ou sugestão, não hesite em nos contactar.");
            $("#txtNombreContact").attr("placeholder", "Introduza o seu nome");
            $("#txtEmailContact").attr("placeholder", "Introduza o seu e-mail");
            $("#lblClubContact").text("Escolha o seu clube");
            $("#lblContactar").html("Coloque aqui as suas dúvidas ou sugestões.");
            $("#tarConsulta").attr("placeholder", "Consulta");
            $("#desc2_pag4").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Aceito as <a href='https://www.holmesplace.com/pt/pt/privacy-center' target='_blank'>condições de privacidade</a>.");
            $("#hidchkObligado").val("Deve ler e aceitar as condições de privacidade");
            $("#btnCancel_pag4").text("Cancelar");
            $("#btn_pag4").text("Enviar");

            // RESPUESTA CONSULTA
            $("#desc_pag4R").html("Recebemos os seus dados.");
            $("#desc2_pag4R").html("Iremos entrar em contacto consigo o mais breve possível.");
            $("#btn_pag4R").text("Acesso a MyPlace");
            $("#hlkEnlaceHolmes").attr('href', "https://www.holmesplace.com/pt/pt/");
});
