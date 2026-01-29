# [Component Name]

## Purpose

[1-2 sentences explaining when and why to use this component.]

## Variants

| Variant | Use Case | Visual Distinction |
|---------|----------|-------------------|
| Primary | [When to use] | [Key visual difference] |
| Secondary | [When to use] | [Key visual difference] |
| [Additional variants...] | | |

## Anatomy

```
┌─────────────────────────────────┐
│  [Icon]  [Label]  [Accessory]   │
│         [Supporting text]       │
└─────────────────────────────────┘

1. Icon (optional): [Description]
2. Label (required): [Description]
3. Supporting text (optional): [Description]
4. Accessory (optional): [Description]
```

## Specifications

### [Variant Name]

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | [value] | [token] |
| Text Color | [value] | [token] |
| Font | [value] | [token] |
| Padding | [value] | [token] |
| Corner Radius | [value] | [token] |
| Border | [value] | [token] |
| Shadow | [value] | [token] |
| Min Width | [value] | — |
| Min Height | [value] | — |

### Sizes

| Size | Height | Font Size | Padding | Use Case |
|------|--------|-----------|---------|----------|
| Small | [value] | [value] | [value] | [when to use] |
| Medium | [value] | [value] | [value] | [when to use] |
| Large | [value] | [value] | [value] | [when to use] |

## States

| State | Visual Changes | Transition |
|-------|---------------|------------|
| Default | — | — |
| Hover | [changes] | [timing] |
| Focused | [changes] | [timing] |
| Pressed/Active | [changes] | [timing] |
| Disabled | [changes] | — |
| Loading | [changes] | [timing] |
| Error | [changes] | — |
| Success | [changes] | — |

### State Specifications

**Hover**
- Background: [value] or [token]
- Transition: [duration] [easing]
- Cursor: pointer

**Focused**
- Focus ring: [width] [color] [offset]
- Triggered by: keyboard navigation

**Pressed**
- Transform: [value]
- Background: [value]
- Transition: [duration] [easing]

**Disabled**
- Opacity: [value]
- Cursor: not-allowed
- Interactive: false

**Loading**
- Content: [spinner/skeleton description]
- Width: locked (prevent layout shift)
- Interactive: false

## Behavior

### Interaction

- **Touch target**: [minimum size] (even if visual is smaller)
- **Click/Tap**: [what happens]
- **Keyboard**: [space/enter behavior]
- **Focus order**: [any special considerations]

### Content Guidelines

- **Label length**: [character limit or guidance]
- **Truncation**: [how to handle overflow]
- **Required content**: [what must always be present]
- **Optional content**: [what can be omitted]

### Accessibility

- **Role**: [ARIA role]
- **Label**: [how to provide accessible label]
- **States**: [how states are communicated]
- **Announcements**: [what screen readers should announce]

## Platform Adaptations

| Platform | Adjustments |
|----------|-------------|
| iOS | [iOS-specific changes] |
| Android | [Android-specific changes] |
| Large Screen | [Desktop/tablet adjustments] |

### iOS Specifics
- [Detail 1]
- [Detail 2]

### Android Specifics
- [Detail 1]
- [Detail 2]

### Large Screen Specifics
- [Detail 1]
- [Detail 2]

## Examples

### Do

- [Good usage example 1]
- [Good usage example 2]

### Don't

- [Anti-pattern 1]
- [Anti-pattern 2]

## Related Components

- [Related Component 1]: [When to use instead]
- [Related Component 2]: [How they work together]

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
