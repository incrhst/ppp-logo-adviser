# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people who make flyers but would never call themselves designers — community organisers, small-business owners, church/school/event volunteers. Their situation is concrete and high-stakes-for-them: a flyer is about to be printed in quantity or posted to a feed, and there is no one around to tell them whether it works. They lack design vocabulary and do not want a lecture.

Secondary: designers and studios wanting a fast second opinion. They will judge the surface on craft, so the page must be credible to them without being written at them.

## Product Purpose

`critique-my-flyer` is an agent skill that critiques a flyer, poster, handbill, or event graphic and returns prioritised, specific, actionable fixes. It exists because flyer feedback is normally either absent or useless ("looks nice"). Success for this surface is that a visitor pastes the prompt into an agent they already have and gets a real critique in the next minute. Installing the skill is the secondary path.

## Positioning

The mechanism is a set of reading procedures performed *before* judgment, which is what stops the output from being a design-principles recital:

- **The three-second read** — write down what actually landed before analysing anything. If the what, the when, and the next action aren't in that list, that finding outranks everything else.
- **The squint test** — blur it; what still reads as a shape? No hierarchy if everything greys into an even field.
- **The distance test** — judged against where it will be seen: feed thumbnail, A5 in the hand, A4 noticeboard at 1–2 m, A3+ poster at 3–10 m in motion.
- **The missing-information check** — flyers fail more from omission than ugliness. Walks a named list: date, end time, venue *and* address, price or "free", how to book, accessibility, rain date, organiser identity.

Output is ranked by consequence, not completeness: **Fix first** (changes whether the flyer works), **Worth fixing**, **Polish**, **What's working**. Three real problems ranked beat eleven observations.

A neighbouring product cannot truthfully copy the honesty commitment: the skill is instructed not to manufacture praise, to say plainly when something is broken before someone spends money printing 500 copies, and to respect deliberate style (a punk gig flyer is not failing at cleanliness).

## Operating Context

The artefact is judged against its job, so the critique asks up to three context questions first (purpose and desired action, audience, viewing distance) and states assumptions rather than interrogating. Real usage is an image pasted into a chat agent. When only text is supplied, the skill says so and critiques message, hierarchy of information, copy length, and CTA only.

Production work (bleed, safe margins, CMYK, 300 ppi, QR sizing, standard sizes) lives in a separate reference consulted only when the flyer is actually heading to print or a named platform.

## Capabilities and Constraints

- Delivered as an agent skill (`SKILL.md` + `references/production.md`), installable via the skills.sh CLI from `incrhst/ppp-logo-adviser`.
- Scope boundary: flyers, posters, leaflets, event graphics, promotional one-pagers. Explicitly not logos, full brand identities, websites, or slide decks.
- Hands off to the sibling PPP Logo Test when the *logo* is the underlying problem — a mark that turns to mush small, dies in one colour, or needs a white box to survive a photo background will keep breaking every flyer after this one.
- Static site, no build step, deployed on Vercel. Shares one repo and deployment with the PPP site; served on its own host via a host-based rewrite.
- A pasteable prompt version does not exist yet and must be authored for this surface's primary action.

## Brand Commitments

Incrementic product, by David Bain. Sibling surface is the PPP Logo Test site (ppp.incrementic.com), which this page must be visually distinct from while staying credible as Incrementic work. Incrementic wordmark and brand guidelines at brand.incrementic.com. Voice is direct and unsoftened — the product's own instruction is that softening a fatal legibility problem into "you might consider" is not kindness.

## Evidence on Hand

- `.cursor/skills/critique-my-flyer/SKILL.md` — the real checks, output format, and feedback rules. Quotable verbatim; all claims on the page must trace to it.
- `.cursor/skills/critique-my-flyer/references/production.md` — real legibility-by-distance table, QR rules, standard sizes, common print failures.
- The community clean-up flyer example inside SKILL.md — an authored illustrative scenario, already written, not a real customer.
- **Absent, must not be fabricated:** customers, testimonials, case studies, before/after results, satisfaction or usage claims. skills.sh install counts exist but are low and are not to be presented as traction.
- Authored demonstration critiques are permitted where clearly labelled as illustrative examples.

## Product Principles

1. **Judged against its job, not a rulebook.** The same design that fails as a handbill succeeds as an Instagram post. Context before verdict, always.
2. **Ranked by consequence.** Prioritisation is the product. An unranked list of eleven observations is the failure mode being replaced.
3. **Honest before kind.** Say plainly when something is broken; never manufacture praise. This is the reason to trust the output.
4. **Specific enough to act on tomorrow morning.** "Improve the hierarchy" is not feedback; a named element, a size, and a position is.
5. **Stay in scope.** Don't critique the logo unless it is causing a problem on this flyer — then hand off rather than expand.

## Accessibility & Inclusion

The product's own subject matter includes contrast minimums (4.5:1 body, 3:1 large type) and colour-blind safety, so the surface failing those would discredit it. Legibility claims made on the page must hold on the page itself.
