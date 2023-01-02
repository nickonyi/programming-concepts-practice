function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);


    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        });
    }
}

showMenu('header-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener("click", linkAction));