document.addEventListener('DOMContentLoaded', () => {

    // Acessa os elementos do DOM
    const decrementBtn = document.getElementById('decrement-btn');
    const incrementBtn = document.getElementById('increment-btn');
    const quantityDisplay = document.getElementById('quantity-display');
    const productPriceDisplay = document.getElementById('product-price');
    const addToCartBtn = document.getElementById('add-to-cart-btn');

    // Variáveis de estado do produto
    const basePrice = 299.90;
    let quantity = 1;

    // Função para atualizar o display do preço
    const updatePrice = () => {
        const newPrice = (basePrice * quantity).toFixed(2);
        productPriceDisplay.textContent = newPrice.replace('.', ',');
    };

    // Evento para diminuir a quantidade
    decrementBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
            updatePrice();
        }
    });

    // Evento para aumentar a quantidade
    incrementBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
        updatePrice();
    });

    // Evento para o botão "Adicionar ao Carrinho"
    addToCartBtn.addEventListener('click', () => {
        alert(`${quantity} item(s) no valor de R$ ${productPriceDisplay.textContent} adicionado(s) ao carrinho!`);
        // Aqui, em um projeto real, você enviaria os dados para um back-end ou um estado global
    });

    // Chama a função para garantir que o preço inicial seja exibido corretamente
    updatePrice();
});