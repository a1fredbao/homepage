<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

import IconGithub from "../assets/icons/icon-github.svg?component";
import IconEmail from "../assets/icons/icon-email.svg?component";
import IconX from "../assets/icons/icon-x.svg?component";
import IconQq from "../assets/icons/icon-qq.svg?component";
import IconBilibili from "../assets/icons/icon-bilibili.svg?component";

const { t } = useI18n();

const titles = [
  "A Competitive Programmer",
  "A Software Architect",
  "A Senior High Student",
  "An Open Source Enthusiast",
  "An Amateur Guitarist",
];

const displayed = ref("");
const titleIndex = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);

let timer: ReturnType<typeof setTimeout>;

function tick() {
  const current = titles[titleIndex.value];
  if (isDeleting.value) {
    displayed.value = current.slice(0, charIndex.value - 1);
    charIndex.value--;
    if (charIndex.value === 0) {
      isDeleting.value = false;
      titleIndex.value = (titleIndex.value + 1) % titles.length;
      timer = setTimeout(tick, 400);
      return;
    }
    timer = setTimeout(tick, 40);
  } else {
    displayed.value = current.slice(0, charIndex.value + 1);
    charIndex.value++;
    if (charIndex.value === current.length) {
      isDeleting.value = true;
      timer = setTimeout(tick, 1800);
      return;
    }
    timer = setTimeout(tick, 70);
  }
}

onMounted(() => {
  timer = setTimeout(tick, 600);
});
onUnmounted(() => clearTimeout(timer));
</script>

<template>
  <section class="hero section">
    <div class="hero-top">
      <img
        src="/avatar.png"
        alt="Alfred Bao"
        class="hero-avatar"
        id="hero-avatar"
      />
      <div class="hero-text">
        <p class="hero-greeting">{{ t("hero.greeting") }}</p>
        <h1 class="hero-name">Alfred Bao</h1>
        <div class="hero-title-wrap" aria-live="polite">
          {{ displayed }}<span class="hero-title-cursor" aria-hidden="true" />
        </div>
        <p class="hero-bio">{{ t("hero.bio") }}</p>
      </div>
    </div>

    <!-- Social / Contact links -->
    <div class="social-links" role="list">
      <a
        id="link-github"
        href="https://github.com/a1fredbao"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        role="listitem"
      >
        <IconGithub />
        {{ t("contact.github") }}
      </a>

      <a
        id="link-email"
        href="mailto:me@alfredbao.cn"
        class="social-link"
        role="listitem"
      >
        <IconEmail />
        {{ t("contact.email") }}
      </a>

      <a
        id="link-x"
        href="https://x.com/Alfred_7c00"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        role="listitem"
      >
        <IconX />
        {{ t("contact.x") }}
      </a>

      <a
        id="link-bilibili"
        href="https://space.bilibili.com/1638383707"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        role="listitem"
      >
        <IconBilibili />
        {{ t("contact.bilibili") }}
      </a>
    </div>
  </section>
</template>

<style scoped>
/* ─── Hero ──────────────────────────────────────────────────────── */
.hero {
  display: flex;
  flex-direction: column;
  gap: var(--s-4);
  margin-bottom: var(--s-12);
}

.hero-top {
  display: flex;
  align-items: flex-start;
  gap: var(--s-6);
}

.hero-avatar {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
  background: var(--bg-subtle);
}

.hero-text {
  flex: 1;
  min-width: 0;
}

.hero-greeting {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: var(--s-1);
}

.hero-name {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: var(--s-2);
}

/* Typewriter title */
.hero-title-wrap {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  min-height: 1.4em;
  margin-bottom: var(--s-3);
}

.hero-title-cursor {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  background: var(--accent);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.hero-bio {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 56ch;
}

/* ─── Social links row ──────────────────────────────────────────── */
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
  margin-top: var(--s-2);
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: var(--s-2);
  padding: var(--s-2) var(--s-3);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  background: transparent;
  transition:
    border-color 0.15s,
    color 0.15s,
    background-color 0.15s;
}

.social-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-muted);
  opacity: 1;
}

.social-link :deep(svg) {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

/* ─── Responsive ────────────────────────────────────────────────── */
@media (max-width: 540px) {
  .hero-top {
    flex-direction: column;
    gap: var(--s-4);
  }

  .hero-avatar {
    width: 100px;
    height: 100px;
  }

  .hero-name {
    font-size: 1.4rem;
  }
}
</style>
