# Collections Setup Guide

## IMPORTANT: Collection Handles

The homepage is configured to display specific collections. If these collections are missing or empty, the sections won't show products.

## Required Collections

The theme expects these **exact collection handles** (the URL slug):

1. **summer-fun-collection**
   - Handle: `summer-fun-collection`
   - Example URL: `/collections/summer-fun-collection`

2. **tea-collection**
   - Handle: `tea-collection`
   - Example URL: `/collections/tea-collection`

3. **pure-essential-oils-single-note**
   - Handle: `pure-essential-oils-single-note`
   - Example URL: `/collections/pure-essential-oils-single-note`

4. **carrier-oils**
   - Handle: `carrier-oils`
   - Example URL: `/collections/carrier-oils`

5. **remedies**
   - Handle: `remedies`
   - Example URL: `/collections/remedies`

6. **best-selling-collection**
   - Handle: `best-selling-collection`
   - Example URL: `/collections/best-selling-collection`

## How to Fix Missing Collections

### Option 1: Create the Collections in Shopify

1. Go to Shopify Admin → Products → Collections
2. Click "Create collection"
3. Enter the collection title (e.g., "Summer Fun Collection")
4. **IMPORTANT**: In "Search engine listing preview", click "Edit website SEO"
5. Change the URL handle to match exactly (e.g., `summer-fun-collection`)
6. Add products to the collection
7. Save the collection

### Option 2: Use Your Existing Collections

If you already have collections with different handles:

1. Go to Shopify Admin → Products → Collections
2. Find your existing collection
3. Note down the handle (shown in the URL)
4. Edit `templates/index.json`
5. Find the section (e.g., `"featured_summer"`)
6. Change the `"collection"` value to your actual handle

Example:
```json
"featured_summer": {
  "type": "featured-products",
  "settings": {
    "collection": "your-actual-collection-handle",
    // ... rest of settings
  }
}
```

### Option 3: Use "all" Collection as Fallback

If you want to show all products while setting up:

1. Edit `templates/index.json`
2. Change any missing collection to `"all"`

Example:
```json
"collection": "all",
```

## Quick Fix for All Collections

If you want to quickly show products from all collections, you can update the template to use these common handles:

- `"all"` - Shows all products
- `"frontpage"` - Shows featured products
- `"best-sellers"` - Shows best selling products (if configured)

## Testing Your Collections

After setting up:

1. Deploy the theme: `theme deploy`
2. Open your store: `theme open`
3. Check if products appear in each section
4. If a section is empty, that collection either:
   - Doesn't exist
   - Has a different handle
   - Has no products assigned

## Common Issues

### "Collection not found" in sections
- The collection handle doesn't match exactly
- Solution: Check the handle in Shopify Admin and update template

### Section appears but no products show
- The collection exists but has no products
- Solution: Add products to the collection in Shopify Admin

### Dropdown navigation not showing collections
- The navigation menu needs to be configured
- Solution: Go to Online Store → Navigation → Edit "dropdown-menu"
- Add links to your collections

## Navigation Menu Setup

To add collections to your dropdown menu:

1. Go to Shopify Admin → Online Store → Navigation
2. Find or create menu called "dropdown-menu"
3. Add menu items:
   - Click "Add menu item"
   - Search for your collection
   - Add it to the menu
4. For dropdown submenus:
   - Create a parent item (e.g., "Shop")
   - Add collections as sub-items

Example menu structure:
```
Shop
├── Essential Oils
├── Carrier Oils
├── Tea Collection
├── Remedies
└── Best Sellers

About
├── Our Story
├── Contact Us
└── FAQ
```

## Need Help?

If collections still don't appear:

1. Check the browser console for errors (F12 → Console)
2. Verify products are published and available
3. Check that collections are published
4. Ensure products are in stock
5. Try using `"collection": "all"` to test if the section works