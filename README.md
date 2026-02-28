# Portfolio

A clean, modern portfolio for ML, computer vision, and full-stack work. Built with React, Vite, Tailwind, and Motion.

## Tech Stack

- **React** + **Vite** – Fast dev and build
- **Tailwind CSS** – Styling
- **Motion** – Animations
- **Resend** – Contact form emails
- **Lucide React** – Icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
```

Output goes to `dist/`.

## Contact Form (Resend)

The contact form sends emails via [Resend](https://resend.com). You need a Resend API key and env vars.

1. Copy `.env.example` to `.env`
2. Add your [Resend API key](https://resend.com/api-keys)
3. Set `CONTACT_EMAIL` (where form submissions go)
4. Set `RESEND_FROM_EMAIL` (use `onboarding@resend.dev` for testing, or your verified domain for production)

### Local testing

The `/api/contact` route only runs when the API is available. For local testing:

```bash
npx vercel dev
```

This runs both the app and the API routes locally.

## Deploy (Vercel)

1. Push to GitHub and import the project in [Vercel](https://vercel.com)
2. Add environment variables in Vercel → Project → Settings → Environment Variables:
   - `RESEND_API_KEY` (required)
   - `CONTACT_EMAIL` (optional)
   - `RESEND_FROM_EMAIL` (optional)
3. Deploy

The `api/` folder is deployed as serverless functions automatically.

### Custom domain

1. Add your domain in Vercel → Project → Settings → Domains
2. Add the DNS records Vercel provides at your registrar
3. For Resend, verify your domain in the Resend dashboard and add their DNS records (SPF, DKIM)

## Project Structure

```
├── api/
│   └── contact.ts      # Resend email API route
├── src/
│   ├── app/
│   │   ├── components/  # Hero, Projects, Contact, etc.
│   │   └── App.tsx
│   └── main.tsx
└── ...
```

## License

MIT
