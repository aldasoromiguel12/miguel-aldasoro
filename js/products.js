function getCategoryFromPath() {
    const page = window.location.pathname.split('/').pop().toLowerCase();
    if (page.includes('celulares')) return 'celulares';
    if (page.includes('computadoras')) return 'computadoras';
    if (page.includes('tablet')) return 'tablet';
    return null;
}

function findProductByTitle(title, category) {
    const products = window.productsData?.[category] || [];
    return products.find(product => product.title.toLowerCase() === title.toLowerCase());
}

function createQuantityControls() {
    const wrapper = document.createElement('div');
    wrapper.className = 'quantity-controls';

    const decrement = document.createElement('button');
    decrement.type = 'button';
    decrement.className = 'quantity-button decrement';
    decrement.textContent = '-';

    const quantity = document.createElement('span');
    quantity.className = 'quantity';
    quantity.textContent = '1';

    const increment = document.createElement('button');
    increment.type = 'button';
    increment.className = 'quantity-button increment';
    increment.textContent = '+';

    decrement.addEventListener('click', () => {
        const current = Number(quantity.textContent);
        quantity.textContent = Math.max(1, current - 1);
    });

    increment.addEventListener('click', () => {
        const current = Number(quantity.textContent);
        quantity.textContent = current + 1;
    });

    wrapper.appendChild(decrement);
    wrapper.appendChild(quantity);
    wrapper.appendChild(increment);

    return wrapper;
}

function enhanceExistingCards() {
    const section = document.getElementById('productos');
    if (!section || !window.productsData) return;

    const category = getCategoryFromPath();
    if (!category || !productsData[category]) return;

    const cards = section.querySelectorAll('.card');
    cards.forEach(card => {
        const titleEl = card.querySelector('h3');
        if (!titleEl) return;

        const product = findProductByTitle(titleEl.textContent.trim(), category);
        if (!product) return;

        const existingDescription = card.querySelector('.description');
        if (!existingDescription) {
            const description = document.createElement('p');
            description.className = 'description';
            description.textContent = product.description;
            titleEl.insertAdjacentElement('afterend', description);
        }

        let existingPrice = card.querySelector('.price');
        if (!existingPrice) {
            existingPrice = card.querySelector('p:not(.description)');
        }
        if (existingPrice) {
            existingPrice.classList.add('price');
            existingPrice.textContent = `$${product.price}`;
        }

        const existingControls = card.querySelector('.quantity-controls');
        if (!existingControls) {
            const buyButton = card.querySelector('button');
            const quantityControls = createQuantityControls();
            if (buyButton) {
                buyButton.insertAdjacentElement('beforebegin', quantityControls);
            } else {
                section.appendChild(quantityControls);
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceExistingCards);
} else {
    enhanceExistingCards();
}
