//Miguel França

const principal = document.getElementById("principal")
const miniaturas = document.querySelectorAll(".miniatura")

miniaturas.forEach(mini => {
    mini.addEventListener("click", function () {
        const menzinho = mini.getAttribute("src")
        principal.setAttribute("src", (menzinho))

        miniaturas.forEach(m =>
        m.classList.remove("mini_ativo"));
        mini.classList.add("mini_ativo");
    });
})