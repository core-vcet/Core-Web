# CoRE Platform — Product Requirements Document

**Project:** New CoRE website and platform, Vivekananda College of Engineering & Technology (VCET), Puttur  
**Status:** Draft v0.1 for team review  
**Team Lead:** Jnanesh | **Frontend Co-Leads:** Madhura, Akshatha  

> Working name: **CoRE Hub** (placeholder — the team can rename it).

---

## 1. Product Overview

**Product name:** CoRE Hub (working title)

**Vision in one line:** The website should not just be a website *for* CoRE. It should be a project *built by* CoRE.

**Purpose:** Give CoRE a coded, owned platform that (a) shows the outside world what CoRE learns, builds and achieves, and (b) gradually becomes the place where CoRE runs its own events, members and records.

**Problem statement**

| Problem today | Consequence |
| --- | --- |
| The Wix site only describes CoRE | Visitors cannot see real work, so CoRE looks like any other club |
| Event registration happens outside the site (forms, chats) | Data is scattered, no history, no participant records |
| Member work and contributions are not recorded anywhere | Achievements are forgotten when batches graduate |
| Wix limits custom logic, integrations and student contribution | Students cannot learn by building it |
| Content lives in a few people's heads | Handover after graduation is painful |

**Target users:** new students (1st/2nd year), existing students, CoRE members, faculty, external companies, students from other colleges, and the CoRE team that runs it.

**Primary stakeholders:** CoRE leadership, faculty coordinators, the development team, event organizers, VCET administration (for Cells integration and branding).

**How this differs from the Wix site**

|  | Current Wix site | CoRE Hub |
| --- | --- | --- |
| Nature | Brochure | Living platform (data-driven) |
| Content | Hand-edited pages | Stored in a database, edited via admin dashboard |
| Events | Static pages | Created once, registration, schedule, results and archive all linked |
| Members | List at best | Profiles with projects, events and achievements |
| Ownership | Wix account | Our code, our repo, our hosting |
| Student involvement | None | Students design, build, review and maintain it |

**Success criteria (headline)**

1. Public site launched and used for a real CoRE event registration.
2. At least 80% of active members have a profile with at least one project or contribution.
3. Content updates need no developer (admins use the dashboard).
4. At least 10 different students have merged code into the repo.
5. A new team can set up and run the project from the README in under one hour.

---

## 2. Product Vision

**Long-term vision:** Move CoRE's online presence from *describing the community* to *demonstrating what the community is learning, building, achieving and contributing*.

**"Built by CoRE, for CoRE."** Three meanings:

- **Built by CoRE:** the codebase is a showcase project. Its commit history, contributors and architecture docs are themselves proof of CoRE's skill.
- **For CoRE:** features serve real CoRE needs (events, membership, recognition) before anything decorative.
- **Owned by CoRE:** no dependency on one person. Documented, reproducible, handed over each year.

**Evolution in three layers**

```
Layer 1: PUBLIC WEBSITE        -> shows projects, events, people, achievements
Layer 2: MEMBER PLATFORM       -> logins, profiles, registrations, contributions
Layer 3: ADMIN + EXPERIMENTAL  -> dashboard, attendance, analytics, Playground
```

Each layer must work on its own. We launch Layer 1 + the foundations of Layer 2 first.

---

## 3. User Types and Roles

| Role | Who | Can do |
| --- | --- | --- |
| **Public Visitor** | Anyone, no login | Browse all public pages, view public profiles, projects, events, gallery; contact CoRE |
| **Student** | Logged-in VCET student (not yet a member) | Everything above + register for events, apply to join CoRE |
| **CoRE Member** | Approved member | Edit own profile, add/edit own projects, see own registrations/attendance, propose achievements |
| **Event Organizer** | Member assigned to an event | Create/edit own events, schedule, rules; view and manage participants; mark attendance; post event announcements |
| **Content Contributor** | Member helping with content/media | Create/edit gallery albums, announcements, page content (no user management) |
| **Admin** | Core team | Approve members, verify achievements, manage all projects/events/media/announcements, view registrations, assign roles (except Super Admin) |
| **Super Admin** | CoRE leadership + faculty coordinator | Full control: roles, settings, audit logs, data export, deletion |

**Additional roles proposed**

- **Faculty Coordinator (read-mostly):** views dashboards, approves sensitive things (for example official achievements), no day-to-day editing.
- **Alumni:** former member. Profile stays public (if they agree), editing is limited, tagged "Alumni".
- **Developer (technical, not a user role):** access to repo and deployment, not automatically to production data.

A person can hold multiple roles. A role is a set of permissions, so we can add roles later without changing code structure.

---

## 4. Information Architecture

Three distinct areas, clearly separated.

### 4.1 Public website (no login)

```
Home
About
  - Vision, mission, objectives, what CoRE does
  - Leadership message (founder/coordinator)
Projects
  - Project listing (filter by tech/category/status)
  - Project detail
Events
  - Upcoming | Past (calendar view optional)
  - Event detail (schedule, rules, register, results, gallery)
People
  - Members directory (filter by year/skills/role)
  - Member profile
Achievements
Gallery
  - Albums (linked to events)
Announcements (also shown on Home and event pages)
Join CoRE
Contact
Footer (quick links, social, location)
```

**Changes from the proposals:**

- *Members* renamed **People** (includes alumni and leadership).
- *CoRE Unbounded* and *CoRE Unleashed* are **events**, not top-level sections (see section 9). They can be featured on Home.
- *Announcements* become a data feature shown in several places, with an optional archive page.
- *Founder's message* lives on About, with a short excerpt on Home.

### 4.2 Authenticated member platform

```
My Dashboard
My Profile (edit)
My Projects (add/edit)
My Events (registrations, attendance)
My Contributions
Membership status
```

### 4.3 Admin platform

```
Dashboard (overview)
Members + Membership Applications
Projects (moderation)
Events + Registrations + Attendance
Achievements (verification)
Announcements
Media / Gallery
Users & Roles
Site Settings (contact info, social links, leadership message)
Audit Log
```

### 4.4 Experimental

```
Playground (future, members only)
```

---

## 5. Feature Requirements

**Priority key:** P0 = MVP, P1 = important (Phase 2), P2 = future, P3 = experimental.

### 5.0 Overview of features and phases

| # | Feature | Area | Priority | Source |
| --- | --- | --- | --- | --- |
| F1 | Home page | Public | P0 | All |
| F2 | About + leadership message | Public | P0 | Madhura, Akshatha |
| F3 | Project system | Public + Member | P0 | Madhura, Jnanesh |
| F4 | Member profiles + directory | Public + Member | P0 | Madhura, Jnanesh |
| F5 | Event system (listing, detail, past events) | Public + Admin | P0 | All |
| F6 | Event registration | Student | P0 (basic) / P1 (advanced) | Jnanesh, Akshatha |
| F7 | Authentication + roles | Platform | P0 | Jnanesh |
| F8 | Admin dashboard | Admin | P0 (core) / P1 (rest) | Jnanesh |
| F9 | Gallery | Public + Admin | P0 (simple) | Madhura, Akshatha |
| F10 | Achievements | Public + Admin | P0 (admin-curated) | Madhura |
| F11 | Contact + footer | Public | P0 | All |
| F12 | Join CoRE (membership application) | Student | P0 (simple) / P1 (verified) | Madhura, Jnanesh |
| F13 | Announcements | Public + Admin | P1 (simple version in P0) | Akshatha |
| F14 | Attendance | Admin/Member | P1 | Jnanesh |
| F15 | Contribution tracking | Member | P1 | Jnanesh |
| F16 | Cells integration | Platform | P1 (needs feasibility) | Jnanesh |
| F17 | Analytics | Admin | P1/P2 | Derived |
| F18 | Playground | Member | P3 | Jnanesh |

### 5.1 Overlaps, conflicts and dependencies in the proposals

**Overlaps (merge into one feature)**

| Appears in | Merged into |
| --- | --- |
| Events (Madhura), Events + Event Registration (Jnanesh), Events + Unbounded/Unleashed + Schedule + Rules + Registration (Akshatha) | One **Event system** with schedule, rules, registration, results |
| Gallery in Madhura and Akshatha | One **Gallery** with albums linked to events |
| About, Contact, Home in all three | Standard public pages, content editable from admin |
| Members (Madhura) and Profiles (Jnanesh) | One **Member profile** system |
| Projects (Madhura) and Project listing (Jnanesh) | One **Project system** tied to profiles |

**Conflicts and how we resolve them**

| Conflict | Resolution |
| --- | --- |
| Akshatha's proposal hardcodes Unbounded and Unleashed as pages; Jnanesh wants a real event system | Treat them as event records using a reusable event template. A new event gets a page without code changes. |
| Madhura's "Join CoRE" is a section; Jnanesh wants proper registration and database | Build Join CoRE as a real application flow, but keep it simple in MVP (manual approval). |
| Jnanesh warns against a sales-pitch "Why join" section; Madhura lists "why students might want to participate" | Show the *evidence* (projects, events, people) and keep one short, honest "What you can do in CoRE" block. No long pitch. |
| Event-only microsite style (Akshatha: header, footer, rules, schedule) vs club-wide site | One site, one navigation. Events get their own **event page layout**, not a separate site. |
| Attendance + member verification is unresolved | Deferred to Phase 2; see sections 12 and 30. |

**Dependencies**

```
Authentication ──> Roles/Permissions ──> Admin dashboard
       │                                     │
       ├──> Member profiles ──> Projects ──> Contribution tracking
       │
       └──> Event registration ──> Participant records ──> Attendance ──> Analytics

Media storage ──> Gallery, Project screenshots, Profile photos, Event banners
Cells API (unvalidated) ──> Verified registration, auto-fill, membership checks
Playground ──> Auth + infrastructure + security review (everything else first)
```

---

## 6. Home Page

**Goal:** In under 10 seconds a visitor should think: *"This is an active technical community that builds things."*

**Not** a generic corporate landing page. No stock photos, no empty slogans.

### 6.1 Sections (top to bottom)

| # | Section | Content | Data source | Priority |
| --- | --- | --- | --- | --- |
| 1 | **Header/Nav** | Logo, Projects, Events, People, About, Contact, **Join CoRE** button, Login | Static | P0 |
| 2 | **Hero** | One strong statement of what CoRE is, a short tagline, a live visual (for example an animated project/code-themed element), two CTAs: *See what we build* and *Join CoRE* | Static + featured items | P0 |
| 3 | **Live strip / Announcements** | Latest 1-3 announcements and registration deadlines | Announcements | P0 |
| 4 | **Featured projects** | 3-6 projects with screenshot, one-line description, tech chips, "Open live" / "GitHub" | Projects (flagged featured) | P0 |
| 5 | **Upcoming events** | Next events with date and Register button, plus an optional "just ended" highlight | Events | P0 |
| 6 | **By the numbers (real)** | Projects built, events held, members, awards. Pulled from the database, not typed in | Aggregates | P1 |
| 7 | **Achievements** | Recent wins/awards (3-4) | Achievements | P0 |
| 8 | **People** | Rotating member spotlight or recent contributors | Members | P1 |
| 9 | **Leadership message** | Short excerpt + link to About | Settings | P0 |
| 10 | **Gallery strip** | Recent photos | Gallery | P0 |
| 11 | **Join CoRE** | Short block that points to projects/events and the application | Static | P0 |
| 12 | **Footer** | Logo, quick links, social, contact, college location, copyright | Settings | P0 |

### 6.2 UI requirements

- Modern, interactive, professional, with a distinct CoRE visual identity (colors, type, motion language agreed in the design phase).
- Interactions must add meaning (for example hovering a project card shows the tech used). No animation that blocks content.
- Fast: hero must be usable before heavy assets load. Respect `prefers-reduced-motion`.
- Works well on a phone (many students will arrive from a WhatsApp link).
- Empty states designed deliberately (for example no upcoming events: show "Next event coming soon" and the latest past event).

---

## 7. Member Profile System

**User story:** *As a CoRE member, I want a profile that shows my work inside CoRE, so that visitors and future employers can see what I actually did.*

### 7.1 Public vs private data

| Field | Visibility | Who can edit |
| --- | --- | --- |
| Name | Public | Member (admin approval for changes if needed) |
| Photo | Public | Member (moderated) |
| Role in CoRE | Public | Admin only |
| Batch / year / department | Public (department and batch only) | Member |
| Bio / about | Public | Member |
| Skills | Public | Member |
| Projects and contributions | Public | Member (verified by project lead/admin) |
| Events participated | Public (opt-out allowed) | System |
| Achievements | Public (once verified) | Member proposes, admin verifies |
| GitHub, LinkedIn, other links | Public | Member |
| Email | **Hidden by default**; member can choose to show | Member |
| USN / roll number | **Private** (admin only) | Admin/system |
| Phone number | **Private** | Member |
| Membership status and join date | Private (admin + self) | Admin |
| Attendance records | Private (self + admin) | System/admin |
| Participation and internal activity score | Private (self + admin) | System |
| Admin notes | Private (admin only) | Admin |

---

## 8. Project System

**Project fields:** Title, slug, Short description, Full description, Category, Technologies, Project lead, Contributors, GitHub URL, Deployment URL, Screenshots/media, Status, Featured flag, Approval status.

**Behaviour:**
- If deployed: card button links to **Open Project**.
- Otherwise links to GitHub or project detail page.

---

## 9. Event Management System

**Lifecycle:** `Draft -> Upcoming -> Registration Open -> Registration Closed -> Ongoing -> Completed -> Archived (Past Event)`

Flagship events like *CoRE Unbounded* and *CoRE Unleashed* are first-class event records with flagship layouts and historical editions.

---

## 10. Event Registration

Login-based registration with pre-filled profiles, custom questions, duplicate check, capacity tracking, confirmation email, and CSV exports for organizers.

---

## 11. Membership Registration

Flow: Apply -> Pending -> Admin Review -> Approved (Active Member) -> Onboarding checklist.

---

## 12. Attendance System (Phase 2)

Organizer marking, rotating QR, session-level attendance.

---

## 13. Project & Contribution Tracking

Contribution timeline linking projects, organized/attended events, achievements, and code contributions.

---

## 14. Achievements

Admin-curated and member-submitted achievements with proof verification.

---

## 15. Gallery / Media

Cloud/object storage integration, albums linked to events, moderation workflow.

---

## 16. Announcements

Targeted announcements across Home, event pages, and dedicated archives.

---

## 17. Playground (Experimental / P3)

In-browser coding environments (Pyodide client-side runners first; containerized sandboxes later).

---

## 18. Admin Dashboard

Role-based management of members, projects, events, registrations, achievements, media, and site settings.

---

## 19. Technology Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS + Radix / Lucide
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** Auth.js (NextAuth)
- **Validation:** Zod
- **Storage:** S3-compatible / Cloudinary
- **CI/CD:** GitHub Actions + Vercel / Docker

---

## 20. Database / Data Model Summary

Key models: `User`, `StudentProfile`, `Role`, `UserRole`, `MembershipApplication`, `Member`, `Skill`, `MemberSkill`, `MemberLink`, `Project`, `ProjectContributor`, `Technology`, `ProjectTechnology`, `EventSeries`, `Event`, `EventScheduleItem`, `EventRule`, `EventOrganizer`, `EventRegistration`, `Team`, `TeamMember`, `Attendance`, `Achievement`, `Announcement`, `Album`, `Media`, `SiteSetting`, `AuditLog`.
