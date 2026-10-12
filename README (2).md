# Tender Document Package Builder

AI DevFest 2026 – Vibe Coding contest, upgraded version.

A frontend-only web app that helps office staff turn a set of PDF files into one complete, checked and correctly ordered tender package PDF. Everything runs in the browser. No file is uploaded anywhere.

## Participant

- Name: Khaled
- Registration number: `<YOUR-REGISTRATION-NUMBER>`
- Live link: `<YOUR-PUBLIC-HTTPS-LINK>`

## Project files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `style.css` | Styling, light and dark themes |
| `app.js` | All logic: checks, matching, PDF generation, translations |

Plain HTML, CSS and JavaScript. No build step. pdf-lib is loaded from a CDN.

## How to run

- **Online:** open the live link in the latest Google Chrome.
- **Locally:** keep the three files together and open `index.html` in Chrome. An internet connection is needed for pdf-lib and fonts.

## How to use

1. Click **Open requirements.json**.
2. Drag in or choose your PDFs (up to 30 files, 50 MB in total).
3. Optional: add a logo and a seal/signature.
4. Match each file to its document and enter expiry dates where asked.
5. Fix everything listed under "Fix these first", then click **Make package PDF**.
6. Chrome downloads `<tender_id>_Package.pdf`.

## Main features

- Tender details and document list sorted by `order`.
- Multi-PDF upload with name and page count; non-PDF files rejected; files can be removed.
- One-to-one matching with change and undo.
- Expiry date input, live status (Missing, Expiry date needed, Expired, Not provided, OK). Same-day expiry is OK.
- Duplicate detection by SHA-256 content hash; duplicates cannot be matched.
- Generate button disabled with a visible list of reasons.
- Package PDF: English cover page, documents in order with all pages, footer `<tender_id> | Page X of Y` in a bottom margin so it never covers content.
- Download as `<tender_id>_Package.pdf`.

## Languages

English, Bangla (বাংলা), Hindi (हिन्दी) and Arabic (العربية, right-to-left). Pick one from the menu in the top bar. All labels, buttons, messages and statuses are translated. Document names use `title_bn` for Bangla and `title_en` for the other languages. The choice is remembered.

## Bonus and extra features

- Index page after the cover with the start page of each document.
- Damaged or password-protected PDFs show a clear message.
- Export checklist as CSV.
- Auto-match by file name.
- Save and reopen work: automatic in the browser (localStorage), plus **Save project** / **Open project** as a `.json` file. Matches are restored when the same PDFs are added again.
- Logo (PNG or JPG) on the cover page.
- Seal / signature (PNG) placed on the package pages you choose, for example `3, 5-8`. Empty means page 1.
- **View** button to open an uploaded PDF in a new tab.
- Light and dark theme.
- Drag-and-drop upload and a progress bar showing how many documents are ready.

## Known problems

- Bangla, Hindi and Arabic text cannot be drawn on the PDF cover and index page. Characters outside the standard Latin set appear as `?` in the PDF. The app screen itself shows all languages correctly.
- Saved projects store only which file (by content hash) belongs to which document and the expiry dates. The PDFs must be added again after reopening.
- Auto-match is a simple file-name word match. Check the result before generating.
- A source page with a rotation set may not keep its rotation.
- Hindi and Arabic translations were written by AI and should be reviewed by a native speaker.
- The app needs an internet connection for pdf-lib and fonts.

## AI tools used

- Claude (Anthropic) – wrote and edited the code.

## Most useful prompt

```
<PASTE YOUR MOST USEFUL PROMPT HERE>
```

## License

MIT – see `LICENSE`.
