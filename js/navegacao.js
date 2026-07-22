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
    produtosNavItem.addEventListener('focusout', (event) => {
        if (!produtosNavItem.contains(event.relatedTarget)) {
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

        // Reset completo e recolhimento de TODOS os acordeões internos ao fechar o diálogo
        document.querySelectorAll('.accordion-toggle, .accordion-sub-toggle').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });
        document.querySelectorAll('.accordion-panel, .accordion-sub-panel').forEach(panel => {
            panel.hidden = true;
        });
    });


    // ACORDEÕES MOBILE
    function setupAccordion(toggleClassName) {
        const toggles = document.querySelectorAll(toggleClassName);
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const panelId = toggle.getAttribute('aria-controls');
                const panel = document.getElementById(panelId);
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

                const parent = toggle.closest('ul');
                const siblingToggles = parent.querySelectorAll(toggleClassName);
                siblingToggles.forEach(sib => {
                    if (sib !== toggle) {
                        sib.setAttribute('aria-expanded', 'false');
                        const sibPanel = document.getElementById(sib.getAttribute('aria-controls'));
                        if(sibPanel) sibPanel.hidden = true;
                    }
                });

                toggle.setAttribute('aria-expanded', !isExpanded);
                panel.hidden = isExpanded;
            });
        });
    }

    setupAccordion('.accordion-toggle');
    setupAccordion('.accordion-sub-toggle');


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
