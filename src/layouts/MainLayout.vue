<template>
  <q-layout view="lHh Lpr lFf">
    <!-- header -->
    <q-header reveal>
      <Bus.RouteListPageMobileHeader v-if="showRouteListPageMobileHeader" />
      <q-toolbar v-else>
        <q-btn flat dense round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer" />
        <q-toolbar-title>{{ $t('layout.header.title') }}</q-toolbar-title>
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
        @btn-click="isDialogOpen = true"
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Bus, Dialog, Layout } from 'src/components';
import { useOption } from 'src/constants';

// #region Setup
const $q = useQuasar();
const route = useRoute();
const { t } = useI18n();
const option = useOption();
// #endregion

// #region Drawer
const leftDrawerOpen = ref(false);  // left drawer open state
function toggleLeftDrawer() { 
  // toggle left drawer open state
  leftDrawerOpen.value = !leftDrawerOpen.value 
}
// #endregion

// #region Company List
const companyId = ref('');
const companyList = option.getCompanyList(true);
const returnBtn = computed(() => {
  // return button target
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

// #region Dialog
// dialog open state
const isDialogOpen = ref(false);
// #endregion

function onTabClick(val) {
  // hangle tab click
  companyId.value = val;
  if (val !== route.params.companyId) {
    // setTimeout(fetchRouteList, 300);
  }
}

// render route list page mobile header 
// when route name is 'bus.routeList' and screen width is less than md
const showRouteListPageMobileHeader = computed(() => (
  route.name === 'bus.routeList' && $q.screen.lt.md
));

// #region Meta ----------------------------------------------------------------
useMeta(() => ({
  title: t('layout.header.title'),
}));
// #endregion
</script>