<template>
  <q-drawer show-if-above bordered
      :model-value="modelValue"
      @update:model-value="(value) => $emit('update:modelValue', value)"
      class="drawer no-scroll">

    <!-- header -->
    <q-toolbar class="bg-primary text-white">
      <q-avatar icon="fa-solid fa-bus" />
      <q-toolbar-title>{{ $t('layout.drawer.title') }}</q-toolbar-title>

      <q-btn flat round dense
          icon="fa-solid fa-gear"
          :aria-label="$t('layout.tooltip.about')"
          @click="$emit('btn-click')">
        <q-tooltip>{{ $t('layout.tooltip.about') }}</q-tooltip>
      </q-btn>
    </q-toolbar>

    <!-- company tabs -->
    <Bus.CompanyTabs outside-arrows 
        class="bg-grey-2"
        :options="companyList" />

    <!-- left drawer -->
    <Bus.RouteList class="drawer__content" />
  </q-drawer>
</template>

<script setup>
import { Bus } from 'src/components';

// define props
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  companyList: {
    type: Array,
    default: () => [],
    required: true,
  },
});

// define emits
defineEmits(['update:modelValue', 'btn-click']);
</script>

<style lang="scss">
.drawer {
  display: flex;
  flex-direction: column;  
  
  .drawer__content {
    flex: 1 1 auto; // fill remaining space
  }
}
</style>
