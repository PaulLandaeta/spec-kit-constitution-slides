# Slides · How to Write a Constitution for Spec Kit

A presentation (Reveal.js + Vite) that teaches how to write a `constitution.md` for
**Spec-Driven Development with GitHub Spec Kit**: which principles go in the constitution,
what should move to auxiliary files (`tech-stack.md`, guidelines, ADRs), and a real case
(a World Cup prediction/betting pool app with its 18 principles).

Styled with the **CodeRoad** color palette (dark navy + purple accents).

## Requirements

- Node.js 18+ (tested with Node 24)

## Usage

```bash
npm install      # installs reveal.js and vite
npm run dev      # opens the deck in the browser (http://localhost:5173)
npm run build    # generates the static deck in dist/
npm run preview  # serves the dist/ build
```

## Navigation

- **Arrows ← →** : next / previous
- **Arrow ↓** : vertical sub-slides (auxiliary files, tech-stack vs ADR options)
- **Esc / O** : overview of all slides
- **S** : speaker view (notes)
- **F** : fullscreen

## Export to PDF

Open the deck with the `?print-pdf` parameter and use **Print → Save as PDF**:

```
http://localhost:5173/?print-pdf
```

## Structure

```
.
├── index.html              # the deck (all sections)
├── src/
│   ├── main.js             # Reveal.js init + plugins
│   └── theme.css           # custom visual theme (CodeRoad palette)
└── examples/.specify/      # example artifacts (copy-ready)
    ├── memory/
    │   ├── constitution.md          # World Cup Prediction Pool (18 principles)
    │   ├── frontend-guidelines.md
    │   ├── backend-guidelines.md
    │   ├── api-contracts.md
    │   ├── testing-guidelines.md
    │   └── security-guidelines.md
    ├── tech-stack.md
    └── adr/
        ├── adr-001-react.md
        ├── adr-002-nodejs.md
        └── adr-003-postgresql.md
```

The `examples/.specify/` folder is a real template ready to copy into a project that
uses Spec Kit (`specify init`).

## References

- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [Spec-Driven Development](https://github.com/github/spec-kit/blob/main/spec-driven.md)
- [Quick Start Guide](https://github.github.com/spec-kit/quickstart.html)
- [Reveal.js](https://revealjs.com)
