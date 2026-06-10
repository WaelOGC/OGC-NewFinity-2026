# Deployment Guide — OGC NewFinity

## Prerequisites
- VPS with Dokploy (already set up on Hostinger)
- Domain: ogcnewfinity.com
- Anthropic API Key
- Resend API Key (for emails)

## Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial OGC NewFinity website"
git remote add origin https://github.com/YOUR_USERNAME/ogc-newfinity.git
git push -u origin main
```

## Step 2 — Dokploy Setup
1. Open Dokploy panel (from Hostinger → Manage Panel)
2. Create New Application → Connect GitHub repo
3. Build: Dockerfile (automatic)
4. Port: 3000

## Step 3 — Environment Variables in Dokploy
Add these in Dokploy → Environment:
```
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
LEAD_EMAIL=contact@ogcnewfinity.com
```

## Step 4 — Domain Setup
In Dokploy → Domains:
- Domain: ogcnewfinity.com
- Enable SSL: Yes (Let's Encrypt automatic)

## Step 5 — Enable Resend Emails
1. Go to resend.com → Create account
2. Add domain: ogcnewfinity.com
3. Get API key → add to env
4. Uncomment the Resend code in:
   - app/api/submit-idea/route.ts
   - app/api/contact/route.ts

## Done!
Your site is live at https://ogcnewfinity.com with:
- Full website (7 sections)
- AI Chatbot (Nova) — 24/7 lead capture
- Submit Idea form
- Contact form
