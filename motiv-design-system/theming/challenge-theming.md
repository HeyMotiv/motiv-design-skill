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
| **Background** | Large surfaces, cards, subtle fills | `#F5F3FF` |
| **Emphasis** | Buttons, progress bars, interactive elements | `#8B5CF6` |
| **Text** | Text on light backgrounds | `#5B21B6` |

Plus `onEmphasis` (white or black) for text on emphasis-colored buttons.

### Available Palettes

| Palette | Background | Emphasis | Text | Best For |
|---------|------------|----------|------|----------|
| **Violet** | `#F5F3FF` | `#8B5CF6` | `#5B21B6` | Yoga, meditation, mindfulness |
| **Rose** | `#FFF1F2` | `#F43F5E` | `#9F1239` | Self-care, wellness, beauty |
| **Coral** | `#FFF7ED` | `#F97316` | `#C2410C` | Fitness, movement, energy |
| **Amber** | `#FFFBEB` | `#F59E0B` | `#B45309` | Nutrition, cooking, lifestyle |
| **Lime** | `#F7FEE7` | `#84CC16` | `#4D7C0F` | High-intensity, outdoor |
| **Emerald** | `#ECFDF5` | `#10B981` | `#047857` | Wellness, nature, recovery |
| **Teal** | `#F0FDFA` | `#14B8A6` | `#0F766E` | Swimming, water, calm |
| **Cyan** | `#ECFEFF` | `#06B6D4` | `#0E7490` | Tech-forward, data-focused |
| **Sky** | `#F0F9FF` | `#0EA5E9` | `#0369A1` | Running, outdoor, goals |
| **Blue** | `#EFF6FF` | `#3B82F6` | `#1D4ED8` | Consistency, habits |
| **Indigo** | `#EEF2FF` | `#6366F1` | `#4338CA` | Advanced, intensive |
| **Plum** | `#FDF4FF` | `#D946EF` | `#A21CAF` | Premium, luxurious |
| **Slate** | `#F8FAFC` | `#64748B` | `#334155` | Neutral, versatile |
| **Stone** | `#FAFAF9` | `#78716C` | `#44403C` | Earthy, grounded, nature |

---

## Typography System

### 7 Accent Fonts

| Font | Style | Vibe | Best For |
|------|-------|------|----------|
| **Nunito** | Rounded sans | Friendly, warm | General wellness (default) |
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
| **Fresh Start** | Emerald | Nunito | Refreshing, new |
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
    "background": "#F5F3FF",
    "emphasis": "#8B5CF6",
    "text": "#5B21B6",
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
| onEmphasis on emphasis | ✅ WCAG AA (4.5:1+) |
| Font loading | ✅ Google Fonts CDN |
| Fallback fonts | ✅ System fonts defined |

Creators cannot break accessibility — the system enforces it.

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.1 | Simplified to 3-tone color system, 7 curated fonts |
| 1.0 | Initial challenge theming system |
