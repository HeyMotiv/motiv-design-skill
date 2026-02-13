# Designer Allocation Plan

## Evaluation Criteria

| Factor | Weight | Description |
|--------|--------|-------------|
| **First Impression** | High | User's initial perception of quality |
| **Conversion Impact** | High | Directly affects sign-ups, joins, purchases |
| **Emotional Peak** | High | Celebration, disappointment, achievement moments |
| **Pattern-Setting** | Medium | Establishes reusable patterns for AI to follow |
| **Complexity** | Medium | Multiple states, interactions, edge cases |
| **Trust-Critical** | Medium | Payments, data, permissions |
| **Utility** | Low | Functional screens that just need to work |

---

## Recommended Allocation

### Designer A (Senior, Limited Time)
**Focus:** High-stakes moments, creative vision, pattern-setting

**Time estimate:** ~15-20 screens over 3 weeks

### Designer B (Junior, More Time)
**Focus:** Following established patterns, functional flows, variations

**Time estimate:** ~25-35 screens over 3 weeks

---

## Designer A: Priority Stack Rank

### Tier 1: Critical Path (Must Do First)

| Rank | Screen | Why Human-Critical |
|------|--------|-------------------|
| **1** | **Welcome Screen** | First impression. Sets entire brand tone. Already started but may need refinement. |
| **2** | **Challenge Detail (Pre-Join)** | Conversion screen. Must sell the challenge, build trust, drive action. Highest revenue impact. |
| **3** | **Active Challenge Dashboard** | Core daily experience. User sees this most. Already started but is the template for everything. |
| **4** | **Challenge Results - Winner** | Emotional peak. Celebration moment that drives sharing and retention. |
| **5** | **Creator Dashboard** | First impression for creators. Sets tone for their entire experience. |

### Tier 2: High-Impact Moments

| Rank | Screen | Why Human-Critical |
|------|--------|-------------------|
| **6** | **Challenge Results - Incomplete** | Delicate emotional moment. Must be encouraging, not defeating. Retention critical. |
| **7** | **Participant Onboarding - Personality Results** | Brand reveal moment. Already started. Sets expectation for quality. |
| **8** | **Create Challenge - Theme Selection** | Creative tool. Needs to feel fun and inspiring. Showcases the theming system. |
| **9** | **Create Challenge - Preview & Publish** | Creator's "ship it" moment. Needs to feel exciting and confident. |
| **10** | **Home Feed** | Daily landing spot. Content hierarchy, engagement hooks. |

### Tier 3: Pattern-Setting (If Time Allows)

| Rank | Screen | Why |
|------|--------|-----|
| **11** | **Discover Challenges** | Browse/search pattern. Sets template for lists. |
| **12** | **Weekly Stats Deep Dive** | Data visualization pattern. Complex but reusable. |
| **13** | **Earnings Dashboard** | Money screen. Trust + clarity critical. |

---

## Designer B: Priority Stack Rank

### Tier 1: Onboarding Flows (Week 1)

| Rank | Screen | Notes |
|------|--------|-------|
| **1** | **Sign Up - Method Selection** | Follow welcome screen patterns. Simple but polished. |
| **2** | **Sign Up - User Type Selection** | Two clear paths. Use card patterns from welcome. |
| **3** | **Login** | Standard but needs brand warmth. |
| **4** | **Participant Onboarding - Intro** | Value prop slides. Follow brand tone. |
| **5** | **Participant Onboarding - Goals** | Selection UI. Chip/tag patterns. |
| **6** | **Participant Onboarding - Motivation Quiz** | Already designed. May just need states. |
| **7** | **Participant Onboarding - Device Sync** | Critical functional step. |
| **8** | **Creator Onboarding - Intro** | Mirror participant but for creators. |
| **9** | **Creator Onboarding - Profile Setup** | Form patterns. |
| **10** | **Creator Onboarding - Brand Quiz** | Mirror motivation quiz. |

### Tier 2: Settings & Account (Week 2)

| Rank | Screen | Notes |
|------|--------|-------|
| **11** | **Settings Main** | List UI. Navigation hub. |
| **12** | **Device Sync - Main** | Connected devices list. Status indicators. |
| **13** | **Device Sync - Add Device** | App/service cards. OAuth flows. |
| **14** | **Payment Methods** | Card list. Trust indicators. |
| **15** | **Add Payment Method** | Stripe Elements integration. |
| **16** | **Profile - View** | User info display. |
| **17** | **Profile - Edit** | Form patterns. |
| **18** | **Notification Settings** | Toggle list. |

### Tier 3: Functional Flows (Week 3)

| Rank | Screen | Notes |
|------|--------|-------|
| **19** | **Cash Out Flow** | Money movement. Clear, trustworthy. |
| **20** | **Invite Friends** | Share patterns. Social hooks. |
| **21** | **Notifications List** | Activity feed pattern. |
| **22** | **Challenge History** | Past challenge cards. Filters. |
| **23** | **Forgot Password** | Simple recovery flow. |
| **24** | **Help & Support** | FAQ, contact patterns. |
| **25** | **Account Settings** | Danger zone (delete account). |

---

## AI Fill-In (After Human Designs)

Once designers complete their screens, AI can generate:

### From Designer A's Patterns:
- Challenge Detail variations (different states)
- All other results screens (partial win, etc.)
- Challenge management screens (follows dashboard patterns) — **Note:** Creator Collab Dashboard (C-MANAGE-001) already has AI-generated pre-live + live prototypes in `docs/examples/creator-collab-dashboard.html`
- Creator analytics (follows stats patterns)
- Empty/error states for all high-impact screens

### From Designer B's Patterns:
- All remaining onboarding screens
- All settings sub-screens
- All modal variations
- Loading/error states throughout
- Legal screens (Terms, Privacy)
- Remaining profile screens

---

## Timeline

### Week 1

| Designer A | Designer B |
|------------|------------|
| Welcome refinement | Sign Up flow (3 screens) |
| Challenge Detail (Pre-Join) | Login |
| Active Challenge Dashboard refinement | Participant Onboarding (7 screens) |

**End of Week 1 Checkpoint:** Review A's core screens, establish patterns for B.

### Week 2

| Designer A | Designer B |
|------------|------------|
| Challenge Results (Winner) | Creator Onboarding (4 screens) |
| Challenge Results (Incomplete) | Settings Main |
| Creator Dashboard | Device Sync (3 screens) |
| Personality Results refinement | Payment Methods (2 screens) |

**End of Week 2 Checkpoint:** All emotional peak moments done. Trust flows done.

### Week 3

| Designer A | Designer B |
|------------|------------|
| Create Challenge - Theme Selection | Profile screens (2) |
| Create Challenge - Preview | Cash Out flow |
| Home Feed | Invite Friends |
| Discover Challenges | Notifications |
| Weekly Stats (if time) | Help & Support |
|  | Account Settings |
|  | Forgot Password |

**End of Week 3:** Hand off to AI for fill-in.

---

## Handoff Checklist

Before AI fill-in begins, ensure designers provide:

- [ ] All screens in Figma (exportable)
- [ ] Component library matches design system tokens
- [ ] States documented (hover, pressed, disabled)
- [ ] Empty states designed (not just "no data")
- [ ] Error states designed (not just red text)
- [ ] Loading states designed (skeletons or spinners)
- [ ] Responsive notes (how it adapts)
- [ ] Motion notes (any specific animations)

---

## Screen Count Summary

| Assignee | Screens | % of Total |
|----------|---------|------------|
| Designer A | 13-15 | ~18% |
| Designer B | 25-28 | ~35% |
| AI Fill-In | 32-37 | ~47% |
| **Total** | **75** | 100% |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Designer A unavailable | B escalates to A's tier 2 items; AI fills more |
| Scope creep | Strict priority tiers; cut tier 3 if needed |
| Pattern inconsistency | Weekly syncs; shared Figma library |
| AI output quality | Designer review before implementation |

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Core flows designed | 100% of P0 screens |
| Design system compliance | 95%+ token usage |
| State coverage | All screens have 4+ states |
| Handoff readiness | Pass checklist above |
