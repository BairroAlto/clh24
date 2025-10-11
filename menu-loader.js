// menu-loader.js
document.addEventListener('DOMContentLoaded', () => {
    const menuPlaceholder = document.getElementById('bottom-menu-placeholder');
    if (!menuPlaceholder) return;

    fetch('menu.html')
        .then(response => {
            if (!response.ok) throw new Error('Não foi possível carregar o menu.');
            return response.text();
        })
        .then(html => {
            menuPlaceholder.innerHTML = html;

            const currentPage = window.location.pathname.split('/').pop();
            const menuLinks = menuPlaceholder.querySelectorAll('.bottom-nav a');

            menuLinks.forEach(link => {
                const linkPage = link.getAttribute('href');
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o menu:', error);
            menuPlaceholder.innerHTML = '<p style="text-align:center; color:red;">Erro no menu.</p>';
        });
});
