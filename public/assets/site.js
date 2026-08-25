/* ============================================================
   SOD 2030 — site machinery

   You shouldn't need to edit this file. It reads data.js and
   builds the nav, the countdown, and the course cards.
   ============================================================ */

(function () {
  'use strict';

  /* ---- current page --------------------------------------- */
  var here = location.pathname.split('/').pop() || 'index.html';

  /* ---- header + nav --------------------------------------- */
  var head = document.querySelector('[data-head]');
  if (head) {
    var links = NAV.map(function (p) {
      var current = (p.href === here) ? ' aria-current="page"' : '';
      return '<a href="' + p.href + '"' + current + '>' + p.label + '</a>';
    }).join('');

    head.innerHTML =
      '<div class="head-inner">' +
        '<a class="wordmark" href="index.html">SOD<span>2030</span></a>' +
        '<span class="unofficial">Unofficial</span>' +
      '</div>' +
      '<nav class="nav" aria-label="Sections">' + links + '</nav>';
  }

  /* ---- footer --------------------------------------------- */
  var foot = document.querySelector('[data-foot]');
  if (foot) {
    foot.innerHTML =
      '<div class="foot-inner">' +
        '<p>UMMC School of Dentistry, Class of 2030 &mdash; student-run, not an official school site.</p>' +
        '<p>Updated ' + new Date().getFullYear() + '</p>' +
      '</div>';
  }

  /* ---- date helpers --------------------------------------- */
  function midnight(d) { var x = new Date(d); x.setHours(0,0,0,0); return x; }

  function parseDay(str) {
    var p = str.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function daysBetween(from, to) {
    return Math.round((midnight(to) - midnight(from)) / 86400000);
  }

  function pretty(d) {
    return d.toLocaleDateString(undefined, { weekday:'short', month:'short', day:'numeric' });
  }

  function countdownLabel(n) {
    if (n < 0)  { return Math.abs(n) + (Math.abs(n) === 1 ? ' day ago' : ' days ago'); }
    if (n === 0) { return 'Today'; }
    if (n === 1) { return 'Tomorrow'; }
    return 'in ' + n + ' days';
  }

  /* ---- render a list of deadlines ------------------------- */
  function renderDeadlines(target, items, showPast) {
    if (!items.length) {
      target.innerHTML = '<p class="empty">Nothing scheduled yet. Add entries to <code>data.js</code>.</p>';
      return;
    }

    var today = new Date();
    var rows = items.map(function (d) {
      var when = parseDay(d.date);
      var n = daysBetween(today, when);

      var cls = 'deadline';
      if (n < 0) { cls += ' is-past'; }
      else if (n <= 3) { cls += ' is-urgent'; }
      else if (n <= 10) { cls += ' is-soon'; }

      var meta = [d.course, d.note].filter(Boolean).join(' &middot; ');

      return '<li class="' + cls + '">' +
        '<span class="d-count">' + countdownLabel(n) + '</span>' +
        '<span class="d-body">' +
          '<span class="d-title">' + d.title + '</span>' +
          (meta ? '<span class="d-meta">' + meta + '</span>' : '') +
        '</span>' +
        '<span class="d-date">' + pretty(when) + '</span>' +
      '</li>';
    }).join('');

    target.innerHTML = '<ul class="deadline-list">' + rows + '</ul>';
  }

  /* ---- home page: next few items -------------------------- */
  var upcoming = document.querySelector('[data-upcoming]');
  if (upcoming) {
    var today = new Date();
    var soon = DEADLINES
      .filter(function (d) { return daysBetween(today, parseDay(d.date)) >= 0; })
      .sort(function (a, b) { return a.date < b.date ? -1 : 1; })
      .slice(0, 5);

    if (!soon.length) {
      upcoming.innerHTML = '<p class="empty">Nothing coming up. Either you\'re clear, or <code>data.js</code> needs updating.</p>';
    } else {
      renderDeadlines(upcoming, soon);
    }
  }

  /* ---- key dates page: everything ------------------------- */
  var allDates = document.querySelector('[data-all-dates]');
  if (allDates) {
    var sorted = DEADLINES.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    renderDeadlines(allDates, sorted, true);
  }

  /* ---- courses page --------------------------------------- */
  var courseGrid = document.querySelector('[data-courses]');
  if (courseGrid) {
    courseGrid.innerHTML = COURSES.map(function (c) {
      return '<div class="card">' +
        (c.code ? '<span class="card-code">' + c.code + '</span>' : '') +
        '<h3>' + c.name + '</h3>' +
        (c.instructor ? '<p>' + c.instructor + '</p>' : '') +
        (c.note ? '<p>' + c.note + '</p>' : '') +
        (c.syllabus ? '<p><a href="' + c.syllabus + '">Syllabus</a></p>' : '') +
      '</div>';
    }).join('');
  }
})();
