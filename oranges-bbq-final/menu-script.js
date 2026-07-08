// Complete mapped logical section schemas parsed out structural database architecture
const menuSections = [
  {
    id: 'sec-seafood',
    label: 'Seafood Section',
    img: 'assets/pages/seafood.jpeg',
     items: [

    // Seafood Starters
    { id: 'sf-crispy-calamari-rings', title: 'Crispy Calamari Rings (10 pcs)', price: 349, desc: 'Crispy fried calamari served with tartar sauce.' },
    { id: 'sf-prawn-popcorn', title: 'Prawn Popcorn (12 pcs)', price: 399, desc: 'Crispy bite-sized prawns tossed with spices & sweet chilli dip.' },
    { id: 'sf-garlic-butter-prawns', title: 'Garlic Butter Prawns (8 pcs)', price: 499, desc: 'Sautéed prawns in garlic butter & herbs.' },
    { id: 'sf-fish-fingers', title: 'Fish Fingers (6 pcs)', price: 349, desc: 'Golden fried fish fingers served with tartar sauce.' },
    { id: 'sf-tandoori-prawns-starter', title: 'Tandoori Prawns (6 pcs)', price: 549, desc: 'Prawns marinated in tandoori spices and grilled to perfection.' },

    // Seafood Main Course
    { id: 'sf-grilled-fish', title: 'Grilled Fish (1 pc)', price: 599, desc: 'Herb or Peri Peri grilled fish served with lemon butter sauce, vegetables & mashed potato.' },
    { id: 'sf-prawns-butter-garlic', title: 'Prawns Butter Garlic (8 pcs)', price: 599, desc: 'Prawns cooked in creamy butter garlic sauce, served with garlic bread.' },
    { id: 'sf-fish-chips', title: 'Fish & Chips (2 pcs)', price: 549, desc: 'Crispy battered fish served with fries, coleslaw & tartar sauce.' },
    { id: 'sf-calamari-grill', title: 'Calamari Grill (10 pcs)', price: 549, desc: 'Grilled calamari tossed in lemon garlic butter with herbs.' },
    { id: 'sf-seafood-platter', title: 'Seafood Platter (Serves 2)', price: 1299, desc: 'Grilled prawns (4 pcs), calamari (6 pcs), mussels (6 pcs), fish (1 pc), garlic bread, fries & signature dips.' },

    // Seafood Grills
    { id: 'sf-tandoori-prawns-grill', title: 'Tandoori Prawns (6 pcs)', price: 549, desc: 'Marinated in tandoori spices and grilled to perfection.' },
    { id: 'sf-peri-peri-prawns', title: 'Peri Peri Prawns (8 pcs)', price: 549, desc: 'Spicy peri peri marinated prawns grilled and served hot.' },
    { id: 'sf-grilled-fish-steak', title: 'Grilled Fish Steak (1 pc)', price: 599, desc: 'Lemon or Herb grilled fish steak with herbs & spices.' },
    { id: 'sf-fish-tikka', title: 'Fish Tikka (8 pcs)', price: 499, desc: 'Boneless fish cubes marinated in mild spices and grilled in tandoor.' },
    { id: 'sf-mussels-garlic-butter', title: 'Mussels in Garlic Butter (12 pcs)', price: 499, desc: 'New Zealand mussels cooked in garlic butter sauce.' },

    // Seafood Curries
    { id: 'sf-prawn-curry', title: 'Prawn Curry (8 pcs)', price: 499, desc: 'Spicy prawns cooked in Indian style curry.' },
    { id: 'sf-fish-curry', title: 'Fish Curry (2 pcs)', price: 449, desc: 'Fish cooked in traditional spicy curry.' },
    { id: 'sf-prawn-malai-curry', title: 'Prawn Malai Curry (8 pcs)', price: 549, desc: 'Prawns simmered in creamy coconut gravy.' },

    // Rice & Pasta
    { id: 'sf-seafood-fried-rice', title: 'Seafood Fried Rice (Serves 1)', price: 399, desc: 'Prawns, calamari & fish stir-fried with rice & vegetables.' },
    { id: 'sf-prawn-biryani', title: 'Prawn Biryani (Serves 1)', price: 449, desc: 'Aromatic biryani cooked with prawns.' },
    { id: 'sf-seafood-pasta', title: 'Seafood Pasta (Serves 1)', price: 449, desc: 'Pasta tossed with prawns, calamari in creamy white sauce.' },

    // Seafood Combos
    { id: 'sf-sea-breeze-combo', title: 'Sea Breeze Combo (Serves 1)', price: 699, desc: 'Grilled fish (1 pc), prawns (4 pcs), butter garlic rice, garlic bread & refreshing drink.' },
    { id: 'sf-ocean-feast-combo', title: 'Ocean Feast Combo (Serves 2)', price: 999, desc: 'Grilled prawns (6 pcs), calamari (6 pcs), fish tikka (8 pcs), fries, coleslaw, garlic bread & two refreshing drinks.' },

    // Add-ons
    { id: 'sf-extra-garlic-bread', title: 'Extra Garlic Bread (2 pcs)', price: 79, desc: 'Freshly toasted garlic bread.' },
    { id: 'sf-extra-tartar-sauce', title: 'Extra Tartar Sauce', price: 49, desc: 'Creamy tartar dipping sauce.' },
    { id: 'sf-extra-rice', title: 'Extra Rice', price: 99, desc: 'Steamed rice.' },

    

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
    price:"14/160",
    items: [
      { id: 'ps-aglio', title: 'Pasta Aglio Olio (Veg)', price: 249, desc: 'Olive oil,  garlic, chilli flakes,herbes & parmesan.' },
      { id: 'ps-arrabbiata', title: 'Pasta Arrabbiata (Veg)', price: 279, desc: 'Spicy tomato sauce with herbs & parmesan.' },
      { id: 'ps-alfred', title: 'Pasta Alfredo (Veg)', price: 299, desc: 'Creamy white sauce with parmesan &herbs.' },
      { id: 'ps-alfredo', title: 'Pasta Alfredo (Chicken)', price: 349, desc: 'Creamy white sauce with parmesan &herbs.' },
      {id: 'ps-napoli', title: 'Pasta Napoli (Veg)', price: "279", desc: 'Classic tomato basil sauce with parmesan.' },
      {id: 'ps-napol', title: 'Pasta Napoli (Chicken)', price: "329", desc: 'Classic tomato basil sauce with parmesan.' },
      { id: 'ps-primavera', title: 'Pasta Primavera (Veg)', price: 299, desc: 'Pasta with mixed vegetables in a light creamy or tomato sauce.' },
    ]
  },
  {
    id: 'sec-soups',
    label: 'Soups & Warm Bowls',
    img: 'assets/pages/soups.jpeg',
    items: [
      { id: 'sp-clear0', title: 'Clear Soup (Veg)',price:140, desc: 'Fresh veggies cubes simmered in vegetable broth and served hot.' },
      { id: 'sp-clear1', title: 'Clear Soup (Non-Veg)',price:160, desc: 'Fresh Chicken cubes simmered in chicken broth and served hot.' },
      { id: 'sp-sweetcorn0', title: 'Sweet Corn Soup (Veg)',price:140, desc: 'Creamy light corn blend with assorted vegetables.' },
      { id: 'sp-sweetcorn1', title: 'Sweet Corn Soup (Non-Veg)',price:160, desc: 'Creamy light corn blend with assorted chicken.' },
      { id: 'sp-hot', title:'Hot & Sour Soup (Veg)',price:140, desc: 'Mixed vegetable in a spicy soya-based soup.' },
      { id: 'sp-hotnonveg', title:'Hot & Sour Soup (Non-Veg)',price:160, desc: 'Mixed chicken in a spicy soya-based soup.' },
      { id: 'sp-Manchow0', title: 'Manchow Soup (Veg)',price:140, desc: 'Thick vegetable soup served along crispy fried noodles.' },
      { id: 'sp-Manchow1', title: 'Manchow Soup (Non-Veg)',price:160, desc: 'Thick chicken soup served along crispy fried noodles.' },
      { id: 'sp-Tomato', title: 'Cream of Tomato/Vegetable',price:140, desc: 'Thick creamy soup served with your choice.' },
      { id: 'sp-TomatoVegetable', title: 'Cream of Tomato/Mushroom/Vegetable',price:160, desc: 'Thick creamy soup served with your choice.' }

    ]
  },
  {
    id: 'sec-mocktails',
    label: 'Mocktails & Beverages',
    img: 'assets/pages/mocktail.jpeg',
    items: [
      { id: 'mk-mojito', title: 'Virgin Mojito', price: 149, desc: 'Classic mojito with mint,lime,soda and a touch of sweetness.' },
      { id: 'mk-strawberry', title: 'Strawberry Lemonade', price: 149, desc: 'A sweet blend of strawberry,lemon,and a splash of soda.' },
      { id: 'mk-tropical', title: 'Tropical Passion', price: 149, desc: 'Atropical mix of orange, pineapple,passion fruit and line.' },
      { id: 'mk-blue', title: 'Blue Lagoon ', price: 149, desc: 'A refreshing blue curacao mix with lemon and soda.' },
      { id: 'mk-apple', title: 'Green Apple Cooler', price: 149, desc: 'Crisp green apple syrup with lime and mint , cool & refreshing.' },
      { id: 'mk-watermelon', title: 'Watermelon Fizz', price: 149, desc: 'Fresh watermelon juice with lime and a splash of soda.' },
      { id: 'mk-orange', title: 'Orange Spritz', price: 149, desc: 'Zesty orange juice with soda and a hint of citrus.' }


    ]
  },
  {
    id: 'sec-pizza-burger',
    label: 'Pizzas & Burgers',
    img: 'assets/pages/pizza.jpeg',
    items: [

    // ===== Classic Pizzas =====
    { id: 'cp-margherita-regular', title: 'Margherita Pizza (Regular)', price: 299, desc: 'Classic delight with fresh tomato sauce, mozzarella & basil.' },
    { id: 'cp-margherita-large', title: 'Margherita Pizza (Large)', price: 499, desc: 'Classic delight with fresh tomato sauce, mozzarella & basil.' },

    { id: 'cp-farmhouse-regular', title: 'Farmhouse Pizza (Regular)', price: 349, desc: 'Capsicum, onion, mushroom, tomato, sweet corn & olives.' },
    { id: 'cp-farmhouse-large', title: 'Farmhouse Pizza (Large)', price: 549, desc: 'Capsicum, onion, mushroom, tomato, sweet corn & olives.' },

    { id: 'cp-paneer-tikka-regular', title: 'Paneer Tikka Pizza (Regular)', price: 399, desc: 'Spicy paneer tikka, onion, capsicum, green chilli & cheese.' },
    { id: 'cp-paneer-tikka-large', title: 'Paneer Tikka Pizza (Large)', price: 599, desc: 'Spicy paneer tikka, onion, capsicum, green chilli & cheese.' },

    { id: 'cp-chicken-tikka-regular', title: 'Chicken Tikka Pizza (Regular)', price: 449, desc: 'Chicken tikka, onion, capsicum & mozzarella cheese.' },
    { id: 'cp-chicken-tikka-large', title: 'Chicken Tikka Pizza (Large)', price: 649, desc: 'Chicken tikka, onion, capsicum & mozzarella cheese.' },

    { id: 'cp-bbq-chicken-regular', title: 'BBQ Chicken Pizza (Regular)', price: 449, desc: 'Grilled chicken, BBQ sauce, onion, capsicum & cheese.' },
    { id: 'cp-bbq-chicken-large', title: 'BBQ Chicken Pizza (Large)', price: 649, desc: 'Grilled chicken, BBQ sauce, onion, capsicum & cheese.' },

    { id: 'cp-pepperoni-regular', title: 'Pepperoni Pizza (Regular)', price: 449, desc: 'Classic pepperoni with mozzarella cheese.' },
    { id: 'cp-pepperoni-large', title: 'Pepperoni Pizza (Large)', price: 649, desc: 'Classic pepperoni with mozzarella cheese.' },

    // ===== Premium Pizzas =====
    { id: 'pp-meat-lovers-regular', title: 'Meat Lovers Pizza (Regular)', price: 499, desc: 'Chicken, pepperoni, mutton chunks, sausages & cheese.' },
    { id: 'pp-meat-lovers-large', title: 'Meat Lovers Pizza (Large)', price: 699, desc: 'Chicken, pepperoni, mutton chunks, sausages & cheese.' },

    { id: 'pp-seafood-supreme-regular', title: 'Seafood Supreme Pizza (Regular)', price: 549, desc: 'Prawns, calamari, fish, crab sticks, olives & cheese.' },
    { id: 'pp-seafood-supreme-large', title: 'Seafood Supreme Pizza (Large)', price: 749, desc: 'Prawns, calamari, fish, crab sticks, olives & cheese.' },

    { id: 'pp-exotic-veg-regular', title: 'Exotic Veg Pizza (Regular)', price: 449, desc: 'Roasted bell peppers, zucchini, jalapeños, olives & feta cheese.' },
    { id: 'pp-exotic-veg-large', title: 'Exotic Veg Pizza (Large)', price: 649, desc: 'Roasted bell peppers, zucchini, jalapeños, olives & feta cheese.' },

    // ===== Signature Burgers =====
    { id: 'bg-orange-bbq', title: 'Orange BBQ Burger', price: 249, desc: 'Grilled chicken patty, BBQ sauce, cheese, onion rings, lettuce & mayo. Served with fries & a soft drink.' },

    { id: 'bg-cheese', title: 'Cheese Burger', price: 229, desc: 'Juicy chicken patty, cheese, lettuce, tomato, onion & burger mayo. Served with fries & a soft drink.' },

    { id: 'bg-spicy-peri-peri', title: 'Spicy Peri Peri Burger', price: 249, desc: 'Peri peri grilled patty, spicy mayo, lettuce, tomato & onion. Served with fries & a soft drink.' },

    { id: 'bg-crispy-chicken', title: 'Crispy Chicken Burger', price: 239, desc: 'Crispy fried chicken, lettuce, cheese, pickles & garlic mayo. Served with fries & a soft drink.' },

    { id: 'bg-veg-delight', title: 'Veg Delight Burger', price: 199, desc: 'Veg patty, lettuce, tomato, onion, cheese & burger mayo. Served with fries & a soft drink.' },

    { id: 'bg-double-decker', title: 'Double Decker Burger', price: 299, desc: 'Double chicken patty, cheese, lettuce, tomato, onion & special sauce. Served with fries & a soft drink.' },

    // ===== Burger Combos =====
    { id: 'bc-cheese', title: 'Cheese Burger Combo', price: 299, desc: 'Cheese Burger served with French fries & a soft drink.' },

    { id: 'bc-crispy-chicken', title: 'Crispy Chicken Burger Combo', price: 309, desc: 'Crispy Chicken Burger served with French fries & a soft drink.' },

    { id: 'bc-spicy-peri-peri', title: 'Spicy Peri Peri Burger Combo', price: 319, desc: 'Spicy Peri Peri Burger served with French fries & a soft drink.' },

    { id: 'bc-double-decker', title: 'Double Decker Burger Combo', price: 359, desc: 'Double Decker Burger served with French fries & a soft drink.' },

    // ===== Pizza Add-ons =====
    { id: 'ad-extra-cheese', title: 'Extra Cheese', price: 60, desc: 'Add extra mozzarella cheese.' },
    { id: 'ad-chicken-tikka', title: 'Chicken Tikka', price: 80, desc: 'Extra chicken tikka topping.' },
    { id: 'ad-paneer-tikka', title: 'Paneer Tikka', price: 70, desc: 'Extra paneer tikka topping.' },
    { id: 'ad-pepperoni', title: 'Pepperoni (6 pcs)', price: 70, desc: 'Extra pepperoni slices.' },
    { id: 'ad-olives', title: 'Olives', price: 40, desc: 'Extra olives.' },
    { id: 'ad-mushroom', title: 'Mushroom', price: 40, desc: 'Extra mushrooms.' },
    { id: 'ad-jalapenos', title: 'Jalapeños', price: 30, desc: 'Extra jalapeños.' },

    // ===== Sauces =====
    { id: 'sc-peri-peri', title: 'Peri Peri Sauce', price: 0, desc: 'Signature peri peri dipping sauce.' },
    { id: 'sc-garlic', title: 'Garlic Sauce', price: 0, desc: 'Creamy garlic dipping sauce.' },
    { id: 'sc-bbq', title: 'BBQ Sauce', price: 0, desc: 'Classic smoky BBQ sauce.' },
    { id: 'sc-cheesy-dip', title: 'Cheesy Dip', price: 0, desc: 'Rich cheesy dipping sauce.' },
    { id: 'sc-ketchup', title: 'Tomato Ketchup', price: 0, desc: 'Classic tomato ketchup.' },

    // ===== Extras =====
    { id: 'ex-french-fries', title: 'French Fries', price: 99, desc: 'Golden crispy french fries.' },
    { id: 'ex-cheesy-fries', title: 'Cheesy Fries', price: 129, desc: 'French fries topped with cheese.' },
    { id: 'ex-onion-rings', title: 'Onion Rings (6 pcs)', price: 99, desc: 'Crispy onion rings.' },
    { id: 'ex-chicken-nuggets', title: 'Chicken Nuggets (6 pcs)', price: 129, desc: 'Crispy chicken nuggets.' },

    // ===== Drinks =====
    { id: 'dr-soft-drink', title: 'Pepsi / 7UP / Mirinda', price: 59, desc: 'Choice of soft drink.' },
    { id: 'dr-fresh-lime', title: 'Fresh Lime Soda', price: 79, desc: 'Refreshing fresh lime soda.' },
    { id: 'dr-iced-tea', title: 'Iced Tea (Peach / Lemon)', price: 79, desc: 'Chilled peach or lemon iced tea.' },
    { id: 'dr-mineral-water', title: 'Mineral Water', price: 29, desc: 'Packaged drinking water.' }

  ]
  },
  {
    id: 'sec-continental',
    label: 'Continental Menu',
    img: 'assets/pages/continental.jpeg',
    items: [
    { id: 'sl-caesar-veg', title: 'Caesar Salad (Veg)', price: 249, desc: 'Crisp lettuce, parmesan, croutons & caesar dressing.' },
    { id: 'sl-caesar-chicken', title: 'Caesar Salad (Chicken)', price: 299, desc: 'Crisp lettuce, parmesan, croutons & caesar dressing.' },
    { id: 'sl-greek-salad', title: 'Greek Salad', price: 249, desc: 'Cucumber, bell peppers, olives, feta cheese & olive oil.' },
    { id: 'sl-garden-fresh-salad', title: 'Garden Fresh Salad', price: 199, desc: 'Fresh seasonal vegetables with house dressing.' },

    { id: 'st-garlic-bread', title: 'Garlic Bread', price: 149, desc: 'Toasted bread with garlic butter.' },
    { id: 'st-cheesy-garlic-bread', title: 'Cheesy Garlic Bread', price: 179, desc: 'Garlic bread topped with melted cheese.' },
    { id: 'st-bruschetta', title: 'Bruschetta (Veg)', price: 199, desc: 'Toasted bread topped with tomato, basil, olive oil & herbs.' },
    { id: 'st-stuffed-mushrooms', title: 'Stuffed Mushrooms', price: 229, desc: 'Mushrooms stuffed with herbed cheese & baked.' },
    { id: 'st-chicken-wings', title: 'Chicken Wings (BBQ / Peri Peri)', price: 299, desc: 'Grilled chicken wings tossed in your choice of BBQ or Peri Peri sauce.' },
    { id: 'st-calamari-rings', title: 'Calamari Rings', price: 299, desc: 'Crispy fried calamari served with tartar sauce.' },

    { id: 'cr-veg-fried-rice', title: 'Veg Fried Rice', price: 249, desc: 'Stir-fried rice with mixed vegetables & herbs.' },
    { id: 'cr-chicken-fried-rice', title: 'Chicken Fried Rice', price: 299, desc: 'Stir-fried rice with chicken, vegetables & herbs.' },
    { id: 'cr-steamed-rice', title: 'Steamed Rice', price: 149, desc: 'Plain steamed rice.' },
    { id: 'cr-herb-rice', title: 'Herb Rice', price: 179, desc: 'Steamed rice tossed with aromatic herbs.' },

    { id: 'mc-grilled-chicken-herb', title: 'Grilled Chicken with Herb Sauce', price: 449, desc: 'Grilled chicken served with creamy herb sauce. Served with garlic bread & vegetables.' },
    { id: 'mc-chicken-schnitzel', title: 'Chicken Schnitzel', price: 449, desc: 'Breaded chicken cutlet served with fries & salad.' },
    { id: 'mc-fish-chips', title: 'Fish & Chips', price: 449, desc: 'Crispy fried fish served with fries, tartar sauce & salad.' },
    { id: 'mc-grilled-fish-lemon-butter', title: 'Grilled Fish with Lemon Butter Sauce', price: 499, desc: 'Grilled fish topped with lemon butter sauce.' },
    { id: 'mc-veg-lasagna', title: 'Veg Lasagna', price: 349, desc: 'Layers of pasta, vegetables & cheese baked to perfection.' },

    { id: 'sd-french-fries', title: 'French Fries', price: 149, desc: 'Golden crispy french fries.' },
    { id: 'sd-mashed-potato', title: 'Mashed Potato', price: 169, desc: 'Creamy mashed potatoes.' },
    { id: 'sd-sauteed-vegetables', title: 'Sauteed Vegetables', price: 189, desc: 'Fresh vegetables sautéed with herbs.' },
    { id: 'sd-cheesy-fries', title: 'Cheesy Fries', price: 199, desc: 'French fries topped with melted cheese.' },

    { id: 'sc-pepper-sauce', title: 'Pepper Sauce', price: 99, desc: 'Classic pepper sauce.' },
    { id: 'sc-mushroom-sauce', title: 'Mushroom Sauce', price: 99, desc: 'Creamy mushroom sauce.' },
    { id: 'sc-herb-sauce', title: 'Herb Sauce', price: 99, desc: 'Creamy herb sauce.' },
    { id: 'sc-bbq-sauce', title: 'BBQ Sauce', price: 99, desc: 'Signature smoky BBQ sauce.' },
    { id: 'sc-lemon-butter-sauce', title: 'Lemon Butter Sauce', price: 99, desc: 'Rich buttery lemon sauce.' },

    { id: 'ds-chocolate-brownie', title: 'Chocolate Brownie with Ice Cream', price: 199, desc: 'Warm brownie served with vanilla ice cream & chocolate sauce.' },
    { id: 'ds-tiramisu', title: 'Tiramisu', price: 199, desc: 'Classic Italian dessert with coffee & mascarpone.' },
    { id: 'ds-new-york-cheesecake', title: 'New York Cheesecake with Berry Compote', price: 199, desc: 'Creamy cheesecake topped with berry compote.' }
  ]
  },
  {
    id: 'sec-sandwiches',
    label: 'Club Sandwiches',
    img: 'assets/pages/combo.jpeg',
    items: [
    { id: 'cs-classic', title: 'Classic Club Sandwich Combo', price: 399, desc: 'Triple layer grilled sandwich with grilled chicken, egg, lettuce, tomato, cucumber, cheese, bacon & mayo. Served with crispy fries, coleslaw and a refreshing soft drink.' },

    { id: 'cs-bbq', title: 'BBQ Club Sandwich Combo', price: 429, desc: 'Triple layer grilled sandwich with BBQ chicken, bacon, cheese, lettuce, tomato & mayo. Served with crispy fries, coleslaw and a refreshing soft drink.' },

    { id: 'cs-spicy', title: 'Spicy Club Sandwich Combo', price: 429, desc: 'Triple layer grilled sandwich with peri peri chicken, jalapeños, cheese, lettuce & spicy mayo. Served with crispy fries, coleslaw and a refreshing soft drink.' },

    { id: 'cs-extra-cheese', title: 'Extra Cheese', price: 40, desc: 'Add extra cheese to your club sandwich.' },

    { id: 'cs-extra-chicken', title: 'Extra Chicken', price: 60, desc: 'Add extra grilled chicken to your club sandwich.' },

    { id: 'cs-extra-bacon', title: 'Extra Bacon', price: 50, desc: 'Add crispy bacon strips to your club sandwich.' },

    { id: 'cs-cold-coffee', title: 'Cold Coffee', price: 70, desc: 'Chilled creamy cold coffee served as an add-on beverage.' }
  ]
  },
 {
  id: 'sec-combos',
  label: 'Orange Barbeque Combo Section',
  img: 'assets/pages/combos.jpeg',
  items: [
    { id: 'rc-smoked-bbq-chicken-rice-bowl', title: 'Smoked BBQ Chicken Rice Bowl', price: 449, desc: 'Grilled BBQ chicken, butter herb rice, sautéed vegetables & BBQ sauce.' },

    { id: 'rc-chicken-stroganoff-rice-combo', title: 'Chicken Stroganoff Rice Combo', price: 499, desc: 'Creamy chicken stroganoff, butter herb rice & garlic bread.' },

    { id: 'rc-grilled-chicken-steak-combo', title: 'Grilled Chicken Steak Combo', price: 549, desc: 'Herb grilled chicken, butter rice, vegetables & pepper sauce.' },

    { id: 'rc-lemon-butter-fish-rice-combo', title: 'Lemon Butter Fish Rice Combo', price: 599, desc: 'Grilled fish, herb rice, vegetables & lemon butter sauce.' },

    { id: 'rc-peri-peri-chicken-rice-combo', title: 'Peri-Peri Chicken Rice Combo', price: 499, desc: 'Peri-peri grilled chicken, spicy rice, coleslaw & garlic mayo.' },

    { id: 'bc-chicken-stroganoff-bread-combo', title: 'Chicken Stroganoff Bread Combo', price: 499, desc: 'Creamy chicken stroganoff, garlic bread & fresh salad.' },

    { id: 'bc-grilled-chicken-garlic-bread', title: 'Grilled Chicken & Garlic Bread', price: 549, desc: 'Herb grilled chicken, garlic bread, vegetables & mushroom sauce.' },

    { id: 'bc-bbq-chicken-bread-basket', title: 'BBQ Chicken Bread Basket', price: 499, desc: 'Smoked BBQ chicken, garlic bread, fries & coleslaw.' },

    { id: 'bc-fish-garlic-bread-combo', title: 'Fish & Garlic Bread Combo', price: 599, desc: 'Grilled fish, garlic bread, vegetables & tartar sauce.' },

    { id: 'bc-veg-continental-combo', title: 'Veg Continental Combo', price: 399, desc: 'Grilled vegetables, garlic bread, herb rice or mashed potato & mushroom sauce.' },

    { id: 'sp-orange-signature-smoke-combo', title: 'Orange Signature Smoke Combo', price: 699, desc: 'Grilled chicken, chicken stroganoff, butter herb rice, garlic bread, sautéed vegetables & two signature sauces.' },

    { id: 'sp-smoke-house-feast-serves-2', title: 'Smoke House Feast (Serves 2)', price: 1299, desc: 'BBQ chicken, grilled fish, herb rice, garlic bread, fries, salad & three signature sauces.' }
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
  
  // 1. Clear any stale animation markup remnants first
  turningPaper.innerHTML = '';
  if (sectionBook) sectionBook.classList.remove('turn-next', 'turn-prev');
  
  // Remove preexisting scroll indicators to avoid duplicating them
  const oldIndicator = document.querySelector('.mobile-scroll-indicator');
  if (oldIndicator) oldIndicator.remove();
  
  // 2. Inject main image layout views
  currentPaper.innerHTML = `<img class="page-image" src="${targetSection.img}" alt="${targetSection.label}" />`;
  
  // Append the Order Online arrow structure cleanly inside the viewport section for phone screen layouts
  const leftBookContainer = document.querySelector('.viewer-left-book');
  if (leftBookContainer) {
    const arrowIndicator = document.createElement('div');
    arrowIndicator.className = 'mobile-scroll-indicator';
    arrowIndicator.innerHTML = 'Order Online <span>🔽</span>';
    leftBookContainer.appendChild(arrowIndicator);
  }
  
  // 3. Update Text Content Headers
  viewerCount.textContent = targetSection.label.toUpperCase();
  
  // 4. Force list item injection panel update 
  renderItemSelectorsForSection(targetSection);
  
  // 5. Trigger CSS Layout Display State Changes
  viewer.classList.add('open');
  viewer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  
  // 6. Force Reflow Layout reset metrics checking steps
  if (sectionBook) void sectionBook.offsetWidth;

  // 7. Enforce that viewport pane defaults to the top, showing the image clearly on initialization
  const viewerPanel = document.querySelector('.viewer-panel');
  if (viewerPanel) {
    viewerPanel.scrollTop = 0;
  }
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
    
    // Check if the current section is the Barbeque Buffet
    const isBuffetSection = section.id === 'sec-buffet';

    return `
      <div class="menu-item-row">
        <div class="item-details">
          <div class="item-title-line">
            <h4>${item.title}</h4>
            <span class="item-price">₹${item.price}</span>
          </div>
          <p class="item-desc">${item.desc}</p>
        </div>
        ${
          isBuffetSection 
            ? `` 
            : `
            <div class="quantity-control">
              <button class="qty-btn" onclick="modifyCartItemQty('${item.id}', '${escapeHtml(item.title)}', ${item.price}, -1)">-</button>
              <span class="qty-val" id="qty-modal-${item.id}">${currentQty}</span>
              <button class="qty-btn" onclick="modifyCartItemQty('${item.id}', '${escapeHtml(item.title)}', ${item.price}, 1)">+</button>
            </div>
            `
        }
      </div>
    `;
  }).join('');
}

// Mapped Slide Page Navigation Engine controls algorithms
function navigateSectionTrack(step) {
  if (isTurning) return;
  
  const nextIndex = (activeIndex + step + menuSections.length) % menuSections.length;
  isTurning = true;

  if (sectionBook) sectionBook.classList.remove('turn-next', 'turn-prev');
  turningPaper.innerHTML = currentPaper.innerHTML;
  currentPaper.innerHTML = `<img class="page-image" src="${menuSections[nextIndex].img}" alt="${menuSections[nextIndex].label}" />`;
  
  viewerCount.textContent = menuSections[nextIndex].label.toUpperCase();
  renderItemSelectorsForSection(menuSections[nextIndex]);

  if (sectionBook) {
    void sectionBook.offsetWidth;
    sectionBook.classList.add(step > 0 ? 'turn-next' : 'turn-prev');
  }

  setTimeout(() => {
    activeIndex = nextIndex;
    if (sectionBook) sectionBook.classList.remove('turn-next', 'turn-prev');
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

function escapeHtml(string) {
  return String(string).replace(/'/g, "\\'");
}

document.getElementById('prevSection').onclick = () => navigateSectionTrack(-1);
document.getElementById('nextSection').onclick = () => navigateSectionTrack(1);

document.addEventListener('keydown', (e) => {
  if (!viewer.classList.contains('open')) return;
  if (e.key === 'Escape') closeViewer();
  if (e.key === 'ArrowRight') navigateSectionTrack(1);
  if (e.key === 'ArrowLeft') navigateSectionTrack(-1);
});

renderCategoryTrackCards();
refreshCartStateStoreUI();
