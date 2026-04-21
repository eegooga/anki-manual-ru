# Параметры колоды

<!-- toc -->

Параметры колоды в основном управляют тем, как Anki планирует карточки.
Перед изменением настроек рекомендуется несколько недель поработать со
значениями по умолчанию, чтобы почувствовать логику работы Anki.
Перед изменениями важно понимать, что делает каждый параметр, так как ошибки
могут снизить эффективность обучения.

Чтобы открыть параметры колоды на компьютере, используйте любой из способов:

- Нажмите на иконку шестерёнки на экране Decks.
- Выберите колоду на экране Decks и нажмите **Options** внизу экрана.
- В режиме повторения нажмите **More > Options**.
- В режиме повторения нажмите <kbd>O</kbd>.

Полезные материалы сообщества о параметрах колоды:

- [Deck Options Explained](https://forums.ankiweb.net/t/deck-options-explained/213)
- [Deck Options in a Mental Map](https://forums.ankiweb.net/t/deck-options-in-a-mental-map/15757)

## Пресеты

Anki позволяет использовать общие настройки для разных колод, чтобы проще
массово обновлять параметры. Для этого параметры объединяются в _пресеты_.
Если вы меняете параметр в пресете, изменение применяется ко всем колодам,
которые используют этот пресет. Все новые колоды получают пресет "Default".

Чтобы изменить настройки только для одной колоды, нажмите иконку стрелки
в правом верхнем углу окна Deck Options. Доступны действия:

- **Save**: сохранить все изменения параметров колоды.
- **Add Preset**: добавить новый пресет для этой колоды с настройками по умолчанию.
- **Clone**: клонировать текущий пресет — полезно, если нужно изменить часть
  параметров, оставив остальные без изменений.
- **Rename**: переименовать текущий пресет.
- **Delete**: удалить текущий пресет. После этого следующая синхронизация
  будет [односторонней](./syncing.md#conflicts).
- **Save to All Subdecks**: как **Save**, но дополнительно назначает выбранный
  пресет всем подколодам текущей колоды.

Параметры колоды не имеют обратной силы. Например, если вы изменили задержку
после ошибки, карточки, ошибочно отвеченные до изменения, сохранят старую
задержку, а не новую.

## Подколоды

Если у колоды есть подколоды и вы хотите, чтобы некоторые из них имели
настройки, отличные от родительской колоды, назначьте им отдельные пресеты.
Когда Anki показывает карточку, он проверяет, в какой подколоде она находится,
и применяет параметры этой подколоды. Есть два исключения:

- [Лимиты](#daily-limits) **New cards/day** и **Maximum reviews/day**
  подколоды ограничивают число карточек, которое можно собрать из этой
  подколоды. Но общее число карточек в сессии определяется лимитами колоды,
  которую вы выбрали для обучения.
- Параметры [display order](#display-order) берутся из колоды, выбранной
  для обучения, а не из колоды текущей карточки.

Например, у вас такая структура:

    - Deck A (Preset 1)
      - Deck A::Subdeck B (Preset 2)

Пресет 1 и Пресет 2 одинаковы, кроме двух пунктов:

- Пресет 1:
  - **Learning steps**: `1m 10m`
  - **New/review order**: `Mix with reviews`
- Пресет 2:
  - **Learning steps**: `20m 2h`
  - **New/review order**: `Show after reviews`

Если вы учите Subdeck B:

- Learning steps для всех новых карточек будут `20m 2h` (действует Пресет 2).
- Все новые карточки будут показываться после повторений (действует Пресет 2).

Если вы учите Deck A:

- Learning steps для новых карточек в Deck A будут `1m 10m` (действует Пресет 1).
- Learning steps для новых карточек в Subdeck B будут `20m 2h` (действует Пресет 2).
- Все новые карточки будут смешаны с повторениями (действует Пресет 1).

## Дневные лимиты

### New Cards/Day

Этот параметр задаёт, сколько новых карточек можно вводить в день.
Если вы изучили меньше лимита или пропустили день, на следующий день лимит
не «накопится»: карточек сверх установленного значения не будет.

При обучении колоды с подколодами лимиты подколод ограничивают максимум
карточек, которые можно взять из каждой конкретной подколоды. Лимиты выбранной
колоды управляют общим количеством показанных карточек.

Для старых версий см. [этот FAQ](https://faqs.ankiweb.net/the-anki-2.1-scheduler.html).

Изучение новых карточек временно увеличивает объём повторений, так как новый
материал нужно повторить несколько раз, прежде чем интервалы заметно вырастут.
Если стабильно изучать 20 новых карточек в день, можно ожидать примерно
200 повторений в день. Уменьшить нагрузку можно, снижая число новых карточек.
Многие пользователи в первые дни учат сотни новых карточек, а затем
оказываются перегружены объёмом повторений.

### Maximum Reviews/Day

Позволяет установить верхнюю границу числа карточек повторения в день.
Когда лимит достигнут, Anki больше не показывает карточки повторения в этот
день, даже если они ещё есть. При регулярном обучении это помогает сгладить
пики нагрузки и не «пугает» огромным долгом после перерыва.
Если карточки были скрыты из-за лимита, на экране поздравления появится
подсказка увеличить лимит, если у вас есть время.

При изучении колоды с подколодами лимит повторений работает аналогично
лимиту новых карточек.

Anki включает в счёт повторений карточки обучения, которые
[перешли границу дня](./preferences.md#scheduler) (interday learning cards),
поэтому к ним тоже применяется лимит повторений.

### Дневные лимиты на уровне колоды

Можно использовать один и тот же пресет для разных колод, но с индивидуальными
лимитами для каждой. Это убирает необходимость создавать клоны пресетов
только ради лимитов и упрощает настройку подколод.

В Anki есть три варианта дневных лимитов:

- **Preset**: действует для всех колод, использующих пресет.
- **This deck**: действует только для конкретной колоды.
- **Today only**: действует только для конкретной колоды и только временно.

### New Cards Ignore Review Limit

По умолчанию лимит повторений распространяется и на новые карточки:
когда лимит достигнут, новые карточки не показываются. Если включить эту
опцию, новые карточки будут показываться независимо от лимита повторений.

Если у вас накопился долг просроченных повторений, рекомендуется временно
не вводить новые карточки, пока вы не сократите этот долг. Иначе отставание
может только увеличиться.

### Limits Start From Top

По умолчанию дневные лимиты верхнеуровневой колоды не применяются, если вы
выбрали её подколоду. Например, у родительской колоды лимит 10 новых карточек/день,
а у подколод — 20/день. Лимиты родителя не влияют на число новых карточек
при изучении подколоды.

Если включить эту опцию, лимиты верхних колод применяются и к подколодам,
когда выбрана подколода. В примере выше вы сможете изучить только 10 новых
карточек из подколоды вместо 20.

Эта опция полезна, если вы хотите учить отдельные подколоды, но при этом
удерживать общий лимит карточек по всем подколодам.

## Новые карточки

Параметры этого раздела влияют только на новые карточки и
[карточки обучения](getting-started.md#card-states). После того как карточка
«выпустилась» (прошла все шаги обучения), эти параметры к ней больше не применяются.

### Learning Steps

Управляет числом повторов на этапе обучения и задержками между ними.
Введите одну или несколько задержек через пробел.
Каждое нажатие **Good** переводит карточку на следующий шаг, каждое
нажатие **Again** возвращает на первый шаг.

Например, пусть ваши learning steps: `1m 10m 1d`.

- При нажатии **Again** карточка проходит первый шаг и показывается снова
  через 1 минуту.
- При нажатии **Good** на новой карточке или после шага 1 минута карточка
  переходит на следующий шаг и показывается через 10 минут.
- При нажатии **Good** после шага 10 минут карточка откладывается до следующего дня.
- При нажатии **Good** на следующий день карточка выпускается и становится
  карточкой повторения. Следующий показ будет через задержку, заданную
  параметром _graduating interval_.

Кнопка **Hard** работает по-разному в зависимости от текущего шага.

- На первом шаге **Hard** показывает задержку `6m`. Это среднее первых двух
  шагов: `1m` и `10m`.
  - Исключение: если шаг обучения только один, **Hard** даёт задержку в 1.5
    раза больше этого шага. Эта задержка не более чем на 1 день длиннее шага.
- На всех остальных шагах **Hard** повторяет текущий шаг.

Если больше нечего учить, Anki по умолчанию может показывать карточки обучения
до 20 минут раньше. Чтобы отключить это или изменить «забегание вперёд»,
см. [Preferences](preferences.md).

#### Границы дня

Anki по-разному обрабатывает короткие шаги и шаги, которые
[пересекают границу дня](./preferences.md#review).
При коротких шагах карточки показываются сразу после истечения задержки,
в приоритете перед новыми и повторениями — чтобы вы отвечали как можно ближе
к запрошенному интервалу. Если шаг пересекает границу дня, задержка
автоматически переводится в дни. Например, если следующий день начнётся
через 5 часов, а задержка 6 часов, Anki преобразует её в 1 день.

### Graduating Interval

Количество дней до следующего показа карточки после нажатия **Good** на
финальном шаге обучения. Это первый интервал после «выпуска» карточки из
обучения. См. пример [выше в этом разделе](deck-options.md#learning-steps).

### Easy Interval

Количество дней до следующего показа карточки после нажатия **Easy**.

Кнопка **Easy** переводит карточку обучения в карточку повторения независимо
от текущего шага и назначает ей задержку из этого параметра.
Easy interval всегда должен быть не меньше graduating interval, обычно на
несколько дней больше.

### Insertion Order

Определяет, добавлять ли новые карточки случайно или последовательно.
При изменении этого параметра Anki пересортирует колоды в текущем пресете.

В современных версиях Anki рекомендуется оставить `Sequential`, а порядок
показа регулировать через [display order](deck-options.md#display-order).

## Lapses

Когда вы нажимаете **Again** на карточке повторения, это называется _lapse_.
Параметры этого раздела влияют на такие карточки.

### Relearning Steps

То же, что learning steps, но для карточек после lapse.
Когда вы ошибаетесь на карточке повторения (**Again**), она проходит
_relearning steps_, прежде чем снова станет карточкой повторения.

Если оставить шаги пустыми, карточка пропустит переобучение и получит
новый интервал 1 день по умолчанию.

### Minimum Interval

Задаёт минимальное число дней ожидания после завершения переобучения.
По умолчанию это 1 день — карточка снова покажется на следующий день.

### Leeches

Управляет тем, как Anki обрабатывает leeches. Подробнее см. раздел
[leeches](leeches.md).

## Порядок показа

Параметры этого раздела берутся из колоды, выбранной для обучения, а не
из колоды текущей отображаемой карточки.

Дополнительная информация о порядке показа есть в разделе
[studying](studying.md#display-order).

### New Card Gather Order

Определяет, как Anki собирает новые карточки из колоды. Варианты:

- **Deck**: Gathers cards from each subdeck in order, starting from the top. Cards from
  each subdeck are gathered in ascending position. If the daily limit of the selected
  deck is reached, gathering may stop before all subdecks have been checked. This
  order is fastest in large collections, and allows you to prioritize subdecks that
  are closer to the top.

  Колоды/подколоды всегда сортируются по алфавиту, поэтому можно добавить
  числовой префикс, например `001`, чтобы управлять порядком.
  Также можно использовать префиксы `_` и `~`, чтобы разместить элементы
  вверху или внизу.

  Хотя порядок позиций изначально зависит от параметра insertion order,
  вы можете вручную [reposition](./browsing.md#cards) карточки разными способами.

- **Deck, then random notes**: собирает карточки из каждой подколоды по порядку,
  начиная сверху. Карточки каждой подколоды берутся из случайно выбранных заметок.

- **Ascending position**: собирает карточки по возрастанию позиции (due #),
  обычно от самых старых добавленных к более новым.

- **Descending position**: собирает карточки по убыванию позиции (due #),
  обычно от самых недавно добавленных.

- **Random notes**: собирает карточки из случайно выбранных заметок.

- **Random cards**: собирает карточки в случайном порядке.

### New Card Sort Order

Управляет сортировкой новых карточек после их сбора. Варианты:

- **Card type, then order gathered**: показывает карточки в порядке номера типа карточки.
  Карточки каждого типа показываются в порядке сбора. Если sibling burying выключен,
  этот вариант гарантирует, что все карточки front→back будут показаны до back→front.
  Такой порядок полезен, если вы не хотите видеть sibling-карточки слишком близко.

- **Order gathered**: показывает карточки ровно в порядке их сбора.
  Если sibling burying выключен, обычно sibling-карточки идут подряд.

- **Card type, then random**: показывает карточки по номеру типа, но перемешивает
  карточки внутри каждого типа. Полезно, если вы хотите разнести sibling-карточки,
  но при этом сохранить случайность.

- **Random note, then card type**: случайно выбирает заметки, затем показывает
  всех их sibling-карточек по порядку.

- **Random**: полностью перемешивает собранные карточки.

### New/Review Order

Определяет, должны ли новые карточки смешиваться с повторениями, показываться
до них или после них.

### Interday Learning/Review Order

Определяет, как показывать (пере)обучающие карточки, которые пересекли
границу дня: смешивать с повторениями, показывать до них или после.
Так как обучающие карточки часто сложнее карточек повторения, некоторым
пользователям удобнее видеть их в конце (сначала «лёгкие» карточки),
а другим — в начале (чтобы осталось больше времени на сложные).

### Review Sort Order

Управляет сортировкой карточек повторения. Варианты:

- **Due date, then random**: порядок по умолчанию, приоритезирует карточки,
  которые ждут дольше. Рекомендуется, когда вы почти без долга или долг небольшой.
  После длительного перерыва можно временно выбрать другой порядок.
- **Due date, then deck**: также приоритезирует «долго ждущие» карточки,
  затем показывает повторения по подколодам по очереди.
- **Deck, then due date**: показывает повторения по подколодам по очереди.
  Обычно не рекомендуется: при постоянном порядке проще угадывать ответы
  по контексту, что ухудшает долговременную память.
- **Ascending intervals**: сначала карточки с меньшими интервалами.
- **Descending intervals**: сначала карточки с большими интервалами.
- **Ascending ease**: сначала более трудные карточки.
- **Descending ease**: сначала более лёгкие карточки.
- **Relative overdueness**: сначала карточки, которые вы с большей вероятностью
  забыли. Обычно рекомендуется при большом бэклоге, который требует времени,
  чтобы снизить риск дальнейшего забывания.

  В алгоритме SM-2 overdueness определяется сравнением просрочки карточки
  и длины её интервала. Например, карточка с текущим интервалом 5 дней
  и просрочкой 2 дня будет показана раньше карточки с интервалом 10 дней
  и просрочкой 3 дня.

  Когда включён FSRS, этот вариант сортировки исчезает; эквивалент в FSRS —
  **Ascending retrievability**, рассчитываемый по retrievability каждой карточки
  (вероятности вспоминания) и desired retention в пресете.

## Burying

При сборе карточек Anki сначала берёт intraday learning cards, затем interday
learning cards, потом review cards и в конце new cards. Это влияет на burying:

- Если включены все варианты burying, показывается sibling-карточка, которая
  раньше в этом списке. Например, review-карточка будет показана раньше новой.
- Sibling-карточки, которые стоят позже в списке, не могут «закопать» более
  ранние типы карточек. Например, если вы отключили burying новых карточек и
  изучаете новую карточку, она не закопает interday learning/review карточки,
  и в одной сессии вы можете увидеть и review-sibling, и new-sibling.

Варианты:

- **Bury new siblings**: откладывать ли другие новые карточки той же заметки
  (например, обратные карточки, соседние cloze) до следующего дня.
- **Bury review siblings**: откладывать ли другие review-карточки той же заметки
  до следующего дня.
- **Bury interday learning siblings**: откладывать ли до следующего дня другие
  обучающие карточки той же заметки, пересёкшие границу дня.

Подробнее о burying см. [этот раздел](./studying.md#siblings-and-burying).

## Аудио

- **Don't play audio automatically**: по умолчанию Anki автоматически
  воспроизводит любое аудио на карточках. Если включить эту опцию, звук
  не будет воспроизводиться, пока вы не нажмёте повтор аудио
  (<kbd>R</kbd> или <kbd>F5</kbd>).

- **Skip question when replaying answer**: управляет, проигрывать ли звук
  с вопроса при действии replay на стороне ответа. Обратите внимание: Anki
  [не воспроизводит автоматически](./templates/fields.md#special-fields)
  аудио из поля `{{FrontSide}}`. Эта опция не влияет на автоматическое
  воспроизведение.

## Таймеры

<a id="timer"></a>

Anki отслеживает, сколько времени занимает ответ на каждую карточку, чтобы
показывать общее время обучения за день. Это время не влияет на расписание.

### Внутренний таймер

- Maximum answer seconds: лимит по умолчанию — 60 секунд. Если вы тратите
  больше, Anki предполагает, что вы отвлеклись или отошли от компьютера,
  и ограничивает записанное время 60 секундами, чтобы статистика не искажалась.
- Внутренний таймер идёт с момента показа вопроса до нажатия кнопки оценки.
  Если вы стабильно тратите на карточку больше 60 секунд, стоит либо
  увеличить лимит, либо (лучше) упростить карточки.

### Таймер на экране

- Show on-screen timer: показывать в окне Study таймер времени на карточку.
  (Этот таймер остановится на значении Maximum answer seconds внутреннего таймера.)
- Stop on-screen timer on answer: продолжать ли экранный таймер после показа
  ответа до нажатия кнопки оценки. На записываемую статистику эта опция
  не влияет.

## Auto Advance

Требуется Anki 23.12+. Auto Advance позволяет автоматически выполнять
действия после заданного времени. Чтобы использовать функцию, сначала задайте
ненулевое время в **Seconds to show question for** и/или
**Seconds to show answer for**. Затем в окне Study запустите Auto Advance
через кнопку **More**.

## Easy Days

Если вы хотите тратить меньше времени на Anki в отдельные дни недели
(например, по воскресеньям), эта функция может помочь.
После расчёта интервал будет слегка скорректирован для сдвига due date.
Если установить все дни в "Reduced" или "Minimum", нагрузка будет такой же,
как при "Normal" для всех дней. Функция работает и с FSRS, и с SM-2.
Изменение Easy Days не пересчитывает существующие интервалы задним числом —
влияет только на будущие интервалы, поэтому мгновенных изменений числа
просроченных карточек не будет.

## FSRS

[Free Spaced Repetition Scheduler (FSRS)](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS)
— это альтернатива устаревшему алгоритму Anki SuperMemo 2 (SM-2).
Более точно оценивая, сколько информации вы, вероятно, забудете, FSRS помогает
запоминать больше материала за то же время.

При включении FSRS появляются новые параметры, а SM-2-специфичные опции
(например, **Graduating interval**, **Easy bonus** и др.) скрываются.
Этот переключатель общий для всех пресетов.

**Перед включением**

- Убедитесь, что все ваши клиенты Anki поддерживают FSRS.
  Anki 23.10, AnkiMobile 23.10 и AnkiWeb поддерживают его, AnkiDroid — с 2.17+.
  Если хотя бы один клиент не поддерживает FSRS, работа будет некорректной.
- Если вы ранее использовали версию FSRS с "custom scheduling", перед
  включением FSRS очистите раздел custom scheduling.

### Краткая инструкция

- Включите FSRS в разделе "FSRS" внизу страницы deck options.
  FSRS включается только глобально: нельзя включить его для одних пресетов
  и выключить для других.
- Убедитесь, что все learning/re-learning steps короче 1 дня и могут быть
  завершены в тот же день. `23h` не рекомендуется, хотя и меньше суток:
  вы не закончите этот шаг в тот же день, что и первое повторение.
  Хорошие примеры: `10m`, `30m`.
- Нажмите "Optimize" под полем "FSRS parameters".
  Сообщение "The FSRS parameters currently appear to be optimal" — это нормально.
- Выберите desired retention — долю карточек, успешно вспоминаемых к сроку.
  **Это самая важная настройка FSRS. Более высокий retention даёт более короткие
  интервалы и больше повторений в день.** Значение по умолчанию — 90%,
  обычно это хороший баланс. Выше 90% нагрузка растёт очень быстро,
  а выше 97% может стать чрезмерной. Для выбора можно использовать
  ["Compute minimum recommended retention"](#compute-minimum-recommended-retention).

Параметры и desired retention задаются на уровне пресета, поэтому можно
создать несколько пресетов с разными настройками.

FSRS адаптируется почти к любым привычкам, кроме одной: нажимать "Hard"
вместо "Again", когда вы не вспомнили материал. При "Hard" FSRS считает,
что материал вспомнен корректно (хоть и с трудом). Если ставить "Hard"
при забывании, интервалы станут неоправданно большими. Поэтому при забывании
используйте "Again".

По совместимости дополнений общее правило такое: если дополнение влияет
на интервалы или планирование, с FSRS его лучше не использовать.

### Desired Retention

Desired retention определяет вероятность того, что вы вспомните карточку
к моменту её следующего повторения. Значение по умолчанию `0.90` означает,
что карточки будут планироваться так, чтобы шанс вспоминания был около 90%.
На практике это обычно означает примерно 90% успешных ответов и около 10%
ошибок на повторении.

Ниже график, показывающий, как изменение этого значения влияет на нагрузку:

![graph showing an exponential increase in workload as desired retention nears one.](./media/FSRS_retention.png)

Точная форма графика у всех разная, но есть два общих закономерных эффекта:

- Чем ближе desired retention к 1.0, тем сильнее растёт нагрузка.
  Представьте карточку с 90% шансом вспоминания через 100 дней.
  При desired retention `0.90` вы повторите её через 100 дней.
  При `0.95` — уже через 46 дней.
  То есть при `0.95` интервалы почти вдвое меньше, а повторять нужно почти
  вдвое чаще по сравнению с `0.90`.
  При `0.97` интервал будет 27 дней (повторения примерно в 3.7 раза чаще).
  При `0.99` — всего 9 дней (более чем в 10 раз чаще, чем при настройках по умолчанию).

- Чем ниже desired retention, тем больший процент карточек вы будете забывать,
  и их придётся повторять заново. В какой-то момент вклад забытых карточек в
  нагрузку станет больше, чем выгода от длинных интервалов. Кроме того,
  частое забывание демотивирует.

Поэтому рекомендуем менять это значение осторожно и держать его ниже `0.97`,
но выше [minimum recommended retention](#compute-minimum-recommended-retention).

### FSRS Parameters

Параметры FSRS влияют на планирование карточек. Не меняйте параметры вручную
и не копируйте их у других пользователей.

**Optimize FSRS Parameters**

Оптимизатор FSRS использует машинное обучение, чтобы выявить особенности вашей
памяти и подобрать параметры, наилучшим образом соответствующие вашей истории
повторений. Для тонкой настройки ему нужна достаточная история ответов.

Когда вы нажимаете **Optimize**, FSRS анализирует историю повторений и создаёт
параметры, оптимальные для вашей памяти и изучаемого материала.
Если у вас колоды сильно различаются по субъективной сложности, лучше назначить
им разные пресеты — оптимальные параметры у них могут отличаться.
Часто оптимизировать не нужно: обычно достаточно раз в месяц.

По умолчанию параметры считаются по истории повторений всех колод, использующих
текущий пресет. При желании перед оптимизацией можно
[настроить поиск](./searching.md), чтобы изменить набор карточек для расчёта.

Можно также оптимизировать параметры сразу для всех пресетов кнопкой
**Optimize All Presets**.

**Evaluate FSRS Parameters**

Кнопка **Evaluate** показывает метрики, отражающие, насколько параметры
соответствуют вашей истории повторений. Меньшие значения означают лучшее
соответствие.

У Log loss нет интуитивной интерпретации. RMSE (bins) можно понимать как
среднее расхождение между предсказанной вероятностью вспоминания карточки (R)
и фактической вероятностью по вашей истории повторений.
Например, RMSE=5% означает, что FSRS в среднем ошибается на 5% в предсказании R.
Для использования FSRS разбираться в этих метриках необязательно.

Обратите внимание: log loss и RMSE (bins) не идеально коррелируют.
Поэтому две колоды могут иметь близкий RMSE, но сильно отличающийся log loss,
и наоборот.

По умолчанию log loss и RMSE (bins) считаются по всем колодам текущего пресета.
При желании перед оценкой можно [настроить поиск](./searching.md), чтобы
изменить набор карточек для расчёта.

### Reschedule Cards on Change

Эта опция определяет, менять ли due dates карточек при включении FSRS,
изменении desired retention или параметров. По умолчанию перепланирование
выключено: новые правила будут применяться только к будущим повторениям,
без мгновенного скачка нагрузки. Если включить перепланирование, due dates
изменятся; в зависимости от desired retention это часто приводит к тому,
что сразу много карточек становятся срочными, поэтому **при первом переходе
с SM-2 эту опцию обычно не рекомендуют**.

Используйте опцию осторожно: она добавляет запись повторения к каждой карточке
и увеличивает размер коллекции.

Если вы только переходите с SM-2 и всё же хотите включить эту опцию,
сначала сделайте резервную копию, затем включите FSRS с перепланированием;
при необходимости можно откатить изменения или восстановиться из бэкапа.

### Compute Minimum Recommended Retention

Compute minimum recommended retention (CMRR) пытается найти значение desired retention,
при котором вы усваиваете максимум материала за минимум времени.
Получившееся число можно использовать как ориентир.
Вы можете выбрать более высокий retention, если готовы потратить больше времени
ради лучшего удержания. Но ставить retention ниже минимально рекомендованного
обычно не стоит: из-за большего забывания суммарно времени на обучение уйдёт больше.

### The Simulator

Симулятор позволяет оценить нагрузку — в повторениях в день
или в минутах обучения в день.

- **Days to simulate** задаёт длительность симулируемой истории обучения.
- **Additional new cards to simulate** определяет, должен ли симулятор
  учитывать дополнительные карточки сверх текущего числа в пресете.
  Например, если сейчас в пресете 100 карточек и вы задали 50,
  симуляция пойдёт для 150 карточек. Полезно, если вы планируете добавлять
  новые карточки в будущем.
- **New cards/day** и **Maximum reviews/day** задают, сколько новых карточек
  учится в день и каков максимум повторений в день.
- **Maximum interval** задаёт максимальную длину интервала (в днях).

Чтобы симуляция была максимально реалистичной, учитываются реальные состояния
памяти ваших карточек (difficulty, stability, retrievability).
Также используются ваши параметры FSRS и desired retention, поэтому их
изменение влияет на результат симуляции.

#### Learning and Relearning Steps

Шаги (пере)обучения длиной 1 день и больше не рекомендуются при FSRS.
Их популярность в старом SM-2 была связана с тем, что многократные ошибки
после выпуска карточки сильно снижали ease и приводили к так называемому
"ease hell". В FSRS такой проблемы нет. Если шаги обучения короче дня,
FSRS может планировать повторения в моменты, которые он считает оптимальными
для вашего материала и памяти. Ещё одна причина избегать длинных шагов:
FSRS может назначить первое повторение раньше последнего learning step,
из-за чего кнопка **Hard** покажет более длинный интервал, чем **Good**.

Также рекомендуем минимизировать число learning steps. Исследования показывают,
что многократные повторы одной карточки в течение дня почти не улучшают
долгосрочную память, поэтому время лучше потратить на другие карточки
или сократить сессию.

В последних версиях Anki можно позволить FSRS управлять краткосрочным
планированием, оставив поле (re)learning steps пустым. Это экспериментальная
возможность.
Учтите: то, что FSRS-5 _может_ давать интервалы короче дня, не означает,
что он _обязательно_ это сделает. Интервал для **Again** может быть
равен одному дню или даже больше.

#### Add-On Compatibility

Некоторые дополнения конфликтуют с FSRS. Общее правило:
если дополнение влияет на интервалы карточки, его не стоит использовать
вместе с FSRS.
Список популярных дополнений и их совместимость с FSRS:
[Add-on Compatibility](https://github.com/open-spaced-repetition/fsrs4anki#add-on-compatibility).

#### More

Ответы на частые вопросы о FSRS есть в [FAQ](https://faqs.ankiweb.net/frequently-asked-questions-about-fsrs.html).

Подробнее о FSRS:

- [FSRS4Anki Wiki](https://github.com/open-spaced-repetition/fsrs4anki/wiki)
- [FSRS4Anki on Github](https://github.com/open-spaced-repetition/fsrs4anki)

## Advanced

### Maximum Interval

The maximum number of days a review card will wait before it's shown again. When reviews have reached the limit, **Hard**, **Good** and **Easy** will all give the same delay. The shorter you set this, the greater your workload will be. The default is 100 years; you can decrease this to a smaller number if you’re willing to trade extra study time for higher retention.

### Historical Retention

This setting is hidden unless FSRS is turned on.

When some of your review history is missing, FSRS needs to fill in the gaps. By default, it will assume that when you did those old reviews, you remembered 90% of the material. If your old retention was appreciably higher or lower than 90%, adjusting this option will allow FSRS to better approximate the missing reviews.

Your review history may be incomplete for two reasons:

- Because you're using the **Ignore cards reviewed before** option.
- Because you previously deleted review logs to free up space, or imported material from a different SRS program.

The latter is quite rare, so unless you're using the former option, you probably don't need to adjust this setting.

### Ignore Cards Reviewed Before

If set, cards reviewed before the provided date will be ignored when optimizing FSRS parameters. This can be useful if you imported someone else's scheduling data, or have changed the way you use the answer buttons.

### Starting Ease

Controls the ease that cards start out with. It is
set when a card graduates from learning for the first time. It defaults
to 2.50, meaning that once you have finished learning a card, answering
**Good** on subsequent reviews will increase the delay by approximately
2.5x (e.g. if the last delay was 10 days, the next delay would be around 25
days). Based upon how you rate the card in subsequent reviews, the
ease may increase or decrease from its starting value.

### Easy Bonus

An extra multiplier applied to the interval when a review card is answered
**Easy**. With the default value of 1.30, **Easy** will give an interval that is
1.3 times the Good interval (e.g. if the Good interval was 10 days, the Easy
interval would be around 13 days).

### Interval Modifier

An extra multiplier that is applied to all reviews. At its default of 1.00 it
does nothing. If you set it to 0.80, intervals will be generated at
80% of their normal size (so a 10 day interval would become 8 days).
You can thus use the multiplier to to make your reviews less or more frequent.

For moderately difficult material, the average user should find they
remember approximately 90% of mature cards when they come up for review. You
can find out your own performance by opening the graphs/statistics for a
deck and looking at the Answer Buttons graph - mature retention is the
correct% on the right side of the graph. If you haven’t been studying for
long, you may not have any mature cards yet. As performance with new
cards and younger cards can vary considerably, it’s a good idea to wait
until you have a reasonable amount of mature reviews before you start
drawing conclusions about your retention rate.

On the SuperMemo website, they suggest that you can find an appropriate
multiplier for a desired retention rate. Their formula boils down to:

    log(desired retention%) / log(current retention%)

Imagine we have a current retention rate of 85% and we want to increase
it to 90%. We’d calculate the modifier as:

    log(90%) / log(85%) = 0.65

You can use [Google to calculate this](https://www.google.com/search?q=log(90%25)+%2F+log(85%25)).

If you enter the resulting 65% into the interval modifier, you should
find over time that your retention moves closer to your desired
retention.

One important thing to note however is that the trade-off between time
spent studying and retention is not linear: we can see here that to
increase our retention by 5 percentage points, we would have to study 35%
more frequently. If the material you are learning is very important then
it may be worth the extra effort – that is, of course, something you will need to
decide for yourself. If you are simply worried that you are forgetting too
much, then you may find investing more time at the initial learning stage, or using mnemonics will give you more gain for less effort.

One final thing to note is that Anki forces a new interval to be at
least 1 day longer than it was previously, so that you do not get stuck
reviewing with the same interval forever. If your goal is to repeat a
card once a day for multiple days, you can do that by setting more
learning mode steps, instead of by adjusting this modifier.

### Hard Interval

The multiplier applied when you use the **Hard** button. The percentage is relative
to the previous interval, e.g. with a default of 1.20, a card with a 10-day interval
will be given 12 days.

### New Interval

The multiplier applied when you use the **Again** button on a review card. The
default 0.00 means that a review card's delay is reset to zero when you forget it
(which then becomes 1 day after the [minimum interval](#minimum-interval) is
applied).

If changed from the default, it is possible for forgotten cards to preserve part
of their previous delay. For example, if a card had a 100 day interval, and you set
the **New Interval** to 0.20, the new interval would be 20 days.

While preserving part of the interval may seem to make sense, SuperMemo has observed
that preserving part of the delay can actually [be counter-productive](https://supermemo.guru/wiki/Post-lapse_stability). For this reason, we recommend you leave it on the default setting.

### Custom Scheduling

You can have more control over Anki's scheduling of cards by using your own JavaScript in the custom scheduling field. This is a global option, so code entered here applies to every preset.

Here is an example custom scheduling script. Note that, for Qt5 versions of Anki, the code needs to be transpiled.

```javascript
// print the existing states
console.log(
  JSON.stringify(states, null, 4)
);

// load the debugger if the web inspector is open
debugger;

// if the hard button is a learning step, make it
// a 123 minute delay
if (states.hard.normal?.learning) {
  states.hard.normal.learning.scheduledSecs = 123 * 60;
}

// apply the same change in a rescheduling filtered deck
if (states.hard.filtered?.rescheduling?.originalState?.learning) {
  states.hard.filtered.rescheduling.originalState.learning.scheduledSecs =
    123 * 60;
}

// increase ease factor by 0.2 when Easy used on a review
if (states.good.normal?.review) {
  states.easy.normal.review.easeFactor =
    states.good.normal.review.easeFactor + 0.2;
}
```

You can also see [FSRS custom scheduling code](https://github.com/open-spaced-repetition/fsrs4anki/blob/main/fsrs4anki_scheduler.js) as an example.

The various scheduling states of cards are described in [SchedulingStates](https://github.com/ankitects/anki/blob/main/proto/anki/scheduler.proto).
