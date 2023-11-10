This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Or, build the project and start the server:

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Info

A basic app to split expenses built using Next.js, TypeScript, Tailwind & Zustand.

New data is not stored anywhere, hence won't persist on page refresh.

You can add a random person that shows up on the list on the home page. Uses random images from 'pravatar' by default, other hosts can be added to next.config file.

Click on any person in the list and add/clear expense.

Add friend/add expense modals are created using parallel/intercepting routes that act as modals on soft load and as a page on hard load.
