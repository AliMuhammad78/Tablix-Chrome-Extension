 # 🧩 Tablix
 > ⚠️ **Personal Project:** This repository is shared for learning and reference purposes. Please do not copy, re-upload, or present this project as your own work. If you build upon it, provide proper attribution.

<p align="center">

<img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Manifest-V3-34A853?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Manifest V3">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">

</p>

<p align="center">

### 📊 Extract HTML Tables → 🧹 Process Data → 📄 Export CSV

</p>

<p align="center">

**Tablix is a lightweight Chrome extension that extracts HTML tables from webpages and converts them into clean CSV files.**

</p>

---

## 🚀 Overview

**Tablix** is a browser-based table extraction tool built as a **Chrome Extension using Manifest V3**.

It allows users to scan the current webpage, automatically detect standard HTML `<table>` elements, inspect their dimensions, and export the extracted data as CSV files.

Instead of manually copying table data from webpages, Tablix provides a simple workflow:

```text
🌐 Webpage
    │
    ▼
🔍 Scan Page
    │
    ▼
📊 Detect HTML Tables
    │
    ▼
🧹 Clean & Normalize Data
    │
    ▼
📄 Convert to CSV
    │
    ▼
⬇️ Download
```

---

# ✨ Features

### 🔍 Automatic Table Detection

Scan the current webpage and detect standard HTML `<table>` elements automatically.

### 📊 Multiple Table Support

If a webpage contains multiple tables, Tablix detects them and presents them individually.

### 📐 Table Dimensions

View the number of:

* Rows
* Columns

for each detected table.

### ⬇️ Individual CSV Export

Download a specific detected table as a CSV file.

### 📦 Export All Tables

Download all detected tables into a single CSV output.

### 🧹 Data Cleaning

Tablix cleans extracted table data by:

* Removing unnecessary whitespace
* Normalizing column counts
* Preparing data for CSV export

### 🔤 Proper CSV Escaping

The CSV generation process handles common CSV-sensitive characters, including:

* Commas
* Double quotes
* Line breaks

This helps ensure that exported CSV files remain properly structured.

### 🚫 No External Server

Tablix does not require an external backend server or API.

The extraction and CSV generation happen directly within the browser.

---

# 🧠 How Tablix Works

Tablix follows a simple extraction pipeline:

```text
┌──────────────────────┐
│      Current Page    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Scan the DOM     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Find <table> Elements│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Extract Rows & Cells │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Clean & Normalize    │
│       Data           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     CSV Conversion   │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     Download CSV     │
└──────────────────────┘
```

---

# 🛠️ Technologies

| Technology                  | Purpose                             |
| --------------------------- | ----------------------------------- |
| 🟨 **JavaScript**           | Extension logic and data processing |
| 🌐 **HTML**                 | Popup structure and interface       |
| 🎨 **CSS**                  | Popup styling                       |
| 🧩 **Chrome Extensions**    | Browser extension architecture      |
| 📜 **Manifest V3**          | Extension configuration             |
| ⚙️ **Chrome Scripting API** | Accessing webpage content           |
| 📊 **HTML DOM**             | Finding and extracting tables       |
| 📄 **CSV**                  | Export format                       |

---

# 📂 Project Structure

```text
Tablix/
│
├── manifest.json
│
├── popup.html
│
├── popup.css
│
├── popup.js
│
└── README.md
```

### 📄 File Responsibilities

#### `manifest.json`

Defines the Chrome extension configuration, permissions, metadata, and Manifest V3 settings.

#### `popup.html`

Contains the structure of the Tablix popup interface.

#### `popup.css`

Controls the visual appearance and layout of the popup.

#### `popup.js`

Contains the core JavaScript functionality responsible for:

* Scanning webpages
* Detecting tables
* Extracting table data
* Processing extracted information
* Generating CSV output
* Triggering downloads

#### `README.md`

Contains project documentation, installation instructions, features, and usage information.

---

# 🚀 Installation

Tablix can be installed locally using Chrome's developer extension tools.

### 1️⃣ Clone or Download

Download or clone this repository to your computer.

### 2️⃣ Open Chrome Extensions

Open:

```text
chrome://extensions/
```

### 3️⃣ Enable Developer Mode

Turn on:

**Developer mode**

### 4️⃣ Load the Extension

Click:

**Load unpacked**

### 5️⃣ Select the Project Folder

Select the Tablix project folder:

```text
Tablix/
```

### 6️⃣ Pin Tablix

Pin the **Tablix** extension to the Chrome toolbar for easy access.

---

# ▶️ Usage

Using Tablix is straightforward.

```text
1. 🌐 Open a webpage
        ↓
2. 🧩 Click Tablix
        ↓
3. 🔍 Click "Scan Page"
        ↓
4. 📊 View detected tables
        ↓
5. 📐 Inspect rows × columns
        ↓
6. ⬇️ Export individual table
        OR
   📦 Export all tables
```

### Example Workflow

Suppose a webpage contains:

```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Ali</td>
        <td>22</td>
    </tr>
</table>
```

Tablix detects the table and can convert it into CSV:

```csv
Name,Age
Ali,22
```

---

# 📊 What Tablix Can Extract

Tablix works with **standard HTML tables that exist in the webpage DOM**.

For example:

```html
<table>
    <tr>
        <th>Product</th>
        <th>Price</th>
    </tr>

    <tr>
        <td>Laptop</td>
        <td>$800</td>
    </tr>
</table>
```

The table can be extracted and converted into structured CSV data.

---

# ⚠️ Limitations

Tablix focuses on standard HTML tables available in the webpage DOM.

It may not directly extract tables that are:

* 🖼️ Rendered as images
* 🎨 Drawn using Canvas
* 🔒 Completely hidden from the DOM
* 📡 Generated exclusively through a site's internal API
* 🧩 Presented through non-table HTML structures

These cases may require different extraction techniques.

---

# 🔐 Privacy & Architecture

Tablix is designed to perform its table extraction locally inside the browser.

### Key characteristics

* 🚫 No external backend
* 🚫 No external API required
* 🚫 No database
* 🚫 No server-side processing
* 💻 Browser-based processing
* 📄 Local CSV generation

The extension is focused on extracting data from the webpage currently being processed.

---

# 🧪 Development

To modify or experiment with Tablix:

```text
1. Edit the source files
       ↓
2. Open chrome://extensions/
       ↓
3. Find Tablix
       ↓
4. Click Reload
       ↓
5. Test the changes
```

This makes development and testing quick without rebuilding the extension.

---

# 🎯 Project Goals

The main goals behind Tablix were to explore practical browser-extension development while solving a useful data-extraction problem.

### Learning Goals

* 🟨 Practice JavaScript
* 🌐 Work with the DOM
* 🧩 Understand Chrome Extension architecture
* 📜 Learn Manifest V3
* ⚙️ Work with browser APIs
* 📊 Process HTML table data
* 📄 Generate CSV files
* 🧹 Clean and normalize extracted data
* 🚀 Turn JavaScript knowledge into a practical tool

---

# 💡 Why Tablix?

Copying tables manually from webpages can become repetitive and inefficient.

Tablix simplifies the process:

```text
Manual Approach

Webpage
   ↓
Select Table
   ↓
Copy
   ↓
Paste
   ↓
Clean Data
   ↓
Format CSV
   ↓
Save
```

With Tablix:

```text
Webpage
   ↓
🧩 Tablix
   ↓
🔍 Scan
   ↓
📊 Detect
   ↓
⬇️ CSV
```

---

# 🚀 Future Improvements

Potential future improvements include:

* 📑 Export each table as a separate CSV
* 📊 Better table previews
* 🔎 Table search/filtering
* 📋 Copy table directly to clipboard
* 📥 Additional export formats
* 🎨 Improved popup interface
* 📈 Better handling of complex tables
* 🔄 Improved support for dynamically generated content
* 🧩 More advanced table detection
* ⚙️ Additional extraction options

---

# 📌 Project Status

🟢 **Active Learning / Personal Project**

Tablix was created as a practical project to explore JavaScript, browser APIs, DOM manipulation, data extraction, and Chrome Extension development.

---

# 🏆 Skills Demonstrated

Through this project, the following skills were applied:

```text
🟨 JavaScript
     │
     ├── DOM Manipulation
     ├── Data Processing
     ├── Event Handling
     ├── CSV Generation
     │
     ▼
🧩 Chrome Extension Development
     │
     ├── Manifest V3
     ├── Chrome Scripting API
     └── Popup Development
     │
     ▼
📊 Data Extraction
     │
     ├── HTML Tables
     ├── Data Cleaning
     └── CSV Export
     │
     ▼
🚀 Practical Browser Tool
```

---

# 👨‍💻 Learning Journey

**Tablix** is more than a Chrome extension — it is a practical application of JavaScript concepts learned through hands-on experimentation.

The project combines:

**JavaScript + DOM + Browser APIs + Data Processing + CSV Generation + Chrome Extensions**

into one focused application.

> 💡 **Learn the concept. Build something useful. Improve it through practice.**

---

<p align="center">

## ⚠️ Personal Use & Attribution Notice

> **📌 This project is intended for personal learning, experimentation, and educational use.**

Tablix is a personal project created for learning and demonstrating **JavaScript, Chrome Extension development, DOM manipulation, data extraction, and CSV processing**.

You are welcome to **view the source code, study the implementation, and use it as a learning reference**.

However:

* 🚫 **Do not upload this project to your own repository and present it as your original work.**
* 🚫 **Do not claim Tablix or its source code as your own creation.**
* 🚫 **Do not remove the original author/project attribution and redistribute it as an original project.**
* 📚 Use the repository primarily as a **learning and reference resource**.
* 💡 You may build your **own implementation** inspired by the concepts demonstrated here.

If you use substantial portions of the code in another project, please provide appropriate attribution to the original repository.

### 🤝 Learn From It, Don't Claim It

```text
📖 Study the code
      ↓
🧠 Understand the concepts
      ↓
💡 Learn the approach
      ↓
🛠️ Build your own implementation
      ↓
🚀 Create something original
```

> **The goal is to learn from the project and use the knowledge to build your own work — not to copy and claim the project as your own.**


### 🧩 Tablix

**Extract • Clean • Export**

</p>

<p align="center">

Made with 🟨 JavaScript and a lot of experimentation.

</p>
