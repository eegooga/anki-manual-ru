# Поиск

<!-- toc -->

Окно обзора Anki и функция фильтрованных колод используют общий способ
поиска конкретных карточек/заметок. Этот же способ можно использовать для
настройки области оптимизации FSRS.

## Простые запросы

Когда вы вводите текст в поле поиска, Anki находит подходящие заметки
и показывает их карточки. Поиск выполняется по всем полям заметок, но
не по тегам (поиск по тегам описан [ниже](#теги-колоды-карточки-и-заметки)).
Примеры:

`dog`\
ищет «dog» — также найдёт слова вроде «doggy» и «underdog».

`dog cat`\
находит заметки, содержащие одновременно «dog» и «cat», например
«raining cats and dogs».

`dog or cat`\
находит заметки с «dog» или «cat».

`dog (cat or mouse)`\
находит заметки с «dog» и «cat» или с «dog» и «mouse».

`-cat`\
находит заметки без «cat».

`-cat -mouse`\
находит заметки без «cat» и без «mouse».

`-(cat or mouse)`\
то же самое, что выше.

`"a dog"`\
находит заметки с точной последовательностью символов «a dog», например
«atta dog», но не «dog a» и не «adog».

`-"a dog"`\
находит заметки, где нет точной последовательности «a dog».

`d_g`\
находит заметки с d, &lt;одним символом&gt;, g: dog, dig, dug и т. д.

`d*g`\
находит заметки с d, &lt;нулём или более символами&gt;, g: dg, dog, dung
и т. д.

`w:dog`\
ищет слово «dog», а не просто последовательность символов: найдёт «dog»,
но не «doggy» и не «underdog». Требуется Anki 2.1.24+, AnkiMobile 2.1.61+
или AnkiDroid 2.17+. Изменение форматирования может восприниматься как
граница слова; например, `w:exam` найдёт **exam**ple, если часть «exam»
выделена жирным.

`w:dog*`\
найдёт «dog» и «doggy», но не «underdog».

`w:*dog`\
найдёт «dog» и «underdog», но не «doggy».

Что важно:

- Поисковые термины разделяются пробелами.

- Если указано несколько терминов, Anki ищет заметки, подходящие под все
  условия — между терминами неявно вставляется `and`. В Anki 2.1.24+,
  AnkiMobile 2.0.60+ и AnkiDroid 2.17+ можно писать явно
  (`dog and cat` = `dog cat`), но в старых версиях Anki `and`
  воспринимается как обычное слово.

- Используйте `or`, если достаточно совпадения по одному из терминов.

- Можно добавить минус (`-`) перед термином, чтобы найти заметки, которые
  этому термину не соответствуют.

- Можно группировать термины скобками, как в `dog (cat or mouse)`.
  Это важно при сочетании OR и AND: со скобками пример найдёт
  «dog cat» или «dog mouse», а без скобок — «dog and cat» или «mouse».

- Anki умеет искать внутри форматирования только в настроенном вами
  [поле сортировки](editing.md#customizing-fields). Например, если в поле
  записано «**exa**mple» (часть «exa» жирная), поиск `example` не найдёт это
  совпадение, если это поле не выбрано как поле сортировки. Если слово не
  форматировано или форматирование не меняется внутри слова, Anki найдёт его
  в любом поле.

- Обычный поиск не чувствителен к регистру для латиницы: a-z совпадает с A-Z
  и наоборот. Для других символов (например, кириллицы) обычный поиск
  чувствителен к регистру, но можно сделать его нечувствительным через
  поиск по границе слова или регулярному выражению (`w:`, `re:`).

## Ограничение конкретным полем

Можно попросить Anki искать только там, где определённое поле содержит текст.
В отличие от примеров выше, поиск по полю по умолчанию требует точного совпадения.

`front:dog`\
находит заметки, где поле Front равно ровно «dog». Поле со значением
«a dog» не подойдёт.

`"animal front:a dog"`\
находит заметки, где поле «Animal Front» равно ровно «a dog». Двойные
кавычки обязательны: см. [ниже](#matching-special-characters).

`front:*dog*`\
находит заметки, где поле Front содержит dog в любом месте.

`front:`\
находит заметки с пустым полем Front.

`front:_*`\
находит заметки с непустым полем Front.

`front:*`\
находит заметки, у которых есть поле Front — пустое или нет.

`fr*:text`\
находит заметки в поле, имя которого начинается с «fr». Требуется
Anki 2.1.24+, AnkiMobile 2.1.60+ или AnkiDroid 2.17+.

## Теги, колоды, карточки и заметки

`tag:animal`\
находит заметки с тегом «animal» или подтегами вроде «animal::mammal».

`tag:none`\
находит заметки без тегов.

`tag:ani*`\
находит заметки с тегами, начинающимися на «ani».

`deck:french`\
находит карточки в верхнеуровневой колоде «French» и её подколодах
вроде «French::Words». Не найдёт подколоды с таким названием в других
ветках, например «Languages::French».

`deck:french::words`\
находит карточки в подколоде «French::Words».

`deck:french -deck:french::*`\
находит карточки в «French», но не в её подколодах.

`deck:"french words"`\
поиск, когда в названии колоды есть пробел.

`"deck:french words"`\
то же, что выше.

`deck:filtered`\
только фильтрованные колоды.

`-deck:filtered`\
только обычные колоды.

`preset:"Default"`\
карточки во всех колодах, использующих набор настроек «Default».
Требуется Anki 23.10+, AnkiMobile 23.10+ или AnkiDroid 2.17+.

`card:forward`\
находит карточки, созданные типом карточки «Forward».

`card:1`\
ищет карточки по номеру типа карточки. Например, чтобы найти второе cloze-удаление
в заметке, используйте `card:2`.

`note:basic`\
ищет карточки, созданные типом заметки «Basic».

## Игнорирование диакритики/комбинируемых символов

Требуется Anki 2.1.24+, AnkiMobile 2.0.60+ или AnkiDroid 2.17+.

Можно использовать `nc:` (no combining), чтобы Anki игнорировал комбинируемые
символы. Например:

`nc:uber`\
совпадёт с заметками «uber», «über», «Über» и т. д.

`nc:は`\
совпадёт с «は», «ば» и «ぱ».

Поиск с игнорированием комбинируемых символов работает медленнее обычного.

## Регулярные выражения

Anki 2.1.24+, AnkiMobile 2.0.60+ и AnkiDroid 2.17+ поддерживают поиск в заметках
с помощью «регулярных выражений» — стандартного и мощного способа поиска по тексту.

Начните запрос с `re:`, чтобы использовать регулярные выражения. Для удобства Anki
будет обрабатывать последующую часть как [raw input](#raw-input), поэтому учитывайте
правила из этого раздела.

Примеры:

`"re:(some|another).*thing"`\
находит заметки, где есть «some» или «another», за которыми идут 0 или более символов,
а затем «thing».

`re:\d{3}`\
находит заметки, где подряд идут 3 цифры.

Регулярные выражения можно ограничить конкретным полем. В отличие от обычного
поиска по полю, здесь точное совпадение не требуется:

`front:re:[a-c]1`\
найдёт a1/B1/c1 в любом регистре, если они встречаются где угодно в поле «Front».

`front:re:^[a-c]1$`\
то же, что выше, но не найдёт, если до или после a1/b1/c1 есть другой текст.

В Anki 2.1.50+ регулярные выражения поддерживаются и для тегов:

`tag:re:^parent$`\
находит заметки с точным тегом «parent», игнорируя дочерние теги типа
«parent::child».

`"tag:re:lesson-(1[7-9]|2[0-5])"`\
находит заметки с тегами от «lesson-17» до «lesson-25».

Подробнее о регулярных выражениях: [этот сайт](<https://regexone.com/lesson/introduction_abcs>).

Обратите внимание:

- По умолчанию поиск нечувствителен к регистру; добавьте `(?-i)` в начале,
  чтобы включить чувствительность к регистру.
- Некоторые элементы (пробелы, переносы строк) в HTML могут быть представлены
  иначе — используйте HTML-редактор в окне редактирования, чтобы увидеть
  исходный HTML.
- Подробности реализации regex в Anki см. в [документации regex crate](<https://docs.rs/regex/1.3.9/regex/#syntax>).

## Card state

`is:due`\
review cards and learning cards waiting to be studied.

`is:new`\
new cards.

`is:learn`\
cards in learning.

`is:review`\
reviews (both due and not due) and lapsed cards.

`is:suspended`\
cards that have been [automatically](leeches.md) or manually suspended.

`is:buried`\
cards that have been either [automatically](studying.md#siblings-and-burying) or
manually buried.

`is:buried-sibling`\
cards that have been buried automatically.

`is:buried-manually`\
cards that have been manually buried.

Cards that have [lapsed](deck-options.md#lapses) fall into several of the previous categories, so it may
be useful to combine different search terms to get more precise results:

`is:learn is:review`\
cards that have lapsed and are awaiting relearning.

`-is:learn is:review`\
review cards, not including lapsed cards.

`is:learn -is:review`\
cards that are in learning for the first time.

## Flags

`flag:0`\
cards without a flag.

`flag:1`\
cards with a red flag.

`flag:2`\
cards with an orange flag.

`flag:3`\
cards with a green flag.

`flag:4`\
cards with a blue flag.

`flag:5`\
cards with a pink flag.

`flag:6`\
cards with a turquoise flag.

`flag:7`\
cards with a purple flag.

## Card properties

`prop:ivl>=10`\
cards with interval of 10 days or more.

`prop:due=1`\
cards due tomorrow.

`prop:due=-1`\
cards due yesterday that haven’t been answered yet.

`prop:due>=1`\
all cards due in the future, including tomorrow.

`prop:due<=-1`\
all overdue cards.

`prop:due>=-1 prop:due<=1`\
cards due yesterday, today and tomorrow.

`prop:reps<10`\
cards that have been answered less than 10 times.

`prop:lapses>3`\
cards that have lapsed more than 3 times.

`prop:ease!=2.5`\
cards easier or harder than default ease.

`prop:pos<=100`\
new cards with a position in the queue less than or equal to 100.

The following searches require Anki 23.10+ and FSRS enabled:

`prop:s>21`\
cards with stability greater than 21 days.

`prop:d>0.3`\
cards with difficulty greater than 0.3.

`prop:r<0.9`\
cards with retrievability less than 0.9.

## Recent Events

### Added

`added:1`\
cards added today.

`added:7`\
cards added in the last 7 days.

The check is made against card creation time rather than note creation
time, so cards that were generated within the time frame will be
included even if their notes were added a long time ago.

### Edited

`edited:n`\
cards where the note text was added/edited in the last n days.

This requires Anki 2.1.28+ or AnkiMobile 2.0.64+.

### Answered

`rated:1`\
cards answered today.

`rated:1:2`\
cards answered Hard (2) today.

`rated:7:1`\
cards answered Again (1) in the last 7 days.

`rated:31:4`\
cards answered Easy (4) in the last 31 days.

Anki 2.1.39+ supports rating searches over 31 days.

Note that, to search for cards answered at a particular day, `rated:n -rated:(n-1)` might not work every time. Use the following instead:

`prop:rated=0`\
cards answered today.

`prop:rated=-1`\
cards answered one day ago.

`prop:rated=-7`\
cards answered 7 days ago.

### First Answered

Requires Anki 2.1.45+.

`introduced:1`\
cards answered for the first time today.

`introduced:365`\
cards answered for the first time within the last 365 days.

## Matching special characters

If you're using a version earlier than Anki 2.1.36 the following searches may not work.

As shown in the previous section, some characters like `*`, `_` and `"` have a
special meaning in search. If you need to locate those characters in a search,
you need to tell Anki not to treat them specially. This is called "escaping a character" and is primarily done by using double quotes and backslashes.

- _Space_\
  To match something that includes spaces, enclose the `"entire term"` in double
  quotes. If it is a colon search, you also have the option to only quote the
  `part:"after the colon"`.

- `And`/`Or`\
  To search for these words, wrap them with double quotes. For example, `dog "and" cat` searches for "dog", "cat" and the word "and".
  If you wrap the entire search term with quotes like in the previous example, you do not need to escape `and` or `or`.

- `"`, `*` and `_`\
  Add a backslash before these characters to treat them literally. For example,
  `_` will match any single character, but `\_` matches only an actual underscore.

- `\`\
  Because a backslash is used to remove the special meaning from other characters,
  it too is treated specially. If you need to search for an actual backslash,
  use `\\` instead of `\`.

- `(` and `)`\
  You can search for parentheses by enclosing the entire term in quotes,
   by using a backslash, or both at the same time. For example, `"(text)"`, `\(text\)` and
  `"\(text\)"` are all equivalent searches, and search for `(text)`.

- `-`\
  Starting a search term with `-` usually inverts it: `-dog` matches everything
  except dog for example. If you instead wish to include an actual hyphen,
  you can either use a backslash, or include the text in quotes. For example,
  `\-free` or `"-free"` will match "guilt-free" and "cruelty-free".

- `:`\
  Colons have to be escaped using backslashes unless they are preceded by another, unescaped colon.
  For example, `w:3:30` searches for "3:30" on word boundary and doesn't require you to use a backslash.
  However, if you don't use a colon search, the colons need to be escaped like this: `3\:30`.

- `&`, `<`, and `>`\
  `&`, `<`, and `>` are treated as HTML when searching in Anki, and as such, searches
  containing them don't work as expected. However, you can search for them by using their
  corresponding HTML entity names (`&amp;` for `&`, `&lt;` for `<`, and `&gt;` for `>`).
  For example, searching `&amp;text` searches for a note with `&text` in a field.

### Raw input

Text preceded by certain keywords (like `re:`) will be treated as raw input. That is,
the characters listed above largely lose their special meaning. In such a context, only
a minimum of escaping is required to prevent ambiguity:

- Double quotes (`"`) must be escaped.

- Spaces and unescaped parentheses require the search term to be quoted.

- The search term must not end in an odd number of backslashes.

## Object IDs

`nid:123`\
the note with note id 123.

`cid:123,456,789`\
all cards with card ids 123, 456, or 789.

Note and card IDs can be found in the [card info](stats.md) dialog in the
browser. These searches may also be helpful when doing add-on
development or otherwise working closely with the database.

## Custom Data

Anki allows small amounts of custom data to be stored on cards, enabling
advanced use cases such as custom schedulers. One of the notable applications
of this feature was in earlier implementations of FSRS. In Anki 23.10+, there
are some ways to search it:

`has-cd:v`\
cards having the property `v` in custom data.

`prop:cdn:d>5`\
cards with the value of `d` in custom data (usually refers to difficulty in FSRS) greater than 5.

`prop:cds:v=reschedule`\
cards with the string `v` in custom data equal to `reschedule`.

## Other Searches

`prop:due=1 is:learn`\
interday learning cards due for tomorrow.

`prop:due=0 is:learn -introduced:1`\
interday learning cards due today.

`prop:resched=0`\
cards rescheduled today, either using **Set due date** or **Reschedule cards on change**.
