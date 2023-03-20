<template>
  <q-layout view="lHh Lpr lFf">
    <!-- header -->
    <q-header class="gt-sm">
      <q-toolbar>
        <q-btn flat dense round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer" />
        <q-toolbar-title>
          {{ $t('layout.header.title') }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- footer -->
    <q-footer bordered class="lt-md bg-transparent text-dark">
      <!-- company tabs -->
      <Bus.CompanyTabs outside-arrows switch-indicator
          class="bg-primary text-white lt-md"
          active-bg-color="primary"
          indicator-color="white"
          :options="companyList">
        <template #prepend>
          <q-btn unelevated stretch
              icon="fa-solid fa-gear" 
              :aria-label="$t('layout.tooltip.about')"
              @click="isDialogOpen = true" />
        </template>
        <template #append>
          <q-btn unelevated stretch
              v-if="returnBtn.show"
              icon="reply" 
              :to="returnBtn.to" />
        </template>
      </Bus.CompanyTabs>
    </q-footer>

    <!-- desktop drawer -->
    <Layout.DesktopDrawer 
        v-if="$q.screen.gt.sm"
        v-model="leftDrawerOpen"
        :company-list="companyList"
        @open-dialog="isDialogOpen = true"
        @tab-click="onTabClick" />

    <!-- main panel -->
    <q-page-container>
      <router-view />
    </q-page-container>

     <!-- setting dialog -->
     <Dialog.AboutDialog v-model="isDialogOpen" />
  </q-layout>
</template>

<script setup>
import { useMeta, useQuasar } from 'quasar';
import { ref, computed, watch, provide, onBeforeMount, onBeforeUpdate } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Bus, Dialog, Layout } from 'components';
import { useFetch } from 'src/composables';
import { useBusService } from 'src/services';
import { useOption } from 'src/constants';

// #region Setup
// use q object
const $q = useQuasar();
// use route
const route = useRoute();
// use i18n
const { t } = useI18n();
// use global option
const option = useOption();
// use fetch 
const { 
  fetchApi, 
  loadingRouteList 
} = useFetch(['loadingRouteList']);
// use bus service
const service = useBusService();
// #endregion

// #region Drawer
// left drawer open state
const leftDrawerOpen = ref(false);
// toggle left drawer
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
// #endregion

// #region Company List
// when it is route stop list page, display the belonging company
// and return to route list page button
// otherwise, display all bus companies
const companyId = ref('');
const companyIds = option.companies.map((c) => c.value);
const companyList = computed(() => {
  let companyList = option.companies.map((c) => ({
    ...c,
    to: {
      name: 'bus.routeList',
      params: { companyId: c.value },
    }
  }));

  if(route.name === 'bus.routeStopList' && $q.screen.lt.md) {
    companyList = companyList.filter((c) => c.value === props.companyId);
  }

  return companyList;
});

// return button target
const returnBtn = computed(() => {
  let to = null;
  if (route.name === 'bus.routeStopList') {
    to = {
      name: 'bus.routeList',
      params: {
        lang: route.params.lang,
        companyId: route.params.companyId,
      },
    }
  }

  return {
    show: route.name === 'bus.routeStopList',
    to,
  };
});
// #endregion

// #region Bus Route List
const routeList = ref([]);
// provide bus route list to desktop drawer and route list page
provide('routeList', routeList);
provide('loadingRouteList', loadingRouteList);
// fetch bus route list
function fetchRouteList() {
  // check if company id is valid
  if (!companyIds.includes(route.params.companyId)) {
    $q.notify({ type: 'negative', message: t('layout.error.invalidCompanyId') });
    return;
  }

  fetchApi(service.getRouteList, { 
    companyId: route.params.companyId 
  }, {
    config: {
      loadingScope: 'loadingRouteList',
    },
    onSuccess(response) {
      routeList.value = response.map((r) => ({
        ...r,
        company: option.companies.find((c) => c.value === companyId.value).label,        
      }));
    },
  });
}
// #endregion

// #region Dialog
// dialog open state
const isDialogOpen = ref(false);
// #endregion

// hangle tab click
function onTabClick(val) {
  companyId.value = val;
  if (val !== route.params.companyId) {
    // setTimeout(fetchRouteList, 300);
  }
}

// #region Meta
useMeta(() => ({
  title: t('layout.header.title'),
}));
// #endregion

// watch screen size changes
watch(
  () => $q.screen.gt.sm, 
  (newVal) => {
    if (newVal) {
      // if screen size is greater than sm, reset bus route list
      fetchRouteList();
    } else {
      if (route.name === 'bus.routeList') {
        // if screen size is less than sm and current route is bus routes
        // then reset bus route list
        fetchRouteList();
      }
    }
  }
);

// fetch bus route list before mounting
onBeforeMount(() => {
  companyId.value = route.params.companyId;
  fetchRouteList();
});

onBeforeUpdate(() => {
  if (route.name === 'bus.routeList') {
    companyId.value = route.params.companyId;
    setTimeout(fetchRouteList, 300);
  }
});
</script>