const menuData = [
  {id:'soups', title:'Soups', desc:'Warm broths, creamy classics and spicy restaurant soups.', img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1100&q=80', items:[['Clear Soup (Veg/Non-Veg)','₹140/160','Fresh veggies or chicken cubes simmered in a light broth.'],['Sweet Corn Soup (Veg/Non-Veg)','₹140/160','Creamy sweet corn with assorted vegetables or chicken.'],['Lemon Coriander Soup','₹140/160','Fresh coriander, lemon and clear vegetable stock.'],['Hot & Sour Soup','₹140/160','A sharp, spicy soya based soup.'],['Manchow Soup','₹150/170','Served with crispy fried noodles.'],['Cream of Tomato / Mushroom / Vegetable','₹140','Smooth creamy soup served hot.']]},
  {id:'veg-starters', title:'Veg Starters', desc:'Paneer, corn, potato, pineapple and tandoori vegetables.', img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1100&q=80', items:[['Paneer Pepper Fry','₹315','Cottage cheese cubes fried with black pepper.'],['Tandoori Paneer Tikka','₹379','Paneer marinated with hung curd and tandoori spices.'],['Crispy Chilli American Corn','₹349','Fried American corn tossed in sauces.'],['American Corn Salt & Pepper','₹329','Corn tossed with salt and pepper.'],['BBQ Special Crispy Corn','₹349','Crispy corn with cajun spice mix.'],['Cajun Spiced Potato','₹269','Baby potatoes with signature cajun sauce.'],['Barbeque Pineapple','₹349','Grilled pineapple with BBQ marination.'],['Tandoori Mushroom','₹289','Button mushrooms slow cooked in a clay oven.']]},
  {id:'nonveg-starters', title:'Non-Veg Starters', desc:'Chicken, fish, prawns and sharing platters from the grill.', img:'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1100&q=80', items:[['Tandoori Murgh Tikka','₹315','Tender chicken marinated with yoghurt and spices.'],['Tandoori Prawns','₹499','Juicy prawns slow cooked in a clay oven.'],['Fish Tikka','₹469','Basa fillets marinated with Indian herbs.'],['Charcoal Chicken Wings','₹389','Chicken wings with yoghurt and spices.'],['Tandoori Drumsticks','₹359','Chicken drumsticks slow cooked in a clay oven.'],['Golden Prawns','₹479','Prawns coated with panko crumbs.'],['Fish Fingers','₹479','Basa fillets coated with panko crumbs.'],['Fish & Chips','₹549','Served with French fries and garlic mayo.'],['Sea Food Platter','₹899','Tandoori prawns, fish tikka, golden prawns and fish fingers.'],['Ultimate Non-Veg Platter','₹1099','Chicken tikka, prawns, fish tikka, wings and more.'],['Tandoori Murgh','₹440/820','Whole chicken marinated and slow cooked.']]},
  {id:'indian-veg', title:'Indian Veg Main Course', desc:'Comforting vegetarian curries and rich paneer favourites.', img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1100&q=80', items:[['Yellow Dal','₹199','Classic yellow dal tempered with Indian spices.'],['Dal Makkhani','₹249','Slow cooked black lentils finished with butter.'],['Jeera Aloo','₹260','Potatoes tossed with cumin and mild spices.'],['Matar Paneer','₹349','Paneer and green peas in a homestyle gravy.'],['Mix Veg','₹349','Seasonal vegetables cooked in Indian masala.'],['Paneer Tikka Masala','₹379','Tandoori paneer in rich tikka gravy.'],['Kadhai Paneer','₹379','Paneer with capsicum, onion and kadhai masala.'],['Paneer Butter Masala','₹379','Creamy tomato gravy with soft paneer cubes.'],['Malai Kofta','₹379','Soft kofta dumplings in a creamy gravy.']]},
  {id:'indian-nonveg', title:'Indian Non-Veg Main Course', desc:'Chicken, mutton, fish, prawns and egg curries.', img:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1100&q=80', items:[['Fish Curry Home Style','₹415','Homestyle fish curry with gentle spices.'],['Machli Begum Bahar','₹435','Fish cooked in a rich special gravy.'],['Prawns Kolhapuri','₹565','Prawns in spicy Kolhapuri masala.'],['Murgh Lababdar','₹419','Chicken in a creamy tomato onion gravy.'],['Murgh Makkhani','₹419','Butter chicken style rich makhani gravy.'],['Mughlai Murgh','₹429','Mughlai chicken with aromatic spices.'],['Murgh Do Pyaza','₹429','Chicken cooked with onion and spices.'],['Kadhai Murgh','₹429','Chicken with capsicum and kadhai masala.'],['Mutton Rogan Josh','₹499','Mutton cooked in traditional rogan josh gravy.'],['Egg Curry Home Style','₹299','Boiled eggs in homestyle curry.'],['Chicken Curry Home Style','₹350','Simple comforting chicken curry.']]},
  {id:'asian-rice', title:'Asian Rice & Noodles', desc:'Fried rice, schezwan rice, hakka noodles and pan-fried noodles.', img:'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=1100&q=80', items:[['Vegetable Fried Rice','₹229',''],['Vegetable Garlic Fried Rice','₹239',''],['Egg Fried Rice','₹279',''],['Chicken Fried Rice','₹319',''],['Prawn Fried Rice','₹339',''],['Vegetable Schezwan Fried Rice','₹239',''],['Chicken Schezwan Fried Rice','₹349',''],['Prawn Schezwan Fried Rice','₹359',''],['Vegetable Hakka Noodles','₹219',''],['Chicken Hakka Noodles','₹329',''],['Prawn Hakka Noodles','₹319',''],['Vegetable Pan Fried Noodles','₹267',''],['Chicken Pan Fried Noodles','₹319',''],['Prawn Pan Fried Noodles','₹329','']]},
  {id:'asian-main', title:'Asian Main Course', desc:'Choose your sauce: chilli, manchurian, hot garlic or lemon.', img:'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=1100&q=80', items:[['Wings of your choice','₹329','Chilli / Manchurian / Hot Garlic Sauce / Lemon.'],['Chicken of your choice','₹349','Chilli / Manchurian / Hot Garlic Sauce / Lemon.'],['Fish of your choice','₹349','Chilli / Manchurian / Hot Garlic Sauce / Lemon.'],['Prawns of your choice','₹449','Chilli / Manchurian / Hot Garlic Sauce / Lemon.'],['Paneer of your choice','₹279','Chilli / Manchurian / Hot Garlic Sauce / Lemon.'],['Veg Balls of your choice','₹269','Chilli / Manchurian / Hot Garlic Sauce / Lemon.'],['Mushroom of your choice','₹279','Chilli / Manchurian / Hot Garlic Sauce / Lemon.']]},
  {id:'rice-bread', title:'Rice, Bread, Salad & Papad', desc:'Indian breads, rice, salad and crunchy sides.', img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1100&q=80', items:[['Steamed Rice','₹149',''],['Jeera Rice','₹180',''],['Veg Pulao','₹210',''],['Peas Pulao','₹210',''],['Tandoori Roti','₹40/50','Plain / Butter.'],['Naan','₹80/90/100','Plain / Butter / Garlic.'],['Lachedaar Paratha','₹80',''],['Stuffed Naan','₹120/130/140/150','Aloo / Masala / Paneer / Cheese.'],['Green Salad','₹100',''],['Laccha Onion','₹80',''],['Corn Salad','₹120',''],['Roasted Papad','₹60',''],['Fried Papad','₹70',''],['Masala Papad','₹139','']]},
  {id:'desserts', title:'Desserts', desc:'Brownie, ice cream, gulab jamun and sweet classics.', img:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1100&q=80', items:[['Sizzling Brownie with Ice Cream','₹249','Warm brownie served with ice cream.'],['Gulab Jamun','₹119','Soft Indian sweet served warm.'],['Brownie','₹139','Classic chocolate brownie.'],['Fruit Custard','₹139','Seasonal fruits in chilled custard.'],['Ice Cream','₹129','Vanilla / Strawberry / Chocolate.']]},
  {id:'beverages', title:'Beverages', desc:'Mocktails, shakes, iced tea, coolers and soft drinks.', img:'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1100&q=80', items:[['Smokes Pineapple Pride','₹199','Grilled pineapple with floral and sweet flavour.'],['Grilly Chilly','₹199','Spicy ginger and orange with grilled chilli garnish.'],['Charcoal Mojito','₹199','Mint with lime and kaala khatta.'],['Virgin Pinacolada','₹189','Pineapple, coconut and ice cream.'],['Fruit Punch','₹189','Juices, ice cream and strawberry crush.'],['Chocolate Blast','₹189','Chocolate with a creamy base.'],['Spiced Tango','₹189','Mango juice with ginger, lime and salt.'],['Sharbet-E-Mohabbat','₹189','Rose syrup and milk with watermelon.'],['Mango Thick Shake','₹189','Creamy mango shake.'],['Strawberry Thick Shake','₹189','Creamy strawberry shake.'],['Litchi Thick Shake','₹189','Creamy litchi shake.'],['Virgin Mojito','₹169','Mint with lime.'],['Blue on the Sea','₹169','Litchi with blue curacao.'],['Gleechee','₹169','Litchi and lime with rose.'],['Cucumber Mint Cooler','₹169','Cucumber with mint.'],['Bombay Collins','₹169','Peach and cranberry with lemon and mint.'],['Lady in Red','₹169','Grenadine with lime and mint.'],['Lemon Iced Tea','₹149',''],['Peach Iced Tea','₹149',''],['Masala Coke','₹149',''],['Jal Jeera','₹129',''],['Fresh Lime','₹129','Water / Soda.'],['Aerated Beverages','₹129',''],['Packaged Juices','₹129',''],['Red Bull','₹199',''],['Diet Coke','₹149','']]},
  {id:'buffet', title:'Savings Buffet', desc:'Unlimited grill, buffet and group prix-fixe experience.', img:'assets/pages/page-1.jpg', items:[['Veg Buffet','₹599','30+ unlimited delights, Monday to Friday lunch.'],['Non-Veg Buffet','₹699','30+ unlimited delights, Monday to Friday lunch.'],['Group Prix-Fixe Menu','On request','For group dining and private events.']]}
];

const categoryCards = document.getElementById('categoryCards');
const viewer = document.getElementById('sectionViewer');
const sectionBook = document.getElementById('sectionBook');
const currentPaper = document.getElementById('currentPaper');
const turningPaper = document.getElementById('turningPaper');
const viewerCount = document.getElementById('viewerCount');
let activeIndex = 0;
let isTurning = false;

function renderCategoryCards(){
  categoryCards.innerHTML = menuData.map((cat, index) => `
    <article class="cat-card" style="--photo:url('${cat.img}')" onclick="openSection('${cat.id}')">
      <div class="cat-photo"></div>
      <div class="cat-content">
        <span class="cat-number">${String(index + 1).padStart(2, '0')}</span>
        <h3>${cat.title}</h3>
        <p>${cat.desc}</p>
        <div class="cat-meta">
          <span>${cat.items.length} items</span>
          <span>Open menu →</span>
        </div>
      </div>
    </article>`).join('');
}

function paperTemplate(cat, index){
  const list = cat.items.map(item => `
    <div class="dish-row">
      <div>
        <h4>${item[0]}</h4>
        ${item[2] ? `<p>${item[2]}</p>` : ''}
      </div>
      <strong>${item[1]}</strong>
    </div>`).join('');

  return `
    <div class="paper-image" style="background-image:linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.58)),url('${cat.img}')">
      <span>Section ${String(index + 1).padStart(2, '0')}</span>
      <h2>${cat.title}</h2>
      <p>${cat.desc}</p>
    </div>
    <div class="paper-menu">
      <div class="paper-top">
        <div>
          <span class="kicker compact">The Barbeque Smoke House</span>
          <h3>${cat.title}</h3>
        </div>
        <span class="item-count">${cat.items.length} items</span>
      </div>
      <div class="dish-list">${list}</div>
    </div>`;
}

function openSection(id){
  const index = menuData.findIndex(cat => cat.id === id);
  activeIndex = index >= 0 ? index : 0;
  currentPaper.innerHTML = paperTemplate(menuData[activeIndex], activeIndex);
  updateCount();
  viewer.classList.add('open');
  viewer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeViewer(){
  viewer.classList.remove('open');
  viewer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

function changeSection(step){
  if(isTurning) return;
  const nextIndex = (activeIndex + step + menuData.length) % menuData.length;
  isTurning = true;
  turningPaper.innerHTML = currentPaper.innerHTML;
  sectionBook.classList.remove('turn-next', 'turn-prev');
  void sectionBook.offsetWidth;
  sectionBook.classList.add(step > 0 ? 'turn-next' : 'turn-prev');

  setTimeout(() => {
    activeIndex = nextIndex;
    currentPaper.innerHTML = paperTemplate(menuData[activeIndex], activeIndex);
    updateCount();
  }, 330);

  setTimeout(() => {
    sectionBook.classList.remove('turn-next', 'turn-prev');
    isTurning = false;
  }, 760);
}

function updateCount(){
  viewerCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(menuData.length).padStart(2, '0')}`;
}

document.getElementById('prevSection').onclick = () => changeSection(-1);
document.getElementById('nextSection').onclick = () => changeSection(1);
document.addEventListener('keydown', (event) => {
  if(!viewer.classList.contains('open')) return;
  if(event.key === 'Escape') closeViewer();
  if(event.key === 'ArrowRight') changeSection(1);
  if(event.key === 'ArrowLeft') changeSection(-1);
});

renderCategoryCards();
