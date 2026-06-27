<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import HeroSection from "./components/HeroSection.vue";
import CpSection from "./components/CpSection.vue";
import LinksSection from "./components/LinksSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";

import IconSun from "./assets/icons/icon-sun.svg?component";
import IconMoon from "./assets/icons/icon-moon.svg?component";

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
        <!-- <button
          id="btn-lang"
          class="icon-btn"
          :aria-label="locale === 'en' ? 'Switch to Chinese' : '切换为英文'"
          @click="toggleLocale"
        >
          {{ locale === "en" ? "中" : "EN" }}
        </button> -->

        <!-- Theme toggle -->
        <button
          id="btn-theme"
          class="icon-btn"
          :aria-label="
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          "
          @click="toggleTheme"
        >
          <IconSun v-if="theme === 'dark'" />
          <IconMoon v-else />
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
      <LinksSection />
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

<style scoped>
/* ─── Navbar ────────────────────────────────────────────────────── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg);
  border-bottom: 1px solid var(--border-muted);
  height: 56px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--s-2);
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: 600;
  transition:
    border-color 0.15s,
    color 0.15s,
    background-color 0.15s;
  padding: 0;
  line-height: 1;
}

.icon-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-muted);
}

.icon-btn :deep(svg) {
  width: 14px;
  height: 14px;
}

/* ─── Main Content ──────────────────────────────────────────────── */
main {
  flex: 1;
  padding: var(--s-16) 0 var(--s-12);
}

/* ─── Footer ────────────────────────────────────────────────────── */
footer {
  border-top: 1px solid var(--border-muted);
  padding: var(--s-6) 0;
}

footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--s-2);
}

.footer-text {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-subtle);
}

/* ─── Responsive ────────────────────────────────────────────────── */
@media (max-width: 540px) {
  footer .container {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
