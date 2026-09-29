/**
 * VENUS FOOTWEAR — SHARED APPLICATION LOGIC & STORE ENGINE
 * Est. 1982 | Multi-Page Architecture
 */

// --- 1. Master Product Catalog Database ---
const PRODUCTS = [
  {
    id: 'v-001',
    name: 'Venus UltraCush Ortho PU Chappal',
    gender: 'Men',
    category: 'PU Chappal',
    occasion: 'Comfort',
    price: 449,
    origPrice: 599,
    discount: '25% OFF',
    rating: 4.9,
    reviews: 2450,
    tag: 'Bestseller',
    badge: 'Doctor Recommended',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'High-density anatomic PU sole with acupressure nodes designed to eliminate heel pain and fatigue during long standing hours. Engineered with dual-density cushioning that retains flex for over 500,000 steps.',
    specs: {
      'Sole Material': 'Virgin Direct-Injected Polyurethane (PU)',
      'Upper Material': 'Soft Synthetic Rexine with Comfort Padding',
      'Insole': 'Orthopedic Deep Heel Cup & Arch Cushion',
      'Closure': 'Slip-On Ergonomic Thong',
      'Water Resistance': 'Splash Resistant / Easy Wash',
      'Warranty': '6 Months Manufacturing Warranty'
    },
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 'v-002',
    name: 'Venus CloudWalk Women Wedge Sandal',
    gender: 'Women',
    category: 'Sandals',
    occasion: 'Festive',
    price: 399,
    origPrice: 549,
    discount: '27% OFF',
    rating: 4.8,
    reviews: 1820,
    tag: 'Top Rated',
    badge: 'Festive Favorite',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Soft cushioned arch support with subtle metallic gold straps. Ideal for festive gatherings, weddings, and long family celebrations without foot strain.',
    specs: {
      'Sole Material': 'Lightweight Shock-Absorbing PU Wedge',
      'Heel Height': '1.5 Inches Ergonomic Slope',
      'Upper Material': 'Skin-Friendly Gold Finished Leatherette',
      'Closure': 'Elasticated Backstrap',
      'Warranty': '6 Months Manufacturing Warranty'
    },
    sizes: [4, 5, 6, 7, 8]
  },
  {
    id: 'v-003',
    name: 'Venus ToughShield School Shoe (Lace/Velcro)',
    gender: 'Kids',
    category: 'School Shoes',
    occasion: 'Work',
    price: 349,
    origPrice: 449,
    discount: '22% OFF',
    rating: 4.9,
    reviews: 3100,
    tag: 'High Durability',
    badge: 'School Special',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Anti-tear breathable synthetic upper with scuff-resistant vulcanized rubber sole built to endure active school days, playground runs, and morning assemblies.',
    specs: {
      'Sole Material': 'Non-Marking Vulcanized Rubber',
      'Toe Protection': 'Reinforced Scuff-Resistant Bumper',
      'Upper Material': 'Breathable Uniform Grade Synthetic Leather',
      'Insole': 'Anti-Bacterial Cushioned EVA Footbed',
      'Closure': 'Easy Velcro / Lace Combo'
    },
    sizes: [1, 2, 3, 4, 5, 6]
  },
  {
    id: 'v-004',
    name: 'Venus RuggedGrip Men Floater Sandal',
    gender: 'Men',
    category: 'Sandals',
    occasion: 'Comfort',
    price: 529,
    origPrice: 699,
    discount: '24% OFF',
    rating: 4.7,
    reviews: 940,
    tag: 'All-Terrain',
    badge: 'Outdoor Ready',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Tri-strap adjustable hook-and-loop closure with shock-absorbing EVA footbed and deep tread pattern for maximum slip resistance on uneven roads.',
    specs: {
      'Sole Material': 'Dual-Density TPR & EVA Lug Sole',
      'Straps': 'Quick-Dry Nylon Webbing with Padded Lining',
      'Adjustability': '3-Point Velcro Fit System'
    },
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 'v-005',
    name: 'Venus AirLite EVA Featherweight Clogs',
    gender: 'Men',
    category: 'EVA',
    occasion: 'Monsoon',
    price: 299,
    origPrice: 399,
    discount: '25% OFF',
    rating: 4.6,
    reviews: 620,
    tag: 'Ultralight',
    badge: 'Waterproof',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80'
    ],
    description: '100% waterproof injection-molded EVA with ventilated drainage ports. Dries instantly and weighs under 140 grams per shoe.',
    specs: {
      'Material': '100% Closed-Cell Virgin EVA Foam',
      'Weight': '135g Approx per shoe',
      'Features': 'Pivoting Heel Strap, Non-Slip Outsole'
    },
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 'v-006',
    name: 'Venus Heritage Pure Rubber Hawai Flip-Flop',
    gender: 'Men',
    category: 'Hawai',
    occasion: 'Comfort',
    price: 199,
    origPrice: 249,
    discount: '20% OFF',
    rating: 4.8,
    reviews: 5400,
    tag: 'Classic Since 1982',
    badge: 'Pure Rubber',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'India’s legendary vulcanized virgin rubber chappal. Supple, non-skid, crack-resistant strap, and built to survive years of daily use.',
    specs: {
      'Sole Material': '100% Natural Vulcanized Rubber',
      'Strap': 'Flexible High-Tensile Rubber V-Strap',
      'Durability': 'High Resistance to Heat & Rough Surfaces'
    },
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 'v-007',
    name: 'Venus OrthoStep Women House Slides',
    gender: 'Women',
    category: 'PU Chappal',
    occasion: 'Comfort',
    price: 369,
    origPrice: 499,
    discount: '26% OFF',
    rating: 4.9,
    reviews: 1430,
    tag: 'Doctor Recommended',
    badge: 'Arch Relief',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Special dual-density PU footbed recommended for plantar fasciitis, diabetic feet, and all-day home mobility.',
    specs: {
      'Sole': 'Super Soft Micro-Cellular PU',
      'Footbed': 'Ergonomic Arch Support & Heel Cup',
      'Upper': 'Soft Padded Wide Band'
    },
    sizes: [4, 5, 6, 7, 8]
  },
  {
    id: 'v-008',
    name: 'Venus AquaShield PVC Rain Sandals',
    gender: 'Kids',
    category: 'PVC',
    occasion: 'Monsoon',
    price: 249,
    origPrice: 329,
    discount: '24% OFF',
    rating: 4.7,
    reviews: 810,
    tag: '100% Waterproof',
    badge: 'Monsoon Ready',
    image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Flexible non-toxic PVC straps with soft inner lining preventing blisters during wet monsoon school walks.',
    specs: {
      'Material': 'Virgin Grade Flexible PVC',
      'Sole Pattern': 'Deep Water Channeling Tread',
      'Closure': 'Buckle & Snap Lock'
    },
    sizes: [1, 2, 3, 4, 5]
  },
  {
    id: 'v-009',
    name: 'Venus ActiveFlex Men Textile Walking Shoes',
    gender: 'Men',
    category: 'Textile',
    occasion: 'Work',
    price: 599,
    origPrice: 799,
    discount: '25% OFF',
    rating: 4.8,
    reviews: 1120,
    tag: 'Breathable Mesh',
    badge: 'Lightweight',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Engineered knit upper with memory foam insole for morning walks, gym workouts, and active work shifts.',
    specs: {
      'Upper': '3D Multi-Weave Breathable Textile Mesh',
      'Midsole': 'FeatherLite Rebound EVA',
      'Outsole': 'Rubber Traction Grippers'
    },
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 'v-010',
    name: 'Venus Pastel Bloom Kids Hawai Chappal',
    gender: 'Kids',
    category: 'Hawai',
    occasion: 'Comfort',
    price: 169,
    origPrice: 219,
    discount: '22% OFF',
    rating: 4.9,
    reviews: 950,
    tag: 'Fun Colors',
    badge: 'Kids Soft',
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format&fit=crop&q=80'
    ],
    description: 'Bright dual-tone natural rubber flip-flop with extra-soft toe post for delicate young feet.',
    specs: {
      'Sole': 'Natural Bubble-Cushion Rubber',
      'Print': 'Non-Toxic Anti-Fade Color Pigments'
    },
    sizes: [11, 12, 13, 1, 2, 3]
  }
];

// --- 2. Shared Storage & State ---
const state = {
  cart: JSON.parse(localStorage.getItem('venus_cart')) || [
    {
      id: 'v-001',
      name: 'Venus UltraCush Ortho PU Chappal',
      price: 449,
      origPrice: 599,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80',
      category: 'PU Chappal',
      size: 8,
      qty: 1
    }
  ],
  wishlist: new Set(JSON.parse(localStorage.getItem('venus_wishlist')) || []),
  isCouponApplied: localStorage.getItem('venus_coupon') === 'true',
  selectedSize: null
};

function saveState() {
  localStorage.setItem('venus_cart', JSON.stringify(state.cart));
  localStorage.setItem('venus_wishlist', JSON.stringify(Array.from(state.wishlist)));
  localStorage.setItem('venus_coupon', state.isCouponApplied ? 'true' : 'false');
  updateCartUI();
}

// --- 3. Cart Drawer & Global Actions ---
function updateCartUI() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Update badges
  document.querySelectorAll('#cartCount, #mobileCartCount, #cartTotalItems').forEach(el => {
    if (el) el.textContent = totalQty;
  });

  document.querySelectorAll('#wishlistCount').forEach(el => {
    if (el) el.textContent = state.wishlist.size;
  });

  // Free shipping threshold (₹499)
  const threshold = 499;
  const shippingFill = document.getElementById('shippingProgressFill');
  const shippingMsg = document.getElementById('shippingMsg');
  if (shippingFill && shippingMsg) {
    if (subtotal >= threshold || totalQty === 0) {
      shippingFill.style.width = '100%';
      shippingMsg.innerHTML = totalQty === 0 ? 'Add items to unlock <strong>FREE Delivery!</strong>' : '🎉 You unlocked <strong>FREE Shipping!</strong>';
    } else {
      const diff = threshold - subtotal;
      const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
      shippingFill.style.width = `${pct}%`;
      shippingMsg.innerHTML = `Add <strong>₹${diff}</strong> more for <strong>FREE Delivery!</strong>`;
    }
  }

  // Summary lines
  const subtotalEl = document.getElementById('cartSubtotal');
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  
  let discountAmount = 0;
  const discountLine = document.getElementById('discountLine');
  const cartDiscount = document.getElementById('cartDiscount');
  if (state.isCouponApplied && subtotal > 0) {
    discountAmount = Math.round(subtotal * 0.10);
    if (discountLine) discountLine.style.display = 'flex';
    if (cartDiscount) cartDiscount.textContent = `-₹${discountAmount}`;
  } else {
    if (discountLine) discountLine.style.display = 'none';
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);
  const finalTotalEl = document.getElementById('cartFinalTotal');
  if (finalTotalEl) finalTotalEl.textContent = `₹${finalTotal}`;

  // Render items in slide drawer if present
  const cartItemsList = document.getElementById('cartItemsList');
  if (cartItemsList) {
    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>Your shopping bag is empty</h4>
          <p style="font-size: 0.85rem; margin-top: 6px;">Explore our comfortable range and step into everyday comfort.</p>
          <a href="shop.html" class="btn btn-primary" style="margin-top: 20px;" onclick="closeCart()">
            Shop Catalog
          </a>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = state.cart.map((item, idx) => `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h5><a href="product.html?id=${item.id}">${item.name}</a></h5>
            <div class="item-meta">Size: <strong>${item.size} (UK)</strong> | ₹${item.price} each</div>
            <div class="cart-qty-control">
              <button onclick="updateCartItemQty(${idx}, -1)" aria-label="Decrease quantity">-</button>
              <span>${item.qty}</span>
              <button onclick="updateCartItemQty(${idx}, 1)" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; height: 100%;">
            <button class="cart-item-remove" onclick="removeCartItem(${idx})" title="Remove">
              <i class="fa-solid fa-trash-can"></i>
            </button>
            <span class="cart-item-price">₹${item.price * item.qty}</span>
          </div>
        </div>
      `).join('');
    }
  }
}

function addToCart(product, size = null) {
  const chosenSize = size || (product.sizes ? product.sizes[0] : 7);
  const existingIndex = state.cart.findIndex(item => item.id === product.id && item.size === chosenSize);

  if (existingIndex > -1) {
    state.cart[existingIndex].qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      origPrice: product.origPrice,
      image: product.image,
      category: product.category,
      size: chosenSize,
      qty: 1
    });
  }

  saveState();
  showToast(`Added "${product.name}" (Size ${chosenSize}) to Bag!`);
}

function updateCartItemQty(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveState();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveState();
  showToast('Item removed from bag.');
}

function applyCoupon() {
  const couponInput = document.getElementById('couponInput');
  if (!couponInput) return;
  const code = couponInput.value.trim().toUpperCase();
  if (code === 'VENUS10') {
    state.isCouponApplied = true;
    saveState();
    showToast('Coupon "VENUS10" applied! 10% Extra Discount saved.');
  } else if (code === '') {
    state.isCouponApplied = false;
    saveState();
  } else {
    showToast('Invalid coupon code. Try VENUS10');
  }
}

function toggleWishlist(productId) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast('Removed from your Wishlist.');
  } else {
    state.wishlist.add(productId);
    showToast('Saved to your Wishlist ❤️');
  }
  saveState();
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof renderShopCatalog === 'function') renderShopCatalog();
}

function openCart() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function openSearch() {
  const searchDrawer = document.getElementById('searchDrawer');
  const siteSearchInput = document.getElementById('siteSearchInput');
  if (searchDrawer) {
    searchDrawer.classList.add('active');
    searchDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (siteSearchInput) setTimeout(() => siteSearchInput.focus(), 150);
  }
}

function closeSearch() {
  const searchDrawer = document.getElementById('searchDrawer');
  if (searchDrawer) {
    searchDrawer.classList.remove('active');
    searchDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function applySearchQuery(query) {
  const siteSearchInput = document.getElementById('siteSearchInput');
  if (siteSearchInput) {
    siteSearchInput.value = query;
    handleGlobalSearch(query);
  }
}

function handleGlobalSearch(query) {
  const searchResults = document.getElementById('searchResults');
  if (!searchResults) return;
  if (!query.trim()) {
    searchResults.innerHTML = '';
    return;
  }

  const matches = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.gender.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<p style="padding: 16px; color: var(--color-text-muted); text-align: center;">No footwear found for "${query}"</p>`;
  } else {
    searchResults.innerHTML = matches.map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="search-result-info">
          <h5>${p.name}</h5>
          <span>₹${p.price} <small style="color: var(--color-text-light); text-decoration: line-through;">₹${p.origPrice}</small></span>
        </div>
      </a>
    `).join('');
  }
}

// Toast
let toastTimeout = null;
function showToast(message) {
  const toastBox = document.getElementById('toastBox');
  const toastMessage = document.getElementById('toastMessage');
  if (!toastBox || !toastMessage) return;

  toastMessage.textContent = message;
  toastBox.classList.add('active');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastBox.classList.remove('active');
  }, 3000);
}

function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input && input.value) {
    showToast('🎉 ₹100 Coupon Code "WELCOME100" sent to your email!');
    e.target.reset();
  }
}

// Global Nav & Keyboard Bindings
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();

  // Header and Drawer Triggers
  document.getElementById('cartTriggerBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartDrawerOverlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'cartDrawerOverlay') closeCart();
  });

  document.getElementById('searchTriggerBtn')?.addEventListener('click', openSearch);
  document.getElementById('closeSearchBtn')?.addEventListener('click', closeSearch);
  document.getElementById('searchDrawer')?.addEventListener('click', (e) => {
    if (e.target.id === 'searchDrawer') closeSearch();
  });

  const siteSearchInput = document.getElementById('siteSearchInput');
  siteSearchInput?.addEventListener('input', (e) => handleGlobalSearch(e.target.value));

  // Mobile Navigation
  const mobileNavBtn = document.getElementById('mobileNavBtn');
  const closeNavBtn = document.getElementById('closeNavBtn');
  const mainNav = document.getElementById('mainNav');
  mobileNavBtn?.addEventListener('click', () => mainNav?.classList.add('active'));
  closeNavBtn?.addEventListener('click', () => mainNav?.classList.remove('active'));

  // ESC Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeSearch();
      mainNav?.classList.remove('active');
    }
  });
});
