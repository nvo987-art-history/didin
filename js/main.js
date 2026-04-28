const log = document.getElementById("log");

const lines = [
  "[BOOT] did.ai.in gateway init",
  "[DNS] Dynadot CNAME -> GitHub Pages",
  "[TLS] certificate handshake expected",
  "[DID] did:web:identity.nvo987.us",
  "[LINK] https://identity.nvo987.us",
  "[MODE] static landing / resolver reference",
  "[OK] system online",
  "[READY] awaiting inbound resolution requests..."
];

log.textContent = "";

let i = 0;

function typeLine() {
  if (i >= lines.length) return;
  log.textContent += lines[i] + "\n";
  i++;
  setTimeout(typeLine, 280);
}

typeLine();
