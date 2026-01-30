# Challenge Theming System

## Overview

Each Challenge in Motiv has its own visual identity, chosen by the creator. This allows creators to express their brand while maintaining app-level consistency for structure and interaction patterns.

---

## What Creators Can Customize

| Element | Customizable | Notes |
|---------|--------------|-------|
| Primary Color | Yes | From approved palette |
| Background Image | Yes | Header/hero area |
| Accent Font | Yes | For challenge title only |
| Secondary Color | No | Derived from primary |
| Layout Structure | No | Consistent across challenges |
| Component Behavior | No | Consistent interactions |

---

## Color Palette for Creators

Creators choose from a curated palette that ensures accessibility and visual harmony:

### Primary Colors (Creator Choice)

```json
{
  "challengeColors": {
    "purple": {
      "primary": "#7C3AED",
      "light": "#8B5CF6",
      "dark": "#6D28D9",
      "subtle": "#F5F3FF"
    },
    "pink": {
      "primary": "#EC4899",
      "light": "#F472B6",
      "dark": "#DB2777",
      "subtle": "#FDF2F8"
    },
    "blue": {
      "primary": "#3B82F6",
      "light": "#60A5FA",
      "dark": "#2563EB",
      "subtle": "#DBEAFE"
    },
    "teal": {
      "primary": "#14B8A6",
      "light": "#2DD4BF",
      "dark": "#0D9488",
      "subtle": "#CCFBF1"
    },
    "orange": {
      "primary": "#F97316",
      "light": "#FB923C",
      "dark": "#EA580C",
      "subtle": "#FFF7ED"
    },
    "green": {
      "primary": "#22C55E",
      "light": "#4ADE80",
      "dark": "#16A34A",
      "subtle": "#DCFCE7"
    },
    "red": {
      "primary": "#EF4444",
      "light": "#F87171",
      "dark": "#DC2626",
      "subtle": "#FEE2E2"
    },
    "indigo": {
      "primary": "#6366F1",
      "light": "#818CF8",
      "dark": "#4F46E5",
      "subtle": "#E0E7FF"
    }
  }
}
```

### Derived Colors (Auto-generated)

From the primary color, these are automatically derived:

| Token | Derivation | Usage |
|-------|------------|-------|
| `primary` | Creator's choice | Main accent, buttons, progress |
| `light` | Lightened 10% | Hover states |
| `dark` | Darkened 10% | Pressed states |
| `subtle` | 5% opacity on white | Backgrounds, cards |
| `onPrimary` | White or black | Text on primary (auto contrast) |

---

## Background Images

### Specifications

| Property | Value |
|----------|-------|
| Aspect Ratio | 16:9 (header) or full bleed |
| Min Resolution | 1080px wide |
| Format | JPG, PNG, WebP |
| Max File Size | 500KB (optimized) |

### Treatment

| Property | Value |
|----------|-------|
| Overlay | Gradient from transparent to bg color |
| Blur | Optional, 0-20px |
| Brightness | Auto-adjusted for text legibility |

### Safe Zones

```
┌─────────────────────────────────┐
│  [Back] [@creator]    [Profile] │  ← Status bar area
│                                 │
│         Challenge Title         │  ← Title safe zone
│         Jan 10 - Feb 20         │
│                                 │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← Gradient overlay
│████████████████████████████████│     begins here
└─────────────────────────────────┘
```

---

## Typography Customization

### Accent Font (Challenge Title Only)

Creators can choose from approved display fonts:

| Font | Style | Vibe |
|------|-------|------|
| Nunito | Rounded sans | Warm, friendly (default) |
| Poppins | Geometric sans | Modern, clean |
| Quicksand | Rounded sans | Light, optimistic |
| Playfair Display | Serif | Elegant, sophisticated |
| Montserrat | Sans | Bold, confident |

### Usage Rules

| Element | Font | Customizable |
|---------|------|--------------|
| Challenge Title | Accent font | Yes |
| Challenge Subtitle | Roboto | No |
| All other text | Roboto | No |
| Stats and numbers | Roboto | No |

---

## Challenge Screen Structure

### Header Area (Themed)

| Element | Applies Theme |
|---------|---------------|
| Background | Image or solid color |
| Creator badge | Primary color ring |
| Challenge title | Accent font |
| Date range | Standard (Roboto) |
| Status badge | Primary color |

### Content Area (Standard)

| Element | Styling |
|---------|---------|
| Reward display | Primary color for amounts |
| Progress bars | Primary color fill |
| Stats | Standard app styling |
| Cards | Standard app styling |
| Buttons | Primary = challenge color |

### Example Structure

```
┌─────────────────────────────────┐
│  THEMED HEADER                  │
│  ─────────────────────────────  │
│  [Creator] Nature Yoga Reset    │
│            Jan 10 - Feb 20      │
│                                 │
├─────────────────────────────────┤
│  STANDARD CONTENT               │
│  ─────────────────────────────  │
│  TOTAL MAXIMUM VALUE ⓘ         │
│        $83.67                   │
│                                 │
│  [$40]  [$1]  [$42.67 🔥]       │
│  Refund Reward Potential bonus  │
│                                 │
│  This week: Jan 18-24           │
│  ┌─────────┐ ┌─────────┐       │
│  │ 3/6 days│ │1,100 kJ │       │
│  └─────────┘ └─────────┘       │
└─────────────────────────────────┘
```

---

## Celebration Screens

Win and loss screens use the **dark celebration background** with theme accents:

### Win Screen

| Element | Styling |
|---------|---------|
| Background | `colors.celebration.background` |
| Confetti/Effects | Challenge primary color |
| "Completed" badge | Green success + challenge color |
| Creator message | Standard celebration text |
| Earnings display | White text, challenge color accents |

### Loss Screen

| Element | Styling |
|---------|---------|
| Background | `colors.celebration.background` |
| "Incomplete" badge | Muted red/pink |
| Creator message | Encouraging tone |
| Partial earnings | Standard display |

---

## Implementation

### Theme Object Structure

```json
{
  "challengeTheme": {
    "id": "nature-yoga-reset",
    "creator": "@doodle_cycles",
    "colors": {
      "primary": "#7C3AED",
      "light": "#8B5CF6",
      "dark": "#6D28D9",
      "subtle": "#F5F3FF",
      "onPrimary": "#FFFFFF"
    },
    "typography": {
      "accentFont": "Nunito"
    },
    "background": {
      "type": "image",
      "url": "https://...",
      "overlay": "gradient",
      "overlayOpacity": 0.6
    }
  }
}
```

### Applying Theme in Code

```typescript
// Pseudo-code for theme application
const ChallengeScreen = ({ theme }) => {
  return (
    <ThemeProvider value={theme}>
      {/* Header uses theme colors */}
      <ChallengeHeader
        backgroundColor={theme.colors.primary}
        backgroundImage={theme.background.url}
        accentFont={theme.typography.accentFont}
      />

      {/* Content uses theme for accents only */}
      <ChallengeContent>
        <ProgressBar fillColor={theme.colors.primary} />
        <Button variant="primary" color={theme.colors.primary} />
      </ChallengeContent>
    </ThemeProvider>
  )
}
```

---

## Validation Rules

### Color Contrast

| Requirement | Rule |
|-------------|------|
| Text on primary | Must meet WCAG AA (4.5:1) |
| Auto-selection | System picks white or black |
| Override | Not allowed |

### Image Requirements

| Check | Rule |
|-------|------|
| Dimensions | Min 1080px wide |
| Aspect | 16:9 or will be cropped |
| File size | Max 500KB |
| Format | JPG, PNG, WebP only |

### Font Pairing

| Rule | Reason |
|------|--------|
| Only title uses accent | Maintains readability |
| Body always Roboto | Consistency across app |
| Max 1 accent font | Prevents visual chaos |

---

## Creator Tools (Future)

### Preview Mode

- Live preview of theme choices
- Mobile and tablet preview
- Light/dark celebration preview

### Theme Presets

- Pre-made themes for quick setup
- "Calm", "Energetic", "Bold", etc.
- Seasonal themes

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial challenge theming system |
