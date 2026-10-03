# Salomé de Carvalho — Portfolio

React + Vite + TypeScript. One-page landing site with anchor navigation and case-study pop-ups.

```bash
npm install
npm run dev           # local dev server
npm run build         # production build → dist/
npm run build:sketch  # single-file HTML preview → dist-sketch/
```

## Structure

```
src/
  data/          # all content — edit text here (projects.ts, profile.ts)
  styles/        # tokens.css (colours, type, spacing), fonts.css, global.css
  hooks/         # useActiveSection (anchor nav highlight), useLockBodyScroll
  components/
    layout/      # AnchorNav, Footer
    ui/          # Photo (image or placeholder), FitText, SectionHeading
  features/      # one folder per page section
    hero/ intro/ about/ projects/ illustration/ skills/ experience/ contact/
```

## Adding photos

Put images in `public/images/...` and set `src` on any `Photo` entry in `src/data/projects.ts`
(e.g. `cover: { src: '/images/manda/cover.jpg', alt: '…', tone: 'purple' }`). Without `src` a branded placeholder renders.
Illustrations for the slider live in `src/data/profile.ts` → `illustrations`.

## License

This project has no explicit license. Third-party assets listed above remain the property of their respective owners and are not included in this repository.