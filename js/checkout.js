//Miguel França

const btn = document.getElementById("but");
const tela = document.getElementById("obrigado");
const msg = document.getElementById("msg")
const total = document.getElementById("total")
const subTotal = document.getElementById("subzin")

const sla = localStorage.getItem("precoTotal")

const correto = sla.toString()
console.log(correto)

total.innerHTML = `${correto}`
subTotal.innerHTML = `${correto}`

function mostrarMensagem() {
    tela.classList.add("boo");
}
function esconderMensagem() {
    tela.classList.remove("boo");
}

btn.disabled = true;

function verificaCampos() {
    const respostas = document.querySelectorAll(".respostas");
    const radiosPagamento = document.querySelectorAll(".radio");

    let todosPreenchidos = true;
    respostas.forEach(input => {
        if (input.value.trim() === "") {
            todosPreenchidos = false;
        }
    });

    let pagamentoSelecionado = false;
    radiosPagamento.forEach(radio => {
        if (radio.checked) {
            pagamentoSelecionado = true;
        }
    });

    if (todosPreenchidos && pagamentoSelecionado) {
        btn.classList.remove("nao");
        btn.disabled = false;
        msg.classList.add("acerto");
        msg.innerText = "Todos os campos preenchidos!!";
    } else {
        btn.classList.add("nao");
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
    btn.innerText = "Processando...";
    btn.disabled = true;
    setTimeout(() => {
        btn.innerText = "Finalizar Compra";
        btn.disabled = false;
        mostrarMensagem();
    }, 1500);
});
