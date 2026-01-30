# Cards

## Overview

Cards group related content and actions. Motiv uses cards extensively for challenges, stats, recommendations, and community content.

---

## Variants

| Variant | Use Case | Visual |
|---------|----------|--------|
| **Standard** | General content grouping | White bg, subtle shadow/border |
| **Expandable** | Collapsible sections | Chevron indicator, animates open |
| **Stat** | Metrics and numbers | Centered content, icon optional |
| **Product** | Recommendations | Image + text + category badge |
| **Profile** | User info | Avatar + name + meta |
| **Progress** | Challenge/goal tracking | Progress bar included |

---

## Standard Card

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #FFFFFF | `colors.background.primary` |
| Border | 1px solid #E5E7EB | `colors.border.default` |
| Border Radius | 16px | `radii.lg` |
| Padding | 16px | `spacing.md` |
| Shadow | 0 1px 3px rgba(0,0,0,0.1) | `shadows.sm` |

### Anatomy

```
┌─────────────────────────────────┐
│  [Icon/Image]                   │
│                                 │
│  Title                          │
│  Description text that may      │
│  wrap to multiple lines         │
│                                 │
│  [Action Button]                │
└─────────────────────────────────┘
```

---

## Expandable Card

Used for "Your progress", "Community stats", etc.

### Collapsed State

| Property | Value |
|----------|-------|
| Height | Auto (content) |
| Chevron | Down arrow, right aligned |
| Content | Title + summary only |

### Expanded State

| Property | Value |
|----------|-------|
| Height | Auto (full content) |
| Chevron | Rotated 180° (up) |
| Content | Full details visible |
| Animation | 300ms ease-in-out |

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #FFFFFF | `colors.background.primary` |
| Border Radius | 16px | `radii.lg` |
| Padding | 16px | `spacing.md` |
| Header Height | 48px minimum | — |
| Chevron Size | 24px | — |
| Chevron Color | #6B7280 | `colors.text.secondary` |

---

## Stat Card

Used for displaying metrics: total output, challenge winners, etc.

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #F9FAFB | `colors.background.secondary` |
| Border Radius | 12px | `radii.md` |
| Padding | 16px | `spacing.md` |
| Min Width | 80px | — |
| Alignment | Center | — |

### Anatomy

```
┌─────────────┐
│     📊      │  ← Icon (optional)
│   15,533    │  ← Stat value (stat-medium)
│ TOTAL (KJ)  │  ← Label (overline)
└─────────────┘
```

### Typography

| Element | Style | Token |
|---------|-------|-------|
| Value | 28px/700 | `typography.stat-medium` |
| Label | 10px/600 uppercase | `typography.overline` |
| Icon | 24px | — |

---

## Product Recommendation Card

Used in "What keeps me on track" section.

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #FFFFFF | `colors.background.primary` |
| Border Radius | 12px | `radii.md` |
| Padding | 12px | `spacing.sm` |
| Image Size | 64x64px | — |
| Image Radius | 8px | `radii.sm` |

### Anatomy

```
┌─────────────────────────────────────────┐
│ ┌──────┐  Category Badge               │
│ │ IMG  │  Product Title                │
│ │      │  Description text...    [▼]  │
│ └──────┘                               │
└─────────────────────────────────────────┘
```

### Category Badge

| Property | Value |
|----------|-------|
| Padding | 4px 8px |
| Border Radius | 9999px (pill) |
| Font | 10px/600 uppercase |
| Colors | Per category (see colors.json) |

---

## Profile Card

Used in onboarding profile setup.

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #FFFFFF | `colors.background.primary` |
| Border | 1px solid #E5E7EB | `colors.border.default` |
| Border Radius | 16px | `radii.lg` |
| Padding | 24px | `spacing.xl` |
| Alignment | Center | — |

### Anatomy

```
┌─────────────────────────────────┐
│           ┌─────┐               │
│           │     │  ← Avatar     │
│           │ 👤  │    (with      │
│           └──✓──┘    badge)     │
│                                 │
│        Ellie Snackson           │
│        @doodle_cycles           │
│                                 │
│      [ 345,000 Followers ]      │
└─────────────────────────────────┘
```

### Avatar with Badge

| Property | Value |
|----------|-------|
| Avatar Size | 80px |
| Avatar Radius | 9999px (circle) |
| Badge | Checkmark, bottom-right |
| Badge Size | 24px |
| Badge Color | #7C3AED (purple) |

---

## Progress Card

Used for challenge progress display.

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #FFFFFF | `colors.background.primary` |
| Border Radius | 16px | `radii.lg` |
| Padding | 16px | `spacing.md` |

### Anatomy

```
┌─────────────────────────────────────────┐
│  This week: Jan 18-24                   │
│                                         │
│  ┌─────────────────┐ ┌─────────────────┐│
│  │    3/6 days     │ │   1,100/2,100   ││
│  │   ●●●○○○        │ │   ████████░░░   ││
│  │   3 days to go  │ │   1000 kJ left  ││
│  └─────────────────┘ └─────────────────┘│
└─────────────────────────────────────────┘
```

### Progress Indicators

**Dot Progress (days)**
| Property | Value |
|----------|-------|
| Dot Size | 8px |
| Dot Gap | 4px |
| Active Color | #7C3AED |
| Inactive Color | #E5E7EB |

**Bar Progress (values)**
| Property | Value |
|----------|-------|
| Height | 8px |
| Border Radius | 4px |
| Fill Color | #7C3AED |
| Track Color | #E5E7EB |
| Animation | 500ms ease-out |

---

## Selection Card (Checkbox Style)

Used in onboarding quiz ("What motivates you?").

### Specifications

| Property | Value | Token |
|----------|-------|-------|
| Background | #FFFFFF | `colors.background.primary` |
| Border | 1.5px solid #E5E7EB | `colors.border.default` |
| Border Radius | 12px | `radii.md` |
| Padding | 16px | `spacing.md` |
| Height | 56px | — |

### States

| State | Changes |
|-------|---------|
| Default | Gray border |
| Hover | Light purple bg (#F5F3FF) |
| Selected | Purple border, checkmark visible, light purple bg |
| Focused | Focus ring |

### Checkbox Indicator

| Property | Unchecked | Checked |
|----------|-----------|---------|
| Size | 24px | 24px |
| Border | 2px #D1D5DB | None |
| Background | Transparent | #7C3AED |
| Icon | None | White checkmark |

---

## Card States

### Hover (Desktop)

| Property | Value |
|----------|-------|
| Transform | translateY(-2px) |
| Shadow | Increase to medium |
| Duration | 200ms ease-out |

### Pressed

| Property | Value |
|----------|-------|
| Transform | scale(0.98) |
| Background | Slight overlay |
| Duration | 100ms |

### Loading

| Property | Value |
|----------|-------|
| Content | Skeleton placeholders |
| Animation | Shimmer pulse |

---

## Accessibility

- Cards with actions: Make entire card tappable or clearly indicate tap target
- Expandable cards: `aria-expanded`, announce state change
- Selection cards: Use `role="checkbox"` with `aria-checked`
- Progress: Announce progress to screen readers

---

## Platform Adaptations

### iOS
- Use system shadow styles
- Respect safe areas in scrollable lists

### Android
- May use Material elevation
- Ripple effect on tap

### Large Screen
- Cards may appear in multi-column grid
- Hover states visible
- Consider max-width for readability

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition from Motiv screenshots |
