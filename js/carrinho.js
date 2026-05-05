//Miguel França
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const tela = document.getElementById("obrigado");
const mensagem = document.getElementById("mensagem");

function mostrarMensagem() {
    tela.classList.add("boo");
}
function esconderMensagem() {
    tela.classList.remove("boo");
}

const cardProds = document.querySelectorAll(".mini_card-desque");
cardProds.forEach(prod => {
    const btnAdd = prod.querySelector(".btn-add");

    btnAdd.addEventListener("click", function () {
        const idProd = parseInt(prod.getAttribute("id"));
        const nomeProd = prod.querySelector(".nome").textContent; //nome do produto
        const precoProd = parseFloat(prod.querySelector(".preco span").textContent);   //preco do produto no formato de float
        const imgProd = prod.querySelector("img").getAttribute("src");  //imagem (src)
        console.log(precoProd)

        let verificaSeJaExiste = verificarProdutoExistente(idProd);
        if (verificaSeJaExiste) {
            verificaSeJaExiste.quantidade++;
        } else {
            carrinho.push({ id: idProd, nome: nomeProd, preco: precoProd, imgSrc: imgProd, quantidade: 1 });
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        mensagem.innerHTML = `
        <h2>Produto Adicionado ao carrinho</h2>
                <p>O produtos <span>${nomeProd}</span> foi adicionado ao carrinho!</p>
                <button class="btn-fechar" onclick="esconderMensagem()">Fechar</button>
        `;
        mostrarMensagem()
    });
});

function verificarProdutoExistente(idSelecionado) {
    return carrinho.find(elemento => elemento.id === idSelecionado);
}