# CoRE Design System & Guidelines

> **Project:** CoRE (Center of Research and Excellence) Platform  
> **Frontend Co-Leads:** Madhura, Akshatha  
> **Motto:** *"Demonstrating what we build, not just describing who we are."*

---

## 🎨 1. Design Philosophy

CoRE is a community of builders, problem solvers, and researchers. The website must immediately convey engineering craftsmanship, high aesthetic quality, and technical vibrancy.

1. **Demonstration Over Description:** Show live projects, real repositories, interactive demos, and genuine achievements rather than stock photos or generic club slogans.
2. **Premium & Modern Aesthetics:** Utilize refined dark-mode surfaces, curated harmonious color palettes, subtle glowing borders, and modern typography.
3. **Purposeful Micro-Interactions:** Delight users with responsive hover states, smooth transitions, and live indicators. Motion must clarify hierarchy and enhance usability, never distract or delay.
4. **Mobile-First Accessibility:** Most student visitors arrive via mobile devices (e.g., links shared on WhatsApp). Touch targets, form layouts, and navigation must feel effortless on small screens (down to 360px).

---

## 🌈 2. Color Palette & Visual Tokens

The interface is built primarily on a sleek, dark canvas with vivid primary accents that denote energy, precision, and intelligence.

### Surface Colors
- **Canvas / Background:** `#0B0F17` (Deep Obsidian Void)
- **Surface Level 1 (Cards, Modals):** `#111827` (Rich Navy Slate)
- **Surface Level 2 (Hover states, elevated cards):** `#1E293B` (Muted Slate)
- **Border / Divider:** `#1F2937` / `#374151` (Subtle dark strokes)
- **Glassmorphism Backdrop:** `rgba(17, 24, 39, 0.75)` with `backdrop-filter: blur(12px)`

### Brand & Accent Colors
- **Primary Accent (Cyan / Electric Blue):** `#06B6D4` / `#3B82F6` — Used for primary CTAs, links, and key highlights.
- **Secondary Accent (Violet / Purple):** `#8B5CF6` / `#A855F7` — Used in gradient pairings, badges, and flagship event accents.
- **Success:** `#10B981` (Emerald) — Live statuses, confirmed registrations, completed projects.
- **Warning:** `#F59E0B` (Amber) — Upcoming deadlines, pending review, draft states.
- **Danger / Error:** `#EF4444` (Rose / Red) — Registration closed, errors, destructive actions.

### Typography Colors
- **Text High-Contrast (Headings):** `#F9FAFB` (98% lightness)
- **Text Body / Secondary:** `#D1D5DB` (Tailwind Gray-300)
- **Text Muted / Tertiary:** `#9CA3AF` (Tailwind Gray-400)
- **Text Disabled:** `#4B5563` (Tailwind Gray-600)

---

## 🔤 3. Typography Hierarchy

We utilize clean geometric sans-serif typefaces such as **Inter**, **Geist**, or **Outfit**.

| Element | Size (Desktop / Mobile) | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Display 1** | 3.5rem (56px) / 2.25rem (36px) | 800 (Extrabold) | 1.1 | Hero headline, flagship event banners |
| **Heading 1** | 2.5rem (40px) / 1.875rem (30px) | 700 (Bold) | 1.2 | Page titles (Projects, Events, People) |
| **Heading 2** | 1.75rem (28px) / 1.5rem (24px) | 600 (Semibold) | 1.3 | Major section titles, card group headings |
| **Heading 3** | 1.25rem (20px) / 1.125rem (18px) | 600 (Semibold) | 1.4 | Card headers, modal titles |
| **Body Large** | 1.125rem (18px) / 1rem (16px) | 400 (Regular) | 1.6 | Hero lead paragraphs, project summaries |
| **Body Regular** | 1rem (16px) / 0.9375rem (15px) | 400 (Regular) | 1.5 | Standard text, descriptions, articles |
| **Small / Meta** | 0.875rem (14px) / 0.8125rem (13px) | 500 (Medium) | 1.4 | Badges, date tags, category chips |
| **Code / Monospace** | 0.875rem (14px) | 400 (Regular) | 1.5 | Code snippets, tech tags, commit hashes |

---

## 🧩 4. Core Components & Patterns

### 4.1 Buttons & Interactive Elements
- **Primary Button:** Gradient background (`linear-gradient(to right, #06B6D4, #3B82F6)`), crisp white text, subtle hover lift (`translate-y-[-1px]`) and soft glow shadow.
- **Secondary / Ghost Button:** Transparent background, `1px solid #374151` border, hover background `rgba(255, 255, 255, 0.05)`.
- **Minimum Touch Target:** 44px × 44px on mobile screens.

### 4.2 Cards
- **Project Card:**
  - Cover screenshot or media preview with 16:9 aspect ratio.
  - Category badge in top corner.
  - Project title, concise 2-line summary.
  - Tech chips (React, PyTorch, Docker, etc.).
  - Action buttons: If live deployment exists, prominent **"Open Live"** button; alongside secondary **"GitHub"** icon link.
- **Event Card:**
  - Event date pill (e.g., `OCT 24`).
  - Status badge: `Registration Open`, `Upcoming`, `Completed`.
  - Title, venue / time, short description.
  - Quick register CTA button with capacity counter.

### 4.3 Form Inputs
- Rounded-lg styling (`border: 1px solid #374151`, background: `#111827`).
- Active focus state: `#3B82F6` border with 3px focus ring (`ring-blue-500/20`).
- Clear visual inline validation states with descriptive error text beneath input fields.

### 4.4 Empty & Loading States
- Never leave a section blank when data is absent.
- **Empty State:** Clean illustrative icon + friendly, actionable text (e.g., *"No upcoming events scheduled right now. Browse our past event archives or submit a project idea!"*).
- **Loading State:** Shimmer skeleton placeholders matching exact layout dimensions.

---

## 🎬 5. Motion, Transitions & Micro-Animations

- **Transitions:** Standard transitions use `cubic-bezier(0.4, 0, 0.2, 1)` with durations between `150ms` and `250ms`.
- **Hover Effects:** Subtle scaling (`scale-[1.02]`) and border luminescence on cards.
- **Reduced Motion Support:** Always respect user system preferences:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## ♿ 6. Accessibility & Inclusivity (WCAG 2.1 AA)

- **Color Contrast:** Minimum 4.5:1 ratio for normal body copy and 3:1 for large display headers against their backgrounds.
- **Focus Rings:** Visible, high-contrast keyboard focus indicators (`outline` or `ring`) on all interactive items.
- **Alt Text:** Mandatory meaningful descriptive `alt` text for all screenshots, gallery photos, and member avatars.
- **Semantic HTML:** Structure documents with single `<h1>`, proper heading nesting (`<h2>` - `<h4>`), `<main>`, `<nav>`, `<article>`, and `<aside>`.
