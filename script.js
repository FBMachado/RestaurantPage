const body = document.querySelector('body');
const navLinks = document.querySelectorAll('nav a');
const comboSelect = document.getElementById('combo');
const alacarteSelect = document.getElementById('alacarte');
const totalSpan = document.getElementById('total');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const color = link.dataset.color;
        body.style.backgroundColor = color;
    });
});

function updateTotal() {
    const comboPrice = parseInt(comboSelect.value);
    const alacartePrice = parseInt(alacarteSelect.value);
    const total = comboPrice + alacartePrice;
    totalSpan.textContent = total;
}

comboSelect.addEventListener('change', updateTotal);
alacarteSelect.addEventListener('change', updateTotal);

updateTotal();
