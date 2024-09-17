var Login = function() {

    var handleLogin = function () {

        var patternEmail = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
        var patternPass = new RegExp("[a-zA-Z0-9._%+-¿?¡!*]{8,20}$");

        $("#login-form input").keypress(function (e) {
            if (e.which === 13) {
                $("#btnLogin_pag1").click();
                return false;
            }
        });

        $("#btnLogin_pag1").click(function () {

            var user = $("#username").val();
            var pass = $("#password").val();
            var country = $("#hidCountry").val();

            if (user !== "" && patternEmail.test(user) && pass !== "") {
            // else? hauriem de posar algun text d'alerta, però no el tinc
                var oldBtnText = CargaBtnLoading("#btnLogin_pag1");

                ajaxCall("login.aspx/Login", JSON.stringify({ user: user, pass: pass, country: country }),
                    function (data) {
                        var res = data.d;
                        if (res.length === 1) {
                            $("#btnLogin_pag1").html(oldBtnText).prop("disabled", false);
                            $("#password").val("");

                            $("#login-form").hide();
                            switch (res) {
                                case "0": $("#login-error0").show();
                                    break;
                                case "1": $("#login-error1").show();
                                    break;
                                case "2": $("#login-error2").show();
                                    break;
                            }
                        } else {
                            var param = res.split("_");
                            window.location.assign("selector.aspx?club-id=" + param[1] + "&member-email=" + user + "&virtuagym-member-id=&external-id=" + param[2] +"&sig=");
                        }
                    });
            }
        });

        $("#btn_verificado").click(function () {
            $("#login-verificado").hide();
            $("#login-form").show();
        });

        $("#btn_error0").click(function () {
            $("#login-error0").hide();
            $("#login-form").show();
        });

        $("#btn_error2").click(function () {
            $("#login-error2").hide();
            $("#contact-form").show();
        });

        $("#btn_error3").click(function () {
            $("#login-error3").hide();
            $("#login-form").show();
        });

        $("#btn_error4").click(function () {
            $("#login-error4").hide();
            $("#inscription2-form").show();
        });

        $(".forget-password").click(function () {
            $("#login-form").hide();
            $("#forget-form").show();
        });

        $("#btnAlta_pag1").click(function () {
            $("#login-form").hide();
            $("#inscription-form").show();
        });

        $("#btnContactar_pag1").click(function () {
            $("#login-form").hide();
            $("#contact-form").show();
        });

        $("#btn_error1").click(function () {
            var email = $("#username").val();

            if (email !== "" && patternEmail.test(email)) {
            // else? hauriem de posar algun text d'alerta, però no el tinc
                var oldBtnText = CargaBtnLoading("#btn_error1");

                ajaxCall("login.aspx/VerificaEmail", JSON.stringify({ email: email }),
                    function () {
                        $("#btn_error1").html(oldBtnText).prop("disabled", false);

                        $("#btn_error1").prop("disabled", true);
                        $("#btn_error1").addClass("btn-outline");
                        $("#desc2_error1").html($("#hidRespuesta").val());
                    });
            }
        });

        $("#btnCancel_error1").click(function () {
            $("#login-error1").hide();
            $("#login-form").show();
        });

        $("#forget-form input").keypress(function (e) {
            if (e.which === 13) {
                $(".forget-password").click();
                return false;
            }
        });

        $("#btn1_pag2").click(function () {

            var email = $("#emailRecoveryPass").val();

            if (email !== "" && patternEmail.test(email)) {
            // else? hauriem de posar algun text d'alerta, però no el tinc
                var oldBtnText = CargaBtnLoading("#btn1_pag2");

                ajaxCall("login.aspx/RecoveryPass", JSON.stringify({ email: email }),
                    function () {
                        $("#btn1_pag2").html(oldBtnText).prop("disabled", false);

                        $("#btn1_pag2").prop("disabled", true);
                        $("#btn1_pag2").addClass("btn-outline");
                        $("#desc2_pag2").html($("#hidRespuesta").val());
                        $("#btn2_pag2").removeClass("btn-outline");
                    });
            }
        });

        $("#btn2_pag2").click(function () {
            $("#forget-form").hide();
            $("#login-form").show();
        });

        $("#btnVolver_pag3_3").click(function () {
            $("#inscription3-form").hide();
            $("#login-form").show();
        });        

        $("#btn_pag2_2").click(function () {
            var idMember = parseInt($("#hidIdMember").val());
            var pass1 = $("#pass").val();
            var pass2 = $("#passR").val();

            if (pass1 === pass2 && patternPass.test(pass1)) {
                var oldBtnText = CargaBtnLoading("#btn_pag2_2");

                ajaxCall("login.aspx/SavePass", JSON.stringify({ idMember: idMember, pass: pass1 }),
                    function () {
                        $("#btn_pag2_2").html(oldBtnText).prop("disabled", false);

                        $("#forgetReturn-form").hide();
                        $("#login-form").show();
                    });
            } else {
                toastErr($("#desc4_pag3_2").text());
            }
        });

        $("#btnCancel_pag2_2").click(function () {
            window.location.assign("member.aspx");
        });        

        $("#btn_pag3_1").click(function () {
            var club = $("#selClub option:selected").val();
            var numsocio = $("#numSocio").val();
            var dni = $("#docSocio").val();
            var country = $("#hidCountry").val();

            if (club !== "-1" && numsocio !== "" && dni !== "") {
            // else? hauriem de posar algun text d'alerta, però no el tinc
                var oldBtnText = CargaBtnLoading("#btn_pag3_1");

                ajaxCall("login.aspx/CheckMember", JSON.stringify({ club: club, numsocio: numsocio, dni: dni, country: country }),
                    function (data) {
                        $("#btn_pag3_1").html(oldBtnText).prop("disabled", false);

                        var values = data.d;
                        var isOK = values[0];

                        if (isOK === 1) {
                            var auxData = values[1];

                            var name = auxData[0];
                            var surname = auxData[1];
                            var user_mz = auxData[2];
                            var email = auxData[3];
                            var status = auxData[4];

                            $("#inscription-form").hide();
                            $("#inscription2-form").show();

                            $("#emailIdentifier").val(email);

                            $("#hidLoggedName").val(name);
                            $("#hidLoggedSurname").val(surname);
                            $("#hidLoggedUserMZ").val(user_mz);
                            $("#hidLoggedEmail").val(email);
                            $("#hidLoggedStatus").val(status);
                        }
                        else if (isOK === 3) {
                            $("#login-error3").show();
                            $("#inscription-form").hide();
                        } else {
                            $("#login-error2").show();
                            $("#inscription-form").hide();
                        }
                    });
            }
        });

        $("#btnCancel_pag3_1").click(function () {
            $("#inscription-form").hide();
            $("#login-form").show();
        });

        $("#btn_pag3_2").click(function () {
            if ($("#chkAceptaCondiciones").is(':checked')) {
                var email = $("#emailIdentifier").val();
                var pass1 = $("#passIdentifier").val();
                var pass2 = $("#passIdentifierR").val();

                if (pass1 === pass2 && patternPass.test(pass1) && email !== "" && patternEmail.test(email)) {
                    var oldBtnText = CargaBtnLoading("#btn_pag3_2");

                    var lang = $("#hidLang").val();
                    var club = $("#selClub option:selected").val();
                    var numsocio = $("#numSocio").val();
                    var dni = $("#docSocio").val();
                    var name = $("#hidLoggedName").val();
                    var surname = $("#hidLoggedSurname").val();
                    var emailOld = $("#hidLoggedEmail").val();
                    var aceptaPubli = $("#chkQuiereInfo").is(':checked') ? 1 : 0;
                    var country = $("#hidCountry").val();

                    ajaxCall("login.aspx/Alta", JSON.stringify({
                        lang: lang, club: club, numsocio: numsocio, dni: dni, name: name, surname: surname, email: email, pass1: pass1, emailOld: emailOld, aceptaPubli: aceptaPubli, country: country
                    }),
                        function (data) {
                            $("#btn_pag3_2").html(oldBtnText).prop("disabled", false);

                            var ok = data.d;
                            if (ok) {
                                $("#inscription2-form").hide();
                                $("#inscription3-form").show();
                            } else {
                                $("#login-error4").show();
                                $("#inscription2-form").hide();
                            }
                        });

                } else {
                    toastErr($("#desc4_pag3_2").text());
                }
            } else {
                toastErr($("#hidchkObligado").val());
            }
        });

        $("#btnCancel_pag3_2").click(function () {
            $("#inscription2-form").hide();
            $("#login-form").show();
        });

        $("#btn_pag3_3").click(function () {
            $("#inscription3-form").hide();
            $("#contact-form").show();
        });

        $("#btn_pag4").click(function () {
            if ($("#chkAceptaPrivacidad").is(':checked')) {
                var nombre = $("#txtNombreContact").val();
                var email = $("#txtEmailContact").val();
                var club = $("#selClubContact option:selected").text();
                var consulta = $("#tarConsulta").val();
                var lang = $("#hidLang").val();
                var country = $("#hidCountry").val();

                if (nombre !== "" && email !== "" && patternEmail.test(email) && club !== "" && consulta !== "") {
                // else? hauriem de posar algun text d'alerta, però no el tinc
                    var oldBtnText = CargaBtnLoading("#btn_pag4");

                    ajaxCall("login.aspx/Contactar", JSON.stringify({ usuario: nombre, email: email, club: club, consulta: consulta, lang: lang, country: country }),
                        function (data) {
                            var ok = data.d;

                            $("#btn_pag4").html(oldBtnText);

                            if (!ok) {
                                $("#btn_pag4").css("background-color", "red");
                            } else {
                                $("#btn_pag4").prop("disabled", false);
                                $("#contact-form").hide();
                                $("#txtNombreContact").val("");
                                $("#txtEmailContact").val("");
                                $("#tarConsulta").val("");
                                $("#chkAceptaPrivacidad").prop('checked', false);
                                $("#contact-res").show();
                            }
                        });
                } 
            } else {
                toastErr($("#hidchkObligado").val());
            }
        });

        $("#btnCancel_pag4").click(function () {
            $("#contact-form").hide();
            $("#login-form").show();
        });

        $("#btn_pag4R").click(function () {
            $("#contact-res").hide();
            $("#login-form").show();
        });

        $("#username").keyup(function () {
            var value = $(this).val();
            $("#emailRecoveryPass").val(value);
            $("#emailIdentifier").val(value);
            $("#txtEmailContact").val(value);
            $("#spaEmail_pag4").text(value);
        });

        $("#txtEmailContact").keyup(function () {
            var value = $(this).val();
            $("#spaEmail_pag4").text(value);
        });

        function CargaBtnLoading(id) {
            var txtBoton = $(id).html();
            $(id).html("<span class=\"icon-refresh fa-spin\"></span>").prop("disabled", true);
            return txtBoton;
        }
    }
  

    return {
        //main function to initiate the module
        init: function() {

            handleLogin();

            // init background slide images
            $("(https://myplace.holmesplace.com/login/img/bg1.jpg").backstretch([
                "(https://myplace.holmesplace.com/login/img/bg1.jpg",
                "(https://myplace.holmesplace.com/login/img/bg1.jpg",
                "(https://myplace.holmesplace.com/login/img/bg1.jpg",
                "(https://myplace.holmesplace.com/login/img/bg1.jpg"
                ], {
                  fade: 1000,
                  duration: 5000
                }
            );

            // Posibles páginas de retorno
            $("#forgetReturn-form").hide();
            $("#login-verificado").hide();

            var cargaPag = $("#hidMostrarTexto").val();
            if (cargaPag !== "") {
                $("#login-form").hide();
                switch (cargaPag) {
                    case ("CambioPass"): $("#forgetReturn-form").show();
                        break;
                    case ("EmailVerificado"):
                    case ("QuiereInfo"): $("#login-verificado").show();
                        break;
                }
            }
            $("#login-error0").hide();
            $("#login-error1").hide();
            $("#login-error2").hide();
            $("#login-error3").hide();
            $("#login-error4").hide();
            $("#forget-form").hide();
            $("#inscription-form").hide();
            $("#inscription2-form").hide();
            $("#inscription3-form").hide();
            $("#contact-form").hide();
            $("#contact-res").hide();
        }
    };
}();

jQuery(document).ready(function() {
    Login.init();
});