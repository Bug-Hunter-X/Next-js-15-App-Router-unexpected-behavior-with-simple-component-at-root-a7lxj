# Next.js 15 App Router unexpected behavior

This repo demonstrates an uncommon issue in Next.js 15's App Router where a simple component placed in `pages/index.js` might not render as expected at the root URL (`/`).  The App Router requires a different approach to setting up the root layout compared to the Pages Router.

## Bug

The `pages/index.js` file contains a basic component.  In Next.js 13 and earlier (Pages Router), this would render correctly at `/`. However, in Next.js 15 (App Router), it likely won't, resulting in an error or unexpected behavior.

## Solution

The App Router needs a `layout.js` file within the `app` directory, or you need to define your root layout using a different approach such as using the `app` directory directly.

See `bugSolution.js` for a corrected implementation.