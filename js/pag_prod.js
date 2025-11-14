//Miguel França

const busca = document.getElementById("resposta");
const categoria = document.getElementById("escolha");
const produtos = document.querySelectorAll(".mini_card-desque");
const contador = document.getElementById("n_prod");
let total = parseInt(contador.textContent);

total = produtos.length;
contador.innerText = total;

function filtrar() {
    total = 0;
    const termo = busca.value.toLowerCase().trim();
    const cat = categoria.value.toLowerCase();

    produtos.forEach(prod => {
        const nome = prod.querySelector(".nome").textContent.toLowerCase();
        const descricao = prod.querySelector(".descricao").textContent.toLowerCase();
        const prodCat = prod.querySelector(".categoria").textContent.toLowerCase();

        const correspondeBusca = nome.includes(termo) || descricao.includes(termo);
        const correspondeCategoria = cat === "todas as categorias" || prodCat === cat;

        if (correspondeBusca && correspondeCategoria) {
            prod.style.display = "flex";
            total++;

        } else {
            prod.style.display = "none";

        }
    });

    contador.innerText = total;


}

busca.addEventListener("input", filtrar);
categoria.addEventListener("change", filtrar);

const btn = document.getElementById("but");


function mostrarMensagem() {
    tela.classList.add("boo");
}
function esconderMensagem() {
    tela.classList.remove("boo");
}