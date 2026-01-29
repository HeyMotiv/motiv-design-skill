# PRD: AI Design System Extraction Skill

## Overview

A Claude Code skill that extracts an implicit design system from designer-provided screenshots, codifies it into AI-readable specifications, and generates adaptive rules for multiple platforms and screen sizes.

---

## Problem Statement

Designers often create hero screens based on intuition and aesthetic judgment, establishing an implicit design system that exists only in their mind. When scaling an app beyond these initial screens—or handing off to other designers—this implicit knowledge gets lost, leading to:

- Inconsistent implementations across screens
- Time-consuming back-and-forth to clarify design intent
- Difficulty scaling to other platforms (iOS ↔ Android) and form factors (phone → tablet → desktop)
- AI tools unable to generate consistent UI without explicit specifications

---

## Solution

A Claude Code skill (`/design-system`) that:

1. **Ingests** hero screen screenshots or Figma exports
2. **Analyzes** visual patterns to extract precise values
3. **Clarifies** ambiguities through structured, easy-to-answer questions
4. **Generates** a comprehensive, AI-optimized design system specification
5. **Adapts** the system for iOS and large screen formats
6. **Iterates** as new screens are added or refinements are made

---

## User Profile

| Attribute | Description |
|-----------|-------------|
| Role | Designer (solo or lead) |
| Tool | Figma |
| Input | 10-15 hero screens, 3-5 per flow |
| Platform | Usually Android-first |
| States | Happy path only (states need generation) |
| Handoff | Other designers, AI tools, developers |

---

## Workflow

### Phase 1: Input Collection

```
User provides:
├── Screenshots (PNG) or Figma file link
├── Brief context (app purpose, target audience)
└── Platform preference (Android/iOS first)
```

**Skill behavior:**
- Accept multiple image files
- Parse Figma exports if provided
- Catalog screens by flow (user can confirm/adjust grouping)

---

### Phase 2: Extraction & Analysis

The skill analyzes screenshots to extract:

| Category | Extracted Values |
|----------|------------------|
| **Colors** | Hex values, usage frequency, apparent semantic roles |
| **Typography** | Font families, sizes, weights, line heights |
| **Spacing** | Margins, padding, gaps (attempt to find consistent scale) |
| **Corners** | Border radius values per component type |
| **Shadows** | Elevation levels, blur, spread, color |
| **Components** | Buttons, cards, inputs, lists, navigation patterns |
| **Layout** | Grid structure, alignment patterns, safe areas |
| **Iconography** | Style (outlined/filled), sizes, stroke weights |

**Handling inconsistencies:**
- Flag variations (e.g., "Found 3 similar blacks: #1A1A1A, #1C1C1C, #222222")
- Propose consolidation (e.g., "Recommend standardizing to #1A1A1A")
- Present for user approval

---

### Phase 3: Clarification Questions

Questions are designed to be **fast to answer**:

#### Format Types

**Multiple Choice (A/B/C/D):**
```
Q: Which spacing scale feels right?
A) 4px base (4, 8, 12, 16, 24, 32, 48)
B) 8px base (8, 16, 24, 32, 48, 64)
C) Keep as extracted (varies)
```

**Yes/No:**
```
Q: Should buttons have consistent corner radius across all sizes?
→ Yes / No
```

**Simple Input:**
```
Q: What's the primary brand color name?
→ [user types: "Ocean Blue"]
```

**Approval:**
```
Q: Extracted typography scale:
   - H1: 32px/40px Bold
   - H2: 24px/32px Semibold
   - Body: 16px/24px Regular
   - Caption: 12px/16px Regular
→ Approve / Edit
```

#### Question Categories

1. **Normalization** - Resolving inconsistencies
2. **Semantics** - Naming tokens (primary, secondary, surface, etc.)
3. **Intent** - Understanding why certain choices were made
4. **States** - Defining hover, pressed, disabled, error, loading states
5. **Motion** - Animation preferences and timing
6. **Adaptation** - Platform-specific adjustments

---

### Phase 4: Output Generation

#### File Structure

```
design-system/
├── tokens/
│   ├── colors.json          # Color tokens with semantic names
│   ├── typography.json      # Type scale and styles
│   ├── spacing.json         # Spacing scale
│   ├── radii.json           # Corner radius tokens
│   ├── shadows.json         # Elevation/shadow tokens
│   └── motion.json          # Animation tokens
├── components/
│   ├── buttons.md           # Button specs and behaviors
│   ├── inputs.md            # Form input specs
│   ├── cards.md             # Card component specs
│   ├── navigation.md        # Nav patterns
│   └── [component].md       # Other identified components
├── patterns/
│   ├── layout.md            # Grid, spacing, alignment rules
│   ├── states.md            # State definitions (error, loading, empty)
│   ├── responsive.md        # Breakpoints and adaptation rules
│   └── accessibility.md     # A11y requirements
├── platforms/
│   ├── android.md           # Android-specific guidance
│   ├── ios.md               # iOS adaptations
│   └── large-screen.md      # Tablet/desktop adaptations
├── decisions.md             # Rationale log (why choices were made)
└── DESIGN-SYSTEM.md         # Human-readable overview
```

---

## Output Specifications

### Token Format (AI-Optimized)

Tokens use JSON with metadata for AI consumption:

```json
{
  "$schema": "design-tokens-v1",
  "colors": {
    "primary": {
      "value": "#2563EB",
      "description": "Primary brand color. Use for primary actions, active states, and key UI elements.",
      "usage": ["primary-button-bg", "active-tab", "links"],
      "contrast": {
        "onPrimary": "#FFFFFF",
        "wcagAAA": true
      },
      "variants": {
        "light": "#3B82F6",
        "dark": "#1D4ED8",
        "subtle": "#EFF6FF"
      }
    },
    "text": {
      "primary": {
        "value": "#1A1A1A",
        "description": "Primary text color. Use for headings and body text.",
        "usage": ["headings", "body-text", "labels"]
      },
      "secondary": {
        "value": "#6B7280",
        "description": "Secondary text color. Use for supporting text, timestamps, metadata.",
        "usage": ["captions", "timestamps", "helper-text"]
      }
    }
  }
}
```

### Component Format

Components include visual specs, behavior, and states:

```markdown
# Button

## Purpose
Triggers actions. Use for form submissions, navigation actions, and confirmations.

## Variants

| Variant | Use Case |
|---------|----------|
| Primary | Main action on screen (1 per view) |
| Secondary | Supporting actions |
| Tertiary | Low-emphasis actions, cancellations |
| Destructive | Delete, remove, irreversible actions |

## Specifications

### Primary Button

| Property | Value | Token |
|----------|-------|-------|
| Background | #2563EB | colors.primary |
| Text | #FFFFFF | colors.onPrimary |
| Font | 16px/Semibold | typography.button |
| Padding | 16px 24px | spacing.md spacing.lg |
| Corner Radius | 8px | radii.md |
| Min Width | 120px | — |
| Min Height | 48px | sizing.touch-target |

### States

| State | Changes | Transition |
|-------|---------|------------|
| Default | — | — |
| Hover | bg: #1D4ED8 | 150ms ease-out |
| Pressed | scale: 0.97, bg: #1E40AF | 100ms ease-out |
| Focused | ring: 2px #93C5FD offset 2px | instant |
| Disabled | opacity: 0.5, cursor: not-allowed | — |
| Loading | spinner replaces text, width locked | 200ms |

## Behavior

- **Tap target**: Minimum 48x48px touch area even if visual is smaller
- **Loading**: Maintain button width during loading to prevent layout shift
- **Haptics**: Light impact on press (iOS), subtle vibration (Android)
- **Debounce**: Prevent double-tap submissions (300ms lockout)

## Platform Adaptations

| Platform | Adjustment |
|----------|------------|
| iOS | Use SF Pro Semibold, system blur on pressed |
| Android | Use Roboto Medium, ripple effect on pressed |
| Large Screen | May use icon+text combo, min-width: 160px |
```

### Motion Specifications

Detailed animation specs with physics:

```json
{
  "motion": {
    "transitions": {
      "quick": {
        "duration": "150ms",
        "easing": "ease-out",
        "description": "Micro-interactions: hover, color changes"
      },
      "standard": {
        "duration": "250ms",
        "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
        "description": "Most UI transitions"
      },
      "emphasis": {
        "duration": "350ms",
        "easing": "cubic-bezier(0.4, 0, 0.2, 1)",
        "description": "Larger movements, modals, drawers"
      }
    },
    "springs": {
      "responsive": {
        "stiffness": 300,
        "damping": 30,
        "mass": 1,
        "description": "Snappy response for direct manipulation"
      },
      "gentle": {
        "stiffness": 150,
        "damping": 20,
        "mass": 1,
        "description": "Softer feel for decorative motion"
      },
      "bouncy": {
        "stiffness": 400,
        "damping": 15,
        "mass": 1,
        "description": "Playful bounce for success states"
      }
    },
    "gestures": {
      "swipe-to-dismiss": {
        "threshold": "40% of width",
        "velocity-threshold": "500px/s",
        "resistance": "0.5 after threshold",
        "snap-back": "springs.responsive"
      },
      "pull-to-refresh": {
        "trigger-distance": "80px",
        "max-distance": "120px",
        "resistance": "0.4",
        "indicator": "circular progress"
      }
    },
    "page-transitions": {
      "push": {
        "incoming": "translateX(100%) → translateX(0)",
        "outgoing": "translateX(0) → translateX(-30%)",
        "duration": "350ms",
        "easing": "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      "modal": {
        "incoming": "translateY(100%) → translateY(0)",
        "backdrop": "opacity 0 → 0.5",
        "duration": "300ms",
        "easing": "springs.responsive"
      }
    }
  }
}
```

### Adaptive Rules

Rules for platform and screen size adaptation:

```markdown
# Large Screen Adaptations

## Breakpoints

| Name | Width | Columns | Margins |
|------|-------|---------|---------|
| Phone | < 600px | 4 | 16px |
| Tablet | 600-1024px | 8 | 24px |
| Desktop | > 1024px | 12 | 32px |

## Layout Patterns

### Navigation
- Phone: Bottom tab bar
- Tablet: Side rail (72px collapsed)
- Desktop: Side navigation (280px expanded)

### Content Width
- Max content width: 720px for reading content
- Max container width: 1280px
- Center content with auto margins on large screens

### Density
- Touch targets remain 48px minimum on tablet
- Desktop may use 40px targets with mouse input
- Increase spacing.scale by 1.25x on desktop

## Component Adaptations

### Cards
- Phone: Full width, vertical stack
- Tablet: 2-column grid
- Desktop: 3-4 column grid, hover states visible

### Modals
- Phone: Full screen (sheet from bottom)
- Tablet: Centered, max 560px width
- Desktop: Centered, max 640px width, click-outside dismisses

### Forms
- Phone: Single column, full width inputs
- Tablet+: May use 2-column for related fields
- Labels: Above on phone, inline on desktop (optional)
```

---

## Iteration Support

### Adding New Screens

```
User: /design-system update
→ Provide new screenshots
→ Skill analyzes for:
   - New components not in system
   - Variations that need new tokens
   - Patterns that contradict existing rules
→ Proposes updates for approval
```

### Manual Refinement

```
User: /design-system edit tokens/colors.json
→ Opens colors.json for editing
→ User makes changes
→ Skill validates changes propagate correctly
→ Updates dependent files if needed
```

### Regeneration

```
User: /design-system regenerate components/buttons.md
→ Re-analyzes button instances in screenshots
→ Incorporates any token changes
→ Regenerates with fresh analysis
```

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Extraction accuracy | 90%+ values match Figma source |
| Question clarity | User answers in <10 seconds each |
| Completeness | All visible components documented |
| AI usability | Claude can generate new screens using only the output |
| Iteration speed | Updates complete in <2 minutes |

---

## Technical Requirements

### Skill Structure

```
.claude/skills/design-system/
├── SKILL.md                    # Main skill definition
├── prompts/
│   ├── extraction.md           # Image analysis prompt
│   ├── clarification.md        # Question generation prompt
│   └── generation.md           # Output generation prompt
├── templates/
│   ├── tokens/                 # Token file templates
│   ├── components/             # Component doc templates
│   └── patterns/               # Pattern doc templates
├── schemas/
│   ├── tokens.schema.json      # Token validation schema
│   └── components.schema.json  # Component doc schema
└── examples/
    └── sample-output/          # Example complete output
```

### Sub-Skills

| Command | Purpose |
|---------|---------|
| `/design-system` | Full extraction workflow |
| `/design-system update` | Add new screens, update system |
| `/design-system edit [file]` | Edit specific file |
| `/design-system validate` | Check system for completeness/consistency |
| `/design-system export [format]` | Export to other formats (Figma tokens, CSS vars, etc.) |

---

## Out of Scope (v1)

- Direct Figma API integration (manual export for now)
- Code generation (specs only, not implementation)
- Version control / diff tracking
- Multi-brand / theming support
- Automated screenshot capture

---

## Open Questions

1. Should the skill support voice/conversational input for answers, or text only?
2. Should there be a "confidence score" on extracted values?
3. Should the skill generate preview images showing the tokens in use?
4. Integration with existing design system formats (Style Dictionary, Tokens Studio)?

---

## Appendix: Sample Clarification Flow

```
CLAUDE: I've analyzed 12 screens across 3 flows. Let me confirm some findings.

COLORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Found 4 similar dark colors for text:
  A) #1A1A1A (used 23x)
  B) #1C1C1C (used 8x)
  C) #222222 (used 5x)
  D) #2C2C2C (used 2x)

→ Standardize to A (#1A1A1A)?  [Y/n]

USER: Y

CLAUDE: What should this color be called?
  A) text-primary
  B) gray-900
  C) black
  D) [custom]: ___

USER: A

SPACING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Detected spacing values: 4, 8, 10, 12, 16, 20, 24, 32, 40, 48

This doesn't follow a clean scale. Recommend normalizing to:
4, 8, 12, 16, 24, 32, 48 (remove 10, 20, 40)

→ Accept recommendation? [Y/n/edit]

USER: Y

MOTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
No motion visible in static screens. What's your preference?

  A) Snappy & minimal (100-200ms, ease-out)
  B) Smooth & fluid (200-350ms, custom curves)
  C) Playful & bouncy (springs, overshoot)
  D) Let me describe: ___

USER: B

...continues until all ambiguities resolved...
```

---

*Document version: 1.0*
*Last updated: 2025-01-29*
