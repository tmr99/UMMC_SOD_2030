/* ============================================================
   SOD 2030 — SITE DATA

   This is the file you'll edit most. Three lists:
     NAV       — the tabs across the top
     DEADLINES — everything with a date
     COURSES   — the course cards

   Nothing here is code you need to understand. Each entry is a
   line with labels and values. Keep the quotes and the commas.
   ============================================================ */


/* ---- TABS ------------------------------------------------
   Add a tab: create the .html file, then add a line here.
   Remove a tab: delete its line (and the file).
   Reorder: move the lines.
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
   Feeds both the countdown on the home page and the full list
   on Key Dates. Add one line per item.

   date  — always YYYY-MM-DD
   title — what it is
   course— which class (or "" if none)
   note  — room, time, anything extra (optional)

   Past items drop off the home page automatically. You don't
   have to delete them — they stay on Key Dates as a record.
   ---------------------------------------------------------- */
const DEADLINES = [
  { date: "2026-08-31", title: "Example: Histology Quiz 1",       course: "Histology",     note: "Online, opens 8am" },
  { date: "2026-09-08", title: "Example: Gross Anatomy Practical", course: "Gross Anatomy", note: "Lab" },
  { date: "2026-09-15", title: "Example: Biochemistry Exam I",     course: "Biochemistry",  note: "" },
  { date: "2026-10-02", title: "Example: Fall break begins",       course: "",              note: "" }
];


/* ---- COURSES ---------------------------------------------
   One entry per course. Leave syllabus as "" until you have a
   link — the card just won't show a link.
   ---------------------------------------------------------- */
const COURSES = [
  {
    code: "Course code",
    name: "Course name",
    instructor: "Instructor",
    syllabus: "",
    note: "Meeting times, exam format, anything worth remembering."
  },
  {
    code: "Course code",
    name: "Course name",
    instructor: "Instructor",
    syllabus: "",
    note: "Duplicate this block for each course."
  }
];
