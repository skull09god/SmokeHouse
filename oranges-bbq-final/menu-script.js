// Complete mapped logical section schemas parsed out structural database architecture
const menuSections = [
  {
    id: 'sec-seafood',
    label: 'Seafood Section',
    img: 'assets/pages/seafood.jpeg',
    items: [
      { id: 'sf-calamari', title: 'Crispy Calamari Rings', price: 349, desc: 'Crispy fried calamari served with signature tartar sauce.' },
      { id: 'sf-popcorn', title: 'Prawn Popcorn', price: 399, desc: 'Crispy bite-sized prawns tossed with house spices & sweet chili dip.' },
      { id: 'sf-garlic', title: 'Garlic Butter Prawns', price: 499, desc: 'Sautéed fresh prawns drowned in garlic butter fusion & fine aromatics.' },
      { id: 'sf-platter', title: 'Premium Seafood Platter', price: 1299, desc: 'Grilled prawns, calamari rings, fish fillet, garlic bread, chips & custom house dips.' }
    ]
  },
  {
    id: 'sec-buffet',
    label: 'Barbeque Buffet',
    img: 'assets/pages/buffet.jpeg',
    items: [
      { id: 'bf-veg', title: 'Unlimited Veg Buffet', price: 799, desc: '65+ items featuring Honey Chili Pineapple, Labnish Mushroom, Naan, Mains & Desserts.' },
      { id: 'bf-nonveg', title: 'Unlimited Non-Veg Buffet', price: 899, desc: '65+ items including BBQ Chicken Tikka, Coastal Prawns, Chicken Dum Biryani & Mutton Rogan Josh.' },
      { id: 'bf-kids', title: 'Kids Buffet (5 to 10 Years)', price: 450, desc: 'Child-friendly custom dynamic variations of our house live grill buffet catalog layout.' }
    ]
  },
  {
    id: 'sec-pasta',
    label: 'Pasta Section',
    img: 'assets/pages/pasta.jpeg',
    items: [
      { id: 'ps-aglio', title: 'Pasta Aglio Olio (Veg)', price: 249, desc: 'Olive oil,  garlic, chilli flakes,herbes & parmesan.' },
      { id: 'ps-arrabbiata', title: 'Pasta Arrabbiata (Veg)', price: 279, desc: 'Spicy tomato sauce with herbs & parmesan.' },
      { id: 'ps-alfredo', title: 'Pasta Alfredo (Chicken)', price: 349, desc: 'Creamy white sauce with parmesan &herbs.' },
      {id: 'ps-napoli', title: 'Pasta Napoli (Veg/Chicken)', price: 279||329, desc: 'Classic tomato basil sauce with parmesan.' },
      { id: 'ps-primavera', title: 'Pasta Arrabbiata (Veg)', price: 299, desc: 'Pasta with mixed vegetables in a light creamy or tomato sauce.' },
    ]
  },
  {
    id: 'sec-soups',
    label: 'Soups & Warm Bowls',
    img: 'assets/pages/soups.jpeg',
    items: [
      { id: 'sp-clear', title: 'Clear Soup', price: 140/160, desc: 'Fresh veggies/Chicken cubes simmered in vegetable/chicken broth and served hot.' },
      { id: 'sp-sweetcorn', title: 'Sweet Corn Soup (Veg)', price: 140/160, desc: 'Creamy light corn blend with assorted vegetables/chicken.' },
      { id: 'sp-hot&sour', title:'Hot & Sour Soup', price: 140/160, desc: 'Mixed vegetable/chicken in a spicy soya-based soup.' },
      { id: 'sp-Manchow', title: 'Manchow Soup', price: 140/160, desc: 'Thick vegetable/chicken soup served along crispy fried noodles.' },
      { id: 'sp-Tomato/Mushroom/Vegetable', title: 'Cream of Tomato/Mushroom/Vegetable', price: 140/160, desc: 'Thick creamy soup served with your choice.' }

    ]
  },
  {
    id: 'sec-mocktails',
    label: 'Mocktails & Beverages',
    img: 'assets/pages/mocktail.jpeg',
    items: [
      { id: 'mk-mojito', title: 'Virgin Mojito', price: 149, desc: 'Classic refreshing blend of crushed mint leaves, fresh lime wedges, simple syrup & sparkling soda.' },
      { id: 'mk-blue', title: 'Blue Lagoon Cooler', price: 149, desc: 'Zesty blue curacao infusion mixed with fresh lemon squeeze topped off with clear lemonade.' },
      { id: 'mk-apple', title: 'Green Apple Cooler', price: 149, desc: 'Crisp green apple syrup layers dynamic tracking balanced out with freshly torn field mint leaves.' }
    ]
  },
  {
    id: 'sec-pizza-burger',
    label: 'Pizzas & Burgers',
    img: 'assets/pages/pizza.jpeg',
    items: [
      { id: 'pz-margherita', title: 'Classic Margherita Pizza (Regular)', price: 299, desc: 'Woodfired fresh tomato baseline sauce layout loaded heavily with artisanal mozzarella & fresh basil.' },
      { id: 'pz-bbqchick', title: 'BBQ Chicken Pizza (Large)', price: 649, desc: 'House smoked tender chicken chunks, red onions, grilled capsicum over premium sweet BBQ baseline drizzle.' },
      { id: 'bg-orange', title: 'Orange Special BBQ Burger', price: 249, desc: 'Seared chicken patty, crispy fried onion rings layer, melted cheddar slice, house signature master sauce.' }
    ]
  },
  {
    id: 'sec-continental',
    label: 'Continental Menu',
    img: 'assets/pages/continental.jpeg',
    items: [
      { id: 'cn-lasagna', title: 'Baked Vegetarian Lasagna', price: 349, desc: 'Layered sheets of pasta loaded with minced garden vegetables, rich pomodoro, creamy bechamel & grilled cheese.' },
      { id: 'cn-steak', title: 'Grilled Chicken with Herb Sauce', price: 449, desc: 'Juicy skillet grilled breast fillet served with dynamic seasonal vegetables side & rich herb emulsion.' }
    ]
  },
  {
    id: 'sec-sandwiches',
    label: 'Club Sandwiches',
    img: 'assets/pages/combo.jpeg',
    items: [
      { id: 'sd-classic', title: 'Classic Club Sandwich Combo', price: 399, desc: 'Triple decker toast stuffed with chicken salad, fried egg, lettuce, tomato & mayo. Includes fries + drink.' },
      { id: 'sd-bbq', title: 'BBQ Club Sandwich Combo', price: 429, desc: 'Smoked hickory BBQ shredded chicken chunks layered with crisp hickory bacon, cheddar & house spreads.' }
    ]
  },
  {
    id: 'sec-combos',
    label: 'Rice & Bread Combos',
    img: 'assets/pages/combos.jpeg',
    items: [
      { id: 'cb-bbqbowl', title: 'Smoked BBQ Chicken Rice Bowl', price: 449, desc: 'Charcoal grilled chicken thighs sliced over butter-steeped herb rice alongside rich peppercorn pan sauce sauce.' },
      { id: 'cb-stroganoff', title: 'Chicken Stroganoff Combo', price: 499, desc: 'Creamy mushroom and chicken stroganoff reduction paired with buttered herb rice lines and toasted garlic bread.' }
    ]
  },
  {
    id: 'sec-platters',
    label: 'BBQ Platter Section',
    img: 'assets/pages/platter.jpeg',
    items: [
      { id: 'pl-classic', title: 'Classic BBQ Platter (Serves 1-2)', price: 699, desc: '4 BBQ chicken Wings, 4 Tikka pcs, 2 Seekh Kebabs, Grilled Sausages, House Fries, Buttered Sweet Corn & Mint dip.' },
      { id: 'pl-premium', title: 'Premium Meat Feast (Serves 3-4)', price: 1999, desc: 'Hickory BBQ chicken quarters, tender lamb chops, wings, seekh, tikkas, smoked sausages, sides & 4 master sauces.' },
      { id: 'pl-veg', title: 'Vegetarian BBQ Platter (Serves 1-2)', price: 699, desc: 'Skewered paneer tikka blocks, herbed stuffed mushrooms, woodfired grilled pineapple rings, baby corn skewers.' },
      { id: 'pl-special', title: 'Smoke House Special Platter (Serves 2-3)', price: 1299, desc: '4 BBQ chicken Wings, 6 Tikka pcs, 4 Lamb Seekh Kebabs, 4 Fish Tikka,6 Grilled Prawns, French Fries, Onion Rings, Grilled Vegetables,Garlic Bread & Three Signature Dips.' },
      { id: 'pl-seafood', title: 'Seafood Grilled Platter (Serves 2-3)', price: 1599, desc: 'Grilled Prawns , Fish Filled, Calamari Rings , Garlic Butter, Vegetables ,Lemon Butter Sauce & Garlic Bread.' },
      { id: 'pl-family', title: 'Family BBQ Feast (Serves 4-5)', price: 3499, desc: 'Whole BBQ Chicken, chicken Wings, chicken Tikka,Lamb Chops, Fish Tikka , Grilled Prawns , Sausages , Fries ,Onion Rings , Corn on the Cob,Garlic Bread , Coleslaw , Four Signature Sauces , Soft Drinks(4).' }
    ]
  }
];

// Shopping Cart Core Tracking Memory Mapping Schema Arrays
let shoppingCart = {};

// UI References Linkers
const categoryGrid = document.getElementById('categoryCards');
const viewer = document.getElementById('sectionViewer');
const currentPaper = document.getElementById('currentPaper');
const turningPaper = document.getElementById('turningPaper');
const viewerCount = document.getElementById('viewerCount');
const selectorItemsList = document.getElementById('selectorItemsList');
const sectionBook = document.getElementById('sectionBook');

// Mobile Menu References
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

let activeIndex = 0;
let isTurning = false;

// Mobile Navigation Toggle Controller Engine
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close navigation automatically upon link routing clicks
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Initial Grid Generator Execution
function renderCategoryTrackCards() {
  categoryGrid.innerHTML = menuSections.map((section, idx) => `
    <article class="page-card" onclick="openSectionByIndex(${idx})">
      <div class="page-thumb">
        <img src="${section.img}" alt="${section.label}" loading="lazy" />
      </div>
      <div class="page-card-footer">
        <span class="page-number">${section.label}</span>
        <span class="page-cta">Explore Section Products →</span>
      </div>
    </article>
  `).join('');
}

// Open Viewer Context Layout Framework Handles System Configurations
function openSectionByIndex(index) {
  if (index < 0 || index >= menuSections.length) return;
  activeIndex = index;
  
  const targetSection = menuSections[activeIndex];
  
  // 1. Core Fix: Clear any stale animation markup remnants first
  turningPaper.innerHTML = '';
  sectionBook.classList.remove('turn-next', 'turn-prev');
  
  // 2. Inject the main image with absolute path stability guarantees
  currentPaper.innerHTML = `<img class="page-image" src="${targetSection.img}" alt="${targetSection.label}" />`;
  
  // 3. Update Text Content Headers
  viewerCount.textContent = targetSection.label.toUpperCase();
  
  // 4. Force list item injection panel update 
  renderItemSelectorsForSection(targetSection);
  
  // 5. Trigger CSS Layout Display State Changes
  viewer.classList.add('open');
  viewer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  
  // 6. Safeguard: Force a quick layout check in case flexbox collapses container box dimensions
  void sectionBook.offsetWidth;
}

// Public context handler helper mapping hook execution strings codes
window.openSection = function(sectionId) {
  const matchedIdx = menuSections.findIndex(s => s.id === sectionId);
  if (matchedIdx !== -1) openSectionByIndex(matchedIdx);
};

function closeViewer() {
  viewer.classList.remove('open');
  viewer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

// Generate the item interactive inputs on right-side column panel
function renderItemSelectorsForSection(section) {
  selectorItemsList.innerHTML = section.items.map(item => {
    const currentQty = shoppingCart[item.id] ? shoppingCart[item.id].qty : 0;
    return `
      <div class="menu-item-row">
        <div class="item-details">
          <div class="item-title-line">
            <h4>${item.title}</h4>
            <span class="item-price">₹${item.price}</span>
          </div>
          <p class="item-desc">${item.desc}</p>
        </div>
        <div class="quantity-control">
          <button class="qty-btn" onclick="modifyCartItemQty('${item.id}', '${escapeHtml(item.title)}', ${item.price}, -1)">-</button>
          <span class="qty-val" id="qty-modal-${item.id}">${currentQty}</span>
          <button class="qty-btn" onclick="modifyCartItemQty('${item.id}', '${escapeHtml(item.title)}', ${item.price}, 1)">+</button>
        </div>
      </div>
    `;
  }).join('');
}

// Mapped Slide Page Navigation Engine controls algorithms
function navigateSectionTrack(step) {
  if (isTurning) return;
  
  const nextIndex = (activeIndex + step + menuSections.length) % menuSections.length;
  isTurning = true;

  // 1. Clear old animation classes to reset the hardware acceleration layer
  sectionBook.classList.remove('turn-next', 'turn-prev');

  // 2. Set up the snapshot: The current image becomes the turning page
  turningPaper.innerHTML = currentPaper.innerHTML;
  
  // 3. Silently load the incoming target image underneath
  currentPaper.innerHTML = `<img class="page-image" src="${menuSections[nextIndex].img}" alt="${menuSections[nextIndex].label}" />`;
  
  // 4. Update the layout text descriptions safely
  viewerCount.textContent = menuSections[nextIndex].label.toUpperCase();
  renderItemSelectorsForSection(menuSections[nextIndex]);

  // 5. Force DOM reflow execution to commit image swaps before executing animation engine
  void sectionBook.offsetWidth;

  // 6. Inject the active directional animation transition class
  sectionBook.classList.add(step > 0 ? 'turn-next' : 'turn-prev');

  // 7. Synchronized with the 0.4s CSS turn transition speed to safely clean up page tracking buffers
  setTimeout(() => {
    activeIndex = nextIndex;
    sectionBook.classList.remove('turn-next', 'turn-prev');
    turningPaper.innerHTML = ''; 
    isTurning = false;
  }, 400); 
}

// Cart Core Computational Mutation Methods Logic Framework
window.modifyCartItemQty = function(id, title, price, adjustment) {
  if (!shoppingCart[id]) {
    shoppingCart[id] = { id, title, price, qty: 0 };
  }
  
  shoppingCart[id].qty += adjustment;
  if (shoppingCart[id].qty <= 0) {
    delete shoppingCart[id];
  }
  
  // Sync current active view instance numbers
  const modalCounterElement = document.getElementById(`qty-modal-${id}`);
  if (modalCounterElement) {
    modalCounterElement.textContent = shoppingCart[id] ? shoppingCart[id].qty : 0;
  }
  
  refreshCartStateStoreUI();
};

function refreshCartStateStoreUI() {
  const drawerItemsContainer = document.getElementById('cartDrawerItems');
  const badgeCount = document.getElementById('cartBadgeCount');
  const subtotalValueLabel = document.getElementById('cartSubtotalValue');
  const errorMsgDiv = document.getElementById('cartValidationError');
  
  let totalItemsCount = 0;
  let computedSubtotal = 0;
  let innerHtmlContentBuffer = '';

  Object.values(shoppingCart).forEach(item => {
    totalItemsCount += item.qty;
    computedSubtotal += (item.price * item.qty);
    innerHtmlContentBuffer += `
      <div class="menu-item-row">
        <div class="item-details">
          <h4>${item.title}</h4>
          <p class="item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</p>
        </div>
        <div class="quantity-control">
          <button class="qty-btn" onclick="modifyCartItemQty('${item.id}', '${escapeHtml(item.title)}', ${item.price}, -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="modifyCartItemQty('${item.id}', '${escapeHtml(item.title)}', ${item.price}, 1)">+</button>
        </div>
      </div>
    `;
  });

  if (badgeCount) badgeCount.textContent = totalItemsCount;
  if (subtotalValueLabel) subtotalValueLabel.textContent = `₹${computedSubtotal}`;
  
  if (drawerItemsContainer) {
    drawerItemsContainer.innerHTML = totalItemsCount === 0 
      ? `<p style="text-align:center; color:var(--muted); margin-top:40px;">Your cart is currently empty.</p>`
      : innerHtmlContentBuffer;
  }

  // Validation checking constraints metrics output layout logic engine guards
  if (errorMsgDiv) {
    if (totalItemsCount > 0 && computedSubtotal < 499) {
      errorMsgDiv.textContent = `Minimum delivery limit is ₹499. Please add ₹${499 - computedSubtotal} more.`;
    } else {
      errorMsgDiv.textContent = '';
    }
  }
}

window.toggleCartDrawer = function() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  const isHidden = drawer.getAttribute('aria-hidden') === 'true';
  
  if (isHidden) {
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
};

// Checkout Final Execution Handler String Compiler
window.processCheckout = function() {
  const cartEntries = Object.values(shoppingCart);
  if (cartEntries.length === 0) {
    alert('Your shopping cart is completely empty!');
    return;
  }

  let totalAmount = 0;
  cartEntries.forEach(i => totalAmount += (i.price * i.qty));

  if (totalAmount < 499) {
    alert('Order total is below the minimum delivery requirement threshold of ₹499.');
    return;
  }

  // Construct raw string representation data matrix map format mapping stream lines
  let waMessageString = `🔥 *ORANGE'S SMOKEHOUSE NEW ORDER* 🔥\n`;
  waMessageString += `====================================\n`;
  waMessageString += `🗺️ _Delivery Requirement: Under 3 KM Route Only_\n\n`;
  
  cartEntries.forEach((item, index) => {
    waMessageString += `*${index + 1}. ${item.title}*\n`;
    waMessageString += `   Qty: ${item.qty}   |   Price: ₹${item.price} × ${item.qty} = *₹${item.price * item.qty}*\n`;
  });

  waMessageString += `====================================\n`;
  waMessageString += `💰 *ORDER SUBTOTAL AMOUNT:* ₹${totalAmount}\n\n`;
  waMessageString += `📍 _Please reply back with your complete street drop-off address to finalize local dispatch routing calculations._`;

  const finalizedTargetUrl = `https://wa.me/916000787211?text=${encodeURIComponent(waMessageString)}`;
  window.open(finalizedTargetUrl, '_blank');
};

// Utilities escaping helpers preventing execution code breaches safely inside system logs
function escapeHtml(string) {
  return String(string).replace(/'/g, "\\'");
}

// Keyboard and button click tracking connection event binding system blocks initialization setup
document.getElementById('prevSection').onclick = () => navigateSectionTrack(-1);
document.getElementById('nextSection').onclick = () => navigateSectionTrack(1);

document.addEventListener('keydown', (e) => {
  if (!viewer.classList.contains('open')) return;
  if (e.key === 'Escape') closeViewer();
  if (e.key === 'ArrowRight') navigateSectionTrack(1);
  if (e.key === 'ArrowLeft') navigateSectionTrack(-1);
});

// Primary Entry Boot Sequence Loop Runs Core Grid Generator Engine directly
renderCategoryTrackCards();
refreshCartStateStoreUI();
