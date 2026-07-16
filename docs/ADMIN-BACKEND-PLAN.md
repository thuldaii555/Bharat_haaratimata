# Haaratimata Admin Backend Plan

## Current Phase
Phase 13C: Supabase Auth connected for admin login.

Supabase Auth is connected for admin login. Database persistence, image upload,
and product/content editing are intentionally not connected yet.

## Phase 13B
- Supabase free project created.
- Env variables added locally and in Vercel.
- Supabase client helpers added.
- No real auth/database/storage connected yet.
- Service role key should not be exposed.
- Phase 13C connects admin login using Supabase Auth.

## Phase 13C
- Supabase Auth connected for admin login.
- Admin access restricted by ADMIN_ALLOWED_EMAILS.
- Admin pages protected.
- Logout added.
- Product/database/image features not connected yet.

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
- ADMIN_ALLOWED_EMAILS
- NEXT_PUBLIC_SITE_URL

Do not add real values to GitHub.
Use Vercel Environment Variables for production.
Use .env.local for local development.
Do not expose the Supabase service role key. If a service role key is ever
needed later, keep it server-side only and never use it in browser code.

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
1. Create free Supabase project - complete
2. Add env variables - complete
3. Install Supabase client - complete
4. Connect admin login - complete
5. Protect admin routes - complete
6. Move products/categories to database
7. Add image storage
8. Connect inquiries
