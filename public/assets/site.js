/* ============================================================
   SOD 2030 — site machinery
   Reads data.js and builds the nav, countdown, date lists,
   and course cards. You shouldn't need to edit this file.
   ============================================================ */

(function () {
  'use strict';

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
        '<p>UMMC School of Dentistry, Class of 2030. Student-run; not an official school site.</p>' +
        '<p>&copy; ' + new Date().getFullYear() + '</p>' +
      '</div>';
  }

  /* ---- course name lookup --------------------------------- */
  function courseName(code) {
    if (!code) { return ''; }
    if (typeof COURSE_NAMES !== 'undefined' && COURSE_NAMES[code]) { return COURSE_NAMES[code]; }
    for (var i = 0; i < COURSES.length; i++) {
      if (COURSES[i].code === code) { return COURSES[i].name; }
    }
    return '';
  }

  /* ---- date helpers --------------------------------------- */
  function midnight(d) { var x = new Date(d); x.setHours(0,0,0,0); return x; }
  function parseDay(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function daysBetween(a, b) { return Math.round((midnight(b) - midnight(a)) / 86400000); }
  function pretty(d) { return d.toLocaleDateString(undefined, { weekday:'short', month:'short', day:'numeric' }); }
  function countdownLabel(n) {
    if (n < 0)  { return Math.abs(n) + (Math.abs(n) === 1 ? ' day ago' : ' days ago'); }
    if (n === 0) { return 'Today'; }
    if (n === 1) { return 'Tomorrow'; }
    return 'in ' + n + ' days';
  }

  /* ---- render a list of deadlines ------------------------- */
  function renderDeadlines(target, items) {
    if (!items.length) {
      target.innerHTML = '<p class="empty">Dates coming soon.</p>';
      return;
    }
    var today = new Date();
    target.innerHTML = '<ul class="deadline-list">' + items.map(function (d) {
      var when = parseDay(d.date);
      var n = daysBetween(today, when);
      var cls = 'deadline';
      if (n < 0) { cls += ' is-past'; }
      else if (n <= 3) { cls += ' is-urgent'; }
      else if (n <= 10) { cls += ' is-soon'; }

      var courseBit = '';
      if (d.course) {
        var nm = courseName(d.course);
        courseBit = '<span class="d-code">' + d.course + '</span>' + (nm ? ' ' + nm : '');
      }
      var meta = [courseBit, d.note].filter(Boolean).join(' &middot; ');

      return '<li class="' + cls + '">' +
        '<span class="d-count">' + countdownLabel(n) + '</span>' +
        '<span class="d-body">' +
          '<span class="d-title">' + d.title + '</span>' +
          (meta ? '<span class="d-meta">' + meta + '</span>' : '') +
        '</span>' +
        '<span class="d-date">' + pretty(when) + '</span>' +
      '</li>';
    }).join('') + '</ul>';
  }

  function byDate(a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; }

  /* ---- home page: next five ------------------------------- */
  var upcoming = document.querySelector('[data-upcoming]');
  if (upcoming) {
    var now = new Date();
    var soon = DEADLINES
      .filter(function (d) { return daysBetween(now, parseDay(d.date)) >= 0; })
      .sort(byDate).slice(0, 5);
    if (!soon.length) {
      upcoming.innerHTML = '<p class="empty">Nothing on the calendar right now. New dates coming soon.</p>';
    } else {
      renderDeadlines(upcoming, soon);
    }
  }

  /* ---- key dates page ------------------------------------- */
  var allDates = document.querySelector('[data-all-dates]');
  if (allDates) { renderDeadlines(allDates, DEADLINES.slice().sort(byDate)); }

  /* ---- courses page --------------------------------------- */
  function courseCard(c) {
    return '<div class="card">' +
      (c.code ? '<span class="card-code">' + c.code + '</span>' : '') +
      '<h3>' + c.name + '</h3>' +
      (c.instructor ? '<p>' + c.instructor + '</p>' : '') +
      (c.note ? '<p>' + c.note + '</p>' : '') +
      (c.syllabus
        ? '<p><a href="' + c.syllabus + '">Syllabus</a></p>'
        : '<p class="soon">Syllabus coming soon</p>') +
    '</div>';
  }

  var finished = (typeof FINISHED_COURSES !== 'undefined') ? FINISHED_COURSES : {};
  var termList = (typeof TERMS !== 'undefined') ? TERMS : [];

  var grid = document.querySelector('[data-courses]');
  if (grid) {
    var running = COURSES.filter(function (c) { return !finished[c.code]; });
    grid.innerHTML = running.length
      ? running.map(courseCard).join('')
      : '<p class="empty">Course details coming soon.</p>';
  }

  var courseArchive = document.querySelector('[data-courses-archive]');
  if (courseArchive) {
    var done = COURSES.filter(function (c) { return !!finished[c.code]; });
    if (!done.length) {
      courseArchive.innerHTML = '';
    } else {
      var byTerm = {};
      done.forEach(function (c) {
        var t = finished[c.code] || 'Earlier';
        if (!byTerm[t]) { byTerm[t] = []; }
        byTerm[t].push(c);
      });

      var names = Object.keys(byTerm).sort(function (a, b) {
        var ia = termList.indexOf(a), ib = termList.indexOf(b);
        if (ia === -1 && ib === -1) { return a < b ? 1 : -1; }
        if (ia === -1) { return 1; }
        if (ib === -1) { return -1; }
        return ia - ib;
      });

      courseArchive.innerHTML = '<details class="archive">' +
        '<summary><span class="arch-label">Completed courses</span>' +
        '<span class="arch-count">' + done.length +
        (done.length === 1 ? ' course' : ' courses') + ' &middot; ' + names.length +
        (names.length === 1 ? ' term' : ' terms') + '</span></summary>' +
        names.map(function (t) {
          return '<details class="archive-term"><summary>' + t + '</summary>' +
            '<div class="grid">' + byTerm[t].map(courseCard).join('') + '</div>' +
          '</details>';
        }).join('') +
      '</details>';
    }
  }
})();
