const scanBtn = document.getElementById("scanBtn");
const status = document.getElementById("status");
const results = document.getElementById("results");
const tableList = document.getElementById("tableList");
const tableCount = document.getElementById("tableCount");
const downloadAllBtn = document.getElementById("downloadAllBtn");

let extractedTables = [];

scanBtn.addEventListener("click", scanPage);
downloadAllBtn.addEventListener("click", downloadAll);

async function scanPage() {
  status.textContent = "Scanning the current page...";
  results.classList.add("hidden");
  tableList.innerHTML = "";

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab?.id) throw new Error("No active tab found.");

    const response = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: extractTablesFromPage
    });

    extractedTables = response?.[0]?.result || [];

    if (!extractedTables.length) {
      status.textContent = "No HTML tables were found on this page.";
      return;
    }

    status.textContent = "Tables extracted successfully.";
    tableCount.textContent = `${extractedTables.length} table${extractedTables.length === 1 ? "" : "s"}`;
    results.classList.remove("hidden");

    renderTables();
  } catch (error) {
    console.error(error);
    status.textContent =
      "Tablix could not access this page. Try a normal webpage instead of a Chrome internal page.";
  }
}

function renderTables() {
  tableList.innerHTML = "";

  extractedTables.forEach((table, index) => {
    const card = document.createElement("div");
    card.className = "table-card";

    const title = document.createElement("div");
    title.className = "table-title";
    title.textContent = `Table ${index + 1}`;

    const meta = document.createElement("div");
    meta.className = "table-meta";
    meta.textContent = `${table.rows.length} rows × ${table.columns} columns`;

    const button = document.createElement("button");
    button.className = "download";
    button.textContent = "⬇ Download CSV";
    button.addEventListener("click", () => downloadTable(table, index));

    card.append(title, meta, button);
    tableList.appendChild(card);
  });
}

function downloadTable(table, index) {
  const csv = rowsToCsv(table.rows);
  downloadText(csv, `tablix_table_${index + 1}.csv`);
}

function downloadAll() {
  if (!extractedTables.length) return;

  // All tables are placed into one CSV with a small separator between tables.
  const sections = extractedTables.map((table, index) => {
    const title = `Table ${index + 1}`;
    return [title, ...rowsToCsv(table.rows).split("\n")].join("\n");
  });

  downloadText(sections.join("\n\n"), "tablix_all_tables.csv");
}

function rowsToCsv(rows) {
  return rows.map(row =>
    row.map(value => {
      const text = String(value ?? "").replace(/\r?\n|\r/g, " ").trim();
      return `"${text.replace(/"/g, '""')}"`;
    }).join(",")
  ).join("\n");
}

function downloadText(text, filename) {
  const blob = new Blob(["\ufeff", text], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// This function runs inside the webpage, not inside the popup.
function extractTablesFromPage() {
  const tables = [...document.querySelectorAll("table")];

  return tables.map(table => {
    const rows = [...table.querySelectorAll("tr")].map(tr => {
      const cells = [...tr.querySelectorAll("th, td")];
      return cells.map(cell => cell.innerText.replace(/\s+/g, " ").trim());
    }).filter(row => row.length > 0);

    const columns = rows.reduce((max, row) => Math.max(max, row.length), 0);

    // Normalize rows so every CSV row has the same number of columns.
    const normalizedRows = rows.map(row => {
      const copy = [...row];
      while (copy.length < columns) copy.push("");
      return copy;
    });

    return {
      rows: normalizedRows,
      columns
    };
  }).filter(table => table.rows.length > 0);
}