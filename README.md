[![TypeScript version][ts-badge]][typescript-4-2]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]
[![Build Status - GitHub Actions][gha-badge]][gha-ci]

# HR Dashboard

Задание на JavaScript

Реализовать панель управления контентом в виде таблицы. Смысловая нагрузка следующая: панель управления позволяет HR-менеджерам вести и обрабатывать данные о сотрудниках. Реализовать в виде таблицы с полями:

1. ФИО
2. Должность
3. Оклад
4. Статус (соискатель/сотрудник/уволен)
5. Дата приема на работу
   Каждое поле должно иметь возможность меняться непосредственно в таблице. Параллельно может работать неограниченное кол-во HR. Данные, вносимые другими HR, должны моментально отображаться у всех. Должны быть учтены исключения и конфликтные ситуации (когда HR пытается изменить поле, данные которого у него не актуальны или когда 2 HR пытаются редактировать одно и то же поле). Так-же требуется хранить данные в кеше браузера (LocalStorag, IndexedDB), пока они не утеряют свою актуальность. Поддержка актуальности кеша. Требуется минимизировать количество данных, передаваемых по сети.
   Технологии:
   Сервер: NodeJS (можно использовать без базы данных, а хранить все данные в памяти).
   Клиент: VueJS + Vuex
   Протокол обмена: WebSocket
   Не использовать сторонние библиотеки и фреймворки типа express, socket.io и т.д..
   После выполнения проект необходимо зарелизить на любом хостинге и прислать ссылки на рабочую версию приложения и гит с исходным кодом.

## License

Licensed under the APLv2. See the [LICENSE](https://github.com/AlexCollin/hr-dashboard/LICENSE) file for details.

[ts-badge]: https://img.shields.io/badge/TypeScript-4.2-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2014.16-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[gha-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FAlexCollin%2Fhr-dashboard%2Fbadge&style=flat
[gha-ci]: https://github.com/AlexCollin/hr-dashboard/actions
[typescript]: https://www.typescriptlang.org/
[typescript-4-2]: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-2.html
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/AlexCollin/hr-dashboard/LICENSE
[gh-actions]: https://github.com/features/actions
