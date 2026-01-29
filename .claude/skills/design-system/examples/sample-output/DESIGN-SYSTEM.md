# Sample App Design System

> **Generated from**: 12 hero screens
> **Platform**: Android-first
> **Last updated**: [Date]

---

## Overview

This design system was extracted from the Sample App hero screens. It defines the visual language, components, and patterns that ensure consistency across all app screens.

### Design Principles

1. **Clean & Minimal**: Focus on content with ample whitespace
2. **Friendly & Approachable**: Rounded corners, warm accents
3. **Accessible**: High contrast, clear hierarchy

---

## Quick Reference

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand.primary` | #2563EB | Primary actions, active states |
| `brand.secondary` | #7C3AED | Accents, secondary actions |
| `text.primary` | #1A1A1A | Headings, body text |
| `text.secondary` | #6B7280 | Captions, metadata |
| `background.primary` | #FFFFFF | Screen background |
| `background.secondary` | #F9FAFB | Section backgrounds |
| `semantic.error` | #EF4444 | Errors, destructive |
| `semantic.success` | #22C55E | Success states |

### Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Heading 1 | 28px | Bold | Screen titles |
| Heading 2 | 22px | Semibold | Section headers |
| Heading 3 | 18px | Semibold | Card titles |
| Body | 16px | Regular | Paragraphs |
| Body Small | 14px | Regular | Secondary text |
| Caption | 12px | Regular | Timestamps, hints |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Icon gaps |
| `sm` | 8px | Tight spacing |
| `md` | 16px | Standard gaps |
| `lg` | 24px | Section gaps |
| `xl` | 32px | Major sections |

---

## File Structure

```
tokens/
├── colors.json      → Color palette and semantics
├── typography.json  → Type scale and styles
├── spacing.json     → Spacing scale
├── radii.json       → Border radius tokens
├── shadows.json     → Elevation levels
└── motion.json      → Animation timing

components/
├── buttons.md       → Button variants and states
├── inputs.md        → Form inputs
├── cards.md         → Card patterns
└── navigation.md    → Nav components

patterns/
├── layout.md        → Grid and layout rules
├── states.md        → UI state definitions
├── responsive.md    → Breakpoints and adaptation
└── accessibility.md → A11y requirements

platforms/
├── android.md       → Android specifics
├── ios.md          → iOS adaptations
└── large-screen.md → Tablet/desktop

decisions.md         → Design rationale
```

---

## Key Decisions

### Color Strategy

- **Primary blue (#2563EB)** extracted from CTA buttons
- Standardized 4 similar grays to single `text.primary` (#1A1A1A)
- Added semantic colors not visible in screenshots (success, warning)

### Spacing Strategy

- Normalized to **8px base** scale
- Removed inconsistent 10px, 20px values
- Page margins: 16px (phone), 24px (tablet), 32px (desktop)

### Typography Strategy

- Font: **Inter** (designer-specified)
- 5-step type scale based on extracted sizes
- Line height: 1.5x for body, 1.25x for headings

### Component Patterns

- **Buttons**: 3 variants (primary, secondary, tertiary)
- **Cards**: Elevated style with 12px radius
- **Inputs**: Outlined style, 8px radius

---

## How to Use This System

### For AI Assistants

When generating new screens:

1. Reference `tokens/*.json` for all values
2. Follow component specs in `components/*.md`
3. Apply layout patterns from `patterns/layout.md`
4. Check platform-specific guidance in `platforms/`
5. Validate against `patterns/accessibility.md`

### For Designers

1. Use token values exactly (don't approximate)
2. Check `decisions.md` for rationale before changing
3. Add new screens by following existing patterns
4. Flag inconsistencies for discussion

### For Developers

1. Implement tokens as CSS variables or theme object
2. Component specs include all visual details needed
3. Motion specs provide exact timing and easing
4. Platform docs explain native adaptations

---

## Changelog

| Date | Change |
|------|--------|
| [Date] | Initial extraction from 12 screens |
