# Лаборатоная работа 5
## Цель работы
Разработать и реализовать алгоритм внешней сортировки. Данные хранятся на сервере в массиве, ервер предоставляет доступ к отдельным элементам. Клиент поочередно запрашивая отдельные ячейки сортирует массив.
## Ход работы
- Разработаем пользовательский интерфейс и опишем пользовательские сценарии работы

![](https://github.com/OneBumBot/Lab5/blob/main/Польз_сц.png)

Сначала пользователь попадает на главную форму. Затем он должен ввести несколько цифр в соответствующее окно ввода. Чтобы отсортировать введенные данные, он должен нажать на соответствующую кнопку и записанные ранее числа отсортируются.

- Опишем хореографию

![](https://github.com/OneBumBot/Lab5/blob/main/Хореография.png)

- Опишем структуру базы данных

| Название | Тип данных | Длина | Описание                                          |
|----------|------------|-------|---------------------------------------------------|
| ID       | int        |       | Ключевое поле                                     |
| NUM      | int        | 100   | Вводимые числа                                    |

- Опишем алгоритмы 
  
  1. Сортировка
  
  ![](https://github.com/OneBumBot/Lab5/blob/main/Сортировка.png)

## Вывод
Разработали и реализовали алгоритм внешней сортировки.
