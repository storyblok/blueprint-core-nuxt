# Blank Nuxt Space Blueprint

This is a [Nuxt](https://nuxt.com/) project integrated with Storyblok. It is designed to work with a blank Storyblok space, supporting the default `page`, `teaser`, `grid`, and `feature` components. The Visual Editor's live preview works out of the box. The project comes with minimal styling and is ideal to kickstart your new Storyblok and Nuxt project.

## Getting Started

First, install all dependencies:

```bash
npm install
```

Create an `.env` file with the following content (find your preview access token under **Settings** > **Access Tokens** in your Storyblok space):

```bash
STORYBLOK_DELIVERY_API_TOKEN=your-preview-access-token
```

Next, run the development server with HTTPS enabled:

```bash
npm run dev
```

In your Storyblok space, go to **Settings** > **Visual Editor** and set `https://localhost:3000/` as the default environment.

Finally, open your **Home** story and see your Next.js project running correctly. Happy building!

## Learn More

To learn more about Nuxt, take a look at the following resources:

- [Nuxt Documentation](https://nuxt.com/docs)
- [Learn Nuxt](https://learn-dev.nuxt.com/en)

To learn more about Storyblok, take a look at the [Storyblok Documentation](https://www.storyblok.com/docs).
