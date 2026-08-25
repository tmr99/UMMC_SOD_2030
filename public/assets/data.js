/* ============================================================
   SOD 2030 — SITE DATA

   Three lists: NAV (tabs), DEADLINES (anything dated),
   COURSES (the course cards).

   Everything below came from the D1 Fall 2026 syllabi.
   Dates are always YYYY-MM-DD.
   ============================================================ */


/* ---- TABS ------------------------------------------------
   Add a tab: create the .html file, then add a line here.
   Remove a tab: delete its line (and the file).
   ---------------------------------------------------------- */
const NAV = [
  { label: "This Week",  href: "index.html"     },
  { label: "Schedule",   href: "schedule.html"  },
  { label: "Courses",    href: "courses.html"   },
  { label: "Key Dates",  href: "dates.html"     },
  { label: "Social",     href: "social.html"    },
  { label: "Resources",  href: "resources.html" }
];


/* ---- DEADLINES -------------------------------------------
   Feeds the home page countdown (next 5) and the full Key
   Dates list. Past items grey out and drop off the home page
   on their own - no cleanup needed.
   ---------------------------------------------------------- */
const DEADLINES = [

  /* --- August --- */
  { date: "2026-08-13", title: "Biomedical Literature session",   course: "DENT 617-1",  note: "1:00-3:00pm, D113 &mdash; bring laptop" },
  { date: "2026-08-17", title: "Quizzes 1 &amp; 2 + reflection due", course: "DENT 617-1", note: "In Canvas, 70 pts total" },
  { date: "2026-08-24", title: "Quiz 1",                          course: "DENT 622-1",  note: "3:00pm, D113 &mdash; sessions 1-6" },
  { date: "2026-08-25", title: "BLS course &mdash; Group A",      course: "DENT 607-1",  note: "1:00-5:00pm, Training Center, 3rd floor Med School" },
  { date: "2026-08-31", title: "Quiz 2",                          course: "DENT 622-1",  note: "3:00pm, D113 &mdash; sessions 9-12 (syllabus text says 9/2 &mdash; confirm)" },

  /* --- September --- */
  { date: "2026-09-01", title: "BLS course &mdash; Group B",      course: "DENT 607-1",  note: "1:00-5:00pm, Training Center" },
  { date: "2026-09-07", title: "Labor Day &mdash; no class",      course: "",            note: "" },
  { date: "2026-09-10", title: "Exam 1 / OSCE",                   course: "DENT 620-1",  note: "8:00am-12:00pm, Bench / Sim" },
  { date: "2026-09-14", title: "Exam 1 &mdash; practical + written", course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" },
  { date: "2026-09-14", title: "Quiz 3",                          course: "DENT 622-1",  note: "3:00pm, D113 &mdash; sessions 13-18" },
  { date: "2026-09-15", title: "Ethics session 1",                course: "DENT 642-1",  note: "1:00-3:00pm, D113 &mdash; 'My Why' due 11:59pm night before" },
  { date: "2026-09-18", title: "Exam I &mdash; lectures 1-20",    course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-09-21", title: "Midterm exam",                    course: "DENT 622-1",  note: "4:00pm, D113 &mdash; sessions 19-22" },
  { date: "2026-09-22", title: "Exam I &mdash; practical + written", course: "DENT 600A/B", note: "1:00-5:00pm, SOM 324 &mdash; competency, 70% required" },
  { date: "2026-09-28", title: "Quiz 4",                          course: "DENT 622-1",  note: "3:00pm, D113 &mdash; sessions 23-26" },
  { date: "2026-09-29", title: "Exam 2 + Tooth ID Exam",          course: "DENT 620-1",  note: "9:00am-12:00pm, Bench / Sim" },
  { date: "2026-09-29", title: "Ethics session 2",                course: "DENT 642-1",  note: "1:00-3:00pm, D113 &mdash; self-assessment due night before" },

  /* --- October --- */
  { date: "2026-10-01", title: "Impressions / casts &mdash; Group 1", course: "DENT 620-1", note: "1:00-5:00pm, Bench / Clinic" },
  { date: "2026-10-02", title: "Impressions / casts &mdash; Group 2", course: "DENT 620-1", note: "8:00am-12:00pm, Bench / Clinic" },
  { date: "2026-10-06", title: "Impressions / casts &mdash; Group 3", course: "DENT 620-1", note: "9:00am-12:00pm, Bench / Clinic" },
  { date: "2026-10-09", title: "Exam II &mdash; lectures 23-38",  course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-10-12", title: "Exam 2 &mdash; practical + written", course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" },
  { date: "2026-10-12", title: "Quiz 5",                          course: "DENT 622-1",  note: "3:00pm, D113 &mdash; sessions 27-33" },
  { date: "2026-10-13", title: "Ethics session 3",                course: "DENT 642-1",  note: "1:00-3:00pm, D113 &mdash; bring questions for D3/D4 panel" },
  { date: "2026-10-19", title: "Dental photographs project due",  course: "DENT 622-1",  note: "5:00pm in Canvas" },
  { date: "2026-10-20", title: "Ethics session 4",                course: "DENT 642-1",  note: "1:00-3:00pm, D113 &mdash; ethics case analysis due night before" },
  { date: "2026-10-20", title: "Materials Science begins",        course: "DENT 619",    note: "1:00-3:00pm, D113" },
  { date: "2026-10-21", title: "Final exam",                      course: "DENT 622-1",  note: "4:00-4:50pm, D113 &mdash; sessions 34-39" },
  { date: "2026-10-23", title: "Exam 3 / OSCE",                   course: "DENT 620-1",  note: "8:00am-12:00pm, D114 / Sim" },

  /* --- November --- */
  { date: "2026-11-06", title: "Exam III &mdash; lectures 41-60", course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-11-09", title: "Exam 3 &mdash; practical + written", course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" },
  { date: "2026-11-10", title: "Ethics session 5",                course: "DENT 642-1",  note: "1:00-3:00pm, D113 &mdash; career interview due beforehand" },
  { date: "2026-11-27", title: "Thanksgiving &mdash; no class",   course: "",            note: "" },

  /* --- December --- */
  { date: "2026-12-02", title: "Exam IV &mdash; lectures 61-82",  course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-12-08", title: "Final exam &mdash; lectures 1-82", course: "DENT 604",   note: "1:00-4:00pm, R354 &mdash; comprehensive, 25% of grade" },
  { date: "2026-12-10", title: "Exam 4 &mdash; practical + written", course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" }
];


/* ---- COURSES ---------------------------------------------
   Put a Canvas or syllabus URL in the syllabus field and a
   link appears on the card automatically.
   ---------------------------------------------------------- */
const COURSES = [
  {
    code: "DENT 600A / 600B",
    name: "Gross Anatomy &mdash; Osteology",
    instructor: "Dr. Yuefeng Lu &middot; ylu3@umc.edu &middot; R735",
    syllabus: "",
    note: "Tuesdays 1-5pm, 7A / SOM 324. One competency exam on 9/22 &mdash; practical and written, 70% required on each. Repeats until passed, but a remediation caps at 70. Written is 10% of 600A, practical 15% of 600B. Liebgott ch. 6; McMinn's atlas."
  },
  {
    code: "DENT 601A",
    name: "Microscopic &amp; Developmental Anatomy &mdash; Lecture",
    instructor: "Dr. Dongmei Cui &middot; dcui@umc.edu &middot; N-710A",
    syllabus: "",
    note: "3 credits. Mon &amp; Wed 8am-12pm, SM 326. Four exams at 25% each, no final. Optional bonus quizzes add points to that block's written score. Junqueira's Basic Histology 17e; Cui, Histology from a Clinical Perspective 2e."
  },
  {
    code: "DENT 601B",
    name: "Microscopic &amp; Developmental Anatomy &mdash; Lab",
    instructor: "Dr. Dongmei Cui &middot; dcui@umc.edu &middot; N-710A",
    syllabus: "",
    note: "4 credits. Mon &amp; Wed 10am-12pm, SM 326. Same four exam dates as 601A, graded on the practical half. Bonus quiz points attach to the practical score. Needs above 70.00 weighted to pass."
  },
  {
    code: "DENT 604",
    name: "Biochemistry",
    instructor: "Dr. Drazen Raucher &middot; draucher@umc.edu &middot; 601-984-1510",
    syllabus: "",
    note: "6 credits &mdash; the heaviest course this term, 87 contact hours. MWF 1-3pm, R354. Four block exams average to 75%, comprehensive final is 25%. ExamSoft, so scores post on submission. Lippincott Illustrated Reviews 9e, free through the UMMC library."
  },
  {
    code: "DENT 607-1",
    name: "Basic Life Support",
    instructor: "Dr. Laura Asbill &middot; lasbill@umc.edu &middot; D403-14",
    syllabus: "",
    note: "1 credit, a single afternoon. Class splits in two &mdash; Group A on 8/25, Group B on 9/1, both 1-5pm at the Training Center, 3rd floor of the medical school. Needs 84% on the AHA written exam plus a practical pass. An existing BLS card doesn't exempt you; the hours count toward graduation."
  },
  {
    code: "DENT 617-1",
    name: "Biomedical Literature",
    instructor: "Dr. Sarah Adcock &middot; scadcock@umc.edu &middot; Rowland Library U108",
    syllabus: "",
    note: "1 credit, over almost before it starts. One session on 8/13, 1-3pm in D113 &mdash; bring a laptop. Two Canvas quizzes and a reflection all due 8/17, 70 points total."
  },
  {
    code: "DENT 619",
    name: "Materials Science",
    instructor: "Dr. Yuanyuan Duan &middot; yduan@umc.edu &middot; D528-04",
    syllabus: "",
    note: "3 credits, spanning into spring. Only four fall lectures (10/20, 10/29, 11/5, 11/12) &mdash; all four exams land in the spring semester and are still TBD. In-class Canvas quiz at every lecture, 5% combined. Exam 1 alone is 38% of the course grade."
  },
  {
    code: "DENT 620-1A / 1B",
    name: "Dental Morphology &amp; Occlusion",
    instructor: "Dr. James Lott &middot; jrlott@umc.edu",
    syllabus: "",
    note: "4 + 5 credits. Tue 9am, Thu 1pm, Fri 8am &mdash; D113/D114, Bench, Sim. You must pass 1A and 1B separately. Lecture: three exams (80%) plus 8-12 unannounced quizzes (20%, lowest dropped, no make-ups). Lab: waxing exercises 2-6 (30%), tooth ID exam (30%), quadrant occlusal waxing (25%), impressions and casts (15%). Grades recorded to hundredths &mdash; 89.99 is a B."
  },
  {
    code: "DENT 622-1",
    name: "Problem-Oriented Dentistry",
    instructor: "Dr. William Boteler &middot; wboteler@umc.edu",
    syllabus: "",
    note: "3 credits. Mostly M/W 3-4:50pm in D113, finishing 10/21 &mdash; well before the other courses. Five quizzes (25%), midterm (25%), final (25%), plus the dental photographs project. Everything in the readings, handouts, and slides is testable."
  },
  {
    code: "DENT 623-1",
    name: "Clinical Problem Solving I",
    instructor: "Scott Phillips &middot; smphillips@umc.edu",
    syllabus: "",
    note: "6 credits. Tuesday mornings in the SOD clinics. No fixed exam dates in the syllabus. Compliance Office online training and quizzes have to be finished by the medical center deadline or you don't pass the course."
  },
  {
    code: "DENT 642-1",
    name: "Ethics &amp; Professional Identity",
    instructor: "Dr. Kristin Nalls &middot; knalls@umc.edu &middot; D503-04",
    syllabus: "",
    note: "1 credit, five Tuesday sessions 1-3pm in D113. No exams &mdash; graded entirely on the Professional Identity and Career Readiness Portfolio and its components. Pre-lecture work is due 11:59pm the night before each session; post-lecture work one week after. Missing a session means an alternative assignment at the director's discretion."
  }
];
