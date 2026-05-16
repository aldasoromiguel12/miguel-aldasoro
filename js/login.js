function initLogin() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', event => {
        event.preventDefault();
        window.location.href = '../index.html';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogin);
} else {
    initLogin();
}
