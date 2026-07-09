const PROMPT_PATH = "resources/ppp-logo-test-prompt.md";

async function loadPrompt() {
  const res = await fetch(PROMPT_PATH);
  if (!res.ok) throw new Error(`Could not load prompt (${res.status})`);
  return res.text();
}

function extractPasteablePrompt(markdown) {
  const marker = "---\n";
  const first = markdown.indexOf(marker);
  if (first === -1) return markdown.trim();
  const second = markdown.indexOf(marker, first + marker.length);
  if (second === -1) return markdown.slice(first + marker.length).trim();
  return markdown.slice(second + marker.length).trim();
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

function setStatus(message) {
  const el = document.getElementById("copy-status");
  if (el) el.textContent = message;
}

let cachedPrompt = null;

async function getPrompt() {
  if (cachedPrompt) return cachedPrompt;
  const raw = await loadPrompt();
  cachedPrompt = extractPasteablePrompt(raw);
  return cachedPrompt;
}

async function handleCopy() {
  try {
    const prompt = await getPrompt();
    await copyText(prompt);
    setStatus("Copied to clipboard.");
  } catch (err) {
    console.error(err);
    setStatus("Copy failed — download the .md instead.");
  }
}

async function hydratePreview() {
  const code = document.querySelector("#prompt-preview code");
  if (!code) return;
  try {
    const prompt = await getPrompt();
    code.textContent = prompt;
  } catch (err) {
    code.textContent = "Could not load prompt preview. Use Download .md.";
    console.error(err);
  }
}

document.getElementById("copy-prompt")?.addEventListener("click", handleCopy);
document
  .getElementById("copy-prompt-inline")
  ?.addEventListener("click", handleCopy);

hydratePreview();
