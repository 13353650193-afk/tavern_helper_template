<template>
  <div class="card">
    <WorldSection />

    <div class="char-tabs" v-if="!_.isEmpty(characters)">
      <button
        v-for="name in character_names"
        :key="name"
        class="char-tab"
        :class="{ active: current_name === name }"
        @click="switch_to(name)"
      >
        {{ name }}
      </button>
    </div>

    <div v-if="current_name" class="content-area">
      <CharacterStatus />
    </div>
    <div v-else class="content-area">
      <div class="empty-hint">暂无在场女主</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
import CharacterStatus from './components/CharacterStatus.vue';
import WorldSection from './components/WorldSection.vue';
import { useDataStore } from './store';

const store = useDataStore();

const characters = computed(() => store.data.在场女主);
const character_names = computed(() => _.keys(characters.value));

const current_name = computed(() => {
  const focused = store.data.系统.当前显示女主;
  if (focused && _.has(characters.value, focused)) {
    return focused;
  }
  return _.keys(characters.value)[0] || '';
});

function switch_to(name: string) {
  store.data.系统.当前显示女主 = name;
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 560px;
  background-color: var(--c-surface);
  border: 2px solid var(--c-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-family: var(--font-body);
  color: var(--c-text);
  font-size: 13px;
  line-height: 1.45;
  margin: 0 auto;
  overflow: hidden;
}

.char-tabs {
  display: flex;
  background-color: var(--c-surface-alt);
  border-bottom: 2px solid var(--c-border);
  overflow-x: auto;
}

.char-tab {
  flex: 0 0 auto;
  padding: 8px 14px;
  border: none;
  background: transparent;
  color: var(--c-text-muted);
  font-size: 0.9rem;
  font-weight: bold;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.2s;
  border-right: 1px solid var(--c-border);
  white-space: nowrap;
}

.char-tab:hover {
  background-color: var(--c-surface);
  color: var(--c-text);
}

.char-tab.active {
  background-color: var(--c-surface);
  color: var(--c-accent);
  position: relative;
  box-shadow: inset 0 -2px 0 var(--c-accent);
}

.content-area {
  padding: 12px;
  min-height: 0;
}

.empty-hint {
  text-align: center;
  color: var(--c-text-muted);
  padding: 16px 0;
}
</style>
