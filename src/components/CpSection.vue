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

<style scoped>
/* ─── CP Stats ──────────────────────────────────────────────────── */
.cp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--s-3);
}

.cp-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--s-4);
  background: var(--bg-subtle);
  display: flex;
  flex-direction: column;
  gap: var(--s-1);
}

.cp-platform {
  font-size: 0.7rem;
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-subtle);
}

.cp-handle {
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--text);
}

.cp-rating {
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-mono);
  line-height: 1;
}

.cp-rank {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
}

/* Codeforces rank colors */
.cf-candidate-master { color: #aa00aa; }
.cf-master           { color: #ff8c00; }
.cf-grandmaster      { color: #ff3300; }
.cf-expert           { color: #0055ff; }
.cf-specialist       { color: #03a89e; }
.cf-pupil            { color: #008000; }
.cf-newbie           { color: #808080; }

/* AtCoder rank colors */
.ac-orange { color: #ff8000; }
.ac-blue   { color: #0000ff; }
.ac-cyan   { color: #00c0c0; }
.ac-green  { color: #008000; }
</style>
