# Shayan Bin Mehar — Developer Portfolio

A dark, modern AI/ML portfolio built with React, Vite, and custom CSS. It presents internships, academic projects, and contact links for internships, collaborations, and learning opportunities.

Live URL after GitHub Pages is enabled: `https://shayanbinmehar.github.io/portfolio/`

## Commands

Run these in the project folder (`D:\Shayan\portfolio`) after Node.js LTS is installed: https://nodejs.org/

```bash
npm install
```

Installs the pinned React, Vite, and Lucide versions from `package-lock.json`.

```bash
npm run dev
```

Starts the local development server. Open the URL shown in the terminal, usually `http://localhost:5173/portfolio/` because the GitHub Pages base path is `/portfolio/`.

```bash
npm run build
```

Creates the production files in `dist/`. Fix any errors before deploying.

```bash
npm run preview
```

Serves the production build locally (often `http://localhost:4173/portfolio/`) so you can check the same files GitHub Pages will host.

```bash
git add .
git commit -m "Publish portfolio"
git push origin main
```

Pushes the site to GitHub. Use these only after Git is installed and the remote is set.

## Personalize remaining placeholders

Open `src/main.jsx`:

- Education: expected graduation date, start year, and coursework
- `projects`: replace each `repo` with a real project URL and update `repoLabel` (currently they point to your GitHub profile)
- `profile.resume`: add `public/resume.pdf` when you have a CV

Do not publish made-up results, titles, or dates.

## GitHub repository and Pages settings

The Vite `base` in `vite.config.js` is `/portfolio/`. That matches a repository named **portfolio**.

1. On GitHub, create a repository named `portfolio` under **ShayanBinMehar** (public if you want a free Pages site).
2. In this folder, connect the remote (Git must be installed and on your PATH):

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ShayanBinMehar/portfolio.git
   git push -u origin main
   ```

3. Open the repo on GitHub → **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and confirm **Deploy portfolio to GitHub Pages** runs on the `main` push. If it is waiting, click **Run workflow**.
6. After the workflow succeeds, the site is at:

   `https://shayanbinmehar.github.io/portfolio/`

If the repository name is not `portfolio`, change `base` in `vite.config.js` to `'/YOUR-REPO-NAME/'` (including the slashes) and update the canonical URL in `index.html`.

If you use a user site named `ShayanBinMehar.github.io`, set `base: '/'` instead. The URL then becomes `https://shayanbinmehar.github.io/`.

## What the deploy workflow does

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Installs Node 22
2. Runs `npm ci` then `npm run build`
3. Uploads `dist/`
4. Publishes it with GitHub Pages

The build also writes `dist/.nojekyll` and `dist/404.html` so GitHub Pages does not ignore files and unknown paths still load the app.
