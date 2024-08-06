document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.expand-btn');
    const overlay = document.getElementById('codeOverlay');
    const overlayContent = document.getElementById('codeOverlayContent');
    const closeBtn = document.getElementById('closeBtn');
    const overlayCode = document.getElementById('overlayCode');

    expandButtons.forEach(button => {
        button.addEventListener('click', () => {
            const code = button.previousElementSibling.innerText;
            overlayCode.innerText = code;
            overlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});