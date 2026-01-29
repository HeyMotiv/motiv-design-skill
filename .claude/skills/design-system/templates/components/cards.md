# Cards

## Purpose

Cards group related content and actions into contained units. They provide visual structure, allow content to be scannable, and serve as entry points to more detailed information.

## Variants

| Variant | Use Case | Visual Distinction |
|---------|----------|-------------------|
| Elevated | Default, floating appearance | Shadow for depth |
| Outlined | Flat, bordered | Border, no shadow |
| Filled | Subtle background distinction | Background fill, no border/shadow |
| Interactive | Clickable cards | Hover/press states |

## Anatomy

```
┌─────────────────────────────────┐
│         [Media/Image]           │
├─────────────────────────────────┤
│ [Overline]                      │
│ [Title]                         │
│ [Subtitle / Supporting text]    │
│                                 │
│ [Body content...]               │
│                                 │
├─────────────────────────────────┤
│ [Action 1]  [Action 2]   [Icon] │
└─────────────────────────────────┘

1. Media (optional): Image, video, or illustration
2. Overline (optional): Category, label, or metadata
3. Title (required): Primary card heading
4. Subtitle (optional): Secondary heading or timestamp
5. Body (optional): Description or content
6. Actions (optional): Buttons or links
7. Icon actions (optional): Overflow menu, favorite, share
```

## Specifications

### Elevated Card

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | REPLACE | colors.background.elevated |
| Border | none | — |
| Shadow | REPLACE | shadows.elevation.low |
| Corner Radius | REPLACE | radii.semantic.card |
| Padding | REPLACE | spacing.semantic.card.padding |

### Outlined Card

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | REPLACE | colors.background.primary |
| Border | 1px solid REPLACE | colors.border.default |
| Shadow | none | — |
| Corner Radius | REPLACE | radii.semantic.card |
| Padding | REPLACE | spacing.semantic.card.padding |

### Filled Card

| Property | Value | Token Reference |
|----------|-------|-----------------|
| Background | REPLACE | colors.background.secondary |
| Border | none | — |
| Shadow | none | — |
| Corner Radius | REPLACE | radii.semantic.card |
| Padding | REPLACE | spacing.semantic.card.padding |

### Internal Spacing

| Element | Spacing | Token Reference |
|---------|---------|-----------------|
| Media to content | REPLACE | spacing.md |
| Overline to title | REPLACE | spacing.xs |
| Title to subtitle | REPLACE | spacing.xxs |
| Subtitle to body | REPLACE | spacing.sm |
| Body to actions | REPLACE | spacing.md |
| Between actions | REPLACE | spacing.sm |

### Typography

| Element | Style | Token Reference |
|---------|-------|-----------------|
| Overline | REPLACE | typography.scale.overline |
| Title | REPLACE | typography.scale.heading-3 |
| Subtitle | REPLACE | typography.scale.body-small |
| Body | REPLACE | typography.scale.body |

## States (Interactive Cards)

| State | Visual Changes | Transition |
|-------|---------------|------------|
| Default | Base styling | — |
| Hover | Elevated shadow, subtle bg change | 150ms ease-out |
| Focused | Focus ring | instant |
| Pressed | Reduced shadow, slight scale | 100ms ease-out |
| Disabled | Reduced opacity | — |
| Selected | Border or bg color change | 150ms ease-out |
| Dragging | Larger shadow, lifted appearance | 200ms |

### State Specifications

**Hover**
- Shadow: REPLACE (shadows.elevation.medium)
- Background: REPLACE (subtle shift or overlay)
- Cursor: pointer
- Transition: 150ms ease-out

**Pressed**
- Shadow: REPLACE (shadows.elevation.low)
- Transform: scale(0.99) or translateY(1px)
- Transition: 100ms ease-out

**Selected**
- Border: 2px solid REPLACE (colors.brand.primary)
- Background: REPLACE (colors.brand.primary.subtle)
- Checkmark indicator (optional)

**Dragging**
- Shadow: REPLACE (shadows.elevation.high)
- Transform: scale(1.02)
- Cursor: grabbing
- Z-index: elevated above siblings

## Behavior

### Interaction Models

**Non-interactive**
- Card is container only
- Actions within card are clickable
- No card-level click behavior

**Fully interactive**
- Entire card is clickable/tappable
- Navigates to detail view
- Internal actions may need special handling (stopPropagation)

**Partially interactive**
- Specific zones are interactive
- Media area clickable, content area not (or vice versa)

### Content Guidelines

- **Title**: Clear, scannable (2-6 words ideal)
- **Body**: Brief (2-3 lines max in lists, more in detail views)
- **Actions**: 1-2 primary, overflow for more
- **Truncation**: Title ellipsis after 2 lines, body after 3 lines

### Accessibility

- **Interactive cards**: Use `<article>` or role="article"
- **Clickable cards**: Wrap in `<a>` or use role="link"
- **Card actions**: Ensure unique accessible names
- **Images**: Alt text for media

## Media Handling

### Aspect Ratios

| Type | Ratio | Use Case |
|------|-------|----------|
| Landscape | 16:9 | Video thumbnails, hero images |
| Standard | 4:3 | Photos, general content |
| Square | 1:1 | Profile images, products |
| Portrait | 3:4 | People, tall content |

### Image Specifications

- **Object-fit**: cover (fill container, crop as needed)
- **Loading**: Skeleton or blur placeholder
- **Error**: Fallback placeholder image
- **Corner radius**: Match card or 0 if full-bleed

## Card Layouts

### List (Vertical Stack)

```
┌─────────┐
│  Card   │
└─────────┘
    ↕ gap
┌─────────┐
│  Card   │
└─────────┘
```

- Gap: REPLACE (spacing.semantic.card.gap)
- Full width or max-width constrained

### Grid

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │ │  Card   │
└─────────┘ └─────────┘ └─────────┘
```

- Columns: 2 (tablet), 3-4 (desktop)
- Gap: REPLACE (spacing.semantic.card.gap)
- Equal heights per row (flexbox/grid)

### Horizontal Scroll

- Single row, horizontally scrollable
- Peek next card by ~20px
- Snap points at card boundaries
- Gap: REPLACE (spacing.md)

### Compact List (Horizontal Card)

```
┌──────┬────────────────────┐
│ IMG  │ Title              │
│      │ Subtitle           │
└──────┴────────────────────┘
```

- Image on left, content on right
- Height: fixed (80-120px typical)
- Good for lists with many items

## Platform Adaptations

| Platform | Adjustments |
|----------|-------------|
| iOS | Subtle shadows, may use vibrancy |
| Android | Material-style elevation, ripple effect |
| Large Screen | Multi-column grids, hover states |

### iOS Specifics
- Shadows tend to be subtle and diffuse
- May use vibrancy for elevated surfaces
- Consider card-style grouped tables

### Android Specifics
- Follow Material elevation guidelines
- Add ripple effect for interactive cards
- State layer overlays for interaction

### Large Screen Specifics
- Multi-column layouts (2-4 columns)
- Cards may have fixed width, centered
- Hover states become important
- May show more content per card

## Examples

### Do

- Use consistent card styles within a list
- Keep action count low (1-2 visible, overflow for more)
- Ensure touch targets meet minimums
- Use cards to group related content

### Don't

- Don't nest cards within cards
- Don't make everything a card (use judiciously)
- Don't hide critical actions in overflow
- Don't vary card sizes dramatically in a grid

## Related Components

- **List Item**: Simpler, single-line content
- **Tile**: Image-focused grid items
- **Banner**: Full-width promotional content
- **Dialog**: Modal card for decisions

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
