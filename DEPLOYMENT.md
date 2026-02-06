# Deployment Guide (AWS Amplify + Domain)

This guide prepares the Manpra Infotech MVP for AWS Amplify Hosting and a custom domain.

## 1) Push to GitHub
1. Create a repo on GitHub (private or public).
2. In this project folder:
   - `git init`
   - `git add .`
   - `git commit -m "Initial MVP"`
   - `git branch -M main`
   - `git remote add origin <your-repo-url>`
   - `git push -u origin main`

## 2) AWS Amplify Setup (SSR)
1. Open AWS Amplify Console and click **New App → Host web app**.
2. Connect your GitHub repo and select the `main` branch.
3. Amplify auto-detects `amplify.yml`.
4. Add environment variables:
   - `DATABASE_URL`
   - `ADMIN_PASSWORD`
   - `NEXT_PUBLIC_SITE_URL`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `EMAIL_FROM`
5. Deploy and wait for build to finish.

## 3) Environment Variables (Production)
Recommended values:
- `DATABASE_URL`: For production, use a managed DB (e.g. Postgres on RDS). SQLite is not recommended for production.
- `ADMIN_PASSWORD`: Strong random password.
- `NEXT_PUBLIC_SITE_URL`: `https://manprainfotech.com`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: `91xxxxxxxxxx`
- `EMAIL_FROM`: `deliveries@manprainfotech.com`

## 4) Domain Setup (GoDaddy + Cloudflare)
**Recommended flow:** buy/keep domain at GoDaddy, set DNS on Cloudflare.

1. In GoDaddy, set nameservers to Cloudflare nameservers.
2. In Cloudflare, add the domain and wait for activation.
3. In Amplify Console → **Domain management** → **Add domain**.
4. Add `manprainfotech.com` and `www.manprainfotech.com`.
5. Amplify provides CNAME records. Add those in Cloudflare DNS.
   - Set them to **DNS only** (gray cloud) until SSL is issued.
6. Wait for verification and SSL issuance, then enable redirects (www → apex).

## 5) SQLite Reset Warning
SQLite is file-based. On serverless or ephemeral builds, the SQLite file can reset.
For production, use a managed DB (Postgres) to avoid data loss.

## 6) Post-Deploy Check
- `GET /health` should return JSON OK.
- `/products` should list all products.
- `/merchant/feed.csv` should return the product feed.
