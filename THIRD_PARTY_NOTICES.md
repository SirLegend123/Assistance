# Third-party notices

This tool includes the following open-source software, unmodified, in the `pdf/`, `ocr/` and `quote/lib/` folders.

| Component | Version | Files | Licence |
|---|---|---|---|
| [PDF.js](https://github.com/mozilla/pdf.js) (pdfjs-dist), Mozilla | 3.11.174 | `pdf/pdf.min.js`, `pdf/pdf.worker.min.js` | Apache License 2.0 |
| [Tesseract.js](https://github.com/naptha/tesseract.js) | 5.1.1 | `ocr/tesseract.min.js`, `ocr/worker.min.js` | Apache License 2.0 |
| [Tesseract.js Core](https://github.com/naptha/tesseract.js-core) | 5.1.1 | `ocr/tesseract-core-lstm.wasm.js`, `ocr/tesseract-core-simd-lstm.wasm.js` | Apache License 2.0 |
| English language model from [tessdata](https://github.com/tesseract-ocr/tessdata) (4.0.0 best_int, via @tesseract.js-data/eng 1.0.0) | 4.0.0 | `ocr/eng-traineddata.txt` (stored as base64 text) | Apache License 2.0 |
| [html2canvas](https://github.com/niklasvh/html2canvas), Niklas von Hertzen | 1.4.1 | `quote/lib/html2canvas.min.js` | MIT ([licenses/MIT-html2canvas.txt](licenses/MIT-html2canvas.txt)) |
| [jsPDF](https://github.com/parallax/jsPDF), James Hall and yWorks GmbH | 2.5.2 | `quote/lib/jspdf.umd.min.js` | MIT ([licenses/MIT-jsPDF.txt](licenses/MIT-jsPDF.txt)) |

The full text of the Apache License 2.0 is in [licenses/Apache-2.0.txt](licenses/Apache-2.0.txt).

The [Lexend](https://fonts.google.com/specimen/Lexend) and [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible) typefaces are loaded from Google Fonts under the SIL Open Font License 1.1.

The [Inter](https://fonts.google.com/specimen/Inter) typeface used by the quote builder is loaded from Google Fonts under the SIL Open Font License 1.1.
