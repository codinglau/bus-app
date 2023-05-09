<template>
  <Bus.RouteListSkeleton v-if="loadingRouteList" />

  <div v-else
      class="full-height column"
      :class="{ 'reverse justify-between': $q.screen.lt.md }">
    <!-- search field -->
    <q-input clearable outlined square dense
        v-model.trim="searchField"
        bg-color="white"
        clear-icon="close"
        debounce="300"
        :placeholder="$t('layout.drawer.search')">
      <template #prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <!-- route list -->
    <q-scroll-area class="col">
      <q-list bordered separator v-if="!isEmptyRouteList">
        <q-slide-item v-for="route in filteredRouteList" :key="route.id">
          <q-item clickable 
              active-class="bg-grey-3" 
              :to="toRouteStopList(route.id)">
            <q-item-section avatar>
              <q-card-section 
                  class="column items-center overflow-hidden q-pa-xs">
                <q-chip square
                    :label="t(route.company)" 
                    class="q-mt-none"
                    size="sm" />
                <q-btn unelevated round
                    color="primary"
                    text-color="white"
                    size="md"
                    :label="route.id" />
              </q-card-section>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ route.origin[$route.params.lang] }}
              </q-item-label>
              <q-item-label class="text-center">
                <q-icon name="swap_horiz" color="primary" size="sm" />
              </q-item-label>
              <q-item-label class="text-right">
                {{ route.destination[$route.params.lang] }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-slide-item>
      </q-list>
      
      <!-- empty route list label -->
      <div v-else class="flex flex-center">
        <q-chip square 
            color="transparent"
            icon="warning"
            text-color="primary"
            :label="$t('layout.drawer.noData')" />
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Bus } from 'src/components';
import { useFetch } from 'src/composables';
import { useBusService } from 'src/services';
import { useOption } from 'src/constants';

// #region Setup
const route = useRoute();
const { t } = useI18n();
const { fetchApi, loadingRouteList } = useFetch(['loadingRouteList']);
const service = useBusService();
const option = useOption();
const companyIds = option.getCompanyIds();
// #endregion

// #region Route List
const routeList = ref([]);
const searchField = ref('');
const filteredRouteList = computed(() => {
  // filter route list
  let resultList = [];

  if (searchField.value) {
    // if search field is not empty
    resultList = routeList.value.filter((r) => {
      // combine route id, origin and destination as search target
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

// empty filtered route list flag
const isEmptyRouteList = computed(() => filteredRouteList.value.length === 0);
function fetchRouteList() {
  // fetch bus route list
  if (!companyIds.includes(route.params.companyId)) {
    // invalid company id
    $q.notify({ type: 'negative', message: t('layout.error.invalidCompanyId') });
    return;
  }

  fetchApi(service.getRouteList, { 
    companyId: route.params.companyId 
  }, {
    config: { loadingScope: 'loadingRouteList' },
    onSuccess(routeListRes) { routeList.value = routeListRes; },
  });
}
// #endregion

// redirect to bus route page
function toRouteStopList(routeId) {
  return {
    name: 'bus.routeStopList',
    params: { 
      routeId: routeId,
      direction : 'outbound',
    },
  };
};

// #region Lifecycle
onBeforeMount(() => {
  fetchRouteList();
});
// #endregion

watchEffect(() => {
  // watch route changes and fetch bus route list
  // for the new company id
  if (route.name === 'bus.routeList') {
    setTimeout(fetchRouteList, 300);
  }
});
</script>
