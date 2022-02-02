# MIND Common
Сущности для общего использования в фронтенд приложениях умной парковочной системы

## Установка
Установка происходит через [npm](https://www.npmjs.com/package/@ermolaev/mind-common)
```
npm i @ermolaev/mind-common
```

## Структура
### api
- useDriverApi - запросы [драйвера](https://smart-parking-system-server.herokuapp.com/api/#/driver)
- useParkingApi - запросы [паркинга](https://smart-parking-system-server.herokuapp.com/api/#/parking)

### http
- useHttp - обертка для совершения запросов
- isCorrectResponse - проверяет, что из useHttp вернулась не ошибка и не пустой обьект 
