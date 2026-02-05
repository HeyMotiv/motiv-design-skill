---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
argument-hint: [description or 'with-system' to use design system context]
origin: Forked from anthropics/claude-code frontend-design plugin
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Integration with Design System

When invoked with `with-system` or when a design system exists in the project:

1. **Locate design system**: Look for `*-design-system/` or `design-system/` directories
2. **Load tokens**: Read `tokens/colors.json`, `tokens/typography.json`, `tokens/spacing.json`, etc.
3. **Load components**: Read component specs from `components/` directory
4. **Apply constraints**: Use design system values instead of generating new ones

**When design system exists, you MUST:**
- Use exact color tokens (no approximations)
- Follow typography scale precisely
- Apply spacing tokens consistently
- Match component patterns from specs
- Follow motion guidelines from `tokens/motion.json`

**Creative latitude within constraints:**
- Layout composition (how elements are arranged)
- Visual hierarchy emphasis
- Micro-interaction timing (within motion guidelines)
- Content presentation
- Atmospheric effects that complement the palette

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.
- **Constraints**: Technical requirements (framework, performance, accessibility). **If design system exists, this is your primary constraint.**
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font. **Exception: If design system specifies fonts, use those.**
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. **Exception: If design system specifies colors, use those as your palette.**
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

Remember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.

---

## Screen Generation Mode

When called from `/design-system test` or `/product-design generate`, additional context will be provided:

### Expected Inputs

```
SCREEN: [screen-id]
NAME: [screen-name]
SECTION: [section-name]

DESIGN SYSTEM:
[tokens and component specs will be included]

SCREEN SPEC:
- Purpose: [functional purpose]
- Emotional Intent: [how user should feel]
- Entry Context: [where user comes from]
- Components: [list of components needed]
- States: [default, loading, empty, error, etc.]

REFERENCE SCREENS (if available):
[human-designed screens for pattern reference]
```

### Output Format

Generate a single, self-contained HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Screen Name]</title>
    <style>
        /* Design system tokens as CSS variables */
        :root {
            --color-primary: [from tokens];
            --color-background: [from tokens];
            /* ... */
        }

        /* Component styles */
        /* ... */

        /* Screen-specific styles */
        /* ... */
    </style>
</head>
<body>
    <!-- Screen content -->

    <!-- States (hidden by default, toggle via data attributes or JS) -->
    <div class="state-loading" hidden>...</div>
    <div class="state-empty" hidden>...</div>
    <div class="state-error" hidden>...</div>
</body>
</html>
```

### Quality Checklist

Before returning, verify:
- [ ] Uses design system tokens (not hardcoded values)
- [ ] Matches emotional intent from screen spec
- [ ] All required states are implemented
- [ ] Mobile-first (375px viewport)
- [ ] Typography hierarchy is clear
- [ ] Interactive elements have hover/focus states
- [ ] Accessible (semantic HTML, sufficient contrast)

---

## Customization Notes

This is a local fork of the official `frontend-design` skill from [anthropics/claude-code](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md).

**Local modifications:**
- Added design system integration section
- Added screen generation mode for `/design-system test` and `/product-design generate`
- Added output format spec for standalone HTML files
- Added quality checklist

**To sync with upstream:**
```bash
gh api repos/anthropics/claude-code/contents/plugins/frontend-design/skills/frontend-design/SKILL.md --jq '.content' | base64 -d
```

**Future customization ideas:**
- Add project-specific aesthetic guidelines
- Add component library integration
- Add framework-specific templates (React, Vue, etc.)
