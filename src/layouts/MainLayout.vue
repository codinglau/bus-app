<template>
  <q-layout view="lHh Lpr lFf">
    <!-- header -->
    <q-header reveal elevated>
      <!-- <Bus.RouteListPageMobileHeader v-if="showRouteListPageMobileHeader" /> -->
      <q-toolbar>
        <q-avatar icon="fa-solid fa-bus-simple" />
        <q-toolbar-title 
            class="cursor-pointer"
            @click="onToolbarTitleClick">
          {{ $t('layout.header.title') }}
        </q-toolbar-title>
        <q-btn unelevated stretch
              icon="fa-solid fa-gear" 
              :aria-label="$t('layout.tooltip.about')"
              @click="isDialogOpen = true" />
      </q-toolbar>
    </q-header>

    <!-- footer -->
    <q-footer elevated v-if="showFooter" class="bg-transparent text-dark">
      <!-- company tabs -->
      <Bus.CompanyTabs outside-arrows switch-indicator
          class="bg-primary text-white"
          active-bg-color="primary"
          indicator-color="white"
          :options="companyList" />
    </q-footer>

    <!-- main panel -->
    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>

     <!-- setting dialog -->
     <Dialog.AboutDialog v-model="isDialogOpen" />
  </q-layout>
</template>

<script setup>
import { useMeta, useQuasar } from 'quasar';
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Bus, Dialog } from 'src/components';
import { useGlobalOption } from 'src/constants';

// #region Setup ===============================================================
const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();
const globalOption = useGlobalOption();
// #endregion

// #region toolbar =============================================================
// redirect home on toolbar title click
function onToolbarTitleClick() {
  router.push({
    name: 'bus.home',
    params: { lang: route.params.lang },
  });
}
// about dialog open state
const isDialogOpen = ref(false);
// #endregion

// #region Footer ==============================================================
const companyList = globalOption.getCompanyList(true);
const showFooter = computed(() => (
  route.name === 'bus.routeList'
));
// #endregion

// render route list page mobile header 
// when route name is 'bus.routeList' and screen width is less than md
const showRouteListPageMobileHeader = computed(() => (
  route.name === 'bus.routeList' && $q.screen.lt.md
));

// #region Meta ================================================================
useMeta(() => ({
  title: t('layout.header.title'),
}));
// #endregion
</script>