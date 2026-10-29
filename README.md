<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:0ea5e9&height=170&section=header&text=Newsletter%20Signup%20Modal&fontSize=40&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2020&descAlignY=62&descSize=17" alt="Newsletter Signup Modal header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=720&lines=Veda+Technology+Internship+%E2%80%A2+Day+20;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;Auto+Popup+%E2%80%A2+Validation+%E2%80%A2+Session+Aware" alt="Typing introduction" />

  <p><b>Light Theme &#183; Blue Accent &#183; Responsive &#183; Accessible &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![Accessible](https://img.shields.io/badge/Accessible-2563eb?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-16a34a?style=for-the-badge)

</div>

---

## Features

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1000&color=2563eb&center=true&vCenter=true&width=720&lines=Auto+Popup+After+3s+%E2%80%A2+Fade+%2B+Scale+Animation;Validation+%E2%80%A2+Success+Feedback+%E2%80%A2+Session+Storage" alt="Features animation" />
</div>

- **Auto-display** after ~3 seconds using `setTimeout()`.
- **Fade-in + scale** animation with a semi-transparent overlay.
- **Dismiss** via close (×) button, overlay click, or the Escape key.
- **Session-aware**: no reopen after dismissal or successful signup during the session (`sessionStorage`).
- **Email validation** with HTML5 (`type="email"`, `required`) and JavaScript regex.
- **Accessible error messages** via `role="alert"` / `aria-live`.
- **Success message** without page reload, with simulated subscription ready for API integration.
- **Duplicate submission prevention** and disabled state while processing.
- **Focus management**: focus moves into the modal on open and returns on close; focus trap inside.
- **ARIA dialog**: `role="dialog"`, `aria-modal="true"`, labelled title/description.
- **Privacy note**: "No spam. Unsubscribe anytime."
- **Responsive** layout for mobile, tablet, and desktop.
- **Reduced motion** respected via `prefers-reduced-motion`.

## Technologies

| Technology | Use |
|------------|-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Semantic structure, form, ARIA attributes (`index.html`) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Custom properties, Flexbox, transitions, media queries, focus states (`style.css`) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Modal logic, validation, session storage, focus management (`script.js`) |
| ![SVG](https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logo=svg&logoColor=black) | Newsletter icon and favicon (`assets/favicon.svg`) |
| ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=flat-square) | Zero dependencies |

## Modal Flow

```
Page loads -> shouldShow() checks sessionStorage
  -> if allowed: setTimeout(openModal, 3000)
  -> openModal(): show overlay, animate, lock scroll, focus input
  -> submit: validate -> simulate (ready for fetch) -> success -> close
  -> dismiss (× / overlay / Escape): set sessionStorage dismissed -> close
```

## Accessibility

- Semantic landmarks: `main`, `section`, `footer`, `form`.
- One `h1` for the page title; `h2` for the modal title.
- Associated label (`sr-only`) for the email input plus `aria-describedby`.
- `role="dialog"` and `aria-modal="true"` on the modal container.
- `aria-live` regions announce errors (`assertive`) and success (`polite`).
- Visible focus indicators using blue outlines.
- Focus trap keeps Tab/Shift+Tab inside the open modal.
- `prefers-reduced-motion` disables animations and transitions.

## Project Structure

```text
internship-task-20/
├── index.html          # Semantic structure and modal markup
├── style.css           # Responsive styling and animations
├── script.js           # Modal, validation, and session logic
├── README.md           # This file
├── Veda_Technology_Task_20_Project_Report.docx
└── assets/
    └── favicon.svg     # Newsletter envelope favicon
```

## How to Run

1. Open the `internship-task-20` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

To re-test the popup in the same tab, clear session storage in DevTools (Application → Session Storage) or open a new tab.

## Profile Links

| Profile | Link |
|---------|------|
| ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) | https://github.com/0xAbhi13 |
| ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white) | https://www.linkedin.com/in/0xabhi13/ |
| ![Portfolio](https://img.shields.io/badge/Portfolio-2563EB?style=flat-square&logo=globe&logoColor=white) | https://0xabhi13.github.io/MyPortfolio/ |

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:0ea5e9&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 20: Newsletter Signup Modal — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>
