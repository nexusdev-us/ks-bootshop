# Submenu Debug Guide

## NEW APPROACH: Pure CSS Hover

I've completely rewritten the submenu logic to use **pure CSS :hover** instead of JavaScript timing. This eliminates all race conditions and timing issues.

## How It Works Now

### CSS-Based (Instant & Reliable):
```css
.dropdown-submenu:hover > .dropdown-menu {
  display: block !important;
  visibility: visible !important;
}
```

When you hover over `.dropdown-submenu` (the parent item), its direct child `.dropdown-menu` becomes visible instantly.

## What Changed

### Before (BROKEN):
- JavaScript with complex timeout logic
- Race conditions between parent and submenu events
- Timeouts causing menus to close too early
- `mouseleave` events firing unexpectedly

### After (FIXED):
- **Pure CSS :hover** - no timing issues
- **Instant response** - submenu appears immediately
- **No gaps** - 1px overlap ensures continuous hover
- **No JavaScript delays** - CSS handles everything

## Technical Details

### Positioning:
- **Top alignment**: `top: 0` (aligned with parent item)
- **Left position**: `calc(100% - 1px)` (1px overlap, no gap)
- **Margin**: `0` (no spacing)

### Hover Chain:
1. Hover "Body Care" parent item
2. CSS detects `:hover` on `.dropdown-submenu`
3. Submenu displays instantly
4. Move mouse to submenu → submenu stays open (it's now being hovered)
5. Move away → submenu disappears instantly

## Debug Steps

If submenus still don't work:

### 1. Check Browser Console
Look for any JavaScript errors or the debug log:
```
Submenu found for: Body Care
```

### 2. Inspect Element
Right-click "Body Care" → Inspect:
- Verify element has class `dropdown-submenu`
- Check if it has a child with class `dropdown-menu`
- When hovering, check if `display: block` appears

### 3. Check CSS Specificity
Open DevTools → Elements → Check computed styles for `.dropdown-submenu > .dropdown-menu`:
- Should show `display: none` when not hovering
- Should show `display: block !important` when hovering

### 4. Verify Structure
The HTML should look like:
```html
<li class="dropdown-submenu">
  <a class="dropdown-item">Body Care</a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item">Item 1</a></li>
    <li><a class="dropdown-item">Item 2</a></li>
  </ul>
</li>
```

## Manual Testing

1. **Clear browser cache completely** (Ctrl+Shift+Delete)
2. **Hard refresh** (Ctrl+F5)
3. **Deploy theme**: `theme deploy`
4. Open your store
5. Open DevTools Console (F12)
6. Hover over Collections → Body Care
7. Check console for "Submenu found for: Body Care"
8. Check if submenu appears

## CSS Priority Check

Make sure no other CSS is overriding. In DevTools:
1. Inspect the submenu `<ul class="dropdown-menu">`
2. Look at "Computed" tab
3. Search for "display"
4. See which rule is winning
5. If it's not showing `display: block` on hover, there's a CSS conflict

## Common Issues

### Submenu still disappears:
- **Cause**: Another CSS rule with higher specificity
- **Fix**: Increase specificity in custom-mega-menu.css

### Submenu doesn't appear at all:
- **Cause**: JavaScript might be setting inline `display: none`
- **Fix**: Check if custom.js is running and interfering

### Gap between parent and submenu:
- **Cause**: Positioning offset creating dead space
- **Fix**: Already fixed with `calc(100% - 1px)` for 1px overlap

## Files Involved

1. **`assets/custom-mega-menu.css`** - CSS :hover rules (PRIMARY)
2. **`assets/custom.js`** - Now only logs, doesn't control display
3. **`snippets/navbar-desktop-menu-full.liquid`** - HTML structure

## Rollback If Needed

If this still doesn't work, we can:
1. Use click-based dropdowns instead of hover
2. Use a different menu structure
3. Simplify to only 2 levels (no submenus)

But CSS :hover is the most reliable approach - it should work!