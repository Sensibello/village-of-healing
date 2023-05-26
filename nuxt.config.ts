export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{
				  rel: 'stylesheet',
				  href: 'https://fonts.googleapis.com/css2?family=Arimo:wght@400;500;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Questrial&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
				}
			  ]
		},
	},
	runtimeConfig: {
		public: {
			environment: process.env.ENVIRONMENT,
		},
	},
	buildModules: [
		'vue-ssr-carousel/nuxt',
		'@nuxtjs/google-fonts'
	],

	modules: [
		// "@nuxtjs/google-fonts",
	],
	// googleFonts: {
	// 	families: {
	// 		'Merriweather': [300, 400, 700, 900],
	// 	},
	// },
	plugins: [],
	components: [
		'~/components',		
	],
	css: [
		'@/styles/main.scss',
		'@/styles/global/global.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/styles/global/_patterns.scss";`,
				},
			},
		},
		plugins: [],
	}
})