$(document).ready(function () {

    switch ($("#hidLang").val()) {
        case "es":
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

            $("#hidRespuesta").val("Te hemos enviado un email. Revisa, por si acaso, tu correo SPAM.");

            // LOGIN VERIFICADO + QUIERE INFO
            $("#head_verificado").text("Gracias");
            $("#desc_verificado").text("Hemos registrado tu confirmación correctamente.");
            $("#btn_verificado").text("Acceso Área Privada");

            // ERROR 0 --> No se encuentra en la base de datos
            $("#head_error0").text("Contraseña incorrecta");
            $("#desc_error0").text("Vuelve a introducir tu email y contraseña para poder acceder a tu cuenta.");
            $("#btn_error0").text("Volver");

            // ERROR 1
            $("#head_error1").text("Email no validado");
            $("#desc1_error1").html("No hemos recibido la verificación de tu correo electrónico.<br /><br />Haz clic en el siguiente enlace y te enviaremos de nuevo un email donde podrás completar el proceso de creación de cuenta.");
            $("#btnCancel_error1").text("Acceso Área Privada");
            $("#btn_error1").text("Volver a enviar la validación");

            // ERROR 2
            $("#head_error2").text("Usuario sin permisos");
            $("#desc_error2").text("Parece ser que tu usuario no tiene los permisos suficientes para poder acceder. Por favor, ponte en contacto con nosotros para solucionarlo.");
            $("#btn_error2").text("Contacta con nosotros");

            // ERROR 3
            $("#head_error3").text("Usuario ya registrado");
            $("#desc_error3").html("Tu número de socio ya está dado de alta en la plataforma. Puedes entrar a través de la página de login con tu correo electrónico y tu contraseña.<br /><br />Si no recuerdas tu contraseña puedes recuperarla.");
            $("#btn_error3").text("Aceptar");

            // ERROR 4
            $("#head_error4").text("Correo existente");
            $("#desc_error4").html("El correo electrónico ya existe en nuestra base de datos, utiliza otro correo electrónico.");
            $("#btn_error4").text("Aceptar");

            // RECUPERAR CONTRASEÑA
            $("#head_pag2").text("Recuperación de contraseña");
            $("#desc1_pag2").text("Introduce tu email para poder recuperar la contraseña");
            $("#emailRecoveryPass").attr("placeholder", "Introducir email");
            $("#btn1_pag2").text("Recuperar contraseña");
            $("#desc3_pag2").text("Si ya tienes un usuario y contraseña, puedes acceder al Área Privada de socios desde el siguiente enlace.");
            $("#btn2_pag2").text("Acceso Área Privada");

            // CAMBIA CONTRASEÑA
            $("#head_pag2_2").text("Cambio de contraseña");
            $("#desc_pag2_2").text("La contraseña debe tener 8 carácteres como mínimo y 20 como máximo");
            $("#pass_pag2_2").text("Nueva contraseña");
            $("#passR_pag2_2").text("Vuelve a introducir tu contraseña");
            $("#btnCancel_pag2_2").text("Cancelar");
            $("#btn_pag2_2").text("Continuar");

            // ALTA 1
            $(".head_pag3").text("Crea tu cuenta de acceso");
            $("#desc_pag3_1").html("Bienvenido al Área Privada de socios Holmes Place, un espacio desde donde podrás seguir disfrutando de tu experiencia con nosotros.<br />Tu Club, dónde y cuándo quieras.");
            $("#lblClub").text("Escoge tu Club");
            $("#numSocio").attr("placeholder", "En el dorso de tu tarjeta de acceso");
            $("#numSocio_t").text("Número de socio/a");
            $("#docSocio").attr("placeholder", "Introducir DNI");
            $("#docSocio_t").text("Número de tu documento de identidad");
            $("#btnCancel_pag3_1").text("Cancelar");
            $("#btn_pag3_1").text("Continuar");

            // ALTA 2
            $("#desc_pag3_2").html("Introduce tu email.<br />Este será tu usuario de acceso al Área Privada de socios");
            $("#emailIdentifier_t").text("Este es el email que hemos encontrado en tu ficha de socio.");
            $("#emailIdentifier").attr("placeholder", "Introducir email");
            $("#passIdentifier_t").text("Contraseña");
            $("#passIdentifierR_t").text("Vuelve a introducir tu contraseña");
            $("#desc4_pag3_2").text("La contraseña debe tener 8 carácteres como mínimo y 20 como máximo");
            $("#desc2_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Acepto las <a href='https://www.holmesplace.com/es/es/privacy-center' target='_blank'>condiciones de privacidad</a>.");
            $("#desc3_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Quiero recibir información sobre productos y servicios. <a href='https://www.holmesplace.com/es/es/privacy-policy' target='_blank'>Protección de datos</a>");
            $("#btnCancel_pag3_2").text("Cancelar");
            $("#btn_pag3_2").text("Crear mi cuenta");   

            // ALTA 3
            $("#desc_pag3_3").html("Te hemos enviado un correo electrónico para que puedas validar tu alta.<br />Abre el correo y pulsa en enlace que encontrarás en él.<br /><br />Si tienes problemas para completar tu alta, ponte en contacto con nosotros y te ayudaremos.");
            $("#btn_pag3_3").text("Contacta con nosotros");
            $("#btnVolver_pag3_3").text("Volver");

            // CONSULTA
            $(".head_pag4").text("Contacta con nosotros");
            $("#desc1_pag4").html("Si tienes cualquier consulta o sugerencia, no dudes en contactar con nosotros.");
            $("#txtNombreContact").attr("placeholder", "Introduce tu nombre");
            $("#txtEmailContact").attr("placeholder", "Introduce tu email");
            $("#lblClubContact").text("Escoge tu Club");
            $("#lblContactar").html("Déjanos aquí tu duda o sugerencia.");
            $("#tarConsulta").attr("placeholder", "Consulta");
            $("#desc2_pag4").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Acepto las <a href='https://www.holmesplace.com/es/es/privacy-center' target='_blank'>condiciones de privacidad</a>.");
            $("#hidchkObligado").val("Debes leer y aceptar las condiciones de privacidad");
            $("#btnCancel_pag4").text("Cancelar");
            $("#btn_pag4").text("Enviar");

            // RESPUESTA CONSULTA
            $("#desc_pag4R").html("Hemos recibido tus datos.");
            $("#desc2_pag4R").html("En breve nos pondremos en contacto contigo para darte una respuesta.");
            $("#btn_pag4R").text("Acceso Área Privada");
            $("#hlkEnlaceHolmes").attr('href', "https://www.holmesplace.com/es/es/");
            break;
        case "pt":
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
            break;
        case "en":
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

            $("#hidRespuesta").val("An email has been sent to you. Please check your inbox, or spam.");

            // LOGIN VERIFICADO + QUIERE INFO
            $("#head_verificado").text("Thanks");
            $("#desc_verificado").text("Your registration was successful.");
            $("#btn_verificado").text("Access to MyPlace");

            // ERROR 0 --> No se encuentra en la base de datos
            $("#head_error0").text("Incorrect password");
            $("#desc_error0").text("Please re-enter your email and password in order to access your account.");
            $("#btn_error0").text("Back");

            // ERROR 1
            $("#head_error1").text("Invalid email");
            $("#desc1_error1").html("We have not received verification of your email.<br /><br />Click on the following link to send us an email again where you can complete the creation of your account.");
            $("#btnCancel_error1").text("Access to MyPlace");
            $("#btn_error1").text("Resubmit validation");

            // ERROR 2
            $("#head_error2").text("User without permissions");
            $("#desc_error2").text("Your user doesn't have access permissions. Please contact us.");
            $("#btn_error2").text("Contact us");

            // ERROR 3
            $("#head_error3").text("Registered user");
            $("#desc_error3").html("Your membership number is already registered. Log in to the main page with your email and password.<br /><br />If you don't remember your password, you can recover it.");
            $("#btn_error3").text("Accept");

            // ERROR 4
            $("#head_error4").text("Email exists");
            $("#desc_error4").html("Email already exists in our database, please use another email.");
            $("#btn_error4").text("Accept");

            // RECUPERAR CONTRASEÑA
            $("#head_pag2").text("Password recovery");
            $("#desc1_pag2").text("Enter your email to recover your password");
            $("#emailRecoveryPass").attr("placeholder", "Enter your email");
            $("#btn1_pag2").text("Recover password");
            $("#desc3_pag2").text("If you already have a username and password, you can access MyPlace at this link.");
            $("#btn2_pag2").text("Acess to MyPlace");

            // CAMBIA CONTRASEÑA
            $("#head_pag2_2").text("Password change");
            $("#desc_pag2_2").text("The password must have a minimum of 8 characters and a maximum of 20.");
            $("#pass_pag2_2").text("New password");
            $("#passR_pag2_2").text("Re-enter your password");
            $("#btnCancel_pag2_2").text("Cancel");
            $("#btn_pag2_2").text("Continue");

            // ALTA 1
            $(".head_pag3").text("Create your access account");
            $("#desc_pag3_1").html("Welcome to this exclusive member area. This is a space where you can continue to enjoy the Holmes Place experience.<br />Your club, anytime, anywhere.");
            $("#lblClub").text("Select your club");
            $("#numSocio").attr("placeholder", "On the front of your access card");
            $("#numSocio_t").text("Member number");
            $("#docSocio").attr("placeholder", "Introduce your fiscal number");
            $("#docSocio_t").text("Fiscal Number");
            $("#btnCancel_pag3_1").text("Cancel");
            $("#btn_pag3_1").text("Continue");

            // ALTA 2
            $("#desc_pag3_2").html("Enter your e-mail.<br />This will be your user to access MyPlace");
            $("#emailIdentifier_t").text("This was the email we found on your membership form.");
            $("#emailIdentifier").attr("placeholder", "Enter your e-mail");
            $("#passIdentifier_t").text("Password");
            $("#passIdentifierR_t").text("Re-enter your password");
            $("#desc4_pag3_2").text("The password must have a minimum of 8 characters and a maximum of 20.");
            $("#desc2_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>I accept the <a href='https://www.holmesplace.com/pt/en/privacy-center' target='_blank'>privacy conditions</a>.");
            $("#desc3_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>I want to receive information about products and services. <a href='https://www.holmesplace.com/pt/en/privacy-policy' target='_blank'>Data protection</a>");
            $("#btnCancel_pag3_2").text("Cancel");
            $("#btn_pag3_2").text("Create my account");

            // ALTA 3
            $("#desc_pag3_3").html("An email has been sent to you to validate your registration.<br />Please open your e-mail and click on the link in it.<br /><br />If you are having trouble registering, contact us.");
            $("#btn_pag3_3").text("Contact us");
            $("#btnVolver_pag3_3").text("Back");

            // CONSULTA
            $(".head_pag4").text("Contact us");
            $("#desc1_pag4").html("If you have any questions or suggestions, do not hesitate to contact us.");
            $("#txtNombreContact").attr("placeholder", "Enter your name");
            $("#txtEmailContact").attr("placeholder", "Enter your email");
            $("#lblClubContact").text("Select your club");
            $("#lblContactar").html("Put your doubts or suggestions here.");
            $("#tarConsulta").attr("placeholder", "Consult");
            $("#desc2_pag4").html("<span class='inc'></span><span class='check'></span><span class='box'></span>I accept the <a href='https://www.holmesplace.com/pt/en/privacy-center' target='_blank'>privacy conditions</a>.");
            $("#hidchkObligado").val("You must read and accept the privacy conditions");
            $("#btnCancel_pag4").text("Cancel");
            $("#btn_pag4").text("Send");

            // RESPUESTA CONSULTA
            $("#desc_pag4R").html("We received your data.");
            $("#desc2_pag4R").html("We will get in touch with you as soon as possible.");
            $("#btn_pag4R").text("Access to MyPlace");
            $("#hlkEnlaceHolmes").attr('href', "https://www.holmesplace.com/pt/en/");
            break;
        case "ca":
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

            $("#hidRespuesta").val("T'hem enviat un correu electrònic. Revisa, per si de cas, el teu correu SPAM.");

            // LOGIN VERIFICADO + QUIERE INFO
            $("#head_verificado").text("Gràcies");
            $("#desc_verificado").text("Hem registrat la teva confirmació correctament.");
            $("#btn_verificado").text("Accés Àrea Privada");

            // ERROR 0 --> No se encuentra en la base de datos
            $("#head_error0").text("Contrasenya incorrecta");
            $("#desc_error0").text("Torna a introduir el teu usuari i contrasenya per poder accedir al teu compte.");
            $("#btn_error0").text("Tornar");

            // ERROR 1
            $("#head_error1").text("Email no validat");
            $("#desc1_error1").html("No hem rebut la verificació del teu email.<br /><br />Fes clic al següent enllaç i et tornarem a enviar un correu electrònic on podràs completar el procés de creació del teu compte.");
            $("#btnCancel_error1").text("Accés Àrea Privada");
            $("#btn_error1").text("Tornar a enviar la validació");

            // ERROR 2
            $("#head_error2").text("Usuari sense permisos");
            $("#desc_error2").text("Sembla ser que el teu usuari no gaudeix dels permisos suficients per poder accedir. Si us plau, posa't en contacte amb nosaltres per tal de solucionar-ho.");
            $("#btn_error2").text("Contacta amb nosaltres");

            // ERROR 3
            $("#head_error3").text("Usuari ja registrat");
            $("#desc_error3").html("El teu número de soci ja està donat d'alta a la plataforma. Pots entrar a través de la pàgina de login amb el teu correu electrònic i la contrasenya.<br /><br />Si no recordes la contrasenya pots recuperar-la.");
            $("#btn_error3").text("Acceptar");

            // ERROR 4
            $("#head_error4").text("Correu existent");
            $("#desc_error4").html("El correu electrònic ja existeix a la nostra base de dades, utilitza un altre correu electrònic.");
            $("#btn_error4").text("Acceptar");

            // RECUPERAR CONTRASEÑA
            $("#head_pag2").text("Recuperació de contrasenya");
            $("#desc1_pag2").text("Introdueix el teu email per poder recuperar la contrasenya");
            $("#emailRecoveryPass").attr("placeholder", "Introduir email");
            $("#btn1_pag2").text("Recuperar contrasenya");
            $("#desc3_pag2").text("Si ja disposes d'un usuari i contrasenya, pots accedir a l'Àrea de socis des del següent enllaç.");
            $("#btn2_pag2").text("Accés Àrea Privada");

            // CAMBIA CONTRASEÑA
            $("#head_pag2_2").text("Canvi de contrasenya");
            $("#desc_pag2_2").text("La contrasenya ha de tenir 8 caràcters com a mínim i 20 com a màxim");
            $("#pass_pag2_2").text("Nova contrasenya");
            $("#passR_pag2_2").text("Torna a introduir la teva contrasenya");
            $("#btnCancel_pag2_2").text("Cancel·lar");
            $("#btn_pag2_2").text("Continuar");

            // ALTA 1
            $(".head_pag3").text("Crea el teu compte d'accés per a l'Àrea de socis");
            $("#desc_pag3_1").html("Benvingut a l'Àrea Privada de socis de Holmes Place, un espai des d'on podràs seguir gaudint de l'experiència amb nosaltres.<br />El teu Club, on i quan vulguis.");
            $("#lblClub").text("Tria el teu Club");
            $("#numSocio").attr("placeholder", "Al dors de la teva targeta d'accés");
            $("#numSocio_t").text("Número de soci/sòcia");
            $("#docSocio").attr("placeholder", "Introdueix les dades del teu document d'identitat");
            $("#docSocio_t").text("DNI");
            $("#btnCancel_pag3_1").text("Cancel·lar");
            $("#btn_pag3_1").text("Continuar");

            // ALTA 2
            $("#desc_pag3_2").html("Introdueix el teu email.<br />Aquest serà el teu usuari per a l'Àrea Privada de socis");
            $("#emailIdentifier_t").text("Aquest és l'email que hem trobat a la teva fitxa de soci/sòcia.");
            $("#emailIdentifier").attr("placeholder", "Introdueix el teu email");
            $("#passIdentifier_t").text("Contrasenya");
            $("#passIdentifierR_t").text("Torna a introduir la teva contrasenya");
            $("#desc4_pag3_2").text("La teva contrasenya ha de tenir 8 caràcters com a mínim i 20 com a màxim");
            $("#desc2_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Accepto les <a href='https://www.holmesplace.com/es/ca/privacy-center' target='_blank'>condicions de privacitat</a>.");
            $("#desc3_pag3_2").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Vull rebre informació sobre productes i serveis. <a href='https://www.holmesplace.com/es/ca/privacy-policy' target='_blank'>Protecció de dades</a>");
            $("#btnCancel_pag3_2").text("Cancel·lar");
            $("#btn_pag3_2").text("Crear el meu compte");

            // ALTA 3
            $("#desc_pag3_3").html("T'hem enviat un correu eletrònic perquè puguis validar el teu compte.<br/>Obre el correu i segueix l'enllaç que hi trobaràs.<br/><br/>Si tens problemes per completar l'alta d'usuari, posa't en contacte amb nosaltres i t'ajudarem.");
            $("#btn_pag3_3").text("Contacta amb nosaltres");
            $("#btnVolver_pag3_3").text("Tornar");

            // CONSULTA
            $(".head_pag4").text("Contacta amb nosaltres");
            $("#desc1_pag4").html("Si tens qualsevol consulta o suggeriment, no dubtis en contactar amb nosaltres.");
            $("#txtNombreContact").attr("placeholder", "Introdueix el teu nom");
            $("#txtEmailContact").attr("placeholder", "Introdueix el teu email");
            $("#lblClubContact").text("Escull el teu Club");
            $("#lblContactar").html("Deixa'ns aquí el teu dubte o suggeriment.");
            $("#tarConsulta").attr("placeholder", "Consulta");
            $("#desc2_pag4").html("<span class='inc'></span><span class='check'></span><span class='box'></span>Accepto les <a href='https://www.holmesplace.com/es/ca/privacy-center' target='_blank'>condicions de privacitat</a>.");
            $("#hidchkObligado").val("Has de llegir i acceptar les condicions de privacitat");
            $("#btnCancel_pag4").text("Cancel·lar");
            $("#btn_pag4").text("Enviar");

            // RESPUESTA CONSULTA
            $("#desc_pag4R").html("Hem rebut les teves dades.");
            $("#desc2_pag4R").html("En breu ens posarem en contacte amb tu per donar-te una resposta.");
            $("#btn_pag4R").text("Accés Àrea Privada");
            $("#hlkEnlaceHolmes").attr('href', "https://www.holmesplace.com/es/ca/");
            break;
    }
});
