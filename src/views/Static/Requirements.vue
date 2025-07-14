<template>
  <v-container>
    <ViewTitle title="Задание" hasBackBtn />

    <v-card variant="elevated" class="pa-4">
      <v-card-title class="mb-6">
        Домашна задача: Dashboard за управление на устройства
      </v-card-title>

      <v-card-text>
        <h2 class="u-heading-2 mb-6 mt-12">1. Цел на задачата</h2>
        <p>
          Да се разработи SPA за управление на устройства в enterprise контекст.
          Приложението трябва да визуализира списък с устройства и да предоставя
          интерфейс за създаване, редактиране и преглед на информация,
          включително история на състоянието им.
        </p>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">2. Функционални изисквания</h2>

        <h3 class="u-heading-3 mb-3">2.1 Списък с устройства</h3>
        <ul>
          <li>
            Изведете таблица със следните колони:
            <ul>
              <li>Име на устройството</li>
              <li>Тип (например: "Водомер", "Реле", "Сензор")</li>
              <li>Статус: online, offline, unknown</li>
              <li>Последна активност (дата и час)</li>
            </ul>
          </li>
          <li>
            Поддържайте търсене по име (без чувствителност към главни/малки
            букви)
          </li>
          <li>Добавете филтриране по тип и статус</li>
        </ul>

        <h3 class="u-heading-3 mt-4 mb-3">
          2.2 Добавяне и редактиране на устройство
        </h3>
        <ul>
          <li>Използвайте модален прозорец или отделна страница</li>
          <li>
            Полетата във формата включват:
            <ul>
              <li>Име (текст, задължително)</li>
              <li>Тип (падащ списък)</li>
              <li>Статус (radio buttons или dropdown)</li>
            </ul>
          </li>
          <li>При редакция, предварително попълнете текущите стойности</li>
          <li>Реализирайте валидация на полетата</li>
        </ul>

        <h3 class="u-heading-3 mt-4 mb-3">2.3 Детайли за устройство</h3>
        <ul>
          <li>
            При клик върху ред в таблицата се отваря страница или модален
            прозорец с:
            <ul>
              <li>Всички детайли за устройството</li>
              <li>
                Графика с исторически стойности (например температура,
                потребление, напрежение)
              </li>
            </ul>
          </li>
          <li>Потребителят може да избере период (филтриране на фронтенда)</li>
          <li>Данните се зареждат динамично от mock бекенд</li>
        </ul>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">3. Технически изисквания</h2>
        <ul>
          <li>Vue 3 или React 18+</li>
          <li>
            Управление на състояние (например: Pinia, Zustand, Context API)
          </li>
          <li>Компонентна архитектура и добра структура на проекта</li>
          <li>Responsive дизайн</li>
          <li>Данни се зареждат от mock бекенд (json-server)</li>
          <li>
            Няма ограничения относно използването на библиотеки и frameworks
          </li>
        </ul>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">
          4. Mock бекенд с json-server
        </h2>

        <h3 class="u-heading-3 mb-3">Стъпки:</h3>
        <ol>
          <li>
            Инсталирайте <code>json-server</code>, ако не е инсталиран:
            <v-code class="d-block mt-2 mb-3"
              >npm install -g json-server</v-code
            >
          </li>
          <li>
            Запазете предоставения файл <code>db.json</code> в основната
            директория на проекта.
          </li>
          <li>
            Стартирайте сървъра:
            <v-code class="d-block mt-2 mb-3"
              >json-server --watch db.json --port 3001</v-code
            >
          </li>
        </ol>

        <h3 class="u-heading-3 mt-4 mb-3">Основни endpoints:</h3>

        <v-table density="compact" class="mb-6">
          <thead>
            <tr>
              <th>Метод</th>
              <th>URL</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GET</td>
              <td>http://localhost:3001/devices</td>
              <td>Списък с устройства</td>
            </tr>
            <tr>
              <td>GET</td>
              <td>http://localhost:3001/devices/:id</td>
              <td>Детайли за устройство</td>
            </tr>
            <tr>
              <td>POST</td>
              <td>http://localhost:3001/devices</td>
              <td>Създаване на ново устройство</td>
            </tr>
            <tr>
              <td>PUT</td>
              <td>http://localhost:3001/devices/:id</td>
              <td>Редактиране на съществуващо</td>
            </tr>
            <tr>
              <td>GET</td>
              <td>http://localhost:3001/device_readings?device_id=2</td>
              <td>Исторически данни по устройство</td>
            </tr>
          </tbody>
        </v-table>

        <h2 class="u-heading-2 mt-6 mb-6 mt-12">5. Предаване</h2>
        <ul>
          <li>Изходния код (repository или ZIP файл)</li>
          <li>
            При необходимост инструкции за стартиране или обяснение на кода
          </li>
        </ul>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn :to="ROUTE_NAMES.NOTES" variant="tonal">виж бележките </v-btn>
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
