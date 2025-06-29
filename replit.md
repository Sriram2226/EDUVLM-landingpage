# EduVLM-Bench Research Portal

## Overview

EduVLM-Bench is a research-focused web application that presents a multimodal benchmark for evaluating vision-language models on educational concept learning tasks. The application serves as a research portal featuring a landing page with research details and a leaderboard showcasing model performance metrics.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API endpoints
- **Development Server**: Vite for development with HMR support
- **Build System**: ESBuild for production bundling

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle ORM)
- **ORM**: Drizzle ORM with Zod schema validation
- **Connection**: Neon Database serverless connection
- **Development Storage**: In-memory storage for development/demo purposes

## Key Components

### Frontend Components
1. **Landing Page** (`client/src/pages/landing.tsx`)
   - Research overview and abstract
   - Key performance metrics display
   - Author information
   - Citation modal functionality

2. **Leaderboard Page** (`client/src/pages/leaderboard.tsx`)
   - Sortable model performance table
   - Filtering capabilities (model type, size)
   - Interactive sorting with visual indicators

3. **Navigation** (`client/src/components/navigation.tsx`)
   - Sticky navigation bar
   - Download paper functionality
   - Route highlighting

4. **UI Components** (`client/src/components/ui/`)
   - Complete shadcn/ui component library
   - Custom themed components using CSS variables

### Backend Components
1. **Routes** (`server/routes.ts`)
   - `/api/leaderboard` - GET endpoint for leaderboard data
   - `/api/download-paper` - GET endpoint for paper download (placeholder)

2. **Storage Layer** (`server/storage.ts`)
   - Abstract storage interface
   - In-memory implementation for development
   - Pre-populated leaderboard data

3. **Database Schema** (`shared/schema.ts`)
   - User authentication schema
   - Leaderboard entries schema with performance metrics

## Data Flow

1. **Client Request**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle HTTP requests
3. **Storage Layer**: Abstract storage interface provides data access
4. **Response**: JSON data returned to client components
5. **State Management**: React Query caches and manages server state
6. **UI Updates**: Components re-render with updated data

## External Dependencies

### Database & ORM
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL connection
- **connect-pg-simple**: PostgreSQL session store

### UI & Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Consistent icon system
- **date-fns**: Date manipulation utilities

### Development Tools
- **Vite**: Fast development server and build tool
- **TypeScript**: Type safety across the application
- **TanStack React Query**: Server state management
- **Wouter**: Lightweight routing library

## Deployment Strategy

### Development Mode
- Vite development server with HMR
- In-memory storage for rapid prototyping
- TypeScript compilation on-the-fly

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild compiles server code to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory
- **Environment**: Requires `DATABASE_URL` environment variable

### Database Setup
- Uses Drizzle Kit for schema management
- `npm run db:push` applies schema changes
- PostgreSQL dialect configured for production

## Changelog
- June 29, 2025. Initial setup
- June 29, 2025. Complete implementation of EduVLM-Bench research website with landing page, leaderboard, navigation, and footer components

## Recent Changes
✓ Landing page with research overview, methodology, and performance metrics
✓ Interactive leaderboard with sorting and filtering functionality
✓ Navigation component with proper routing
✓ Footer component with links and author information
✓ Clean white background with academic styling
✓ Fixed Select component validation errors
✓ Responsive design with mobile-friendly layout
✓ Created simple HTML/CSS/JS version in `simple-site/` directory for beginners

## User Preferences
Preferred communication style: Simple, everyday language.
Keep codebase simple for beginners to work with.