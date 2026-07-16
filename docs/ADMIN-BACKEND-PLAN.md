# Haaratimata Admin Backend Plan

## Current Phase
Phase 13D: Admin auth UX and Next 16 cleanup.

Supabase Auth is connected for admin login, admin route protection is active,
and the auth shell has been cleaned up. Database persistence, image upload, and
product/content editing are intentionally not connected yet.

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

## Phase 13D
- Admin auth UX cleaned up.
- Sign out is clearly visible.
- Next 16 proxy/middleware warning addressed by moving route protection to proxy.ts.
- Admin pages remain read-only.

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
6. Clean up admin auth UX and Next 16 proxy convention - complete
7. Move products/categories to database
8. Add image storage
9. Connect inquiries
