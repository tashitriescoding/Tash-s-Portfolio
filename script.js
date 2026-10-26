/* ===== EDIT YOUR CONTENT HERE ===== */
const ME = {name:"Atasha Santiago", email:"atashasantiago512@gmail.com"};
const SECTIONS = [
  {id:"about",    ico:'<b class="bear"></b>', label:"about", tip:"who i am, my education and highlights"},
  {id:"links",    ico:'<b class="ic ic-link"></b>', label:"links", tip:"find me around the internet"},
  {id:"work",     ico:'<b class="ic ic-work"><u></u></b>', label:"work", tip:"my tools, skills and projects"},
  {id:"faq",      ico:"?", label:"faq", tip:"answers to common questions"},
  {id:"contact",  ico:"✉", label:"contact", tip:"send me an email"},
  {id:"downloads",ico:"★", label:"fun stuff", tip:"fun personal projects, coming soon"}
];

/* ===== PROJECTS: add one entry per project =====
   id      short name with no spaces (used internally)
   title   shown on the card and in the window bar
   tag     one short line under the title (award, year, role...)
   shots   screenshot files, e.g. ["projects/kanato-1.png","projects/kanato-2.png"]. leave [] to show a placeholder
   desc    a few sentences about what it is and what you built
   tags    little pills (tech, tools...)
   link    where the button goes (a public link: live site, github, figma, devpost, demo video...). leave "" if there isn't one yet
   cta     the button text */
const PROJECTS = [
  {id:"kanato", title:"KANATO", tag:"1st place · HackUSC Hackathon 2026",
   thumb:"projects/kanato-cover.png",   // optional: the image used on the tile (defaults to the first screenshot)
   shots:[   // add {src, alt, fit:"top"} for tall screenshots so the slide shows their top part (click an image to see it in full)
     {src:"projects/kanato-spread.png", alt:"KANATO UI overview with three screens: civic reporting form, civic feed, and civic statistics"},
     {src:"projects/kanato-feed.png", alt:"KANATO civic feed listing reported issues such as potholes and flooding, with category filters, vote counts and status labels", fit:"top"}
   ],
   desc:"A civic engagement app made for the HackUSC 2026 Hackathon, where it won 1st place. It was hosted on Google Apps Script, with its database based in Google Sheets, and it was built using both JavaScript and HTML.<br><br><b>Note:</b> signing in to the app may not be accessible to visitors, so please go through the photo carousel above to look through a demo.",
   tags:["Backend: Google Apps Script","Database: Google Sheets","Languages: JavaScript & HTML","Hosted on Google Apps Script"],
   link:"https://script.google.com/macros/s/AKfycbxSuQ9QELKLqfIgR2xi6x7R1E6VVtZWCekoRB31jXfH6QeT-58Graaxe9pUnUbkUr4/exec", cta:"view live project"},
  {id:"oneatatime", title:"One at a Time", tag:"Personal project · study aid",
   thumb:"projects/one-at-a-time-screenshot.png",
   shots:[
     {src:"projects/one-at-a-time-spread.png", alt:"One at a Time UI spread: adding a task, focusing on a single task, and peeking at the queue of upcoming tasks"},
     {src:"projects/one-at-a-time-spread-2.png", alt:"One at a Time UI spread: notes shown on hover, editing a task with locked urgency, and ticking a task off"}
   ],
   desc:"A personal study aid to-do list I made to help me plan out my work better. It’s a gentle to-do list for people who always pick the easy task first: add your tasks, set how urgent they are, and the app shows only one at a time, with the next one peeking in below. You can’t skip ahead, so you tick it off to move on. It has a soft pastel design with a blinking blob mascot, and it’s built with plain HTML, CSS and JavaScript, no frameworks.",
   tags:["Built with plain HTML, CSS & JavaScript","No frameworks","No server backend","Hosted on GitHub Pages"],
   link:"https://tashitriescoding.github.io/One-at-a-Time/", cta:"view live project"},
  {id:"ubayubay", title:"Ubay-Ubay for FASO", tag:"Website · FASO UP",
   thumb:"projects/ubay-ubay-cover.png",
   shots:[
     {src:"projects/ubay-ubay-cover.png", alt:"Ubay-Ubay for FASO landing page: an orange grid background with colorful shape button pins and the headline Make your own button pin, Artists wanted"}
   ],
   desc:"A website I made to help a friend better organize her organization’s events at FASO UP. It includes updates and FAQs on the organization’s events, as well as sign-ups and applications for the different services the organization offers. It also has an admin backend for easy management, so the site can keep running smoothly even when I, as the developer, can be hands-off.<br><br>The site is built with JavaScript, HTML and CSS. Its email send-outs are handled by Google Apps Script, and its database is on Google Sheets.",
   tags:["Languages: JavaScript, HTML & CSS","Email send-outs: Google Apps Script","Database: Google Sheets","Admin backend with staff login","Hosted on GitHub Pages"],
   link:"https://tashitriescoding.github.io/Ubay-Ubay/", cta:"view live project"},
  {id:"hakabao", title:"HAKABAO", tag:"Finalist · Accenture Breaking Barriers, Building Bridges 2025",
   thumb:"projects/hakabao-cover.png",
   shots:[
     {src:"projects/hakabao-cover.png", alt:"HAKABAO title slide: a phone showing the login screen with the carabao mascot, a watercolor mountain, and the UN sustainable development goal icons"},
     {src:"projects/hakabao-spread.png", alt:"HAKABAO app screens: login, main menu, step tracker showing 942 steps, and choose a challenge with 5k, 10k and 20k options"},
     {src:"projects/hakabao-stats.png", alt:"HAKABAO statistics screen showing steps, distance, pace and time, next to the University of San Carlos logo and three sustainable development goals"},
     {src:"projects/hakabao-tracker.png", alt:"HAKABAO step tracker screen with the carabao mascot, a step count of 942, and start, reset, statistics, distance and home buttons"}
   ],
   desc:"My first hackathon submission, entered as a finalist in Accenture’s 2025 Breaking Barriers, Building Bridges Hackathon for Girls. HAKABAO is a gamified step tracking fitness app with a digital walking companion, designed to encourage Cebuanos to stay active by walking through the city instead of relying on vehicles.",
   tags:["hackathon","fitness app","gamified"],
   link:"", cta:"view live project"}    // add a link (demo, repo, video...) here when you have one
];
const shotOf = (p,i)=>{ const s=p.shots[i]; return typeof s==="string"?{src:s,alt:`${p.title} screenshot ${i+1}`}:s; };
const projCards = ()=>`<div class="grid">${PROJECTS.map(p=>`<button class="gal" data-open="proj-${p.id}" data-tip="open ${p.title}"><b${p.thumb||p.shots.length?` style="background-image:url('${p.thumb||shotOf(p,0).src}')"`:""}></b><small>${p.title}</small></button>`).join("")}<div class="gal soon"><b style="background-image:url('projects/more-projects.png')" role="img" aria-label="a hamster typing on a laptop"></b><small>more projects to come</small></div></div>`;
const carousel = p=>{
  const n=p.shots.length;
  const slides = n ? p.shots.map((_,i)=>{const x=shotOf(p,i); return `<div class="slide" role="group" aria-roledescription="slide" aria-label="${i+1} of ${n}"><button class="zoom" data-zoom="${p.id}:${i}" aria-label="enlarge image ${i+1} of ${n}" data-tip="click to enlarge"><img class="${x.fit==="top"?"top":""}" src="${x.src}" alt="${x.alt}" loading="lazy"></button></div>`;}).join("")
                   : `<div class="slide ph" role="img" aria-label="screenshots of ${p.title} coming soon">screenshots coming soon</div>`;
  const nav = n>1 ? `<button class="car-btn prev" data-car="-1" aria-label="previous image" data-tip="previous image">‹</button><button class="car-btn next" data-car="1" aria-label="next image" data-tip="next image">›</button>
    <div class="car-foot"><div class="car-dots">${p.shots.map((_,i)=>`<button data-go="${i}" class="${i?"":"on"}" aria-label="go to image ${i+1}" data-tip="image ${i+1}"></button>`).join("")}</div><span class="car-count" aria-live="polite">1 / ${n}</span></div>` : "";
  return `<div class="car" role="region" aria-roledescription="carousel" aria-label="${p.title} images"><div class="car-track" tabindex="0" aria-label="${p.title} images, use the left and right arrow keys">${slides}</div>${nav}</div>`;
};
const projWin = p=>({title:p.title, cls:"proj-win", html:
  `${carousel(p)}
   <p class="note">${p.tag}</p><p>${p.desc}</p>
   ${p.tags&&p.tags.length?`<div class="pills">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div>`:""}
   <p>${p.link?`<a class="btn" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="${p.cta} for ${p.title} (opens in a new tab)" data-tip="open ${p.title} in a new tab">${p.cta}</a>`:`<span class="btn off" aria-disabled="true" data-tip="no link yet">link coming soon</span>`}</p>`});
const row = (t,url)=>`<a class="linkrow" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${t} (opens in a new tab)" data-tip="open ${t} in a new tab">${t}</a>`;
const WIN = {
  about:{title:"about", html:`<div class="me"><div class="av"></div><div><b>${ME.name}</b><br>based in Cebu City, Philippines<br><span class="note">BS Computer Science student · aspiring developer</span></div></div>
    <hr><p>hi! i’m ${ME.name}, a computer science student at the University of San Carlos. i…</p>
    <ul><li>build apps and web projects</li><li>design interfaces and wireframes in <b>Figma</b></li><li>practice frontend web development</li><li>compete in <b>hackathons, capture the flag (CTF), and case study innovation events</b>!</li></ul>
    <p>interested in working together? send me an email at ${ME.email} :)</p>
    <h3>HIGHLIGHTS</h3>
    <ul><li><b>1st place</b>, HackUSC Hackathon (2026) with KANATO, a civic engagement app</li><li><b>Top 10</b>, Accenture Breaking Barriers, Building Bridges Hackathon (2025) with <b>HAKABAO</b>, a gamified fitness step tracker</li><li><b>Top 5</b>, Line Following Robot, USC RoboCon 2025</li></ul>
    <h3>EDUCATION</h3><p><b>BS Computer Science</b>, University of San Carlos – Talamban Campus (2025–present)<br><b>STEM</b>, University of San Carlos – North Campus (2023–2025)</p>
    <h3>INVOLVEMENT</h3>
    <ul><li><b>External Relations and Logistics Head Officer</b>, Google Developer Groups on Campus USC</li><li><b>Head Secretary</b>, Innovare: USC Competition Guild</li><li><b>PRO, Secretary, and Vice President</b>, Cebu Centennial Leo Club (2023–2026)</li><li><b>Member</b>, Moriarity CTF team (Capture the Flag)</li></ul>
    <h3>OTHER INTERESTS</h3><div class="pills"><span>games</span><span>reading</span><span>baking</span><span>puzzles</span><span>language learning</span></div>
    <h3>LANGUAGES (Conversational & Learning)</h3><p>English, Bisaya, Mandarin, Korean</p>`},
  links:{title:"links", html:`${row("instagram","https://www.instagram.com/hi__tash.i7/")}${row("facebook","https://www.facebook.com/tash07lim/")}${row("github","https://github.com/tashitriescoding")}<p class="note">clicking any link opens a new tab!</p>`},
  work:{title:"work", html:`<p><b>Accepting work offers via my work email!</b><br>I do web design, and development, promotional material graphics, and more! :)</p>
    <h3>PROJECTS</h3>${projCards()}
    <h3>TOOLS</h3><div class="pills"><span>Google Workspace</span><span>n8n</span><span>Notion</span><span>Canva</span><span>Affinity</span><span>Figma</span></div>
    <h3>DEVELOPMENT</h3><div class="pills"><span>JavaScript</span><span>HTML/CSS</span><span>C</span></div>
`},
  faq:{title:"frequently asked questions", html:`<details open><summary>are you open for commissions?</summary><p>Yes! Email me with the details („• ֊ •„)</p></details>
    <details><summary>what tools do you use?</summary><p>See the work window for the full list!</p></details>`},
  contact:{title:"contact", html:`<h2>yayy mail!</h2><p>the easiest way to contact me is through email! i don’t really check my social media messages, so please direct questions to my email instead.</p>
    <p>email me at: <b>${ME.email}</b><br>or press the button below to open a draft in Gmail.</p><a class="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(ME.email)}" target="_blank" rel="noopener noreferrer" aria-label="send me an email (opens a Gmail draft in a new tab)" data-tip="opens a Gmail draft in a new tab">send me an email!</a>`},
  downloads:{title:"fun stuff", html:`<p>fun personal projects for your enjoyment coming soon! <br>ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</br></p>`}
};
PROJECTS.forEach(p=>{ WIN["proj-"+p.id]=projWin(p); });
/* ===== ENGINE ===== */
const $ = s=>document.querySelector(s);
let z = 20, n = 0, sfxOn = false, actx;
$("#icons").innerHTML = SECTIONS.map(s=>`<button class="ico" data-open="${s.id}" data-tip="${s.tip}"><i aria-hidden="true">${s.ico}</i><span>${s.label}</span></button>`).join("");

/* everything on the desktop can be moved; positions are remembered */
let POS = {}, justDragged = false; try{ POS = JSON.parse(localStorage.getItem("dtPos")||"{}"); }catch(e){}
function place(el){ const p = POS[el.dataset.mid]||[0,0]; el.style.transform = `translate(${p[0]}px,${p[1]}px)`; }
function makeMovable(el,id){
  el.dataset.mid = id; place(el);
  el.addEventListener("pointerdown",e=>{
    if(e.target.closest("#play")) return;
    const sx = e.clientX, sy = e.clientY, p0 = POS[id]||[0,0]; let moved = false;
    el.setPointerCapture(e.pointerId);
    const mv = ev=>{
      const dx = ev.clientX-sx, dy = ev.clientY-sy;
      if(!moved && Math.hypot(dx,dy)<6) return;
      moved = true; POS[id] = [p0[0]+dx, p0[1]+dy]; place(el);
    };
    const up = ()=>{
      el.removeEventListener("pointermove",mv); el.removeEventListener("pointerup",up); el.removeEventListener("pointercancel",up);
      if(moved){ justDragged = true; setTimeout(()=>{justDragged=false},80); try{ localStorage.setItem("dtPos",JSON.stringify(POS)); }catch(e){} beep(380,460); }
    };
    el.addEventListener("pointermove",mv); el.addEventListener("pointerup",up); el.addEventListener("pointercancel",up);
  });
}
document.querySelectorAll(".ico").forEach(b=>makeMovable(b,b.dataset.open));
makeMovable($("#hero"),"hero"); makeMovable($(".dock"),"dock");
$("#tidy").onclick = ()=>{ POS = {}; try{ localStorage.removeItem("dtPos"); }catch(e){} document.querySelectorAll("[data-mid]").forEach(place); beep(600,400); };

function beep(a,b){
  if(!sfxOn) return;
  try{
    actx = actx||new (window.AudioContext||window.webkitAudioContext)();
    const o=actx.createOscillator(), g=actx.createGain(), t=actx.currentTime;
    o.type="triangle"; o.frequency.setValueAtTime(a,t); o.frequency.linearRampToValueAtTime(b,t+.09);
    g.gain.setValueAtTime(.08,t); g.gain.exponentialRampToValueAtTime(.001,t+.14);
    o.connect(g); g.connect(actx.destination); o.start(); o.stop(t+.15);
  }catch(e){}
}
function openWin(id){
  let w = document.querySelector(`.win[data-id="${id}"]`);
  if(w){ w.style.zIndex=++z; return; }
  const d = WIN[id]; if(!d) return;
  w = document.createElement("div");
  w.className="win"+(d.cls?" "+d.cls:""); w.dataset.id=id; w.setAttribute("role","dialog"); w.setAttribute("aria-label",d.title);
  const k = n++%6;
  w.style.left = Math.max(10,Math.min(innerWidth-490,innerWidth/2-235+(k-2)*36))+"px";
  w.style.top = (70+k*32)+"px"; w.style.zIndex=++z;
  w.innerHTML = `<div class="bar"><span>${d.title}</span><button aria-label="Close ${d.title}" data-tip="close this window">×</button></div><div class="wb">${d.html}</div>`;
  document.body.appendChild(w); beep(520,760);
  w.addEventListener("pointerdown",()=>{w.style.zIndex=++z});
  w.querySelector("button").onclick = ()=>{ w.remove(); beep(420,260); };
  const bar = w.querySelector(".bar");
  bar.addEventListener("pointerdown",e=>{
    if(e.target.closest("button")) return;
    const r=w.getBoundingClientRect(), dx=e.clientX-r.left, dy=e.clientY-r.top;
    bar.setPointerCapture(e.pointerId);
    const mv=ev=>{ w.style.left=Math.max(0,Math.min(innerWidth-60,ev.clientX-dx))+"px"; w.style.top=Math.max(0,Math.min(innerHeight-40,ev.clientY-dy))+"px"; };
    const up=()=>{ bar.removeEventListener("pointermove",mv); bar.removeEventListener("pointerup",up); };
    bar.addEventListener("pointermove",mv); bar.addEventListener("pointerup",up);
  });
}
document.addEventListener("click",e=>{ const t=e.target.closest("[data-open]"); if(t && !justDragged) openWin(t.dataset.open); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape"){ const a=[...document.querySelectorAll(".win")].sort((x,y)=>y.style.zIndex-x.style.zIndex); if(a[0]){a[0].remove();beep(420,260);} } });

/* dark mode + sfx */
const root=document.documentElement, tb=$("#theme"), sb=$("#sfx");
function setTheme(t){ root.dataset.theme=t; tb.dataset.tip=t==="dark"?"switch to light mode":"switch to dark mode"; tb.setAttribute("aria-pressed",t==="dark"); tb.textContent=t==="dark"?"☀":"☾"; try{localStorage.setItem("dtTheme",t)}catch(e){} }
let saved=null; try{saved=localStorage.getItem("dtTheme")}catch(e){}
setTheme(saved||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));
tb.onclick=()=>{ setTheme(root.dataset.theme==="dark"?"light":"dark"); refreshTip(); beep(600,480); };
sb.onclick=()=>{ sfxOn=!sfxOn; sb.setAttribute("aria-pressed",sfxOn); sb.dataset.tip=sfxOn?"sound effects are on. click to turn them off":"sound effects are off. click to turn them on"; refreshTip(); beep(500,900); };

/* music player: plays music.mp3 on loop, mascot stops bobbing when paused */
const bgm=new Audio("music.mp3"); bgm.loop=true; bgm.volume=.5;
let playing=false; const pet=$("#pet"), pb=$("#play");
function setPlay(on){
  playing=on; pet.classList.toggle("off",!on); pb.textContent=on?"stop ■":"play ♪"; pb.dataset.tip=on?"pause the background music":"play the background music"; refreshTip();
  if(on){ bgm.play().catch(()=>{ playing=false; pet.classList.add("off"); pb.textContent="play ♪"; pb.dataset.tip="play the background music"; }); } else { bgm.pause(); }
}
pb.onclick=()=>setPlay(!playing);
pet.classList.add("off"); pb.textContent="play ♪";

/* mobile notice */
if(innerWidth<768) $("#modal").classList.add("on");
$("#okay").onclick=()=>$("#modal").classList.remove("on");


/* hover descriptions: any element with data-tip gets a small popup on hover or keyboard focus */
const tipEl = document.createElement("div"); tipEl.className = "tip"; tipEl.setAttribute("role","tooltip"); document.body.appendChild(tipEl);
let tipFor = null, tipTimer = null;
const canHover = matchMedia("(hover:hover)");
function placeTip(){
  if(!tipFor) return;
  const r = tipFor.getBoundingClientRect(), w = tipEl.offsetWidth, h = tipEl.offsetHeight, gap = 10;
  let x = r.left + r.width/2 - w/2, y = r.bottom + gap;
  if(y + h > innerHeight - 8) y = r.top - h - gap;           // not enough room below: go above
  x = Math.max(8, Math.min(innerWidth - w - 8, x)); y = Math.max(8, y);
  tipEl.style.transform = ""; tipEl.style.left = x + "px"; tipEl.style.top = y + "px";
}
function showTip(el, delay){
  clearTimeout(tipTimer); tipFor = el;
  tipTimer = setTimeout(()=>{ if(tipFor!==el || !document.body.contains(el)) return; tipEl.textContent = el.dataset.tip; placeTip(); tipEl.classList.add("on"); }, delay);
}
function hideTip(){ clearTimeout(tipTimer); tipFor = null; tipEl.classList.remove("on"); }
function refreshTip(){ if(tipFor && tipEl.classList.contains("on")){ tipEl.textContent = tipFor.dataset.tip; placeTip(); } }
document.addEventListener("mouseover",e=>{ if(!canHover.matches) return; const t = e.target.closest("[data-tip]"); if(t && t!==tipFor) showTip(t,250); else if(!t) hideTip(); });
document.addEventListener("mouseout",e=>{ const t = e.target.closest("[data-tip]"); if(t && !t.contains(e.relatedTarget)) hideTip(); });
document.addEventListener("focusin",e=>{ const t = e.target.closest("[data-tip]"); if(t && t.matches(":focus-visible")) showTip(t,0); });
document.addEventListener("focusout",e=>{ if(tipFor && tipFor===e.target.closest("[data-tip]")) hideTip(); });
document.addEventListener("pointerdown",e=>{ if(e.target.closest("[data-mid], .bar") && !e.target.closest("#play, .bar button")) hideTip(); },true);   // hide when dragging things
document.addEventListener("keydown",e=>{ if(e.key==="Escape") hideTip(); },true);
addEventListener("resize",hideTip);


/* project carousel: arrows, dots, swipe/scroll, and left/right arrow keys */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
const carIdx = t=>Math.round(t.scrollLeft/t.clientWidth);
function carGo(car,i){ const t=car.querySelector(".car-track"), n=t.children.length; i=(i+n)%n; t.scrollTo({left:i*t.clientWidth,behavior:reduceMotion.matches?"auto":"smooth"}); }
function carSync(t){
  const car=t.closest(".car"), i=carIdx(t);
  car.querySelectorAll(".car-dots button").forEach((d,k)=>{ d.classList.toggle("on",k===i); d.setAttribute("aria-current",k===i); });
  const c=car.querySelector(".car-count"); if(c) c.textContent=`${i+1} / ${t.children.length}`;
}
document.addEventListener("scroll",e=>{ if(e.target.classList && e.target.classList.contains("car-track")) carSync(e.target); },true);
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-car],[data-go]"); if(!b) return;
  const car=b.closest(".car"), t=car.querySelector(".car-track");
  carGo(car, b.dataset.go!==undefined ? +b.dataset.go : carIdx(t)+(+b.dataset.car)); beep(500,640);
});
document.addEventListener("keydown",e=>{
  const t=e.target; if(!(t.classList && t.classList.contains("car-track")) || (e.key!=="ArrowLeft" && e.key!=="ArrowRight")) return;
  e.preventDefault(); carGo(t.closest(".car"), carIdx(t)+(e.key==="ArrowRight"?1:-1));
});

/* click a carousel image to open it larger in its own little window */
document.addEventListener("click",e=>{
  const z=e.target.closest("[data-zoom]"); if(!z) return;
  const [id,i]=z.dataset.zoom.split(":"), p=PROJECTS.find(q=>q.id===id), x=shotOf(p,+i), key=`zoom-${id}-${i}`;
  WIN[key]=WIN[key]||{title:`${p.title} · image ${+i+1} of ${p.shots.length}`, cls:"zoom-win", html:`<img class="zoomimg" src="${x.src}" alt="${x.alt}">`};
  openWin(key);
});