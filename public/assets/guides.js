/* ============================================================
   SOD 2030 — STUDY GUIDES

   Add a guide:
     1. Put the .html file in public/study-guides/
     2. Add one entry to the list below
   The page groups guides by course, in the order listed.

   file  — filename inside public/study-guides/
   course, exam, desc — what shows on the page

   If a file hasn't been uploaded yet, its row shows
   "Coming soon" instead of a broken link.
   ============================================================ */

const STUDY_GUIDES = [
  {
    course: "DENT 601A/B – Microscopic & Developmental Anatomy (Histology)",
    exam:   "Exam 1",
    file:   "histology-exam-1.html",
    desc:   "Cell Biology I and II, epithelium, exocrine glands, connective tissue, cartilage and bone, muscle, and nervous tissue. Identify, classify, and function drills on lecture micrographs, comparison tables, and a 100-question practice exam."
  },
  {
    course: "DENT 604 – Biochemistry",
    exam:   "Exam I",
    file:   "biochem-exam-1.html",
    desc:   "Thermodynamics and bonding, acid-base, amino acids and proteins, carbohydrates, and nucleic acids. Topic quizzes, worked calculations, a pH slider for side-chain charge, and a build-your-own practice exam."
  },
  {
    course: "DENT 620-1 – Dental Morphology & Occlusion",
    exam:   "Exam 1",
    file:   "morphology-exam-1.html",
    desc:   "Tooth morphology and occlusion review."
  }
];


/* ---- page machinery: no need to edit below here ---------- */
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

  var order = [];
  var groups = {};
  STUDY_GUIDES.forEach(function (g, i) {
    if (!groups[g.course]) { groups[g.course] = []; order.push(g.course); }
    groups[g.course].push({ g: g, i: i });
  });

  target.innerHTML = order.map(function (course) {
    return '<div class="guide-course"><h2>' + esc(course) + '</h2><ul class="guide-list">' +
      groups[course].map(function (x) {
        var href = 'study-guides/' + encodeURI(x.g.file);
        return '<li class="guide" id="guide-' + x.i + '">' +
          '<h3>' + esc(x.g.exam) + ' <span class="guide-size" data-size></span></h3>' +
          '<p class="guide-desc">' + esc(x.g.desc) + '</p>' +
          '<a class="guide-open" href="' + href + '">Open guide</a>' +
        '</li>';
      }).join('') +
    '</ul></div>';
  }).join('');

  /* Check each file exists and show its size (large guides take a moment on cellular). */
  STUDY_GUIDES.forEach(function (g, i) {
    var row = document.getElementById('guide-' + i);
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
