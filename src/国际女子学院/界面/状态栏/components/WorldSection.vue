<template>
  <div class="world-section">
    <div class="meta-row">
      <span class="meta-item">📍 {{ store.data.系统.当前场景 }}</span>
      <span class="meta-item">🕐 {{ store.data.系统.当前时间 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.world-section {
  border-bottom: 2px solid var(--c-border);
  padding: 8px 12px;
  background-color: var(--c-surface-alt);
}

.meta-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
  font-weight: bold;
  font-size: 0.85rem;
}
</style>
