// Product data
const products = [
    {
        id: 1,
        name: 'Gaming Pro X',
        category: 'gaming',
        price: 1499,
        specs: 'RTX 4060, 16GB RAM, 1TB SSD',
        image: 'images/laptops/gaming-pro-x.png'
    },
    {
        id: 2,
        name: 'Business Elite',
        category: 'business',
        price: 1299,
        specs: 'Intel i7, 16GB RAM, 512GB SSD',
        image: 'images/laptops/business-elite.png'
    },
    {
        id: 3,
        name: 'Student Essential',
        category: 'student',
        price: 699,
        specs: 'Intel i5, 8GB RAM, 256GB SSD',
        image: 'images/laptops/student-essential.png'
    },
    {
        id: 4,
        name: 'Creator Studio',
        category: 'creator',
        price: 1899,
        specs: 'Apple M4 4070, 26GB RAM, 1TB SSD',
        image: 'images/laptops/creator-studio.png'
    }
];

const productGrid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

const filterProducts = (category) => {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
};

const displayProducts = (productsToShow) => {
    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p class="specs">${product.specs}</p>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart">Add to Cart</button>
        </div>
    `).join('');
};

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProducts(button.dataset.category);
    });
});

const selectedCategory = localStorage.getItem('selectedCategory');
if (selectedCategory) {
    const categoryButton = document.querySelector(`[data-category="${selectedCategory}"]`);
    if (categoryButton) {
        categoryButton.click();
    }
    localStorage.removeItem('selectedCategory');
} else {
    
    filterProducts('all');
}

window.addToCart = (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
};