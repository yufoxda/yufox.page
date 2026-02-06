# Project Context: yufox

## Project Overview

This project, **yufox**, is a personal portfolio website for a Japanese university student engineer. It showcases skills, works, and contact information.

**Key Technologies:**

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **UI Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Deployment:** Cloudflare Workers (via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare))
*   **Language:** TypeScript

## Architecture

The project follows the standard Next.js App Router directory structure:

*   `src/app/`: Contains the application routes and pages.
    *   `page.tsx`: The main landing page.
    *   `layout.tsx`: The root layout file.
    *   `_components/`: Custom UI components (e.g., `skills.tsx`, `works.tsx`, `miniWorks.tsx`) used in the application.
*   `public/`: Static assets.
*   `wrangler.jsonc`: Configuration for Cloudflare Workers deployment.
*   `open-next.config.ts`: Configuration for OpenNext.

## Building and Running

### Development

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build & Deployment

This project is configured to deploy to Cloudflare Workers using OpenNext.

**Deploy to Cloudflare:**

```bash
npm run deploy
```

This command executes `opennextjs-cloudflare build && opennextjs-cloudflare deploy`.

**Preview Deployment:**

```bash
npm run preview
```

### Other Commands

*   `npm run lint`: Run the linter.
*   `npm run cf-typegen`: Generate TypeScript types for Cloudflare environment bindings.

## Development Conventions

*   **Component Location:** Reusable UI components are located in `src/app/_components/`.
*   **Styling:** Tailwind CSS is used for styling.
*   **Cloudflare Integration:** The project uses `wrangler` and `@opennextjs/cloudflare` for Cloudflare integration. Ensure you have the necessary Cloudflare credentials if you intend to deploy.
*   **Fonts:** The project uses `next/font` for font optimization.
