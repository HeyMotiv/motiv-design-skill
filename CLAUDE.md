# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Claude Code Skill project** for design system extraction. It contains the `/design-system` skill that extracts implicit design systems from app screenshots and generates AI-readable specifications.

**This is not a traditional application codebase** — there is no build system, package manager, or test framework. The project is purely documentation and template-driven.

## Skill Commands

| Command | Purpose |
|---------|---------|
| `/design-system` | Full extraction workflow from screenshots |
| `/design-system update` | Add new screens and update existing system |
| `/design-system validate` | Check system for completeness and consistency |
| `/design-system edit [file]` | Edit specific design system file |
| `/design-system export [format]` | Export to other formats (CSS vars, Figma tokens) |

## Repository Structure

```
.claude/skills/design-system/     # Skill definition
├── SKILL.md                      # Main skill behavior and prompts
├── schemas/                      # JSON validation schemas
├── templates/                    # Output templates
└── examples/                     # Sample outputs

motiv-design-system/              # Generated example output
├── tokens/                       # JSON token files (colors, typography, spacing, etc.)
├── components/                   # Component specifications (Markdown)
├── patterns/                     # Design patterns (states, layout, responsive)
├── platforms/                    # Platform adaptations (iOS, Android, large-screen)
└── theming/                      # Dynamic theming system

PRD-ai-design-system-skill.md     # Product requirements document
```

## Design System Output Format

When generating design systems, follow these conventions:

**Tokens (JSON)**: Include value, description, usage hints, and state variants
```json
{
  "primary": {
    "value": "#2563EB",
    "description": "Primary brand color for main actions",
    "usage": ["button-primary-bg", "link-text"],
    "states": { "hover": "#1D4ED8", "pressed": "#1E40AF" }
  }
}
```

**Components (Markdown)**: Include specs table, all states (default, hover, pressed, focused, disabled, loading), behavior notes, and platform adaptations.

**Naming**: Use semantic names (text-primary, surface-elevated) not value-based names (gray-900, shadow-md).

## Key Workflow

1. **Input**: Screenshots (10-15 hero screens) + app context + platform preference
2. **Analysis**: Extract colors, typography, spacing, components, layout patterns
3. **Clarification**: Ask easy questions (A/B/C/D, Y/N, simple input) to resolve ambiguities
4. **Generation**: Create comprehensive design system files
5. **Adaptation**: Generate platform-specific rules (iOS, Android, large screen)

## Generated Example: Motiv

The `motiv-design-system/` directory contains a complete extracted design system for a fitness challenge app, demonstrating the full output format including:
- 14 theme palettes for challenge customization
- 75 documented screens across participant and creator flows
- Designer allocation plan (human vs. AI screen generation)
