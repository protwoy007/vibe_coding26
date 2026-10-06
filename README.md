# Tender Document Package Builder

AI DevFest 2026 – Vibe Coding contest entry.

A frontend-only web app that helps office staff turn a set of PDF files into one complete, checked and correctly ordered tender package PDF. Everything runs in the browser. No file is uploaded anywhere.

## 1. Participant

- Name: Khaled
- Registration number: VC052

## 2. How to run

No build step and no installation.

- **Online:** open the live link in the latest Google Chrome.
- **Locally:** download the repository and open `index.html` in Chrome. The app needs an internet connection to load the pdf-lib library and fonts from a CDN.

How to use:

1. Click **Open requirements.json** and choose the tender file.
2. Drag in or choose your PDF files (up to 30 files, 50 MB in total).
3. Optional: add a company logo (PNG or JPG).
4. For each required document, pick its file from the dropdown. Enter the expiry date where asked.
5. Fix every item shown under "Fix these first". When all checks pass, click **Make package PDF**.
6. The file `<tender_id>_Package.pdf` is downloaded by Chrome.

Use the language button in the top bar to switch between Bangla and English.

## 3. Main features done

- Loads `requirements.json` and shows the tender details and the document list sorted by `order`.
- Uploads many PDFs at once, showing each file name and page count. Non-PDF files are rejected with a clear message. Any file can be removed.
- One-to-one matching: one file per document and one document per file, with change and undo at any time.
- Expiry date input for documents with `has_expiry = true` once a file is matched.
- Live status for every document: Missing, Expiry date needed, Expired, Not provided, OK. A document expiring on the submission deadline is still OK.
- Duplicate detection by SHA-256 content hash, not by name. Duplicates are marked in the file list and cannot be matched.
- The Generate button stays disabled while any document is blocking, and the reasons are listed.
- Package PDF:
  - Page 1 is an English cover page with tender ID, title, procuring entity, bidder, submission deadline, date made and the list of included documents in order.
  - Documents follow in `order`, with all pages in original order. Optional documents with no file are skipped.
  - Every page, including the cover, has the footer `<tender_id> | Page X of Y`.
  - Each page is placed on a slightly taller page and the footer is drawn in the added bottom margin, so it never covers content. Pages of different sizes are handled.
- Download as `<tender_id>_Package.pdf`.
- Full Bangla / English switch, including labels, buttons, messages, statuses and document names (`title_bn` / `title_en`). The choice is remembered.

## 4. Bonus features

- Index page after the cover with the start page of each document.
- Damaged or password-protected PDFs show a clear message instead of crashing.
- Export the checklist as CSV (document, file name, pages, expiry date, status).
- Auto-match files to documents by file name.
- Save and reopen work: matches and expiry dates are saved in the browser (localStorage) and restored when the same PDFs are added again.
- Optional logo (PNG or JPG) shown at the top right of the cover page.

## 5. Known problems

- Bangla text cannot be drawn on the PDF cover and index page. Characters outside the standard Latin set appear as `?` in the PDF. The app itself shows Bangla correctly.
- Saved work stores only which file (by content hash) belongs to which document and the expiry dates. The PDF files must be added again after reopening.
- Auto-match is a simple file-name word match and can miss or pick wrongly. Check the result before generating.
- A source page that has a rotation set may not keep its rotation in the package.
- The app needs an internet connection for the pdf-lib library and fonts.
- Seal/signature placement and AI help are not implemented.

## 6. AI tools used

- Claude (Anthropic) – wrote and edited the code.



MIT – see `LICENSE`.
