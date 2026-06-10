document.addEventListener('DOMContentLoaded', () => {
    const copyBtns = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast();
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                    showToast('Gagal menyalin');
                });
            }
        });
    });

    function showToast(msg = 'Tersalin!') {
        toast.textContent = msg;
        toast.classList.add('show');
        
        // Hide toast after 2.5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
});
