# Studio Undo/Redo — 2026 redesign

A local redesign of the connected Studio Undo/Redo Next.js repository. Built with Next.js App Router, Framer Motion and Lenis. No deployment or GitHub push has been performed.

## Run locally

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open http://localhost:3000. Production validation: `npm run build`.

## Content

- `data/portfolio.ts`: 24 project entries and galleries, including the new portfolio and three earlier projects.
- `data/studio.ts`: the six service groups and original portfolio URL.
- `public/assets/portfolio`: original supplied portfolio artwork, compressed to WebP and MP4.
- `public/assets/founders`: founder photographs from the existing repository.
- `public/fonts`: self-hosted DM Sans.

## Sources

- New 103-slide portfolio: https://docs.google.com/presentation/d/1gShb_ijqnk_PM9ulQQAXmXsMMrI8JF8S7pwvLfEkpcs/edit
- Existing website: https://new-undo-redo-studio-website.vercel.app
- Existing repository: https://github.com/thetarunshekhawat/undo-redo-studio
- Motion reference: https://www.aardvarkbookclub.com

The new deck is a working document. Draft annotations and alternative copy are excluded. Founder biographies and contact details come from the existing repository. Project descriptions summarize the supplied portfolio. Older work remains available in the archive.

## Interactions

Opening curtain, floating hero collage, scroll parallax, spring card tilt, animated project previews on hover/focus, scroll reveals, smooth scrolling, filter transitions, mobile navigation and service accordions. A footer control pauses motion, stores the preference locally and respects the operating system’s reduced-motion setting. Videos play only while visible.

## Contact and films

The contact form prepares an email draft in the visitor’s email app. It does not claim to send mail or use a backend. Asian Paints films link to the original Instagram reels supplied in the deck; the studio’s GIF animations are hosted locally as compressed video.

## Asset processing

The research exports and full-resolution originals are kept outside the repository at `/tmp/undo-redo-research`. The import scripts document how assets were recovered from Google Slides. Signed Google asset URLs are not embedded in the website. Optimized portfolio assets total approximately 17 MB; loading is lazy except for the first viewport.
