# Core-Web

> The official platform and website for **CoRE** (Center of Research and Excellence), Vivekananda College of Engineering & Technology (VCET), Puttur.
>
> *"Built by CoRE, for CoRE."*

---

## 🌟 Overview

**CoRE** is not just a club website—it is an open-source, community-built platform designed to demonstrate what CoRE members learn, build, achieve, and contribute. It replaces static brochures with a dynamic, living system for showcasing real projects, managing registrations for flagship events (like *CoRE Unbounded* & *CoRE Unleashed*), and tracking member contributions.

Detailed product requirements and system specifications can be found in [PRD.md](file:///c:/PROJECTS/CoRE-Web/PRD.md).

---

## 🏗️ Architecture & Three-Layer Model

```
Layer 1: PUBLIC WEBSITE        -> Showcases projects, events, people, achievements & gallery
Layer 2: MEMBER PLATFORM       -> Logins, profiles, registrations & contribution timeline
Layer 3: ADMIN + EXPERIMENTAL  -> Admin dashboard, attendance, analytics & browser Playground
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, React, TypeScript) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & Lucide Icons |
| **Database** | [PostgreSQL](https://www.postgresql.org/) managed with [Prisma ORM](https://www.prisma.io/) |
| **Authentication** | [Auth.js](https://authjs.dev/) (NextAuth) |
| **Validation** | [Zod](https://zod.dev/) |
| **Media Storage** | S3-Compatible Object Storage / Cloudinary |
| **CI/CD & Deploy** | GitHub Actions & Vercel / VPS Docker |

---

## 📋 Core Features (MVP / P0)

- 🌐 **Modern Public Showcase:** High-impact hero, live announcements, featured projects, upcoming events, and achievements.
- 💻 **Project System:** Filterable repository of projects built by members with live demos, GitHub repositories, and contributor attributions.
- 📅 **Event Lifecycle Management:** Flagship events, schedules, rulebooks, eligibility criteria, and integrated registration.
- 👤 **Member Profiles & Directory:** Public profiles spotlighting skills, verified roles, projects, and event history.
- 🛡️ **Role-Based Admin Dashboard:** Content moderation, applicant vetting, event participant CSV export, and site configurations.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or pnpm or yarn
- PostgreSQL instance (local or managed like Neon/Supabase)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/core-vcet/Core-Web.git
   cd Core-Web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```
   Fill in your PostgreSQL database URL, Auth secrets, and storage credentials.

4. **Run Database Migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👥 Core Team

- **Team Lead:** Jnanesh
- **Frontend Co-Leads:** Madhura, Akshatha
- **Community:** CoRE VCET Puttur

---

## 📄 License

This project is maintained by the CoRE community at VCET Puttur under the MIT License.
