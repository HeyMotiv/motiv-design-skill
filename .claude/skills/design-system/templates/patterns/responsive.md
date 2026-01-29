# Responsive Design

## Overview

Responsive design ensures the app works beautifully across all screen sizes—from small phones to large desktop monitors. This document defines breakpoints, adaptation strategies, and component behavior across sizes.

---

## Breakpoints

### Breakpoint Scale

| Name | Min Width | Target Devices |
|------|-----------|----------------|
| `xs` | 0px | Small phones |
| `sm` | 360px | Standard phones |
| `md` | 600px | Large phones, small tablets |
| `lg` | 900px | Tablets |
| `xl` | 1200px | Laptops, desktops |
| `xxl` | 1536px | Large monitors |

### Breakpoint Tokens

```json
{
  "breakpoints": {
    "xs": "0px",
    "sm": "360px",
    "md": "600px",
    "lg": "900px",
    "xl": "1200px",
    "xxl": "1536px"
  }
}
```

### Common Groupings

| Group | Breakpoints | Use |
|-------|-------------|-----|
| Mobile | xs, sm | Phone layouts |
| Tablet | md, lg | Tablet layouts |
| Desktop | xl, xxl | Desktop layouts |

---

## Layout Adaptations

### Grid Changes

| Breakpoint | Columns | Gutter | Margin |
|------------|---------|--------|--------|
| xs-sm | 4 | 16px | 16px |
| md | 8 | 24px | 24px |
| lg | 12 | 24px | 32px |
| xl+ | 12 | 32px | 48px |

### Content Width

| Breakpoint | Behavior |
|------------|----------|
| xs-md | Full width with margins |
| lg | Max 960px, centered |
| xl | Max 1200px, centered |
| xxl | Max 1400px, centered |

### Navigation Pattern

| Breakpoint | Navigation Style |
|------------|------------------|
| xs-sm | Bottom tab bar |
| md | Bottom tab bar or side rail |
| lg+ | Persistent sidebar or top nav |

---

## Component Adaptations

### Buttons

| Breakpoint | Behavior |
|------------|----------|
| xs-sm | Full width in forms, min-height 48px |
| md+ | Auto width, may reduce height to 40px |

### Cards

| Breakpoint | Columns | Behavior |
|------------|---------|----------|
| xs-sm | 1 | Full width stack |
| md | 2 | 2-column grid |
| lg | 3 | 3-column grid |
| xl+ | 4 | 4-column grid |

### Modals/Dialogs

| Breakpoint | Behavior |
|------------|----------|
| xs-sm | Full screen (bottom sheet) |
| md | Centered, 80% width max 560px |
| lg+ | Centered, max 640px |

### Forms

| Breakpoint | Layout |
|------------|--------|
| xs-sm | Single column, full width inputs |
| md+ | May use multi-column for related fields |
| lg+ | Side-by-side labels possible |

### Tables

| Breakpoint | Behavior |
|------------|----------|
| xs-sm | Card view or horizontal scroll |
| md | Compact table, hide non-essential columns |
| lg+ | Full table with all columns |

### Images

| Breakpoint | Behavior |
|------------|----------|
| xs-sm | Full width, aspect ratio maintained |
| md+ | May constrain max width |
| All | Responsive (`max-width: 100%`) |

---

## Typography Scaling

### Scale by Breakpoint

| Style | xs-sm | md-lg | xl+ |
|-------|-------|-------|-----|
| display-large | 36px | 48px | 60px |
| display-medium | 28px | 36px | 44px |
| heading-1 | 24px | 28px | 32px |
| heading-2 | 20px | 22px | 24px |
| heading-3 | 18px | 18px | 20px |
| body | 16px | 16px | 16px |
| caption | 12px | 12px | 12px |

### Fluid Typography (Optional)

Use CSS clamp for smooth scaling:

```css
/* Example: heading-1 */
font-size: clamp(24px, 4vw, 32px);
```

---

## Spacing Scaling

### Scale Factor by Breakpoint

| Breakpoint | Scale Factor |
|------------|--------------|
| xs-sm | 1x |
| md-lg | 1x |
| xl+ | 1.25x (optional) |

### When to Scale

- **Do scale**: Page margins, section gaps, large containers
- **Don't scale**: Component internal spacing, icon sizes, touch targets

---

## Touch vs Pointer

### Touch Targets (Mobile)

- Minimum: 44x44px (iOS) / 48x48px (Android)
- Recommended: 48x48px universal
- Spacing between targets: 8px minimum

### Pointer Targets (Desktop)

- Minimum: 24x24px
- May reduce button heights
- Hover states become important

### Input Adaptation

| Device | Behavior |
|--------|----------|
| Touch | Larger targets, touch keyboards, gestures |
| Pointer | Smaller targets OK, keyboard shortcuts, hover |

---

## Orientation

### Portrait vs Landscape (Mobile)

| Orientation | Behavior |
|-------------|----------|
| Portrait | Default layout |
| Landscape | May show split view, adjust navigation |

### Handling Orientation Change

- Content should reflow, not require refresh
- Modal positions should update
- Video players may go full screen

---

## Responsive Patterns

### Stack to Inline

```
Mobile (Stack):
┌─────────────┐
│   Item 1    │
├─────────────┤
│   Item 2    │
├─────────────┤
│   Item 3    │
└─────────────┘

Desktop (Inline):
┌─────────┬─────────┬─────────┐
│ Item 1  │ Item 2  │ Item 3  │
└─────────┴─────────┴─────────┘
```

### Reveal on Expand

- Mobile: Collapsed by default, expand to see more
- Desktop: All content visible

### Show/Hide

- Mobile: Hide secondary content, show in menu
- Desktop: Show all content

### Transform

- Mobile: Bottom sheet modal
- Desktop: Dropdown menu

### Reposition

- Mobile: Tab bar at bottom
- Desktop: Navigation in sidebar or top

---

## Media Queries

### CSS Approach

```css
/* Mobile first */
.component { /* xs-sm styles */ }

@media (min-width: 600px) { /* md+ */ }
@media (min-width: 900px) { /* lg+ */ }
@media (min-width: 1200px) { /* xl+ */ }
```

### Feature Queries

```css
/* Touch devices */
@media (hover: none) and (pointer: coarse) { }

/* Pointer devices */
@media (hover: hover) and (pointer: fine) { }

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) { }

/* Dark mode preference */
@media (prefers-color-scheme: dark) { }
```

---

## Platform-Specific

### iOS Considerations

- Safe area insets (notch, home indicator)
- Dynamic Type scaling
- Large Content Viewer
- Split View on iPad

### Android Considerations

- Different status/nav bar heights
- Gesture navigation insets
- Foldable device states
- Chrome Custom Tabs

### Web Considerations

- Browser chrome height
- Scrollbar width (Windows)
- Print styles
- Reader mode compatibility

---

## Testing Checklist

### Breakpoint Testing

- [ ] xs (320px) - Small phone
- [ ] sm (375px) - Standard phone
- [ ] md (768px) - Tablet portrait
- [ ] lg (1024px) - Tablet landscape / small laptop
- [ ] xl (1440px) - Desktop
- [ ] xxl (1920px) - Large desktop

### Orientation Testing

- [ ] Portrait phone
- [ ] Landscape phone
- [ ] Portrait tablet
- [ ] Landscape tablet

### Device Testing

- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Desktop Firefox

### Accessibility Testing

- [ ] Zoom to 200%
- [ ] Text-only zoom
- [ ] High contrast mode
- [ ] Reduced motion

---

## Anti-Patterns

### Avoid

- Hiding essential content on mobile
- Different functionality per breakpoint
- Fixed widths that don't adapt
- Hover-only interactions on touch devices
- Assuming screen size = device type

### Prefer

- Mobile-first progressive enhancement
- Same features, adapted presentation
- Fluid layouts with constraints
- Touch-friendly defaults with hover enhancement
- Feature detection over size detection

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
