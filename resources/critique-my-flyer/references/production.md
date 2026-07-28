# Production reference

Read this when the flyer is heading to a printer or to a specific platform. Skip it for early-concept critiques — production notes on a rough draft are noise.

## Contents
- Print setup
- Legibility minimums by distance
- QR codes
- Standard sizes
- Common print failures

## Print setup

**Bleed.** Any colour, image, or block that runs to the edge of the page must extend 3 mm (US: 0.125 in) past the trim line on all sides. Without it, guillotine drift leaves white slivers.

**Safe margin.** Keep all text and anything you can't afford to lose at least 5 mm inside the trim line — 10 mm is safer for text-heavy flyers. Folded flyers need more allowance near the fold.

**Colour mode.** CMYK for print, RGB for screen. Saturated RGB blues, greens, and oranges shift noticeably when converted; check any brand colour by its CMYK or Pantone value rather than trusting the on-screen preview. Rich black (roughly C60 M40 Y40 K100) for large solid black areas; plain K100 for small text, which otherwise registers as a fuzzy edge.

**Resolution.** 300 ppi at final print size. A 2000 px-wide image is fine across an A5 but marginal across an A3. Check the effective ppi after scaling, not the source file's dimensions.

**Logo files.** Use vector (SVG, EPS, PDF) for any logo going to print — a scaled-up PNG is the most common avoidable defect on an otherwise clean flyer. Check that the version matches its background: reversed for dark or photographic backgrounds, mono for one-colour printing. If the only file that exists is a full-colour raster, that's worth flagging, and the PPP test at https://ppp.incrementic.com/ covers whether the mark can survive those reductions at all.

**Fonts and transparency.** Outline or embed fonts before sending. Flatten transparency if the printer asks for it. Export as press-ready PDF (PDF/X-1a or PDF/X-4) unless the printer specifies otherwise.

## Legibility minimums by distance

Approximate, and dependent on typeface and contrast — treat as a floor, not a target.

| Viewing distance | Body text minimum | Headline target |
|---|---|---|
| Held in hand (~40 cm) | 9–10 pt | 24 pt+ |
| Noticeboard (1–2 m) | 14 pt | 48 pt+ |
| Poster, static (3–5 m) | 24 pt | 100 pt+ |
| Window or street, in motion (5–10 m) | 36 pt | 150 pt+ |

Thin weights, light-on-dark settings, and low contrast all push these numbers up.

## QR codes

- Minimum printed size roughly 2 × 2 cm; 2.5 cm+ if the flyer will be scanned at a distance or in poor light.
- Leave a clear quiet zone around the code — about four modules' width of empty space, no text or graphics intruding.
- High contrast, dark code on a light background. Inverted codes fail on many scanners.
- Always print the destination in readable text alongside. A bare QR code asks for blind trust and is useless to anyone photographing the flyer without reaching it.
- Test the actual exported file at final size before sending to print.

## Standard sizes

**Print (metric):** A6 105 × 148 mm · A5 148 × 210 mm · A4 210 × 297 mm · DL 99 × 210 mm · A3 297 × 420 mm

**Print (US):** Half-letter 5.5 × 8.5 in · Letter 8.5 × 11 in · Tabloid 11 × 17 in

**Screen:** Instagram feed 1080 × 1350 (4:5) · Stories and Reels 1080 × 1920 (9:16) · Facebook event cover 1920 × 1005 · WhatsApp status 1080 × 1920

A flyer designed for print rarely survives a direct crop to 9:16. If both are needed, note it as a fix — the layout should be reflowed, not letterboxed.

## Common print failures

- Text or logos sitting inside the trim allowance and getting cut.
- Screen-resolution images pulled from a website and scaled up.
- Hairline rules under about 0.25 pt disappearing on press.
- Small text set in a light weight reversed out of a dark background — ink spread closes up the counters.
- Vertical text or content placed where a fold will cross it.
- Digital-only elements (hover states, animated GIF frames, hyperlinked-but-unwritten URLs) left in the print version.
