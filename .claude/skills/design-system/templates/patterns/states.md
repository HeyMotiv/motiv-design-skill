# UI States

## Overview

States communicate the status of UI elements to users. Consistent state patterns help users understand what's happening, what they can interact with, and what the results of their actions are.

---

## Interactive States

### Standard Interaction States

Every interactive element should support these states:

| State | Trigger | Purpose |
|-------|---------|---------|
| Default | Initial load | Normal appearance |
| Hover | Cursor over (desktop) | Indicates interactivity |
| Focused | Keyboard/tap focus | Accessibility indicator |
| Pressed/Active | During click/tap | Confirms interaction |
| Disabled | Element inactive | Prevents interaction |
| Loading | Async operation | Shows progress |

### State Specifications

#### Hover

```json
{
  "hover": {
    "trigger": "cursor enters element bounds",
    "platform": "desktop only (or touch-and-hold)",
    "visual": {
      "background": "darken 4% or add overlay",
      "cursor": "pointer",
      "transition": "150ms ease-out"
    }
  }
}
```

#### Focused

```json
{
  "focused": {
    "trigger": "keyboard navigation or programmatic focus",
    "visual": {
      "ring": "2px solid REPLACE",
      "ringOffset": "2px",
      "outline": "none (use custom ring)"
    },
    "accessibility": "MUST be visible for keyboard users"
  }
}
```

#### Pressed

```json
{
  "pressed": {
    "trigger": "mousedown/touchstart",
    "visual": {
      "background": "darken 8% or add overlay",
      "transform": "scale(0.97-0.99)",
      "transition": "100ms ease-out"
    },
    "duration": "hold during press, release on up"
  }
}
```

#### Disabled

```json
{
  "disabled": {
    "trigger": "disabled attribute or state",
    "visual": {
      "opacity": 0.5,
      "cursor": "not-allowed"
    },
    "behavior": {
      "clickable": false,
      "focusable": false,
      "tooltipAllowed": true
    }
  }
}
```

---

## Data States

### Empty State

When there's no content to display.

```
┌─────────────────────────────────┐
│                                 │
│           [Illustration]        │
│                                 │
│        No messages yet          │
│   Start a conversation to see   │
│      your messages here         │
│                                 │
│         [Primary Action]        │
│                                 │
└─────────────────────────────────┘
```

**Components:**
- Illustration (optional): Visual that matches empty context
- Title: Clear statement of empty state
- Description: Explains why empty and what to do
- Action (optional): CTA to resolve empty state

**Tokens:**
```json
{
  "emptyState": {
    "illustration": {
      "maxWidth": "200px",
      "marginBottom": "REPLACE"
    },
    "title": {
      "style": "typography.scale.heading-2",
      "color": "colors.text.primary"
    },
    "description": {
      "style": "typography.scale.body",
      "color": "colors.text.secondary",
      "maxWidth": "280px"
    }
  }
}
```

### Loading State

While content is being fetched.

**Patterns:**

| Pattern | Use Case |
|---------|----------|
| Skeleton | Known content structure |
| Spinner | Unknown content, short wait |
| Progress bar | Known duration/progress |
| Shimmer | List/grid loading |

**Skeleton Specifications:**

```json
{
  "skeleton": {
    "background": "REPLACE",
    "shimmerColor": "REPLACE",
    "animation": {
      "duration": "1500ms",
      "easing": "linear",
      "direction": "left to right"
    },
    "borderRadius": "same as content element"
  }
}
```

**Spinner Specifications:**

```json
{
  "spinner": {
    "sizes": {
      "small": "16px",
      "medium": "24px",
      "large": "40px"
    },
    "color": {
      "default": "colors.brand.primary",
      "onDark": "colors.text.inverse",
      "muted": "colors.text.secondary"
    },
    "animation": {
      "duration": "1000ms",
      "easing": "linear"
    }
  }
}
```

### Error State

When something goes wrong.

**Inline Error (Form Fields):**

```
Label
┌─────────────────────────────────┐
│ Invalid input                   │
└─────────────────────────────────┘
⚠ Please enter a valid email address
```

**Page-Level Error:**

```
┌─────────────────────────────────┐
│                                 │
│        [Error Illustration]     │
│                                 │
│      Something went wrong       │
│   We couldn't load your data.   │
│       Please try again.         │
│                                 │
│           [Retry]               │
│                                 │
└─────────────────────────────────┘
```

**Error Token:**

```json
{
  "error": {
    "color": "colors.semantic.error",
    "background": "colors.semantic.error.light",
    "border": "colors.semantic.error",
    "icon": "alert-circle or exclamation"
  }
}
```

### Success State

Confirmation of successful action.

**Inline Success:**
- Green checkmark icon
- Brief confirmation text
- Auto-dismiss after 3-5 seconds (optional)

**Toast/Snackbar:**

```
┌─────────────────────────────────┐
│ ✓  Changes saved successfully   │
└─────────────────────────────────┘
```

**Success Tokens:**

```json
{
  "success": {
    "color": "colors.semantic.success",
    "background": "colors.semantic.success.light",
    "icon": "checkmark-circle",
    "duration": "3000-5000ms auto-dismiss"
  }
}
```

---

## Selection States

### Single Selection

For radio buttons, tabs, segmented controls.

| State | Visual |
|-------|--------|
| Unselected | Default styling |
| Selected | Primary color indicator |
| Disabled | 50% opacity, unselectable |

### Multi Selection

For checkboxes, multi-select lists.

| State | Visual |
|-------|--------|
| Unchecked | Empty box/circle |
| Checked | Filled with checkmark |
| Indeterminate | Partial fill or minus |
| Disabled | 50% opacity |

### List Selection

```json
{
  "listSelection": {
    "single": {
      "background": "colors.brand.primary.subtle",
      "indicator": "left border or checkmark"
    },
    "multi": {
      "background": "colors.brand.primary.subtle",
      "indicator": "checkbox in leading position"
    }
  }
}
```

---

## Validation States

### Form Validation

| State | When | Visual |
|-------|------|--------|
| Neutral | Before interaction | Default border |
| Valid | Passes validation | Green border/icon (optional) |
| Invalid | Fails validation | Red border, error message |
| Warning | Needs attention | Yellow/orange indicator |

### Validation Timing

| Event | Action |
|-------|--------|
| On blur | Validate field |
| On submit | Validate all fields |
| On change | Clear existing error |
| Real-time | Only for critical fields |

### Validation Tokens

```json
{
  "validation": {
    "valid": {
      "borderColor": "colors.semantic.success",
      "icon": "checkmark",
      "iconColor": "colors.semantic.success"
    },
    "invalid": {
      "borderColor": "colors.semantic.error",
      "icon": "alert-circle",
      "iconColor": "colors.semantic.error",
      "messageColor": "colors.semantic.error"
    },
    "warning": {
      "borderColor": "colors.semantic.warning",
      "icon": "alert-triangle",
      "iconColor": "colors.semantic.warning"
    }
  }
}
```

---

## Connection States

### Online/Offline

```
┌─────────────────────────────────┐
│ ⚠ You're offline                │
│ Some features may be limited    │
└─────────────────────────────────┘
```

**Behavior:**
- Show banner when offline
- Disable actions that require connection
- Queue actions for sync when back online
- Auto-dismiss banner when reconnected

### Sync States

| State | Visual | Behavior |
|-------|--------|----------|
| Synced | Cloud checkmark | All data up to date |
| Syncing | Cloud with spinner | Upload/download in progress |
| Sync error | Cloud with X | Retry available |
| Pending | Cloud outline | Waiting to sync |

---

## Permission States

### Permission Required

```
┌─────────────────────────────────┐
│     [Camera Icon]               │
│                                 │
│   Camera access needed          │
│   To scan QR codes, allow       │
│   camera access in settings     │
│                                 │
│   [Open Settings]               │
└─────────────────────────────────┘
```

### Permission Denied

- Explain what the permission enables
- Provide path to enable (settings)
- Offer alternative if available

---

## Drag States

### Draggable Items

| State | Visual |
|-------|--------|
| Default | Normal appearance |
| Drag handle hover | Cursor: grab |
| Dragging | Lifted (shadow), cursor: grabbing |
| Drop target | Highlighted zone |
| Invalid drop | Red indicator |

### Drag Tokens

```json
{
  "drag": {
    "dragging": {
      "shadow": "shadows.elevation.high",
      "opacity": 0.9,
      "scale": 1.02
    },
    "dropTarget": {
      "background": "colors.brand.primary.subtle",
      "border": "2px dashed colors.brand.primary"
    },
    "invalidDrop": {
      "background": "colors.semantic.error.light"
    }
  }
}
```

---

## State Combinations

### Priority Order

When multiple states apply, use this priority:

1. **Disabled** (overrides all)
2. **Error** (validation)
3. **Loading**
4. **Selected/Active**
5. **Focused** (additive)
6. **Hover** (additive)
7. **Default**

### Combining States

- Focused + Hover: Show both (focus ring + hover bg)
- Selected + Disabled: Show selected but dimmed
- Error + Focused: Error styling + focus ring
- Loading + Disabled: Loading indicator, no interaction

---

## State Transitions

### Timing Guidelines

| Transition | Duration | Easing |
|------------|----------|--------|
| Hover in | 100-150ms | ease-out |
| Hover out | 100-150ms | ease-out |
| Focus in | 0ms (instant) | — |
| Focus out | 100ms | ease-out |
| Error appear | 150ms | ease-out |
| Loading appear | 150ms | ease-out |
| Success appear | 200ms | ease-out |
| Success dismiss | 200ms | ease-in |

### Animation Tokens

See `motion.json` for detailed animation specifications.

---

## Accessibility Requirements

### Visual Requirements

- Don't rely on color alone (use icons, text)
- Minimum contrast ratio for state changes
- Focus indicators always visible
- Error states clearly marked

### Screen Reader Requirements

- Announce state changes (aria-live)
- Disabled: use `disabled` attribute
- Invalid: use `aria-invalid` + `aria-describedby`
- Loading: use `aria-busy`
- Selected: use `aria-selected` or `aria-checked`

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
