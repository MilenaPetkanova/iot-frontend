<template>
  <v-container>
    <ViewTitle title="Бележки" hasBackBtn />

    <v-card variant="elevated" class="pa-4">
      <v-card-title class="mb-6">Задачи и време</v-card-title>

      <v-card-text>
        <h2 class="u-heading-2 mb-6 mt-12">Todos</h2>
        <div>
          <p>+ init and config</p>
          <p>+ create structure and architecture</p>
          <p>+ create table with filters and search</p>
          <p>+ format date/time</p>
          <p>+ create edit modal</p>
          <p>+ validate the edit form</p>
          <p>+ create details page</p>
          <p>+ visualize the additional related mock data</p>
          <p>+ check enhancement, bugs and refactoring tasks</p>
          <p>+ enhance the styles</p>
          <p>+ adjust the responsiveness</p>
          <p>+ check again if all requirements are met</p>
        </div>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">Enhancements</h2>
        <div>
          <p>- in app add loading animation</p>
          <p>+ in data table center the text and differentiate its header</p>
          <p>+ create pages задание, задачи, решение</p>
        </div>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">Bugs</h2>
        <div>
          <p>- in db.json ids are transformed from numbers to strings</p>
        </div>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">Refactoring</h2>
        <div>
          <p>+ check if shims files can be added in a folder</p>
          <p>+ remove unused fonts</p>
          <p>+ move devices list title in the view</p>
          <p>+ in views rename dashboard to devices</p>
          <p>+ add constants (minimum for routes)</p>
          <p>+ add enums (minimum for statuses)</p>
        </div>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">Време</h2>
        <ul>
          <li>init - 60 min</li>
          <li>service, store, routing - 40 min</li>
          <li>fix dependency issues - 60 min</li>
          <li>migrate from webpack to vite - 30 min</li>
          <li>service, store, routing - 15 min</li>
          <li>vuetify, table with filters and search - 30 min</li>
          <li>editing data - 60 min</li>
          <li>refactoring - 60 min</li>
          <li>details components - 60 min</li>
          <li>chart - 120 min</li>
          <li>static pages - 30 min</li>
          <li>enhancing styles - 60 min</li>
          <li>refactoring - 60 min</li>
          <li><strong>total: 685 min (11 hours and 25 minutes)</strong></li>
        </ul>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn :to="ROUTE_NAMES.REQUIREMENTS" variant="tonal"
          >виж заданието</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import ViewTitle from '@/components/General/ViewTitle.vue'
import { ROUTE_NAMES } from '@/constants/routes'
</script>

<style scoped>
p {
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 6px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  padding: 12px 0;
}

li {
  margin-bottom: 8px;
}
</style>
