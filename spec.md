# Specification

## Summary
**Goal:** Extend the hero image to fill the full viewport from the very top of the page and update the header with a "Delicious Mexican Food" tagline that hides on scroll down and reappears on scroll up.

**Planned changes:**
- Update the HeroSection so the banner image starts at y=0, bleeding behind the sticky header with no gap or white space at the top of the viewport.
- Update the Header tagline text to read "Delicious Mexican Food".
- Make the header hide (slide upward) when the user scrolls down and reappear when scrolling back up, using the existing scroll direction hook.
- Keep all other header elements (logo, nav links, phone number, hamburger menu) unchanged.

**User-visible outcome:** Visitors see the hero image flush with the very top of the browser window, with the header overlaid on top of it. The header shows "Delicious Mexican Food" as its tagline and smoothly hides when scrolling down, reappearing when scrolling back up.
