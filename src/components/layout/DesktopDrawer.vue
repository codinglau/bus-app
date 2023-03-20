<template>
  <q-drawer show-if-above bordered
      :model-value="modelValue"
      @update:model-value="(value) => $emit('update:modelValue', value)"
      class="drawer no-scroll">
    <!-- drawer header -->
    <q-toolbar class="bg-primary text-white">
      <q-avatar icon="fa-solid fa-bus" />
      <q-toolbar-title>{{ $t('layout.drawer.title') }}</q-toolbar-title>

      <q-btn flat round dense
          icon="fa-solid fa-gear"
          :aria-label="$t('layout.tooltip.about')"
          @click="$emit('open-dialog')">
        <q-tooltip>{{ $t('layout.tooltip.about') }}</q-tooltip>
      </q-btn>
    </q-toolbar>

    <!-- company tabs -->
    <Bus.CompanyTabs outside-arrows 
        class="bg-grey-2"
        :options="companyList"
        @tab-click="(val) => $emit('tab-click', val)" />

    <!-- drawer search -->
    <q-input dense clearable
        v-model.trim="searchField"
        clear-icon="close"
        debounce="300"
        :placeholder="$t('layout.drawer.search')">
      <template #prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <!-- drawer content -->
    <q-scroll-area class="drawer__content">
      <Bus.RouteListSkeleton v-if="loading" />
      <Bus.RouteList 
          v-else-if="!isEmptyRouteList" 
          :options="filteredRouteList" />
      <div v-else class="flex flex-center">
        <q-chip square 
            color="transparent"
            icon="warning"
            text-color="primary"
            :label="$t('layout.drawer.noData')" />
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { Bus } from 'components';

// define props
const props = defineProps({
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
defineEmits(['update:modelValue', 'open-dialog', 'tab-click']);

// inject route list and loading route list flag
const routeList = inject('routeList');
const loading = inject('loadingRouteList');

// #region Search Field
const searchField = ref('');
// #endregion 

// #region Bus Route List
// filter route list by search field
const filteredRouteList = computed(() => {
  let resultList = [];

  if (searchField.value) {
    // if search field is not empty
    resultList = routeList.value.filter((r) => {
      const origins = Object.keys(r.origin).map((k) => r.origin[k]);
      const destinations = Object.keys(r.destination).map((k) => r.destination[k]);
      const target = [r.id, ...origins, ...destinations].join(' ').toUpperCase();
      return target.includes(searchField.value.toUpperCase());
    });
  } else {
    // if search field is empty
    resultList = routeList.value.slice();
  }

  return resultList;
});

// empty route list flag
const isEmptyRouteList = computed(() => filteredRouteList.value.length === 0);
// #endregion
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

