---
name: figma-to-code
description: Convert design files and UI specs into clean, faithful React components and frontend implementation patterns.
---

# Figma to Code

Use this skill when a design file or mockup must be translated into a working frontend.

## Workflow
1. Identify the core layout, hierarchy, and spacing system.
2. Map components into reusable React building blocks.
3. Translate design tokens into CSS variables or utility patterns.
4. Preserve semantic structure, accessibility, and responsive behavior.
5. Validate that the implementation matches the intent, not just the screenshot.

## Guidance
- Prefer reusable structure over one-off styling.
- Respect spacing scale and visual rhythm from the design.
- Preserve interaction states: hover, focus, active, disabled, and error.
- Keep design fidelity while avoiding over-engineering.

## Example
- Good: a product card matching the design’s spacing and hierarchy while using a reusable component structure.
- Weak: a single hardcoded block that ignores responsiveness and future reuse.
