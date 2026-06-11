# Studio UNDO/REDO — Website

Official website for **Studio UNDO/REDO**, a creative design studio that hits CTRL+Z on the ordinary and CTRL+SHIFT+Z into groundbreaking ideas.

**Live site:** _link coming soon_

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework |
| [React 19](https://react.dev) | UI |
| [TypeScript](https://typescriptlang.org) | Language |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll |

---

## Running Locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

---

## How to Update Content

| What | Where |
|------|-------|
| Add / edit a project | `data/projects.ts` — one entry per project. Images go in `public/assets/projects/`. |
| Page copy / text | Page files: `app/page.tsx` (home), `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx` |
| Services list | `components/ServicesAccordion.tsx` (the `ITEMS` array) |
| Colours / fonts / spacing | `app/globals.css` `:root` tokens |
| Contact details & social links | `components/Footer.tsx` |
| Nav links | `components/NavBar.tsx` (the `LINKS` array) |

---

## Heading Font (Bely Display)

The design uses **Bely Display** (a licensed TypeTogether font). Drop the files here to activate it — no code changes needed:

```
public/fonts/BelyDisplay-Regular.woff2
public/fonts/BelyDisplay-Regular.woff
```

Until then, Abril Fatface (Google Fonts) stands in as a fallback.

---

## Project Structure

```
app/              Pages (Next.js App Router) + global styles
components/       NavBar, Footer, WordTicker, ArrowHeading,
                  Marquee, GradientBlobs, ServicesAccordion,
                  Reveal, LenisProvider
data/projects.ts  The one file to edit when adding new work
public/assets/    Images (brand, founders, illustrations, projects)
public/fonts/     Drop BelyDisplay-Regular.woff2 here
```

---

## License

MIT — see [LICENSE](LICENSE).
