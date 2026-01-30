# Motiv Design System

**Version:** 1.0
**Last Updated:** January 2025
**Platform:** iOS first, Android adaptation

---

## Brand Overview

Motiv is a fitness challenge app for **busy moms who want to get in shape**. The design is:

- **Light and inviting** — Not intimidating or aggressive
- **Hopeful and optimistic** — You can do this
- **Energetic but calm** — Motivating without being pushy
- **Warm and supportive** — Like a friend cheering you on

---

## Quick Reference

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#1A1A1A` | Main CTAs, headings |
| Secondary | `#7C3AED` | Secondary actions, accents, links |
| Text | `#1A1A1A` | Body text |
| Text Secondary | `#6B7280` | Captions, metadata |
| Background | `#FFFFFF` | Screen backgrounds |
| Success | `#22C55E` | Completed, valid |
| Error | `#EF4444` | Errors, invalid |

### Typography

| Style | Font | Size/Weight |
|-------|------|-------------|
| Logo | Nunito | 48px/800 |
| Heading 1 | Roboto | 24px/700 |
| Heading 2 | Roboto | 20px/700 |
| Body | Roboto | 16px/400 |
| Label | Roboto | 14px/500 |
| Caption | Roboto | 12px/400 |

### Spacing

| Token | Value |
|-------|-------|
| xs | 8px |
| sm | 12px |
| md | 16px |
| lg | 20px |
| xl | 24px |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 8px | Small elements |
| md | 12px | Cards, inputs |
| lg | 16px | Large cards |
| full | 9999px | Buttons, pills |

---

## Key Components

### Buttons

All buttons are **pill-shaped** (fully rounded).

| Variant | Background | Text |
|---------|------------|------|
| Primary | Black | White |
| Secondary | Purple | White |
| Outline | Transparent + border | Black |
| Ghost | Transparent | Purple |

### Cards

- White background
- 16px border radius
- 16px padding
- Subtle shadow or 1px border

### Progress Indicators

- **Dots:** For day counts
- **Bars:** For numeric progress
- Fill color: Purple (#7C3AED)

---

## Two Design Contexts

### 1. App-Level (This System)

The core Motiv experience:
- White backgrounds
- Animated gradient blobs for onboarding
- Black primary, purple secondary
- Consistent components throughout

### 2. Challenge Theming

Creator-customized per challenge:
- Custom primary color (from palette)
- Custom header image
- Custom accent font (title only)

See: `theming/challenge-theming.md`

---

## Gradient Backgrounds

Onboarding uses animated gradient blobs:

| Gradient | Colors | Mood |
|----------|--------|------|
| Pink | #FDF2F8 → #FBCFE8 | Warm, welcoming |
| Mint | #ECFDF5 → #A7F3D0 | Fresh, healthy |
| Lavender | #F5F3FF → #DDD6FE | Calm, encouraging |
| Sunshine | #FEF9C3 → #FDE047 | Optimistic, joyful |

**Animation:** Blobs move slowly (20s cycle), scaling 0.8-1.2x, drifting 15% from origin.

---

## Motion Principles

1. **Smooth & fluid** — 200-350ms transitions
2. **Purposeful** — Every animation has a reason
3. **Inviting** — Never jarring or aggressive

Key easing: `cubic-bezier(0.4, 0.0, 0.2, 1)`

---

## Special Moments

**Celebration screens** (win/loss) use dark backgrounds:
- Background: `#1E1B4B` (dark purple)
- Reserved for challenge results only
- Not a full dark mode

---

## File Structure

```
motiv-design-system/
├── tokens/
│   ├── colors.json       ← Color definitions
│   ├── typography.json   ← Font styles
│   ├── spacing.json      ← Spacing scale
│   └── motion.json       ← Animation specs
├── components/
│   ├── buttons.md        ← Button specs
│   └── cards.md          ← Card specs
├── patterns/
│   └── [...]             ← Layout, states, etc.
├── platforms/
│   ├── ios.md            ← iOS-specific
│   └── android.md        ← Android adaptation
├── theming/
│   └── challenge-theming.md  ← Creator theming
└── DESIGN-SYSTEM.md      ← This file
```

---

## For AI Assistants

When generating UI for Motiv:

1. **Use the token values** — Don't approximate colors or spacing
2. **Maintain the tone** — Light, hopeful, inviting
3. **Buttons are pills** — Always fully rounded
4. **Check context** — Is this app-level or challenge-themed?
5. **Respect motion** — Smooth, not snappy
6. **Consider the user** — Busy mom, wants encouragement not pressure

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2025 | Initial design system extracted from hero screens |
