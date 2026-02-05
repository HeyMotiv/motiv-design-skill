# Edge Cases Checklist: {{PRODUCT_NAME}}

> Use this checklist to ensure all edge cases are considered and designed.
> Mark items as they are addressed.

---

## System States

### Connectivity

- [ ] **Offline Mode**
  - What happens when the user loses connection?
  - Can they continue using cached data?
  - How do we communicate offline status?
  - What actions are disabled?

- [ ] **Slow Connection**
  - Loading states for slow data fetches
  - Timeout handling
  - Retry mechanisms

- [ ] **Connection Restored**
  - How do we sync pending actions?
  - Do we notify the user?

### Permissions

- [ ] **Camera Permission**
  - Request flow
  - Denied state
  - Settings redirect

- [ ] **Notifications Permission**
  - Request flow
  - Denied state
  - Value proposition before asking

- [ ] **Location Permission**
  - Request flow
  - Denied state
  - Approximate vs precise

- [ ] **Contacts/Photos Access**
  - Request flow
  - Denied state
  - Privacy explanation

### App States

- [ ] **First Launch**
  - Fresh install experience
  - Onboarding flow
  - Default states

- [ ] **Return Visit**
  - Remembered state
  - "Welcome back" patterns
  - Resuming in-progress tasks

- [ ] **Force Update Required**
  - Blocking update screen
  - Explanation of why
  - App store redirect

- [ ] **Maintenance Mode**
  - Scheduled maintenance message
  - Expected return time
  - Contact information

---

## Error States

### Authentication Errors

- [ ] **Invalid Credentials**
  - Clear error message
  - Retry flow
  - Password reset prompt

- [ ] **Session Expired**
  - Re-authentication flow
  - Preserve user context
  - Explanation

- [ ] **Account Locked**
  - Reason explanation
  - Unlock instructions
  - Support contact

- [ ] **Account Deleted/Suspended**
  - Clear explanation
  - Appeal process (if applicable)

### Data Errors

- [ ] **Failed to Load**
  - Retry button
  - Fallback content
  - Error explanation

- [ ] **Save Failed**
  - Data preservation
  - Retry mechanism
  - Draft saving

- [ ] **Sync Conflict**
  - Conflict resolution UI
  - Version comparison
  - User choice

### Payment Errors

- [ ] **Payment Declined**
  - Clear reason
  - Alternative payment methods
  - Retry flow

- [ ] **Subscription Expired**
  - Grace period handling
  - Renewal prompt
  - Feature degradation

---

## Empty States

### No Content Yet

- [ ] **First-Time Empty**
  - Encouraging message
  - Clear CTA to get started
  - Example/placeholder content

- [ ] **Search No Results**
  - Helpful suggestions
  - Spelling check
  - Alternative actions

- [ ] **Filtered No Results**
  - Clear filter option
  - Adjust filter suggestions

- [ ] **Deleted All Content**
  - Undo option (if applicable)
  - Fresh start message

---

## User-Specific States

### Account States

- [ ] **New User**
  - Onboarding assistance
  - Contextual tips
  - Getting started checklist

- [ ] **Power User**
  - Advanced features visible
  - Shortcuts available
  - Reduced hand-holding

- [ ] **Free vs Paid**
  - Feature gating
  - Upgrade prompts
  - Value demonstration

### Data Variations

- [ ] **Minimal Data**
  - Graceful handling of sparse profiles
  - Placeholder content
  - Encouragement to complete

- [ ] **Maximum Data**
  - Pagination/virtualization
  - Search/filter availability
  - Performance optimization

- [ ] **Edge Case Data**
  - Very long names/text
  - Special characters
  - Multiple languages
  - RTL text support

---

## Device & Platform

### Screen Sizes

- [ ] **Small Phones** (320px width)
  - Content still readable
  - Touch targets adequate
  - No horizontal scroll

- [ ] **Large Phones** (428px+ width)
  - Good use of space
  - Not stretched awkwardly

- [ ] **Tablets** (if supported)
  - Optimized layout
  - Multi-column where appropriate

### Accessibility

- [ ] **Screen Reader Support**
  - Semantic HTML
  - ARIA labels
  - Focus management

- [ ] **Reduced Motion**
  - Respects prefers-reduced-motion
  - Essential animations only

- [ ] **High Contrast**
  - Sufficient contrast ratios
  - Not relying on color alone

- [ ] **Large Text**
  - Respects system text size
  - Layout doesn't break

### Platform-Specific

- [ ] **iOS Considerations**
  - Safe areas (notch, home indicator)
  - Swipe gestures
  - Haptic feedback

- [ ] **Android Considerations**
  - Back button behavior
  - Material Design patterns
  - System navigation

---

## Onboarding & Guidance

### Tooltips & Coach Marks

- [ ] **First-Time Feature Introduction**
  - Non-blocking
  - Dismissible
  - Sequential (not overwhelming)

- [ ] **New Feature Announcement**
  - What's new highlights
  - Optional deep dive

- [ ] **Contextual Help**
  - ? icons for complex features
  - Expandable explanations

---

## Legal & Compliance

- [ ] **Terms of Service**
  - Accessible from app
  - Update notifications
  - Acceptance flow

- [ ] **Privacy Policy**
  - Accessible from app
  - Clear language version

- [ ] **Cookie Consent** (web)
  - Compliant banner
  - Preference management

- [ ] **Data Export/Deletion**
  - GDPR compliance
  - Request flow
  - Confirmation

---

## Notes

### Screens that handle edge cases well:
- [List screens that set good patterns]

### Edge cases needing custom design:
- [List edge cases that need special attention]

### Deferred for later:
- [List edge cases intentionally skipped for MVP]

---

*Generated by `/product-design plan`*
