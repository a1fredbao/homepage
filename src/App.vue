<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import HeroSection from "./components/HeroSection.vue";
import CpSection from "./components/CpSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";

const { locale, t } = useI18n();

// ── Theme ──────────────────────────────────────────────────────────
const theme = ref<"dark" | "light">("dark");

function applyTheme(t: "dark" | "light") {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  applyTheme(theme.value);
}

// ── Locale ─────────────────────────────────────────────────────────
function toggleLocale() {
  locale.value = locale.value === "en" ? "zh" : "en";
  localStorage.setItem("locale", locale.value);
}

// ── Init from localStorage ─────────────────────────────────────────
onMounted(() => {
  const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  theme.value = savedTheme ?? (prefersDark ? "dark" : "light");
  applyTheme(theme.value);

  const savedLocale = localStorage.getItem("locale");
  if (savedLocale === "zh" || savedLocale === "en") {
    locale.value = savedLocale;
  }
});
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar" role="navigation" aria-label="Site navigation">
    <div class="container">
      <span class="navbar-brand">Alfred's site</span>
      <div class="navbar-actions">
        <!-- Language toggle -->
        <button
          id="btn-lang"
          class="icon-btn"
          :aria-label="locale === 'en' ? 'Switch to Chinese' : '切换为英文'"
          @click="toggleLocale"
        >
          {{ locale === "en" ? "中" : "EN" }}
        </button>

        <!-- Theme toggle -->
        <button
          id="btn-theme"
          class="icon-btn"
          :aria-label="
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          "
          @click="toggleTheme"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg
            v-if="theme === 'dark'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg
            v-else
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Main content -->
  <main>
    <div class="container">
      <HeroSection />
      <CpSection />
      <ProjectsSection />
    </div>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <div class="container">
      <span class="footer-text">© 2026 {{ t("footer.rights") }}</span>
      <span class="footer-text">{{ t("footer.built") }}</span>
    </div>
  </footer>
</template>
