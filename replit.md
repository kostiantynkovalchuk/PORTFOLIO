# Overview

This is a personal portfolio website for Kostiantyn Kovalchuk, a Product Owner & Frontend Developer. The site is built as a modern full-stack web application featuring a dual-language video hero section, filterable project case studies, and a resume-first information page. The portfolio showcases work across mini apps, web development, and product management categories with a clean, minimalist design inspired by modern portfolio sites.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with two main routes (Home `/` and Info `/info`)
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring an electric blue accent color (#0099ff)
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives for accessibility
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Development Setup**: Custom Vite integration for hot module replacement in development
- **API Structure**: RESTful API pattern with `/api` prefix, though currently minimal backend functionality
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM for production-ready data persistence
- **ORM**: Drizzle ORM with schema-first approach and automatic TypeScript type generation
- **Migrations**: Automated database schema management through Drizzle Kit
- **Development Storage**: In-memory storage implementation for development and testing

## Project Structure
- **Monorepo Layout**: Shared schema and types between client and server in `/shared` directory
- **Client Code**: React application in `/client` with component-based architecture
- **Server Code**: Express server in `/server` with modular route and storage abstractions
- **Static Assets**: Project images and content stored in `/attached_assets`

## Content Management
- **Case Studies**: Static JSON data structure for portfolio projects with filtering by category
- **Resume Integration**: PDF resume display and download functionality
- **Dual Language Support**: Toggle between English and Spanish video content in hero section

## Development Features
- **Type Safety**: Full TypeScript coverage across client, server, and shared code
- **Hot Reload**: Vite integration for instant development feedback
- **Error Handling**: Runtime error overlay for development debugging
- **Code Quality**: Consistent import aliases and path resolution

# External Dependencies

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Headless UI components for accessibility and keyboard navigation
- **Lucide React**: Consistent icon library for UI elements
- **shadcn/ui**: Pre-built component library following design system principles

## Development Tools
- **Vite**: Build tool and development server with React plugin
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Database and ORM
- **PostgreSQL**: Production database with Neon serverless deployment
- **Drizzle ORM**: Type-safe database operations with automatic migrations
- **Drizzle Kit**: Schema management and migration tooling

## React Ecosystem
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing solution
- **React Day Picker**: Date selection components

## Deployment and Platform
- **Replit Integration**: Development environment with runtime error handling
- **Node.js**: Server runtime environment
- **Express Session**: Session management with PostgreSQL store