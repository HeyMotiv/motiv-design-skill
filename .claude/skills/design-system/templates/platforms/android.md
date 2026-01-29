# Android Platform Adaptations

## Overview

This document defines how the design system adapts to Android conventions. Following Material Design 3 guidelines ensures the app feels native and meets user expectations on Android devices.

---

## Typography

### System Fonts

| Design System | Android Equivalent |
|---------------|-------------------|
| Primary font | Roboto (or custom) |
| Monospace | Roboto Mono |

### Type Scale (Material 3)

| Design System | M3 Role | Size/Line Height |
|---------------|---------|------------------|
| display-large | Display Large | 57sp/64sp |
| display-medium | Display Medium | 45sp/52sp |
| heading-1 | Headline Large | 32sp/40sp |
| heading-2 | Headline Medium | 28sp/36sp |
| heading-3 | Headline Small | 24sp/32sp |
| body-large | Body Large | 16sp/24sp |
| body | Body Medium | 14sp/20sp |
| body-small | Body Small | 12sp/16sp |
| label | Label Large | 14sp/20sp |
| caption | Label Medium | 12sp/16sp |

### Font Weights

| Design System | Roboto Weight |
|---------------|---------------|
| regular | Regular (400) |
| medium | Medium (500) |
| semibold | Medium (500) * |
| bold | Bold (700) |

*Note: Roboto doesn't have Semibold; use Medium

---

## Colors

### Material 3 Color System

Map semantic colors to M3 color roles:

| Design System | M3 Color Role |
|---------------|---------------|
| brand.primary | Primary |
| brand.primary.light | Primary Container |
| text.primary | On Surface |
| text.secondary | On Surface Variant |
| text.inverse | On Primary |
| background.primary | Surface |
| background.secondary | Surface Variant |
| background.elevated | Surface (+ elevation) |
| border.default | Outline |
| border.subtle | Outline Variant |
| semantic.error | Error |
| semantic.success | (Custom - no M3 equivalent) |
| semantic.warning | (Custom - no M3 equivalent) |

### Dynamic Color (Material You)

On Android 12+, support user wallpaper-derived colors:
- Extract tonal palette from user wallpaper
- Apply to primary and secondary colors
- Maintain brand identity in key areas

### Dark Theme

- Use Surface tones instead of pure black
- Elevation = lighter surface color (no shadows)
- Test all screens in both themes

---

## Spacing & Layout

### Standard Spacing (8dp Grid)

| Context | Android Value |
|---------|---------------|
| Page margin | 16dp |
| Card padding | 16dp |
| List item height | 48-72dp |
| Icon touch target | 48dp |
| FAB size | 56dp (standard), 96dp (large) |

### App Bar Heights

| Type | Height |
|------|--------|
| Top app bar | 64dp |
| Top app bar (large) | 152dp (expanded) |
| Bottom nav | 80dp |
| Bottom app bar | 80dp |

### Window Insets

```kotlin
// Handle system bars
ViewCompat.setOnApplyWindowInsetsListener(view) { v, insets ->
    val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
    v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
    insets
}
```

---

## Navigation

### Top App Bar

| Property | M3 Standard |
|----------|-------------|
| Height | 64dp |
| Background | Surface (scroll) / transparent (static) |
| Title | Headline Small, start-aligned |
| Navigation icon | 24dp, leading |
| Actions | 24dp icons, trailing |

### Large Top App Bar

Collapses on scroll:
- Expanded: 152dp, Display Small title
- Collapsed: 64dp, Headline Small title

### Bottom Navigation

| Property | M3 Standard |
|----------|-------------|
| Height | 80dp |
| Items | 3-5 |
| Icon | 24dp |
| Label | Label Medium (12sp) |
| Active indicator | Pill shape behind icon |

### Navigation Drawer

| Property | M3 Standard |
|----------|-------------|
| Width | 360dp max |
| Item height | 56dp |
| Item corner radius | 28dp (full height pill) |
| Active background | Secondary Container |

---

## Components

### Buttons

| Variant | M3 Style |
|---------|----------|
| Primary | Filled button |
| Secondary | Outlined button |
| Tertiary | Text button |
| Floating | FAB |
| Extended | Extended FAB |

**Button Specifications:**

| Property | Filled | Outlined | Text |
|----------|--------|----------|------|
| Height | 40dp | 40dp | 40dp |
| Corner radius | 20dp | 20dp | 20dp |
| Horizontal padding | 24dp | 24dp | 12dp |

### Cards

| Property | M3 Standard |
|----------|-------------|
| Corner radius | 12dp |
| Elevation | 0dp (outlined), 1dp (filled), 3dp (elevated) |
| Padding | 16dp |

### Text Fields

| Variant | Description |
|---------|-------------|
| Filled | Background fill, bottom indicator |
| Outlined | Border around field |

**Specifications:**

| Property | Value |
|----------|-------|
| Height | 56dp |
| Corner radius | 4dp top (filled), 4dp all (outlined) |
| Label | Animates from placeholder to above |
| Supporting text | Below field, 12sp |

### Chips

| Variant | Use Case |
|---------|----------|
| Assist | Smart suggestions |
| Filter | Multi-select filters |
| Input | User-entered data |
| Suggestion | Dynamic suggestions |

### Dialogs

| Property | M3 Standard |
|----------|-------------|
| Corner radius | 28dp |
| Width | 280-560dp |
| Padding | 24dp |
| Actions | End-aligned, text buttons |

---

## Icons

### Material Symbols

Use Material Symbols (variable icon font):

| Design System Icon | Material Symbol |
|-------------------|-----------------|
| Home | home |
| Search | search |
| Settings | settings |
| Profile | person |
| Close | close |
| Back | arrow_back |
| Forward | arrow_forward |
| Add | add |
| Delete | delete |
| Edit | edit |
| Share | share |
| More | more_vert |

### Icon Styles

- Default: Outlined
- Active/Selected: Filled
- Weight: 400 (default), match text

---

## Motion

### Material Motion System

| Pattern | Use Case |
|---------|----------|
| Container transform | Card → detail view |
| Shared axis | Related content (tabs) |
| Fade through | Unrelated content |
| Fade | Appearing/disappearing |

### Standard Durations

| Duration | Use Case |
|----------|----------|
| 50ms | Very small changes |
| 100ms | Small changes |
| 200ms | Medium (most UI) |
| 300ms | Larger movements |
| 500ms | Complex animations |

### Standard Easing

| Easing | Use Case |
|--------|----------|
| Standard | Most animations |
| Decelerate | Entering elements |
| Accelerate | Exiting elements |
| Linear | Progress indicators |

```kotlin
// M3 Standard easing
EaseOutCubic // Decelerate
EaseInCubic  // Accelerate
FastOutSlowIn // Standard
```

### Ripple Effect

Every touchable element should have a ripple:
- Bounded: Within element bounds
- Unbounded: Expands from touch point
- Color: Primary at 12% opacity

---

## Gestures

### Standard Gestures

| Gesture | Usage |
|---------|-------|
| Tap | Selection |
| Long press | Multi-select, context |
| Swipe horizontal | Dismiss, paginate |
| Swipe vertical | Scroll, pull to refresh |
| Drag | Reorder |

### Predictive Back

Support Android 14+ predictive back:
- Show preview of previous screen during back gesture
- Animate scale/opacity during gesture
- Complete or cancel based on gesture threshold

---

## Foldable & Large Screen

### Window Size Classes

| Class | Width | Layout |
|-------|-------|--------|
| Compact | < 600dp | Single pane |
| Medium | 600-840dp | May use two panes |
| Expanded | > 840dp | Two panes, side nav |

### Layout Patterns

| Compact | Medium/Expanded |
|---------|-----------------|
| List only | List-detail |
| Bottom nav | Navigation rail |
| Full-screen modal | Side sheet |
| Single column | Multiple columns |

### Navigation Rail

| Property | Standard |
|----------|----------|
| Width | 80dp |
| Items | 3-7 |
| FAB | Top of rail (optional) |
| Labels | Below icons |

### Foldable Considerations

- Avoid content in fold/hinge area
- Support tabletop posture (bottom half input)
- Adapt layout when fold state changes

---

## Accessibility

### TalkBack

- Use contentDescription for images
- Provide speakable text for all UI
- Group related content
- Support explore by touch

### Switch Access

- Ensure all elements are focusable
- Logical focus order
- Large enough touch targets

### Font Scaling

- Support up to 200% text scaling
- Test at all system font sizes
- Use sp units for text

### High Contrast

- Support high contrast text mode
- Test with color inversion
- Ensure sufficient contrast

---

## Platform-Specific Features

### Edge-to-Edge

Enable immersive full-screen experience:
```kotlin
WindowCompat.setDecorFitsSystemWindows(window, false)
```

### Splash Screen (API 31+)

| Property | Specification |
|----------|---------------|
| Icon | App icon, centered |
| Background | Window background color |
| Exit animation | Icon shrinks, content fades in |

### Widgets

Consider home screen widget design:
- Round corners (28dp)
- Dynamic color support
- Responsive sizing

### Notification Style

Match M3 notification appearance:
- Use notification channels
- Support notification actions
- Include appropriate icons

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
