# Design Decisions Log

This document records the reasoning behind key design system decisions. Reference this when considering changes to understand the original intent.

---

## Color Decisions

### Primary Brand Color: #2563EB (Blue)

**Extracted from**: CTA buttons on Home, Profile, and Checkout screens

**Reasoning**:
- High contrast against white backgrounds
- Conveys trust and reliability
- Distinct from semantic colors (red/green)

**Alternatives considered**:
- #3B82F6 (lighter) - rejected as less prominent
- #1D4ED8 (darker) - reserved for hover states

---

### Text Color Consolidation

**Issue**: Found 4 similar dark colors
- #1A1A1A (23 instances)
- #1C1C1C (8 instances)
- #222222 (5 instances)
- #2C2C2C (2 instances)

**Decision**: Standardize to **#1A1A1A**

**Reasoning**:
- Most frequently used
- Highest contrast with backgrounds
- Differences imperceptible to most users
- Reduces complexity for implementation

---

### Background Color Hierarchy

**Decision**:
- Primary: #FFFFFF (pure white)
- Secondary: #F9FAFB (very light gray)
- Elevated: #FFFFFF + shadow

**Reasoning**:
- Clean, minimal aesthetic
- Subtle differentiation without distraction
- Shadows communicate elevation (Material influence)

---

## Typography Decisions

### Font Family: Inter

**Source**: Designer specified

**Reasoning**:
- Excellent screen readability
- Wide range of weights available
- Open source, freely available
- Good fallback to system fonts

**Platform mapping**:
- iOS: SF Pro (close match)
- Android: Roboto (system default, acceptable)

---

### Type Scale Consolidation

**Extracted sizes**: 12, 14, 16, 18, 20, 22, 24, 28, 32, 36px

**Decision**: Reduce to 6-level scale:

| Role | Size | Ratio |
|------|------|-------|
| Caption | 12px | — |
| Body Small | 14px | 1.17x |
| Body | 16px | 1.14x |
| Heading 3 | 18px | 1.125x |
| Heading 2 | 22px | 1.22x |
| Heading 1 | 28px | 1.27x |

**Reasoning**:
- Clearer hierarchy with fewer options
- Each size visually distinct
- 20px and 24px merged into adjacent sizes
- 32px+ reserved for display/hero text

---

### Line Height Standards

**Decision**:
- Body text: 1.5x (24px for 16px text)
- Headings: 1.25x (35px for 28px text)
- Caption: 1.33x (16px for 12px text)

**Reasoning**:
- 1.5x is accessibility best practice for body
- Tighter headings improve scannability
- Small text needs slightly more breathing room

---

## Spacing Decisions

### 8px Base Unit

**Extracted values**: 4, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48px

**Decision**: Normalize to 8px-based scale:
- 4, 8, 12, 16, 24, 32, 48px

**Eliminated**:
- 10px → use 8 or 12
- 14px → use 12 or 16
- 20px → use 16 or 24
- 28px → use 24 or 32
- 40px → use 32 or 48

**Reasoning**:
- 8px aligns with Material Design grid
- Fewer options = faster decisions
- Consistent rhythm across layouts
- Easier to implement responsively

---

### Page Margins

**Decision**:
- Phone: 16px
- Tablet: 24px
- Desktop: 32px (or 5% with max)

**Reasoning**:
- Extracted 16px from all phone screens
- Scaled proportionally for larger screens
- Prevents content from touching edges
- Allows comfortable reading width

---

## Component Decisions

### Button Border Radius: 8px

**Extracted**: Mix of 4px, 8px, and 12px

**Decision**: Standardize to **8px**

**Reasoning**:
- Middle ground: neither sharp nor overly soft
- Matches card radius for cohesion
- Works at all button sizes
- Distinct from pill buttons (full radius)

---

### Card Elevation Style

**Decision**: Use shadow instead of border

**Reasoning**:
- Cleaner visual appearance
- Better conveys floating/elevated metaphor
- Consistent with both iOS and Material
- Border reserved for selected states

**Shadow spec**:
```
0 1px 3px rgba(0,0,0,0.08),
0 4px 6px rgba(0,0,0,0.04)
```

---

### Input Field Style: Outlined

**Options**: Outlined, Filled, Underlined

**Decision**: **Outlined**

**Reasoning**:
- Clear boundaries improve usability
- Works well in varied contexts
- Easier error state (red border)
- Consistent with iOS and Material 3

---

## Motion Decisions

### Animation Style: Smooth & Fluid

**User preference**: Selected "smooth & fluid" during clarification

**Implementation**:
- Standard duration: 250ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Springs for gestures: stiffness 150, damping 20

**Reasoning**:
- Feels polished without being slow
- Professional rather than playful
- Respects reduced motion preferences

---

### Page Transition: Slide

**Decision**: Horizontal slide for navigation

**Spec**:
- Incoming: translateX(100%) → translateX(0)
- Outgoing: translateX(0) → translateX(-30%)
- Duration: 350ms

**Reasoning**:
- Familiar pattern (iOS/Android native)
- Indicates direction in navigation hierarchy
- Outgoing page only moves 30% for depth

---

## Platform Decisions

### Android-First Strategy

**Decision**: Design for Android, adapt to iOS

**Adaptations for iOS**:
- Tab bar uses tint instead of pill indicator
- Navigation title centered
- Back button includes previous page title
- System fonts (SF Pro)

**Reasoning**:
- Designer's original platform
- Both platforms share core patterns
- Specific adaptations documented

---

### Large Screen Breakpoint

**Decision**: 900px for two-pane layouts

**Reasoning**:
- Covers iPad landscape and up
- Below 900px, single-column is clearer
- Matches Material 3 medium breakpoint

---

## Future Considerations

### Not Yet Defined

These elements weren't visible in screenshots and need future definition:

1. **Empty states** - illustrations, messaging
2. **Loading patterns** - skeleton vs spinner
3. **Dark mode** - color mappings
4. **Illustration style** - if adding custom illustrations
5. **Sound/haptics** - feedback patterns

### Potential Changes

Areas identified for potential future refinement:

1. Consider warmer accent color for friendlier feel
2. May add display sizes for marketing screens
3. Could add 6px spacing for very tight contexts
4. Tab bar might move to sidebar on larger tablets

---

*Last updated: [Date]*
