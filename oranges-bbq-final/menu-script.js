// Each entry is one real, photographed page of the physical menu.
// No dish names / prices / descriptions are generated here — the
// image itself IS the menu page, so the only thing we track is
// which file it is and what label to show in the UI chrome.
const menuPages = [
  { id: 'page-1',  label: 'Page 01', img: 'assets/pages/page-1.jpeg' },
  { id: 'page-2',  label: 'Page 02', img: 'assets/pages/page-2.jpeg' },
  { id: 'page-3',  label: 'Page 03', img: 'assets/pages/page-3.jpeg' },
  { id: 'page-4',  label: 'Page 04', img: 'assets/pages/page-4.jpeg' },
  { id: 'page-5',  label: 'Page 05', img: 'assets/pages/page-5.jpeg' },
  { id: 'page-6',  label: 'Page 06', img: 'assets/pages/page-6.jpeg' },
  { id: 'page-7',  label: 'Page 07', img: 'assets/pages/page-7.jpeg' },
  { id: 'page-8',  label: 'Page 08', img: 'assets/pages/page-8.jpeg' },
  { id: 'page-9',  label: 'Page 09', img: 'assets/pages/page-9.jpeg' },
  { id: 'page-10', label: 'Page 10', img: 'assets/pages/page-10.jpeg' }
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
  categoryCards.innerHTML = menuPages.map(page => `
    <article class="page-card" onclick="openSection('${page.id}')">
      <div class="page-thumb">
        <img src="${page.img}" alt="Menu ${page.label}" loading="lazy" />
      </div>
      <div class="page-card-footer">
        <span class="page-number">${page.label}</span>
        <span class="page-cta">View page →</span>
      </div>
    </article>`).join('');
}

function paperTemplate(page){
  return `<img class="page-image" src="${page.img}" alt="Menu ${page.label}" />`;
}

function openSection(id){
  const index = menuPages.findIndex(page => page.id === id);
  activeIndex = index >= 0 ? index : 0;
  currentPaper.innerHTML = paperTemplate(menuPages[activeIndex]);
  updateCount();
  viewer.classList.add('open');
  viewer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  document.body.classList.add('menu-viewer-open');
}

function closeViewer(){
  viewer.classList.remove('open');
  viewer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
  document.body.classList.remove('menu-viewer-open');

  // Go back to menu section without reloading the page
  document.getElementById('sections').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function changeSection(step){
  if(isTurning) return;

  const nextIndex = (activeIndex + step + menuPages.length) % menuPages.length;
  isTurning = true;

  sectionBook.classList.remove('turn-next', 'turn-prev');

  // The next page is placed underneath first, then the old page
  // flips away from the top — same animation on every screen size.
  turningPaper.innerHTML = currentPaper.innerHTML;
  currentPaper.innerHTML = paperTemplate(menuPages[nextIndex]);

  void sectionBook.offsetWidth;
  sectionBook.classList.add(step > 0 ? 'turn-next' : 'turn-prev');

  setTimeout(() => {
    activeIndex = nextIndex;
    updateCount();
    sectionBook.classList.remove('turn-next', 'turn-prev');
    turningPaper.innerHTML = '';
    isTurning = false;
  }, 720);
}

function updateCount(){
  viewerCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(menuPages.length).padStart(2, '0')}`;
}

document.getElementById('prevSection').onclick = () => changeSection(-1);
document.getElementById('nextSection').onclick = () => changeSection(1);
document.addEventListener('keydown', (event) => {
  if(!viewer.classList.contains('open')) return;
  if(event.key === 'Escape') closeViewer();
  if(event.key === 'ArrowRight') changeSection(1);
  if(event.key === 'ArrowLeft') changeSection(-1);
});

function preloadMenuImages(){
  menuPages.forEach(page => {
    const img = new Image();
    img.src = page.img;
  });
}

preloadMenuImages();
renderCategoryCards();