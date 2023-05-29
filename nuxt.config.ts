import messages from "./locales/messages";

function withOpacity(variableName: string) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

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

  modules: ["nuxt-vue3-google-signin", "@nuxt/image-edge", "@nuxtjs/i18n", "@vueuse/nuxt", "@pinia/nuxt", "nuxt-headlessui", "nuxt-mailer", "@nuxthq/ui"],

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

  tailwindcss: {
    cssPath: "~/assets/style/main.scss",
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          colors: {
            primary: "var(--bg-primary)",
            "primary-opacity": withOpacity("--bg-primary-opacity"),
            secondary: "var(--bg-secondary)",
            accent: withOpacity("--accent-color"),
            "accent-hover": withOpacity("--accent-color-hover"),
            "accent-faded": "var(--accent-color-faded)",
            muted: "var(--font-muted)",
            placeholder: "var(--font-placeholder)",
          },
          textColor: {
            primary: "var(--font-primary)",
            muted: "var(--font-muted)",
            placeholder: "var(--font-placeholder)",
            inverted: "var(--font-inverted)",
            accent: withOpacity("--accent-color"),
            "accent-hover": withOpacity("--accent-color-hover"),
          },
          borderColor: {
            primary: "var(--border-primary)",
            "primary-hover": "var(--border-primary-hover)",
            muted: "var(--border-muted)",
            accent: withOpacity("--accent-color"),
            "accent-faded": "var(--accent-color-faded)",
            transparent: "transparent",
          },
          gradientColorStops: {
            "accent-primary": "var(--accent-primary)",
            "accent-secondary": "var(--accent-secondary)",
          },
          borderWidth: {
            sm: "1px",
            md: "2px",
          },
        },
      },
      plugins: [],
    },
  },
});
