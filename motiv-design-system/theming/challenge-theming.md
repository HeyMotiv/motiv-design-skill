# Challenge Theming System

## Overview

Each Challenge has its own visual identity. Creators choose a **color palette** and **accent font** — the system handles everything else for consistency and accessibility.

**Token file:** `challenge-theme-tokens.json`

---

## What Creators Choose

| Element | Options | Applied To |
|---------|---------|------------|
| **Color Palette** | 14 palettes | Buttons, progress, badges, accents |
| **Accent Font** | 7 fonts | Challenge title only |
| **Background Image** | Upload | Header area (optional) |

Everything else uses app defaults for consistency.

---

## Color System

### 3 Tones Per Palette

Each palette has exactly 3 colors with specific purposes:

| Tone | Purpose | Example (Violet) |
|------|---------|------------------|
| **Background** | Large surfaces, cards, subtle fills | `#F2F0F7` |
| **Emphasis** | Buttons, progress bars, interactive elements | `#7E6DA8` |
| **Text** | Text on light backgrounds | `#4E3D72` |

Plus `onEmphasis` (white or black) for text on emphasis-colored buttons.

### Available Palettes

| Palette | Background | Emphasis | Text | Best For |
|---------|------------|----------|------|----------|
| **Violet** | `#F2F0F7` | `#7E6DA8` | `#4E3D72` | Yoga, meditation, mindfulness |
| **Rose** | `#F7EFF1` | `#B86B78` | `#76303F` | Self-care, wellness, beauty |
| **Coral** | `#F7F0EB` | `#BC8464` | `#764D2C` | Fitness, movement, energy |
| **Amber** | `#F7F3EA` | `#BB9658` | `#6F5420` | Nutrition, cooking, lifestyle |
| **Lime** | `#F2F5EC` | `#7E9C4D` | `#4C6228` | High-intensity, outdoor |
| **Emerald** | `#ECF5F0` | `#4D9B7E` | `#2D6252` | Wellness, nature, recovery |
| **Teal** | `#ECF5F3` | `#4D9B92` | `#2D625B` | Swimming, water, calm |
| **Cyan** | `#ECF2F5` | `#4D909B` | `#2D5B62` | Tech-forward, data-focused |
| **Sky** | `#ECF1F5` | `#4A8099` | `#2C5568` | Running, outdoor, goals |
| **Blue** | `#EDF0F6` | `#5474AC` | `#2F4266` | Consistency, habits |
| **Indigo** | `#EFEEF6` | `#6663A5` | `#3E3B74` | Advanced, intensive |
| **Plum** | `#F4EEF6` | `#9E57A8` | `#6B2D72` | Premium, luxurious |
| **Slate** | `#F8FAFC` | `#64748B` | `#334155` | Neutral, versatile |
| **Stone** | `#FAFAF9` | `#78716C` | `#44403C` | Earthy, grounded, nature |

---

## Typography System

### 7 Accent Fonts

| Font | Style | Vibe | Best For |
|------|-------|------|----------|
| **Source Serif 4** | Modern serif | Warm, editorial | General wellness (default) |
| **Inter** | Geometric sans | Clean, modern | Data-focused, professional |
| **Poppins** | Geometric sans | Confident, bold | Fitness, energetic |
| **Source Sans 3** | Humanist sans | Readable, trustworthy | Instructional, long-form |
| **Merriweather** | Readable serif | Established, warm | Story-driven, educational |
| **Lora** | Calligraphic serif | Elegant, flowing | Yoga, self-care |
| **Playfair Display** | Display serif | Premium, editorial | Transformation, aspirational |

### Usage Rules

| Element | Font | Customizable |
|---------|------|--------------|
| Challenge Title | Creator's choice | ✅ Yes |
| Everything else | Roboto | ❌ No |

Only the title uses the accent font. This maintains readability while allowing brand expression.

---

## How Themes Apply

### Header Area (Themed)

```
┌─────────────────────────────────┐
│ Background: image OR emphasis   │
│ Title: accent font + text color │
│ Badge: emphasis color           │
│ Creator ring: emphasis color    │
└─────────────────────────────────┘
```

### Content Area (Theme Accents)

| Element | Color Used |
|---------|------------|
| Progress bar fill | Emphasis |
| Progress bar track | Background |
| Primary button | Emphasis bg + onEmphasis text |
| Secondary button | Emphasis border + emphasis text |
| Category badges | Background bg + text color |
| Links | Emphasis |
| Highlighted areas | Background |

### Celebration Screens

Always use the **dark celebration background** (`#1E1B4B`) from app tokens, with the challenge's emphasis color for confetti and accents.

---

## Presets (Quick Setup)

Pre-made combinations for creators who want to get started fast:

| Preset | Color | Font | Vibe |
|--------|-------|------|------|
| **Calm & Centered** | Violet | Lora | Peaceful, meditative |
| **High Energy** | Coral | Poppins | Bold, active |
| **Fresh Start** | Emerald | Source Serif 4 | Refreshing, new |
| **Premium Journey** | Indigo | Playfair | Refined, transformative |
| **Sunny Days** | Amber | Source Sans | Warm, cheerful |
| **Ocean Breeze** | Teal | Inter | Cool, focused |
| **In Bloom** | Rose | Merriweather | Nurturing, supportive |

---

## Implementation

### Theme Object

```json
{
  "challengeTheme": {
    "colorId": "violet",
    "fontId": "lora",
    "backgroundImage": "https://..."
  }
}
```

### Resolved Theme

```json
{
  "colors": {
    "background": "#F2F0F7",
    "emphasis": "#7E6DA8",
    "text": "#4E3D72",
    "onEmphasis": "#FFFFFF"
  },
  "typography": {
    "titleFont": "Lora, serif",
    "titleWeight": 600
  }
}
```

### Usage in Components

```typescript
// Button uses emphasis for background
<Button
  bg={theme.colors.emphasis}
  color={theme.colors.onEmphasis}
/>

// Progress bar uses both
<ProgressBar
  track={theme.colors.background}
  fill={theme.colors.emphasis}
/>

// Badges use background + text
<Badge
  bg={theme.colors.background}
  color={theme.colors.text}
/>

// Title uses accent font
<Title
  fontFamily={theme.typography.titleFont}
  color={theme.colors.text}
/>
```

---

## Validation

All palettes are pre-validated:

| Check | Status |
|-------|--------|
| Text on background | ✅ WCAG AA (4.5:1+) |
| onEmphasis on emphasis | ✅ WCAG AA large text (3:1+) |
| Font loading | ✅ Google Fonts CDN |
| Fallback fonts | ✅ System fonts defined |

Creators cannot break accessibility — the system enforces it.

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.2 | Muted all emphasis colors (~35–42% saturation) to align with brand palette |
| 1.1 | Simplified to 3-tone color system, 7 curated fonts |
| 1.0 | Initial challenge theming system |
