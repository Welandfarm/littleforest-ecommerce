# LittleForest - Seedling E-commerce Platform

> Restoring Water Resources, One Tree at a Time

LittleForest is a modern e-commerce platform for an online seedling nursery business based in Bomet County, Kenya. The platform enables customers to browse and order indigenous trees, fruit trees, ornamental plants, and organic honey while supporting environmental restoration and sustainable living.

## 🌱 Features

- **Product Catalog**: Browse indigenous trees, fruit trees, ornamental plants, and organic honey
- **Category Filtering**: Filter products by type for easy navigation  
- **Shopping Cart**: Add items and manage quantities before ordering
- **WhatsApp Integration**: Place orders directly through WhatsApp
- **Admin Dashboard**: Manage products, content, and customer inquiries
- **Responsive Design**: Mobile-first design that works on all devices
- **Secure Authentication**: Role-based access control for admin users

## 🚀 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **TanStack React Query** for data fetching
- **React Router** for navigation
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **Supabase** for authentication and storage

### Database
- **Supabase PostgreSQL** for data persistence
- Type-safe database operations with Drizzle ORM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/littleforest-ecommerce.git
   cd littleforest-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Supabase credentials:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 🌍 Environment Setup

### Supabase Configuration
1. Create a new Supabase project
2. Run the SQL scripts in `supabase-setup.sql` to create tables
3. Enable Row Level Security (RLS) policies
4. Update environment variables with your project details

### Admin Access
- Admin login is available at `/admin-login`
- Default admin accounts are configured for authorized users
- Admins can manage products, content, and view customer inquiries

## 📱 Usage

### For Customers
- Browse products by category (Indigenous Trees, Fruit Trees, Ornamental Plants, Honey)
- Add items to cart and adjust quantities
- Place orders through WhatsApp integration
- Contact the nursery for general inquiries

### For Administrators
- Access admin dashboard at `/admin-login`
- Add, edit, and delete products
- Manage website content
- View and respond to customer inquiries
- Upload product images

## 🛠️ Development

### Project Structure
```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── contexts/    # React contexts (Auth, Cart)
│   │   ├── hooks/       # Custom React hooks
│   │   └── pages/       # Application pages
├── server/              # Express backend
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database operations
│   └── supabase.ts      # Supabase client setup
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema definitions
└── migrations/          # Database migrations
```

### Key Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🎨 Design System

The application uses a green and orange color scheme reflecting nature and sustainability:
- Primary: Green tones for environmental themes
- Accent: Orange for call-to-action elements
- Typography: Clean, readable fonts optimized for all devices

## 📞 Contact Integration

Orders are processed through WhatsApp Business API integration:
- Phone: +254108029407
- Automated message templates for orders and inquiries
- Direct communication channel with customers

## 🚀 Deployment

The application is designed for deployment on Replit with autoscale capabilities:
- Single-server architecture serving both API and static files
- Environment variable configuration
- Automatic SSL and domain management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌿 About LittleForest Nursery

LittleForest Nursery is a nature-inspired social enterprise rooted in Bomet County, Kenya. We specialize in:

- **Indigenous Trees**: Seedlings for reforestation and water source restoration
- **Fruit Trees**: Supporting food security and sustainable livelihoods  
- **Ornamental Plants**: For greening homes and community beautification
- **Organic Honey**: Harvested from indigenous forest ecosystems

Our mission is to help communities grow their own little forests while contributing to ecosystem restoration, water conservation, and sustainable development.

---

**Built with 🌱 by LittleForest Nursery Team**