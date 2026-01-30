# Android Platform Guide

## Overview

While Motiv is designed iOS-first, this guide ensures proper adaptation to Android patterns and conventions.

---

## Key Differences from iOS

| Aspect | iOS | Android |
|--------|-----|---------|
| Back navigation | Swipe from edge | System back button/gesture |
| Navigation | Bottom tabs | Bottom nav or nav drawer |
| Modals | Sheet from bottom | Bottom sheet or dialog |
| Haptics | Light/medium impact | Varies by device |
| Typography | SF Pro system | Roboto system |

---

## System Integration

### System Bars

| Bar | Handling |
|-----|----------|
| Status bar | Light content on colored bg, dark on white |
| Navigation bar | Edge-to-edge, handle insets |
| Gesture nav | Respect gesture zones |

### Edge-to-Edge

```kotlin
// Enable edge-to-edge
WindowCompat.setDecorFitsSystemWindows(window, false)

// Handle insets
ViewCompat.setOnApplyWindowInsetsListener(view) { v, insets ->
    val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
    v.updatePadding(bottom = systemBars.bottom)
    insets
}
```

---

## Navigation

### Bottom Navigation

| Property | Value |
|----------|-------|
| Height | 80dp (with labels) |
| Background | White, elevation 8dp |
| Icons | 24dp, outlined inactive, filled active |
| Labels | 12sp, always visible |
| Active color | Purple (#7C3AED) |
| Inactive color | Gray (#6B7280) |
| Indicator | Pill behind active item (Material 3) |

### Top App Bar

| Property | Value |
|----------|-------|
| Height | 64dp |
| Title | Start-aligned, 22sp |
| Navigation icon | Back arrow (not chevron) |
| Actions | End-aligned icons |

### Back Handling

```kotlin
// Predictive back gesture support
onBackPressedDispatcher.addCallback(this) {
    // Handle back
}
```

---

## Components

### Buttons

| Adaptation | Details |
|------------|---------|
| Ripple | Add ripple effect on press |
| States | Ripple + scale (0.97) |
| Font | Roboto Medium |

```xml
<Button
    style="@style/Motiv.Button.Primary"
    android:background="@drawable/button_primary_ripple" />
```

### Inputs (Text Fields)

| Property | Android Value |
|----------|---------------|
| Style | Outlined (Material) |
| Height | 56dp |
| Corner radius | 12dp |
| Label | Floating label |
| Helper text | Below field |

### Bottom Sheets

| Property | Value |
|----------|-------|
| Behavior | Modal or persistent |
| Peek height | 50% or custom |
| Corner radius | 16dp top |
| Drag handle | Visible, centered |
| Scrim | 50% black |

### Dialogs

| Type | Usage |
|------|-------|
| Alert dialog | Destructive confirmations |
| Full-screen dialog | Complex inputs |
| Bottom sheet | Most other cases |

---

## Motion

### Transitions

| Transition | Implementation |
|------------|----------------|
| Forward nav | Shared axis (X) or fade through |
| Back nav | Reverse of forward |
| Modal | Slide up + fade |
| Tab switch | Fade |

### Material Motion

```kotlin
// Use Material motion library
MaterialFadeThrough()
MaterialSharedAxis(MaterialSharedAxis.X, true)
```

### Timing

| Animation | Duration |
|-----------|----------|
| Forward/back | 300ms |
| Modal | 250ms |
| Fade | 200ms |
| Micro-interaction | 150ms |

---

## Gradients & Blobs

### Implementation Options

1. **Compose Canvas**
```kotlin
Canvas(modifier) {
    drawCircle(
        brush = Brush.radialGradient(colors),
        center = animatedOffset,
        radius = animatedRadius
    )
}
```

2. **Custom View with Canvas**
```kotlin
class GradientBlobView : View {
    override fun onDraw(canvas: Canvas) {
        // Draw animated gradient circles
    }
}
```

### Performance

| Consideration | Approach |
|---------------|----------|
| Hardware acceleration | Enable for smooth animation |
| Background | Pause animations |
| Battery saver | Static gradient fallback |

---

## Typography

### Font Setup

```xml
<!-- res/font/roboto.xml -->
<font-family>
    <font android:font="@font/roboto_regular" android:fontWeight="400" />
    <font android:font="@font/roboto_medium" android:fontWeight="500" />
    <font android:font="@font/roboto_bold" android:fontWeight="700" />
</font-family>
```

### Text Styles

```xml
<style name="Motiv.TextAppearance.Body">
    <item name="android:fontFamily">@font/roboto</item>
    <item name="android:textSize">16sp</item>
    <item name="android:lineHeight">24sp</item>
</style>
```

---

## Accessibility

### TalkBack

| Element | Implementation |
|---------|----------------|
| Buttons | `contentDescription` for icon-only |
| Progress | Announce as percentage |
| Cards | Group with `accessibilityLiveRegion` |

### Font Scaling

- Support up to 200% font scaling
- Test at largest size
- Layouts must accommodate

### Touch Targets

- Minimum 48dp x 48dp
- Add padding if visual is smaller

---

## Theming

### Material Theme

```kotlin
// Extend Material3 theme
@Composable
fun MotivTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = motivColorScheme,
        typography = motivTypography,
        content = content
    )
}
```

### Dynamic Color (Android 12+)

| Approach | Recommendation |
|----------|----------------|
| App colors | Use Motiv colors (don't follow system) |
| Exceptions | May use system accent for some elements |

---

## Notifications

### Channels

| Channel | Importance |
|---------|------------|
| Challenge reminders | Default |
| Challenge results | High |
| Community | Default |
| Promotions | Low |

### Style

| Property | Value |
|----------|-------|
| Small icon | Monochrome Motiv mark |
| Accent color | Purple (#7C3AED) |
| Big picture | Challenge image |

---

## App Icon

### Adaptive Icon

```xml
<adaptive-icon>
    <background android:drawable="@drawable/ic_launcher_background" />
    <foreground android:drawable="@drawable/ic_launcher_foreground" />
    <monochrome android:drawable="@drawable/ic_launcher_monochrome" />
</adaptive-icon>
```

| Layer | Content |
|-------|---------|
| Background | Gradient |
| Foreground | Motiv mark (with safe zone) |
| Monochrome | Single color version |

---

## Widgets

| Size | Content |
|------|---------|
| Small (2x1) | Challenge progress ring |
| Medium (3x2) | This week's stats |
| Large (4x3) | Full challenge summary |

---

## Testing Checklist

- [ ] Multiple screen densities (mdpi to xxxhdpi)
- [ ] Font scaling (up to 200%)
- [ ] TalkBack navigation
- [ ] Gesture navigation
- [ ] 3-button navigation
- [ ] Foldables (if supporting)
- [ ] Tablets (if supporting)
- [ ] Android 12+ theming
- [ ] Android 14+ predictive back

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial Android guide |
