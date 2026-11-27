// Grafo de temas (/matematica/grafo/, /computacion/grafo/): dibuja los cursos por niveles de dependencia, la ficha de
// cada curso y el recorrido de cada materia. El <script> dice en data-grafo el id del JSON con los datos.
(function () {
  var yo = document.currentScript;
  var D = JSON.parse(document.getElementById((yo && yo.dataset.grafo) || 'grafo-datos').textContent);
  var CATEGORIA = { computacion: 'Computación', software: 'Software', ia: 'Inteligencia artificial' };
  // Los nodos del grafo de Matemática que este grafo usa: van en el primer paso, con borde punteado.
  (D.externos || []).forEach(function (e) {
    D.nodos.push({ slug: e.slug, nombre: e.nombre, area: 'Matemática', nivel: 0, depende_de: [], temas: [], url: e.url, externo: true,
      habilita: D.nodos.filter(function (n) { return n.depende_de.indexOf(e.slug) >= 0; }).map(function (n) { return n.slug; }) });
  });
  var W = 172, H = 48, GX = 58, GY = 14, PAD = 18, NS = 'http://www.w3.org/2000/svg';
  var por = {}, niveles = {};
  D.nodos.forEach(function (n) { por[n.slug] = n; (niveles[n.nivel] = niveles[n.nivel] || []).push(n); });
  Object.keys(niveles).forEach(function (k) {
    niveles[k].sort(function (a, b) { return D.areas.indexOf(a.area) - D.areas.indexOf(b.area) || a.nombre.localeCompare(b.nombre); });
  });
  var maxF = Math.max.apply(null, Object.keys(niveles).map(function (k) { return niveles[k].length; }));
  var maxN = Math.max.apply(null, D.nodos.map(function (n) { return n.nivel; }));
  Object.keys(niveles).forEach(function (k) {
    var l = niveles[k];
    l.forEach(function (n, i) { n.x = PAD + k * (W + GX); n.y = PAD + (i + (maxF - l.length) / 2) * (H + GY); });
  });
  var svg = document.getElementById('grafo-svg');
  var ancho = PAD * 2 + (maxN + 1) * (W + GX) - GX, alto = PAD * 2 + maxF * (H + GY) - GY;
  svg.setAttribute('width', ancho); svg.setAttribute('height', alto); svg.setAttribute('viewBox', '0 0 ' + ancho + ' ' + alto);
  function el(t, a, p) { var e = document.createElementNS(NS, t); for (var k in a) e.setAttribute(k, a[k]); (p || svg).appendChild(e); return e; }
  function color(area) { return area === 'Matemática' ? 'var(--a-externo)' : 'var(--a-' + ((D.colores || {})[area] || 'numerico') + ')'; }

  var aristas = [];
  D.nodos.forEach(function (n) {
    n.depende_de.forEach(function (d) {
      var a = por[d], x1 = a.x + W, y1 = a.y + H / 2, x2 = n.x, y2 = n.y + H / 2, m = (x1 + x2) / 2;
      aristas.push({ de: d, a: n.slug, e: el('path', { 'class': 'e', d: 'M' + x1 + ',' + y1 + ' C' + m + ',' + y1 + ' ' + m + ',' + y2 + ' ' + x2 + ',' + y2 }) });
    });
  });
  function partir(txt) {
    var l1 = '', l2 = '';
    txt.split(' ').forEach(function (w) { if (!l2 && (l1 + ' ' + w).trim().length <= 22) l1 = (l1 + ' ' + w).trim(); else l2 = (l2 + ' ' + w).trim(); });
    return [l1, l2];
  }
  D.nodos.forEach(function (n) {
    var g = el('g', { 'class': n.externo ? 'n ext' : 'n', tabindex: '0', role: 'button', 'aria-label': n.nombre });
    n.g = g;
    el('rect', { x: n.x, y: n.y, width: W, height: H, rx: 8, fill: color(n.area) }, g);
    var ls = partir(n.nombre);
    el('text', { x: n.x + 10, y: n.y + (ls[1] ? 20 : 29) }, g).textContent = ls[0];
    if (ls[1]) el('text', { x: n.x + 10, y: n.y + 36 }, g).textContent = ls[1];
    if (n.estado === 'disponible') el('text', { x: n.x + W - 9, y: n.y + 15, 'text-anchor': 'end' }, g).textContent = '●';
    n.paso = el('text', { x: n.x + W - 9, y: n.y + H - 8, 'text-anchor': 'end', 'class': 'paso' }, g);
    g.addEventListener('click', function () { ficha(n.slug); verFicha(); });
    g.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); ficha(n.slug); verFicha(); } });
  });

  var leg = document.getElementById('grafo-leyenda');
  D.areas.forEach(function (a) { leg.insertAdjacentHTML('beforeend', '<span><i style="background:' + color(a) + '"></i>' + a + '</span>'); });
  if ((D.externos || []).length) leg.insertAdjacentHTML('beforeend', '<span><i class="ext" style="background:' + color('Matemática') + '"></i>grafo de Matemática</span>');
  leg.insertAdjacentHTML('beforeend', '<span>● curso disponible</span>');

  function cadena(s, campo, acc) {
    acc = acc || {};
    por[s][campo].forEach(function (d) { if (!acc[d]) { acc[d] = 1; cadena(d, campo, acc); } });
    return acc;
  }
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function limpiar() {
    D.nodos.forEach(function (n) { n.g.classList.remove('sel', 'dim'); n.paso.textContent = ''; });
    aristas.forEach(function (a) { a.e.classList.remove('on', 'dim'); });
    document.querySelectorAll('.grafo-lista button').forEach(function (b) { b.classList.remove('dim'); });
  }
  function resaltar(visibles) {
    D.nodos.forEach(function (n) { if (!visibles[n.slug]) n.g.classList.add('dim'); });
    aristas.forEach(function (a) { a.e.classList.add(visibles[a.de] && visibles[a.a] ? 'on' : 'dim'); });
    document.querySelectorAll('.grafo-lista button').forEach(function (b) { if (!visibles[b.dataset.s]) b.classList.add('dim'); });
  }
  function enlaces(lista) {
    return lista.map(function (x) { return '<button type="button" class="ir" data-s="' + x + '">' + esc(por[x].nombre) + '</button>'; }).join(', ') || '—';
  }
  var fichaEl = document.getElementById('grafo-ficha');
  // La ficha está arriba del grafo: si quedó fuera de la vista al tocar un curso, la página sube hasta ella.
  function verFicha() { if (fichaEl.getBoundingClientRect().top < 0) fichaEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  function conectar() { fichaEl.querySelectorAll('button.ir').forEach(function (b) { b.onclick = function () { ficha(b.dataset.s); }; }); }
  function ficha(s) {
    limpiar();
    var n = por[s], vis = {};
    vis[s] = 1;
    Object.keys(cadena(s, 'depende_de')).forEach(function (k) { vis[k] = 1; });
    Object.keys(cadena(s, 'habilita')).forEach(function (k) { vis[k] = 1; });
    resaltar(vis);
    n.g.classList.add('sel');
    var mats = D.materias.filter(function (m) { return m.recorrido.indexOf(s) >= 0; });
    if (n.externo) {
      fichaEl.innerHTML = '<h2>' + esc(n.nombre) + '</h2><div class="area">del grafo de Matemática · <a href="' + esc(n.url) +
        '">ver el grafo de Matemática</a></div><h3>Habilita</h3><p>' + enlaces(n.habilita) + '</p>' +
        '<p>Sus temas y sus materias están en el grafo de Matemática.</p>';
      conectar();
      return;
    }
    fichaEl.innerHTML = '<h2>' + esc(n.nombre) + '</h2><div class="area">' + (CATEGORIA[n.categoria] ? esc(CATEGORIA[n.categoria]) + ' · ' : '') + esc(n.area) +
      (n.agregado ? ' · agregado: no viene de los programas' : '') +
      (n.url ? ' · <a href="' + esc(n.url) + (n.estado === 'disponible' ? '">ir al curso</a>' : 'temario.html">ver la tabla de contenido</a>')
        : ' · curso próximamente') + '</div>' +
      '<h3>Necesita</h3><p>' + enlaces(n.depende_de) + '</p><h3>Habilita</h3><p>' + enlaces(n.habilita) + '</p>' +
      '<h3>Temas que reúne (' + n.temas.length + ')</h3>' + (n.temas.length ? '<ul>' + n.temas.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : '<p>—</p>') +
      '<h3>Materias que lo recorren (' + mats.length + ')</h3><ul>' +
      mats.map(function (m) { return '<li>' + esc(m.nombre) + ' <span class="area">· ' + esc(m.carrera) + '</span></li>'; }).join('') + '</ul>';
    conectar();
  }

  var sel = document.getElementById('grafo-materia');
  D.materias.slice().sort(function (a, b) { return a.carrera.localeCompare(b.carrera) || a.nombre.localeCompare(b.nombre); })
    .forEach(function (m) {
      var o = document.createElement('option');
      o.value = m.codigo; o.textContent = m.nombre + ' (' + m.carrera + ')';
      sel.appendChild(o);
    });
  sel.addEventListener('change', function () {
    limpiar();
    var m = D.materias.filter(function (x) { return x.codigo === sel.value; })[0];
    if (!m) { fichaEl.innerHTML = '<h2>Elige un curso</h2><p>Toca un curso del grafo para ver su ficha.</p>'; return; }
    var vis = {};
    m.recorrido.forEach(function (s, i) { vis[s] = 1; por[s].paso.textContent = i + 1; });
    resaltar(vis);
    fichaEl.innerHTML = '<h2>' + esc(m.nombre) + '</h2><div class="area">' + esc(m.carrera) + '</div><h3>Recorrido</h3><ol>' +
      m.recorrido.map(function (s) { return '<li><button type="button" class="ir" data-s="' + s + '">' + esc(por[s].nombre) + '</button></li>'; }).join('') + '</ol>';
    conectar();
  });

  var lista = document.getElementById('grafo-vista-lista'), lienzo = document.getElementById('grafo-lienzo'), chk = document.getElementById('grafo-lista');
  Object.keys(niveles).sort(function (a, b) { return a - b; }).forEach(function (k) {
    lista.insertAdjacentHTML('beforeend', '<h3>Paso ' + (+k + 1) + '</h3>');
    niveles[k].forEach(function (n) {
      lista.insertAdjacentHTML('beforeend', '<button type="button"' + (n.externo ? ' class="ext"' : '') + ' data-s="' + n.slug + '" style="background:' + color(n.area) + '">' +
        esc(n.nombre) + '<small>' + esc(n.area) + (n.depende_de.length ? ' · necesita ' + n.depende_de.map(function (d) { return esc(por[d].nombre); }).join(', ') : '') + '</small></button>');
    });
  });
  lista.querySelectorAll('button').forEach(function (b) { b.onclick = function () { ficha(b.dataset.s); fichaEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }; });
  function vista() { lista.hidden = !chk.checked; lienzo.hidden = chk.checked; }
  chk.checked = window.matchMedia('(max-width: 640px)').matches;
  chk.addEventListener('change', vista);
  vista();
})();
