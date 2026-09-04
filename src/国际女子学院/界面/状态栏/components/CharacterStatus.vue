<template>
  <div class="char-status">
    <div class="char-name">{{ name }}</div>

    <div class="field">
      <span class="label">当前服装</span>
      <span class="value">{{ status.当前服装 || '未记录' }}</span>
    </div>
    <div class="field">
      <span class="label">内心话</span>
      <span class="value">{{ status.内心话 || '未记录' }}</span>
    </div>
    <div class="field">
      <span class="label">内衣状态</span>
      <span class="value">{{ status.内衣状态 || '未记录' }}</span>
    </div>
    <div class="field">
      <span class="label">小穴状态</span>
      <span class="value">{{ status.小穴状态 || '未记录' }}</span>
    </div>
    <div class="field">
      <span class="label">袜子与鞋</span>
      <span class="value">{{ status.袜子与鞋 || '未记录' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const props = defineProps<{
  name: string;
}>();

const store = useDataStore();

const status = computed(() => store.data.在场女主[props.name] || {});
</script>

<style lang="scss" scoped>
.char-status {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.char-name {
  font-size: 1rem;
  font-weight: bold;
  color: var(--c-accent);
  border-bottom: 2px solid var(--c-primary);
  padding-bottom: 4px;
  margin-bottom: 2px;
}

.field {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  border-bottom: 1px dashed var(--c-border);
  padding-bottom: 6px;
}

.label {
  flex: 0 0 64px;
  color: var(--c-text-muted);
  font-size: 0.8rem;
  font-weight: bold;
}

.value {
  flex: 1;
  color: var(--c-text);
  white-space: pre-wrap;
}
</style>
