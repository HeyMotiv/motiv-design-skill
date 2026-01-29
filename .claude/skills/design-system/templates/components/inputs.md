# Text Inputs

## Purpose

Text inputs allow users to enter and edit text. They are used in forms, search fields, and any context where the user needs to provide textual information.

## Variants

| Variant | Use Case | Visual Distinction |
|---------|----------|-------------------|
| Outlined | Default for most forms | Border around field |
| Filled | Alternative style, Material-like | Background fill, bottom border |
| Underlined | Minimal, inline editing | Bottom border only |

## Anatomy

```
     [Label]
┌─────────────────────────────────┐
│ [Icon]  [Placeholder/Value]  [X]│
└─────────────────────────────────┘
     [Helper text / Error message]

1. Label (required): Describes the expected input
2. Leading Icon (optional): Provides context (search, email)
3. Input area (required): Where text appears
4. Clear button (optional): Clears input when populated
5. Trailing icon (optional): Password visibility, validation state
6. Helper text (optional): Additional guidance
7. Error message (conditional): Validation feedback
8. Character count (optional): Shows limit
```

## Specifications

### Outlined Input

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | REPLACE | colors.background.secondary |
| Border | 1px solid REPLACE | colors.border.default |
| Border (focused) | 2px solid REPLACE | colors.brand.primary |
| Text Color | REPLACE | colors.text.primary |
| Placeholder Color | REPLACE | colors.text.secondary |
| Font | REPLACE | typography.scale.body |
| Padding | REPLACE vertical, REPLACE horizontal | spacing.sm, spacing.md |
| Corner Radius | REPLACE | radii.semantic.input |
| Min Height | 48px | sizing.touchTarget |

### Label

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Font | REPLACE | typography.scale.caption |
| Color | REPLACE | colors.text.secondary |
| Color (focused) | REPLACE | colors.brand.primary |
| Margin Bottom | REPLACE | spacing.xs |

### Helper Text / Error Message

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Font | REPLACE | typography.scale.caption |
| Color (helper) | REPLACE | colors.text.secondary |
| Color (error) | REPLACE | colors.semantic.error |
| Margin Top | REPLACE | spacing.xs |
| Icon Size | 16px | — |

### Sizes

| Size | Height | Font Size | Use Case |
|------|--------|-----------|----------|
| Small | 36px | 14px | Compact forms, data tables |
| Medium | 44px | 16px | Standard forms |
| Large | 52px | 16px | Mobile-first, prominent inputs |

## States

| State | Visual Changes | Transition |
|-------|---------------|------------|
| Empty | Placeholder visible, default border | — |
| Filled | Value visible, default border | — |
| Focused | Border highlight, label highlight | 150ms ease-out |
| Hover | Border darkens slightly | 100ms ease-out |
| Disabled | Reduced opacity, no interaction | — |
| Read-only | Normal appearance, no editing | — |
| Error | Red border, error message shown | 150ms |
| Success | Green indicator (optional) | 150ms |
| Loading | Spinner in trailing position | — |

### State Specifications

**Focused**
- Border: 2px solid REPLACE (colors.brand.primary)
- Label color: REPLACE (colors.brand.primary)
- Shadow (optional): REPLACE (subtle focus glow)
- Transition: 150ms ease-out

**Hover (when not focused)**
- Border: 1px solid REPLACE (slightly darker)
- Transition: 100ms ease-out

**Error**
- Border: 2px solid REPLACE (colors.semantic.error)
- Label color: REPLACE (colors.semantic.error)
- Helper text: Replaced by error message
- Icon: Error icon in trailing position (optional)

**Disabled**
- Opacity: 0.5
- Background: REPLACE (slightly different)
- Cursor: not-allowed
- Border: unchanged or lighter

**Loading**
- Show spinner in trailing position
- Input may or may not be editable (context-dependent)

## Behavior

### Interaction

- **Focus**: Click/tap anywhere in field focuses input
- **Clear**: Tap clear button (X) empties field and maintains focus
- **Selection**: Double-tap selects word, triple-tap selects all
- **Paste**: Handle multi-line paste based on input type

### Validation

- **When to validate**:
  - On blur (after leaving field)
  - On submit (form submission)
  - On change (for critical real-time validation only)
- **Error display**: Show error message below input
- **Error persistence**: Clear error when user starts editing

### Character Limits

- Display as "0/100" format in helper text position
- Warn at 80% (optional color change)
- Prevent input beyond limit OR allow with error state

### Content Guidelines

- **Label**: Clear, concise (1-3 words)
- **Placeholder**: Example input, not instructions (optional)
- **Helper text**: Additional context or formatting hints
- **Error message**: Specific, actionable ("Enter a valid email")

### Accessibility

- **Label**: Always associate label with input (for/id or aria-labelledby)
- **Required**: Indicate with asterisk AND aria-required
- **Errors**: Use aria-describedby to link error message
- **Announcements**: Announce validation errors to screen readers

## Input Types

### Text
- Default single-line text
- No specific constraints

### Email
- Keyboard: email layout
- Validation: email format
- Autocomplete: email

### Password
- Masked input (dots/asterisks)
- Show/hide toggle icon
- Keyboard: no autocorrect/autocapitalize

### Number
- Keyboard: numeric
- Optional stepper controls
- Min/max/step constraints

### Phone
- Keyboard: phone
- Auto-formatting (optional)
- Country code handling

### Search
- Keyboard: search (with "Search" return key)
- Clear button
- Optional search icon

### Multiline (Textarea)
- Multiple lines, vertical resize
- Character count more common
- Min/max rows

## Platform Adaptations

| Platform | Adjustments |
|----------|-------------|
| iOS | SF Pro, system keyboard integration, Dynamic Type |
| Android | Roboto, Material text field behavior, floating label |
| Large Screen | May use inline labels, narrower max-width |

### iOS Specifics
- Support Dynamic Type
- Integrate with system autocomplete
- Use iOS-style clear button (circular X)
- Respect system keyboard appearance

### Android Specifics
- Consider floating label animation (Material-style)
- Support autofill framework
- Ripple effect on container touch
- Handle IME actions properly

### Large Screen Specifics
- Maximum width: ~400px for readability
- Inline labels may work better
- Tab between fields more common
- Hover states for clear button

## Form Layout

### Single Column
- Full width (with max-width)
- Consistent spacing between fields: REPLACE (spacing.lg)

### Multi-Column (Large Screens)
- Related fields side-by-side
- Maintain alignment
- Gap: REPLACE (spacing.md)

### Field Groups
- Related fields visually grouped
- Shared label or section header
- Reduced internal spacing: REPLACE (spacing.sm)

## Examples

### Do

- Always use visible labels (not just placeholders)
- Show validation errors near the field
- Use appropriate keyboard types
- Provide clear error messages with solutions

### Don't

- Don't use placeholder as label (disappears on focus)
- Don't validate while user is still typing
- Don't use red color alone to indicate errors
- Don't make users guess the required format

## Related Components

- **Select/Dropdown**: For choosing from options
- **Checkbox/Radio**: For boolean or single-choice selections
- **Slider**: For numeric ranges
- **Date Picker**: For date/time input
- **Search Field**: Specialized input for search

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
