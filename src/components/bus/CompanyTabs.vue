<template>
  <q-tabs
      align="justify"
      active-bg-color="primary" 
      active-color="white" 
      indicator-color="primary">
    <!-- Prepend slot -->
    <slot name="prepend"></slot>
    <q-route-tab
        v-for="tab in options"
        :key="tab.value"
        v-bind="tab"
        :label="$t(tab.label)"
        @click="() => onRouteUpdate(tab.value)" />
    <!-- Append slot -->
    <slot name="append"></slot>
  </q-tabs>
</template>

<script setup>
// define props
defineProps({
  options: {
    type: Array,
    required: true,
  },
});

// define emits
const emit = defineEmits(['tab-click']);

// emit route update event
function onRouteUpdate(routeId) {
  emit('tab-click', routeId);
}
</script>
