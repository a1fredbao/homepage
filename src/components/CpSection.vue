<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface CpEntry {
  platform: string;
  handle: string;
  rating: number;
  rank: string;
  rankClass: string;
  url: string;
}

const entries: CpEntry[] = [
  {
    platform: "Codeforces",
    handle: "Dr.Alfred",
    rating: 1925,
    rank: "Candidate Master",
    rankClass: "cf-candidate-master",
    url: "https://codeforces.com/profile/Dr.Alfred",
  },
  {
    platform: "AtCoder",
    handle: "DrAlfred",
    rating: 1720,
    rank: "2 Kyu",
    rankClass: "ac-blue",
    url: "https://atcoder.jp/users/DrAlfred",
  },
];
</script>

<template>
  <section class="section" id="cp-section">
    <h2 class="section-title">{{ t("cp.title") }}</h2>
    <div class="cp-grid">
      <a
        v-for="entry in entries"
        :key="entry.platform"
        :href="entry.url"
        :id="`cp-card-${entry.platform.toLowerCase()}`"
        target="_blank"
        rel="noopener noreferrer"
        class="cp-card"
        style="text-decoration: none"
      >
        <span class="cp-platform">{{ entry.platform }}</span>
        <span class="cp-handle">{{ entry.handle }}</span>
        <span class="cp-rating" :class="entry.rankClass">
          {{ entry.rating > 0 ? entry.rating : "—" }}
        </span>
        <span class="cp-rank" :class="entry.rankClass">{{ entry.rank }}</span>
      </a>
    </div>
  </section>
</template>
