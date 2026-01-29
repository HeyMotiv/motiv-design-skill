# iOS Platform Adaptations

## Overview

This document defines how the design system adapts to iOS conventions. Following Apple Human Interface Guidelines ensures the app feels native and meets user expectations.

---

## Typography

### System Fonts

| Design System | iOS Equivalent |
|---------------|----------------|
| Primary font | SF Pro (Text/Display) |
| Monospace | SF Mono |

### Dynamic Type Scale

Support Dynamic Type to respect user font size preferences:

| Text Style | Default | iOS Text Style |
|------------|---------|----------------|
| display-large | 34pt | .largeTitle |
| display-medium | 28pt | .title1 |
| heading-1 | 22pt | .title2 |
| heading-2 | 20pt | .title3 |
| heading-3 | 17pt | .headline |
| body | 17pt | .body |
| body-small | 15pt | .subheadline |
| caption | 12pt | .caption1 |
| overline | 11pt | .caption2 |

### Font Weights

| Design System | SF Pro Weight |
|---------------|---------------|
| regular | .regular (400) |
| medium | .medium (500) |
| semibold | .semibold (600) |
| bold | .bold (700) |

---

## Colors

### System Colors

Map semantic colors to iOS system colors when appropriate:

| Design System | iOS System Color |
|---------------|------------------|
| brand.primary | tintColor (custom) |
| text.primary | .label |
| text.secondary | .secondaryLabel |
| text.tertiary | .tertiaryLabel |
| background.primary | .systemBackground |
| background.secondary | .secondarySystemBackground |
| background.tertiary | .tertiarySystemBackground |
| border.default | .separator |
| border.subtle | .opaqueSeparator |
| semantic.error | .systemRed |
| semantic.success | .systemGreen |
| semantic.warning | .systemOrange |
| semantic.info | .systemBlue |

### Dark Mode

- Use semantic colors that adapt automatically
- Test all screens in both light and dark mode
- Avoid hardcoded colors

---

## Spacing & Layout

### Standard Spacing

| Context | iOS Value |
|---------|-----------|
| Page margin | 16pt (standard), 20pt (larger screens) |
| Section spacing | 35pt (grouped table style) |
| List item padding | 16pt horizontal |
| Navigation bar height | 44pt (+ status bar) |
| Tab bar height | 49pt (+ safe area) |

### Safe Areas

```swift
// Always respect safe areas
.safeAreaInset(edge: .top)
.safeAreaInset(edge: .bottom)

// CSS equivalent
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

### Device-Specific

| Device | Status Bar | Home Indicator |
|--------|------------|----------------|
| iPhone (notch) | 47-59pt | 34pt |
| iPhone (no notch) | 20pt | 0pt |
| iPad | 24pt | 0-21pt |

---

## Navigation

### Navigation Bar

| Property | iOS Standard |
|----------|--------------|
| Height | 44pt |
| Background | System or custom with blur |
| Title | Centered, SF Pro Semibold 17pt |
| Back button | Chevron + previous screen title |
| Large title | 34pt, leading aligned, collapses on scroll |

### Tab Bar

| Property | iOS Standard |
|----------|--------------|
| Height | 49pt (+ safe area) |
| Items | 2-5 max |
| Icon size | 25x25pt (SF Symbols) |
| Label | SF Pro 10pt |
| Selection | Tinted icon and label |

### Gestures

| Gesture | Action |
|---------|--------|
| Swipe from left edge | Back navigation |
| Swipe down on modal | Dismiss (if enabled) |
| Long press | Context menu |
| 3D Touch / Haptic Touch | Quick actions (if supported) |

---

## Components

### Buttons

| Variant | iOS Style |
|---------|-----------|
| Primary | Filled, rounded rect or capsule |
| Secondary | Tinted (filled with tint at low opacity) |
| Tertiary | Plain (text only, tint color) |
| Destructive | Red text or filled red |

### Action Sheets

Use instead of bottom sheets for destructive or multiple actions:

```
┌─────────────────────────────────┐
│         Share                   │
│         Copy Link               │
│         Edit                    │
├─────────────────────────────────┤
│         Delete (red)            │
├─────────────────────────────────┤
│         Cancel (bold)           │
└─────────────────────────────────┘
```

### Alerts

Standard iOS alert style:
- Centered modal
- Title (bold) + message
- 1-2 actions (stacked if long text)
- Destructive action in red

### Forms

| Element | iOS Style |
|---------|-----------|
| Text field | Rounded rect background |
| Grouped sections | Inset grouped list |
| Labels | Above or leading (forms vary) |
| Toggle | UISwitch (green when on) |
| Picker | Wheel picker or menu |

---

## Icons

### SF Symbols

Use SF Symbols for consistency:

| Design System Icon | SF Symbol |
|-------------------|-----------|
| Home | house.fill |
| Search | magnifyingglass |
| Settings | gearshape.fill |
| Profile | person.circle.fill |
| Close | xmark |
| Back | chevron.left |
| Forward | chevron.right |
| Add | plus |
| Delete | trash |
| Edit | pencil |
| Share | square.and.arrow.up |
| More | ellipsis |

### Icon Weights

Match icon weight to adjacent text:
- Regular text: Regular symbol
- Semibold text: Semibold symbol
- Bold text: Bold symbol

---

## Motion

### Standard Transitions

| Transition | iOS Animation |
|------------|---------------|
| Push (forward nav) | Slide from right, 0.35s |
| Pop (back nav) | Slide to right, 0.35s |
| Modal present | Slide from bottom, 0.35s |
| Modal dismiss | Slide to bottom, 0.35s |
| Fade | Cross dissolve, 0.25s |

### Springs

iOS uses spring animations for natural feel:

```swift
// Standard spring
.spring(response: 0.3, dampingFraction: 0.7)

// Bouncy
.spring(response: 0.3, dampingFraction: 0.5)
```

### Haptics

| Event | Haptic Type |
|-------|-------------|
| Button tap | .light impact |
| Success | .success notification |
| Error | .error notification |
| Selection change | .selection |
| Toggle | .light impact |

---

## Gestures

### Standard Gestures

| Gesture | Usage |
|---------|-------|
| Tap | Primary selection |
| Long press | Context menu, 500ms |
| Swipe | Delete, actions |
| Pull down | Refresh |
| Pinch | Zoom |
| Edge swipe | Back navigation |

### Swipe Actions

```
┌─────────────────────────────────┐
│ List Item          [Flag][Delete]│
└─────────────────────────────────┘
```

- Leading swipe: Secondary actions (flag, pin)
- Trailing swipe: Destructive (delete)
- Full swipe: Immediate action

---

## iPad Adaptations

### Layout Changes

| iPhone | iPad |
|--------|------|
| Full-width content | Readable width (max ~700pt) |
| Bottom tab bar | Sidebar navigation |
| Full-screen modals | Sheet modals |
| Single column | Split view |

### Split View

```
┌─────────────┬───────────────────┐
│             │                   │
│   Sidebar   │      Detail       │
│   (320pt)   │                   │
│             │                   │
└─────────────┴───────────────────┘
```

### Multitasking

- Support Split View (1/3, 1/2, 2/3 widths)
- Support Slide Over
- Adapt layout at each width

---

## Accessibility

### VoiceOver

- Use semantic elements (UIButton, UILabel)
- Provide accessibilityLabel for images
- Group related elements
- Support rotor navigation

### Dynamic Type

- All text must scale
- Test at largest sizes
- Use Large Content Viewer for icons

### Reduce Motion

- Check `UIAccessibility.isReduceMotionEnabled`
- Replace animations with crossfade
- Disable parallax effects

### High Contrast

- Test with Increase Contrast enabled
- Ensure sufficient contrast ratios
- Consider bold text preference

---

## Platform-Specific Features

### Context Menus

```
Long press on item:
┌──────────────────┐
│ Preview          │
├──────────────────┤
│ Share       >    │
│ Copy             │
│ Delete      ⚠    │
└──────────────────┘
```

### Pull to Refresh

- Use standard UIRefreshControl appearance
- Spinner appears when pulled past threshold

### Search

- Search bar in navigation bar
- Cancel button appears on focus
- Suggestions dropdown

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
