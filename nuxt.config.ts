import mkcert from 'vite-plugin-mkcert';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-21',
	devtools: { enabled: false },
	modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
				apiOptions: {
					/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
					region: 'eu',
					/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
					endpoint: process.env.STORYBLOK_API_BASE_URL
						? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
						: undefined,
				},
			},
		],
	],

	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://a.storyblok.com/f/212319/x/e6ccda03b8/blueprint-blank.css',
				},
			],
		},
	},

	ssr: true,

	devServer: {
		https: true,
	},

	vite: {
		plugins: [mkcert()],
	},
});
