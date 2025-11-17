# Deployment Guide - Essential Starr KS BootShop Theme

## Quick Deployment Steps

### 1. Deploy Theme to Shopify

```bash
theme deploy
```

This will upload all your theme files to Shopify, including:
- Your logo and brand colors
- All 6 collection sections on the homepage
- Updated header with Essential Starr announcements
- Updated footer with newsletter and branding

### 2. Verify Collections (IMPORTANT!)

After deployment, check that these collections exist in your Shopify store with the exact handle names:

1. Go to Shopify Admin → Products → Collections
2. Verify these collections exist:
   - `summer-fun-collection`
   - `tea-collection`
   - `pure-essential-oils-single-note`
   - `carrier-oils`
   - `remedies`
   - `best-selling-collection`

**If collection names don't match:**
- Click on each collection
- Edit the "URL and handle" to match the names above
- OR edit `templates/index.json` to use your actual collection handles

### 3. Upload Hero Image

1. In Shopify Admin → Content → Files
2. Upload your hero image: `pexels-elina-fairytale-3865680-scaled.jpg`
3. The theme is already configured to use this image

### 4. Configure Social Media Links

1. Go to Shopify Admin → Settings → Social media
2. Add your social media URLs
3. They'll automatically appear in your footer

### 5. Set Up Navigation Menu

1. Go to Shopify Admin → Online Store → Navigation
2. Find or create a menu called "dropdown-menu"
3. Add links to your main collections:
   - Essential Oils
   - Carrier Oils
   - Tea Collection
   - Remedies
   - etc.

### 6. Preview Your Store

```bash
theme open
```

This will open your Shopify store with the new theme in preview mode.

## What You Should See

### Homepage
1. ✅ Hero banner: "Medicines of Light"
2. ✅ Welcome message about Essential Starr's Apothecary
3. ✅ Summer Fun Collection (4 products in slider)
4. ✅ Tea Collection (4 products in slider)
5. ✅ Essential Oils (10 products in slider)
6. ✅ Carrier Oils (10 products in slider)
7. ✅ Basic Remedies (10 products in slider)
8. ✅ Best Selling Products (5 products in slider)

### Header
1. ✅ Essential Starr logo
2. ✅ Announcement bar with transition message
3. ✅ Navigation menu

### Footer
1. ✅ Newsletter subscription
2. ✅ Essential Starr branding
3. ✅ Social media icons
4. ✅ Payment icons

## Troubleshooting

### "Collection not found" errors
- Check that your collections have the exact handle names listed above
- In Shopify, go to Products → Collections → [Collection Name] → Edit
- Scroll to "Search engine listing preview" → "URL and handle"
- Update the handle to match the template

### Hero image not showing
- Upload the image to Shopify Admin → Content → Files
- OR edit the homepage in Theme Editor and select a different image

### Products not showing in collections
- Make sure products are actually assigned to the collections
- In Shopify, edit each collection and verify products are included

### Menu not showing
- Create a menu called "dropdown-menu" in Navigation
- OR edit `sections/header-group.json` and change the `"main_menu"` value to your menu name

## Next Steps After Deployment

1. Test the entire store:
   - Browse all collections
   - Add products to cart
   - Test checkout (use Shopify's test mode)
   - Check mobile responsiveness

2. Customize further in Theme Editor:
   - Adjust colors if needed
   - Change section spacing
   - Add more content sections

3. Set up important pages:
   - About Us page
   - Contact page
   - Shipping & Returns policy
   - Privacy Policy

## Need Help?

- Review `MIGRATION_SUMMARY.md` for detailed information about what was migrated
- Review `CLAUDE.md` for theme architecture and development commands
- Check Shopify's theme documentation: https://shopify.dev/themes
