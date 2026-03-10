// ── DATA ──────────────────────────────────────────────────
const pins = [
  // nature
  { id:1, cat:'nature', title:'Morning dew on forest leaves', desc:'Peaceful forest mornings with sunlight filtering through the canopy. A perfect reminder to slow down and breathe.', author:'Elena Woods', authorImg:`https://ui-avatars.com/api/?name=Elena+Woods&background=c8e6c9&color=2e7d32&size=40&bold=true`, likes:3241, h:320, color:'#c8e6c9', img:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80' },
  { id:2, cat:'nature', title:'Golden hour in the meadow', desc:'The most magical light happens just before sunset. Soft, warm, and fleeting.', author:'Kai Summers', authorImg:`https://ui-avatars.com/api/?name=Kai+Summers&background=fff9c4&color=f57f17&size=40&bold=true`, likes:5102, h:240, color:'#fff9c4', img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  { id:3, cat:'nature', title:'Mossy waterfall hideaway', desc:'Hidden waterfalls are nature\'s best-kept secrets. Cool, misty, and utterly serene.', author:'River Stone', authorImg:`https://ui-avatars.com/api/?name=River+Stone&background=b2dfdb&color=00695c&size=40&bold=true`, likes:2987, h:380, color:'#b2dfdb', img:'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80' },
  // architecture
  { id:4, cat:'architecture', title:'Brutalist beauty in concrete', desc:'The raw honesty of brutalist architecture—form follows function in the most dramatic way possible.', author:'Marco Arch', authorImg:`https://ui-avatars.com/api/?name=Marco+Arch&background=cfd8dc&color=37474f&size=40&bold=true`, likes:1872, h:300, color:'#cfd8dc', img:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80' },
  { id:5, cat:'architecture', title:'Japanese minimalist home', desc:'Less is more. This Kyoto-inspired residence shows how restraint creates tranquility.', author:'Yuki Nakamura', authorImg:`https://ui-avatars.com/api/?name=Yuki+Nakamura&background=f5f5f5&color=424242&size=40&bold=true`, likes:4561, h:260, color:'#f5f5f5', img:'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&q=80' },
  { id:6, cat:'architecture', title:'Spiral staircase abstraction', desc:'Geometry in motion. This photograph captures the hypnotic rhythm of a century-old staircase.', author:'Lens Studio', authorImg:`https://ui-avatars.com/api/?name=Lens+Studio&background=e8eaf6&color=3949ab&size=40&bold=true`, likes:7834, h:350, color:'#e8eaf6', img:'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=400&q=80' },
  // food
  { id:7, cat:'food', title:'Ramen perfected', desc:'Twelve-hour broth, hand-pulled noodles, soft egg. This bowl is a labor of love.', author:'Chef Tanaka', authorImg:`https://ui-avatars.com/api/?name=Chef+Tanaka&background=ffe0b2&color=e65100&size=40&bold=true`, likes:9203, h:280, color:'#ffe0b2', img:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80' },
  { id:8, cat:'food', title:'Sourdough from scratch', desc:'48-hour ferment, scored and baked in a cast iron. The crust shatters perfectly.', author:'Bread & Butter', authorImg:`https://ui-avatars.com/api/?name=Bread+Butter&background=d7ccc8&color=4e342e&size=40&bold=true`, likes:6741, h:230, color:'#d7ccc8', img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80' },
  { id:9, cat:'food', title:'Açaí bowl vibes', desc:'Summer in a bowl. Fresh fruit, granola, honey drizzle, and pure happiness.', author:'Tropical Table', authorImg:`https://imgs.search.brave.com/EMiipStqN-8zOr8RtxMn5O990crCixvqTrhai5Xan0g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMi82/NzRlYjVhNmU5ODkz/XzgxOWU4c2VxNGF2/NzFfXzcwMC5qcGc`, likes:4422, h:310, color:'#e1bee7', img:'https://imgs.search.brave.com/EMiipStqN-8zOr8RtxMn5O990crCixvqTrhai5Xan0g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Ym9yZWRwYW5kYS5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMi82/NzRlYjVhNmU5ODkz/XzgxOWU4c2VxNGF2/NzFfXzcwMC5qcGc' },
  // fashion
  { id:10, cat:'fashion', title:'Effortless linen summer', desc:'Natural fabrics, muted tones, and confidence. This is slow fashion done right.', author:'Studio Mila', authorImg:`https://ui-avatars.com/api/?name=Studio+Mila&background=fff8e1&color=f57f17&size=40&bold=true`, likes:8102, h:360, color:'#fff8e1', img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80' },
  { id:11, cat:'fashion', title:'Vintage denim everything', desc:'The perfect pair of jeans never goes out of style. Thrifted, loved, worn in perfectly.', author:'Second Hand Soul', authorImg:`https://ui-avatars.com/api/?name=Second+Hand&background=bbdefb&color=1565c0&size=40&bold=true`, likes:3389, h:290, color:'#bbdefb', img:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80' },
  // travel
  { id:12, cat:'travel', title:'Santorini at dawn', desc:'Before the tourists arrive, the island breathes. Blue domes, whitewashed walls, silence.', author:'Wanderlust Diaries', authorImg:`https://ui-avatars.com/api/?name=Wanderlust+Diaries&background=bbdefb&color=0d47a1&size=40&bold=true`, likes:12045, h:270, color:'#bbdefb', img:'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80' },
  { id:13, cat:'travel', title:'Train through the Alps', desc:'Every tunnel reveals a new paradise. The Glacier Express is the world\'s most scenic train journey.', author:'Rail & Trail', authorImg:`https://ui-avatars.com/api/?name=Rail+Trail&background=c8e6c9&color=2e7d32&size=40&bold=true`, likes:5678, h:330, color:'#c8e6c9', img:'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80' },
  { id:14, cat:'travel', title:'Kyoto bamboo grove', desc:'Walk through the Arashiyama bamboo forest and lose yourself in another world entirely.', author:'Far East Dreams', authorImg:`https://ui-avatars.com/api/?name=Far+East&background=dcedc8&color=33691e&size=40&bold=true`, likes:9887, h:420, color:'#dcedc8', img:'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80' },
  // art
  { id:15, cat:'art', title:'Watercolor blooms', desc:'Loose, expressive botanical painting. Let the paint lead—that\'s where the magic lives.', author:'Petal & Pigment', authorImg:`https://ui-avatars.com/api/?name=Petal+Pigment&background=f8bbd0&color=880e4f&size=40&bold=true`, likes:6234, h:300, color:'#f8bbd0', img:'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&q=80' },
  { id:16, cat:'art', title:'Abstract geometry study', desc:'Primary colors, clean lines, and bold geometry. Inspired by Mondrian and Bauhaus.', author:'Form & Function', authorImg:`https://ui-avatars.com/api/?name=Form+Function&background=fff9c4&color=f57f17&size=40&bold=true`, likes:3412, h:260, color:'#fff9c4', img:'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=80' },
  // interior
  { id:17, cat:'interior', title:'Wabi-sabi living room', desc:'Imperfect beauty: raw wood, natural linen, ceramics with stories. A room that breathes.', author:'Home Philosophy', authorImg:`https://ui-avatars.com/api/?name=Home+Philosophy&background=efebe9&color=4e342e&size=40&bold=true`, likes:7123, h:310, color:'#efebe9', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
  { id:18, cat:'interior', title:'Mid-century modern study', desc:'Eames chair, walnut desk, pendant lamp. The study as a sanctuary for deep work.', author:'Design Refuge', authorImg:`https://ui-avatars.com/api/?name=Design+Refuge&background=ffe0b2&color=e65100&size=40&bold=true`, likes:4891, h:280, color:'#ffe0b2', img:'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80' },
  // tech
  { id:19, cat:'tech', title:'Mechanical keyboard obsession', desc:'The satisfying click of custom switches. This hobby is both expensive and deeply rewarding.', author:'Techcraft', authorImg:`https://ui-avatars.com/api/?name=Tech+Craft&background=e8eaf6&color=3949ab&size=40&bold=true`, likes:5503, h:250, color:'#e8eaf6', img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80' },
  { id:20, cat:'tech', title:'Minimal desk setup', desc:'Cable management is self-care. One monitor, one plant, zero distractions.', author:'Setup Goals', authorImg:`https://ui-avatars.com/api/?name=Setup+Goals&background=cfd8dc&color=37474f&size=40&bold=true`, likes:8234, h:290, color:'#cfd8dc', img:'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80' },
  // wellness
  { id:21, cat:'wellness', title:'Sunrise yoga on the rooftop', desc:'Start before the world wakes up. An hour of movement sets the tone for everything.', author:'Dawn Practice', authorImg:`https://ui-avatars.com/api/?name=Dawn+Practice&background=fff3e0&color=e65100&size=40&bold=true`, likes:6789, h:350, color:'#fff3e0', img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80' },
  { id:22, cat:'wellness', title:'Matcha morning ritual', desc:'Ceremonial grade, bamboo whisk, ceramic bowl. A slow morning is a productive morning.', author:'Tea & Calm', authorImg:`https://ui-avatars.com/api/?name=Tea+Calm&background=c8e6c9&color=2e7d32&size=40&bold=true`, likes:4234, h:270, color:'#c8e6c9', img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
  // extras
  { id:23, cat:'nature', title:'Desert sunset layers', desc:'The Atacama sky turns into a painting every evening. No filter necessary.', author:'Dune Walker', authorImg:`https://ui-avatars.com/api/?name=Dune+Walker&background=ffe0b2&color=bf360c&size=40&bold=true`, likes:7102, h:300, color:'#ffe0b2', img:'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80' },
  { id:24, cat:'food', title:'Neapolitan pizza masterclass', desc:'72-hour dough, San Marzano tomatoes, fior di latte. Italy in every bite.', author:'Dough & Flame', authorImg:`https://ui-avatars.com/api/?name=Dough+Flame&background=ffccbc&color=bf360c&size=40&bold=true`, likes:11203, h:260, color:'#ffccbc', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
  { id:25, cat:'travel', title:'Northern Lights dance', desc:'Tromso, Norway. Minus 20°C, but this light show makes every frozen second worthwhile.', author:'Aurora Chasers', authorImg:`https://ui-avatars.com/api/?name=Aurora+Chasers&background=e8eaf6&color=283593&size=40&bold=true`, likes:18432, h:380, color:'#e8eaf6', img:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80' },
  { id:26, cat:'art', title:'Street mural magic', desc:'Berlin\'s walls are outdoor galleries. This piece took 3 artists and 2 weeks to complete.', author:'Urban Canvas', authorImg:`https://ui-avatars.com/api/?name=Urban+Canvas&background=e1bee7&color=6a1b9a&size=40&bold=true`, likes:5621, h:330, color:'#e1bee7', img:'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&q=80' },
  { id:27, cat:'interior', title:'Cozy reading nook perfection', desc:'Built-in shelves, window seat, afternoon light. This corner is where novels come alive.', author:'Bookshelf Dreams', authorImg:`https://ui-avatars.com/api/?name=Bookshelf+Dreams&background=d7ccc8&color=4e342e&size=40&bold=true`, likes:9102, h:290, color:'#d7ccc8', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
];

let currentCat = 'all';
let savedPins = new Set();
let currentPin = null;

// ── RENDER ────────────────────────────────────────────────
function renderPins(cat, query='') {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  let filtered = cat === 'all' ? pins : pins.filter(p => p.cat === cat);
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    );
  }

  filtered.forEach((pin, i) => {
    const card = document.createElement('div');
    card.className = 'pin' + (savedPins.has(pin.id) ? ' saved' : '');
    card.style.animationDelay = `${i * 0.04}s`;

    card.innerHTML = `
      <div class="pin-img-wrap">
        <img src="${pin.img}" alt="${pin.title}" loading="lazy" style="height:${pin.h}px;object-fit:cover;">
        <div class="pin-overlay">
          <div class="pin-actions">
            <button class="pin-btn save" onclick="toggleSave(event,${pin.id})">${savedPins.has(pin.id)?'Saved':'Save'}</button>
            <button class="pin-btn" title="Share" onclick="share(event,'${pin.title}')">↗</button>
            <button class="pin-btn" title="More">⋯</button>
          </div>
        </div>
        <div class="saved-badge">✓ Saved</div>
      </div>
      <div class="pin-info">
        <div class="pin-title">${pin.title}</div>
        <div class="pin-meta">
          <img class="pin-avatar" src="${pin.authorImg}" alt="${pin.author}">
          <span class="pin-author">${pin.author}</span>
          <span class="pin-likes">♥ ${(pin.likes/1000).toFixed(1)}k</span>
        </div>
      </div>`;

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.pin-btn')) openModal(pin);
    });

    grid.appendChild(card);
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 20px;color:var(--muted)">
      <div style="font-size:3rem">🔍</div>
      <p style="font-size:1.1rem;margin-top:12px;font-weight:600">No pins found for "${query || cat}"</p>
    </div>`;
  }
}

// ── SAVE ──────────────────────────────────────────────────
function toggleSave(e, id) {
  e.stopPropagation();
  if (savedPins.has(id)) {
    savedPins.delete(id);
    showToast('Removed from saved');
  } else {
    savedPins.add(id);
    showToast('✅ Saved to your board!');
  }
  renderPins(currentCat, document.getElementById('searchInput').value);
}

function share(e, title) {
  e.stopPropagation();
  navigator.clipboard?.writeText(location.href).catch(()=>{});
  showToast(`🔗 Link copied for "${title.slice(0,20)}…"`);
}

// ── MODAL ─────────────────────────────────────────────────
function openModal(pin) {
  currentPin = pin;
  document.getElementById('modalImg').src = pin.img;
  document.getElementById('modalTitle').textContent = pin.title;
  document.getElementById('modalDesc').textContent = pin.desc;
  document.getElementById('modalAvatar').src = pin.authorImg;
  document.getElementById('modalAuthorName').textContent = pin.author;
  document.getElementById('modalAuthorSub').textContent = `${(pin.likes/1000).toFixed(1)}k saves • ${pin.cat}`;
  document.getElementById('modalSaveBtn').textContent = savedPins.has(pin.id) ? '✓ Saved' : 'Save';
  document.getElementById('modalSaveBtn').style.background = savedPins.has(pin.id) ? '#111' : 'var(--red)';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (!e || e.target === document.getElementById('modalOverlay') || e.currentTarget.classList.contains('modal-close')) {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
}

function modalSave() {
  if (!currentPin) return;
  toggleSave({ stopPropagation: ()=>{} }, currentPin.id);
  document.getElementById('modalSaveBtn').textContent = savedPins.has(currentPin.id) ? '✓ Saved' : 'Save';
  document.getElementById('modalSaveBtn').style.background = savedPins.has(currentPin.id) ? '#111' : 'var(--red)';
}

// close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal({ target: document.getElementById('modalOverlay') });
});

// ── TABS ──────────────────────────────────────────────────
document.getElementById('tabsBar').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  currentCat = tab.dataset.cat;
  renderPins(currentCat, document.getElementById('searchInput').value);
});

// ── SEARCH ────────────────────────────────────────────────
let searchTimer;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    renderPins(currentCat, e.target.value.trim());
  }, 260);
});

// ── TOAST ─────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

// ── SCROLL PROGRESS ───────────────────────────────────────
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('scrollLine').style.width = pct + '%';
});

// ── INIT ──────────────────────────────────────────────────

renderPins('all');
