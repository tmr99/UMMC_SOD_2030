/* ============================================================
   SOD 2030 — SITE DATA

   NAV (tabs), COURSE_NAMES (code -> name for date lists),
   DEADLINES (anything dated), COURSES (course cards).
   Dates are always YYYY-MM-DD.
   ============================================================ */


/* ---- TABS ------------------------------------------------ */
const NAV = [
  { label: "This Week",    href: "index.html"        },
  { label: "Schedule",     href: "schedule.html"     },
  { label: "Courses",      href: "courses.html"      },
  { label: "Key Dates",    href: "dates.html"        },
  { label: "Study Guides", href: "study-guides.html" },
  { label: "Social",       href: "social.html"       },
  { label: "Resources",    href: "resources.html"    }
];


/* ---- COURSE NAMES ----------------------------------------
   Shown next to the course number on This Week and Key Dates.
   The left side must match the "course" value in DEADLINES.
   ---------------------------------------------------------- */
const COURSE_NAMES = {
  "DENT 600A/B": "Gross Anatomy – Osteology",
  "DENT 601A/B": "Microscopic & Developmental Anatomy",
  "DENT 604":    "Biochemistry",
  "DENT 607-1":  "Basic Life Support",
  "DENT 617-1":  "Biomedical Literature",
  "DENT 619":    "Materials Science",
  "DENT 620-1":  "Dental Morphology & Occlusion",
  "DENT 622-1":  "Problem-Oriented Dentistry",
  "DENT 623-1":  "Clinical Problem Solving I",
  "DENT 642-1":  "Ethics & Professional Identity"
};


/* ---- DEADLINES -------------------------------------------
   Past items grey out and drop off the home page on their own.
   ---------------------------------------------------------- */
const DEADLINES = [

  /* --- August --- */
  { date: "2026-08-13", title: "Biomedical Literature session",       course: "DENT 617-1",  note: "1:00–3:00pm, D113 — bring a laptop" },
  { date: "2026-08-17", title: "Quizzes 1 & 2 + reflection due",      course: "DENT 617-1",  note: "Canvas, 70 pts total" },
  { date: "2026-08-24", title: "Quiz 1",                              course: "DENT 622-1",  note: "3:00pm, D113 — sessions 1–6" },
  { date: "2026-08-25", title: "BLS course — Group A",                course: "DENT 607-1",  note: "1:00–5:00pm, Training Center, 3rd floor Med School" },
  { date: "2026-08-31", title: "Quiz 2",                              course: "DENT 622-1",  note: "3:00pm, D113 — sessions 9–12" },

  /* --- September --- */
  { date: "2026-09-01", title: "BLS course — Group B",                course: "DENT 607-1",  note: "1:00–5:00pm, Training Center" },
  { date: "2026-09-07", title: "Labor Day — no class",                course: "",            note: "" },
  { date: "2026-09-10", title: "Exam 1 / OSCE",                       course: "DENT 620-1",  note: "8:00am–12:00pm, Bench / Sim" },
  { date: "2026-09-14", title: "Exam 1 — practical + written",        course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" },
  { date: "2026-09-14", title: "Quiz 3",                              course: "DENT 622-1",  note: "3:00pm, D113 — sessions 13–18" },
  { date: "2026-09-15", title: "Ethics session 1",                    course: "DENT 642-1",  note: "1:00–3:00pm, D113 — 'My Why' due 11:59pm the night before" },
  { date: "2026-09-18", title: "Exam I — lectures 1–20",              course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-09-21", title: "Midterm exam",                        course: "DENT 622-1",  note: "4:00pm, D113 — sessions 19–22" },
  { date: "2026-09-22", title: "Exam I — practical + written",        course: "DENT 600A/B", note: "1:00–5:00pm, SOM 324 — competency, 70% required" },
  { date: "2026-09-28", title: "Quiz 4",                              course: "DENT 622-1",  note: "3:00pm, D113 — sessions 23–26" },
  { date: "2026-09-29", title: "Exam 2 + Tooth ID Exam",              course: "DENT 620-1",  note: "9:00am–12:00pm, Bench / Sim" },
  { date: "2026-09-29", title: "Ethics session 2",                    course: "DENT 642-1",  note: "1:00–3:00pm, D113 — self-assessment due the night before" },

  /* --- October --- */
  { date: "2026-10-01", title: "Impressions / casts — Group 1",       course: "DENT 620-1",  note: "1:00–5:00pm, Bench / Clinic" },
  { date: "2026-10-02", title: "Impressions / casts — Group 2",       course: "DENT 620-1",  note: "8:00am–12:00pm, Bench / Clinic" },
  { date: "2026-10-06", title: "Impressions / casts — Group 3",       course: "DENT 620-1",  note: "9:00am–12:00pm, Bench / Clinic" },
  { date: "2026-10-09", title: "Exam II — lectures 23–38",            course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-10-12", title: "Exam 2 — practical + written",        course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" },
  { date: "2026-10-12", title: "Quiz 5",                              course: "DENT 622-1",  note: "3:00pm, D113 — sessions 27–33" },
  { date: "2026-10-13", title: "Ethics session 3",                    course: "DENT 642-1",  note: "1:00–3:00pm, D113 — bring questions for the D3/D4 panel" },
  { date: "2026-10-19", title: "Dental photographs project due",      course: "DENT 622-1",  note: "5:00pm in Canvas" },
  { date: "2026-10-20", title: "Ethics session 4",                    course: "DENT 642-1",  note: "1:00–3:00pm, D113 — ethics case analysis due the night before" },
  { date: "2026-10-20", title: "Materials Science begins",            course: "DENT 619",    note: "1:00–3:00pm, D113" },
  { date: "2026-10-21", title: "Final exam",                          course: "DENT 622-1",  note: "4:00–4:50pm, D113 — sessions 34–39" },
  { date: "2026-10-23", title: "Exam 3 / OSCE",                       course: "DENT 620-1",  note: "8:00am–12:00pm, D114 / Sim" },

  /* --- November --- */
  { date: "2026-11-06", title: "Exam III — lectures 41–60",           course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-11-09", title: "Exam 3 — practical + written",        course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" },
  { date: "2026-11-10", title: "Ethics session 5",                    course: "DENT 642-1",  note: "1:00–3:00pm, D113 — career interview due beforehand" },
  { date: "2026-11-27", title: "Thanksgiving — no class",             course: "",            note: "" },

  /* --- December --- */
  { date: "2026-12-02", title: "Exam IV — lectures 61–82",            course: "DENT 604",    note: "1:00pm, R354" },
  { date: "2026-12-08", title: "Final exam — lectures 1–82",          course: "DENT 604",    note: "1:00–4:00pm, R354 — comprehensive, 25% of grade" },
  { date: "2026-12-10", title: "Exam 4 — practical + written",        course: "DENT 601A/B", note: "Practical 8:30, written 10:05, SM 326" }
];


/* ---- COURSES ---------------------------------------------
   Leave syllabus as "" and the card shows "Syllabus coming soon".
   ---------------------------------------------------------- */
const COURSES = [
  {
    code: "DENT 600A / 600B",
    name: "Gross Anatomy – Osteology",
    instructor: "Dr. Yuefeng Lu · ylu3@umc.edu · R735",
    syllabus: "",
    note: "Tuesdays 1–5pm, 7A / SOM 324. One competency exam on 9/22, practical and written, with 70% required on each. Repeat attempts are allowed, but remediated scores cap at 70. Written is 10% of 600A; practical is 15% of 600B. Texts: Liebgott ch. 6; McMinn's atlas."
  },
  {
    code: "DENT 601A",
    name: "Microscopic & Developmental Anatomy – Lecture",
    instructor: "Dr. Dongmei Cui · dcui@umc.edu · N-710A",
    syllabus: "",
    note: "3 credits. Mon & Wed 8am–12pm, SM 326. Four exams at 25% each, no final. Optional bonus quizzes add points to that block's written score. Texts: Junqueira's Basic Histology 17e; Cui, Histology from a Clinical Perspective 2e."
  },
  {
    code: "DENT 601B",
    name: "Microscopic & Developmental Anatomy – Lab",
    instructor: "Dr. Dongmei Cui · dcui@umc.edu · N-710A",
    syllabus: "",
    note: "4 credits. Mon & Wed 10am–12pm, SM 326. Same four exam dates as 601A, graded on the practical portion. Bonus quiz points apply to the practical score. A weighted score above 70.00 is required to pass."
  },
  {
    code: "DENT 604",
    name: "Biochemistry",
    instructor: "Dr. Drazen Raucher · draucher@umc.edu · 601-984-1510",
    syllabus: "",
    note: "6 credits. MWF 1–3pm, R354. Four block exams average to 75% of the grade; the comprehensive final is 25%. Exams are on ExamSoft, so scores post on submission. Text: Lippincott Illustrated Reviews: Biochemistry 9e, free through the UMMC library."
  },
  {
    code: "DENT 607-1",
    name: "Basic Life Support",
    instructor: "Dr. Laura Asbill · lasbill@umc.edu · D403-14",
    syllabus: "",
    note: "1 credit, one afternoon. Group A on 8/25, Group B on 9/1, both 1–5pm at the Training Center, 3rd floor of the medical school. Requires 84% on the AHA written exam plus a practical pass. An existing BLS card does not exempt you; the hours count toward graduation."
  },
  {
    code: "DENT 617-1",
    name: "Biomedical Literature",
    instructor: "Dr. Sarah Adcock · scadcock@umc.edu · Rowland Library U108",
    syllabus: "",
    note: "1 credit. One session on 8/13, 1–3pm in D113; bring a laptop. Two Canvas quizzes and a reflection are due 8/17, 70 points total."
  },
  {
    code: "DENT 619",
    name: "Materials Science",
    instructor: "Dr. Yuanyuan Duan · yduan@umc.edu · D528-04",
    syllabus: "",
    note: "3 credits, continuing into spring. Four fall lectures (10/20, 10/29, 11/5, 11/12). All four exams are in the spring semester, dates TBA. An in-class Canvas quiz at every lecture counts for 5% combined. Exam 1 is 38% of the course grade."
  },
  {
    code: "DENT 620-1A / 1B",
    name: "Dental Morphology & Occlusion",
    instructor: "Dr. James Lott · jrlott@umc.edu",
    syllabus: "",
    note: "4 + 5 credits. Tue 9am, Thu 1pm, Fri 8am in D113/D114, Bench, and Sim. 1A and 1B must be passed separately. Lecture: three exams (80%) plus 8–12 unannounced quizzes (20%, lowest dropped, no make-ups). Lab: waxing exercises 2–6 (30%), tooth ID exam (30%), quadrant occlusal waxing (25%), impressions and casts (15%). Grades are recorded to hundredths."
  },
  {
    code: "DENT 622-1",
    name: "Problem-Oriented Dentistry",
    instructor: "Dr. William Boteler · wboteler@umc.edu",
    syllabus: "",
    note: "3 credits. Mostly M/W 3–4:50pm in D113, ending 10/21. Five quizzes (25%), midterm (25%), final (25%), plus the dental photographs project. All readings, handouts, and slides are testable."
  },
  {
    code: "DENT 623-1",
    name: "Clinical Problem Solving I",
    instructor: "Scott Phillips · smphillips@umc.edu",
    syllabus: "",
    note: "6 credits. Tuesday mornings in the SOD clinics. No fixed exam dates. Compliance Office online training and quizzes must be completed by the medical center deadline to pass the course."
  },
  {
    code: "DENT 642-1",
    name: "Ethics & Professional Identity",
    instructor: "Dr. Kristin Nalls · knalls@umc.edu · D503-04",
    syllabus: "",
    note: "1 credit, five Tuesday sessions 1–3pm in D113. No exams; graded on the Professional Identity and Career Readiness Portfolio and its components. Pre-lecture work is due 11:59pm the night before each session; post-lecture work is due one week after. A missed session requires an alternative assignment."
  }
];
