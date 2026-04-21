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

  Decks/subdecks are always ordered alphabetically, so you can give them a numeric prefix like
  001 to control the order they appear in. You can also use `_` and `~` as a
  prefix to place items at the top or bottom.

  Although position order depends initially on the insertion order option, you can manually
  [reposition](./browsing.md#cards) cards in different
  ways.

- **Deck, then random notes**: Gathers cards from each subdeck in order, starting from the top.
  Cards from each subdeck are gathered from randomly selected notes.

- **Ascending position**: Gathers cards by ascending position (due #), which is typically the oldest-added first.

- **Descending position**: Gathers cards by descending position (due #), which is typically the latest-added first.

- **Random notes**: Gathers cards from randomly selected notes.

- **Random cards**: Gathers cards in a random order.

### New Card Sort Order

Controls how the new cards are sorted after they have been gathered. The options are:

- **Card type, then order gathered**: Shows cards in order of card type number. Cards of each card type number are shown in the order they were gathered. If you have sibling burying disabled, this ensures all front→back cards are seen before any back→front cards.
  This order is useful if you don't want sibling cards to appear too close to each other.

- **Order gathered**: Shows cards exactly as they were gathered. If sibling burying is disabled, this typically results in all sibling cards appearing one after the other.

- **Card type, then random**: Shows cards in order of card type number, but shuffles the cards of each card type number.
  This order is useful if you don't want sibling cards to appear too close to each other, but still want the cards to appear in a random order.

- **Random note, then card type**: Picks notes at random, then shows all of their siblings in order.

- **Random**: Fully shuffles the gathered cards.

### New/Review Order

Whether new cards should be mixed in with review cards, shown before them, or shown after them.

### Interday Learning/Review Order

Whether (re)learning cards that cross a day boundary should be mixed in with review cards,
shown before them, or shown after them. Because learning cards tend to be harder than
review cards, some users prefer to see them at the end (getting the easy stuff done
first), or at the start (allowing more time to review forgotten ones).

### Review Sort Order

Controls how the review cards are sorted. The options are:

- **Due date, then random**: The default order prioritizes cards that have been waiting
  longer, and it's the recommended order when you are up to date, or when you only have a small
  backlog. If you have taken an extended break or have fallen behind in your reviews,
  you may want to consider changing the sort order temporarily.
- **Due date, then deck**: This also prioritizes cards that have been waiting
  longer, and then shows review cards for each subdeck in turn.
- **Deck, then due date**: Shows review cards for each
  subdeck in turn. This order is generally not recommended, as having material appear
  consistently in the same order makes it easier to guess the answer based on context,
  and leads to weaker memories.
- **Ascending intervals**: Shows cards with shorter intervals first.
- **Descending intervals**: Shows cards with longer intervals first.
- **Ascending ease**: Shows more difficult cards first.
- **Descending ease**: Shows less difficult cards first.
- **Relative overdueness**: Shows cards that you're more likely to have forgotten first. This is generally recommended if
  you have a large backlog that may take some time to get through, and you want to
  reduce the chances of forgetting more cards.

  When using the SM-2 algorithm, overdueness is determined by comparing how
  overdue cards are, and how long their interval is. For example, a card with a
  current interval of 5 days that is overdue by 2 days, will display before a card
  with a current interval of 10 days that is overdue by 3 days.

  When FSRS is enabled, this sort order is removed; the FSRS equivalent is **Ascending retrievability**,
  which is calculated based on each card's retrievability (probability of recall) and the desired retention in the preset.

## Burying

When Anki gathers cards, it first gathers intraday learning cards, then interday learning cards, then review cards, and finally new cards. This affects how burying works:

- If you have all burying options enabled, the sibling that comes earliest in that list will be shown. For example, a review card will be shown in preference to a new card.
- Siblings later in the list can not bury earlier card types. For example, if you disable burying of new cards, and study a new card, it will not bury any interday learning or review cards, and you may see both a review sibling and new sibling in the same session.

The options are:

- **Bury new siblings**: Whether other new cards of the same note (e.g. reverse cards, adjacent cloze deletions) will be delayed until the next day.
- **Bury review siblings**: Whether other review cards of the same note will be delayed until the next day.
- **Bury interday learning siblings**: Whether other learning cards of the same note that crossed a day boundary will be delayed until the next day.

For more info about burying cards, please see [this section](./studying.md#siblings-and-burying) of the manual.

## Audio

- **Don't play audio automatically**: By default, Anki automatically plays any audio you have on
  cards. If you turn on this option Anki will not play audio until you press the replay audio key, <kbd>R</kbd> or <kbd>F5</kbd>.

- **Skip question when replaying answer**: Controls whether audio from
  the question side is played when you use replay action on the answer side. Note that, Anki [does not automatically play](./templates/fields.md#special-fields) audio from the `{{FrontSide}}` field. This option does not influence the behaviour of automatic play.

## Timers

<a id="timer"></a>

Anki monitors how long it takes you to answer each card, so that it
can show you how long was spent studying each day. The time taken does
not influence scheduling.

### Internal Timer

- Maximum answer seconds: The default limit is 60 seconds. If you take
  longer than that, Anki assumes you have walked away from your computer
  or have been distracted, and caps the recorded time at 60 seconds, so
  that you don’t end up with inaccurate statistics.
- This internal timer runs from when the question is shown until you press a button to grade your answer. If you consistently
  spend longer than 60 seconds on a card,
  you may want to consider either raising
  this limit, or even better, making your cards simpler.

### On-screen Timer

- Show on-screen timer: On the Study screen, show a timer that counts the time
  you're taking to study each card. (This timer will stop when it reaches the Maximum answer seconds set for the internal timer.)
- Stop on-screen timer on answer: Whether the on-screen timer should continue running from when you show
  the answer until you press a button to grade your answer. This option does not impact the time that is recorded for your statistics.

## Auto Advance

Requires Anki 23.12 or later. Auto Advance allows you to automatically take some actions after a certain amount of time has passed. To use it, you must first set a non-zero
time in **Seconds to show question for** and/or **Seconds to show answer for**. Then, in the
study screen, use the Auto Advance action from the **More** button to start advancing.

## Easy Days

If you want to spend less time on Anki on some days of the week, such as Sundays, this feature can help you do that.
After the interval is calculated, it will be adjusted by a small amount to change the due date.
Note that setting all days to "Reduced" or "Minimum" will result in the same workload as setting all days to "Normal".
This feature works with both FSRS and the legacy SM-2 algorithm.
Changing your Easy Days configuration doesn't retroactively change existing intervals and will only affect future intervals. Simply put, you will not see immediate changes in the number of due cards.

## FSRS

The [Free Spaced Repetition Scheduler (FSRS)](https://github.com/open-spaced-repetition/fsrs4anki/wiki/ABC-of-FSRS) is an alternative to Anki's legacy
SuperMemo 2 (SM-2) algorithm. By more accurately determining how much information you are likely
to forget, it can help you remember more material in the same amount of time.

When you turn on FSRS, some new options
become available, and SM-2 specific options, such as **Graduating interval**,
**Easy bonus**, etc. are hidden. This option is shared by all presets.

**Before Enabling**

- Please ensure all of your Anki clients support FSRS. Anki 23.10, AnkiMobile 23.10,
  and AnkiWeb all support it. AnkiDroid supports it in 2.17+. If
  one of your clients doesn't support it, things will not work correctly.
- If you previously used the "custom scheduling" version of FSRS, please make
  sure you clear out the custom scheduling section before enabling FSRS.

### A Short Guide

- Enable FSRS under the "FSRS" section, at the bottom of the deck options page. FSRS can only be enabled globally; you cannot enable it for some presets and disable it for others.
- Ensure that all your learning and re-learning steps are shorter than 1d and can be completed on the same day. 23h is not recommended even though it's less than one day because you won't be able to finish this step on the same day as your first review. Steps such as 10m or 30m are good.
- Click the "Optimize" button under the "FSRS parameters" field. If you see a message that says "The FSRS parameters currently appear to be optimal", that's fine.
- Choose a value of desired retention: the proportion of cards recalled successfully when they are due. **This is the most important setting in FSRS. Higher retention leads to shorter intervals and more reviews per day.** The default is 90%, which offers a good balance of retention and workload. Above 90% the workload increases very quickly, and above 97% the workload can be overwhelming. You can use ["Compute minimum recommended retention"](#compute-minimum-recommended-retention) to help you choose the value of desired retention.

Parameters and desired retention are preset-specific, so you can create multiple presets with different settings.

FSRS can adapt to almost any habit, except for one: pressing "Hard" instead of "Again" when you forget the information. When you press "Hard", FSRS assumes you have recalled the information correctly (though with hesitation and a lot of mental effort). If you press "Hard" when you have failed to recall the information, all intervals will be unreasonably high. So, if you have this habit, please change it and use "Again" when you forget the information.

Regarding add-on compatibility, as a general rule of thumb, if an add-on affects intervals and scheduling in some way, it shouldn't be used with FSRS.

### Desired Retention

Desired retention controls how likely you are to remember cards when they are scheduled for a review.
The default value of `0.90` will schedule cards so you have a 90% chance of remembering
them when they come up for review again. This should normally translate to remembering around 90% cards when they are reviewed, and only failing around 10%.

Here is a graph that shows how adjusting this value will affect your workload:

![graph showing an exponential increase in workload as desired retention nears one.](./media/FSRS_retention.png)

The exact shape of the graph is different for everyone. However, there are two patterns that hold true for all:

- As desired retention approaches 1.0, the workload increases drastically.
  Imagine you have a card with a 90% chance of remembering it after 100 days. If your desired retention is `0.90`, you'll review the card again in 100 days. But if your desired retention is `0.95`, you'll need to review it after 46 days instead.
  This means that the intervals of your cards almost halve at `0.95` desired retention and you need to review cards twice as frequently compared to `0.90` desired retention.
  At `0.97`, the interval will be 27 days (you'll have to review your cards 3.7x as frequently).
  At `0.99`, the interval will be only 9 days (you'll have to review your cards more than 10x more frequently than with the defaults).

- As desired retention decreases, you'll forget a greater percentage of your
  cards, and those cards will need to be reviewed again. Eventually, you'll
  get to a point where the forgotten cards contribute more to your workload
  than you gain from the longer delays. Also, keep in mind that forgetting
  material frequently is demotivating.

For these reasons, we suggest you be conservative when adjusting this
number, and recommend you keep it lower than `0.97` and higher than the [minimum recommended retention](#compute-minimum-recommended-retention).

### FSRS Parameters

FSRS parameters affect how cards are scheduled. Do not change the parameters manually or copy them from someone else.

**Optimize FSRS Parameters**

The FSRS optimizer uses machine learning to learn your memory patterns and find parameters that best fit your review history. To do this, the optimizer requires several reviews to fine-tune the parameters.

When you click the **Optimize** button, FSRS will analyze your review history, and generate parameters that are optimal for your memory and the content you're studying. If you have decks that vary wildly in subjective difficulty, it
is recommended to assign them separate presets, as their optimal parameters will differ. There is no need to optimize your
parameters frequently: once every month is sufficient.

By default, parameters are calculated from the review history of all
decks using the current preset. You can optionally [adjust the search](./searching.md)
before optimizing the parameters, if you'd like to change which cards
are used for optimization.

You can also optimize the parameters for all of your presets at once by clicking on **Optimize All Presets**.

**Evaluate FSRS Parameters**

You can use the **Evaluate** button to see metrics that show how well the parameters fit your review history. Smaller numbers
indicate a better fit to your review history.

Log loss doesn't have an intuitive interpretation. RMSE (bins) can be
interpreted as the average difference between the predicted probability
of recalling a card (R) and the actual
probability measured from your review history. For example, RMSE=5% means that, on average, FSRS
is off by 5% when predicting R. You don't need to understand these metrics to use FSRS.

Note that log loss and RMSE (bins) are not perfectly correlated,
so two decks may have similar RMSE values but very different log-loss values, or the other way around.

By default, log loss and RMSE (bins) are calculated from all decks using the current preset. You can optionally [adjust the search](./searching.md) before evaluating the parameters, if you'd like to change which cards are used for evaluation.

### Reschedule Cards on Change

This option controls whether the due dates of cards will be changed when you enable FSRS, change desired retention, or change the parameters. The default is not to reschedule cards: future reviews will use the new scheduling, but there will be no immediate change to your workload. If rescheduling is enabled, the due dates of cards will be changed. Depending on your desired retention, it will often result in a large number of cards becoming due, so **this option is not recommended** when first switching from SM-2.

Use this option sparingly, as it will add a review entry to each of your cards, and increase the size of your collection.

If you're first switching from SM-2 and still wish to use this option, we recommend you first create a backup, enable FSRS with rescheduling, and then if needed, you can undo or restore from the backup.

### Compute Minimum Recommended Retention

Compute minimum recommended retention (CMRR) attempts to find the desired retention value that leads to the most material learned, in the least amount of time. The calculated number can serve as a reference when deciding what to set your desired retention to. You may wish to choose a higher desired retention, if you’re willing to trade more study time for a greater retention rate. However, setting your desired retention lower than the minimum is not recommended, as you'll spend more time studying than necessary, due to increased forgetting.

### The Simulator

You can use the simulator to get an estimate of your workload,
either in reviews per day or in minutes of studying per day.

- **Days to simulate** controls the duration of the simulated study history.
- **Additional new cards to simulate** controls whether the simulator should
  simulate more cards than this preset already has. For example, if you currently have 100 cards under this preset,
  and you set **Additional new cards to simulate** to 50, the simulator will simulate a total of 150 cards.
  This can be useful if you plan to create more new cards in the future.
- **New cards/day** and **Maximum reviews/day** control how many new cards will be learned each day and
  the maximum number of reviews per day.
- **Maximum interval** controls the maximum interval length (in days).

To make the simulation as realistic as possible, the simulator takes into account the real memory states (difficulty, stability, retrievability) of your cards.
It also uses your FSRS parameters and the value of desired retention, therefore changing them will affect the simulation.

#### Learning and Relearning Steps

(Re)learning steps of 1 day or greater are not recommended when using FSRS. The main
reason they were popular with the legacy SM-2 algorithm is because repeatedly
failing a card after it has graduated from the learning phase could reduce
its ease a lot, leading to what some people called "ease hell". This is not
a problem that FSRS suffers from. By keeping your learning steps under a
day, you will allow FSRS to schedule cards at times it has calculated are
optimal for your material and memory. Another reason not to use longer
learning steps is because FSRS may end up scheduling the first review for a
shorter time than your last learning step, leading to the **Hard** button
showing a longer time than **Good**.

We also recommend you keep the number of learning steps to a minimum. Evidence
shows that repeating a card multiple times in a single day does not significantly
contribute to long-term memory, so your time is
better spent on other cards or a shorter study session.

In the latest version of Anki you can let FSRS control short-term scheduling by leaving the (re)learning steps field empty. This is an experimental feature.
Note that just because FSRS-5 _can_ give you intervals shorter than one day doesn't necessarily mean that it _will_. Your **Again** interval can be one day long, or even longer.

#### Add-On Compatibility

Some add-ons can cause conflicts with FSRS. As a general rule of thumb,
if an add-on affects a card's intervals, it shouldn't be used with FSRS.
A list of commonly used add-ons and their FSRS compatibility can be found in [Add-on Compatibility](https://github.com/open-spaced-repetition/fsrs4anki#add-on-compatibility).

#### More

Several frequently asked questions about FSRS have been answered in [its FAQ](https://faqs.ankiweb.net/frequently-asked-questions-about-fsrs.html).

For more info on FSRS, please check:

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
