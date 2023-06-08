const checkbox = document.getElementById('light');
const body = document.body;

// Periksa nilai yang tersimpan di localStorage saat halaman dimuat
if (localStorage.getItem('darkMode') === 'false') {
    checkbox.checked = true;
    body.classList.add('dark-mode');
}

checkbox.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', false);
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', true);
    }
});