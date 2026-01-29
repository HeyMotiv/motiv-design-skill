# Navigation Components

## Overview

Navigation components help users move through the app and understand their location. This document covers the primary navigation patterns: Tab Bar, Navigation Bar (Header), and Drawer/Sidebar.

---

# Tab Bar (Bottom Navigation)

## Purpose

Primary navigation on mobile. Provides quick access to top-level destinations. Always visible, allowing one-tap access to major sections.

## Anatomy

```
┌─────┬─────┬─────┬─────┬─────┐
│ 🏠  │ 🔍  │  ➕  │ 💬  │ 👤  │
│Home │Search│ New │Chat │Profile│
└─────┴─────┴─────┴─────┴─────┘
```

1. Icon (required): Visual identifier
2. Label (required): Text description
3. Active indicator: Highlights current section
4. Badge (optional): Notification count

## Specifications

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Height | 56-64px (+ safe area) | — |
| Background | REPLACE | colors.background.elevated |
| Border Top | 1px solid REPLACE or none | colors.border.subtle |
| Shadow | REPLACE or none | shadows.elevation.low |

### Tab Item

| Property | Active | Inactive | Token Reference |
|----------|--------|----------|-----------------|
| Icon Size | 24px | 24px | — |
| Icon Color | REPLACE | REPLACE | colors.brand.primary / colors.text.secondary |
| Label Font | REPLACE | REPLACE | typography.scale.caption |
| Label Color | REPLACE | REPLACE | colors.brand.primary / colors.text.secondary |
| Gap (icon to label) | REPLACE | REPLACE | spacing.xxs |

### Active Indicator Styles

Choose one:
- **Tint**: Icon and label colored (iOS style)
- **Pill**: Background pill behind icon (Material 3)
- **Bar**: Top border on active tab

## States

| State | Visual Changes |
|-------|---------------|
| Inactive | Muted icon and label |
| Active | Highlighted icon, label, optional indicator |
| Pressed | Scale down 0.95, brief highlight |
| With Badge | Red dot or count on icon corner |

## Behavior

- **Max items**: 5 (3-5 recommended)
- **Tap feedback**: Haptic on iOS, subtle on Android
- **Transition**: Instant (no animation between tabs)
- **Badge**: Red dot for boolean, number for count (99+ max)
- **Scroll**: Tab bar hides on scroll down, shows on scroll up (optional)

---

# Navigation Bar (Header)

## Purpose

Top bar providing screen title, navigation controls, and actions. Orients the user and provides contextual actions.

## Anatomy

```
┌─────────────────────────────────┐
│ [←]    Screen Title    [•••] [+]│
└─────────────────────────────────┘

1. Leading action: Back button, menu toggle, or close
2. Title: Current screen name
3. Trailing actions: 1-3 contextual actions
```

## Variants

| Variant | Use Case |
|---------|----------|
| Standard | Most screens, solid background |
| Large Title | Top of scrollable lists (iOS style) |
| Transparent | Over hero images, maps |
| Search | Integrated search field |

## Specifications

### Standard Navigation Bar

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Height | 56px (+ status bar) | — |
| Background | REPLACE | colors.background.primary |
| Border Bottom | 1px solid REPLACE or none | colors.border.subtle |
| Shadow | REPLACE or none | shadows.elevation.low |

### Title

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Font | REPLACE | typography.scale.heading-3 |
| Color | REPLACE | colors.text.primary |
| Alignment | center (iOS) or start (Android) | — |
| Max width | Content area minus actions | — |
| Truncation | Ellipsis | — |

### Large Title (Collapsed/Expanded)

| State | Title Size | Position |
|-------|-----------|----------|
| Expanded | REPLACE (34px) | Below bar, leading aligned |
| Collapsed | REPLACE (17px) | In bar, centered |

### Action Icons

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Size | 24px | — |
| Color | REPLACE | colors.text.primary |
| Touch Target | 44x44px minimum | sizing.touchTarget |
| Gap between | REPLACE | spacing.sm |

## States

| State | Visual Changes |
|-------|---------------|
| Default | Solid background |
| Scrolled | Shadow appears, bg may become opaque |
| Collapsed (large title) | Title shrinks into bar |

## Behavior

- **Back button**: Always returns to previous screen
- **Close button**: Use for modals, dismisses to origin
- **Title truncation**: Ellipsis for long titles
- **Actions**: Max 3 visible, overflow to menu
- **Scroll behavior**: Sticky, may collapse large title

---

# Drawer / Sidebar

## Purpose

Contains navigation links, typically for larger apps with many sections. Hidden by default on mobile, visible on larger screens.

## Anatomy

```
┌────────────────────┐
│ [Logo/Header]      │
├────────────────────┤
│ > Home             │
│   Explore          │
│   Messages         │
│   Notifications    │
├────────────────────┤
│ SECTION LABEL      │
│   Settings         │
│   Help             │
└────────────────────┘
```

1. Header: Logo, user info, or app name
2. Navigation items: Icon + label
3. Section dividers: Group related items
4. Footer: Settings, logout, version

## Variants

| Variant | Behavior | Screen Size |
|---------|----------|-------------|
| Modal | Overlays content, scrim behind | Phone |
| Persistent | Always visible | Tablet, Desktop |
| Rail | Collapsed, icons only | Tablet, Desktop |

## Specifications

### Drawer (Modal)

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Width | 280-320px | — |
| Max Width | 85% of screen | — |
| Background | REPLACE | colors.background.elevated |
| Shadow | REPLACE | shadows.elevation.high |
| Scrim | REPLACE | colors.interaction.overlay |

### Drawer (Persistent/Rail)

| Property | Expanded | Collapsed (Rail) |
|----------|----------|------------------|
| Width | 280px | 72px |
| Background | REPLACE | REPLACE |
| Border Right | 1px solid REPLACE | 1px solid REPLACE |

### Navigation Item

| Property | Default | Active |
|----------|---------|--------|
| Height | 48px | 48px |
| Padding | REPLACE horizontal | REPLACE |
| Background | transparent | REPLACE |
| Icon Color | REPLACE | REPLACE |
| Label Color | REPLACE | REPLACE |
| Font | REPLACE | REPLACE (medium) |
| Corner Radius | REPLACE | REPLACE |

## States

| State | Visual Changes |
|-------|---------------|
| Default | Transparent background |
| Hover | REPLACE background |
| Active | REPLACE background, highlighted icon/text |
| Pressed | REPLACE background |
| Focused | Focus ring |

## Behavior

- **Open gesture**: Swipe from left edge (mobile)
- **Close gesture**: Swipe left, tap scrim, tap outside
- **Transition**: Slide in 250ms ease-out
- **Scrim**: Fade in with drawer
- **Rail hover**: May expand to show labels temporarily

---

# Breadcrumbs (Large Screen)

## Purpose

Shows location in hierarchy, allows quick navigation to parent levels. Used on larger screens for deep hierarchies.

## Anatomy

```
Home > Category > Subcategory > Current Page
```

## Specifications

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Font | REPLACE | typography.scale.body-small |
| Link Color | REPLACE | colors.text.link |
| Current Color | REPLACE | colors.text.primary |
| Separator | " > " or "/" or icon | — |
| Gap | REPLACE | spacing.xs |

## Behavior

- All items except current are clickable
- Truncate middle items on small screens: "Home > ... > Current"
- Current page is not a link

---

## Platform Adaptations

### iOS
- Tab bar: Tinted icons, labels always visible
- Nav bar: Centered title, SF Symbols icons
- Back: Chevron + previous title as label

### Android
- Tab bar: Material 3 pill indicator, may hide labels when inactive
- Nav bar: Leading-aligned title, hamburger for drawer
- Back: Arrow icon only

### Large Screen
- Tab bar: May move to side rail or top tabs
- Nav bar: More space for actions, breadcrumbs
- Drawer: Persistent sidebar, collapsible to rail

## Accessibility

- **Tab bar**: Use role="tablist", tabs have role="tab"
- **Navigation**: Use `<nav>` element with aria-label
- **Current page**: aria-current="page"
- **Drawer**: Focus trap when open, return focus on close

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
