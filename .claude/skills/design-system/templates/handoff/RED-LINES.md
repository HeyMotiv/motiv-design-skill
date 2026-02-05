# Developer Specifications (Red Lines)

> Project: {{PROJECT_NAME}}
> Generated: {{DATE}}
> Platform: {{PLATFORM}}

---

## Quick Reference

### Design Tokens

```css
/* Import from tokens.css or use these values */

/* Colors */
--color-primary: {{PRIMARY}};
--color-secondary: {{SECONDARY}};
--color-background: {{BACKGROUND}};
--color-surface: {{SURFACE}};
--color-text-primary: {{TEXT_PRIMARY}};
--color-text-secondary: {{TEXT_SECONDARY}};
--color-error: {{ERROR}};
--color-success: {{SUCCESS}};

/* Spacing (base: {{SPACING_BASE}}) */
--spacing-xs: {{XS}};
--spacing-sm: {{SM}};
--spacing-md: {{MD}};
--spacing-lg: {{LG}};
--spacing-xl: {{XL}};

/* Typography */
--font-family-display: {{DISPLAY_FONT}};
--font-family-body: {{BODY_FONT}};
--font-size-h1: {{H1_SIZE}};
--font-size-h2: {{H2_SIZE}};
--font-size-body: {{BODY_SIZE}};
--font-size-caption: {{CAPTION_SIZE}};

/* Border Radius */
--radius-sm: {{RADIUS_SM}};
--radius-md: {{RADIUS_MD}};
--radius-lg: {{RADIUS_LG}};
--radius-full: 9999px;

/* Shadows */
--shadow-sm: {{SHADOW_SM}};
--shadow-md: {{SHADOW_MD}};
--shadow-lg: {{SHADOW_LG}};
```

---

## Screen Specifications

### {{SCREEN_ID}}: {{SCREEN_NAME}}

**Section:** {{SECTION}}
**Priority:** {{PRIORITY}}

#### Layout

```
┌─────────────────────────────────────┐
│ Status Bar (system)                 │
├─────────────────────────────────────┤
│ Header                    h: 56px   │
│  ├─ Back button          44×44      │
│  └─ Title                centered   │
├─────────────────────────────────────┤
│ Content Area                        │
│  padding: 24px horizontal           │
│  padding: 16px top                  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Card                         │   │
│  │  padding: 24px               │   │
│  │  radius: 16px                │   │
│  │  shadow: --shadow-md         │   │
│  └─────────────────────────────┘   │
│                                     │
│  gap: 24px between cards            │
│                                     │
├─────────────────────────────────────┤
│ CTA Button                          │
│  margin: 24px from bottom           │
│  margin: 24px horizontal            │
│  height: 52px                       │
│  radius: 26px (pill)                │
└─────────────────────────────────────┘
```

#### Measurements

| Element | Property | Value |
|---------|----------|-------|
| Screen | Width | 375px (design), responsive |
| Header | Height | 56px |
| Header | Padding horizontal | 16px |
| Content | Padding horizontal | 24px |
| Content | Padding top | 16px |
| Card | Padding | 24px |
| Card | Border radius | 16px |
| Card | Gap between | 24px |
| CTA Button | Height | 52px |
| CTA Button | Border radius | 26px |
| CTA Button | Margin horizontal | 24px |
| CTA Button | Margin bottom | 40px (to safe area) |

#### Typography

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Header title | {{FONT}} | 18px | 600 | --color-text-primary |
| Card title | {{FONT}} | 20px | 700 | --color-text-primary |
| Card body | {{FONT}} | 15px | 400 | --color-text-secondary |
| CTA text | {{FONT}} | 16px | 500 | white |

#### States

**Loading State:**
- Show skeleton placeholders
- Skeleton color: --color-surface
- Shimmer animation: 1.5s linear, left to right

**Empty State:**
- Illustration: [asset path]
- Title: "{{EMPTY_TITLE}}"
- Body: "{{EMPTY_BODY}}"
- CTA: "{{EMPTY_CTA}}"

**Error State:**
- Illustration: [asset path]
- Title: "{{ERROR_TITLE}}"
- Body: "{{ERROR_BODY}}"
- CTA: "Try Again"

#### Data Requirements

| Field | Type | Source | Notes |
|-------|------|--------|-------|
| {{FIELD_1}} | string | API | Required |
| {{FIELD_2}} | number | API | Optional, format as currency |
| {{FIELD_3}} | date | API | Format: "MMM D, YYYY" |

---

## Component Specifications

### Button

**Variants:**

| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | --color-primary | white | none |
| Secondary | transparent | --color-primary | 1px --color-primary |
| Tertiary | transparent | --color-text-secondary | none |
| Destructive | --color-error | white | none |

**Sizes:**

| Size | Height | Padding H | Font Size | Radius |
|------|--------|-----------|-----------|--------|
| Small | 36px | 16px | 14px | 18px |
| Medium | 44px | 20px | 15px | 22px |
| Large | 52px | 24px | 16px | 26px |

**States:**

| State | Transform | Opacity | Duration |
|-------|-----------|---------|----------|
| Default | none | 1.0 | — |
| Hover | none | 0.9 | 150ms |
| Pressed | scale(0.97) | 1.0 | 100ms |
| Disabled | none | 0.5 | — |
| Loading | none | 1.0 | — |

**Loading indicator:** Spinner, 20px, white (on primary)

---

### Input Field

**Dimensions:**
- Height: 52px
- Padding horizontal: 16px
- Border radius: 12px
- Border: 1.5px solid --color-border

**States:**

| State | Border Color | Background | Label Color |
|-------|--------------|------------|-------------|
| Default | --color-border | --color-surface | --color-text-secondary |
| Focused | --color-primary | --color-surface | --color-primary |
| Error | --color-error | --color-error-light | --color-error |
| Disabled | --color-border | --color-surface-disabled | --color-text-disabled |

**Error message:**
- Font size: 13px
- Color: --color-error
- Margin top: 6px

---

### Card

**Default Card:**
- Background: white (--color-surface)
- Border radius: 16px
- Padding: 24px
- Shadow: --shadow-md

**Elevated Card:**
- Same as default
- Shadow: --shadow-lg

**Interactive Card:**
- Same as default
- Hover: shadow-lg, translateY(-2px)
- Active: shadow-sm, translateY(0)
- Transition: 200ms ease-out

---

## Animation Specifications

### Page Transitions

| Transition | Animation | Duration | Easing |
|------------|-----------|----------|--------|
| Push (forward) | Slide from right | 300ms | ease-out |
| Pop (back) | Slide to right | 250ms | ease-out |
| Modal present | Fade + scale from 95% | 200ms | spring |
| Modal dismiss | Fade out | 150ms | ease-in |

### Micro-interactions

| Interaction | Animation | Duration | Easing |
|-------------|-----------|----------|--------|
| Button press | scale(0.97) | 100ms | ease-out |
| Button release | scale(1.0) | 150ms | spring |
| Toggle | translate + color | 200ms | spring |
| Checkbox | scale pop | 150ms | spring |

### Loading

| Type | Animation | Duration | Notes |
|------|-----------|----------|-------|
| Skeleton | Shimmer left-to-right | 1500ms | Linear, loop |
| Spinner | Rotate 360° | 1000ms | Linear, loop |
| Progress | Width fill | 400ms | ease-out |

---

## API Contracts (Stubs)

### Screen: {{SCREEN_NAME}}

**Endpoint:** `GET /api/{{ENDPOINT}}`

**Response:**
```json
{
  "status": "success",
  "data": {
    "{{FIELD_1}}": "{{SAMPLE_VALUE_1}}",
    "{{FIELD_2}}": {{SAMPLE_VALUE_2}},
    "{{FIELD_3}}": "{{SAMPLE_VALUE_3}}"
  }
}
```

**Error Response:**
```json
{
  "status": "error",
  "code": "{{ERROR_CODE}}",
  "message": "{{ERROR_MESSAGE}}"
}
```

---

## Error Handling

### Error Types

| Error Code | User Message | Action |
|------------|--------------|--------|
| NETWORK_ERROR | "Check your connection" | Retry button |
| NOT_FOUND | "Content not available" | Back button |
| UNAUTHORIZED | "Please log in again" | Redirect to login |
| SERVER_ERROR | "Something went wrong" | Retry button |
| VALIDATION | [Field-specific] | Highlight field |

### Retry Behavior

- First retry: Immediate
- Second retry: 2s delay
- Third retry: 5s delay
- After 3 failures: Show persistent error state

---

## Platform-Specific Notes

### iOS

- Safe areas: Respect `safeAreaInsets`
- Status bar: Light content on dark headers
- Home indicator: Account for 34pt bottom inset
- Haptics: Use for button presses, success states

### Android

- Navigation bar: Account for system navigation
- Back button: Use system back, implement `onBackPressed`
- Material ripple: Use for touch feedback
- Edge-to-edge: Extend behind system bars

---

## Implementation Checklist

- [ ] Set up design tokens (CSS variables or equivalent)
- [ ] Implement base components (Button, Input, Card)
- [ ] Set up navigation with transitions
- [ ] Implement loading states
- [ ] Implement error states
- [ ] Implement empty states
- [ ] Add accessibility attributes
- [ ] Test on target devices
- [ ] Validate against design specs

---

*Generated by `/design-system handoff`*
