// Lean hash-router SPA — no build step, no framework.
const app = document.getElementById("main");

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/* ---------------- Page templates ---------------- */

function pageHome() {
  return `
    <section class="hero">
      <div class="hero-bg" style="background-image:url('assets/img/hero.jpg')"></div>
      <div class="hero-scrim"></div>
      <div class="wrap hero-content">
        <span class="eyebrow">Voimanostoseura · Varsinais-Suomi · est. 2021</span>
        <h1>Tukea, taitoa ja tuloksia voimanostoon</h1>
        <p class="lead">Meillä kohtaavat kilpailukokemus, valmennusosaaminen ja aito intohimo nostamiseen. Tuomme voimanostoyhteisöön raikkaan näkökulman, rehtiä tekemistä ja tilaa kehittyä – omalla tavallasi.</p>
        <p class="lead">RAV on rakennettu nostajia varten. Olitpa ensikertalainen tai kansainvälisissä kilpailuissa menestynyt konkari, meillä sinulla on paikka, tuki ja mahdollisuus kasvaa.</p>
        <div class="hero-actions">
          <a class="btn" href="#/jaseneksi" data-route>Jätä jäsenhakemus</a>
          <a class="btn btn-outline" href="#/yhteystiedot" data-route>Ota yhteyttä</a>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="wrap">
        <div class="block-head">
          <span class="eyebrow">Jäsenedut</span>
          <h2>Mitä Rannikon Voima tarjoaa jäsenilleen?</h2>
        </div>
        <div class="offer-grid">
          ${OFFERS.map(
            (o, i) => `
            <div class="offer-card">
              <span class="num">0${i + 1}</span>
              <h3>${esc(o.title)}</h3>
              <p>${esc(o.text)}</p>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="block band">
      <div class="wrap" style="text-align:center;">
        <h2>Valmis nostamaan meidän kanssa?</h2>
        <p style="max-width:48ch;margin:0 auto 24px;">Laita jäsenhakemus liikkeelle – me haluamme kasvaa, niin yksilöinä kuin seuranakin.</p>
        <a class="btn" href="#/jaseneksi" data-route>Jätä jäsenhakemus</a>
      </div>
    </section>
  `;
}

function pageJaseneksi() {
  return `
    <section class="page-head">
      <div class="wrap">
        <span class="eyebrow">Jäseneksi</span>
        <h1>RAVin riveihin mahtuu aina uusia jäseniä!</h1>
      </div>
    </section>
    <section class="block tight">
      <div class="wrap cols-2">
        <div>
          <p>Rannikon Voimassa on aina tilaa uusille nostajille. Laita rohkeasti jäsenhakemus liikkeelle – me haluamme kasvaa, niin yksilöinä kuin seuranakin!</p>
          <p>Meillä ei katsota ikää, kokemusta tai tuloksia. Olitpa ensikertalainen tai arvokisakävijä, juniori tai seniori, penkistä nousee sitten oma paino tai 200 kiloa – olet tervetullut.</p>
          <p>Rannikon Voimassa jokainen jäsen on yhtä arvokas. Meillä reilu peli ei ole vain kilpailun perusta, vaan koko seuran kulmakivi; kommunikoinnissa, treeneissä sekä kisamatkoilla.</p>

          <table class="fee-table" style="margin-top:28px;">
            <thead>
              <tr><th>Jäsenyys</th><th>Vuosimaksu</th></tr>
            </thead>
            <tbody>
              ${MEMBERSHIP_FEES.map((f) => `<tr><td>${esc(f.group)}</td><td>${esc(f.price)}</td></tr>`).join("")}
            </tbody>
          </table>
        </div>

        <div class="form-card">
          <h3>Jäsenhakemus</h3>
          <div class="form-success" id="joinSuccess">Kiitos hakemuksesta! Sähköpostiohjelmasi avautui esitäytetyllä viestillä – lähetä se meille niin otamme yhteyttä pian.</div>
          <form id="joinForm">
            <div class="field">
              <label for="jNimi">Nimi</label>
              <input id="jNimi" name="nimi" required />
            </div>
            <div class="field">
              <label for="jSynt">Syntymävuosi</label>
              <input id="jSynt" name="syntymavuosi" type="number" min="1920" max="2026" required />
            </div>
            <div class="field">
              <label for="jEmail">Sähköposti</label>
              <input id="jEmail" name="email" type="email" required />
            </div>
            <div class="field">
              <label for="jPuh">Puhelinnumero</label>
              <input id="jPuh" name="puhelin" type="tel" required />
            </div>
            <div class="field">
              <label for="jPaikka">Paikkakunta</label>
              <input id="jPaikka" name="paikkakunta" required />
            </div>
            <div class="field">
              <label>Haluttu jäsenyys</label>
              <div class="radio-row">
                <label><input type="radio" name="jasenyys" value="Varsinainen jäsen" checked /> Varsinainen jäsen</label>
                <label><input type="radio" name="jasenyys" value="Kannattajajäsen" /> Kannattajajäsen</label>
              </div>
            </div>
            <div class="field">
              <label for="jLisa">Lisätietoja</label>
              <textarea id="jLisa" name="lisatietoja" rows="3"></textarea>
            </div>
            <button class="btn" type="submit">Lähetä</button>
            <p class="form-note">Lähettäminen avaa sähköpostiohjelmasi valmiiksi täytetyllä viestillä osoitteeseen ${esc(SITE.email)}.</p>
          </form>
        </div>
      </div>
    </section>
  `;
}

function pageYhteystiedot() {
  return `
    <section class="page-head">
      <div class="wrap">
        <span class="eyebrow">Yhteystiedot</span>
        <h1>Nousiko mieleesi kysymyksiä?</h1>
      </div>
    </section>
    <section class="block tight">
      <div class="wrap cols-2">
        <div class="contact-info">
          <p>Lähetä meille viesti alla olevan lomakkeen kautta tai sähköpostitse osoitteeseen <a href="mailto:${esc(SITE.email)}" style="text-decoration:underline;">${esc(SITE.email)}</a>. Vastaamme sinulle mahdollisimman pian!</p>

          <div class="contact-block">
            <h3>Löydät meidät myös</h3>
            <div class="social-list">
              <a href="${SITE.social.tiktok}" target="_blank" rel="noopener">TikTok — @rannikonvoima</a>
              <a href="${SITE.social.instagram}" target="_blank" rel="noopener">Instagram — @rannikon_voima</a>
              <a href="${SITE.social.facebook}" target="_blank" rel="noopener">Facebook — rannikonvoima2021</a>
            </div>
          </div>

          <div class="contact-block">
            <h3>Hallitus</h3>
            <ul class="board-list">
              ${SITE.board
                .map(
                  (b) => `
                <li>
                  <span>${esc(b.name)}<br><span class="role">${esc(b.role)}</span></span>
                  <span>${esc(b.phone)}</span>
                </li>`
                )
                .join("")}
            </ul>
          </div>
        </div>

        <div class="form-card">
          <h3>Yhteydenottolomake</h3>
          <div class="form-success" id="contactSuccess">Kiitos viestistä! Sähköpostiohjelmasi avautui esitäytetyllä viestillä – lähetä se meille niin vastaamme pian.</div>
          <form id="contactForm">
            <div class="field">
              <label for="cNimi">Nimi tai nimimerkki</label>
              <input id="cNimi" name="nimi" required />
            </div>
            <div class="field">
              <label for="cEmail">Sähköposti</label>
              <input id="cEmail" name="email" type="email" required />
            </div>
            <div class="field">
              <label for="cPuh">Puhelinnumero</label>
              <input id="cPuh" name="puhelin" type="tel" />
            </div>
            <div class="field">
              <label for="cViesti">Viesti</label>
              <textarea id="cViesti" name="viesti" rows="5" required></textarea>
            </div>
            <button class="btn" type="submit">Lähetä</button>
            <p class="form-note">Lähettäminen avaa sähköpostiohjelmasi valmiiksi täytetyllä viestillä osoitteeseen ${esc(SITE.email)}.</p>
          </form>
        </div>
      </div>
    </section>
  `;
}

const PAGE_META = {
  "/": { title: "Etusivu", render: pageHome },
  "/jaseneksi": { title: "Jäseneksi", render: pageJaseneksi },
  "/yhteystiedot": { title: "Yhteystiedot", render: pageYhteystiedot },
};

/* ---------------- Router ---------------- */

function currentPath() {
  const hash = window.location.hash || "#/";
  const path = hash.replace(/^#/, "");
  return PAGE_META[path] ? path : "/";
}

function render() {
  const path = currentPath();
  const meta = PAGE_META[path];
  document.title = path === "/" ? "Rannikon Voima" : `${meta.title} – Rannikon Voima`;
  app.innerHTML = meta.render();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

  document.querySelectorAll(".primary-nav a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${path}`);
  });

  wirePageScripts(path);
  closeMobileNav();
}

function wirePageScripts(path) {
  if (path === "/jaseneksi") {
    const form = document.getElementById("joinForm");
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const fd = new FormData(form);
      const body =
        `Nimi: ${fd.get("nimi")}\n` +
        `Syntymävuosi: ${fd.get("syntymavuosi")}\n` +
        `Sähköposti: ${fd.get("email")}\n` +
        `Puhelinnumero: ${fd.get("puhelin")}\n` +
        `Paikkakunta: ${fd.get("paikkakunta")}\n` +
        `Haluttu jäsenyys: ${fd.get("jasenyys")}\n` +
        `Lisätietoja: ${fd.get("lisatietoja") || "-"}`;
      const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Jäsenhakemus – Rannikon Voima")}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      document.getElementById("joinSuccess").classList.add("visible");
    });
  }

  if (path === "/yhteystiedot") {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const fd = new FormData(form);
      const body =
        `Nimi: ${fd.get("nimi")}\n` +
        `Sähköposti: ${fd.get("email")}\n` +
        `Puhelinnumero: ${fd.get("puhelin") || "-"}\n\n` +
        `${fd.get("viesti")}`;
      const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Yhteydenotto – Rannikon Voima")}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      document.getElementById("contactSuccess").classList.add("visible");
    });
  }
}

/* ---------------- Mobile nav ---------------- */

const navToggle = document.getElementById("navToggle");
const primaryNav = document.getElementById("primaryNav");
navToggle.addEventListener("click", () => {
  const open = primaryNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
function closeMobileNav() {
  primaryNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

/* ---------------- Init ---------------- */

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", render);
render();
