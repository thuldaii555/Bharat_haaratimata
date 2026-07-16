# Haaratimata Admin Backend Plan

## Current Phase
Phase 13A: Admin foundation without Supabase connection.

The admin section is currently a planning interface only. Authentication,
database persistence, image upload, and product/content editing are intentionally
not connected yet.

## Future Backend
Recommended backend: Supabase

## Future Supabase Features
- Auth for admin login
- Postgres database for products, categories, inquiries, site content
- Storage for product/category/gallery/certification images
- Row Level Security later
- Environment variables later

## Future Environment Variables
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_ALLOWED_EMAILS
- NEXT_PUBLIC_SITE_URL

Do not add real values to GitHub.
Use Vercel Environment Variables for production.
Use .env.local for local development.

## Future Tables
- profiles
- products
- categories
- product_images
- site_content
- gallery_images
- certification_assets
- inquiries

## Implementation Order
1. Create free Supabase project
2. Add env variables
3. Install Supabase client
4. Connect admin login
5. Protect admin routes
6. Move products/categories to database
7. Add image storage
8. Connect inquiries
