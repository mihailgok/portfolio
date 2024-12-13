## Сброка
В dist буду стараться хранить только свежие версии, но если требуется собрать: 
- Очистить dist 
- Запустить:
```shell
npm i
npm run build
```
- Исользовать dist

______

- `npm run dev` - запускает сервер для разработки в папке dist
- `npm run build` - сборка проекта в папку dist

## Создание проекта: 
1. `npm init`
2. `npm i --save parcel`
3. `npm i --save posthtml`
4. `npm i --save parcel-namer-custom`
5. удалить `index.js` и поставить скрипты

## Скрипты: 
```json
// базовые скрипты в package.json

   "scripts": {
      "dev": "parcel src/*.html",
      "build": "parcel build src/*.html --no-content-hash --no-cache --no-source-maps --no-optimize --no-scope-hoist --dist-dir build --public-url ."
   },
```


```json
// плагины .parcelrc

{
  "extends": "@parcel/config-default",
  "namers": ["parcel-namer-custom", "..."]
}
```


```json
// плагины .posthtmlrc

{
  "plugins": {
    "posthtml-include": {}
  }
}
```

```json
// изменение структуры папок в package.json

"parcel-namer-custom": {
   ".sass$": "css/[name].[type]",
   ".css$": "css/[name].[type]",
   ".jpg$": "image/[name].[type]",
   ".jpeg$": "image/[name].[type]",
   ".png$": "image/[name].[type]",
   ".svg$": "image/[name].[type]",
   ".js$": "js/[name].[type]"
},
```
