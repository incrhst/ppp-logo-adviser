const PROMPT_PATH = "resources/critique-my-flyer-prompt.md";

/* The squint: the board arrives sharp, then everything except the subject
   recedes. One authored moment, from an already-visible default. */
function runSquint() {
  const wall = document.getElementById("wall");
  if (!wall) return;
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 700;
  window.setTimeout(() => wall.classList.add("squinted"), delay);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

/* The pasteable body is everything after the intro rule. */
function extractPrompt(markdown) {
  const rule = markdown.indexOf("\n---\n");
  if (rule === -1) return markdown.trim();
  return markdown.slice(rule + 5).trim();
}

let cached = null;

async function getPrompt() {
  if (cached) return cached;
  const res = await fetch(PROMPT_PATH);
  if (!res.ok) throw new Error(`Could not load prompt (${res.status})`);
  cached = extractPrompt(await res.text());
  return cached;
}

function setStatus(id, message) {
  const el = document.getElementById(id);
  if (el) el.textContent = message;
}

function announce(message) {
  setStatus("tear-status", message);
  setStatus("take-status", message);
}

async function copyPrompt(trigger) {
  try {
    await copyText(await getPrompt());
    announce("Copied. Paste it into your agent, then attach your flyer.");
    if (trigger?.classList.contains("tab")) tearOff(trigger);
  } catch (err) {
    console.error(err);
    announce("Copy failed — download the .md instead.");
  }
}

function tearOff(tab) {
  tab.classList.add("torn");
  tab.disabled = true;
  const strip = tab.parentElement;
  const remaining = strip
    ? strip.querySelectorAll(".tab:not(.torn)").length
    : 0;
  const instruction = document.getElementById("tear-instruction");
  if (instruction && remaining === 0) {
    instruction.textContent = "All gone — there's a copy button below too.";
  }
}

async function copyInstall() {
  const el = document.getElementById("install-cmd");
  if (!el) return;
  try {
    await copyText(el.textContent.trim());
    setStatus("install-status", "Copied to clipboard.");
  } catch (err) {
    console.error(err);
    setStatus("install-status", "Copy failed.");
  }
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;
  if (trigger.dataset.action === "prompt") copyPrompt(trigger);
  if (trigger.dataset.action === "install") copyInstall();
});

const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();

runSquint();
