import messages from "./locales/messages";

export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: "fade",
      mode: "out-in",
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: ["store"],
  },

  modules: [
    "nuxt-vue3-google-signin",
    "@nuxt/image-edge",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "nuxt-headlessui",
    "nuxt-mailer",
  ],

  googleSignIn: {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },

  runtimeConfig: {
    mailerUser: process.env.MAILER_USER,
    mailerPass: process.env.MAILER_PASSWORD,
    private: {
      encryptionKey: process.env.ENCRYPTION_KEY,
      stripeSecretKey: process.env.STRIPE_SECRET_KEY,
      openAiKey: process.env.OPENAI_API_KEY,
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      appDomain: process.env.FRONTEND_URL,
      appEnv: process.env.APP_ENV,
      apiUrl: process.env.API_URL,
    },
  },

  i18n: {
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "fr"],
      messages: messages,
    },
  },

  image: {
    alias: {
      supabase: "https://uynsrkwqyplqhfrmdaqw.supabase.co/storage/v1/object/public",
    },
    domains: ["uynsrkwqyplqhfrmdaqw.supabase.co"],
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
