// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    nitro: {
        preset: "github-pages",
    },
    app: {
        baseURL: "/JMGIT-bot.github.io/",
    },
    css: ["~/assets/css/tailwind.css"], // Tailwind CSS 경로 추가
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
