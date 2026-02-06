# Manpra Infotech Antivirus Store (Phase 1 MVP)

## Setup
1. Copy `.env.example` to `.env` and update values.
2. Install dependencies:
   - `npm install`
3. Initialize database:
   - `npm run db:push`
   - `npm run db:seed`

## Run
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`

## Health Check
- `GET /health` returns `{ ok: true }` JSON for uptime monitoring.

## Production Environment Variables
Set these in your deployment platform (AWS Amplify or otherwise):
- `DATABASE_URL` (e.g. `file:./dev.db` for local, a managed DB URL for production)
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL` (e.g. `https://manprainfotech.com`)
- `EMAIL_FROM`

## Deploy (AWS Amplify Hosting)
This project is configured for AWS Amplify Hosting (SSR) via `amplify.yml`.

1. Push this repo to GitHub/GitLab.
2. In AWS Amplify Console: **New App → Host Web App**.
3. Connect the repo and select the branch.
4. In **Build settings**, Amplify will auto-detect `amplify.yml`.
5. In **Environment variables**, add the production values listed above.
6. Deploy.

### Connect Domain
1. In Amplify Console, go to **Domain management** → **Add domain**.
2. Add `manprainfotech.com` and `www.manprainfotech.com`.
3. If using Cloudflare DNS:
   - Create the CNAME records Amplify provides.
   - Set DNS-only (gray cloud) for the CNAMEs so SSL validation works.
4. Wait for verification, then enable automatic redirects (www → apex).

### Free-tier Cost Notes
- Amplify Hosting has a free tier suitable for MVP traffic.
- Keep images and logs minimal, and monitor usage in AWS Billing.
- Add an AWS Budget alert at $1 for safety.

## Core Endpoints
- Health check: `/health`
