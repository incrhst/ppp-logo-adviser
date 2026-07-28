# Design

Two surfaces share this repo and this deployment, on two hosts. They are deliberately
**not** one system — each commits to its own world.

| Host | Page | World |
|---|---|---|
| `ppp.incrementic.com` | `ppp.html` + `styles.css` | White editorial, hairline rules, Incrementic red |
| `critique-flyer.incrementic.com` | `flyer.html` + `flyer.css` | The community noticeboard |

Routing is a host-based rewrite in `vercel.json` on `/`. Neither page is `index.html`,
because Vercel resolves the filesystem *before* rewrites, so a root `index.html` would
win and the host rule would never fire.

---

## critique-my-flyer — the noticeboard

### Thesis

A flyer is judged in three seconds on a wall of competing paper, so the page is that
wall. It refuses the centred hero-and-feature-cards arrangement the category ships.

### Colour

Committed strategy: the board green owns the page, and canary carries the surfaces that
matter. Dark was chosen from the use scene — a felt or cork board in a hall, a shop
window, a corridor — not from category habit.

```
--board        #223b31   municipal felt green, the ground
--board-deep   #16281f   alternating section ground
--board-rail   #101d17   top and bottom rails
--newsprint    #ece6d6   the default paper stock
--white-stock  #fbfaf7   brighter paper, used for the critique
--canary       #ffe24a   the subject flyer, the primary CTA card
--green-stock  #c3ef52   the PPP handoff notice
--pink         #ff3d7f   pin heads and the loud button fill only
--pink-deep    #c0134f   pink used as *text* — clears 4.5:1 on every stock above
--ink          #14171a   print on paper
--on-board     #ece6d6   text on the board
--on-board-soft #a3b9ab  secondary text on board, tinted from the board hue, never grey
```

`--pink` (#ff3d7f) is a fill, never body text: it fails 4.5:1 on canary and newsprint.
Any pink text uses `--pink-deep`.

### Type

Three faces, each doing a job the world actually assigns it.

- **Anton** — poster display. Headlines, section titles, distance figures, buttons, and
  the critique's own headings. Uppercase. This is the event-poster voice.
- **Libre Franklin** — notice body copy. The newsprint workhorse.
- **Courier Prime** — typed material: the critique output, labels, nav, captions, install
  command. Monospace here is the world's correction/typewriter voice, not tech costume.

Body measure caps at 60–68ch. Display caps around 5.4rem.

### Material and component language

Everything on the board is a piece of paper: a background, ink colour, a rotation between
-2.8° and +2.4°, and a shadow with real offset and blur (`--lift`, `--lift-sm`). Fixings
are literal — a domed pin (`.pin`) or staples (`.staple`). Nothing has a border radius.
Nothing is centred on the grid.

- `.note` — a competing notice. Decorative, `aria-hidden`, real text so the board reads as
  a board and not a texture.
- `.subject` — the flyer under review; canary, pinned, carries the H1.
- `.sheet` — a large stapled foolscap sheet for long-form procedure.
- `.critique` — white stock, Courier, pink correction accents.
- `.tab` — a tear-off tab. The primary CTA.

### The one authored motion

**The squint.** The board loads sharp, then after 700ms everything except the subject
flyer falls to `blur(3.5px) saturate(.22) brightness(.58)` over 900ms on an exponential
ease-out. It performs the product's own squint test on the visitor. Content is visible by
default and never hidden by it. Under `prefers-reduced-motion` the blur is dropped and only
the desaturation applies, instantly.

There is no second animation. Hover and focus states are ordinary and fast.

### The signature interaction

Tear-off tabs. Six tabs along the bottom edge of the subject flyer; clicking one copies
the pasteable prompt and the tab detaches and drops away, leaving a gap in the strip like
a real notice. Torn tabs are `disabled` so they leave the tab order. When all six are gone
the instruction line rewrites itself to point at the button lower down the page.

### Non-negotiables

- **The page must survive its own advice.** It publishes contrast minimums and legibility
  numbers, so failing them would discredit the product. Body ≥4.5:1, large ≥3:1, verified
  by measurement rather than by eye.
- **The worked example must be true to the artefact rendered beside it.** The critique
  names a 42-word paragraph because the flyer shown contains 42 words. If the example
  flyer changes, the critique copy changes with it.
- **Illustrative material is labelled.** No invented customers, testimonials, or numbers.
- **Claims trace to `SKILL.md`.** The four reads, the omission list, and the distance
  table are quoted from the shipped skill, not paraphrased into something stronger.
- **Competition must be visible wherever the caption claims it.** Two `.note`s stay on at
  mobile for exactly this reason.

### Known advisory

The design detector reports em-dash saturation. The remaining em-dashes are concentrated
in `.critique`, where `**problem** — what's wrong → what to do` is the skill's own
documented output format. Rewriting them would make the demonstration untrue to the real
output, so they stay.
