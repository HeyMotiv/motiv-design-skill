# Accessibility Guidelines

## Overview

Accessibility ensures the app is usable by everyone, including people with visual, motor, auditory, and cognitive disabilities. These guidelines follow WCAG 2.1 AA standards and platform-specific accessibility best practices.

---

## Color & Contrast

### Minimum Contrast Ratios

| Content Type | Ratio | WCAG Level |
|--------------|-------|------------|
| Body text | 4.5:1 | AA |
| Large text (18px+ bold, 24px+ regular) | 3:1 | AA |
| UI components and graphics | 3:1 | AA |
| Enhanced (ideal) | 7:1 | AAA |

### Color Token Validation

```json
{
  "colors": {
    "text": {
      "primary": {
        "value": "#1A1A1A",
        "onBackground": "#FFFFFF",
        "contrastRatio": 16.1,
        "wcagAA": true,
        "wcagAAA": true
      }
    }
  }
}
```

### Don't Rely on Color Alone

| Bad | Good |
|-----|------|
| Red text for errors | Red text + error icon + error message |
| Green for success | Green + checkmark icon |
| Color-coded categories | Color + pattern or label |

---

## Typography

### Minimum Sizes

| Content | Minimum | Recommended |
|---------|---------|-------------|
| Body text | 14px | 16px |
| Captions/helpers | 12px | 12-14px |
| Touch target labels | 12px | 14px |

### Line Height

- Body text: 1.5x font size minimum
- Headings: 1.2-1.3x font size

### Font Weight

- Avoid weights below 400 for body text
- Ensure sufficient contrast for light weights

### Text Spacing

Support user-adjusted text spacing:
- Line height: up to 1.5x
- Paragraph spacing: up to 2x font size
- Letter spacing: up to 0.12x font size
- Word spacing: up to 0.16x font size

---

## Touch Targets

### Minimum Sizes

| Platform | Minimum | Recommended |
|----------|---------|-------------|
| iOS | 44x44pt | 48x48pt |
| Android | 48x48dp | 48x48dp |
| Web (touch) | 44x44px | 48x48px |
| Web (pointer) | 24x24px | 32x32px |

### Spacing Between Targets

- Minimum: 8px between adjacent touch targets
- Prevents accidental taps

### Visual vs Touch Target

Touch target can be larger than visual element:
```
Visual: 32x32px button
Touch: 48x48px hit area (8px padding)
```

---

## Focus Management

### Focus Indicators

```json
{
  "focus": {
    "ring": {
      "width": "2px",
      "style": "solid",
      "color": "REPLACE (high contrast)",
      "offset": "2px"
    },
    "contrast": "Must be visible on all backgrounds"
  }
}
```

### Focus Requirements

- All interactive elements must be focusable
- Focus order follows logical reading order
- Focus is visible when using keyboard
- Skip to main content link at top
- Focus trapped in modals

### Focus Patterns

| Pattern | Behavior |
|---------|----------|
| Modal open | Focus moves to modal, trapped inside |
| Modal close | Focus returns to trigger element |
| Dropdown open | Focus on first item |
| Tab navigation | Focus follows selected tab panel |

---

## Screen Reader Support

### Semantic HTML

| Use | Instead of |
|-----|------------|
| `<button>` | `<div onclick>` |
| `<a href>` | `<span onclick>` |
| `<nav>` | `<div class="nav">` |
| `<main>` | `<div class="main">` |
| `<h1>-<h6>` | `<div class="heading">` |

### ARIA Roles & Attributes

| Element | Required ARIA |
|---------|---------------|
| Button | role="button" (if not `<button>`) |
| Link | role="link" (if not `<a>`) |
| Modal | role="dialog", aria-modal="true" |
| Tab panel | role="tablist", role="tab", role="tabpanel" |
| Alert | role="alert" |
| Live region | aria-live="polite" or "assertive" |

### Labeling

```html
<!-- Visible label -->
<label for="email">Email</label>
<input id="email" type="email">

<!-- Hidden label (icon-only button) -->
<button aria-label="Close dialog">
  <CloseIcon />
</button>

<!-- Described by -->
<input aria-describedby="email-hint email-error">
<span id="email-hint">We'll never share your email</span>
<span id="email-error">Please enter a valid email</span>
```

### Announcements

| Event | Announcement |
|-------|--------------|
| Form error | "Error: [message]" |
| Success toast | "[Success message]" |
| Loading | "Loading..." / "Loaded" |
| Page navigation | New page title |

---

## Motion & Animation

### Respect User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Safe Motion Guidelines

| Do | Don't |
|-----|-------|
| Fade transitions | Flashing content (3+ Hz) |
| Subtle movement | Large, fast movements |
| User-controlled animations | Auto-playing videos |
| Pause/stop controls | Infinite animations without control |

### Motion Tokens with Reduced Motion

```json
{
  "motion": {
    "transition": {
      "default": "250ms ease-out",
      "reducedMotion": "0ms"
    }
  }
}
```

---

## Forms

### Labels

- Every input must have a label
- Labels must be visible (not just placeholder)
- Labels associated with `for`/`id` or wrapping

### Error Handling

```
Label *
┌─────────────────────────────────┐
│ Invalid input                   │
└─────────────────────────────────┘
⚠ Error message with specific guidance

Attributes:
- aria-invalid="true"
- aria-describedby="error-id"
- aria-required="true" (if required)
```

### Keyboard Navigation

- Tab: Move between fields
- Enter: Submit form
- Escape: Cancel/close
- Arrow keys: Within radio groups, selects

---

## Images & Media

### Alt Text

| Image Type | Alt Text |
|------------|----------|
| Informative | Describe content and purpose |
| Decorative | `alt=""` (empty) |
| Functional (button) | Describe action |
| Complex (chart) | Brief alt + long description |

### Video & Audio

- Captions for video
- Transcript for audio
- Audio description for visual content
- Controls accessible by keyboard

---

## Navigation

### Landmarks

```html
<header role="banner">
  <nav role="navigation" aria-label="Main">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

### Skip Links

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

### Heading Structure

- Single `<h1>` per page
- Hierarchical structure (h1 → h2 → h3)
- Don't skip levels
- Use headings for structure, not styling

---

## Component Patterns

### Buttons

```html
<button type="button">
  Label
</button>

<!-- With icon -->
<button type="button" aria-label="Close">
  <CloseIcon aria-hidden="true" />
</button>
```

### Links

```html
<!-- Good: Descriptive -->
<a href="/settings">Account settings</a>

<!-- Bad: Vague -->
<a href="/settings">Click here</a>
```

### Modals

```html
<div role="dialog"
     aria-modal="true"
     aria-labelledby="modal-title"
     aria-describedby="modal-desc">
  <h2 id="modal-title">Dialog Title</h2>
  <p id="modal-desc">Description text</p>
  <button>Close</button>
</div>
```

### Tabs

```html
<div role="tablist" aria-label="Content sections">
  <button role="tab"
          aria-selected="true"
          aria-controls="panel-1"
          id="tab-1">
    Tab 1
  </button>
</div>
<div role="tabpanel"
     id="panel-1"
     aria-labelledby="tab-1">
  Content
</div>
```

---

## Testing Checklist

### Automated Testing

- [ ] aXe or Lighthouse audit
- [ ] Color contrast checker
- [ ] HTML validation

### Manual Testing

- [ ] Keyboard-only navigation
- [ ] Screen reader testing (VoiceOver, TalkBack, NVDA)
- [ ] Zoom to 200%
- [ ] Reduced motion mode
- [ ] High contrast mode

### Screen Reader Testing Points

- [ ] All content is announced
- [ ] Interactive elements are identified
- [ ] Form labels are read
- [ ] Error messages are announced
- [ ] Live regions update appropriately

---

## Platform-Specific

### iOS (VoiceOver)

- Use semantic views (UIButton, UILabel)
- accessibilityLabel, accessibilityHint
- accessibilityTraits
- Group related elements

### Android (TalkBack)

- contentDescription for images
- importantForAccessibility
- accessibilityLiveRegion
- labelFor on inputs

### Web

- Semantic HTML first
- ARIA when HTML isn't enough
- Focus management for SPAs
- Announce route changes

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
