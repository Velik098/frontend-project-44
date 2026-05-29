# Игры разума

[![Actions Status](https://github.com/Velik098/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Velik098/frontend-project-44/actions)

Игры разума — это набор консольных мини-игр для тренировки устного счёта и логического мышления. После запуска игра приветствует пользователя, задаёт вопросы и завершается после трёх правильных ответов подряд.

## Минимальные требования

- Node.js 18 или выше
- npm 9 или выше
- Терминал с поддержкой запуска Node.js-приложений

## Установка

```bash
git clone https://github.com/Velik098/frontend-project-44.git
cd frontend-project-44
make install
```

Также зависимости можно установить напрямую:

```bash
npm ci
```

Чтобы команды игр были доступны в терминале, свяжите пакет локально:

```bash
npm link
```

## Запуск

Запуск приветствия:

```bash
make brain-games
```

Запуск игр по имени команды:

```bash
brain-even
brain-calc
brain-gcd
brain-progression
brain-prime
```

Если пакет не связан через `npm link`, игры можно запускать через Node.js:

```bash
node bin/brain-even.js
node bin/brain-calc.js
node bin/brain-gcd.js
node bin/brain-progression.js
node bin/brain-prime.js
```
## Игры

5. Игра: "Проверка на чётность"

https://asciinema.org/a/mlaqUuZY0FSYXl1b

6. Игра: "Калькулятор"

https://asciinema.org/a/v8SY2dUj4UWOHMYz

7. Игра: "НОД"

https://asciinema.org/a/yKPXKcEoklVXgBdF

8. Игра: "Арифметическая прогрессия"

https://asciinema.org/a/ZocYXGd3HhvoCau6

9. Игра: "Простое ли число?"

https://asciinema.org/a/xuANGlUbUYOX3K2Z
