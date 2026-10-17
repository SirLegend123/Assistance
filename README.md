# Read Aloud Notes

An assistive reading tool, built to support readers with dyslexia.

**Open the app:** https://sirlegend123.github.io/Assistance/

## What it does

- **Reads PDFs and screenshots aloud** using the natural voices built into your device, highlighting each word as it is spoken.
- **Keeps to the paragraphs.** Tables, charts, diagram labels, captions, footnotes and publishing small print are left out. An article starts with just its title, author and date.
- **Skips citations** such as (Smith, 2020), [3] and small raised numbers, and stops before the reference list, so the reading flows.
- **Pause and note.** Press *Pause & note* at any point to write a note, which is linked to the sentence you were on. Use the microphone key on your keyboard to speak a note instead of typing it.
- **Comfortable reading.** Adjust voice, speed, text size and line spacing. The text uses Lexend, a typeface designed for easier reading.

## Privacy

Everything happens in your browser. Files you open are not uploaded anywhere, and notes are saved only in the browser you use. Use *Copy all notes* or *Download notes* to keep a copy.

## How to use

1. Tap **Choose file** and pick a PDF or a screenshot. You can also drag a file in, or paste a screenshot.
2. Press **Play**. Tap any sentence to start reading from there.
3. Press **Pause & note** whenever you want to write something down.

If a word is read wrongly, use **Fix or paste text** to correct it, or paste in your own text.

## Limits

- Scanned pages (photos of pages) are read with on-device text recognition. It takes a few seconds per page and can make small mistakes.
- Two-column layouts and unusual journal designs may occasionally come out in the wrong order. Untick *Paragraphs only* to see everything the file contains.

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the open-source libraries this tool includes.

---

# My Talker

A picture talking board (AAC) for a pre-verbal child. Tap a symbol and the tablet says it aloud.

**Open the app:** https://sirlegend123.github.io/Assistance/talker/

- Big, colour-coded picture buttons (Fitzgerald Key colours used in AAC), folders, and a sentence strip for joining words.
- Grown-up mode: press and hold the lock for 2 seconds to change words, symbols, colours and the voice.
- Works without Wi-Fi once it has been opened, and can be added to the home screen like an app.
- Symbols only, no photos. The board's words live in `talker/board.json`.
- **Save for everyone:** on the owner's own device, add a GitHub key in Settings (a fine-grained token with *Contents: read and write* on this repository only). Changes made in grown-up mode can then be saved to `board.json`, and every other device picks them up within a few minutes when online. On devices without the key, changes stay on that device only.

---

# Alignment Check

A decision tool for testing an opportunity against the philosophy *children flourish when the systems around them align*. Five checks (system, vehicle, values, roots, practical fit) give a live verdict (Pursue, Shape it or Decline) and a draft reply.

**Open the app:** https://sirlegend123.github.io/Assistance/alignment-check/

- The source lives in `alignment-check/index.html` and mirrors the Claude artefact of the same name.
- **Decision log:** on GitHub Pages, decisions are saved in the browser you use, so they stay on that device and are lost if you clear your browsing data. Opened as the Claude artefact, the log uses your Claude account instead.
- **Ask Claude** only works when the page is opened as the Claude artefact.
