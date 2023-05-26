export default defineNuxtConfig({
	// app: {
	// 	head: {
	// 	// 	script: [
	// 	// 		{
	// 	// 			id: 'gtm',
	// 	// 			children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    //     //     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    //     //     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    //     //     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    //     //     })(window,document,'script','dataLayer','${process.env.GTM_ID}');`,
	// 	// 			type: 'text/javascript',
	// 	// 		},
	// 	// 	],
	// 	// },
	// },
	runtimeConfig: {
		public: {
			environment: process.env.ENVIRONMENT,
		},
	},
	buildModules: [
		'vue-ssr-carousel/nuxt' 
	],

	modules: [],
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