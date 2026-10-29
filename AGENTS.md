# Portfolio UI Refinement — Agent Instructions

## Project Goal

Refine the existing personal portfolio of **Azizul Hakim**, a Junior Full-Stack Web Developer, into a polished, modern, visually distinctive, accessible, and responsive portfolio.

The existing portfolio layout and content are already established. Your job is to **improve the visual design, consistency, usability, and functionality without unnecessarily rebuilding or changing the existing structure**.

Work directly in the existing codebase. Inspect the current implementation first, then implement the improvements rather than merely proposing them.

---

## 1. Mandatory Working Rules

- Inspect the existing project structure, `package.json`, dependencies, components, stylesheets, assets, and configuration before making changes.
- Follow the installed versions of Next.js, React, Tailwind CSS, and other dependencies. Do not assume APIs or conventions from older versions.
- Read the relevant local Next.js documentation before writing code, as required by the Next.js agent rules at the bottom of this file.
- Reuse existing components and dependencies wherever practical.
- Do not unnecessarily replace the current architecture, routing, libraries, or styling approach.
- Preserve all existing sections, project information, social links, and written content unless a change is required for correctness or usability.
- Do not invent project features, professional experience, testimonials, statistics, or personal information.
- Never replace working functionality with decorative, nonfunctional UI.
- Avoid unnecessary dependencies, duplicated styles, excessive abstractions, and unrelated refactoring.
- Do not stop after producing a plan. Complete the applicable tasks, verify the results, and report any genuine blockers.
- Keep the implementation maintainable and suitable for a real developer portfolio.

---

## 2. Design Direction and Visual Identity

### Goal: Modern, Premium, and Memorable

Create a visually cohesive developer portfolio with a distinctive personal identity.

Use the existing layout as the foundation. Improve the visual presentation through typography, color, spacing, alignment, contrast, component styling, and subtle interactions.

### Design principles

- Maintain a clean, professional, minimal aesthetic.
- Preserve the current section order and overall layout.
- Use a consistent spacing system, border radius, border weight, and shadow style.
- Improve visual hierarchy so the name, professional title, featured projects, and primary actions are immediately recognizable.
- Use whitespace intentionally; avoid excessive empty space, cramped content, or unnecessarily tall sections.
- Keep decorative elements subtle and purposeful.
- Avoid excessive gradients, glassmorphism, glowing effects, oversized typography, and distracting animations.
- Ensure the website looks intentionally designed rather than like a generic template.
- Keep the interface attractive on both large and small screens.

### Signature color

Establish a recognizable **emerald green / teal signature color** that appears consistently throughout the portfolio.

Use it selectively for:

- Active navigation indicators.
- Primary buttons and important actions.
- Selected technology badges and icons.
- Small heading accents and decorative details.
- Focus indicators and interactive states.
- Project labels and subtle card accents.
- Links, hover states, and other meaningful highlights.

Pair the signature color with carefully selected neutral colors.

Do not apply the accent color indiscriminately. Maintain a clear distinction between primary, secondary, and decorative elements.

---

## 3. Create a Consistent Design Token System

Centralize the main design decisions instead of assigning unrelated colors and values throughout individual components.

Define or organize reusable tokens for:

- Primary and secondary backgrounds.
- Main text and muted text.
- Signature accent and accent hover colors.
- Card backgrounds.
- Borders and separators.
- Primary and secondary buttons.
- Focus rings.
- Shadows.
- Border radii.
- Spacing.
- Typography sizes and line heights.
- Transition durations.

Use the styling conventions supported by the installed project version.

If CSS variables are appropriate for the existing architecture, use them to define the design system and support light/dark themes.

Example conceptual tokens:

- `--background`
- `--foreground`
- `--muted-foreground`
- `--card`
- `--border`
- `--primary`
- `--primary-foreground`
- `--accent`
- `--focus-ring`

These names are examples, not a requirement to introduce a new styling framework.

**Important:** Every component must use the same design system. Avoid inconsistent shades of green, slightly different border colors, and arbitrary spacing values.

---

## 4. Typography and Font Setup

Choose and configure a modern, highly readable font combination suitable for a developer portfolio.

### Requirements

- Inspect the current typography and available dependencies first.
- Prefer a distinctive but professional sans-serif family for headings and body text.
- A complementary monospace font may be used sparingly for technical labels or code-inspired details.
- Prefer fonts available through the existing Next.js font system, such as `next/font/google` when appropriate, or locally hosted fonts if already available.
- Avoid introducing a font-loading dependency without a clear reason.
- Use the framework's supported font-loading approach to reduce layout shifts and unnecessary external requests.

### Typography hierarchy

Establish consistent styles for:

- Main hero heading.
- Section headings.
- Project titles.
- Card headings.
- Body descriptions.
- Navigation links.
- Technology badges.
- Button labels.
- Captions and metadata.

Use appropriate font weights, line heights, letter spacing, and responsive sizes.

Avoid text that is too small, excessively bold, difficult to read, or inconsistently aligned.

---

## 5. Refine the Existing Sections

Preserve the current information architecture while improving each section.

### A. Navigation

- Keep the existing brand mark and navigation links.
- Maintain clear active-section or active-route styling where appropriate.
- Improve alignment, spacing, readability, and interactive states.
- Keep the Resume action visually prominent without overpowering the rest of the navigation.
- Make the mobile navigation usable on narrow screens.
- Ensure all navigation links point to valid destinations.

### B. Hero Section

- Preserve the existing introduction, name, professional title, and descriptive text.
- Improve the visual relationship between the profile image and introduction.
- Use balanced proportions, clean alignment, and appropriate spacing.
- Keep the profile image correctly cropped and responsive.
- Style the technology or role labels consistently.
- Make GitHub, LinkedIn, and Email actions easy to identify and use.
- Maintain a clear visual hierarchy between the name, title, description, and actions.

Do not invent a new biography or replace the existing text with unsupported claims.

### C. Featured Projects

Preserve the existing project information and order unless there is a clear usability reason to adjust the presentation.

Improve the project cards with:

- Consistent image dimensions and aspect ratios.
- Appropriate image cropping using `object-fit`.
- Clear project titles and concise descriptions.
- Consistent technology badges.
- Clearly identifiable Live Demo and GitHub actions.
- Subtle borders, shadows, and hover states.
- Responsive card layouts.
- Proper alignment between images, descriptions, badges, and links.

Use actual project screenshots or existing assets whenever available.

Do not generate fake screenshots or represent an unverified feature as implemented.

For unavailable images, use a deliberate, visually consistent placeholder rather than a broken image.

Verify every project URL before treating it as a working link. If a demo or repository URL is unavailable, preserve the existing information and report the issue instead of inventing a destination.

### D. Technical Skills

- Preserve the existing skill categories and their associated technologies.
- Improve the consistency of skill cards, badges, icons, spacing, and typography.
- Ensure badges wrap naturally on smaller screens.
- Use consistent icon sizing and alignment.
- Maintain enough contrast between badges, card backgrounds, and text.

Do not add technologies merely to make the portfolio appear more advanced.

### E. Education

- Preserve the existing Al-Azhar University and Faculty of Sharia and Law information.
- Improve the card layout, typography, icon placement, and visual balance.
- Ensure the information remains readable on mobile devices.

### F. About Me

- Preserve the existing biography and its meaning.
- Improve readability through appropriate line length, paragraph spacing, and typography.
- Maintain consistent alignment with the Education section.
- Avoid excessive decorative elements that compete with the text.

### G. Contact Section

- Preserve the current contact message, GitHub and LinkedIn information, and other existing contact details.
- Keep the existing no-email-form design: **do not add or restore a contact form or Send Email form UI**.
- Make the available contact methods easy to find and use.
- Ensure external links and email links have correct destinations.
- Give this section a distinctive finish using the established design tokens, clear contrast, and a restrained signature-color accent.

### H. Footer

- Preserve the existing copyright and developer attribution.
- Improve spacing, alignment, and readability.
- Keep the footer visually consistent with the rest of the site.

---

## 6. Functional Light/Dark Theme Toggle

Implement a fully functional theme toggle.

### Requirements

- Support both Light and Dark themes.
- Make the toggle accessible and easy to discover.
- Use recognizable sun/moon icons if an icon library is already available.
- Update the entire interface, including the navigation, background, typography, project cards, skill cards, borders, badges, icons, buttons, and contact section.
- Use the centralized design tokens so both themes remain consistent.
- Preserve sufficient text contrast in both modes.
- Ensure hover, focus, active, and disabled states remain visible in both themes.
- Persist the user's theme preference across page navigation and subsequent visits using an appropriate mechanism.
- Respect the operating system's preferred color scheme when no explicit user preference has been saved, where practical.
- Prevent a noticeable flash of the wrong theme on initial page load.
- Avoid hydration errors and browser-only API access during server rendering.
- Follow the installed framework's supported theme implementation and the project's existing architecture.

### Acceptance criteria

- Clicking the toggle changes the theme immediately.
- All sections update consistently.
- The selected theme persists after refreshing the page.
- Navigation and interactive components remain readable and functional in both themes.
- No hydration warnings or theme-related console errors are introduced.

---

## 7. Make the Resume Button Work

The Resume button must download the actual resume PDF rather than act as a decorative element.

### Implementation requirements

1. Inspect the repository for an existing resume PDF or other verified resume asset.
2. If a suitable PDF exists, use it.
3. If no PDF exists, establish `public/Azizul-Hakim-Resume.pdf` as the expected asset location and report clearly that the real resume PDF must be supplied. Do not fabricate resume content or create a fake PDF.
4. Connect the Resume button to the real PDF using a valid public asset URL.
5. Use an appropriate download link and filename, such as `Azizul-Hakim-Resume.pdf`.
6. Ensure the download works from the deployed website, not just in local development.
7. Keep the button styled consistently with the design system.
8. Ensure it works with a mouse, keyboard, and assistive technology.

### Acceptance criteria

- The button points to an existing PDF.
- Clicking it downloads or opens the intended resume according to browser behavior.
- The deployed asset path resolves correctly.
- No broken link or missing-file error remains.

If the PDF is not available, finish the button integration as far as possible, clearly identify the missing asset, and do not claim that the download has been verified.

---

## 8. Responsive Design

The portfolio must work smoothly across mobile, tablet, laptop, and desktop screens.

### Requirements

- Inspect the existing breakpoints and responsive behavior.
- Use mobile-first styling where compatible with the current codebase.
- Prevent horizontal overflow.
- Ensure the hero section stacks appropriately on smaller screens.
- Allow skill badges and navigation items to wrap or collapse sensibly.
- Adjust project cards to a single-column layout when necessary.
- Maintain appropriate image proportions.
- Ensure buttons and links have comfortable touch targets.
- Keep body text and navigation readable without excessive zooming.
- Ensure the footer and contact details do not overlap.
- Avoid fixed widths that break on narrow screens.

Verify the layout at representative viewport widths, including approximately 320px, 375px, 768px, 1024px, and 1440px.

These are verification targets, not a requirement to add unnecessary media queries for every width.

---

## 9. Accessibility and Interaction Quality

- Use semantic HTML elements and a logical heading hierarchy.
- Provide accessible names for icon-only buttons.
- Add meaningful alternative text to informative images.
- Ensure keyboard navigation works throughout the site.
- Provide visible focus indicators.
- Use sufficient color contrast in both themes.
- Do not communicate important information using color alone.
- Respect `prefers-reduced-motion`.
- Use subtle, purposeful transitions rather than distracting animations.
- Ensure hover effects have equivalent keyboard-focus feedback.
- Avoid clickable non-semantic elements when a link or button is appropriate.

---

## 10. Performance and Code Quality

- Reuse existing components and styling patterns.
- Use the appropriate Next.js image optimization features for the installed version.
- Avoid unnecessary client components and browser-side JavaScript.
- Keep the theme toggle client-side only where required.
- Avoid unnecessary dependencies and duplicated CSS.
- Use appropriate image sizes and loading behavior.
- Prevent layout shifts caused by fonts and images where practical.
- Avoid introducing hydration mismatches.
- Keep TypeScript types correct.
- Do not suppress errors merely to make the build pass.
- Preserve existing functionality unless a change is explicitly required.
- Follow the project's existing linting and formatting conventions.

---

## 11. TODO Checklist — Execute in Order

### Phase 1: Inspect

- [ ] Inspect the existing repository structure and application entry points.
- [ ] Review `package.json`, installed versions, and current styling configuration.
- [ ] Read the applicable local Next.js documentation.
- [ ] Identify the existing components for all portfolio sections.
- [ ] Locate existing images, fonts, icons, resume assets, and social links.
- [ ] Identify any broken links, visual inconsistencies, or responsive issues.
- [ ] Determine the smallest safe set of changes needed.

### Phase 2: Establish the Design System

- [ ] Define a cohesive Light theme color palette.
- [ ] Define a complementary Dark theme palette.
- [ ] Establish the signature emerald/teal accent color.
- [ ] Centralize reusable color, typography, spacing, border, radius, and shadow tokens.
- [ ] Install or configure appropriate fonts using the existing framework and package manager.
- [ ] Establish consistent typography hierarchy.
- [ ] Verify color contrast and readability in both themes.

### Phase 3: Refine the Interface

- [ ] Polish the navigation and Resume button.
- [ ] Refine the hero section, profile image, text, and social links.
- [ ] Improve the Featured Projects cards and their alignment.
- [ ] Standardize Technical Skills cards, badges, and icons.
- [ ] Refine the Education section.
- [ ] Improve the About Me section's readability.
- [ ] Refine the Contact section without adding an email form.
- [ ] Polish the footer.
- [ ] Apply the signature color consistently without overusing it.

### Phase 4: Implement Functionality

- [ ] Implement the working Light/Dark theme toggle.
- [ ] Persist the selected theme.
- [ ] Handle initial theme selection without unnecessary visual flashing.
- [ ] Verify all existing navigation and social links.
- [ ] Connect the Resume button to the real PDF asset.
- [ ] Verify the resume download path and filename.
- [ ] Identify any missing assets that require user input.

### Phase 5: Responsive and Accessibility Checks

- [ ] Verify the layout at the specified mobile, tablet, and desktop widths.
- [ ] Fix horizontal overflow, overlapping content, and inconsistent spacing.
- [ ] Check keyboard navigation and visible focus states.
- [ ] Check accessible names and image alternative text.
- [ ] Verify both themes across all sections.
- [ ] Check reduced-motion behavior and touch-target usability.

### Phase 6: Verification

- [ ] Run the available lint command.
- [ ] Run TypeScript checks if configured.
- [ ] Run the production build.
- [ ] Fix issues introduced by the implementation.
- [ ] Verify that no existing portfolio sections or important content were accidentally removed.
- [ ] Verify the Resume button against the actual PDF asset.
- [ ] Verify internal links, external links, and theme persistence.
- [ ] Inspect the final implementation for inconsistent styling or unfinished UI.
- [ ] Summarize completed tasks, verification results, changed files, and any remaining blockers.

Use the scripts that actually exist in `package.json`. Do not assume that every project has separate lint, type-check, or test scripts.

If a check cannot be run, state why instead of claiming it passed.

---

## 12. Final Acceptance Criteria

The work is complete when:

- [ ] The original portfolio structure and essential content remain intact.
- [ ] The website has a cohesive, premium, modern visual identity.
- [ ] The signature color is applied consistently and purposefully.
- [ ] Typography, alignment, spacing, and contrast are consistent.
- [ ] Light and Dark themes both work correctly.
- [ ] The Resume button is connected to the actual PDF, or the missing PDF is explicitly reported.
- [ ] All existing portfolio sections are responsive and readable.
- [ ] Interactive controls are accessible and functional.
- [ ] No avoidable broken links, hydration errors, or styling regressions remain.
- [ ] Available project checks and the production build have been run and their results reported honestly.

**Priority order:** Preserve content and structure → establish design consistency → implement functionality → ensure responsiveness and accessibility → verify the result.

Use professional judgment to make the necessary design decisions without asking for approval for every minor detail. Ask the user only when an essential decision or missing asset cannot reasonably be resolved from the existing codebase.

---

## Next.js Agent Rules — Preserve This Block

<!-- BEGIN:nextjs-agent-rules -->

**## This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
