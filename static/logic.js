document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('main-header').innerHTML = `
    <div class="brand">
      <h1>García Naranjo<span class="amp">&amp;</span>González
        <span class="sub">Asociados, S.C.</span>
      </h1>
    </div>

    <nav>
      <div class="flags"><a id="spanish">🇲🇽</a><a id="english">🇺🇸</a></div>
      <div class="nav-divider"></div>
      <a href="index.html">Inicio</a>
      <a href="acerca.html">Acerca de</a>
      <a href="servicios.html">Servicios</a>
      <a href="oficinas.html">Oficinas</a>
      <a href="contactanos.html">Contacto</a>
      <a href="documents/aviso_privacidad.pdf" target="_blank" rel="noopener">Aviso de privacidad</a>
    </nav>
    <hr>`;
    document.getElementById('main-footer').innerHTML = `
    <div class="footer-grid">
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
})