//miguel frança

const but = document.getElementById("btn-add");
const tela = document.getElementById("obrigado");
const mensagem = document.getElementById("mensagem");

function mostrarMensagem() {
    tela.classList.add("boo");
}

function esconderMensagem() {
    tela.classList.remove("boo");
}

but.addEventListener("click", function () {
    const nome = document.querySelector(".detalhes h1");
    const preco = document.querySelector(".preco span");
    const img = document.getElementById("principal");

    const imagem = img.getAttribute("src");

    localStorage.setItem("nomeProduto", nome.textContent);
    localStorage.setItem("precoProduto", preco.textContent);
    localStorage.setItem("imgProduto", imagem);

    mensagem.innerHTML = `
        <h2>Produto Adicionado ao carrinho</h2>
        <p>O produto <span>${nome.textContent}</span> foi adicionado ao carrinho!</p>
        <p class="alert">
            Aviso importante: nosso carrinho é humilde e só aguenta <strong>1 item</strong>.
            Se tentar colocar outro, o anterior some igual boleto pago (mentira, boleto nunca some).
        </p>
        <button class="btn-fechar" onclick="esconderMensagem()">Fechar</button>
    `;

    mostrarMensagem();
});