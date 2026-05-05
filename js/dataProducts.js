const dataProdutos = [
    {
        id: 0,
        nome: "Boneca Ritxoko - Karajá",
        descricao: "Bonecas Ritxoko, artesanato tradicional do povo Karajá, moldadas em argila e pintadas com...",
        tipo: "Cerâmica",
        preco: 89.90,
        img: "img/produtos/prod 1/img 1.webp",
        pagina: "Boneca_Ritxoko.html"
    },
    {
        id: 1,
        nome: "Gargantilha de Sementes - Pataxó",
        descricao: "As sementes usadas pelas artesãs Pataxó são combinadas para criar bijuterias únicas...",
        tipo: "Joias",
        preco: 45.90,
        img: "img/produtos/prod 2/img 1.webp",
        pagina: "gargantilha_de_sementes.html"
    },
    {
        id: 2,
        nome: "Rede de Tecelagem - Guajajara",
        descricao: "As redes produzidas pelo povo Guajajara são feitas através de técnicas tradicionais...",
        tipo: "Decoração",
        preco: 1808.90,
        img: "img/produtos/prod 5/img 1.webp",
        pagina: "rede_de_tecelagem.html"
    },
    {
        id: 3,
        nome: "Brincos de Miçangas - Kayapó",
        descricao: "Joias Mebengokré (Kayapó), feitas à mão com miçangas de vidro e nylon...",
        tipo: "Adereços",
        preco: 65.90,
        img: "img/produtos/prod 4/img 2.webp",
        pagina: "brincos_de_miçangas.html"
    },
    {
        id: 4,
        nome: "Cesto Wii - Yanomami",
        descricao: "O cesto wɨɨa, do povo Yanomami, é trançado à mão em cipó titica com detalhes únicos",
        tipo: "Cestas",
        preco: 299.90,
        img: "img/produtos/prod 3/img 1.webp",
        pagina: "cesto_wii.html"
    },
    {
        id: 5,
        nome: "Tamanduá de Cerâmica | Waurá",
        descricao: "As artesãs Waurá produzem cerâmicas feitas à mão em formatos de animais...",
        tipo: "Cerâmica",
        preco: 168.00,
        img: "img/produtos/prod 6/img 1.webp",
        pagina: "tamandua_de_ceramica.html"
    },
    {
        id: 6,
        nome: "Pulseira Elástica | Waurá",
        descricao: "As artesãs do povo Waurá, da Aldeia Ulupuwene, dedicam até três dias para produzir cada peça feita com miçangas...",
        tipo: "Adereços",
        preco: 168.00,
        img: "img/produtos/prod 7/img 2.webp",
        pagina: "pulseira_elastica.html"
    },
    {
        id: 7,
        nome: "Cesto com tampa | Teçume da Amazônia",
        descricao: "As artesãs ou teçumeiras, criam lindas peças a partir dos...",
        tipo: "Cestas",
        preco: 125.80,
        img: "img/produtos/prod 8/img 1.webp",
        pagina: "cesto_com_tampa.html"
    }
]

const espacoParaCards = document.querySelector(".card-produtos");

dataProdutos.forEach(prod => {

    espacoParaCards.insertAdjacentHTML("beforeend", `
    <article class="mini_card-desque" id="${prod.id}">
                    <div class="mini_card-destaque-img">
                        <img class="img-prod" src="${prod.img}" alt="${prod.nome}">
                    </div>

                    <div class="card-prod-info">

                        <div class="card-prod-titles">
                            <h3 class="nome">${prod.nome}</h3>
                            <p class="descricao">${prod.descricao}</p>
                        </div>

                        <div class="info-prods">
                            <p class="preco">R$ <span>${prod.preco.toFixed(2)}</span></p>
                            <span class="categoria">${prod.tipo}</span>
                        </div>

                        <div class="acoes-card">
                            <a href="${prod.pagina}"><button class="btn-ver">
                                    <img src="img/icones/icon-olho.png" alt="Olho">
                                    Ver</button></a>

                            <button class="btn-add">
                                <img src="img/icones/carrinho.png" alt="carrinho">
                                Adicionar</button>
                        </div>
                    </div>
                </article>
                `
    )
});