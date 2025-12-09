# ⚡ Journal Suggestion Application

<!-- <p align="center">
  <img src="./public/backend_logo.png" width="120" alt="Backend Logo" />
</p> -->

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-Markup-E34F26?logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/Data-Fetch%20API-blue" />
  <img src="https://img.shields.io/badge/Auth-LocalStorage-lightgrey" />
</p>

A **modular**, **scalable** FastAPI backend for:
✔ Journal Management  
✔ Excel Uploads & Updates  
✔ Similarity-based Recommendations using **ChromaDB RAG Service**

---

## 🚀 Core Features

### 📤 Excel Uploads (Bulk Insert)
Supports `.xlsx` uploads:
- Journal Data Insert  
- Associate Data Insert  
- Auto clean Excel issues (NaN, NaT, Excel errors)

### 🔄 Excel Update Logic
- Match by `_id`  
- Updates if record exists  
- Inserts if missing  
➡ Works for both **Journal** and **Associate** tables

### 🔎 Smart Search + Vector Recommendations
The RAG Service handles:
- Vector Search  
- Similarity Score  
Backend enriches:
- SQL Metadata + Vector Score

📌 Ensures **accurate + enriched** results

---

## 🧠 System Architecture

