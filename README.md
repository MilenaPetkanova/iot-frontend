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

## Задачи

### Todos
- [x] init and config
- [x] create structure and architecture
- [x] create table with filters and search
- [x] format date/time
- [x] create edit modal
- [x] validate the edit form
- [x] create details page
- [x] visualize the additional related mock data
- [x] check enhancement, bugs and refactoring tasks
- [x] enhance the styles
- [x] adjust the responsiveness
- [x] check again if all requirements are met

### Enhancements
- [ ] in app add loading animation
- [x] in data table center the text and differentiate its header
- [x] create pages задание, задачи, решение 

### Bugs
- [ ] in db ids are transformed from numbers to strings

### Refactoring
- [x] check it shims files can be added in a folder
- [x] remove unused fonts
- [x] move devices list title in the view 
- [x] in views rename dashboard to devices
- [x] add constants (minimum for routes)
- [x] add enums (minimum for statuses)

## Време:
- init - 60 min
- service, store, routing - 40 min
- fix dependency issues - 60 min
- migrate from webpack to vite - 30 min
- service, store, routing - 15 min
- vuetify, table with filters and search - 30 min
- editing data - 60 min
- refactoring - 60 min
- details components - 60 min
- chart - 120 min
- static pages - 30 min
- enhancing styles - 60 min
- refactoring - 60 min
total: 685 (11 hours and 25 minutes)