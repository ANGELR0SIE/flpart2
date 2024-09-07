// // Sample product objects
// let products = [
//     {
//         id: 1,
//         name: "vivo T3 Pro 5G (Emerald Green, 128 GB)",
//         rating: 4.6,
//         reviewsCount: 1563,
//         reviewsSummary: "1,563 Ratings & 56 Reviews",
//         ram: 8,
//         rom: 128,
//         screenSize: 6.77,
//         camera: {
//             rear: "50MP + 8MP",
//             front: "16MP"
//         },
//         battery: 5500,
//         processor: "Snapdragon 7 Gen 3 Processor",
//         warranty: "1 Year Warranty on Handset and 6 Months Warranty on Accessories",
//         price: 24999,
//         originalPrice: 29999,
//         discount: 16,
//         delivery: "Free delivery",
//         exchangeOffer: "Upto ₹17,150 Off on Exchange",
//         emi: "No Cost EMI from ₹3,834/month",
//         fAssured: true,
//         isSponsored: true,
//         image: 'https://via.placeholder.com/150'
//     },
//     {
//         id: 2,
//         name: "Samsung Galaxy S21 (Phantom Black, 128 GB)",
//         rating: 4.4,
//         reviewsCount: 265,
//         reviewsSummary: "265 Ratings & 14 Reviews",
//         ram: 12,
//         rom: 128,
//         screenSize: 6.2,
//         camera: {
//             rear: "64MP + 12MP",
//             front: "10MP"
//         },
//         battery: 4000,
//         processor: "Exynos 2100",
//         warranty: "1 Year Warranty",
//         price: 52999,
//         originalPrice: 65999,
//         discount: 20,
//         delivery: "Free delivery",
//         exchangeOffer: "Upto ₹10,000 Off on Exchange",
//         emi: "No Cost EMI from ₹4,500/month",
//         fAssured: true,
//         isSponsored: false,
//         image: 'https://via.placeholder.com/150'
//     },
//     {
//         id: 3,
//         name: "OnePlus 9 (Arctic Sky, 256 GB)",
//         rating: 4.5,
//         reviewsCount: 365,
//         reviewsSummary: "365 Ratings & 25 Reviews",
//         ram: 12,
//         rom: 256,
//         screenSize: 6.55,
//         camera: {
//             rear: "48MP + 50MP + 2MP",
//             front: "16MP"
//         },
//         battery: 4500,
//         processor: "Snapdragon 888",
//         warranty: "1 Year Warranty",
//         price: 49999,
//         originalPrice: 54999,
//         discount: 9,
//         delivery: "Free delivery",
//         exchangeOffer: "Upto ₹8,000 Off on Exchange",
//         emi: "No Cost EMI from ₹4,166/month",
//         fAssured: false,
//         isSponsored: true,
//         image: 'https://via.placeholder.com/150'
//     }
// ];

// const productsPerPage = 24;
// let filteredProducts = [...products];

// // Function to display products
// function displayProducts() {
//     let productContainer = document.getElementById('productContainer');
//     productContainer.innerHTML = '';
//     const displayCount = Math.min(productsPerPage, filteredProducts.length);
//     for (let i = 0; i < displayCount; i++) {
//         const product = filteredProducts[i];
//         productContainer.innerHTML += `
//             <div class="product-card">
//                 ${product.isSponsored ? '<div class="sponsored">Sponsored</div>' : ''}
//                 <img src="${product.image}" alt="${product.name}">
//                 <h4>${product.name}</h4>
//                 <p>Rating: ${product.rating} (${product.reviewsSummary})</p>
//                 <p>${product.ram} GB RAM | ${product.rom} GB ROM</p>
//                 <p>${product.screenSize} inch Display</p>
//                 <p>${product.camera.rear} | ${product.camera.front} Front Camera</p>
//                 <p>${product.battery} mAh Battery</p>
//                 <p>${product.processor}</p>
//                 <p>${product.warranty}</p>
//                 <p>Price: ₹${product.price} <span class="original-price">₹${product.originalPrice}</span> (${product.discount}% off)</p>
//                 <p>${product.delivery}</p>
//                 <p>${product.exchangeOffer}</p>
//                 <p>${product.emi}</p>
//                 ${product.fAssured ? '<div class="fassured">F-Assured</div>' : ''}
//             </div>
//         `;
//     }
// }

// // Function to update the product count and display
// function updateProductCount(searchTerm = '') {
//     const totalProducts = filteredProducts.length;
//     const displayCount = Math.min(productsPerPage, totalProducts);
//     const productCountText = `Showing 1 – ${displayCount} of ${totalProducts} results for "${searchTerm}"`;

//     document.getElementById('productCount').innerText = productCountText;
// }

// // Function to sort products
// function sortProducts(criteria) {
//     if (criteria === 'priceAsc') {
//         filteredProducts.sort((a, b) => a.price - b.price);
//     } else if (criteria === 'priceDesc') {
//         filteredProducts.sort((a, b) => b.price - a.price);
//     } else if (criteria === 'popularity') {
//         filteredProducts.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
//     } else if (criteria === 'newest') {
//         filteredProducts.sort((a, b) => b.id - a.id); // Mock newest by product ID
//     }

//     displayProducts();

//     document.querySelectorAll('.sort-option').forEach(button => button.classList.remove('active'));
//     document.querySelector(`.sort-option[onclick="sortProducts('${criteria}')"]`).classList.add('active');
// }

// // Function to search products
// function searchProducts() {
//     const searchTerm = document.getElementById('searchBar').value.toLowerCase();
//     filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
//     displayProducts();
//     updateProductCount(searchTerm);
// }

// // Function to filter by category
// function filterByCategory(category) {
//     applyFilters();
// }

// // Function to filter by brand
// function filterByBrand(brand) {
//     const checkboxes = document.querySelectorAll('.filter-brand input[type="checkbox"]');
//     filteredProducts = products.filter(product => {
//         const brandCheckbox = [...checkboxes].find(checkbox => checkbox.nextElementSibling.innerText === brand);
//         return brandCheckbox.checked ? product.name.toLowerCase().includes(brand.toLowerCase()) : true;
//     });
//     applyFilters();
// }

// // Function to filter by RAM
// function filterByRam(ram) {
//     const checkboxes = document.querySelectorAll('.filter-ram input[type="checkbox"]');
//     filteredProducts = products.filter(product => {
//         const ramCheckbox = [...checkboxes].find(checkbox => checkbox.nextElementSibling.innerText.includes(ram + ' GB'));
//         return ramCheckbox.checked ? product.ram === ram : true;
//     });
//     applyFilters();
// }

// // Function to filter by rating
// function filterByRating(rating) {
//     const checkboxes = document.querySelectorAll('.filter-rating input[type="checkbox"]');
//     filteredProducts = products.filter(product => {
//         const ratingCheckbox = [...checkboxes].find(checkbox => checkbox.nextElementSibling.innerText.includes(rating + '★'));
//         return ratingCheckbox.checked ? product.rating >= rating : true;
//     });
//     applyFilters();
// }

// // Function to filter by price
// function filterByPrice(minPrice, maxPrice) {
//     filteredProducts = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
//     applyFilters();
// }

// // Function to apply all filters and update the product container
// function applyFilters() {
//     filteredProducts = [...products];
    
//     const selectedCategories = document.querySelectorAll('.filter-category input[type="checkbox"]:checked');
//     selectedCategories.forEach(checkbox => filterByCategory(checkbox.nextElementSibling.innerText));
    
//     const selectedBrands = document.querySelectorAll('.filter-brand input[type="checkbox"]:checked');
//     selectedBrands.forEach(checkbox => filterByBrand(checkbox.nextElementSibling.innerText));
    
//     const selectedRams = document.querySelectorAll('.filter-ram input[type="checkbox"]:checked');
//     selectedRams.forEach(checkbox => filterByRam(parseInt(checkbox.nextElementSibling.innerText)));
    
//     const selectedRatings = document.querySelectorAll('.filter-rating input[type="checkbox"]:checked');
//     selectedRatings.forEach(checkbox => filterByRating(parseInt(checkbox.nextElementSibling.innerText)));
    
//     displayProducts();
//     updateProductCount();
// }

// // Initial Load of Products
// window.onload = function() {
//     displayProducts();
//     updateProductCount('PHONE');
// };

// // Event listeners for sort options
// document.querySelectorAll('.sort-option').forEach(button => {
//     button.addEventListener('click', () => {
//         const criteria = button.getAttribute('onclick').split("'")[1];
//         sortProducts(criteria);
//     });
// });

// // Event listeners for filter checkboxes
// document.querySelectorAll('.filter-brand input[type="checkbox"]').forEach(checkbox => {
//     checkbox.addEventListener('change', applyFilters);
// });
// document.querySelectorAll('.filter-ram input[type="checkbox"]').forEach(checkbox => {
//     checkbox.addEventListener('change', applyFilters);
// });
// document.querySelectorAll('.filter-rating input[type="checkbox"]').forEach(checkbox => {
//     checkbox.addEventListener('change', applyFilters);
// });
// document.getElementById('priceRange').addEventListener('input', function() {
//     const maxPrice = this.value;
//     document.getElementById('maxPrice').innerText = maxPrice;
//     filterByPrice(0, maxPrice);
// });




// Create the necessary HTML elements and append to the DOM
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerHTML = 'Flipkart <span>Explore <strong>Plus</strong></span>';
    
    const searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('id', 'searchBar');
    searchBar.setAttribute('placeholder', 'Search for products, brands, and more');
    
    const searchButton = document.createElement('button');
    searchButton.setAttribute('onclick', 'searchProducts()');
    searchButton.innerText = 'Search';
    
    const headerLinks = document.createElement('div');
    headerLinks.classList.add('header-links');
    headerLinks.innerHTML = `<a href="#">Login</a> <a href="#">Become a Seller</a> <a href="#">Cart</a>`;
    
    header.append(logo, searchBar, searchButton, headerLinks);
    return header;
}

function createNavbar() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    const navLinks = ['Electronics', 'TVs & Appliances', 'Men', 'Women', 'Baby & Kids', 'Home & Furniture', 'Sports, Books & More', 'Flights', 'Offer Zone'];
    navLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = '#';
        a.innerText = link;
        navbar.appendChild(a);
    });
    return navbar;
}

function createFilters() {
    const filters = document.createElement('div');
    filters.classList.add('filters');
    
    const filterCategories = createFilterSection('Categories', [
        { text: 'Mobiles & Accessories', onclick: 'filterByCategory("Mobiles")' },
        { text: 'Mobiles', onclick: 'filterByCategory("Mobiles")' }
    ]);

    const filterPrice = document.createElement('div');
    filterPrice.classList.add('filter-price');
    filterPrice.innerHTML = `
        <h4>Price</h4>
        <input type="range" id="priceRange" min="0" max="100000" step="1000">
        <span>Min: ₹0 - Max: ₹<span id="maxPrice">100000</span></span>
    `;

    const filterBrands = createFilterSection('Brand', [
        { text: 'Apple', onclick: 'filterByBrand("Apple")' },
        { text: 'Samsung', onclick: 'filterByBrand("Samsung")' },
        { text: 'Google', onclick: 'filterByBrand("Google")' }
    ]);

    const filterRatings = createFilterSection('Customer Ratings', [
        { text: '4★ & above', onclick: 'filterByRating(4)' },
        { text: '3★ & above', onclick: 'filterByRating(3)' }
    ]);

    const filterRAM = createFilterSection('RAM', [
        { text: '4 GB', onclick: 'filterByRam(4)' },
        { text: '6 GB', onclick: 'filterByRam(6)' }
    ]);
    
    filters.append(filterCategories, filterPrice, filterBrands, filterRatings, filterRAM);
    return filters;
}

function createFilterSection(title, items) {
    const section = document.createElement('div');
    section.classList.add('filter-section');
    const header = document.createElement('h4');
    header.innerText = title;
    section.appendChild(header);

    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" onclick="${item.onclick}"> ${item.text}`;
        ul.appendChild(li);
    });
    
    section.appendChild(ul);
    return section;
}

function createSortBySection() {
    const sortBySection = document.createElement('div');
    sortBySection.classList.add('sort-by-section');
    
    const sortByInfo = document.createElement('div');
    sortByInfo.classList.add('sort-by-info');
    
    const productCount = document.createElement('p');
    productCount.setAttribute('id', 'productCount');
    productCount.innerText = 'Showing 1 – 24 of 0 results for "PHONE"';
    
    const sortOptions = document.createElement('div');
    sortOptions.classList.add('sort-options');
    sortOptions.innerHTML = `
        <span>Sort By</span>
        <button class="sort-option active" onclick="sortProducts('relevance')">Relevance</button>
        <button class="sort-option" onclick="sortProducts('popularity')">Popularity</button>
        <button class="sort-option" onclick="sortProducts('priceAsc')">Price -- Low to High</button>
        <button class="sort-option" onclick="sortProducts('priceDesc')">Price -- High to Low</button>
        <button class="sort-option" onclick="sortProducts('newest')">Newest First</button>
    `;
    
    sortByInfo.append(productCount, sortOptions);
    sortBySection.appendChild(sortByInfo);
    return sortBySection;
}

function createProductDisplay() {
    const productDisplay = document.createElement('div');
    productDisplay.classList.add('product-display');
    
    const breadcrumbs = document.createElement('div');
    breadcrumbs.classList.add('breadcrumbs');
    breadcrumbs.innerText = 'Home > Mobiles & Accessories > Mobiles';
    
    const sortBySection = createSortBySection();
    const productContainer = document.createElement('div');
    productContainer.setAttribute('id', 'productContainer');
    productContainer.classList.add('product-list');
    
    productDisplay.append(breadcrumbs, sortBySection, productContainer);
    return productDisplay;
}

function initializePage() {
    const mainContainer = document.getElementById('main-container');
    mainContainer.append(createHeader(), createNavbar(), createFilters(), createProductDisplay());
}

initializePage();

// Define products and necessary functions
let products = [
    {
        name: 'Apple iPhone 13',
        rating: 4.8,
        reviewsSummary: '2,500 reviews',
        ram: 4,
        rom: 128,
        screenSize: 6.1,
        camera: { rear: '12MP + 12MP', front: '12MP' },
        battery: 3095,
        processor: 'A15 Bionic Chip',
        warranty: '1 Year Warranty',
        price: 69999,
        originalPrice: 79999,
        discount: 13,
        delivery: 'Free Delivery by Tomorrow',
        exchangeOffer: 'Up to ₹15,000 off on Exchange',
        emi: 'EMI starts at ₹2,199',
        fAssured: true,
        isSponsored: false,
        image: 'https://via.placeholder.com/300x400.png?text=Apple+iPhone+13'
    },
    {
        name: 'Samsung Galaxy S21',
        rating: 4.6,
        reviewsSummary: '1,800 reviews',
        ram: 8,
        rom: 256,
        screenSize: 6.2,
        camera: { rear: '64MP + 12MP', front: '10MP' },
        battery: 4000,
        processor: 'Exynos 2100',
        warranty: '1 Year Warranty',
        price: 49999,
        originalPrice: 69999,
        discount: 28,
        delivery: 'Free Delivery by Tomorrow',
        exchangeOffer: 'Up to ₹12,000 off on Exchange',
        emi: 'EMI starts at ₹1,499',
        fAssured: true,
        isSponsored: true,
        image: 'https://via.placeholder.com/300x400.png?text=Samsung+Galaxy+S21'
    },
    {
        name: 'Google Pixel 6',
        rating: 4.7,
        reviewsSummary: '1,000 reviews',
        ram: 8,
        rom: 128,
        screenSize: 6.4,
        camera: { rear: '50MP + 12MP', front: '8MP' },
        battery: 4614,
        processor: 'Google Tensor',
        warranty: '1 Year Warranty',
        price: 64999,
        originalPrice: 71999,
        discount: 10,
        delivery: 'Free Delivery by Tomorrow',
        exchangeOffer: 'Up to ₹10,000 off on Exchange',
        emi: 'EMI starts at ₹1,899',
        fAssured: true,
        isSponsored: false,
        image: 'https://via.placeholder.com/300x400.png?text=Google+Pixel+6'
    }
];

function displayProducts() {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';
    for (const product of products) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.src = product.image;
        
        const h4 = document.createElement('h4');
        h4.innerText = product.name;
        
        const p1 = document.createElement('p');
        p1.innerHTML = `${product.rating} ★ | ${product.reviewsSummary}`;
        
        const p2 = document.createElement('p');
        p2.innerHTML = `<strong>${product.ram}GB RAM | ${product.rom}GB ROM | ${product.screenSize}" Display</strong>`;
        
        const p3 = document.createElement('p');
        p3.innerText = `${product.camera.rear} Rear Camera | ${product.camera.front} Front Camera`;
        
        const p4 = document.createElement('p');
        p4.innerText = `Battery: ${product.battery} mAh`;
        
        const p5 = document.createElement('p');
        p5.innerText = `Processor: ${product.processor}`;
        
        const p6 = document.createElement('p');
        p6.innerText = `Warranty: ${product.warranty}`;
        
        const p7 = document.createElement('p');
        p7.classList.add('fassured');
        p7.innerText = product.fAssured ? 'Flipkart Assured' : '';
        
        const price = document.createElement('p');
        price.innerHTML = `₹${product.price} <span class="original-price">₹${product.originalPrice}</span> (${product.discount}% off)`;
        
        const delivery = document.createElement('p');
        delivery.innerText = product.delivery;
        
        const exchangeOffer = document.createElement('p');
        exchangeOffer.innerText = product.exchangeOffer;
        
        const emi = document.createElement('p');
        emi.innerText = product.emi;
        
        productCard.append(img, h4, p1, p2, p3, p4, p5, p6, p7, price, delivery, exchangeOffer, emi);
        productContainer.appendChild(productCard);
    }
}

displayProducts();
