function initLogout() {
    const buttons = document.querySelectorAll('.logout');
    const inPages = window.location.pathname.includes('/pages/');
    const target = inPages ? 'login.html' : 'pages/login.html';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.href = target;
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogout);
} else {
    initLogout();
}
