import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      home: "Home",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Alfred Bao",
      bio: "Competitive programmer, software architect, and high school student. I build tools, explore algorithms, and occasionally break things on purpose.",
      titles: [
        "A Competitive Programmer",
        "A Software Architect",
        "A Senior High Student",
        "An Open Source Enthusiast",
        "An Amateur Guitarist",
      ],
    },
    cp: {
      title: "Competitive Programming",
      platforms: "Platforms",
      codeforces: "Codeforces",
      atcoder: "AtCoder",
      rating: "Rating",
      rank: "Rank",
    },
    projects: {
      title: "Projects",
      subtitle: "Things I've built",
    },
    contact: {
      title: "Get in touch",
      github: "GitHub",
      email: "Email",
      blog: "Blog",
      telegram: "Telegram",
    },
    footer: {
      built: "Built with Vue 3 + Vite",
      rights: "Alfred Bao. All rights reserved.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
