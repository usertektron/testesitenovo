(function () {
    const bubble = document.getElementById('whatsapp-bubble');
    const closeBtn = document.getElementById('whatsapp-bubble-close');
    if (!bubble || !closeBtn) return;
    setTimeout(() => bubble.classList.add('is-visible'), 1500);
    setTimeout(() => bubble.classList.remove('is-visible'), 9000);
    closeBtn.addEventListener('click', () => bubble.classList.remove('is-visible'));
})();
