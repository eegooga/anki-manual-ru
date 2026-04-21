# Добавление/редактирование

<!-- toc -->

## Добавление карточек и заметок

Напомним из [основ](getting-started.md): в Anki мы добавляем заметки, а не
карточки, и Anki создаёт карточки автоматически. Нажмите **Add** в
[главном окне](studying.md#decks) — откроется окно Add Notes.

![Add Screen](media/add_screen.png)

В левом верхнем углу показан текущий [тип заметки](getting-started.md#note-types).
Если там не «Basic», возможно, вы добавили другие типы заметок при загрузке
общей колоды. Ниже предполагается, что выбран «Basic».

В правом верхнем углу показана [колода](getting-started.md#decks), куда будут
добавлены карточки. Если нужна новая колода, нажмите на имя колоды и затем **Add**.

Под типом заметки вы увидите кнопки и область с надписями «Front» и «Back».
Front и Back — это [поля](getting-started.md#notes--fields); их можно добавлять,
удалять и переименовывать кнопкой «Fields…» выше.

Под полями находится область «**tags**». Теги — это метки, которые можно
прикреплять к заметкам для удобной организации и поиска. Можно оставить
их пустыми или добавить один/несколько тегов. Теги разделяются пробелом.
Если в поле тегов написано

    vocab check_with_tutor

…то добавленная заметка получит два тега.

Когда вы ввели текст в Front и Back, нажмите **Add** или
<kbd>Ctrl</kbd>+<kbd>Enter</kbd> (на Mac — <kbd>Command</kbd>+<kbd>Enter</kbd>),
чтобы добавить заметку в коллекцию. Одновременно будет создана карточка и
помещена в выбранную колоду. Чтобы отредактировать добавленную карточку,
можно нажать кнопку истории и найти её в [обзоре](browsing.md).

Подробнее о кнопках между типом заметки и полями см. в разделе
[editor](editing.md).

### Проверка дубликатов

Anki проверяет уникальность первого поля, поэтому предупредит, если вы
добавите две карточки с Front = «apple» (например). Проверка уникальности
ограничена текущим типом заметки, поэтому при изучении нескольких языков
карточки с одинаковым Front не будут считаться дубликатами, если у каждого
языка свой тип заметки.

По соображениям производительности Anki не проверяет дубликаты в других
полях автоматически, но в окне обзора есть функция "Find Duplicates",
которую можно запускать периодически.

### Эффективное обучение

Люди повторяют по-разному, но есть общие принципы. Отличное введение —
[эта статья](https://super-memory.com/articles/20rules.htm) на сайте SuperMemo.
В частности:

- **Делайте проще**: чем короче карточки, тем легче повторять. Может
  возникнуть соблазн добавить много информации «на всякий случай», но
  повторение быстро станет тяжёлым.

- **Не заучивайте без понимания**: если вы изучаете язык, старайтесь
  избегать больших списков слов. Лучший способ учить язык — в контексте,
  то есть видеть слова в предложениях. То же относится и к другим темам:
  если пытаться зубрить гору аббревиатур, прогресс будет медленным.
  Но если сначала понять стоящие за ними концепции, запоминать станет
  гораздо проще.

## Добавление типа заметки

Базовых типов заметок достаточно для простых карточек (слово/фраза на каждой
стороне). Но если вам нужно больше одного элемента информации на Front или Back,
лучше разделить её на несколько полей.

Можно подумать: «Мне нужна одна карточка — почему бы не поместить в Front
аудио, картинку, подсказку и перевод вместе?» Так сделать можно, но минус в том,
что данные «склеятся». Например, вы не сможете сортировать карточки по подсказке,
потому что она смешана с остальным текстом. Также будет сложно, к примеру,
перенести аудио с лицевой стороны на обратную без ручного копирования для
каждой заметки. Разделяя контент по полям, вы сильно упрощаете будущую
перестройку карточек.

Чтобы создать новый тип заметки, выберите в главном окне Anki
**Tools > Manage Note Types**. Затем нажмите **Add**. Появится экран выбора
базы для нового типа: "Add" — создать на основе стандартного типа из Anki;
"Clone" — на основе типа, который уже есть в вашей коллекции. Например,
если у вас уже есть тип для французской лексики, при создании типа для
немецкой можно сделать clone.

После OK вас попросят назвать новый тип. Удобно использовать название темы,
которую вы учите: «Japanese», «Trivia» и т. п. После выбора имени закройте
окно Note Types — вы вернётесь к окну добавления.

## Настройка полей

Чтобы настроить поля, нажмите **Fields...** при добавлении/редактировании
заметки или когда тип заметки выбран в окне Manage Note Types.

![Fields](media/fields.png)

Поля можно добавлять, удалять и переименовывать соответствующими кнопками.

Чтобы изменить порядок полей в этом диалоге и в окне добавления заметок,
используйте кнопку reposition: она запросит числовую позицию поля.
Например, чтобы сделать поле первым, введите "1".

Также можно менять порядок полей перетаскиванием их названий. Перетащите
поле мышью/пальцем в нужное место; индикатор покажет новую позицию.

Не используйте имена "Tags", "Type", "Deck", "Card", "FrontSide" для полей:
это [специальные поля](templates/fields.md#special-fields), и всё будет работать
некорректно.

Параметры внизу экрана настраивают свойства полей при добавлении и
редактировании карточек. Это _не_ место для настройки внешнего вида
карточек во время повторения; для этого см. [templates](templates/intro.md).

- **Editing Font** позволяет настроить шрифт и размер текста при
  редактировании заметок. Это полезно, если вы хотите сделать менее важную
  информацию мельче или увеличить размер трудно читаемых нелатинских символов.
  Эти изменения не влияют на вид карточек в повторении: для этого см.
  [templates](templates/intro.md). Однако при включённой функции "type in the
  answer" введённый текст будет использовать размер шрифта, заданный здесь.
  (О смене самого шрифта при вводе ответа см. [checking your answer](templates/fields.md#checking-your-answer).)

- **Sort by this field…** сообщает Anki, что это поле нужно показывать в
  столбце Sort Field окна обзора. По нему можно сортировать карточки.
  Полем сортировки одновременно может быть только одно поле.

- **Reverse text direction** полезно для языков с письмом справа налево (RTL),
  например арабского или иврита. Эта настройка влияет только на редактирование;
  чтобы текст корректно отображался в повторении, настройте
  [template](templates/styling.md#text-direction).

- **Use HTML editor by default** полезно, если вы предпочитаете редактировать
  поля напрямую в HTML.

- **Collapse by default**: поля можно сворачивать/разворачивать.
  Анимацию можно отключить в [preferences](preferences.md).

- **Exclude from unqualified searches (slower)** можно использовать, если
  содержимое определённого поля не должно появляться в неуточнённом
  [(не ограниченном конкретным полем)](searching.md#limiting-to-a-field) поиске.

После добавления полей вы, скорее всего, захотите вывести их на Front/Back
карточки. Подробнее см. раздел [templates](templates/intro.md).

## Смена колоды / типа заметки

При добавлении заметки верхняя левая кнопка меняет тип заметки, а верхняя
правая — колоду. В открывшемся окне можно не только выбрать колоду/тип,
но и создать новые колоды или управлять типами заметок.

## Организация материала

### Правильное использование колод

[Decks](getting-started.md#decks) предназначены для деления материала на
крупные категории, которые вы хотите учить отдельно: English, Geography и т. п.
Может возникнуть желание создать много маленьких колод (например,
"my geography book chapter 1" или "food verbs"), но это не рекомендуется
по следующим причинам:

- Множество маленьких колод часто приводит к предсказуемому порядку карточек.
  В старых версиях планировщика новые карточки вводятся только в порядке колод.
  А если вы открываете колоды по очереди (что медленно), то все повторения
  "chapter 1" или "food verb" будут идти группами. Это облегчает угадывание
  по контексту и формирует более слабую память. В реальной жизни у вас не
  будет «подсказки» в виде связанных карточек перед ответом.

- Хотя это меньше проблема, чем в старых версиях Anki, сотни колод могут
  замедлять работу, а огромные деревья колод с тысячами элементов в версиях
  до 2.1.50 могут даже ломать отображение списка колод.

### Использование тегов

Вместо множества маленьких колод лучше использовать теги и/или поля для
классификации материала. Теги помогают уточнять поиск, находить нужный
контент и поддерживать порядок в коллекции.
Существует много эффективных способов использования тегов и флагов, и
заранее продуманная схема поможет выбрать лучший вариант для вас.

Некоторые предпочитают организовывать карточки колодами и подколодами, но у
тегов есть важное преимущество: одной заметке можно назначить несколько тегов,
а карточка может принадлежать только одной колоде. Поэтому в большинстве случаев
теги — более мощная и гибкая система классификации. Теги также можно
организовывать в дерево [так же, как и колоды](getting-started.md#decks).

Например, вместо колоды "food verbs" можно положить карточки в основную
языковую колоду и присвоить теги "food" и "verb". Поскольку тегов может быть
несколько, вы сможете [искать](searching.md#tags-decks-cards-and-notes) все
глаголы, всю лексику про еду или только глаголы на тему еды.

Теги можно добавлять в окне Edit и в [Browser](browsing.md); там же их можно
добавлять, удалять, переименовывать и организовывать. Учтите, что теги работают
на уровне [заметки](getting-started.md#notes--fields): если вы тегируете карточку
с «сиблингами», тег получат и они. Если нужно отметить только одну карточку,
а не её «соседей», используйте флаги.

### Использование флагов

Флаги похожи на теги, но отображаются прямо в окне повторения как цветная
иконка в правой верхней части экрана. По флагам также можно искать в Browse,
переименовывать их в обзоре и создавать фильтрованные колоды из отмеченных
карточек. Но в отличие от тегов, у одной карточки одновременно может быть
только один флаг. Ещё одно отличие: флаги работают на уровне
[карточки](getting-started.md#cards), поэтому флаг на одной карточке не влияет
на её «сиблингов».

Ставить/снимать флаги можно прямо в режиме повторения
(<kbd>Ctrl</kbd>+<kbd>1-7</kbd> в Windows, <kbd>Cmd</kbd>+<kbd>1-7</kbd> на Mac)
и в [Browser](browsing.md).

### Тег "Marked"

Anki по-особому обрабатывает тег "marked". В окнах повторения и обзора есть
опции для добавления/удаления этого тега. Если у заметки текущей карточки
есть "marked", в окне повторения показывается звезда, а в обзоре такие
карточки выделяются другим цветом.

Примечание: механизм Marking в основном оставлен для совместимости со
старыми версиями Anki; большинству пользователей лучше использовать
[flags](editing.md#using-flags).

### Использование полей

Тем, кто любит строгую организацию, можно добавлять поля в заметки для
классификации материала: "book", "page" и т. п. Anki поддерживает поиск
по конкретным полям, поэтому запрос вида `"book:my book" page:63`
позволяет быстро найти нужное.

### Custom Study и фильтрованные колоды

С помощью [custom study и filtered deck](filtered-decks.md) можно создавать
временные колоды из поисковых запросов. Это позволяет в обычное время
учить материал вперемешку в одной колоде (что лучше для памяти), но при
необходимости делать временные колоды для фокуса на конкретной теме,
например перед экзаменом. Общее правило: если вы всегда хотите учить часть
материала отдельно, держите её в обычной колоде; если отдельно нужно учить
лишь иногда (перед тестом, при накопившемся бэклоге и т. п.), лучше подходят
фильтрованные колоды из тегов, флагов, меток или полей.

## Возможности редактора

Редактор отображается при [добавлении заметок](editing.md),
[редактировании заметки](studying.md#editing-and-more) во время повторения
и в [окне обзора](browsing.md).

![Editor icons](media/editor_icons.png)

Слева сверху находятся две кнопки, открывающие окна
[fields](editing.md#customizing-fields) и [cards](templates/intro.md).

Справа расположены кнопки форматирования. Полужирный, курсив и подчёркивание
работают как в текстовом редакторе. Следующие две кнопки включают нижний и
верхний индекс — это удобно для формул вроде H<sub>2</sub>O или x<sup>2</sup>.
Затем идут две кнопки изменения цвета текста.

Кнопка-ластик очищает всё форматирование выделенного текста: цвет, жирность
и т. д. Следующие три кнопки управляют списками, выравниванием и отступом.

Кнопка со скрепкой позволяет выбрать аудио, изображения и видео с диска
компьютера и прикрепить их к заметке. Также можно скопировать медиа в буфер
обмена (например, через «Copy Image» в браузере) и вставить в нужное поле.
Подробнее о медиа см. раздел [media](media.md).

Иконка микрофона позволяет записать звук с микрофона компьютера и прикрепить
запись к заметке.

Кнопка Fx показывает быстрые команды для вставки MathJax или
[LaTeX](math.md) в заметку.

Кнопки \[…​\] видны, когда выбран тип заметки cloze.
![Cloze icons](media/cloze_icons.png)

Кнопка `</>` позволяет редактировать исходный HTML поля.
![HTML icon](media/html_icon.png)

В Anki 2.1.45+ можно настраивать sticky-поля прямо в редакторе.
Если нажать на иконку булавки справа от поля, Anki не будет очищать это
поле после добавления заметки. Это полезно, если одно и то же содержимое
вводится в нескольких заметках. В более старых версиях sticky-поля
переключались через экран Fields.

![Pin icon](media/Pin_icon.png)

У большинства кнопок есть горячие клавиши. Наведите курсор на кнопку,
чтобы увидеть сочетание.

При вставке текста Anki по умолчанию сохраняет большую часть форматирования.
Если удерживать <kbd>Shift</kbd> во время вставки, форматирование в основном
будет удалено. В Preferences можно переключить опцию
"Paste without shift key strips formatting", чтобы изменить поведение по умолчанию.

## Cloze deletion

_Cloze deletion_ — это скрытие одного или нескольких слов в предложении.
Например, если есть предложение:

    Canberra was founded in 1913.

…и вы создаёте cloze для "1913", предложение станет таким:

    Canberra was founded in [...].

Иногда такие скрытые фрагменты называют "occluded".

О том, почему полезно использовать cloze deletion, см. правило 5
[здесь](https://super-memory.com/articles/20rules.htm).

В Anki есть специальный тип заметки cloze deletion, чтобы делать cloze было
проще. Чтобы создать такую заметку, выберите тип Cloze
type, and type some text into the "Text" field. Then drag the mouse over
the text you want to hide to select it, and click the \[…​\] button.
Anki will replace the text with:

    Canberra was founded in {{c1::1913}}.

The "c1" part means that you have created one cloze deletion in the
sentence. You can create more than one deletion if you'd like. For
example, if you select Canberra and click \[…​\] again, the text will
now look like:

    {{c2::Canberra}} was founded in {{c1::1913}}.

When you add the above note, Anki will create two cards. The first card
will show:

    Canberra was founded in [...].

…​on the question, with the full sentence on the answer. The other card
will have the following on the question:

    [...] was founded in 1913.

You can also elide multiple sections on the same card. In the above
example, if you change c2 to c1, only one card would be created, with
both Canberra and 1913 hidden. If you hold down <kbd>Alt</kbd> (<kbd>Option</kbd> on a Mac)
while creating a cloze, Anki will automatically use the same number
instead of incrementing it.

Cloze deletions don't need to fall on word boundaries, so if you select
"anberra" rather than "Canberra" in the above example, the question
would appear as "C\[…​\] was founded in 1913", giving you a hint.

You can also give yourself hints that don't match the text. If you
replace the original sentence with:

    Canberra::city was founded in 1913

…​and then press \[…​\] after selecting "Canberra::city", Anki will
treat the text after the two colons as a hint, changing the text into:

    {{c1::Canberra::city}} was founded in 1913

When the card comes up for review, it will appear as:

    [city] was founded in 1913.

For information on testing your ability to type in a cloze deletion
correctly, please see the section on [typing answers](templates/fields.md#checking-your-answer).

From version 2.1.56, nested cloze deletions are supported. For example, the following is valid:

    {{c1::Canberra was {{c2::founded}}}} in 1913

The inner cloze is entirely nested within the outer. There is no support for partial overlaps, such as:

    [...] founded in 1913 -> Canberra was
    Canberra [...] in 1913 -> was founded

with the word "was" appearing in both deletions.

The current implementation can only handle a limited amount of nesting. In Anki 24.11, it is 3 levels.
In other versions, the limit is around 8, but Anki may become slow as you approach the limit. It is
not possible to extend the limit. If you use this feature, it is recommended you limit yourself to a
few levels of nesting.

Prior to version 2.1.56, if you need to create clozes from overlapping text, add another Text
field to your cloze, add it to the [template](templates/intro.md), and then when
creating notes, paste the text into two separate fields, like so:

    Text1 field: {{c1::Canberra was founded}} in 1913

    Text2 field: {{c2::Canberra}} was founded in 1913

The default cloze note type has a second field called Extra, that is
shown on the answer side of each card. It can be used for adding some
usage notes or extra information.

The cloze note type is treated specially by Anki, and cannot be created
based on a regular note type. If you wish to customize it, please make
sure to clone the existing Cloze type instead of another type of note.
Things like formatting can be customized, but it is not possible to add
extra card templates to the cloze note type.

## Image Occlusion

Anki 23.10+ supports Image Occlusion cards natively. An Image
Occlusion (IO) note is a special case of cloze deletion based on images
instead of text, and allows you to create cards that hide some parts
of an image, testing your knowledge of that hidden information.

![Image Occlusion](media/io.jpg)

### Adding an image

To add IO cards to your collection, open the Add screen, click on "Type"
and choose "Image Occlusion" from the list of built-in note types.
Then, click on **Select Image** to load an image file saved on your
computer's hard drive, or on **Paste image from clipboard**
if you have an image copied to the clipboard.

### Adding IO cards

After loading an image, the IO editor will open. Click on the
icons on the left to add as many areas to your image as you want.
There are three basic shapes to choose from:

- Rectangle
- Ellipse
- Polygon

You can also choose between two different IO modes for each note:

- **Hide All, Guess One**: All areas are hidden and only one
  area at a time is revealed while learning.
- **Hide One, Guess One**: Only one area at a time is hidden
  and will be revealed during learning. The other areas will be visible.

![Image Occlusion Modes](media/io_modes.jpg)

<!-- fields & tags are not intuitive to find in editor -->
The default IO note type also has standard fields:
**Header** (displayed above the image on the front and back of each card),
**Back Extra** (displayed below the image on the back of each card),
and **Comments** (not displayed on the cards). To access those from the IO editor,
click the **Toggle Mask Editor** button.
There you can also view and edit the **Tags** of the note.

Once you're done, click on the "Add" button, at the bottom of the screen.
Anki will add a card for each shape or group of shapes you added in the previous step,
and you can start reviewing them normally.

## Editing IO notes

You can edit your IO notes by clicking on "Edit" while reviewing,
or directly from the browser. There are several tools that you
can use. Of note:

- Select: It allows you to select one or more shapes to move,
  resize, delete or group them.
- Zoom: You can freely move the image and zoom in or out using the mouse wheel.
- Shapes (Rectangle, Ellipse or Polygon): Use them to add new shapes / cards.
- Text: It adds text areas to your image. These text areas can be moved,
  resized or deleted, but no card will be created when you use this tool.
- Undo / Redo.
- Zoom In / Out - Reset zoom.
- Toggle Translucency: Use this tool to temporarily view the hidden areas.
- Delete: Use this tool to delete selected shapes and text areas. Please
  note that deleting a shape won't delete its associated card automatically;
  you will need to use Tools>Empty Cards afterwards, the same as
  with regular cloze deletions.
- Duplicate.
- Group selection: Use this tool to create a cluster of shapes, which will
  allow you to move, resize or delete them simultaneously. Please note that
  two or more single shapes will create only one card once grouped.
- Ungroup selection: Select a group and then click this button to make each shape independent again.
- Alignment: This tool can be used to align your shapes / text areas as desired.

While reviewing IO Cards a "Toggle Masks" button will appear just below the image.
This button will temporarily clear all shapes of the note when using "Hide All, Guess One" mode.

## Inputting Non-Latin Characters and Accents

All modern computers have built-in support for typing accents and
non-Latin characters, and multiple ways to go about it. The method we
recommend is by using a keyboard layout for the language you want to learn.

Languages with a separate script like Japanese, Chinese, Thai, and so on,
have their own layouts specific to that language.

European languages that use accents may have their own layout, but can
often be typed on a generic "international keyboard" layout. These work
by typing the accent, then the character you want accented - e.g. an
apostrophe (<kbd>´</kbd>) then the letter a (<kbd>a</kbd>) gives á.

### Adding international keyboard layouts
Instructions on how to use international keyboards vary depending on the operating
system and desktop environment that you are using. To get started, please see the
links below.

Windows:
- <https://thegeekpage.com/how-to-add-us-international-keyboard-in-windows-10/>
  
Mac:
- <http://www.macworld.com/article/1147039/os-x/accentinput.html>
  
Linux:
- Gnome: <https://help.gnome.org/users/gnome-help/stable/tips-specialchars.html.en>
- KDE Plasma: <https://userbase.kde.org/Tutorials/ComposeKey>

### Adding keyboard layouts for specific languages
Keyboards for specific languages are added in a similar way, but we can
not cover them all here. For more information, please try searching
on the internet for "input Japanese on a mac", "type Chinese on Windows 10", and
so on.

For Linux it's best to look at the wiki pages of your distro, e.g.
[Arch Linux](https://wiki.archlinux.org/title/Input_method) and
[Debian Linux](https://wiki.debian.org/Keyboard#Modern_strategy).
As an example, `apt install ibus-anthy` on Debian allows you to type hiragana characters.

### Right-to-left Languages
If you are learning a right-to-left language, there are lots of other
things to consider. Please see [this page](http://dotancohen.com/howto/rtl_right_to_left.html)
for more information.

### Limitations
The toolkit on which Anki is built has trouble dealing with a few input
methods, such as holding down keys to select accented characters on macOS,
and typing characters by holding down the <kbd>Alt</kbd> key and typing a
numeric code on Windows.

## Unicode Normalization

Text like `á` can be represented in multiple ways on a computer, such as
using a specific code for that symbol, or by using a standard `a` and then
another code for the accent on top. This causes problems when mixing input
from different sources, or using different computers - if your computer
handles keyboard input in one form, but the content is stored in a different
form, it will not match when searching, even though the end result appears
identical.

To ensure content can easily be found in searches, Anki normalizes the text
to a standard form. For most users this process is transparent, but if you
are studying certain material like archaic Japanese symbols, the normalization
process can end up converting them to a more modern equivalent.

If you want character variants preserved, the following in the [debug console](./misc.md)
will turn off normalization:

```python
mw.col.conf["normalize_note_text"] = False
```

Any content added after that will remain untouched. The trade-off is that you may
find it difficult to search for the content if you're switching between operating
systems, or pasting content from mixed sources.
