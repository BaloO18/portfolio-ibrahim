// Traductions anglaises. Le français est lu directement dans la page.
const EN = {
  nav_apropos: "About",
  nav_expertises: "Expertise",
  nav_realisations: "Work",
  nav_parcours: "Background",
  nav_contact: "Contact",
  hero_tag: "Communication for development",
  hero_titre: "Communicating <em>with</em> communities, not just <em>for</em> them.",
  hero_lead: "I design strategies and content rooted in realities on the ground, from rural radio to digital channels.",
  hero_cta1: "Let's work together",
  hero_cta2: "See my work",
  hero_badge: "Communication specialist · Ouagadougou, Burkina Faso",
  apropos_tag: "About",
  apropos_titre: "A communication specialist, between the field and digital",
  apropos_p1: "I hold a Master's degree in Communication for Development from Université Aube Nouvelle (Ouagadougou). I focus on how information flows, and changes behaviours, in rural and pastoral communities in Burkina Faso.",
  apropos_p2: "Day to day, I work as a social media agent at Orange Burkina Faso, answering customers on its digital support channels. I also support organisations as a communication consultant.",
  apropos_p3: "My belief: the best strategy isn't the most modern one, it's the one that starts from people's realities.",
  ch1: "Communication for Development, 2025",
  ch2: "Independent communication consultant",
  ch3: "Social media agent, digital customer care",
  ch4: "Projects in French and English",
  exp_tag: "Expertise",
  exp_titre: "What I bring to your organisation",
  exp_intro: "Skills built for NGOs, development projects and institutions.",
  exp1_t: "Communication for development",
  exp1_d: "Behaviour change strategies, community mobilisation, messages co-created with local populations.",
  exp2_t: "Rural radio and local media",
  exp2_d: "Radio programmes and campaigns in local languages, partnerships with community radio stations.",
  exp3_t: "Digital communication and community management",
  exp3_d: "Page management, online user relations, editorial calendars, moderation and performance analysis.",
  exp4_t: "Content and production",
  exp4_d: "Video scripts, motion design, podcasts and event materials that make your messages clear and memorable.",
  real_tag: "Work",
  real_titre: "Research, content and projects",
  p1_cat: "Research",
  p1_t: "Community radio and security information",
  p1_d: "Master's thesis on the role of community radio in sharing security information with pastoral communities in eastern Burkina Faso.",
  mot_pastoral: "Pastoral areas",
  p2_cat: "PhD",
  p2_t: "Rural radio and the digitalisation of information",
  p2_d: "Doctoral project on how rural radio, mobile phones and social media are used together in communication for development in pastoral areas.",
  mot_recherche: "Research",
  p3_t: "“Comms, what is it really?”",
  p3_d: "A motion design mini-series explaining the many sides of communication: organisational, corporate, events, crisis, C4D.",
  mot_script: "Scriptwriting",
  mot_pedago: "Education",
  p4_d: "A podcast I co-host. I also handle guest booking and partner relations.",
  mot_anim: "Hosting",
  mot_partenariats: "Partnerships",
  p5_cat: "Events",
  p5_t: "Communication materials for Mika Style",
  p5_d: "Visual materials (banner) designed to be reused at events such as FESPACO.",
  mot_print: "Print",
  mot_event: "Events",
  parc_tag: "Background",
  parc_titre: "My path so far",
  e1_date: "Ongoing",
  e1_t: "PhD project in communication for development",
  e1_d: "Université Joseph KI-ZERBO, Ouagadougou.",
  e2_date: "Since November 2025",
  e2_t: "Social media agent, Orange Burkina Faso",
  e2_d: "Answering customers on digital support channels.",
  e3_t: "Master's in Communication for Development",
  e3_d: "Université Aube Nouvelle, Ouagadougou.",
  e4_date: "Since 2024",
  e4_t: "Junior communication consultant",
  e4_d: "Helping organisations with their communication materials and strategy.",
  ct_tag: "Contact",
  ct_titre: "A project, a campaign, <em>a mission?</em>",
  ct_p: "NGOs, development projects, institutions or companies: let's talk about your communication challenges. I'm open to positions and consulting assignments, in Ouagadougou and beyond.",
  copier: "Copy",
  ct_lieu_l: "Location",
  ct_lieu: "Ouagadougou, Burkina Faso · open to relocation",
  ct_btn: "Send me an e-mail",
  footer: "Communication for development · Ouagadougou"
};

const elements = document.querySelectorAll("[data-i18n]");
const FR = {};
elements.forEach(el => { FR[el.dataset.i18n] = el.innerHTML; });
const TITRES = {
  fr: document.title,
  en: "Ibrahim Pascal Keïta · Communication for development"
};

function appliquerLangue(lang) {
  const dico = lang === "en" ? EN : FR;
  elements.forEach(el => {
    const cle = el.dataset.i18n;
    if (dico[cle]) el.innerHTML = dico[cle];
  });
  document.documentElement.lang = lang;
  document.title = TITRES[lang];
  document.querySelectorAll(".lang button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  try { localStorage.setItem("langue", lang); } catch (e) {}
}

document.querySelectorAll(".lang button").forEach(b => {
  b.addEventListener("click", () => appliquerLangue(b.dataset.lang));
});

let langueInitiale = "fr";
try { langueInitiale = localStorage.getItem("langue") || "fr"; } catch (e) {}
if (langueInitiale === "en") appliquerLangue("en");

// Menu mobile
const burger = document.querySelector(".burger");
const liens = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  const ouvert = liens.classList.toggle("ouvert");
  burger.setAttribute("aria-expanded", String(ouvert));
});
liens.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  liens.classList.remove("ouvert");
  burger.setAttribute("aria-expanded", "false");
}));

// Bouton copier l'e-mail
document.querySelectorAll(".copier").forEach(btn => {
  btn.addEventListener("click", async () => {
    const lang = document.documentElement.lang;
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = lang === "en" ? "Copied" : "Copié";
    } catch (e) {
      btn.textContent = lang === "en" ? "Select it" : "Sélectionne-le";
    }
    setTimeout(() => { btn.textContent = lang === "en" ? EN.copier : FR.copier; }, 2000);
  });
});

// Apparition des blocs au défilement
const obs = new IntersectionObserver(entrees => {
  entrees.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => obs.observe(el));

document.getElementById("annee").textContent = new Date().getFullYear();
