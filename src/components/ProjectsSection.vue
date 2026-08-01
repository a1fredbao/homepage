<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface Project {
  name: string;
  desc: string;
  url: string;
  tags: string[];
}

// Placeholder projects — replace with your real ones
const projects: Project[] = [
  {
    name: "Calcite",
    desc: "Calcite: Competitive ALgorithm Contests' Ideal Testcase Engine.",
    url: "https://github.com/a1fredbao/calcite",
    tags: ["Python", "Testing", "CP"],
  },
  {
    name: "Muninn",
    desc: "Muninn: An extensible reciting CLI.",
    url: "https://muninn.alfredbao.cn/",
    tags: ["Python", "CLI", "memorize", "tool"],
  },
  {
    name: "Lynx",
    desc: "lynx: Lectures' Yet aNother eXporter. (A lecture management system)",
    url: "https://github.com/a1fredbao/lynx",
    tags: ["Python", "CLI"],
  },
  {
    name: "CP Template Library",
    desc: "Personal competitive programming template library, refined over years.",
    url: "https://cplib.alfredbao.cn",
    tags: ["C++", "Algorithms", "CP"],
  },
  {
    name: "alfredbao.cn",
    desc: "This very homepage — minimal, fast, and opinionated.",
    url: "https://github.com/a1fredbao/homepage",
    tags: ["Vue 3", "Vite"],
  },
];
</script>

<template>
  <section class="section" id="projects-section">
    <h2 class="section-title">{{ t("projects.title") }}</h2>
    <ul class="project-list" role="list">
      <li
        v-for="project in projects"
        :key="project.name"
        style="list-style: none"
      >
        <a
          :href="project.url"
          :id="`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`"
          target="_blank"
          rel="noopener noreferrer"
          class="project-item"
        >
          <div class="project-left">
            <span class="project-name">{{ project.name }}</span>
            <span class="project-desc">{{ project.desc }}</span>
          </div>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* ─── Projects ──────────────────────────────────────────────────── */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.project-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--s-4);
  padding: var(--s-4) var(--s-4);
  border-bottom: 1px solid var(--border-muted);
  text-decoration: none;
  color: inherit;
  transition: background-color 0.15s;
}

.project-item:last-child {
  border-bottom: none;
}

.project-item:hover {
  background-color: var(--bg-subtle);
  opacity: 1;
}

.project-left {
  display: flex;
  flex-direction: column;
  gap: var(--s-1);
  min-width: 0;
}

.project-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
  white-space: nowrap;
}

.project-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.project-tags {
  display: flex;
  gap: var(--s-1);
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  padding: 2px 7px;
  border-radius: var(--radius-full);
  background: var(--tag-bg);
  color: var(--tag-text);
  white-space: nowrap;
}

/* ─── Responsive ────────────────────────────────────────────────── */
@media (max-width: 540px) {
  .project-item {
    flex-direction: column;
    gap: var(--s-2);
  }

  .project-tags {
    justify-content: flex-start;
  }

  .project-desc {
    white-space: normal;
  }
}
</style>
