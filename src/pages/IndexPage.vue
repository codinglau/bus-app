<template>
  <q-page padding class="row items-stretch">
    <q-card flat class="col bg-transparent">
      <q-card-actions class="full-height" :vertical="$q.screen.lt.md">
        <q-btn stack stretch
            v-for="o in options" 
            :key="o.label"
            v-bind="o" 
            :label="$t(o.label)"
            class="col"
            color="white"
            text-color="primary"
            padding="md"
            size="2rem" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router';

// #region Setup ===============================================================
const route = useRoute();
// #endregion

const options = [
  {
    label: 'page.home.byRoute',
    icon: 'fa-solid fa-route',
    to: {
      name: 'bus.routeList',
      params: {
        lang: route.params.lang,
        method: 'route',
        companyId: 'kmb',
      },
    },
  },
  {
    label: 'page.home.byStop',
    icon: 'fa-solid fa-location-dot',
    to: null,
  }
];
</script>
