# Haaratimata Premium Showroom Site Blueprint

## 1. Brand Purpose
Haaratimata Handicrafts is being repositioned as a premium handmade felt/wool handicrafts brand from Nepal for global interiors, trade buyers, boutiques, and ethical retail partners.

The site should feel like a high-end showroom, not a basic brochure or template. The visual direction should be calm, image-rich, editorial, luxurious, and trade-friendly.

## 2. Target Audience
- Wholesale and trade buyers
- Boutiques and home decor retailers
- Interior designers
- Hospitality and gift buyers
- Eco-conscious premium consumers
- Import/export partners

## 3. Core Brand Facts
- Brand: Haaratimata Handicrafts
- Established in 1999
- Handmade in Nepal
- Felt wool products supplier, manufacturer, and exporter
- Uses 100% New Zealand wool
- Supports 300+ women artisans
- Eco-friendly and biodegradable felt product positioning
- Fair Trade focused
- Offers wholesale, bulk-buy, custom design, and export opportunities

Note:
Do not claim official certifications or awards unless the business provides proof. Use placeholders for awards/certifications until verified.

## 4. Navigation Plan
Logo click returns to Home.

Main navigation:
- Who We Are
- Showroom
- Trade
- Sustainability
- Lookbook

Later/future:
- Contact
- Cart
- Login
- Admin

Route strategy for now:
- /about route remains, but nav label becomes "Who We Are"
- /showroom remains "Showroom"
- /wholesale route remains, but nav label becomes "Trade"
- /sustainability remains "Sustainability"
- /gallery route remains, but nav label becomes "Lookbook"

Reason:
Keep routes stable first. Rename folders later only if needed.

## 5. Page Purpose

### Home
Premium brand entry point.
Sections:
- Hero with slow-moving editorial image treatment
- Trust strip
- Featured collections
- Material story
- Trade CTA
- Lookbook preview

### Who We Are
Company introduction and credibility page.
Sections:
- Brand story
- Heritage since 1999
- How we make products
- Materials
- Artisan network
- Awards/certification placeholders
- Process image panels

### Showroom
Main catalog/shop page.
Purpose:
Show all categories and available products professionally.

Categories:
- Rugs
- Blankets & Throws
- Wall Hangings
- Home Decorations
- Toys
- Personal Accessories
- Pet Accessories
- Custom Designs

Features:
- Category filter tabs
- Product cards
- Product detail pages
- Price, bulk price, availability
- Ask for Quote CTA
- Admin-ready data model

### Trade
Premium B2B buyer page.
Audience:
- Wholesale buyers
- Interior designers
- Importers
- Retailers
- Hospitality buyers
- Private label buyers

Sections:
- Trade hero
- Who we work with
- Trade services
- Trade process
- Product categories for trade
- Trade quote CTA

Preferred language:
Use "Trade", "buyer program", "export partnership", "custom development", and "trade pricing".
Avoid cheap-sounding "wholesale discount" language.

### Sustainability
Page title:
Our Commitment to Sustainability

Sections:
- Natural wool material
- Biodegradable felt
- Handmade production
- Responsible production planning
- Women artisan network
- Fair Trade focused approach
- Future certification placeholders

#### Fair Trade & WFTO Standards Content

Planning notes:
- Haaratimata's current official website describes the company as fair trade certified.
- The new website may state that Haaratimata is Fair Trade Certified based on the company's current official website.
- The company positions itself as people-first and supportive of the artisans behind the craft.
- The official page references the ten standards of WFTO.
- The new website should rewrite these ideas professionally and not copy awkward/default text directly.
- Use this content later in the Sustainability phase and reference it lightly on Home only where it supports brand trust.
- Do not add official Fair Trade/WFTO logos or certificate images until the company provides approved assets.
- Add certificate/logo placeholder areas in the Sustainability page design.
- Later admin should be able to upload certificate images, certification logos, certificate numbers, and verification details.

Planned WFTO standards content:
1. Opportunities for Disadvantaged Producers
2. Transparency and Accountability
3. Fair Trade Practices
4. Fair Payment
5. No Child Labour, No Forced Labour
6. No Discrimination, Gender Equality, Freedom of Association
7. Good Working Conditions
8. Capacity Building
9. Promote Fair Trade
10. Respect for the Environment

Content guidance:
- Use careful, professional wording.
- Avoid unverified details unless business confirms them.
- If "fair trade certified" is used, later verify certification proof or display it carefully.
- Avoid copying weak/default text from the old site.
- Do not reuse unrelated template content from the current site.
- The detailed Fair Trade content belongs on the Sustainability page.
- Home may include a short Fair Trade Certified card.
- Detailed certification content belongs on Sustainability.
- A short Fair Trade Focus card can appear on Home.
- Do not invent certification numbers, dates, logos, or verification details.

### Lookbook
Premium visual inspiration page.
Sections:
- Editorial mood board
- Texture studies
- Interior/product mood
- Color stories
- Product closeups

## 6. Product Category Plan

### Rugs
- Himalayan Felt Ball Rug
- Soft Earth Round Rug
- Woven Harmony Floor Runner
- Stone Grid Felt Carpet
- Custom Color Felt Rug

### Blankets & Throws
- Felted Wool Throw
- Soft Winter Wool Blanket
- Natural Wool Layering Throw
- Textured Sofa Throw
- Custom Color Blanket Program

### Wall Hangings
- Himalayan Texture Wall Hanging
- Abstract Felt Wall Panel
- Wool Tapestry Panel
- Color Story Wall Hanging
- Custom Interior Wall Art

### Home Decorations
- Nest Felt Storage Basket
- Artisan Wool Garland
- Felt Table Accent Set
- Handmade Wool Coasters
- Decorative Felt Bowl

### Toys
- Forest Animal Felt Set
- Playful Felt Orb Set
- Handmade Owl Toy
- Soft Felt Doll Set
- Nursery Felt Mobile

### Personal Accessories
- Felt Slippers
- Wool Scarf
- Felt Coin Purse
- Handmade Wool Mittens
- Felt Key Charm

### Pet Accessories
- Cozy Felt Pet Cave
- Signature Felt Pet Mat
- Felt Pet Basket
- Wool Pet Toy Set
- Custom Pet Bed

### Custom Designs
- Custom Buyer Development Pack
- Custom Color Palette Program
- Hospitality Rug Program
- Boutique Seasonal Collection
- Private Label Felt Product Line

## 7. Product Data Model

Product fields should support future admin editing:

- id
- slug
- name
- category
- shortDescription
- description
- retailPrice
- bulkPrice
- quoteOnly
- availability
- colors
- sizes
- material
- leadTime
- moq
- image
- featured
- status

Availability options:
- In Stock
- Made to Order
- Out of Stock
- Unavailable

Future admin actions:
- Add product
- Edit product
- Remove product
- Replace product image
- Change retail price
- Change bulk price
- Mark out of stock
- Mark unavailable
- Add/remove colors
- Add/remove sizes
- Toggle quote-only
- Set featured product

## 8. Image Strategy

Current source folder:
public/premium-photos

Curated target folders to create later:
- public/images/hero
- public/images/categories
- public/images/showroom
- public/images/trade
- public/images/sustainability
- public/images/lookbook

Image usage rules:
- Hero images should create premium emotion and brand mood.
- Showroom images should clarify category/product.
- Trade images should build buyer trust.
- Sustainability images should support material, process, and natural responsibility.
- Lookbook images should inspire through texture, color, and interior mood.
- Avoid human-heavy images unless they are process-focused and tasteful.
- Avoid repeating the same image unnecessarily.
- Watermarked images are prototype-only and must be replaced before final launch.

## 9. Motion / Premium Interaction Plan

Use slow, subtle motion only:
- Hero image slow pan/zoom, like a gentle editorial motion
- Product card image zoom on hover
- Soft CTA hover states
- Respect prefers-reduced-motion

Avoid:
- Decorative gimmicks
- Fast animation
- Floating unrelated objects
- Motion that distracts from products

## 10. Phased Execution Plan

### Phase 0: Foundation & Material Inventory
- Create blueprint
- Confirm nav labels
- Create image map
- Confirm product categories
- Confirm initial product data model

### Phase 1: Navigation & Brand Structure
- Remove Home nav
- Logo remains home link
- Rename About label to Who We Are
- Rename Wholesale label to Trade
- Rename Gallery label to Lookbook
- Keep routes stable

### Phase 2: Image System & Asset Map
- Organize curated images
- Rename files into code-friendly names
- Create or update lib/premiumImages.ts
- Assign images to page/section purposes

### Phase 3: Homepage Premium Redesign
- Hero image motion
- Hero feature panel
- Trust strip
- Featured collections
- Material story
- Trade CTA
- Lookbook preview

### Phase 4: Showroom Catalog
- Categories
- 16 to 24 sample products
- Product cards
- Filters
- Product details
- Ask for Quote CTA

### Phase 5: Who We Are
- Company story
- Heritage
- How We Make
- Materials
- Artisan network
- Awards placeholders

### Phase 6: Trade & Sustainability
- Trade buyer page
- Buyer types
- Trade services
- Trade process
- Quote CTA
- Premium Fair Trade & Sustainability page rebuild
- Fair Trade Certified content section
- Fair Trade commitment section
- Certificate/logo placeholder area
- Future admin-editable certification asset section
- 10 WFTO standards section
- Fair payment / no child labor / gender equality content
- Capacity building and working condition content
- Environmental responsibility content
- Careful wording guidance: do not invent certification numbers, dates, or logos

### Phase 7: Sustainability
- Natural wool
- Biodegradable felt
- Handmade production
- Responsible production
- Fair Trade focused approach
- Fair Trade commitment section
- 10 WFTO standards section
- Fair payment / no child labor / gender equality content
- Capacity building and working condition content
- Environmental responsibility content
- Careful certification wording

### Phase 8: Lookbook
- Editorial image grid
- Texture studies
- Interior/product mood
- Color stories

### Phase 9: Contact, Cart, Login, Admin
- Contact form
- Cart placeholder logic
- Login UI
- Admin dashboard
- Product CRUD plan
- Image upload/edit/remove plan

## 11. Quality Principles

The site should feel:
- premium
- calm
- image-rich
- globally refined
- trade-friendly
- handcrafted but modern
- luxurious without being loud

Avoid:
- developer-template look
- random imagery
- repetitive images
- cheap ecommerce styling
- unverified claims
- over-animation
