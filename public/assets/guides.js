/* ============================================================
   SOD 2030 — STUDY GUIDES

   Add a guide:
     1. Put the file in public/study-guides/
     2. Add one entry to STUDY_GUIDES below
     (file = the exact filename, extension included)

   Archive a finished course:
     Add one line to ARCHIVED_COURSES with the term it ended in.
     That course and all its guides move into the Archive
     dropdown. Nothing is deleted; every link keeps working.

   New term:
     Add it to the top of TERM_ORDER.
   ============================================================ */


/* ---- TERMS, newest first --------------------------------- */
const TERM_ORDER = [
  "Spring 2027",
  "Fall 2026"
];


/* ---- ARCHIVED COURSES ------------------------------------
   "course name exactly as written below": "term it finished"
   ---------------------------------------------------------- */
const ARCHIVED_COURSES = {
  "DENT 600A – Osteology": "Fall 2026",
  "DENT 620-1 – Dental Morphology & Occlusion": "Fall 2026"
};


/* ---- GUIDES ---------------------------------------------- */
const STUDY_GUIDES = [
  {
    course: "DENT 600A – Osteology",
    exam:   "Skull ID / Written",
    file:   "osteology-2026.html",
    desc:   "Skull structures and articulations"
  },
  {
    course: "DENT 600A – Osteology",
    exam:   "Practical Guide",
    file:   "osteology-practical-guide.pdf",
    desc:   "Skull structures practical guide"
  },
  {
    course: "DENT 601A/B – Microscopic & Developmental Anatomy (Histology)",
    exam:   "Exam 1",
    file:   "histology-exam-1.html",
    desc:   "Cell Biology I and II, epithelium, exocrine glands, connective tissue, cartilage and bone, muscle, and nervous tissue. Identify, classify, and function drills on lecture micrographs, comparison tables, and a 100-question practice exam."
  },
  {
    course: "DENT 601A/B – Microscopic & Developmental Anatomy (Histology)",
    exam:   "Exam 2",
    file:   "histology-exam-2.html",
    desc:   "Peripheral blood, circulatory system, and Organ Systems I"
  },
  {
    course: "DENT 601A/B – Microscopic & Developmental Anatomy (Histology)",
    exam:   "Exam 3",
    file:   "histology-exam-3.html",
    desc:   "Organ Systems II"
  },
  {
    course: "DENT 601A/B – Microscopic & Developmental Anatomy (Histology)",
    exam:   "Exam 4",
    file:   "histology-exam-4.html",
    desc:   "Final block of the semester. Guide in progress."
  },
  {
    course: "DENT 604 – Biochemistry",
    exam:   "Exam I",
    file:   "biochem-exam-1.html",
    desc:   "Thermodynamics and bonding, acid-base, amino acids and proteins, carbohydrates, and nucleic acids. Topic quizzes, worked calculations, a pH slider for side-chain charge, and a build-your-own practice exam."
  },
  {
    course: "DENT 604 – Biochemistry",
    exam:   "Exam II",
    file:   "biochem-exam-2.html",
    desc:   "Molecular genetics"
  },
  {
    course: "DENT 604 – Biochemistry",
    exam:   "Exam III",
    file:   "biochem-exam-3.html",
    desc:   "Metabolism"
  },
  {
    course: "DENT 604 – Biochemistry",
    exam:   "Exam IV",
    file:   "biochem-exam-4.html",
    desc:   "Lectures 61–82. Guide in progress."
  },
  {
    course: "DENT 620-1 – Dental Morphology & Occlusion",
    exam:   "Exam 1",
    file:   "morphology-exam-1.html",
    desc:   "Tooth morphology and occlusion review."
  },
  {
    course: "DENT 620-1 – Dental Morphology & Occlusion",
    exam:   "Exam 2",
    file:   "morphology-exam2.html",
    desc:   "Tooth ID, muscles of mastication, dental anomalies, and general tooth morphology"
  },
  {
    course: "DENT 620-1 – Dental Morphology & Occlusion",
    exam:   "Exam 3",
    file:   "morphology-exam-3.html",
    desc:   "Cumulative review from day one through cuspal pathways and occlusion concepts"
  }
];


/* ---- page machinery: no need to edit below here ----------- */
(function () {
  'use strict';
  var target = document.querySelector('[data-guides]');
  if (!target) { return; }

  if (!STUDY_GUIDES.length) {
    target.innerHTML = '<p class="empty">No guides yet. Add one in <code>assets/guides.js</code>.</p>';
    return;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c];
    });
  }

  var archived = (typeof ARCHIVED_COURSES !== 'undefined') ? ARCHIVED_COURSES : {};
  var terms    = (typeof TERM_ORDER !== 'undefined') ? TERM_ORDER : [];

  /* group guides under their course, keeping the listed order */
  var order = [];
  var groups = {};
  STUDY_GUIDES.forEach(function (g, i) {
    if (!groups[g.course]) { groups[g.course] = []; order.push(g.course); }
    groups[g.course].push({ g: g, i: i });
  });

  function rowFor(x) {
    var href = 'study-guides/' + encodeURI(x.g.file);
    return '<li class="guide" id="guide-' + x.i + '">' +
      '<h3>' + esc(x.g.exam) + ' <span class="guide-size" data-size></span></h3>' +
      '<p class="guide-desc">' + esc(x.g.desc) + '</p>' +
      '<a class="guide-open" href="' + href + '">Open guide</a>' +
    '</li>';
  }

  function courseBlock(course) {
    return '<div class="guide-course"><h2>' + esc(course) + '</h2><ul class="guide-list">' +
      groups[course].map(rowFor).join('') +
    '</ul></div>';
  }

  var current = order.filter(function (c) { return !archived[c]; });
  var past    = order.filter(function (c) { return !!archived[c]; });

  var html = current.length
    ? current.map(courseBlock).join('')
    : '<p class="empty">No current guides. Check the archive below.</p>';

  /* --- archive, grouped by term, newest first --- */
  if (past.length) {
    var byTerm = {};
    past.forEach(function (c) {
      var t = archived[c] || 'Earlier';
      if (!byTerm[t]) { byTerm[t] = []; }
      byTerm[t].push(c);
    });

    var termNames = Object.keys(byTerm).sort(function (a, b) {
      var ia = terms.indexOf(a), ib = terms.indexOf(b);
      if (ia === -1 && ib === -1) { return a < b ? 1 : -1; }
      if (ia === -1) { return 1; }
      if (ib === -1) { return -1; }
      return ia - ib;
    });

    var count = past.reduce(function (n, c) { return n + groups[c].length; }, 0);

    html += '<details class="archive">' +
      '<summary><span class="arch-label">Archive</span>' +
      '<span class="arch-count">' + count + (count === 1 ? ' guide' : ' guides') +
      ' &middot; ' + termNames.length + (termNames.length === 1 ? ' term' : ' terms') +
      '</span></summary>' +
      termNames.map(function (t) {
        return '<details class="archive-term"><summary>' + esc(t) + '</summary>' +
          byTerm[t].map(courseBlock).join('') +
        '</details>';
      }).join('') +
    '</details>';
  }

  target.innerHTML = html;

  /* Check each file exists and show its size (large guides take a moment on cellular). */
  STUDY_GUIDES.forEach(function (g, i) {
    var row = document.getElementById('guide-' + i);
    if (!row) { return; }
    fetch('study-guides/' + encodeURI(g.file), { method: 'HEAD', cache: 'no-store' })
      .then(function (r) {
        if (!r.ok) { throw new Error(r.status); }
        var bytes = +r.headers.get('content-length');
        if (bytes) {
          row.querySelector('[data-size]').textContent =
            '(' + (bytes / 1048576).toFixed(1) + ' MB)';
        }
      })
      .catch(function () {
        row.classList.add('is-missing');
        row.querySelector('.guide-open').textContent = 'Coming soon';
      });
  });
})();
