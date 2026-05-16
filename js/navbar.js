function resolveLink(href) {
    const currentPath = window.location.pathname;
    const inPages = currentPath.includes('/pages/');
    if (inPages) {
        if (href === 'index.html') {
            return '../index.html';
        }
        if (href.startsWith('pages/')) {
            return href.replace(/^pages\//, '');
        }
    }
    return href;
}

function renderNavbar() {
    const navbarContainer = document.getElementById('navbar');
    if (!navbarContainer || !window.navLinks) return;

    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
        <div class="logo">Market</div>
        <ul>
            ${navLinks.map(link => `<li><a href="${resolveLink(link.enlace)}">${link.titulo}</a></li>`).join('')}
        </ul>
        <button type="button" class="logout">Logout</button>
    `;

    navbarContainer.appendChild(nav);
}

function initNavbar() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
}

initNavbar();
