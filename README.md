# О проекте

React-typescript проект. Развернут командой [Create React App](https://github.com/facebook/create-react-app) --template typescript.


## Подготовка проекта

Установка зависимостей

```bash
$ yarn install
```

## Запуск проекта

Для запуска в режиме разрботки выполните команду

```bash
$ yarn start
```
Для запуска в prod, последовательно выполните команды

```bash
$ yarn build
$ yarn start
```


### TypeScript, ESLint, Prettier, Stylelint, Husky
```bash
# Проверка eslint
$ yarn eslint:check

# Проверка prettier
$ yarn prettier:check

# Проверка stylelint
$ yarn stylelint:check

# Исправление ошибок prettier
$ yarn prettier:fix

# Исправление ошибок stylelint
$ yarn stylelint:fix
```
В проекте используется husky. При коммите запускается pre-commit hook, который запускает команды на проверку типов, линтер, prettier.
Так же проверяется сообщение коммита.

### Валидный шаблон сообщения коммита:
```bash
chore: first commit
fix(server): #13 send cors headers
feat(blog): add comment section
```
