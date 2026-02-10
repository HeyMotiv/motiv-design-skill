# iOS Platform Guide

## Overview

Motiv is designed iOS-first. This guide documents iOS-specific patterns, adaptations, and implementation notes.

---

## System Integration

### Safe Areas

| Area | Handling |
|------|----------|
| Status bar | Content starts below, bg color extends behind |
| Home indicator | Tab bar sits above, extra padding at bottom |
| Notch (Dynamic Island) | Standard iOS handling, no custom treatment |

### System Fonts

| Use Case | Font |
|----------|------|
| App UI | Roboto (custom) |
| System dialogs | SF Pro (automatic) |
| Accessibility override | Respect Dynamic Type |

### Dynamic Type Support

| Text Style | Minimum | Maximum |
|------------|---------|---------|
| Body | 14px | 24px |
| Captions | 11px | 19px |
| Headings | Scale proportionally |

---

## Navigation

### Navigation Bar

| Property | Value |
|----------|-------|
| Height | 44px (+ status bar) |
| Background | White or transparent (over gradients) |
| Title | Centered, 17px semibold |
| Back button | Chevron + "Back" or previous title |

### Tab Bar

| Property | Value |
|----------|-------|
| Height | 49px (+ home indicator) |
| Background | White with subtle top border |
| Icons | 24px, SF Symbols or custom |
| Labels | 10px, always visible |
| Active | Purple tint (#7C3AED) |
| Inactive | Gray (#6B7280) |

### Gestures

| Gesture | Action |
|---------|--------|
| Swipe from left edge | Back navigation |
| Swipe down on modal | Dismiss |
| Long press | Context menu (where applicable) |

---

## Components

### Buttons

| iOS Adaptation | Details |
|----------------|---------|
| Haptics | Light impact on press |
| Press state | Scale 0.97 + color change |
| System buttons | Use for destructive actions in alerts |

### Inputs

| Property | iOS Value |
|----------|-----------|
| Height | 44px minimum |
| Border radius | 12px |
| Keyboard | Appropriate type per field |
| Return key | Contextual ("Next", "Done", "Search") |

### Sheets (Modals)

| Property | Value |
|----------|-------|
| Presentation | Sheet from bottom |
| Detents | Medium (50%), Large (90%) |
| Grabber | Visible, centered top |
| Dismiss | Swipe down, tap outside |
| Border radius | 12px top corners |

### Alerts

| Type | Implementation |
|------|----------------|
| Destructive | Use UIAlertController |
| Informational | Custom styled, matches design system |
| Toast | Custom, bottom positioned |

---

## Motion

### Page Transitions

| Transition | iOS Implementation |
|------------|-------------------|
| Push | Standard UINavigationController push |
| Modal | Sheet presentation |
| Tab switch | Cross-fade |

### Timing

| Animation | iOS Timing |
|-----------|------------|
| Push/Pop | 0.35s |
| Modal present | 0.3s |
| Tab switch | 0.25s |
| Micro-interaction | 0.15s |

---

## Gradients & Blobs

### Implementation

```swift
// Animated gradient blobs using CAGradientLayer + CADisplayLink
class GradientBlobView: UIView {
    // Use CAGradientLayer with animated colors
    // Animate using CABasicAnimation or UIViewPropertyAnimator
    // Duration: 20s, continuous loop
}
```

### Performance

| Consideration | Approach |
|---------------|----------|
| Battery | Pause when backgrounded |
| Low power mode | Static gradient fallback |
| Reduced motion | Static gradient |

---

## Typography

### Font Loading

```swift
// Register Source Serif 4 and Roboto in Info.plist
// UIAppFonts array
```

### Dynamic Type

```swift
// Scale custom fonts with UIFontMetrics
let scaledFont = UIFontMetrics(forTextStyle: .body)
    .scaledFont(for: customFont)
```

---

## Accessibility

### VoiceOver

| Element | Consideration |
|---------|---------------|
| Buttons | Clear action labels |
| Progress | Announce percentage |
| Cards | Group related content |
| Images | Decorative = hidden, meaningful = described |

### Reduce Motion

```swift
if UIAccessibility.isReduceMotionEnabled {
    // Use static gradients
    // Reduce animation duration
}
```

### Bold Text

- Increase font weight when Bold Text enabled
- Test all text remains legible

---

## Launch & Splash

| Property | Value |
|----------|-------|
| Launch screen | Static gradient + logo |
| Transition | Fade to first screen |
| Duration | Minimize (< 1s if possible) |

---

## App Icon

| Size | Usage |
|------|-------|
| 1024x1024 | App Store |
| 180x180 | iPhone @3x |
| 120x120 | iPhone @2x |
| 167x167 | iPad Pro |

| Style | Notes |
|-------|-------|
| Background | Gradient (pink to purple) |
| Icon | "M" or Motiv mark |
| Corners | System rounded (don't include) |

---

## Widgets (Future)

| Widget Size | Content |
|-------------|---------|
| Small | Current challenge progress |
| Medium | This week's stats |
| Large | Challenge + community stats |

---

## Notifications

| Type | Content |
|------|---------|
| Challenge reminder | "Time to log your workout!" |
| Challenge complete | "Congratulations! You earned $X" |
| Community | "New message from @creator" |

| Visual | Notes |
|--------|-------|
| Icon | App icon |
| Rich media | Challenge image (optional) |
| Actions | "Log workout", "View challenge" |

---

## Privacy

| Permission | Usage |
|------------|-------|
| HealthKit | Workout data sync |
| Notifications | Challenge reminders |
| Camera | Profile photo (optional) |

---

## Testing Checklist

- [ ] All screen sizes (SE, standard, Plus/Max)
- [ ] Dynamic Type (all sizes)
- [ ] VoiceOver navigation
- [ ] Reduce Motion enabled
- [ ] Dark mode (celebration screens)
- [ ] Landscape (if supported)
- [ ] iPad (if supported)

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial iOS guide |
