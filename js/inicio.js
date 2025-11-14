//Miguel França

const tela = document.getElementById("obrigado");

if (!localStorage.getItem("contador")) {
    localStorage.setItem("contador", "0");
}

function mostrarMensagem() {
    if (localStorage.getItem("contador") === "0") {
        tela.classList.remove("boo");
        localStorage.setItem("contador", "1");
    } else {
        esconderMensagem();
    }
}

function esconderMensagem() {
    tela.classList.add("boo");
}

mostrarMensagem();


//ignora essa baianagem arnaldo kkkkkkkkkk
// É porque usando links "a" no html, tava dando erro :)

const tatu = document.getElementById("tatu");
const cetsa = document.getElementById("cetsa");
const rede = document.getElementById("rede");

tatu.addEventListener("click", function () {
    window.location.href = "tamandua_de_ceramica.html";
})

cesta.addEventListener("click", function () {
    window.location.href = "cesto_wii.html";
})

rede.addEventListener("click", function () {
    window.location.href = "rede_de_tecelagem.html";
})