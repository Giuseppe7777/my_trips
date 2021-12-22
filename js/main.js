
const topbar = document.querySelector(".topbar")

window.addEventListener("scroll", checkScroll)

function checkScroll() {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        topbar.classList.add('red')
    }
    else {
        topbar.classList.remove('red')
    }
}



