# Logo Header Setup

## Current Configuration

The header is now split into two parts:

### 1. Logo Header (Non-Sticky)
- **Location**: Top of page, above navbar
- **Behavior**: Scrolls away when user scrolls down
- **File**: `sections/logo-header.liquid`
- **Contains**: Essential Starr logo (e.png)

### 2. Navigation Bar (Sticky)
- **Location**: Below logo header
- **Behavior**: Sticks to top of page when scrolling
- **File**: `sections/navbar.liquid`
- **Contains**: Menu navigation, search, cart icons

## How It Works

When users:
1. **At top of page**: Logo header visible above navbar
2. **Scroll down**: Logo scrolls away, navbar sticks to top
3. **Scroll back to top**: Logo reappears

This provides:
- ✅ Prominent branding when landing on site
- ✅ Clean navigation that follows user
- ✅ More screen space when scrolling
- ✅ Professional, modern UX

## Structure

```
┌─────────────────────────────┐
│      Logo Header            │ ← Scrolls away
│   (Essential Starr Logo)    │
└─────────────────────────────┘
┌─────────────────────────────┐
│    Navigation Bar           │ ← Sticks to top
│  (Menu | Search | Cart)     │
└─────────────────────────────┘
```

## Files Modified

1. **`sections/logo-header.liquid`** - NEW: Logo header section
2. **`sections/header-group.json`** - Added logo header section
3. **`sections/navbar.liquid`** - Removed logo, adjusted layout
4. **`layout/theme.liquid`** - Removed sticky from header-group
5. **`assets/custom.css`** - Updated sticky behavior

## Customizing the Logo

### Change Logo Image:
1. Edit `sections/header-group.json`
2. Find `logo_header` section
3. Change `"logo": "shopify://shop_images/e.png"` to your image

### Change Logo Size:
1. Edit `sections/header-group.json`
2. Find `"logo_width": 200`
3. Change to desired width (50-400px)

### Change Logo Spacing:
- `"pt": 6` - Padding top
- `"pb": 6` - Padding bottom
- Adjust values 0-20

### Through Shopify Theme Editor:
1. Customize theme
2. Click on logo header area
3. Adjust settings visually
4. Save

## Reverting to Logo in Navbar

If you want the logo back in the navbar (old style):

1. Edit `sections/header-group.json`
2. Add logo back to navbar blocks:
   ```json
   "logo": "shopify://shop_images/e.png",
   "logo_height": 50,
   ```
3. Set logo_header to disabled:
   ```json
   "logo_header": {
     "type": "logo-header",
     "disabled": true,
   ```
4. Edit `layout/theme.liquid`:
   ```html
   <div id="header-group" class="sticky-top">
   ```
5. Edit `sections/navbar.liquid` - remove `sticky-top` class

## Mobile Behavior

On mobile:
- Logo header displays at top
- Logo scrolls away when scrolling
- Hamburger menu sticks to top
- Icons (search, cart) stay accessible

## Desktop Behavior

On desktop:
- Logo header centered at top
- Full navigation menu below logo
- Menu sticks when scrolling
- Logo disappears for clean browsing

## Benefits of This Setup

1. **Better First Impression**: Large logo when landing
2. **More Content Space**: Logo doesn't take space while browsing
3. **Clean Navigation**: Menu always accessible
4. **Professional Look**: Modern split-header design
5. **Mobile Friendly**: Works great on all devices

## Technical Details

### Sticky Behavior:
- Applied to `#navbar-wrapper` only
- Uses Bootstrap's `sticky-top` class
- Z-index: 1020 (above content)

### Logo Header:
- Regular flow positioning
- Scrolls naturally with page
- Z-index: 1010 (below navbar)

### CSS Classes Used:
- `.sticky-top` - Makes navbar stick
- `.logo-header` - Logo container styles
- Custom animations and transitions