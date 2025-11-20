//Miguel França

const btn = document.getElementById("botao");
const tela = document.getElementById("obrigado");
const msg = document.getElementById("msg")

function mostrarMensagem() {
    tela.classList.add("boo");
}
function esconderMensagem() {
    tela.classList.remove("boo");
}
btn.disabled = true;

function verificaCampos() {
    const respostas = document.querySelectorAll(".respostas");

    let todosPreenchidos = true;
    respostas.forEach(input => {
        if (input.value.trim() === "") {
            todosPreenchidos = false; 
        }
    });

    msg.classList.remove("acerto", "erro")

    if (todosPreenchidos) {
        btn.disabled = false;
        msg.classList.add("acerto");
        msg.innerText = "Todos os campos preenchidos!!";
    } else {
        btn.disabled = true;
        msg.classList.add("erro");
        msg.innerText = "Preencha todos os campos!!";
    }
}

document.querySelectorAll(".respostas").forEach(input => {
    input.addEventListener("input", verificaCampos);
});
document.querySelectorAll(".radio").forEach(radio => {
    radio.addEventListener("change", verificaCampos);
});

verificaCampos();

btn.addEventListener("click", function () {
    btn.innerText = "enviando...";
    btn.disabled = true;
    setTimeout(() => {
        btn.innerText = "Enviar ►";
        btn.disabled = false;
        mostrarMensagem();
    }, 1500);
});