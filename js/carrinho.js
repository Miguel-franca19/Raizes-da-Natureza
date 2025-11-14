//Miguel França

const cardProds = document.querySelectorAll(".mini_card-desque");
const tela = document.getElementById("obrigado");
const mensagem = document.getElementById("mensagem")

function mostrarMensagem() {
    tela.classList.add("boo");
}
function esconderMensagem() {
    tela.classList.remove("boo");
}

cardProds.forEach(prod => {
    const btnAdd = prod.querySelector(".btn-add");

    btnAdd.addEventListener("click", function () {
        const nomeProd = prod.querySelector(".nome");
        const precoProd = prod.querySelector(".preco");
        const imgProd = prod.querySelector("img");

        const imagem = imgProd.getAttribute("src");

        localStorage.setItem("nomeProduto", nomeProd.textContent);
        localStorage.setItem("precoProduto", precoProd.textContent);
        localStorage.setItem("imgProduto", imagem);

        mensagem.innerHTML = `
        <h2>Produto Adicionado ao carrinho</h2>
                <p>O produtos <span>${nomeProd.textContent}</span> foi adicionado ao carrinho!</p>
                <p class="alert">
                    Aviso importante: nosso carrinho é meio humilde e só aguenta <strong>1 item</strong> por vez kkkkk.
                    Adicionou outro? O primeiro evaporou no ar, tipo mágica (ou bug, vai saber...).
                </p>
                <button class="btn-fechar" onclick="esconderMensagem()">Fechar</button>
        `;

        mostrarMensagem()
    });
});