document.addEventListener('DOMContentLoaded', () => {
    // DESKTOP: Mega-Menu Disclosure
    const menuToggleDesktop = document.getElementById('btn-produtos-desktop');
    const megamenuPanelDesktop = document.getElementById('painel-produtos-desktop');
    const produtosNavItem = menuToggleDesktop.closest('.has-megamenu');

    function toggleDesktopMenu(open) {
        menuToggleDesktop.setAttribute('aria-expanded', open);
        megamenuPanelDesktop.hidden = !open;
    }

    menuToggleDesktop.addEventListener('click', (e) => {
        const isExpanded = menuToggleDesktop.getAttribute('aria-expanded') === 'true';
        toggleDesktopMenu(!isExpanded);
        e.stopPropagation();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggleDesktop.getAttribute('aria-expanded') === 'true') {
            toggleDesktopMenu(false);
            menuToggleDesktop.focus();
        }
    });

    document.addEventListener('click', (e) => {
        if (!produtosNavItem.contains(e.target)) {
            toggleDesktopMenu(false);
        }
    });

    // Correção de Focus Out Global (Englobando botão + painel para Shift+Tab)
    // relatedTarget nulo significa que o foco não foi para outro elemento focável:
    // é o caso de clicar num rótulo não-clicável dentro do painel ("Caixa 4x2",
    // "Teto", as frases de apoio da faixa). Fechar aí faz o menu sumir debaixo do
    // cursor de quem está lendo. O fechamento por clique fora já é tratado pelo
    // handler de click acima; a navegação por Tab sempre entrega um relatedTarget
    // real, então a regra da §2.5 ("foco sai do conjunto → fecha") continua valendo.
    produtosNavItem.addEventListener('focusout', (event) => {
        if (event.relatedTarget && !produtosNavItem.contains(event.relatedTarget)) {
            toggleDesktopMenu(false);
        }
    });


    // MOBILE: Diálogo Nativo (<dialog>)
    const btnAbrirMobile = document.getElementById('btn-abrir-mobile');
    const btnFecharMobile = document.getElementById('btn-fechar-mobile');
    const dialogMobile = document.getElementById('menu-dialog-mobile');
    const body = document.body;

    btnAbrirMobile.addEventListener('click', () => {
        dialogMobile.showModal();
        body.style.overflow = 'hidden';
        btnAbrirMobile.setAttribute('aria-expanded', 'true');
    });

    btnFecharMobile.addEventListener('click', () => {
        dialogMobile.close();
    });

    dialogMobile.addEventListener('close', () => {
        body.style.overflow = '';
        btnAbrirMobile.setAttribute('aria-expanded', 'false');
        btnAbrirMobile.focus();
        // Não há estado interno a resetar: o diálogo não tem nível de expansão
        // desde a revisão de 2026-08-04 (estrutura-navegacao §7).
    });


    // UNIFIED BREAKPOINT RESET
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            if (dialogMobile.open) {
                dialogMobile.close();
            }
        } else {
            if (menuToggleDesktop.getAttribute('aria-expanded') === 'true') {
                toggleDesktopMenu(false);
            }
        }
    });
});
