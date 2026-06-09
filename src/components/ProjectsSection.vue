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
    desc: "Calcite: Competitive ALgorithm Contests’ Ideal Testcase Engine.",
    url: "https://github.com/a1fredbao/calcite",
    tags: ["Python", "Testing", "CP"],
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
