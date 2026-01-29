# Layout Patterns

## Overview

Layout patterns define how content is arranged on screen. Consistent layouts create predictable, learnable interfaces that users can navigate efficiently.

---

## Grid System

### Base Grid

| Property | Phone | Tablet | Desktop |
|----------|-------|--------|---------|
| Columns | 4 | 8 | 12 |
| Gutter | REPLACE | REPLACE | REPLACE |
| Margin | REPLACE | REPLACE | REPLACE |
| Max Width | 100% | 100% | 1280px |

### Grid Tokens

```json
{
  "grid": {
    "columns": {
      "phone": 4,
      "tablet": 8,
      "desktop": 12
    },
    "gutter": {
      "phone": "REPLACE",
      "tablet": "REPLACE",
      "desktop": "REPLACE"
    },
    "margin": {
      "phone": "REPLACE",
      "tablet": "REPLACE",
      "desktop": "REPLACE"
    },
    "maxWidth": "1280px"
  }
}
```

### Column Spanning

| Content Type | Phone | Tablet | Desktop |
|--------------|-------|--------|---------|
| Full width | 4 | 8 | 12 |
| Primary content | 4 | 6 | 8 |
| Sidebar | — | 2 | 4 |
| Card in grid | 4 | 4 | 3-4 |
| Form field | 4 | 4-6 | 4-6 |

---

## Page Structure

### Standard Page Layout

```
┌──────────────────────────────────┐
│         Navigation Bar           │
├──────────────────────────────────┤
│                                  │
│                                  │
│         Content Area             │
│                                  │
│                                  │
├──────────────────────────────────┤
│           Tab Bar                │
└──────────────────────────────────┘
```

### With Sidebar (Large Screen)

```
┌──────────────────────────────────┐
│         Navigation Bar           │
├────────┬─────────────────────────┤
│        │                         │
│ Side   │     Content Area        │
│ bar    │                         │
│        │                         │
└────────┴─────────────────────────┘
```

### Page Regions

| Region | Purpose | Height/Width |
|--------|---------|--------------|
| Navigation Bar | Title, navigation, actions | 56px + status bar |
| Tab Bar | Primary navigation (mobile) | 56-64px + safe area |
| Sidebar | Secondary navigation | 280px (expanded), 72px (collapsed) |
| Content Area | Main content | Fill remaining space |

---

## Content Width

### Maximum Widths

| Content Type | Max Width | Reason |
|--------------|-----------|--------|
| Reading content | 720px (65ch) | Optimal line length |
| Forms | 560px | Comfortable input width |
| Cards (single) | 400px | Focused attention |
| Page container | 1280px | Prevents over-stretching |
| Full bleed | 100% | Hero images, dividers |

### Centering Behavior

- Center content with `max-width` + `margin: auto`
- Content should never touch screen edges (use page margins)
- On large screens, content floats in center with space on sides

---

## Spacing Patterns

### Section Spacing

| Between | Spacing | Token |
|---------|---------|-------|
| Major sections | REPLACE | spacing.xxl |
| Related sections | REPLACE | spacing.xl |
| Subsections | REPLACE | spacing.lg |

### Content Spacing

| Between | Spacing | Token |
|---------|---------|-------|
| Headings and content | REPLACE | spacing.md |
| Paragraphs | REPLACE | spacing.md |
| List items | REPLACE | spacing.sm |
| Related inline elements | REPLACE | spacing.xs |

### Component Spacing

| Context | Spacing | Token |
|---------|---------|-------|
| Cards in grid | REPLACE | spacing.semantic.card.gap |
| Form fields | REPLACE | spacing.semantic.form.fieldGap |
| Buttons (inline) | REPLACE | spacing.semantic.inline.gap |
| Icon to text | REPLACE | spacing.xs |

---

## Alignment

### Horizontal Alignment

| Element Type | Default Alignment |
|--------------|-------------------|
| Body text | Start (left in LTR) |
| Headings | Start |
| Centered hero text | Center |
| Form labels | Start |
| Action buttons | End (right in LTR) |
| Navigation title | Center (iOS) / Start (Android) |

### Vertical Alignment

| Context | Alignment |
|---------|-----------|
| Icon + text | Center |
| Avatar + content | Top or center |
| List item elements | Center |
| Card actions | Bottom |

---

## Common Layouts

### List View

```
┌─────────────────────────────────┐
│ Search / Filter                  │
├─────────────────────────────────┤
│ List Item 1                      │
├─────────────────────────────────┤
│ List Item 2                      │
├─────────────────────────────────┤
│ List Item 3                      │
└─────────────────────────────────┘
```

- Full-width list items
- Dividers between items (optional)
- Sticky header/search (optional)

### Grid View

```
┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │
└─────────┘ └─────────┘
┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │
└─────────┘ └─────────┘
```

- 2 columns on phone, 3-4 on larger screens
- Equal gap horizontal and vertical
- Cards equal height per row

### Detail View

```
┌─────────────────────────────────┐
│         Hero Image              │
├─────────────────────────────────┤
│ Title                           │
│ Subtitle / Meta                 │
├─────────────────────────────────┤
│ Section 1                       │
│ Content...                      │
├─────────────────────────────────┤
│ Section 2                       │
│ Content...                      │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│     Fixed Action Button(s)      │
└─────────────────────────────────┘
```

- Scrollable content
- Fixed action area (optional)
- Distinct sections with spacing

### Form Layout

```
┌─────────────────────────────────┐
│ Form Title                      │
│ Description                     │
├─────────────────────────────────┤
│ Label                           │
│ ┌─────────────────────────────┐ │
│ │ Input                       │ │
│ └─────────────────────────────┘ │
│ Helper text                     │
│                                 │
│ Label                           │
│ ┌─────────────────────────────┐ │
│ │ Input                       │ │
│ └─────────────────────────────┘ │
├─────────────────────────────────┤
│            [Cancel] [Submit]    │
└─────────────────────────────────┘
```

- Single column on mobile
- May use multi-column on large screens for related fields
- Actions at bottom, right-aligned

### Split View (Tablet/Desktop)

```
┌─────────────┬───────────────────┐
│             │                   │
│   List      │      Detail       │
│             │                   │
│             │                   │
└─────────────┴───────────────────┘
```

- Master-detail pattern
- List width: 320-400px
- Detail fills remaining space
- Selection state in list

---

## Scroll Behavior

### Content Scrolling

- Vertical scroll is default
- Horizontal scroll for carousels only
- Momentum scrolling (iOS: `-webkit-overflow-scrolling: touch`)
- Pull-to-refresh at list tops

### Sticky Elements

| Element | Behavior |
|---------|----------|
| Navigation bar | Always sticky at top |
| Tab bar | Always sticky at bottom |
| Section headers | Sticky within scroll container |
| Action buttons | Fixed at bottom (when important) |

### Scroll Indicators

- Show scrollbar on scroll (hide when idle)
- Fade edges to indicate more content
- Pull indicators for refresh

---

## Safe Areas

### iOS Safe Areas

```
┌──────────────────────────────────┐
│ ▓▓▓▓▓▓ Status Bar ▓▓▓▓▓▓        │ ← safe-area-inset-top
├──────────────────────────────────┤
│                                  │
│         Content                  │
│                                  │
├──────────────────────────────────┤
│ ▓▓▓▓▓▓▓ Home Indicator ▓▓▓▓▓▓▓  │ ← safe-area-inset-bottom
└──────────────────────────────────┘
```

- Use `env(safe-area-inset-*)` for padding
- Tab bar should sit above home indicator
- Content should not be obscured by notch

### Android Safe Areas

- Status bar: ~24dp, may be transparent
- Navigation bar: ~48dp, may be gesture area
- Use system insets API

---

## Z-Index Layering

| Layer | Z-Index | Elements |
|-------|---------|----------|
| Base content | 0 | Page content |
| Sticky headers | 100 | Section headers |
| Navigation | 1000 | Tab bar, nav bar |
| Dropdowns | 1100 | Menus, popovers |
| Drawers | 1200 | Side drawers |
| Modals | 1300 | Dialogs, sheets |
| Toasts | 1400 | Notifications |
| Tooltips | 1500 | Tooltips |

---

## Responsive Behavior

### Content Reflow

| Phone | Tablet | Desktop |
|-------|--------|---------|
| Stack | 2-col | 3-col+ |
| Full-width | Constrained | Constrained |
| Bottom nav | Side nav | Side nav |
| Modals full screen | Modals centered | Modals centered |

### Breakpoint-Specific Layouts

See `responsive.md` for detailed breakpoint behavior.

---

## Anti-Patterns

### Avoid

- Content touching screen edges (always use margins)
- Inconsistent spacing within sections
- Mixing alignment (centered and left-aligned together)
- Scroll in multiple directions on same screen
- Fixed heights that clip content
- Z-index conflicts between components

### Prefer

- Consistent use of spacing scale
- Clear visual hierarchy through spacing
- Single scroll direction per screen
- Flexible heights that accommodate content
- Predictable layering behavior

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
