# Large Screen Adaptations

## Overview

This document defines how the design system adapts to tablets, laptops, and desktop monitors. Large screens offer more space but also require different interaction patterns (mouse/keyboard vs touch).

---

## Screen Size Definitions

### Breakpoints

| Category | Width Range | Examples |
|----------|-------------|----------|
| Large tablet | 900-1199px | iPad Pro landscape, Android tablets |
| Desktop | 1200-1535px | Laptops, small monitors |
| Large desktop | 1536px+ | Desktop monitors, large displays |

### Content Behavior

| Width | Max Content Width | Columns |
|-------|-------------------|---------|
| 900-1199px | 900px | 12 |
| 1200-1535px | 1200px | 12 |
| 1536px+ | 1400px | 12 |

---

## Layout Patterns

### Two-Pane Layouts

**Master-Detail (List-Detail):**

```
┌─────────────┬───────────────────────────────────┐
│             │                                   │
│    List     │            Detail                 │
│  (320-400)  │           (flexible)              │
│             │                                   │
└─────────────┴───────────────────────────────────┘
```

- List: Fixed width 320-400px
- Detail: Fills remaining space
- Selection state visible in list

**Sidebar Navigation:**

```
┌──────────┬────────────────────────────────────────┐
│          │                                        │
│  Nav     │              Content                   │
│ (72-280) │                                        │
│          │                                        │
└──────────┴────────────────────────────────────────┘
```

- Collapsed rail: 72px
- Expanded sidebar: 280px
- Toggle or hover to expand

### Three-Pane Layouts

```
┌────────┬──────────────┬─────────────────────────┐
│        │              │                         │
│  Nav   │    List      │        Detail           │
│ (72)   │   (320)      │       (flexible)        │
│        │              │                         │
└────────┴──────────────┴─────────────────────────┘
```

Used for email clients, file managers, complex apps.

### Content Grid

```
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │ │  Card   │ │  Card   │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│  Card   │ │  Card   │ │  Card   │ │  Card   │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

- 3-4 columns on desktop
- Auto-fit with min-width
- Equal spacing

---

## Navigation Adaptations

### From Mobile to Desktop

| Mobile | Desktop |
|--------|---------|
| Bottom tab bar | Sidebar or top navigation |
| Hamburger menu | Persistent sidebar |
| Full-screen modals | Overlay modals |
| Swipe gestures | Click/keyboard |

### Sidebar Navigation

| State | Width | Content |
|-------|-------|---------|
| Collapsed (rail) | 72px | Icons only |
| Expanded | 280px | Icons + labels |

**Behavior:**
- Click to expand/collapse
- Hover to temporarily expand (optional)
- Remember state per user

### Top Navigation

```
┌─────────────────────────────────────────────────────────────┐
│ Logo    Nav Item    Nav Item    Nav Item         [Search]   │
└─────────────────────────────────────────────────────────────┘
```

- Use for apps with fewer top-level sections
- Combine with contextual sidebar for subsections

### Breadcrumbs

```
Home > Products > Category > Item
```

- Show hierarchy for deep navigation
- Truncate middle items if too long
- Current page is not a link

---

## Component Adaptations

### Buttons

| Property | Mobile | Desktop |
|----------|--------|---------|
| Height | 48px | 40px (may reduce) |
| Min width | 120px | 80-120px |
| Touch target | 48x48px | 32x32px min |

Hover states become important on desktop.

### Modals & Dialogs

| Mobile | Desktop |
|--------|---------|
| Full screen | Centered, max 560-640px wide |
| Sheet from bottom | Centered overlay |
| No backdrop click dismiss | Backdrop click dismisses |

**Desktop modal specs:**

| Property | Value |
|----------|-------|
| Max width | 560px (small), 840px (large) |
| Border radius | 12-16px |
| Backdrop | 50% black |
| Position | Centered, slight top offset |

### Popovers & Dropdowns

- Appear near trigger (not full screen)
- Max height with scroll if needed
- Click outside to dismiss
- Support keyboard navigation

### Tables

Full tables work on desktop:

| Mobile | Desktop |
|--------|---------|
| Card per row | Traditional table |
| Hide columns | Show all columns |
| Horizontal scroll | Visible without scroll |

**Table specifications:**

| Property | Value |
|----------|-------|
| Row height | 52px min |
| Cell padding | 16px horizontal |
| Header | Sticky, sortable |
| Zebra striping | Optional |

### Forms

| Mobile | Desktop |
|--------|---------|
| Single column | May use 2+ columns |
| Full width inputs | Max width ~400px |
| Labels above | Labels may be inline |

**Multi-column form:**

```
┌─────────────────┐  ┌─────────────────┐
│ First Name      │  │ Last Name       │
└─────────────────┘  └─────────────────┘
┌─────────────────────────────────────────┐
│ Email Address                           │
└─────────────────────────────────────────┘
```

---

## Interaction Changes

### Mouse/Pointer

| Pattern | Implementation |
|---------|----------------|
| Hover | Show hover states on all interactive elements |
| Right-click | Context menu (where appropriate) |
| Double-click | Quick action (where appropriate) |
| Drag & drop | Reorder, file upload, etc. |
| Scroll | Smooth scroll, scrollbar visible |

### Keyboard

| Pattern | Keys |
|---------|------|
| Navigation | Tab, Shift+Tab |
| Selection | Enter, Space |
| Cancel/Close | Escape |
| Shortcuts | Cmd/Ctrl + Key |

**Common keyboard shortcuts:**

| Action | Mac | Windows |
|--------|-----|---------|
| Save | ⌘S | Ctrl+S |
| Search | ⌘K or ⌘F | Ctrl+K or Ctrl+F |
| New | ⌘N | Ctrl+N |
| Undo | ⌘Z | Ctrl+Z |
| Select all | ⌘A | Ctrl+A |

### Focus States

More visible on desktop since keyboard navigation is common:

| Property | Value |
|----------|-------|
| Focus ring | 2px solid [brand color] |
| Offset | 2-4px |
| Visible | Always for keyboard users |

---

## Spacing Adjustments

### Scale Factor

May increase spacing by 1.25x on large screens:

| Token | Mobile | Desktop |
|-------|--------|---------|
| spacing.md | 16px | 20px |
| spacing.lg | 24px | 30px |
| spacing.xl | 32px | 40px |

### Page Margins

| Screen Size | Margin |
|-------------|--------|
| 900-1199px | 32px |
| 1200-1535px | 48px |
| 1536px+ | 64px |

Or percentage-based with max content width.

---

## Typography Adjustments

### Optional Size Increases

| Style | Mobile | Desktop |
|-------|--------|---------|
| display-large | 36px | 48-60px |
| display-medium | 28px | 36-44px |
| heading-1 | 24px | 28-32px |
| body | 16px | 16px (no change) |

### Line Length

Maintain optimal reading width:

| Content Type | Max Width |
|--------------|-----------|
| Body text | 65ch (~720px) |
| Wider content | 900px |
| Full bleed | 100% |

---

## Window Management

### Resizable Windows

Support graceful resizing:
- Define minimum window size (e.g., 320x480)
- Test at all sizes between min and max
- Content reflows without breaking

### Multi-Window

If app supports multiple windows:
- Each window independent
- Sync state between windows
- Handle window focus changes

### Browser Considerations

- Respect viewport width
- Handle scrollbar width (15-17px on some systems)
- Support zoom (up to 200%)

---

## Performance Considerations

### Larger Viewports

- May show more content = more data to load
- Implement virtualization for long lists
- Lazy load off-screen content
- Optimize image sizes for display density

### Display Density

| Density | Consideration |
|---------|---------------|
| 1x | Standard assets |
| 2x (Retina) | @2x images, vector graphics |
| 3x (high-end) | @3x images where needed |

---

## Tablet-Specific

### Touch + Keyboard

Tablets may have both:
- Keep touch targets large enough
- Add hover states for trackpad/mouse
- Support keyboard when connected

### Orientation

| Orientation | Layout |
|-------------|--------|
| Portrait | May use phone-like layout |
| Landscape | Use two-pane layouts |

### Split Screen

Support OS-level split screen:
- App at 1/2, 1/3, 2/3 width
- Adapt layout at each size
- Don't assume full screen

---

## Desktop Apps (Electron, etc.)

### Native Window Controls

| Platform | Control Position |
|----------|-----------------|
| macOS | Top left |
| Windows | Top right |
| Linux | Top right (usually) |

### Menu Bar

Consider native menu bar for:
- File operations
- Edit actions (undo, redo, cut, copy, paste)
- View options
- Help

### Tray/Dock

- Minimize to tray option
- Badge for notifications
- Quick actions in context menu

---

## Testing Checklist

### Breakpoints

- [ ] 900px (tablet landscape)
- [ ] 1024px (small laptop)
- [ ] 1280px (laptop)
- [ ] 1440px (large laptop)
- [ ] 1920px (desktop)
- [ ] 2560px (large monitor)

### Interactions

- [ ] Hover states visible
- [ ] Right-click menus work
- [ ] Keyboard navigation complete
- [ ] Shortcuts functional
- [ ] Drag and drop works

### Layouts

- [ ] Two-pane layouts work
- [ ] Content max-width respected
- [ ] Modals properly sized
- [ ] Tables fully visible
- [ ] Forms well-structured

---

## Changelog

| Version | Changes |
|---------|---------|
| 1.0 | Initial definition |
