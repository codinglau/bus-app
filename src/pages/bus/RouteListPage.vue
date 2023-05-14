<template>
  <q-page padding>
    <div class="row q-col-gutter-sm q-col-gutter-sm-md">
      <!-- search field -->
      <div class="col-12">
        <q-input clearable outlined dense
            v-model.trim="searchField"
            bg-color="white"
            clear-icon="close"
            debounce="300"
            :placeholder="$t('layout.drawer.search')"
            :disable="loadingRouteList">
          <template #prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>

      <!-- route list -->
      <div class="col-12">
        <q-table grid hide-pagination
            row-key="id"
            card-container-class="row q-col-gutter-sm q-col-gutter-sm-md"
            :rows="filteredRouteList"
            :pagination="pagination"
            :loading="loadingRouteList"
            :loading-label="$t('message.loading')">
          <template #item="{ row }">
            <div once class="col-12 col-sm-6 col-md-4 col-lg-3">
              <q-card>
                <q-item clickable 
                    active-class="bg-grey-3" 
                    :to="toRouteStopList(row.id)">
                  <q-item-section avatar>
                    <q-card-section 
                        class="column items-center overflow-hidden q-pa-xs">
                      <q-chip square
                          :label="t(row.company)" 
                          class="q-mt-none"
                          size="sm" />
                      <q-btn unelevated round
                          color="primary"
                          text-color="white"
                          size="md"
                          :label="row.id" />
                    </q-card-section>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      {{ row.origin[$route.params.lang] }}
                    </q-item-label>
                    <q-item-label class="text-center">
                      <q-icon name="swap_horiz" color="primary" size="sm" />
                    </q-item-label>
                    <q-item-label class="text-right">
                      {{ row.destination[$route.params.lang] }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref, onBeforeMount, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useFetch } from 'src/composables';
import { useBusService } from 'src/services';
import { useGlobalOption } from 'src/constants';

// #region Setup ===============================================================
const route = useRoute();
const { t } = useI18n();
const { fetchApi, loadingRouteList } = useFetch(['loadingRouteList']);
const service = useBusService();
const globalOption = useGlobalOption();
const companyIds = globalOption.getCompanyIds();
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
function fetchRouteList() {
  routeList.value.splice(0);

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

const pagination = {
  sortBy: 'id',
  descending: false,
  page: 1,
  rowsPerPage: 0
};
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
