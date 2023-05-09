<template>
  <q-page class="row items-stretch">
    <div class="gt-sm column items-center justify-center col-12">
      <q-avatar 
          icon="fa-solid fa-route"
          text-color="primary"
          size="8rem" />
      <q-chip 
          icon="info" 
          :label="$t('page.routeList.yetToSelect')"
          color="transparent"
          text-color="primary"
          size="xl" />
    </div>
    
    <q-card flat class="lt-md col-12">
      <Bus.RouteList />
    </q-card>
  </q-page>
</template>

<script setup>
import { Bus } from 'components';

// data
const data = {
  noDataLabel: 'layout.drawer.noData',
};
</script>
