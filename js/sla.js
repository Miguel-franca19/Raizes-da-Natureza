//Miguel França

function menuShow() {
    const menuMobile = document.querySelector(".mobile-menu");
    const topo = document.getElementById("topo");
    const hambIcon = document.querySelector(".hamb img");

    const isOpen = menuMobile.classList.toggle("open");
    topo.classList.toggle("menu-aberto", isOpen);

    if (isOpen) {
        hambIcon.classList.add("open");
    } else{
        hambIcon.classList.remove("open");
    }
}