# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KS BootShop is a free Shopify theme powered by Bootstrap 5 framework. This theme is designed to meet Shopify theme requirements while providing a robust, accessible foundation built on Bootstrap.

## Development Commands

### Building & Watching

**Bootstrap SCSS compilation:**
```bash
npm run bs-scss
```
Compiles `src/bootstrap.scss` to `assets/vendor-bootstrap.min.css` with autoprefixer and minification.

**Watch mode (auto-compile on SCSS changes):**
```bash
npm run watch
```
Automatically compiles Bootstrap SCSS when files in `src/` directory change.

**Copy Bootstrap JS:**
```bash
npm run bs-js
```
Copies Bootstrap bundle to `assets/vendor-bootstrap.bundle.min.js`.

**Copy Swiper library:**
```bash
npm run swiper
```
Copies Swiper JS and CSS to assets folder.

### Shopify Theme Kit

**Deploy to Shopify:**
```bash
theme deploy
```

**Watch and sync changes:**
```bash
theme watch --allow-live
```

**Open theme preview:**
```bash
theme open
```

### Linting

**Run ESLint:**
```bash
npx eslint assets/*.js
```
ESLint is configured to use Standard style with 2-space indentation. Vendor files (prefixed with `vendor-`) are ignored.

### VS Code Tasks

The repository includes two auto-running tasks (configured in `.vscode/tasks.json`):
- `npm watch` - Auto-compiles SCSS
- `theme watch` - Auto-syncs with Shopify

## Architecture & Structure

### Theme Organization

**Shopify 2.0 Architecture:**
- Uses section groups (`header-group`, `footer-group`) for modular layout
- JSON templates in `templates/` directory define page structures
- All sections are dynamic and configurable via Shopify Theme Editor

**Key Directories:**
- `layout/` - Base HTML structure (`theme.liquid` is main layout)
- `sections/` - Reusable theme sections (header, footer, product, collections, etc.)
- `snippets/` - Smaller reusable components (product cards, navigation, cart items, etc.)
- `templates/` - Page-specific JSON configurations
- `config/` - Theme settings schema and data
- `locales/` - Translation files (only `en.default.json` in active theme)
- `assets/` - CSS, JS, images, and vendor files
- `src/` - Source SCSS files (compiled to assets)

### Styling System

**Bootstrap Customization:**
The theme heavily customizes Bootstrap via `src/bootstrap.scss`:
- Custom grid: 18 columns instead of default 12
- Custom breakpoints: `mobile` (0), `tablet` (600px), `desktop` (1200px)
- Extended spacer scale (0-20) with larger spacing values
- Extended border widths (0-16px)
- Custom utility classes for font-size, letter-spacing, and opacity
- Removed `light`, `dark`, and `gray` from theme colors

**CSS Files:**
- `assets/vendor-bootstrap.min.css` - Compiled Bootstrap (generated, don't edit directly)
- `assets/base.css` - Core theme styles
- `assets/sections.css` - Section-specific styles
- `assets/product.css` - Product page styles
- `assets/collection.css` - Collection page styles
- `assets/cart.css` - Cart styles
- `assets/custom.css` - **Safe for user customizations** (won't be overwritten on upgrade)

### JavaScript Architecture

**No jQuery Dependency:**
The theme uses vanilla JavaScript. Bootstrap 5 is also jQuery-free.

**JS Files:**
- `assets/vendor-bootstrap.bundle.min.js` - Bootstrap 5 bundle (includes Popper)
- `assets/vendor-swiper.bundle.min.js` - Swiper carousel library
- `assets/base.js` - Core utilities (debounce, throttle, cookie helpers, Bootstrap component initialization)
- `assets/product.js` - Product page functionality
- `assets/cart.js` - Cart functionality
- `assets/collection.js` - Collection filtering and utilities
- `assets/search.js` - Search functionality
- `assets/sections.js` - Section-specific scripts
- `assets/custom.js` - **Safe for user customizations** (won't be overwritten on upgrade)

**Global Theme Object:**
The theme uses `window.theme` namespace for utilities like `debounce()`, `throttle()`, and `createCookie()`.

### Key Sections

**Navigation & Layout:**
- `sections/navbar.liquid` - Main navigation bar
- `sections/announcement-bar.liquid` - Top announcement banner
- `sections/footer.liquid` - Site footer
- `sections/offcanvas-menu.liquid` (snippet) - Mobile navigation
- `sections/offcanvas-cart.liquid` - Slide-out cart drawer
- `sections/offcanvas-search.liquid` (snippet) - Slide-out search

**Product & Commerce:**
- `sections/product-main.liquid` - Product page (uses block system with snippets in `snippets/product-block-*.liquid`)
- `sections/collection-products.liquid` - Product grid with filters
- `sections/featured-products.liquid` - Homepage featured products
- `sections/featured-collections.liquid` - Homepage featured collections

**Content Sections:**
- `sections/hero-carousel.liquid` - Homepage hero slider (uses Swiper)
- `sections/media-with-text.liquid` - Image + text blocks
- `sections/card-slider.liquid` / `sections/card-list.liquid` - Generic card layouts
- `sections/testimonials.liquid` - Customer testimonials
- `sections/faq.liquid` - FAQ accordion
- `sections/newsletter.liquid` - Email signup
- `sections/richtext.liquid` - Rich text content
- `sections/html.liquid` - Custom HTML
- `sections/separator.liquid` - Visual separator

### Snippets System

**Product Components:**
Product blocks (`snippets/product-block-*.liquid`) are modular components for product pages:
- `product-block-media-gallery.liquid` - Image gallery
- `product-block-title.liquid` - Product title
- `product-block-price.liquid` - Price display
- `product-block-options.liquid` - Variant selector
- `product-block-atc-button.liquid` - Add to cart button
- `product-block-stock-indicator.liquid` - Inventory status
- `product-block-trust-icons.liquid` - Trust badges
- `product-block-collapse.liquid` - Accordion content
- `product-block-richtext.liquid` - Rich text content

**Reusable Components:**
- `snippets/product-card.liquid` - Product grid item
- `snippets/collection-card.liquid` - Collection grid item
- `snippets/article-card.liquid` - Blog post card
- `snippets/cart-items.liquid` - Cart line items
- `snippets/pagination.liquid` - Page navigation
- `snippets/section-header.liquid` - Consistent section headers
- `snippets/svg-icons.liquid` - SVG icon system

### Theme Settings

**Color Variables:**
Defined in `config/settings_schema.json`:
- `color_primary` - Primary brand color (default: #d63384)
- `color_secondary` - Secondary color (default: #6C757D)
- `color_body_bg` - Background color
- `color_body_color` - Text color

These are injected as CSS variables in the theme and can be customized via Theme Editor.

### Localization

The theme supports Shopify's translation system. Main translations are in `locales/en.default.json`. The theme is ready for multi-language support.

## Important Development Notes

### Customization Guidelines

**Never directly modify:**
- Generated files: `assets/vendor-bootstrap.min.css`, `assets/vendor-bootstrap.bundle.min.js`
- Core theme files (will be lost on theme updates)

**Safe to modify:**
- `assets/custom.css` - Add custom styles here
- `assets/custom.js` - Add custom scripts here
- `src/bootstrap.scss` - Customize Bootstrap variables and compilation

### Bootstrap Customization Workflow

1. Edit `src/bootstrap.scss` to modify Bootstrap variables
2. Run `npm run bs-scss` or `npm run watch` to compile
3. Deploy to Shopify with `theme deploy` or `theme watch`

### Theme Kit Setup

First time setup requires Theme Kit configuration. Create a new theme with:
```bash
theme new --password=[your-api-password] --store=[your-store.myshopify.com] --name="ks-bootshop-v3"
```

### Accessibility

The theme is built with accessibility best practices:
- All interactive elements have proper ARIA attributes
- Skip to content link for keyboard navigation
- Semantic HTML structure
- Focus management in modals and offcanvas elements

### Performance

- Native lazy loading for images
- No jQuery dependency reduces bundle size
- Minified vendor assets
- PageSpeed score target: 96/100

### Section Styling System

The theme includes "Advanced styling for each section" - sections can be styled individually through the Theme Editor with spacing, colors, and layout options.

## Git Workflow

The repository uses git with Theme Kit. The current branch is `master` (also the main branch for PRs).

**Note:** There is an `old-theme/` directory in the repository (currently untracked) which appears to contain a previous version of the theme. This should likely be ignored or removed.
