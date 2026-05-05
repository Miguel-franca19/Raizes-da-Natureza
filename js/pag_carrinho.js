//Miguel França

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const espacoCarrinho = document.querySelector(".div-produtos-carrinho");
const subtotalSpan = document.querySelector(".ola");
const totalSpan = document.querySelector(".boa-pa-nois-familia");
const btn = document.getElementById("btn-finalizar");

desativarBotao();

function ativarBotao() {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.innerText = "Finalizar compra";
    btn.setAttribute("href", "tela_checkout.html");
    btn.style.cursor = "pointer";
}

function desativarBotao() {
    btn.disabled = true;
    btn.style.opacity = "0.5";
    btn.innerText = "Sem produtos adicionados";
    btn.removeAttribute("href");
    btn.style.cursor = "not-allowed";
}

function atualizarTotalGeral() {
    const total = carrinho.reduce((soma, produto) => {
        return soma + (produto.preco * produto.quantidade);
    }, 0);

    const totalFormatado = `R$ ${total.toFixed(2).replace(".", ",")}`;
    subtotalSpan.textContent = totalFormatado;
    totalSpan.textContent = totalFormatado;
    localStorage.setItem("precoTotal", totalFormatado);
}

function mostrarCarrinho() {
    espacoCarrinho.innerHTML = `<section class="produtos-carrinho"><h1 class="titulo-carrinho">Carrinho de Compras</h1></section>`;
    const section = espacoCarrinho.querySelector("section");

    if (carrinho.length === 0) {
        section.insertAdjacentHTML("beforeend", `
            <article class="vazio">
                <h1>Carrinho vazio</h1>
                <a href="tela_produtos.html">Adicionar produtos</a>
            </article>
        `);
        subtotalSpan.textContent = "R$ 0,00";
        totalSpan.textContent = "R$ 0,00";
        desativarBotao();
        return;
    }

    carrinho.forEach(produto => {
        section.insertAdjacentHTML("beforeend", `
            <div class="item-carrinho" data-id="${produto.id}">
                <img src="${produto.imgSrc}" alt="${produto.nome}" class="img-produto">

                <div class="info-produto">
                    <h3>${produto.nome}</h3>
                    <div class="quantidade">
                        <button class="btn-qtd diminuir">-</button>
                        <input type="number" class="input-qtd" value="${produto.quantidade}">
                        <button class="btn-qtd aumentar">+</button>
                    </div>
                </div>

                <div class="preco-produto">
                    <div class="acoes-carrinho">
                        <img src="img/icones/trash.png" alt="" class="btn-excluir">
                    </div>
                    <p class="preco-unit">R$ ${produto.preco.toFixed(2)}</p>
                    <p class="frete">Frete: grátis</p>
                    <p class="total-item">Total: R$ ${(produto.preco * produto.quantidade).toFixed(2).replace(".", ",")}</p>
                </div>
            </div>
        `);

        const cardAtual = section.lastElementChild;
        const inputQtd = cardAtual.querySelector(".input-qtd");
        const totalCard = cardAtual.querySelector(".total-item");
        const btnDiminuir = cardAtual.querySelector(".diminuir");
        const btnAumentar = cardAtual.querySelector(".aumentar");
        const btnExcluir = cardAtual.querySelector(".btn-excluir");

        function atualizarCardAtual() {
            produto.quantidade = parseInt(inputQtd.value);
            const totalItem = produto.preco * produto.quantidade;
            totalCard.textContent = `Total: R$ ${totalItem.toFixed(2).replace(".", ",")}`;
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            atualizarTotalGeral();
        }

        btnAumentar.addEventListener("click", () => {
            inputQtd.value++;
            atualizarCardAtual();
        });

        btnDiminuir.addEventListener("click", () => {
            if (inputQtd.value > 1) {
                inputQtd.value--;
                atualizarCardAtual();
            } else {
                const idSelecionado = carrinho.findIndex(p => p.id === produto.id);
                carrinho.splice(idSelecionado, 1);
                localStorage.setItem("carrinho", JSON.stringify(carrinho));
                mostrarCarrinho(); // re-renderiza tudo
            }
        });

        btnExcluir.addEventListener("click", () => {
            const idSelecionado = carrinho.findIndex(p => p.id === produto.id);
            carrinho.splice(idSelecionado, 1);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            mostrarCarrinho();
        });

        inputQtd.addEventListener("input", atualizarCardAtual);
    });

    ativarBotao();
    atualizarTotalGeral();
}

mostrarCarrinho();