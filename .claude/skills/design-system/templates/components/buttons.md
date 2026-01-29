# Buttons

## Purpose

Buttons trigger actions or navigate. They are the primary way users interact with your app to submit forms, confirm actions, navigate to new screens, or trigger features.

## Variants

| Variant | Use Case | Visual Distinction |
|---------|----------|-------------------|
| Primary | Main action on screen (limit to 1 per view) | Filled with brand color, high contrast |
| Secondary | Supporting actions alongside primary | Outlined or muted fill |
| Tertiary | Low-emphasis actions, cancel, dismiss | Text-only or very subtle background |
| Destructive | Delete, remove, irreversible actions | Red/error color treatment |
| Ghost | Minimal UI, icon-only actions | Transparent until hover/press |

## Anatomy

```
┌─────────────────────────────────┐
│    [Icon]    [Label]    [Icon]  │
└─────────────────────────────────┘

1. Leading Icon (optional): Adds context, 20px
2. Label (required unless icon-only): Action text
3. Trailing Icon (optional): Indicates behavior (dropdown, external link)
```

## Specifications

### Primary Button

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | REPLACE | colors.brand.primary |
| Text Color | REPLACE | colors.text.inverse |
| Font | REPLACE | typography.scale.label |
| Padding | REPLACE vertical, REPLACE horizontal | spacing.sm, spacing.lg |
| Corner Radius | REPLACE | radii.semantic.button |
| Border | none | — |
| Shadow | REPLACE | shadows.elevation.low |
| Min Width | 120px | — |
| Min Height | 48px | sizing.touchTarget |

### Secondary Button

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | transparent | — |
| Text Color | REPLACE | colors.brand.primary |
| Font | REPLACE | typography.scale.label |
| Padding | REPLACE vertical, REPLACE horizontal | spacing.sm, spacing.lg |
| Corner Radius | REPLACE | radii.semantic.button |
| Border | 1.5px solid REPLACE | colors.brand.primary |
| Shadow | none | — |
| Min Width | 120px | — |
| Min Height | 48px | sizing.touchTarget |

### Tertiary Button

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | transparent | — |
| Text Color | REPLACE | colors.brand.primary |
| Font | REPLACE | typography.scale.label |
| Padding | REPLACE vertical, REPLACE horizontal | spacing.sm, spacing.md |
| Corner Radius | REPLACE | radii.semantic.button |
| Border | none | — |
| Shadow | none | — |
| Min Width | auto | — |
| Min Height | 48px | sizing.touchTarget |

### Destructive Button

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | REPLACE | colors.semantic.error |
| Text Color | REPLACE | colors.text.inverse |
| Font | REPLACE | typography.scale.label |
| Padding | REPLACE vertical, REPLACE horizontal | spacing.sm, spacing.lg |
| Corner Radius | REPLACE | radii.semantic.button |
| Border | none | — |
| Shadow | REPLACE | shadows.colored.error |
| Min Width | 120px | — |
| Min Height | 48px | sizing.touchTarget |

### Sizes

| Size | Height | Font Size | Padding H | Icon Size | Use Case |
|------|--------|-----------|-----------|-----------|----------|
| Small | 32px | 14px | 12px | 16px | Compact UI, tables, inline actions |
| Medium | 40px | 16px | 16px | 20px | Standard usage |
| Large | 48px | 16px | 24px | 20px | Primary actions, forms, mobile |
| XLarge | 56px | 18px | 32px | 24px | Hero CTAs, landing pages |

## States

| State | Visual Changes | Transition |
|-------|---------------|------------|
| Default | Base styling | — |
| Hover | Background darkens/lightens | 150ms ease-out |
| Focused | Focus ring appears | instant |
| Pressed | Scale 0.97, background darkens | 100ms ease-out |
| Disabled | Opacity 0.5, cursor not-allowed | — |
| Loading | Spinner replaces content, width locked | 200ms |

### State Specifications

**Hover (Primary)**
- Background: REPLACE (10% darker)
- Token: colors.brand.primary.states.hover
- Transition: 150ms ease-out
- Cursor: pointer

**Focused**
- Focus ring: 2px REPLACE offset 2px
- Token: colors.border.focus
- Triggered by: keyboard navigation, not mouse

**Pressed (Primary)**
- Transform: scale(0.97)
- Background: REPLACE (15% darker)
- Token: colors.brand.primary.states.pressed
- Transition: 100ms ease-out

**Disabled**
- Opacity: 0.5
- Cursor: not-allowed
- Pointer-events: none
- Do not change colors—just reduce opacity

**Loading**
- Replace label with spinner (keep icon if present)
- Lock width to prevent layout shift
- Maintain button height
- Spinner: 20px, same color as text
- Disable interaction

## Behavior

### Interaction

- **Touch target**: Minimum 48x48px, even for small visual size
- **Debounce**: Prevent double-tap (300ms lockout after press)
- **Keyboard**: Space and Enter trigger action
- **Focus order**: Follow DOM order, skip disabled buttons

### Haptics

- **iOS**: Light impact feedback on press
- **Android**: Subtle vibration (10ms) on press

### Content Guidelines

- **Label**: Use action verbs ("Save", "Continue", "Delete"), not nouns
- **Length**: 1-3 words ideal, max ~20 characters
- **Case**: Sentence case ("Save changes") not Title Case
- **Truncation**: Avoid—redesign if label doesn't fit

### Accessibility

- **Role**: `button`
- **Label**: Text content or aria-label for icon-only
- **Disabled**: Use `disabled` attribute, not aria-disabled
- **Loading**: Announce "Loading" to screen readers, set aria-busy

## Platform Adaptations

| Platform | Adjustments |
|----------|-------------|
| iOS | SF Pro Semibold, system blur effect on press, haptic feedback |
| Android | Roboto Medium, ripple effect on press, 10ms vibration |
| Large Screen | May use icon+text, wider min-width (160px), hover states important |

### iOS Specifics
- Use SF Pro Semibold for button text
- Add subtle system blur effect on pressed state (optional)
- Light haptic impact on tap
- Support Dynamic Type scaling

### Android Specifics
- Use Roboto Medium for button text
- Add Material ripple effect on press
- Ripple color: primary color at 12% opacity
- Support 400ms long-press for context actions

### Large Screen Specifics
- Hover state becomes important (show on cursor hover)
- May increase min-width to 160px for visual balance
- Icon+text combinations work well
- Consider keyboard shortcuts for primary actions

## Button Groups

### Horizontal Layout
- Gap: REPLACE (spacing.md)
- Primary button on right (confirm position)
- Destructive actions separated by space or divider

### Vertical Layout (Mobile)
- Gap: REPLACE (spacing.sm)
- Primary button on top or bottom (context-dependent)
- Full-width buttons in mobile forms

### Split Buttons
- Main action + dropdown for alternatives
- Divider between main action and dropdown trigger
- Same height, visually connected

## Examples

### Do

- Use one primary button per view
- Place destructive actions away from confirm actions
- Use loading state for async operations
- Provide keyboard focus indicators

### Don't

- Don't use multiple primary buttons together
- Don't disable without explaining why (use tooltip)
- Don't change button size between states
- Don't use buttons for navigation (use links)

## Related Components

- **Link**: For navigation, not actions
- **Icon Button**: For compact icon-only actions
- **FAB (Floating Action Button)**: For primary screen action on mobile
- **Toggle**: For binary on/off states (not actions)

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
