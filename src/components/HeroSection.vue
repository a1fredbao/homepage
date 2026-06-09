<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

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
        <!-- GitHub -->
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
        {{ t("contact.github") }}
      </a>

      <a
        id="link-email"
        href="mailto:me@alfredbao.cn"
        class="social-link"
        role="listitem"
      >
        <!-- Mail -->
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        {{ t("contact.email") }}
      </a>
    </div>
  </section>
</template>
