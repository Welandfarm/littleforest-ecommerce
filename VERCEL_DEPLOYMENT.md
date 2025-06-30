# Vercel Deployment Guide for LittleForest

## Quick Deployment Steps

1. **Connect GitHub Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import `Welandfarm/littleforest-ecommerce`

2. **Environment Variables**
   Add these in Vercel project settings:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
   NODE_ENV=production
   ```

3. **Deploy**
   - Vercel will automatically build using `vite build`
   - Frontend serves from `/client/dist`
   - API runs serverless at `/api/*`

## Architecture

- **Frontend**: Static files served by Vercel Edge Network
- **Backend**: Serverless function at `/api/index.ts`
- **Database**: Supabase (already configured)
- **Authentication**: Supabase Auth with admin overrides

## API Endpoints

- `GET /api/products` - Fetch all products
- `GET /api/content` - Fetch content
- `POST /api/contact` - Submit contact form
- `POST /api/admin/login` - Admin authentication
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

## Troubleshooting

**Build Fails:**
- Check if all dependencies are in package.json
- Verify frontend builds with `npm run build`

**API Errors:**
- Check environment variables are set
- Verify Supabase credentials
- Check function logs in Vercel dashboard

**Static Files 404:**
- Ensure `client/dist` exists after build
- Check routes configuration in vercel.json

## Admin Access

- Email: wesleykoech2022@gmail.com or chepkoechjoan55@gmail.com
- Access: `/admin-login` (hidden from public)
- Password: Set in environment variables for production

Your deployment will be available at: `https://your-project.vercel.app`
