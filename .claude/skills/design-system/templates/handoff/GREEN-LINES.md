# Accessibility Specifications (Green Lines)

> Project: {{PROJECT_NAME}}
> Generated: {{DATE}}
> Standards: WCAG 2.1 AA

---

## Color Contrast

All text must meet minimum contrast ratios:

| Element Type | Minimum Ratio | Our Ratio | Status |
|--------------|---------------|-----------|--------|
| Body text on background | 4.5:1 | {{RATIO}} | {{STATUS}} |
| Large text (18px+) on background | 3:1 | {{RATIO}} | {{STATUS}} |
| UI components (buttons, inputs) | 3:1 | {{RATIO}} | {{STATUS}} |
| Disabled states | N/A | — | Exempt |

### Color Combinations to Avoid

| Foreground | Background | Ratio | Issue |
|------------|------------|-------|-------|
| {{COLOR_1}} | {{COLOR_2}} | {{RATIO}} | {{ISSUE}} |

---

## Touch Targets

Minimum touch target sizes:

| Platform | Minimum Size | Our Standard |
|----------|--------------|--------------|
| iOS | 44×44 pt | {{SIZE}} |
| Android | 48×48 dp | {{SIZE}} |
| Web (touch) | 44×44 px | {{SIZE}} |

### Elements Requiring Touch Targets

- [ ] Buttons (all variants)
- [ ] Input fields
- [ ] Checkboxes and radio buttons
- [ ] Toggle switches
- [ ] List items (tappable)
- [ ] Navigation items
- [ ] Close/dismiss buttons
- [ ] Icon buttons

---

## Focus Indicators

All interactive elements must have visible focus states:

```css
/* Focus ring specification */
:focus-visible {
  outline: 2px solid {{FOCUS_COLOR}};
  outline-offset: 2px;
}
```

### Focus Order

Ensure logical tab order through screens:
1. Skip links (if applicable)
2. Navigation
3. Main content (top to bottom, left to right)
4. Actions/CTAs
5. Footer elements

---

## Screen Reader Support

### Required Labels

| Element | Attribute | Example |
|---------|-----------|---------|
| Images | `alt` | `alt="User profile photo"` |
| Icon buttons | `aria-label` | `aria-label="Close dialog"` |
| Form inputs | `<label>` or `aria-label` | `<label for="email">` |
| Loading states | `aria-busy="true"` | On container |
| Errors | `aria-invalid` + `aria-describedby` | Link to error message |

### Live Regions

Use for dynamic content updates:

```html
<!-- Polite announcements (non-urgent) -->
<div aria-live="polite">{{CONTENT}}</div>

<!-- Assertive announcements (urgent) -->
<div aria-live="assertive" role="alert">{{ERROR_MESSAGE}}</div>
```

### Semantic Structure

- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<nav>` for navigation
- Use `<main>` for primary content
- Use `<button>` for clickable actions (not `<div>`)
- Use `<a>` for navigation links

---

## Motion & Animation

### Reduced Motion Support

All animations must respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Safe Animations

| Animation Type | With Motion | Reduced Motion |
|----------------|-------------|----------------|
| Page transitions | Slide + fade | Instant/fade only |
| Loading spinners | Rotation | Static or subtle pulse |
| Progress bars | Animated fill | Instant fill |
| Hover effects | Scale/color | Color only |

### Animations to Avoid

- Flashing content (>3 flashes/second)
- Parallax scrolling (provide disable option)
- Auto-playing videos (provide pause)
- Infinite animations without purpose

---

## Text Scaling

Support dynamic type / text scaling:

| Size Category | Scale Factor | Our Support |
|---------------|--------------|-------------|
| Default | 1.0x | ✅ |
| Large | 1.35x | ✅ |
| Extra Large | 1.5x | ✅ |
| XXL | 2.0x | {{STATUS}} |

### Requirements

- [ ] Text doesn't get cut off at 200% zoom
- [ ] Layouts adapt (don't require horizontal scrolling)
- [ ] Line height scales proportionally
- [ ] Touch targets remain adequate

---

## Keyboard Navigation

### Required Keyboard Support

| Action | Key(s) |
|--------|--------|
| Navigate forward | Tab |
| Navigate backward | Shift + Tab |
| Activate button/link | Enter or Space |
| Close modal/dialog | Escape |
| Navigate lists | Arrow keys |
| Select option | Enter |

### Focus Trapping

Modals and dialogs must:
- Trap focus within the modal
- Return focus to trigger on close
- Close on Escape key

---

## Forms

### Error Handling

- [ ] Errors announced to screen readers
- [ ] Error messages linked to fields (`aria-describedby`)
- [ ] Clear error indicators (not color alone)
- [ ] Error summary at top of form (optional)

### Labels & Instructions

- [ ] All inputs have visible labels
- [ ] Required fields marked clearly
- [ ] Format hints provided (e.g., "MM/DD/YYYY")
- [ ] Autocomplete attributes used where appropriate

---

## Testing Checklist

### Automated Testing

- [ ] Run aXe or WAVE on all screens
- [ ] Check color contrast programmatically
- [ ] Validate HTML structure

### Manual Testing

- [ ] Navigate entire app with keyboard only
- [ ] Test with screen reader (VoiceOver/TalkBack)
- [ ] Test at 200% zoom
- [ ] Test with reduced motion enabled
- [ ] Test with high contrast mode

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [iOS Accessibility Guide](https://developer.apple.com/accessibility/ios/)
- [Android Accessibility Guide](https://developer.android.com/guide/topics/ui/accessibility)

---

*Generated by `/design-system handoff`*
