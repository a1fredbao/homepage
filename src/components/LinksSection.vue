<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface ServiceLink {
  name: string;
  desc: string;
  url: string;
  icon: string; // inline SVG path data
}

// Placeholder services — replace URLs and descriptions with your real ones
const services: ServiceLink[] = [
  {
    name: "File Share",
    desc: "Self-hosted file sharing.",
    url: "https://share.alfredbao.cn",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",
  },
  {
    name: "Image Hosting",
    desc: "Personal image CDN.",
    url: "https://image.alfredbao.cn",
    icon: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",
  },
  // {
  //   name: "Paste",
  //   desc: "Minimalist code/text pastebin with syntax highlighting.",
  //   url: "https://paste.alfredbao.cn",
  //   icon: "M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z",
  // },
  // {
  //   name: "Monitor",
  //   desc: "Uptime dashboard for all self-hosted services.",
  //   url: "https://status.alfredbao.cn",
  //   icon: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
  // },
];
</script>

<template>
  <section class="section" id="links-section">
    <h2 class="section-title">{{ t("links.title") }}</h2>
    <ul class="project-list" role="list">
      <li
        v-for="service in services"
        :key="service.name"
        style="list-style: none"
      >
        <a
          :href="service.url"
          :id="`link-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`"
          target="_blank"
          rel="noopener noreferrer"
          class="project-item"
        >
          <div class="project-left">
            <span class="project-name service-name">
              <!-- Service icon -->
              <svg
                class="service-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path :d="service.icon" />
              </svg>
              {{ service.name }} : {{ service.desc }}
              <span class="link-arrow" aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.service-name {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
}

.service-icon {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  opacity: 0.7;
}

.link-arrow {
  font-size: 0.85rem;
  color: var(--text-subtle);
  flex-shrink: 0;
  transition:
    color 0.15s,
    transform 0.15s;
}

.project-item:hover .link-arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}
</style>
