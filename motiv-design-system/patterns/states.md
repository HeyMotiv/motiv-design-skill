# UI States

## Overview

This document defines the visual and behavioral states for all interactive elements in Motiv. Consistent state handling creates a predictable, trustworthy experience.

---

## Interactive Element States

### Standard States

Every interactive element should handle these states:

| State | Trigger | Purpose |
|-------|---------|---------|
| **Default** | No interaction | Normal appearance |
| **Hover** | Mouse over (desktop) | Indicates interactivity |
| **Focused** | Keyboard/tap focus | Accessibility indicator |
| **Pressed/Active** | During tap/click | Immediate feedback |
| **Disabled** | Cannot interact | Prevents action, explains why |
| **Loading** | Action in progress | Shows something is happening |

---

## State Specifications

### Hover State

*Desktop only — ignored on touch devices*

| Element | Hover Change |
|---------|--------------|
| Button (Primary) | Background lightens to #2D2D2D |
| Button (Secondary) | Background lightens to #6D28D9 |
| Button (Outline) | Light purple bg (#F5F3FF) |
| Card | Lift (translateY -2px), shadow increase |
| List item | Light gray bg (rgba(0,0,0,0.04)) |
| Link | Underline, color darken |

**Transition:** 150ms ease-out

### Focused State

*Keyboard navigation indicator*

| Property | Value |
|----------|-------|
| Focus ring | 2px solid #C4B5FD |
| Offset | 2px from element edge |
| Border radius | Match element's radius |

```css
:focus-visible {
  outline: 2px solid #C4B5FD;
  outline-offset: 2px;
}
```

### Pressed/Active State

| Element | Pressed Change |
|---------|----------------|
| Button | Scale 0.97, darker bg |
| Card | Scale 0.98, bg overlay |
| List item | Darker bg overlay |
| Checkbox | Immediate visual toggle |

**Transition:** 100ms ease-out (press), spring (release)

### Disabled State

| Property | Change |
|----------|--------|
| Opacity | 50% or specific muted color |
| Cursor | not-allowed (desktop) |
| Interaction | None (pointer-events: none) |
| Touch | Non-responsive |

**Important:** Always explain WHY something is disabled nearby.

### Loading State

| Element | Loading Behavior |
|---------|------------------|
| Button | Spinner replaces text, width locked |
| Card | Skeleton placeholder |
| Screen | Full skeleton or spinner |
| Pull-to-refresh | Spinner at top |

---

## Content States

### Empty State

When there's no content to display.

| Component | Requirement |
|-----------|-------------|
| Illustration | Optional, friendly graphic |
| Headline | Clear statement ("No challenges yet") |
| Description | Helpful context |
| Action | CTA to resolve ("Browse challenges") |

**Tone:** Encouraging, not blaming. "You haven't joined any challenges yet" not "No data found."

### Error State

When something goes wrong.

| Severity | Visual | Behavior |
|----------|--------|----------|
| Field error | Red border, error text below | Inline |
| Form error | Error banner at top | Scrolls into view |
| Screen error | Full error state | Retry button |
| Network error | Toast or banner | Auto-retry option |

**Error color:** #EF4444 (with #FEE2E2 background for banners)

### Success State

When an action completes successfully.

| Type | Visual | Duration |
|------|--------|----------|
| Inline | Green checkmark, success text | Persistent or 3s |
| Toast | Green toast, auto-dismiss | 3-5 seconds |
| Screen | Celebration screen | User dismisses |

**Success color:** #22C55E

### Loading State (Content)

While content is loading.

| Approach | When to Use |
|----------|-------------|
| Skeleton | Known content structure |
| Spinner | Unknown content, short wait |
| Progress | Known duration/percentage |
| Shimmer | Lists, cards, text blocks |

**Skeleton animation:** 1.5s pulse, subtle shimmer

---

## Form Field States

### Text Input States

| State | Border | Background | Label |
|-------|--------|------------|-------|
| Default | #E5E7EB | #FFFFFF | #6B7280 |
| Focused | #7C3AED | #FFFFFF | #7C3AED |
| Filled | #E5E7EB | #FFFFFF | #6B7280 |
| Error | #EF4444 | #FFFFFF | #EF4444 |
| Disabled | #E5E7EB | #F9FAFB | #9CA3AF |

### Checkbox States

| State | Visual |
|-------|--------|
| Unchecked | Gray border (#D1D5DB), empty |
| Checked | Purple fill (#7C3AED), white checkmark |
| Indeterminate | Purple fill, white dash |
| Focused | Purple focus ring |
| Disabled | Muted colors, 50% opacity |

### Toggle/Switch States

| State | Track | Thumb |
|-------|-------|-------|
| Off | Gray (#E5E7EB) | White |
| On | Purple (#7C3AED) | White |
| Disabled Off | Light gray | Light gray |
| Disabled On | Light purple | White |

---

## Challenge-Specific States

### Challenge Progress States

| State | Visual | Behavior |
|-------|--------|----------|
| Not started | Empty progress, muted | Show start date |
| In progress | Partial fill, active | Show remaining |
| Completed | Full fill, success color | Show result |
| Failed | Partial fill, muted | Show outcome |

### Challenge Result States

| Result | Background | Badge |
|--------|------------|-------|
| Winner | Dark celebration (#1E1B4B) | Green "Completed!" |
| Incomplete | Dark celebration (#1E1B4B) | Red "Incomplete" |

---

## Transition Guidelines

### State Transition Timing

| Transition | Duration | Easing |
|------------|----------|--------|
| Hover enter | 150ms | ease-out |
| Hover exit | 150ms | ease-out |
| Press | 100ms | ease-out |
| Release | — | spring (responsive) |
| Focus | instant | — |
| Loading start | 200ms | ease-out |
| Error appear | 200ms | ease-out |
| Success appear | 250ms | ease-out |

### Reduced Motion

When `prefers-reduced-motion` is enabled:
- Instant state changes (no animation)
- Keep color changes
- Remove transform animations

---

## Accessibility Requirements

### Focus Visibility

- Focus must be visible for keyboard users
- Focus ring must have sufficient contrast (3:1)
- Focus order must be logical

### State Communication

| State | Screen Reader Announcement |
|-------|---------------------------|
| Disabled | "dimmed" or "disabled" |
| Loading | "loading" or progress |
| Error | Error message read aloud |
| Success | Success message read aloud |
| Expanded | "expanded" / "collapsed" |
| Selected | "selected" |

### Color Independence

Never rely on color alone:
- Error: Red color + icon + text
- Success: Green color + checkmark + text
- Required: Asterisk + "required" label

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial states definition |
