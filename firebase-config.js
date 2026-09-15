// ─────────────────────────────────────────────────────────────────────────
// Firebase config for the LIVE class polls in this deck.
//
// Until you paste real values below, polls run in LOCAL mode (they tally only
// within a single browser / its tabs) — great for testing, but NOT shared
// across students' computers. Fill this in to enable real cross-device polling.
//
// One-time setup (see POLL-SETUP.md in _deck-builder for the full walkthrough):
//   1. Go to https://console.firebase.google.com  →  Add project (free).
//   2. In the project, click the </> "Web" icon to register a web app.
//   3. Firebase shows you a `firebaseConfig = { ... }` object — copy those
//      values into the object below (replace every YOUR_… placeholder).
//   4. Left menu → Build → Firestore Database → Create database.
//   5. Firestore → Rules tab → paste the rules from POLL-SETUP.md → Publish.
//
// The values below are NOT secret (they ship in every web app); access is
// controlled by the Firestore security rules, not by hiding this file.
// ─────────────────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyARGzK81KsWjliHLPFgf8wKDuizhiLs-Lc",
  authDomain: "sos-110.firebaseapp.com",
  projectId: "sos-110",
  storageBucket: "sos-110.firebasestorage.app",
  messagingSenderId: "527114011645",
  appId: "1:527114011645:web:6100a50465562924a24f94",
  measurementId: "G-0G7T944VXS"
};

// ─────────────────────────────────────────────────────────────────────────
// LIVE ATTENDANCE endpoint (optional — leave "" to disable).
//
// Paste the /exec URL of the Google Apps Script web app that writes the
// attendance Google Sheet and sends the confirmation emails. Full five-minute
// setup, including the script to paste, is in _deck-builder/ATTENDANCE-SETUP.md.
//
// Student names and emails go STRAIGHT from the browser to this endpoint and
// are never written to Firestore, whose rules are world-readable.
// ─────────────────────────────────────────────────────────────────────────
// Bound to the NEW response sheet ("SOS 110 Attendance Fall 26"). Used ONLY by
// the instructor's "Submit Attendance" press, to mail the roster — students
// submit to the Google Form below, never here. Deployed "Anyone" access because
// the host browser posts without a Google session; the endpoint returns only
// {ok, count} and mails the roster solely to addresses hardcoded in the script,
// so nothing about it discloses student records.
window.ATTENDANCE_URL = "https://script.google.com/macros/s/AKfycbwnQfV7X52O2TDTcliBkEcEjvTJ3ZzLaFDMEYif8VeU7xQwwTgRUArfju4kBI4CRt0YpA/exec";

// ─────────────────────────────────────────────────────────────────────────
// STUDENT SUBMISSIONS go through this Google Form (added 2026-08-25).
//
// Why: Apps Script only runs ~30 executions at once and needs a write lock to
// keep concurrent rows from clobbering each other, which capped a roll call at
// roughly 10 submissions/second — about two minutes for a 300-student section.
// Google Forms ingests the same 350 submissions in seconds and does the sheet
// writing itself, so no row can be lost to a race. Measured: 350 spread over
// ~20s → 350/350 recorded.
//
// `spreadMs` staggers each browser's send by a random 0–N ms. Do not drop it:
// a tight burst from one IP lost ~8% to rate limiting in testing, and a lecture
// hall shares a handful of NATed campus IPs.
//
// The form must stay PUBLISHED and set to "Anyone with the link", with email
// collection and "limit to 1 response" OFF — each of those forces a Google
// sign-in that students posting from the deck will not have.
//
// ATTENDANCE_URL above is still used, but only for the INSTRUCTOR's "Submit
// Attendance" press, which mails the roster — a single request, no burst.
// ─────────────────────────────────────────────────────────────────────────
window.ATTENDANCE_FORM = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLScf80N2r60JQScCWvzfmCwGfSO0JHhkLdgYupGHdxW4ueCTag/formResponse",
  spreadMs: 6000,
  fields: {
    first:   "entry.870053116",
    last:    "entry.2124478440",
    email:   "entry.1243640787",
    section: "entry.2017319722",
    session: "entry.1949628352",
    chapter: "entry.1270913812"
  }
};

// Exit-survey mailer for the live games (Apps Script, see _deck-builder/survey-mail.gs).
window.SURVEY_MAIL_URL = "https://script.google.com/macros/s/AKfycbyrRNrQjbAiYugFw131rfJMIt2E2fneUnx9ryatdU98DMdyC4NkZI2LP8dnqQK3E2LZ/exec";
