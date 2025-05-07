import mkcert from 'vite-plugin-mkcert';

export default defineNuxtConfig({
	compatibilityDate: '2025-05-07',
	devtools: { enabled: true },
	modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
				apiOptions: {
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
