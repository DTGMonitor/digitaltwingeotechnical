# DTG Website Deployment

## Project Summary

This website is a Next.js App Router project written in TypeScript and styled with Tailwind CSS. It uses npm and is ready for deployment on Vercel.

No environment variables are currently required.

The contact form is currently a static interface only. It does not submit data or send email. Before enabling submissions in production, connect it to an approved backend, email provider, or CRM endpoint and add any provider credentials as Vercel environment variables.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Verify Production

Run the lint check:

```bash
npm run lint
```

Create the production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run start
```

## Upload to GitHub

1. Create an empty repository in GitHub. Do not initialize it with a README, `.gitignore`, or license.
2. Copy the repository URL from GitHub.
3. From this project folder, connect the local repository and push:

```bash
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git branch -M main
git push -u origin main
```

For later updates:

```bash
git add .
git commit -m "Describe the update"
git push
```

## Deploy to Vercel

1. Sign in to Vercel with the GitHub account that can access the repository.
2. In the Vercel dashboard, select **Add New...** and then **Project**.
3. Import the DTG GitHub repository.
4. Confirm that Vercel detects **Next.js** as the framework preset.
5. Leave the default build command as `npm run build`.
6. No environment variables need to be added for the current website.
7. Select **Deploy**.

Vercel will create a production deployment for the default branch. Future pushes to the production branch create new production deployments. Pull requests and non-production branches receive preview deployments.

## Add a Custom Domain

1. Open the deployed project in the Vercel dashboard.
2. Go to **Settings** and then **Domains**.
3. Add the DTG domain.
4. Follow the DNS instructions shown by Vercel for the domain provider.
5. After DNS verification completes, confirm that the domain is assigned to the production environment.

## Environment Variables

No environment variables are required for the current static website.

If the contact form is connected to an external service later, add only the variables required by that approved service in **Project Settings > Environment Variables** in Vercel. Do not commit secrets to Git.
