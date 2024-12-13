## Создание проекта: 
1. `npm init`
2. `npm i --save parcel-bundler`
3. `npm i --save sass`

## Скрипты: 
```
"dev": "parcel src/*.html",
"build": "parcel build src/*.html --no-source-maps --no-cache --public-url ."
```

## Запуск проекта: 
- `npm run dev` - создаёт сервер для разработки
- `npm run build` - сборка проекта в папку dist