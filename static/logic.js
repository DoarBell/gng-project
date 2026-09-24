let currentLang = localStorage.getItem('lang') || 'es';
let chart;

const translations = {
    es: {
        // text for general layout thingy
        layout_inicio: "INICIO",
        layout_acerca: "ACERCA DE",
        layout_servicios: "SERVICIOS",
        layout_oficinas: "OFICINAS",
        layout_contacto: "CONTACTO",
        layout_aviso: "AVISO DE PRIVACIDAD",
        // text for index page
        index_title: "Compromiso con el cliente",
        index_info1: "En García Naranjo, González &amp; Asociados, S. C., reconocemos el inmenso valor de nuestros clientes y el papel preponderante que desempeñan en el éxito presente y futuro de nuestra firma. Nuestro mayor compromiso con ellos, es el conocer, comprender y satisfacer sus necesidades y requerimientos específicos para contribuir al aumento de su productividad.",
        index_info2: "Nuestra ética profesional, nos compromete en todo momento a conducir nuestras prácticas de negocios con el principio básico de integridad absoluta en todas las actividades que realizamos y el cumplimiento con los objetivos y compromisos que mutuamente nos imponemos y pactamos.",
        index_more: `Leer más <span class="circle">▶</span>`,
        index_info3: "This is supposed to be hidden",
    },
    en:{
        layout_inicio: "MAIN",
        layout_acerca: "ABOUT US",
        layout_servicios: "SERVICES",
        layout_oficinas: "OFFICES",
        layout_contacto: "CONTACT",
        layout_aviso: "PRIVACY",

        index_title: "CLIENT COMMITMENT:",

        index_info1: "At García Naranjo, González y Asociados, S.C., we recognize the immense value of our clients to the present and future success of our firm. Our main commitment to them, is the recognition and understanding of their specific developmental needs and requirements.",
        index_info2: "Our professional ethics always commit us to professional conduct of absolute integrity, in the pursuance of goals and purposes that we and our clients mutually establish and agree upon.",
        index_more: `Read more <span class="circle">▶</span>`,
        index_info3: "This is still supposed to be hidden",
    },
};

function next() {
    const content1 = document.getElementById("sub-content1");
    const content2 = document.getElementById("sub-content2");
    const shower = content1.style.display !== "none" ? content1 : content2;
    const grower = shower === content1 ? content2 : content1;

    shower.classList.remove("fadeIn");
    shower.classList.add("fadeOut");

    shower.addEventListener("animationend", function handler(){
        shower.removeEventListener("animationend", handler);
        shower.style.display = "none";
        shower.classList.remove("fadeOut");
       
        grower.style.display = "block";
        grower.classList.remove("fadeOut");
        grower.classList.add("fadeIn");
    })
}

function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML=translations[lang][key];
        }
    });
    localStorage.setItem('lang', lang);
};

function toggleText(){
    const moreText = document.getElementById("more-text");
    const btnText = document.getElementById("more-btn");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.innerHTML = translations[currentLang]["index_more"];
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = translations[currentLang]["index_more"];
    }
}

function formatDate(d){
    return d.toISOString().slice(0, 10);
}

async function loadChart() {
    const base = document.getElementById("fromCurrency").value;
    const quote = document.getElementById("toCurrency").value;
    const today = new Date();
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(today.getDate()-10);
    const url = `https://api.frankfurter.dev/v2/rates?base=${base}&quotes=${quote}&from=${formatDate(tenDaysAgo)}&to=${formatDate(today)}`;
    const response = await fetch(url);
    const data = await response.json();
    const labels = data.map(row => row.date);
    const values = data.map(row => row.rate);
    const ctx = document.getElementById("myChart").getContext("2d");
    if(chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: `${base} to ${quote}`,
                data: values,
                borderColor: "#f7f7fb",
                backgroundColor: "#1b10ea32",
                borderWidth: 2,
                tension: 0.2
            }]
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const more = document.getElementById("more-text");
    if (more) {
        more.style.display = 'none';
    }
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');
    if (header) {
        header.innerHTML = `
        <div class="brand">
            <img src="../images/gng_logo_azul.png" alt="gnglogo">
        </div>

        <nav>
        <div class="flags"><span onclick="setLang('es')" style="cursor:pointer">🇲🇽</span><p> </p><span onclick="setLang('en')" style="cursor:pointer">🇺🇸</span></div>
        <div class="nav-divider"></div>
        <a data-i18n="layout_inicio" href="../index.html">Inicio</a>
        <a data-i18n="layout_acerca" href="../subpages/acerca.html">Acerca de</a>
        <a data-i18n="layout_servicios" href="../subpages/servicios.html">Servicios</a>
        <a data-i18n="layout_oficinas" href="../subpages/oficinas.html">Oficinas</a>
        <a data-i18n="layout_contact" href="../subpages/contactanos.html">Contacto</a>
        <a data-i18n="layout_aviso"  href="../documents/aviso_privacidad.pdf" target="_blank" rel="noopener">Aviso de privacidad</a>
        </nav>
        <hr>`;
    }
    if (footer) {
        footer.innerHTML = `<div class="footer-grid">
      <div class="footer-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
        <div>
          <h3>Oficinas</h3>
          <p>Miguel Laurent No. 17 Piso 4<br>Col. Del Valle, C. P. 03100<br>Benito Juárez, México, D. F.</p>
        </div>
      </div>
      <div class="footer-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.99.36 1.96.68 2.9a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.18-1.18a2 2 0 0 1 2.11-.45c.94.32 1.91.55 2.9.68A2 2 0 0 1 22 16.92z"/></svg>
        <div>
          <h3>Conmutador</h3>
          <p>T: + (55) 5559 8418<br>F: + (55) 5559 8432</p>
        </div>
      </div>
      <div class="footer-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16v16H4z"/><path d="m4 4 8 8 8-8"/></svg>
        <div>
          <h3>Contacto</h3>
          <p><a href="mailto:contacto@gng.com.mx">contacto@gng.com.mx</a></p>
          <div class="socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="Google+">g+</a>
          </div>
        </div>
      </div>
    </div>`
    document.getElementById("fromCurrency").addEventListener("change", loadChart);
    document.getElementById("toCurrency").addEventListener("change", loadChart);
    };

    //api
    const currencyDrop = document.querySelectorAll(".currenSelector")
    fetch(`https://api.frankfurter.dev/v2/currencies`)
    .then(response => response.json())
    .then(currencies => {
        const optionsHTML = currencies
        .map(c => `<option value="${c.iso_code}">${c.name}</option>`)
        .join("");
        
        currencyDrop.forEach(select => {
            select.innerHTML = optionsHTML;
        });

        loadChart();
    });
});