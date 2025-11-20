//Miguel França

const form = document.querySelector("form");
const checkbox = document.getElementById("aceito");
const msg = document.getElementById("msg");
const btn = document.getElementById("btnSubmit");

const titulo = document.title.toLowerCase();

if (titulo.includes("cadastro")) {

    const imgSenha = document.getElementById("img-senha");
    const senhaTroca = document.getElementById("senha");

    imgSenha.addEventListener("click", function () {
        if (senhaTroca.getAttribute("type") === "password") {
            senhaTroca.setAttribute("type", "text");
            imgSenha.setAttribute("src", "img/icones/olho-aberto.png");
            imgSenha.setAttribute("alt", "Esconder senha");
        } else {
            senhaTroca.setAttribute("type", "password");
            imgSenha.setAttribute("src", "img/icones/olho-fechado.png");
            imgSenha.setAttribute("alt", "Mostrar senha");
        }
    });

    btn.addEventListener("click", function (e) {
        e.preventDefault();

        /*
         const inputs = document.querySelectorAll(".input");
         const email = inputs[0].value;
         const confirmEmail = inputs[1].value;
         const senha = inputs[2].value;
         const confirmSenha = inputs[3].value;
 
         const emailCadastrado = localStorage.getItem("emailCadastrado");
 
         if (email === "" || confirmEmail === "" || senha === "" || confirmSenha === "") {
             msg.textContent = "Preencha todos os campos!!";
             msg.classList.add("erro");
             return;
         }
 
         if (!email.includes("@")) {
             msg.textContent = "Entre com um endereço de E-mail!!";
             msg.classList.add("erro");
             return;
         }
 
         if (email !== confirmEmail) {
             msg.textContent = "Os emails não são iguais!!";
             msg.classList.add("erro");
             return;
         }
 
         if (senha !== confirmSenha) {
             msg.textContent = "As senhas não são iguais!!";
             msg.classList.add("erro");
             return;
         }
 
         if (senha.length < 6 || confirmSenha.length < 6) {
             msg.textContent = "A senha deve ter mais de 6 caracteres!!";
             msg.classList.add("erro");
             return;
         }
 
         if (!checkbox.checked) {
             msg.textContent = "Você precisa aceitar os termos para continuar!";
             msg.classList.add("erro");
             return;
         }
 
         if (emailCadastrado === email) {
             msg.textContent = "E-mail já cadastrado!!";
             msg.classList.add("erro");
             return;
         }
 
         localStorage.setItem("emailCadastrado", email);
         localStorage.setItem("senhaCadastrada", senha);
         */

        msg.textContent = "Cadastro feito :-)";
        msg.classList.remove("erro");
        msg.classList.add("acerto");

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    });
}

if (titulo.includes("login")) {

    const imgSenha = document.getElementById("img-senha");
    const senhaTroca = document.getElementById("senha");

    imgSenha.addEventListener("click", function () {
        if (senhaTroca.getAttribute("type") === "password") {
            senhaTroca.setAttribute("type", "text");
            imgSenha.setAttribute("src", "img/icones/olho-aberto.png");
            imgSenha.setAttribute("alt", "Esconder senha");
        } else {
            senhaTroca.setAttribute("type", "password");
            imgSenha.setAttribute("src", "img/icones/olho-fechado.png");
            imgSenha.setAttribute("alt", "Mostrar senha");
        }
    });

    btn.addEventListener("click", function (e

    ) {
        e.preventDefault();

        /*   const inputs = document.querySelectorAll(".input");
           const email = inputs[0].value;
           const senha = inputs[1].value;
   
           const emailCadastrado = localStorage.getItem("emailCadastrado");
           const senhaCadastrada = localStorage.getItem("senhaCadastrada");
   
           if (senhaCadastrada === null || emailCadastrado === null) {
               msg.textContent = "Usuário inválido. Cadastre-se!!";
               msg.classList.add("erro");
               return;
           }
   
           if (email === "" || senha === "") {
               msg.textContent = "Preencha todos os campos!!";
               msg.classList.add("erro");
               return;
           }
   
           if (emailCadastrado !== email) {
               msg.textContent = "E-mail inválido.";
               msg.classList.add("erro");
               return;
           }
   
           if (senha !== senhaCadastrada) {
               msg.textContent = "Senha incorreta!!";
               msg.classList.add("erro");
               return;
           }
   
           if (!checkbox.checked) {
               msg.textContent = "Você precisa aceitar os termos para continuar!";
               msg.classList.add("erro");
               return;
           }
               */

        msg.textContent = "Login bem-sucedido!";
        msg.classList.remove("erro");
        msg.classList.add("acerto");
        localStorage.setItem("contador", "0")

        setTimeout(function () {
            window.location.href = "tela_inicio.html";
        }, 1000);
    });
}

const reset = document.getElementById("burro");

if (reset) {
    reset.addEventListener("click", function (e) {
        e.preventDefault();

        localStorage.removeItem("emailCadastrado");
        localStorage.removeItem("senhaCadastrada");

        alert("Dados do cadastro foram limpos! (Agora é tarde, sumiu tudo.)");
    });
}
