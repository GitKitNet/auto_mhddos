### 👉 [English](./README.md)

### 👉 [Українська](./README.uk.md)

# [auto_mhddos](https://github.com/theorlovsky/auto_mhddos) – инструмент для автоматизации работы [mhddos_proxy](https://github.com/porthole-ascend-cinnamon/mhddos_proxy)

Инструмент из разряда "запустил и забыл". Он автоматически во время работы
подтягивает [цели](https://raw.githubusercontent.com/Aruiem234/auto_mhddos/main/runner_targets)
от [Украинского Жнеца](https://t.me/ukrainian_reaper_ddos) и атакует их.

## Установка

Установите Docker с [официального сайта](https://docs.docker.com/get-docker/) или любым другим способом.

ВНИМАНИЕ: в зависимости от выбранного способа, вам может понадобится запускать команды докера от имени root
пользователя (`sudo docker run ...`).

## Использование

### Запустить в фоне

```shell
docker run -dit --name auto_mhddos --restart unless-stopped --pull always ghcr.io/theorlovsky/auto_mhddos:latest
```

### Посмотреть логи

```shell
docker logs -f auto_mhddos
```

### Остановить

```shell
docker rm -f auto_mhddos
```

### Настройка

Дополнительно можно передать следующие параметры при запуске контейнера:

#### `--parallel 3`, `--parallel all`

По умолчанию: `1`

Сколько целей атаковать одновременно. Укажите `all` для атаки по всем активным целям.

#### `--restart-interval 1h`

По умолчанию: `30m`

Минимум: `15m`

Как часто обновлять цели. Поддерживает минуты (`m`), часы (`h`) и дни (`d`).

#### `--debug false`

По умолчанию: `true`

Выводить ли логи.

#### Также поддерживаются все параметры из [документации mhddos_proxy](https://github.com/porthole-ascend-cinnamon/mhddos_proxy#usage) (кроме целей и `-c`)
