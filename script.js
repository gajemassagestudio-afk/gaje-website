'use strict';

// Tek yetkili fiyat kaynağı: Kullanıcının paylaştığı Gaje Masaj Stüdyosu menüsü (Ekim 2026).
const services = [
  { id:'klasik', title:'Klasik Masaj', description:'Tüm beden için rahatlama', duration:60, price:1500, category:'body', icon:'✳', number:'01' , calLink:'cansu-cak%C4%B1r-zzcza8/klasik-masaj' },
  { id:'aromaterapi', title:'Aromaterapi Masajı', description:'Doğal yağlarla derin rahatlama', duration:60, price:1500, category:'body', icon:'❧', number:'02' , calLink:'cansu-cak%C4%B1r-zzcza8/aromaterapi-masaj%C4%B1' },
  { id:'derin-doku', title:'Derin Doku Masajı', description:'Kas gerginliklerine özel', duration:60, price:1800, category:'body', icon:'〰', number:'03' , calLink:'cansu-cak%C4%B1r-zzcza8/derin-doku-masaj%C4%B1' },
  { id:'lenf', title:'Lenf Drenaj', description:'Ödem atılımı ve hafifleme', duration:60, price:1800, category:'special', icon:'◈', number:'04' , calLink:'cansu-cak%C4%B1r-zzcza8/lenf-drenaj' },
  { id:'madero', title:'Maderoterapi', description:'Sıkılaşma ve şekillendirme', duration:60, price:1900, category:'special', icon:'◉', number:'05' , calLink:'cansu-cak%C4%B1r-zzcza8/maderoterapi' },
  { id:'thai', title:'Thai Masajı', description:'Esneklik ve enerji dengesi', duration:60, price:1900, category:'special', icon:'✦', number:'06' , calLink:'cansu-cak%C4%B1r-zzcza8/thai-masaj%C4%B1' },
  { id:'yuz', title:'Yüz Masajı', description:'Cilt bakımı ve doğal ışıltı', duration:40, price:1000, category:'face', icon:'✾', number:'07' , calLink:'cansu-cak%C4%B1r-zzcza8/yuz-masaj%C4%B1' },
  { id:'transbuccal', title:'Transbuccal Yüz Masajı', description:'Yüz hatlarında sıkılaşma', duration:50, price:1300, category:'face', icon:'❋', number:'08' , calLink:'cansu-cak%C4%B1r-zzcza8/transbuccal-yuz-masaj%C4%B1' },
  { id:'sporcu', title:'Sporcu Masajı', description:'Kasların yenilenmesi ve performans artışı', duration:60, price:1800, category:'special', icon:'✧', number:'09' , calLink:'cansu-cak%C4%B1r-zzcza8/sporcu-masaj%C4%B1' }
];

const packages = [
  { id:'rahatlama', title:'Rahatlama', label:'PAKETİ', count:'5 SEANS', badge:'KENDİNE BİR MOLA', contents:['5 seans Klasik / Aromaterapi Masajı'], original:7500, current:7000, perSession:1400, theme:'rose', icon:'❧' },
  { id:'derin-rahatlama', title:'Derin Rahatlama', label:'PAKETİ', count:'5 SEANS', badge:'DAHA DERİN BİR MOLA', contents:['5 seans Derin Doku Masajı'], original:9000, current:8000, perSession:1600, theme:'sage', icon:'◉' },
  { id:'yenilenme', title:'Yenilenme', label:'PAKETİ', count:'5 SEANS', badge:'TÜMÜYLE YENİLEN', contents:['2 Maderoterapi', '2 Lenf Drenaj', '1 Aromaterapi Masajı'], original:9300, current:8500, perSession:1700, theme:'cream', icon:'✾' },
  { id:'vip', title:'VIP 10’lu', label:'PAKET', count:'10 SEANS', badge:'ÖZEL BİR DENEYİM', contents:['2 Aromaterapi', '2 Klasik Masaj', '2 Derin Doku', '2 Lenf Drenaj', '1 Maderoterapi', '1 Transbuccal Yüz Masajı'], original:18000, current:16000, perSession:1600, theme:'rose2', icon:'♛', gift:true }
];
const money = n => new Intl.NumberFormat('tr-TR', {maximumFractionDigits:0}).format(n) + ' TL';
const book = (type, title) => `https://wa.me/905074886432?text=${encodeURIComponent(`Merhaba Cansu Hanım, Gaje Masaj Stüdyosu'nda ${title} ${type === 'paket' ? 'paketi' : 'için'} randevu ve uygun saatlerle ilgili bilgi almak istiyorum.`)}`;
const serviceGrid = document.getElementById('service-grid');
const packageGrid = document.getElementById('package-grid');

function renderServices(filter='all') {
  const filtered = services.filter(s => filter === 'all' || filter === s.category);
  serviceGrid.innerHTML = filtered.map(s => `
    <article class="service-card" id="service-${s.id}">
      <div class="service-top"><span class="service-index">${s.number} / 09</span></div>
      <h3>${s.title}</h3><p class="service-description">${s.description}</p>
      <div class="service-meta"><span>${s.duration} dk</span><strong>${money(s.price)}</strong></div>
      <p class="booking-note">Online rezervasyon · İşletme onayıyla kesinleşir</p>
      <button type="button" class="service-book" data-cal-link="${s.calLink}" data-cal-config='{"layout":"month_view"}' aria-label="${s.title} için online randevu talep et">Randevu Al</button>
    </article>`).join('');
}
function renderPackages(){
  packageGrid.innerHTML = packages.map(p => `
    <article class="package-card ${p.theme}" id="package-${p.id}">
      <div class="package-top"><span class="package-count">${p.count}</span></div>
      <p class="package-overline">${p.badge}</p>
      <h3>${p.title} <em>${p.label}</em></h3>
      <div class="package-contents">${p.contents.map(c=>`<p>${c}</p>`).join('')}</div>
      ${p.gift ? `<span class="gift-line">1 Yüz Masajı Hediye</span>` : ''}
      <div class="package-pricing"><del>${money(p.original)}</del><strong>${money(p.current)}</strong><small>SEANS BAŞI ${money(p.perSession)}</small></div>
      <a class="package-cta" href="${book('paket', p.title)}" target="_blank" rel="noopener noreferrer">Paketi Seç</a>
    </article>`).join('');
}
renderServices(); renderPackages();

// Cal.com'un resmi açılır rezervasyon penceresi. Bağlantılar aynı zamanda yedek
// yönlendirme olarak çalışır: widget yüklenmezse müşteriler Cal.com'a gidebilir.
(function (C, A, L) {
  const push = (api, args) => api.q.push(args);
  const d = C.document;
  C.Cal = C.Cal || function () {
    const cal = C.Cal, args = arguments;
    if (!cal.loaded) {
      cal.ns = {}; cal.q = cal.q || [];
      d.head.appendChild(d.createElement('script')).src = A;
      cal.loaded = true;
    }
    if (args[0] === L) {
      const api = function () { push(api, arguments); };
      const namespace = args[1];
      api.q = api.q || [];
      if (typeof namespace === 'string') {
        cal.ns[namespace] = cal.ns[namespace] || api;
        push(cal.ns[namespace], args);
        push(cal, ['initNamespace', namespace]);
      } else push(cal, args);
      return;
    }
    push(cal, args);
  };
})(window, 'https://app.cal.com/embed/embed.js', 'init');
Cal('init', { origin: 'https://cal.com' });
Cal('ui', { styles: { branding: { brandColor: '#805F64' } }, layout: 'month_view', hideEventTypeDetails: false });
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(el => {el.classList.remove('active');el.setAttribute('aria-pressed','false');});
    btn.classList.add('active');btn.setAttribute('aria-pressed','true');
    renderServices(btn.dataset.filter);
  });
});
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{let expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));toggle.setAttribute('aria-label',expanded?'Menüyü aç':'Menüyü kapat');nav.classList.toggle('is-open',!expanded);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menüyü aç');}));
window.addEventListener('keydown',e=>{if(e.key==='Escape' && nav.classList.contains('is-open')){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});
document.getElementById('year').textContent=new Date().getFullYear();

