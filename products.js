// Extensive product data with online images
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "electronics",
        rating: 4.8,
        stock: 15
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Fitness tracker with heart rate monitor and GPS",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "electronics",
        rating: 4.5,
        stock: 8
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable waterproof speaker with 20W output",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "electronics",
        rating: 4.3,
        stock: 12
    },
    {
        id: 4,
        name: "Cotton T-Shirt",
        description: "Premium quality cotton t-shirt in various colors",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "clothing",
        rating: 4.2,
        stock: 25
    },
    {
        id: 5,
        name: "Denim Jeans",
        description: "Classic fit denim jeans with stretch fabric",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "clothing",
        rating: 4.6,
        stock: 10
    },
    {
        id: 6,
        name: "Ceramic Cookware Set",
        description: "10-piece non-stick ceramic cookware set",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "home",
        rating: 4.7,
        stock: 5
    },
    {
        id: 7,
        name: "Skincare Set",
        description: "Complete daily skincare routine set",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "beauty",
        rating: 4.9,
        stock: 18
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with charging case",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "electronics",
        rating: 4.4,
        stock: 7
    },
    {
        id: 9,
        name: "Smartphone",
        description: "Latest model smartphone with triple camera",
        price: 799.99,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "electronics",
        rating: 4.8,
        stock: 3
    },
    {
        id: 10,
        name: "Laptop Backpack",
        description: "Ergonomic backpack with USB charging port",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "electronics",
        rating: 4.5,
        stock: 20
    },
    {
        id: 11,
        name: "Cotton Dress",
        description: "Summer floral print cotton dress",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "clothing",
        rating: 4.3,
        stock: 14
    },
    {
        id: 12,
        name: "Air Fryer",
        description: "Digital air fryer with multiple cooking functions",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        category: "home",
        rating: 4.7,
        stock: 9
    }
];

// Load products when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    displayAllProducts();
    setupEventListeners();
});

// Display all products
function displayAllProducts() {
    const productsContainer = document.getElementById('allProducts');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.stock < 5 ? '<span class="stock-badge">Low Stock</span>' : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>${product.rating}</span>
                </div>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }

    return starsHTML;
}

// Add product to cart
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    // In a real app, you would update the cart here
    alert(`${product.name} added to cart!`);
    
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const currentCount = parseInt(cartCount.textContent) || 0;
        cartCount.textContent = currentCount + 1;
    }
}

// Setup event listeners for filters
function setupEventListeners() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (sortBy) {
        sortBy.addEventListener('change', sortProducts);
    }
}

// Filter products by category
function filterProducts() {
    const category = this.value;
    const productsContainer = document.getElementById('allProducts');
    
    if (category === 'all') {
        displayAllProducts();
        return;
    }

    const filteredProducts = products.filter(product => product.category === category);
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>${product.rating}</span>
                </div>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Re-add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Sort products
function sortProducts() {
    const sortValue = this.value;
    let sortedProducts = [...products];

    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            // Assuming newer products have higher IDs
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Default sorting (featured)
            break;
    }

    const productsContainer = document.getElementById('allProducts');
    productsContainer.innerHTML = '';

    sortedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">
                    ${generateStarRating(product.rating)}
                    <span>${product.rating}</span>
                </div>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Re-add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}