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
        index_info3: "Este compromiso se refleja en cada una de nuestras prácticas de trabajo. Dedicamos el tiempo necesario para conocer a fondo el contexto, la operación y los objetivos particulares de cada cliente, lo que nos permite ofrecer soluciones a la medida y no respuestas genéricas.",

        index_info4: "Mantenemos a nuestro equipo en constante actualización profesional, a fin de brindar una asesoría vigente frente a los cambios normativos, fiscales y legales que puedan impactar a nuestros clientes. Asimismo, resguardamos con absoluta confidencialidad la información que nos confían, y procuramos una comunicación clara y oportuna en cada etapa de los proyectos que emprendemos en conjunto.",

        index_info5: "Honramos los tiempos, acuerdos y compromisos pactados con cada cliente, convencidos de que la confianza se construye con hechos consistentes y no solo con palabras. Este es el estándar que guía nuestro actuar diario en García Naranjo, González & Asociados, S. C.",
        //text for general layout BOTTOM thingy
        layout_ofice: "Oficinas",
        layout_Conmut: "Conmutador",
        layout_con: "contacto",
        //text for acerca
        acerca_who: "¿QUIÉNES SOMOS?",
        acerca_quien: "García Naranjo, González y Asociados, S.C., es el resultado de una alianza estratégica de muchos años que derivó en la fusión durante el año de 2005, de las firmas de contadores públicos, García Naranjo y Álvarez, S.C., firma fundada por Francisco García Naranjo Álvarez en 1989, y González, Ruenes y Asociados, S.C. , firma fundada por Joaquín González Chávez en 1988. Nuestra firma mantiene también otras alianzas estratégicas con algunas firmas de contadores y de abogados, tales como García Pérez y Asociados, S.C., etc., cuyo objeto es el de proporcionar a nuestros clientes los servicios de la más alta calidad y ética profesionales, basados en una sólida experiencia.",
        exel: "EXCELENCIA Y PRODUCTIVIDAD",
        caracteristicas1: "Una de las características que nos distingue en García Naranjo, González y Asociados, S.C., es nuestra profunda y permanente preocupación por reconocer, promover y desarrollar el elemento humano. En el COMPROMISO de nuestros más altos objetivos como despacho, buscamos la colaboración, aportación mutua y el TRABAJO EN EQUIPO para conjugar los esfuerzos individuales como fórmulas hacia la PRODUCTIVIDAD. Nuestra búsqueda de la PRODUCTIVIDAD se fundamenta en la INTEGRACIÓN de un equipo humano de la más alta calidad técnica, profesional y humana, comprometido en el autodesarrollo y progreso de cada uno de sus miembros, para a través de ello asegurar nuestra superación personal e individual y la consolidación de la organización sólida y confiable que deseamos.",
        caracteristicas2: "Poner en práctica esto, significa que cada uno de nosotros en García Naranjo, González y Asociados, S.C., tenemos como objetivo, no simplemente la realización de una labor o trabajo, sino desarrollarlos con EXCELENCIA.",
        //text for services
        services: "SERVICIOS QUE PROPORCIONA NUESTRA FIRMA",
        services1: "Los servicios que proporciona nuestra firma, constituyen un servicio integral de Asesoría y Consultoría en las áreas de:",
        finanzas: `finanzas
              <div class="rule"></div>
              <img style="width: 100%;" src="images/finanzas.webp" alt="">`,
        contabilidad: `Contabilidad
              <div class="rule"></div>
              <img style="width: 100%;" src="images/contabilidad.webp" alt="">`,
        fiscal: `Fiscal
              <div class="rule"></div>
              <img style="width: 100%;" src="images/lawyer.png" alt="">`,
        administracion: "Administracion",
        services2: "Dependiendo de las necesidades específicas de nuestros clientes, y además de los servicios de asesoría y consultoría anteriormente descritos, estamos en condiciones de proporcionar entre otros, un servicio de contabilidad integral, mismo que consiste en la elaboración de pólizas y el registro contable de todas sus operaciones, así como el mantenimiento de los libros de contabilidad que conforme a las diversas disposiciones legales y fiscales es necesario llevar, como también la preparación y presentación en su caso, de todas las declaraciones de impuestos a que están afectos, el cálculo y elaboración de sus nóminas, la elaboración de presupuestos, solicitudes de devolución de impuestos, la atención de requerimientos de información o pago por parte de las autoridades fiscales, etcétera.",
        //text for contact:
        contact_title: "Contáctanos",
        contact_text: "Cuéntanos cómo podemos ayudarte y te responderemos a la brevedad.",
        contact_name: "Nombre",
        contact_mail: "Correo electrónico",
        contact_message: "Mensaje",
        contact_send: "Enviar",
        contact_name_ph: "Tu nombre",
        contact_mail_ph: "tucorreo@ejemplo.com",
        contact_message_ph: "¿En qué podemos ayudarte?",
        //text for notice
        notice_title: "Aviso de privacidad",
        notice_warning: "Tu navegador no soporta PDFs",
        notice_download: `<button type="button" class="btn btn-primary">Descarga el PDF</button>`,
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
        index_info3: "This commitment is reflected in every one of our work practices. We take the time needed to thoroughly understand each client's context, operations, and particular goals, which allows us to offer tailored solutions rather than generic answers.",

        index_info4: "We keep our team continually up to date professionally so we can provide current advice on the regulatory, tax, and legal changes that may affect our clients. We also protect the information entrusted to us with absolute confidentiality, and we strive for clear, timely communication at every stage of the projects we undertake together.",

        index_info5: "We honor the timelines, agreements, and commitments made with each client, convinced that trust is built through consistent actions and not just words. This is the standard that guides our daily work at García Naranjo, González & Asociados, S.C.",

        layout_ofice: "Offices",
        layout_Conmut: "Switchboard",
        layout_con: "Contact",
        //text for acerca
        acerca_who: "WHO ARE WE?",
        acerca_quien: "García Naranjo, González y Asociados, S.C. is the result of a strategic alliance of many years that led to the merger, in 2005, of the public accounting firms García Naranjo y Álvarez, S.C., founded by Francisco García Naranjo Álvarez in 1989, and González, Ruenes y Asociados, S.C., founded by Joaquín González Chávez in 1988. Our firm also maintains other strategic alliances with certain accounting and law firms, such as García Pérez y Asociados, S.C., among others, whose purpose is to provide our clients with services of the highest professional quality and ethics, based on solid experience.",
        exel: "EXCELLENCE AND PRODUCTIVITY",
        caracteristicas1: "One of the traits that distinguishes us at García Naranjo, González y Asociados, S.C. is our deep and permanent concern for recognizing, promoting, and developing the human element. In our COMMITMENT to our highest goals as a firm, we seek collaboration, mutual contribution, and TEAMWORK to combine individual efforts as formulas for PRODUCTIVITY. Our pursuit of PRODUCTIVITY is grounded in the INTEGRATION of a team of the highest technical, professional, and human quality, committed to the self-development and progress of each of its members, so that through this we can ensure our personal and individual growth and the consolidation of the solid and reliable organization we want.",
        caracteristicas2: "Putting this into practice means that each one of us at García Naranjo, González y Asociados, S.C. has as our goal not simply to carry out a task or job, but to carry it out with EXCELLENCE.",
        //text for services
        services: "SERVICES PROVIDED BY OUR FIRM",
        services1: "The services provided by our firm make up a comprehensive advisory and consulting service in the areas of:",
        finanzas: `Finance
              <div class="rule"></div>
              <img style="width: 100%;" src="images/finanzas.webp" alt="">`,
        contabilidad: `Accounting
              <div class="rule"></div>
              <img style="width: 100%;" src="images/contabilidad.webp" alt="">`,
        fiscal: `Tax
              <div class="rule"></div>
              <img style="width: 100%;" src="images/lawyer.png" alt="">`,
        administracion: "Administration",
        services2: "Depending on our clients' specific needs, and in addition to the advisory and consulting services described above, we are able to provide, among others, a comprehensive accounting service, which consists of preparing journal entries and recording all of their transactions, as well as maintaining the accounting books that must be kept under the various legal and tax provisions, and also preparing and filing, where applicable, all the tax returns they are subject to, calculating and preparing payrolls, preparing budgets, filing tax refund requests, handling information or payment requests from the tax authorities, and so on.",
        //text for contact:
        contact_title: "Contact Us",
        contact_text: "Tell us how we can help you and we will get back to you shortly.",
        contact_name: "Name",
        contact_mail: "Email",
        contact_message: "Message",
        contact_send: "Send",
        contact_name_ph: "Your name",
        contact_mail_ph: "youremail@example.com",
        contact_message_ph: "How can we help you?",
        //text for notice
        notice_title: "Privacy Notice",
        notice_warning: "Your browser does not support PDFs",
        notice_download: `<button type="button" class="btn btn-primary">PDF Download</button>`,
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

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
        el.setAttribute("placeholder", translations[lang][key]);
    }
    });
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
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 2,
            scales: {
            x: {
                ticks: { color: "#666" },       // date labels on x-axis
                grid: { color: "#e5e5e5" }      // vertical gridlines
            },
            y: {
                ticks: { color: "#666" },       // rate numbers on y-axis
                grid: { color: "#e5e5e5" }      // horizontal gridlines
            }
            },
            plugins: {
            legend: {
                labels: { color: "#333" }       // the "USD to MXN" label text/box
            }
            }
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const btn = document.getElementById("contact-btn");
    const status = document.getElementById("contact-status");
    form.addEventListener("submit", async (e) =>{
        e.preventDefault();
        status.className = "";
        status.textContent= "";

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        btn.disabled = true;
        const originalText = btn.textContent;
        btn.textContent = "Enviando.....";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json"} 
            });

            if(response.ok){
                status.textContent = "Gracias, tu mensaje fue enviado correctamente.";
                status.className = "success";
                form.reset();
            } else {
                throw new Error("Server error");
            }
        } catch (err) {
            status.textContent = "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo"
            status.className = "error";
        } finally {
            btn.disabled = false;
            btn.textContent = originalText;
        }
    })

    const more = document.getElementById("more-text");
    if (more) {
        more.style.display = 'none';
    }
    document.getElementById("fromCurrency").addEventListener("change", loadChart);
    document.getElementById("toCurrency").addEventListener("change", loadChart);
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
        
        document.getElementById("fromCurrency").value = "USD";
        document.getElementById("toCurrency").value = "MXN";

        loadChart();
    });
});