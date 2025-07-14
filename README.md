# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).



# Домашна задача: Dashboard за управление на устройства

## 1. Цел на задачата

Да се разработи SPA за управление на устройства в enterprise контекст. Приложението трябва да визуализира списък с устройства и да предоставя интерфейс за създаване, редактиране и преглед на информация, включително история на състоянието им.

## 2. Функционални изисквания

### 2.1 Списък с устройства

- Изведете таблица със следните колони:
  - Име на устройството
  - Тип (например: "Водомер", "Реле", "Сензор")
  - Статус: online, offline, unknown
  - Последна активност (дата и час)
- Поддържайте търсене по име (без чувствителност към главни/малки букви)
- Добавете филтриране по тип и статус

### 2.2 Добавяне и редактиране на устройство

- Използвайте модален прозорец или отделна страница
- Полетата във формата включват:
  - Име (текст, задължително)
  - Тип (падащ списък)
  - Статус (radio buttons или dropdown)
- При редакция, предварително попълнете текущите стойности
- Реализирайте валидация на полетата

### 2.3 Детайли за устройство

- При клик върху ред в таблицата се отваря страница или модален прозорец с:
  - Всички детайли за устройството
  - Графика с исторически стойности (например температура, потребление, напрежение)
- Потребителят може да избере период (имайте предвид, че json-server не поддържа сложни заявки за време, затова филтрирането ще трябва да се случи на фронтенда)
- Данните се зареждат динамично от mock бекенд

## 3. Технически изисквания

- Vue 3 или React 18+
- Управление на състояние (например: Pinia, Zustand, Context API)
- Компонентна архитектура и добра структура на проекта
- Responsive дизайн
- Данни се зареждат от mock бекенд (`json-server`)
- Няма ограничения относно използването на библиотеки и frameworks

## 4. Mock бекенд с json-server

### Стъпки:

1. Инсталирайте `json-server`, ако не е инсталиран:

```bash
npm install -g json-server
```

2. Запазете предоставения файл `db.json` в основната директория на проекта.

3. Стартирайте сървъра:

```bash
json-server --watch db.json --port 3001
```

### Основни endpoints:

| Метод | URL                                               | Описание                        |
| ----- | ------------------------------------------------- | ------------------------------- |
| GET   | http://localhost:3001/devices                     | Списък с устройства             |
| GET   | http://localhost:3001/devices/:id                 | Детайли за устройство           |
| POST  | http://localhost:3001/devices                     | Създаване на ново устройство    |
| PUT   | http://localhost:3001/devices/:id                 | Редактиране на съществуващо     |
| GET   | http://localhost:3001/device_readings?device_id=2 | Исторически данни по устройство |

## 5. Предаване

Моля, предайте:

- Изходния код (repository или ZIP файл)
- При необходимост инструкции за стартиране или обяснение на кода


# Бележки от автора

## Въпроси
- В 2.2 Добавяне и редактиране на устройство - При редакция, предварително попълнете текущите стойности
- В 1. История на състоянието им?

## Време:
- 12.07 - init - 60 min
- 12.07 - service, store, routing - 40 min
- 12.07 - fix dependency issues - 60 min
- 13.07 - migrate from webpack to vite - 30 min
- 13.07 - service, store, routing - 15 min
- 13.07 - vuetify, table with filters and search - 30 min
- 13.07 - editing data - 60 min
- 13.07 - refactoring - 60 min

## Задачи

### Todos
+ init and config
+ create structure and architecture
+ create table with filters and search
+ format date/time
+ create edit modal
+ validate the edit form
+ create details page
+ visualize the additional related mock data
- check enhancement, bugs and refactoring tasks
- enhance the styles
- adjust the responsiveness
- check again if all requirements are met

### Enhancements
- in header add toggle dark-light theme
- in app add loading animation
- in data table center the text and differentiate its header
- create pages задание, задачи, решение 

### Bugs
- in db ids are transforming from numbers to strings

### Refactoring
- check it shims files can be added in a folder
- remove unused fonts
- move devices list title in the view 
- in views rename dashboard to devices
+ add constants (minimum for routes)
- add enums (minimum for statuses)
