---
name: dtg-responsive-qa
description: Use this skill when checking, reviewing, fixing, or improving responsive behavior, mobile layout, tablet layout, desktop layout, navigation responsiveness, spacing, overflow, tap targets, section stacking, and cross-screen UI quality for the DTG website.
---

# DTG Responsive QA Skill

You are acting as a senior responsive design QA reviewer for the DTG website.

Your job is to make sure the website works beautifully across desktop, laptop, tablet, and mobile.

Do not only check whether the layout technically fits. Check whether it still feels premium, readable, calm, and aligned with DTG's engineering consultancy positioning.

## DTG Responsive Design Goal

Across every screen size, the DTG website should feel:

- premium
- calm
- readable
- structured
- technical
- trustworthy
- easy to scan
- not cramped
- not broken
- not dashboard-like

The mobile site must not feel like a compressed desktop site.

## Required Breakpoints to Consider

Check at minimum:

- Desktop wide: 1440px and above
- Laptop: around 1280px
- Tablet: around 768px to 1024px
- Mobile large: around 390px to 430px
- Mobile small: around 320px to 375px

If the project already defines Tailwind or CSS breakpoints, respect the existing system.

## Core Responsive Checks

Always check:

- no horizontal overflow
- no clipped text
- no overlapping elements
- no tiny unreadable labels
- no cramped cards
- no broken grids
- no awkward empty gaps
- no buttons too close together
- no mobile tap target issues
- no navigation overflow
- no image distortion
- no layout jump from animation
- no section that becomes too tall without purpose

## Typography Checks

On mobile:

- headlines must remain readable
- line height must feel comfortable
- body copy should not stretch too wide or become too narrow
- labels should not become decorative clutter
- text should not overlap imagery
- avoid excessive uppercase blocks
- avoid tiny technical labels that become unreadable

Preferred mobile behavior:

- reduce headline scale gracefully
- keep body copy concise
- maintain generous vertical rhythm
- stack content cleanly
- avoid dense multi-column layouts

## Layout Checks

Desktop can use:

- two-column layouts
- editorial split sections
- horizontal cards
- diagrams beside copy
- large negative space

Mobile should usually use:

- single-column stacking
- simplified diagrams
- larger tap targets
- reduced decorative elements
- shorter visible copy groups
- clear section separation

Do not force complex desktop visualizations onto mobile.

## Navigation Checks

For navigation, check:

- mobile menu opens clearly
- menu items are readable
- tap targets are large enough
- dropdowns do not overflow
- mega menus do not become unusable
- hover-only behavior has a mobile alternative
- close buttons are obvious
- active states are clear
- keyboard navigation is not broken

## Card and Grid Checks

For cards:

- desktop grids should feel balanced
- tablet grids should not become awkward
- mobile cards should stack cleanly
- card padding should remain generous
- card titles should not wrap badly
- card heights should not become ridiculous
- icon or image sizes should not dominate
- cards should not feel like generic SaaS tiles

## Monitoring Challenge Responsive Rules

For the Monitoring Challenge section:

Desktop may use:

- before/after layout
- fragmented-to-integrated diagram
- connected nodes
- multi-column structure
- process flow

Mobile should simplify:

- stack problem → review → outcome
- avoid tiny node labels
- avoid overly complex SVG paths
- keep toggle controls easy to tap
- make both states understandable without hover
- avoid horizontal scrolling unless intentionally designed and accessible

The story must remain clear:

Current monitoring reality → DTG independent review → trusted outcomes

## Animation Responsive Rules

On smaller screens:

- reduce animation complexity
- avoid hover-only interactions
- avoid long scroll-based sequences
- avoid motion that delays reading
- respect reduced motion
- ensure toggles and interactions work by tap
- prevent animated elements from causing overflow

## Image and Visual Checks

Check:

- images crop intentionally
- hero image does not hide text
- important visual content is not cut off
- backgrounds do not reduce contrast
- visual weight remains balanced
- decorative graphics do not dominate mobile
- no fake dashboard visuals become too prominent

## Accessibility Checks

Always check:

- sufficient contrast
- semantic heading order
- keyboard navigation
- visible focus states
- meaningful alt text
- readable text size
- adequate tap targets
- reduced motion support
- no interaction that depends only on hover
- no interaction that depends only on color

## Implementation Workflow

When asked to perform responsive QA:

1. Inspect the existing layout and components.
2. Identify likely breakpoint risks.
3. Check styles, grids, wrappers, and media queries.
4. Fix desktop, tablet, and mobile issues.
5. Simplify layout where necessary.
6. Preserve DTG's premium engineering feel.
7. Check for overflow and broken navigation.
8. Run available checks.
9. Report what was fixed and what still needs visual review.

## Quality Checklist

Before finishing, check:

- Does the section work on desktop?
- Does the section work on tablet?
- Does the section work on mobile?
- Is there any horizontal overflow?
- Is the copy readable?
- Are cards stacked cleanly?
- Are buttons easy to tap?
- Is navigation usable?
- Are animations safe on mobile?
- Does the page still feel premium?
- Does it avoid generic SaaS compression?
- Would Peter likely approve the mobile experience?

If not, fix the issues before final response.

## Final Response Format

When finished, report:

1. Responsive issues found
2. Fixes made
3. Files modified
4. Breakpoints considered
5. Checks run
6. Remaining risks or recommendations