//Miguel França

const pegeout = document.querySelector(".div-produtos-carrinho");
const subtotalSpan = document.querySelector(".ola");
const totalSpan = document.querySelector(".boa-pa-nois-familia");

const nome = localStorage.getItem("nomeProduto");
const preco = localStorage.getItem("precoProduto");
const img = localStorage.getItem("imgProduto");

const btn = document.getElementById("btn-finalizar")

btn.disabled = true;
btn.style.opacity = "0.6";



function ativarBotao() {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.href = "tela_checkout.html"
    btn.innerText = "Finalizar compra"
    
}

function desativarBotao() {
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.href = "#"
    btn.innerText = "Sem produtos adicionados"
    
}

function formatarPreco(valor) {
    return parseFloat(valor.replace("R$", "").replace(",", "."));

}

if (nome && preco && img) {
    pegeout.innerHTML = `
<section class="produtos-carrinho">
    <h1 class="titulo-carrinho">Carrinho de Compras</h1>

    <div class="item-carrinho">
        <img src="${img}" alt="${nome}" class="img-produto">

        <div class="info-produto">
            <h3>${nome}</h3>
            <div class="quantidade">
                <button class="btn-qtd diminuir">-</button>
                <input type="number" class="input-qtd" value="1">
                <button class="btn-qtd aumentar">+</button>
            </div>
        </div>

        <div class="preco-produto">
            <div class="acoes-carrinho">
                <img src="img/icones/trash.png" alt="" class="btn-excluir">
            </div>
            <p class="preco-unit">${preco}</p>
            <p class="frete">Frete: grátis</p>
            <p class="total-item">Total: ${preco}</p>
        </div>
    </div>
</section>
    `;

    ativarBotao();

    const inputQtd = document.querySelector(".input-qtd");
    const precoUnit = document.querySelector(".preco-unit");
    const totalCard = document.querySelector(".total-item");
    const btnDiminuir = document.querySelector(".diminuir");
    const btnAumentar = document.querySelector(".aumentar");
    const btnExcluir = document.querySelector(".btn-excluir");

    function atualizarTotais() {
        const valorUnit = formatarPreco(precoUnit.textContent);
        const qtd = parseInt(inputQtd.value);
        const total = valorUnit * qtd;
        const totalFormatado = `R$ ${total.toFixed(2).replace(".", ",")}`;

        totalCard.textContent = `Total: ${totalFormatado}`;
        subtotalSpan.textContent = totalFormatado;
        totalSpan.textContent = totalFormatado;
        localStorage.setItem("precoTotal", totalFormatado);
    }

    btnDiminuir.addEventListener("click", function() {
        if (inputQtd.value > 1) {
            inputQtd.value--;
            atualizarTotais();
        } else {
            localStorage.removeItem("nomeProduto");
            localStorage.removeItem("precoProduto");
            localStorage.removeItem("imgProduto");

            pegeout.innerHTML = `
            <section class="produtos-carrinho">
                <h1 class="titulo-carrinho">Carrinho de Compras</h1>
                <article class="vazio">
                    <h1>Carrinho vazio</h1>
                    <a href="tela_produtos.html">Adicionar produtos</a>
                </article>
            </section>
            `;
            subtotalSpan.textContent = "R$ 0,00";
            totalSpan.textContent = "R$ 0,00";
            desativarBotao();
        }
    });

    btnAumentar.addEventListener("click", function() {
        inputQtd.value++;
        atualizarTotais();
    });

    inputQtd.addEventListener("input", atualizarTotais);

    btnExcluir.addEventListener("click", function() {
        localStorage.removeItem("nomeProduto");
        localStorage.removeItem("precoProduto");
        localStorage.removeItem("imgProduto");

        pegeout.innerHTML = `
        <section class="produtos-carrinho">
            <h1 class="titulo-carrinho">Carrinho de Compras</h1>
            <article class="vazio">
                <h1>Carrinho vazio</h1>
                <a href="tela_produtos.html">Adicionar produtos</a>
            </article>
        </section>
        `;
        subtotalSpan.textContent = "R$ 0,00";
        totalSpan.textContent = "R$ 0,00";
        desativarBotao();
    });

    atualizarTotais();
} else {
    pegeout.innerHTML = `
    <section class="produtos-carrinho">
        <h1 class="titulo-carrinho">Carrinho de Compras</h1>
        <article class="vazio">
            <h1>Carrinho vazio</h1>
            <a href="tela_produtos.html">Adicionar produtos</a>
        </article>
    </section>
    `;
    subtotalSpan.textContent = "R$ 0,00";
    totalSpan.textContent = "R$ 0,00";
    desativarBotao();
}