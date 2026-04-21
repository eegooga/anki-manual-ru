# Обзор

<!-- toc -->

Окно «Обзор» позволяет искать по карточкам и заметкам, а также редактировать их.
Оно открывается нажатием **Browse** в главном окне или клавишей
<kbd>B</kbd>. Окно состоит из трёх частей: _боковая панель_ слева,
_таблица карточек/заметок_ справа сверху и _область редактирования_ справа снизу.
Если навести курсор между двумя секциями, можно зажать кнопку мыши и перетащить
границу, чтобы увеличить одну секцию и уменьшить другую.

## Режимы таблицы

![Table Modes](media/browser_table_modes.png)

В Anki 2.1.45+ доступны два режима: в таблице данных показываются либо карточки,
либо заметки. Переключить режим можно переключателем сверху слева от поля поиска
или сочетанием <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> /
<kbd>Cmd</kbd>+<kbd>Opt</kbd>+<kbd>T</kbd>. Переключатель также показывает,
что сейчас отображается: **C**ards или **N**otes.

**Примечание**: для простоты в этом руководстве обычно подразумевается, что
активен режим Cards. Везде, где упоминается выбор/поиск и т. п. «карточек»,
можно читать это как «карточки или заметки в зависимости от активного режима».

## Боковая панель

_Боковая панель_ слева предоставляет быстрый доступ к частым условиям поиска.
В Anki 2.1.45+ в ней также есть строка поиска, средства редактирования тегов и
колод и выбор из двух инструментов, описанных ниже.
Переключать инструменты можно через панель сверху на боковой панели или
сочетаниями <kbd>Alt</kbd>+<kbd>1</kbd>/<kbd>2</kbd>.

### Инструмент поиска

![Search Tool](media/browser_search_tool.png)

С этим инструментом боковая панель работает как в предыдущих версиях:
щелчок по элементу запускает поиск по нему.

Если удерживать <kbd>Ctrl</kbd> (на Mac — <kbd>Command</kbd>) при щелчке,
выбранный элемент добавится к текущему запросу через AND вместо запуска нового
поиска. Например, чтобы показать _изучаемые_ карточки из колоды German, нажмите
«Learning», затем <kbd>Ctrl</kbd>-клик по «German».

Удерживайте <kbd>Shift</kbd>, чтобы использовать OR вместо AND.
Например, кликните по одной колоде, затем <kbd>Shift</kbd>-кликните по другой —
и увидите карточки из обеих колод в одном списке.

Можно удерживать <kbd>Alt</kbd> (на Mac — <kbd>Option</kbd>), чтобы инвертировать
условие (добавить префикс `-`): например, показать все карточки текущей колоды,
которые _не_ имеют определённого тега. <kbd>Alt</kbd>/<kbd>Option</kbd> можно
комбинировать с <kbd>Ctrl</kbd> или <kbd>Shift</kbd> (например,
<kbd>Ctrl</kbd>+<kbd>Alt</kbd> добавит новое отрицательное условие поиска).

В Anki 2.1.39+ можно также удерживать одновременно <kbd>Ctrl</kbd> и
<kbd>Shift</kbd> при нажатии на условие поиска, чтобы заменить все вхождения
того же типа новым значением.
Предположим, вы ввели сложное выражение:
`deck:Swahili (is:due or tag:important)`
и теперь хотите выполнить тот же поиск для колоды Urdu. Удерживайте
<kbd>Ctrl</kbd>+<kbd>Shift</kbd> и нажмите на Urdu в боковой панели — получите:
`deck:Urdu (is:due or tag:important)`.

### Инструмент выделения

![Selection Tool](media/browser_selection_tool2.png)

Инструмент выделения позволяет выбирать сразу несколько элементов, удерживая
<kbd>Ctrl</kbd> или <kbd>Shift</kbd> во время клика. Также он поддерживает
перетаскивание для изменения порядка колод и тегов.

Пример: у вас есть теги `Math`, `Calculus` и `Algebra`.
Нажмите `Calculus`, затем <kbd>Ctrl</kbd>-кликните `Algebra`. Теперь оба тега
выделены; перетащите любой из них на `Math`, чтобы сделать их дочерними.
В результате Anki переименует теги в `Math::Calculus` и `Math::Algebra`
и обновит ваши заметки.

Ещё один сценарий множественного выбора — поиск: если щёлкнуть правой кнопкой
по выделению, можно выбрать **Search &gt; All/Any Selected**.
Это можно комбинировать с модификаторами клавиатуры, как описано в
[Инструмент поиска](#инструмент-поиска), чтобы добавить полученный запрос к текущему.

### Сохранённые поиски

Если вы регулярно выполняете один и тот же поиск,
сохраните текущий запрос: щёлкните правой кнопкой по верхнему элементу боковой
панели, выберите **Save Current Search** и задайте имя.
Также можно перетащить любой элемент боковой панели в эту область, чтобы добавить
эквивалентный сохранённый поиск и закрепить его сверху.

### Редактирование элементов

Теги, колоды и сохранённые поиски можно удалять и переименовывать прямо на
боковой панели: через контекстное меню или горячими клавишами
(<kbd>Del</kbd> и <kbd>F2</kbd> в Windows). Удаление работает и для нескольких
элементов сразу (см. [Инструмент выделения](#инструмент-выделения)).

### Поиск элементов

Чтобы найти элемент в дереве боковой панели, введите часть его названия
в строку поиска сверху.

## Поле поиска

Над списком карточек находится поле поиска. Введите в него запрос для поиска
карточек. О синтаксисе см. раздел [Поиск](searching.md).

## Таблица карточек/заметок

Строки таблицы представляют карточки или заметки, соответствующие текущему
поиску. При клике по строке соответствующая заметка показывается в нижней части.

### Строки

Если выделить несколько строк (протягиванием мышью либо с
<kbd>Ctrl</kbd>/<kbd>Command</kbd>), редактор временно скроется. Разные операции
(например, смена колоды) могут применяться сразу к нескольким карточкам или
заметкам, независимо от текущего режима. Поэтому в режиме Cards заметка считается
выбранной, если выбрана хотя бы одна её карточка, а в режиме Notes карточка
считается выбранной, если выбрана её заметка.

Другие операции (например, показ информации о карточке) работают только с одной
карточкой или заметкой. Она называется _текущей_ и обычно является последней
выбранной/нажатой.
В режиме Cards текущая заметка — это заметка текущей карточки, а в режиме Notes
текущая карточка — первая карточка текущей заметки.

Цвет фона меняется в зависимости от состояния карточки и заметки. В режиме Cards
используется первое подходящее условие:

1. если карточка **помечена флагом**, используется цвет флага;
2. если карточка **приостановлена**, жёлтый;
3. если заметка карточки **отмечена**, фиолетовый.

В режиме Notes цвет применяется только к отмеченным заметкам.\
Подробнее об отмеченных заметках и приостановленных карточках:
[Редактирование и другое](studying.md#editing-and-more).

### Столбцы

Набор столбцов настраивается: нажмите правой кнопкой на заголовок столбца
(или <kbd>Ctrl</kbd>-клик на Mac), чтобы выбрать, какие столбцы показывать.
Столбцы можно перетаскивать для изменения порядка. Клик по столбцу сортирует по
нему; повторный клик меняет порядок сортировки. По столбцам Question и Answer
сортировка недоступна.

Все столбцы доступны и в режиме [Cards, и в режиме Notes](#режимы-таблицы),
но иногда имеют немного разные названия и данные. В таблице ниже показано
поведение в обоих режимах.

<!-- prettier-ignore -->

| Столбец         | Режим Cards                                                                                                                                                                                                                             | Режим Notes                                                                                                                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Answer          | Обратная сторона карточки в одну строку, без вопроса. Можно также выбрать [пользовательский формат](templates/styling.md#browser-appearance) в редакторе типа карточки.                                                              | То же, что в режиме Cards, но только для первой карточки заметки.                                                                                                                                               |
| Card(s)         | Имя шаблона карточки.                                                                                                                                                                                                                  | Количество карточек у заметки.                                                                                                                                                                                  |
| Card Modified   | Время последнего изменения карточки (например, когда после повторения обновились история и интервал).                                                                                                                                | Время последнего изменения одной из карточек заметки.                                                                                                                                                           |
| Created         | То же, что в режиме Notes, для заметки текущей карточки.                                                                                                                                                                              | Дата создания заметки.                                                                                                                                                                                          |
| Deck            | Имя колоды, в которой находится карточка.                                                                                                                                                                                              | Количество разных колод, в которых находятся карточки заметки, либо имя колоды, если все карточки в одной колоде.                                                                                             |
| Due             | Срок для карточек на повторении/переобучении и позиция в очереди новых карточек для новых. Строка берётся в скобки, если карточка приостановлена или зарыта. Сортировка сначала по типу, затем по дате/позиции.                  | Дата ближайшей карточки заметки на повторении/переобучении, которая не приостановлена, не зарыта и не находится в фильтрованной колоде.                                                                       |
| (Avg.) Ease     | Лёгкость карточки, если она не новая.                                                                                                                                                                                                  | Средняя лёгкость карточек заметки, которые не являются новыми.                                                                                                                                                  |
| (Avg.) Interval | Интервал карточки, если она на повторении или переобучении.                                                                                                                                                                           | Средний интервал карточек заметки, которые на повторении или переобучении.                                                                                                                                      |
| Lapses          | Сколько раз карточке ставили оценку «Again».                                                                                                                                                                                           | Суммарное число lapses по всем карточкам заметки.                                                                                                                                                               |
| Note            | То же, что в режиме Notes, для заметки карточки.                                                                                                                                                                                       | Имя типа заметки.                                                                                                                                                                                               |
| Note Modified   | То же, что в режиме Notes, для заметки карточки.                                                                                                                                                                                       | Время последнего редактирования заметки (например, содержимого поля).                                                                                                                                            |
| Question        | Лицевая сторона карточки в одну строку. Можно также выбрать [пользовательский формат](templates/styling.md#browser-appearance) в редакторе типа карточки.                                                                          | То же, что в режиме Cards, но только для первой карточки заметки.                                                                                                                                               |
| Reviews         | Сколько раз карточка повторялась.                                                                                                                                                                                                      | Общее число повторений всех карточек заметки.                                                                                                                                                                   |
| Sort Field      | То же, что в режиме Notes, для заметки карточки.                                                                                                                                                                                       | Содержимое поля заметки, выбранного как поле сортировки для типа заметки. Показывать и сортировать можно только по этому полю. Поле меняется через **Fields...** в области редактирования.                   |
| Tags            | То же, что в режиме Notes, для заметки карточки.                                                                                                                                                                                       | Теги заметки.                                                                                                                                                                                                   |

## Editing Area

The bottom right area displays the note of the currently selected row. For
more information about cards and notes, see [Getting Started](getting-started.md).
For more information on formatting buttons, see [Editing](editing.md).

You can see a preview of what the currently selected card would look
like when reviewing by clicking the **Preview** button at the top of the editing area.
Note that this will not display any type-the-answer fields on your
cards, which makes it easier to preview the cards quickly.
In Notes mode, the preview is shown for the first card of the selected note.

## Menus and Actions

At the top of the browser window, you find a toolbar with various menus which in
turn offer various actions that can be performed in the browser.

### Edit

<!-- prettier-ignore -->

| Name                 | Action                                                                                                                                                                                                                        |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Undo                 | Revert the most recently performed operation.                                                                                                                                                                                 |
| Select All           | Select all rows displayed.                                                                                                                                                                                                    |
| Select Notes         | Show only the currently selected notes and select all rows.                                                                                                                                                                   |
| Invert Selection     | Select those rows not selected, and deselect the currently selected rows.                                                                                                                                                     |
| Create Filtered Deck | Show the [filtered deck](filtered-decks.md#creating-manually) dialog and set the current browser search as a filter. Use <kbd>Alt</kbd> / <kbd>Option</kbd> to set the second filter instead.|

### Notes

Most of the following actions operate on the selected notes. They are also available through
a context menu when a selected row is right-clicked in Notes mode. In Cards mode,
they can be found in a submenu of the context menu.

<!-- prettier-ignore -->

| Name              | Action                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add Notes         | Open the [Add](editing.md#adding-cards-and-notes) dialog.                                                                                                                                                                                                                                                                                                  |
| Create Copy       | Open a [duplicate](browsing.md#finding-duplicates) of the current note in the [editor](editing.md#adding-cards-and-notes), which can be slightly modified to easily obtain variations of your cards. By default, the duplicate card will be created in the same deck as the original.                                                                      |
| Export Notes      | Open the [Export](exporting.md) dialog.                                                                                                                                                                                                                                                                                                                    |
| Add Tags          | Add provided tags to all selected notes.                                                                                                                                                                                                                                                                                                                   |
| Remove Tags       | Enter tags and remove them from all selected notes.                                                                                                                                                                                                                                                                                                        |
| Clear Unused Tags | Remove all tags from the sidebar that are not used by any notes.                                                                                                                                                                                                                                                                                           |
| Toggle Mark       | If the current note is marked (i.e., has the _Marked_ tag), unmark all selected notes. If the current is not marked, mark all selected notes.                                                                                                                                                                                                              |
| Change Note Type   | Convert the selected notes from one type to another. For example, imagine you have a _Russian_ note type and a _Computer_ note type, and you accidentally added some computer-related text into a _Russian_ note. You can use this option to fix that mistake. The scheduling of cards is not affected. Changing the type of a note requires a one-way sync. |
| Find Duplicates   | Open the [Duplicates](#finding-duplicates) dialog.                                                                                                                                                                                                                                                                                                         |
| Find and Replace  | Open the [Find and Replace](#find-and-replace) dialog.                                                                                                                                                                                                                                                                                                     |
| Manage Note Types  | Open the [Note Types](editing.md#adding-a-note-type) dialog.                                                                                                                                                                                                                                                                                                |
| Delete            | Delete all selected notes and their cards. It is not possible to remove individual cards, as individual cards are controlled by the [templates](templates/intro.md).                                                                                                                                                                                       |

### Cards

The following actions operate on the currently selected cards. They are also available through
a context menu when a selected row is rightclicked in Cards mode. In Notes mode,
they can be found in a submenu of the context menu.

<!-- prettier-ignore -->

| Name           | Action                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change Deck    | Move currently selected cards to a different deck.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Set Due Date   | Turns cards into review cards if they are new, and makes them due on a certain date. This can be useful for moving cards forward or back a few days when your study schedule is interrupted. Entering a range like `60-90` will make the selected cards due between 60 and 90 days from now. New cards will have their interval set to the same delay, but review cards will be rescheduled without changing their current interval, unless an exclamation mark (`!`) is included at the end of the range. Note that the answer time is not recorded when manually scheduling cards, since the action can be performed even outside of review, and Anki isn't aware of which card may or may not be shown at the time.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Reset        | Move currently selected cards to the end of the new queue. The existing review history is preserved. In 2.1.50+, there are options to restore the original card position, and to reset the card's lapse and repetition counters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Reposition     | Change the order new cards will appear in. You can find out the existing positions by enabling the _due_ column, as described in the [table](#cardnote-table) section above. If you run the reposition command when multiple cards are selected, it will apply increasing numbers to each card in turn. By default the number increases by one for each card, but this can be adjusted by changing the "step" setting. The **Shift position of existing cards** option allows you to insert cards between currently existing ones, pushing the currently existing ones apart. For instance, if you have five cards and you want to move 3, 4, and 5 between 1 and 2, selecting this setting would cause the cards to end up in the order 1, 3, 4, 5, 2. By contrast, if you turn this option off, 1 and 2 will get the same position number (and it will thus be unpredictable which of the cards with the same number comes up first). Please note that when enabled, any card with a higher position will be modified, and all of those changed cards will need to be sent the next time you sync. |
| Toggle Suspend | [Suspend](studying.md#editing-and-more) or unsuspend all selected cards, depending on whether the current card is suspended or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Flag           | Toggle the flags of all selected cards. Whether a flag is added or removed depends on whether the current card has the chosen flag.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Info           | Show various information about the current card, including its review history. For more information, see [Card Info](stats.md#card-info).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Go

This menu exists to provide keyboard shortcuts to jump to various
parts of the browser, and to go up and down the card list.

## Find and Replace

This dialog allows for replacing text on notes. As described above, it is available
from the toolbar and the table's context menu.

The first input field is for the text that is going to be replaced, the second
one for the replacement. Next, there is a dropdown menu that allows you to specify
where Anki should look for text to replace: in a note's tags (requires Anki 2.1.45+),
in all fields, or just in a specific field (only fields belonging to a selected
note will be listed).

By default, only selected notes will be affected. If you want to lift that
restriction, you can untick the "selected notes only" checkbox (requires Anki 2.1.45+).

The regular expression option allows you to perform complex replacements.
For example, assume there is the following text in a field:

    <img src="pic.jpg" />

We use these settings:

![Find and Replace dialog](media/find_and_replace.png)

(Note that on Anki versions prior to 2.1.28, you would need to replace `${1}`
with `\1`.)

Then the assumed field content will change to:

    pic.jpg

A full discussion on regular expressions is outside the scope of this document.
There are a number of syntax guides available on the web:

- For Anki 2.1.28+, see <https://docs.rs/regex/latest/regex/index.html#syntax>.
- For older Anki versions, see <http://docs.python.org/library/re.html>.

## Finding Duplicates

You can use the **Notes > Find Duplicates** option to search for notes that
have the same content. When you open the window, Anki will look at all
of your note types and present a list of all possible fields. If you
want to look for duplicates in the _Back_ field, you’d select it from
the list and then click **Search**.

By default, it will search in all note types that have the field you provided.
This differs from the duplicate check when you add cards manually, which
is limited to a single note type.

The **Optional filter** text box allows you to narrow down where Anki will
look for duplicates. If you only want to search for duplicates in the
"French Vocab" and "French Verbs" note types, you would enter:

    "note:french vocab" or "note:french verbs"

Or you might want to look only for duplicates in a particular deck, so
you could use:

    "deck:myDeck"

The search syntax is the same as used when searching in the browser.
For more information, see [Searching](searching.md).

You can click one of the links in the search results list to display the
duplicate notes in that set. If the search brings up a large number of
duplicates, you may wish to instead click the **Tag Duplicates** button,
which will tag all matching notes with _duplicate_. You can then search
for this tag in the browser and handle them all from the same screen.
