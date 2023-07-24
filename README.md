## Full Stack Spotify Clone with Next.js 13.4 App Router: React, Tailwind, Supabase, PostgreSQL, Stripe


For DEMO, use [Stripe Testing Cards](https://stripe.com/docs/testing)

### Description

ultimate Full Stack Spotify Clone, powered by Next.js 13.4 App Router, React, Tailwind, Supabase, PostgreSQL, and Stripe.
Enjoy seamless song uploads, secure Stripe integration, and a sleek Tailwind UI with animations.
Experience full responsiveness on all devices and benefit from credential authentication,
Github login, and Supabase storage for file uploads.
Explore advanced features like favorites, playlists,
and real-time interactions while managing Stripe subscriptions effortlessly.

Key Features:

- Song upload
- Stripe integration
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with Supabase
- Github authentication integration
- File and image upload using Supabase storage
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Play song audio
- Favorites system
- Playlists / Liked songs system
- Advanced Player component
- Stripe recurring payment integration
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Cancelling Stripe subscriptions

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/Dawitlior/Spotify-app.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Add SQL Tables
Use `database.sql` file, create songs and liked_songs table (there is a video tutorial)

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
