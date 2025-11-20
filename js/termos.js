//Miguel França

const checkbox = document.getElementById("aceito");
const btn = document.getElementById("btnContinuar");

checkbox.addEventListener("change", function () {
    btn.disabled = !checkbox.checked;
});

btn.addEventListener("click", function () {
    window.location.href = "index.html";
});