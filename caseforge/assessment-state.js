const ATTEMPT_STORAGE_KEY = "caseforge-active-attempt-v2";

function readActiveAttempt() {
  try { return JSON.parse(localStorage.getItem(ATTEMPT_STORAGE_KEY) || "null"); } catch { return null; }
}

function writeActiveAttempt(attempt) {
  try { localStorage.setItem(ATTEMPT_STORAGE_KEY, JSON.stringify(attempt)); } catch { /* Browser storage is optional. */ }
}

function clearActiveAttempt() {
  try { localStorage.removeItem(ATTEMPT_STORAGE_KEY); } catch { /* Browser storage is optional. */ }
}
