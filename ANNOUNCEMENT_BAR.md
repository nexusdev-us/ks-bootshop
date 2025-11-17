# Announcement Bar - Disabled

## Current Status: DISABLED

The announcement carousel at the top of the site has been disabled but can be easily re-enabled.

## How to Re-Enable the Announcement Bar

### Option 1: Edit the Code (Quick)

1. Open `sections/header-group.json`
2. Find the announcement_bar section (around line 5-7)
3. Change:
   ```json
   "disabled": true,
   ```
   to:
   ```json
   "disabled": false,
   ```
   OR simply remove the `"disabled": true,` line entirely

4. Deploy: `theme deploy`

### Option 2: Through Shopify Theme Editor (Visual)

1. Go to Shopify Admin → Online Store → Themes
2. Click "Customize" on your active theme
3. In the theme editor, click the header area
4. Find "Announcement bar" section
5. Toggle the visibility/enable switch
6. Click "Save"

## Current Announcement Messages

The announcement bar is configured with these messages:
1. "Essential Starr joins Lavender Hill Botanicals - Continuing the Legacy of Light, Love, and Botanical Beauty"
2. "Shop our collection of Essential Oils, Carrier Oils, and Natural Remedies"

These messages are preserved and will reappear when you re-enable the section.

## Announcement Bar Settings

When enabled, the announcement bar has:
- **Background**: Primary gradient color
- **Text color**: White
- **Auto-rotate**: Every 5 seconds
- **Animation**: Vertical carousel
- **Position**: Top of page, above navigation

## Customizing Announcement Messages

To change the announcement messages:

1. Open `sections/header-group.json`
2. Find the `blocks` section under `announcement_bar_Ge9W3V`
3. Edit the `announcement` text in each slide
4. Add more slides by duplicating the slide blocks
5. Deploy changes

Or use the Shopify Theme Editor to edit visually.

## Why Was It Disabled?

The announcement bar was disabled to provide a cleaner header experience. All the announcement content is preserved and can be instantly re-enabled whenever needed for:
- Special promotions
- Important announcements
- Sale notifications
- Shipping updates
- Business changes