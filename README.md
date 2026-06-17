# Digital Academic Archive | المستودع الأكاديمي الرقمي

An advanced, human-centered digital platform tailored to document, archive, and showcase academic research, papers, and applied projects. This repository encapsulates the academic journey of **Shalee Khalil** as a Master's student in the **Applied Human Resources Management** program. The platform aims to humanize digital academic environments by providing seamless, structured, and elegant access to knowledge.

---

## 🌟 Core Features

* **Full Dual-Language Support:** A dynamic user interface that allows instantaneous switching between Arabic and English at the click of a button.
* **Dynamic Layouts (RTL / LTR):** The website's direction, text alignment, and layout components automatically adjust based on the selected language to guarantee an optimal user experience.
* **Smart Long-Title Handling:** A built-in rendering layout that breaks down exceptionally long academic titles into structured main titles and subtitles, preserving visual harmony and professional presentation.
* **Silent OS Filename Matching:** A robust decoupling mechanism that separates the academic display title on the screen from the actual physical file name stored on the Windows file system. This eliminates encoding, spacing, and character mismatch issues during downloads.
* **Integrated Professional Identity:** A customized footer containing direct links to official professional and social channels (Facebook profile and the comprehensive Portfolio/Certificates platform).
* **Scalable Architecture:** A highly modular data layer structure that makes scaling and expanding the archive with future courses as simple as updating a single array in `data.js`.

---

## 🛠 Tech Stack

* **React.js:** The core JavaScript library utilized for building interactive, component-driven user interfaces.
* **React Router DOM (v6):** Leveraged to handle fast, seamless client-side routing between the dashboard and course pages without full page reloads.
* **Lucide React:** A modern, consistent, and responsive vector icon library.
* **Pure CSS (Custom Properties/Variables):** Employed to build a fast, maintainable design system centered around an academic blue and teal palette.

---

## 📁 Project Structure

```text
academic-research-archive/
├── public/
│   ├── index.html          # Main SPA HTML entry point
│   └── pdfs/               # Local directory holding the uploaded PDFs
│       ├── tqm/            # Total Quality Management papers & activities
│       └── dt/             # Design Thinking research & case studies
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Top navigation bar with language toggle button
│   │   └── Footer.js       # Footer containing personal and professional links
│   ├── pages/
│   │   ├── Dashboard.js    # Main dashboard with researcher bio and course cards
│   │   └── CoursePage.js   # Dynamic page displaying course items and download triggers
│   ├── styles/
│   │   └── index.css       # Custom styling sheet handling layout directions (RTL/LTR)
│   ├── data.js             # Local internal database for courses and items metadata
│   ├── App.js              # Root component managing language state and routing layout
│   └── index.js            # React application initialization entry point
└── README.md               # Current documentation file
