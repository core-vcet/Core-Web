# Core-Web

The official website and platform for **CoRE** (Center of Research and Excellence) at Vivekananda College of Engineering & Technology (VCET), Puttur.

*Built by CoRE, for CoRE.*

## What it does

- **Public site:** projects, events, people, achievements and gallery
- **Member platform:** logins, profiles, event registration and contribution history
- **Admin dashboard:** content moderation, applicant review, participant CSV export and site settings

## Tech stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- PostgreSQL with Prisma
- Auth.js
- Zod
- Deployed with GitHub Actions and Vercel or Docker

## Getting started

Requires Node.js 18+ and a PostgreSQL database (local, Neon or Supabase).

```bash
git clone https://github.com/core-vcet/Core-Web.git
cd Core-Web
npm install
cp .env.example .env   # add your database URL, auth secrets and storage keys
npx prisma migrate dev
npm run dev
```

Open http://localhost:3000.

## Docs

- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Design Guidelines](docs/DESIGN.md)
- [Contributing](docs/CONTRIBUTING.md)

## Team

- Team Lead: Jnanesh
- Frontend Co-Leads: Madhura, Akshatha

## License

MIT
