# Buttons

## Overview

Buttons trigger actions. Motiv uses pill-shaped buttons with confident, inviting styling that encourages action without feeling pushy.

---

## Variants

| Variant | Use Case | Visual |
|---------|----------|--------|
| **Primary** | Main action on screen (1 per view) | Black fill, white text |
| **Secondary** | Supporting actions | Purple fill, white text |
| **Outline** | Tertiary actions, alternatives | Border only, dark text |
| **Ghost** | Minimal emphasis, in-context actions | No border, text only |
| **Destructive** | Delete, cancel, negative actions | Red fill, white text |

---

## Specifications

### Primary Button

| Property | Value | Token |
|----------|-------|-------|
| Background | #1A1A1A | `colors.brand.primary` |
| Text | #FFFFFF | `colors.text.inverse` |
| Font | 14px/500 Roboto | `typography.label` |
| Padding | 12px 24px | `spacing.sm` `spacing.xl` |
| Border Radius | 9999px (pill) | `radii.full` |
| Min Height | 48px | `sizing.touchTarget` |
| Min Width | 120px | — |

### Secondary Button

| Property | Value | Token |
|----------|-------|-------|
| Background | #7C3AED | `colors.brand.secondary` |
| Text | #FFFFFF | `colors.text.inverse` |
| Font | 14px/500 Roboto | `typography.label` |
| Padding | 12px 24px | `spacing.sm` `spacing.xl` |
| Border Radius | 9999px (pill) | `radii.full` |
| Min Height | 48px | `sizing.touchTarget` |

### Outline Button

| Property | Value | Token |
|----------|-------|-------|
| Background | transparent | — |
| Border | 1.5px solid #1A1A1A | `colors.brand.primary` |
| Text | #1A1A1A | `colors.text.primary` |
| Font | 14px/500 Roboto | `typography.label` |
| Padding | 12px 24px | `spacing.sm` `spacing.xl` |
| Border Radius | 9999px (pill) | `radii.full` |
| Min Height | 48px | `sizing.touchTarget` |

### Ghost Button

| Property | Value | Token |
|----------|-------|-------|
| Background | transparent | — |
| Text | #7C3AED | `colors.brand.secondary` |
| Font | 14px/500 Roboto | `typography.label` |
| Padding | 12px 16px | `spacing.sm` `spacing.md` |
| Min Height | 44px | — |

---

## States

### Primary Button States

| State | Changes |
|-------|---------|
| **Default** | Background: #1A1A1A |
| **Hover** | Background: #2D2D2D |
| **Pressed** | Background: #000000, scale: 0.97 |
| **Focused** | Focus ring: 2px #C4B5FD, offset 2px |
| **Disabled** | Background: #9CA3AF, cursor: not-allowed |
| **Loading** | Spinner replaces text, width maintained |

### Secondary Button States

| State | Changes |
|-------|---------|
| **Default** | Background: #7C3AED |
| **Hover** | Background: #6D28D9 |
| **Pressed** | Background: #5B21B6, scale: 0.97 |
| **Focused** | Focus ring: 2px #C4B5FD, offset 2px |
| **Disabled** | Background: #C4B5FD, cursor: not-allowed |

### Outline Button States

| State | Changes |
|-------|---------|
| **Default** | Border: #1A1A1A |
| **Hover** | Background: rgba(0,0,0,0.04) |
| **Pressed** | Background: rgba(0,0,0,0.08), scale: 0.97 |
| **Focused** | Focus ring: 2px #C4B5FD, offset 2px |
| **Disabled** | Border: #D1D5DB, text: #9CA3AF |

---

## Sizes

| Size | Height | Padding | Font | Use Case |
|------|--------|---------|------|----------|
| **Large** | 56px | 16px 32px | 16px/500 | Hero CTAs, onboarding |
| **Medium** (default) | 48px | 12px 24px | 14px/500 | Standard actions |
| **Small** | 40px | 8px 16px | 14px/500 | Compact layouts, inline |

---

## With Icons

### Icon + Text

```
[→ Get started]  (icon right)
[← Back]         (icon left)
```

| Property | Value |
|----------|-------|
| Icon Size | 20px |
| Icon-Text Gap | 8px (`spacing.xs`) |
| Icon Color | Same as text |

### Icon Only

| Property | Value |
|----------|-------|
| Size | 48x48px (medium), 40x40px (small) |
| Icon Size | 24px |
| Border Radius | 9999px (circle) |
| Accessibility | `aria-label` required |

---

## Button with Arrow

The primary CTA style often includes a right arrow:

```
[ Get started  → ]
```

| Property | Value |
|----------|-------|
| Arrow | → (Unicode) or icon |
| Gap | 8px |
| Animation | Arrow shifts right 4px on hover |

---

## Behavior

### Press Feedback
- Scale to 0.97 on press
- Duration: 150ms ease-out
- Spring back on release

### Loading State
- Replace text with spinner (centered)
- Maintain button width to prevent layout shift
- Disable interaction during loading

### Debounce
- Prevent double-tap: 300ms lockout after tap
- Critical for form submissions

### Haptics (iOS)
- Light impact feedback on press
- Success haptic on completion (if applicable)

---

## Accessibility

- Minimum touch target: 48x48px
- Focus ring visible on keyboard navigation
- Disabled buttons: `aria-disabled="true"`, keep in tab order
- Loading buttons: `aria-busy="true"`, announce state change
- Icon-only buttons: `aria-label` required

---

## Examples from Screens

| Screen | Button | Variant | Notes |
|--------|--------|---------|-------|
| Landing | "Get started →" | Primary Large | Black, with arrow |
| Landing | "Log in" | Outline | Top right, compact |
| Onboarding | "Next" | Secondary | Purple, bottom of screen |
| Profile | "Let's dive in" | Secondary | Full width |
| Challenge | "Sync now" | Ghost | Inline action |
| Stats | "Full details" | Outline | Card action |

---

## Platform Adaptations

### iOS
- Use SF Pro for text if matching system style
- Haptic feedback on press
- Respect safe areas at bottom

### Android
- Use Roboto as specified
- May add subtle ripple effect alongside scale
- Follow Material touch feedback timing

### Large Screen
- Buttons may be smaller (40px height acceptable with mouse)
- Hover states become important
- May show keyboard shortcuts

---

## Do's and Don'ts

### Do
- Use one primary button per screen
- Keep button text short (2-4 words)
- Use verbs: "Get started", "Continue", "Submit"
- Maintain consistent button placement

### Don't
- Don't use multiple primary buttons
- Don't use vague text like "Click here"
- Don't disable without explanation
- Don't change button style mid-flow

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition from Motiv screenshots |
