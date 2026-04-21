# Подстановки полей

<!-- toc -->

## Базовые подстановки

Самый простой шаблон выглядит так:

    {{Front}}

Когда вы помещаете текст в фигурные скобки, Anki ищет поле с таким именем
и заменяет текст фактическим содержимым этого поля.

Имена полей чувствительны к регистру. Если поле называется `Front`,
запись `{{front}}` не сработает как нужно.

Шаблоны не ограничиваются только списком полей. В них можно добавлять
произвольный текст. Например, если вы учите столицы и создали тип заметки
с полем «Country», лицевая сторона может выглядеть так:

    What's the capital city of {{Country}}?

Шаблон обратной стороны по умолчанию выглядит примерно так:

    {{FrontSide}}

    <hr id=answer>

    {{Back}}

Это означает: «покажи текст с лицевой стороны, затем разделитель,
а потом поле Back».

Часть `"id=answer"` указывает Anki, где проходит граница между вопросом
и ответом. Благодаря этому Anki может автоматически прокрутить карточку к
месту начала ответа при нажатии **show answer** на длинной карточке
(особенно полезно на мобильных устройствах с небольшим экраном). Если
горизонтальная линия в начале ответа не нужна, используйте другой
HTML-элемент, например абзац или `div`.

## Переносы строк

Шаблоны карточек похожи на веб-страницы, поэтому для новой строки нужен
специальный код. Например, если в шаблоне написать:

    one
    two

В предпросмотре вы увидите:

    one two

Чтобы добавить новую строку, в конец строки нужно поставить код `&lt;br&gt;`,
вот так:

    one<br>
    two

Код `br` означает `(line) br(eak)`.

То же самое относится к полям. Если нужно показать два поля, по одному
в каждой строке, используйте:

    {{Field 1}}<br>
    {{Field 2}}

## Text to Speech для отдельных полей

Эта возможность требует Anki 2.1.20, AnkiMobile 2.0.56 или AnkiDroid 2.17.

Чтобы Anki озвучивал поле Front голосом американского английского, добавьте
в шаблон:

    {{tts en_US:Front}}

На Windows, macOS и iOS Anki использует встроенные голоса ОС. На Linux
встроенных голосов нет, но их можно добавить через дополнения, например
[это](https://ankiweb.net/shared/info/391644525).

Чтобы увидеть список доступных языков/голосов, добавьте в шаблон:

    {{tts-voices:}}

Если выбранный язык поддерживают несколько голосов, можно перечислить их
списком, и Anki выберет первый доступный. Например:

    {{tts ja_JP voices=Apple_Otoya,Microsoft_Haruka:Field}}

В этом случае на устройстве Apple будет использован Otoya, а на
Windows-ПК — Haruka.

В некоторых реализациях TTS можно указать другую скорость:

    {{tts fr_FR speed=0.8:SomeField}}

Параметры `speed` и `voices` опциональны, но язык указывать обязательно.

На Mac доступные голоса можно настроить:

- Откройте окно System Preferences.

- Нажмите Accessibility.

- Нажмите Speech.

- Откройте выпадающий список системного голоса и выберите Customize.

Одни голоса звучат лучше других, поэтому стоит попробовать несколько вариантов.
Обратите внимание: голос Siri доступен только приложениям Apple. После
установки новых голосов перезапустите Anki, чтобы они появились в списке.

На Windows некоторые голоса (например, Cortana) выбрать нельзя, потому что
Microsoft не предоставляет их другим приложениям.

В типе заметки cloze можно озвучивать только скрытые фрагменты через
фильтр `cloze-only`:

    {{tts en_US:cloze-only:Text}}

Фильтр `cloze-only` поддерживается в Anki 2.1.29+, AnkiMobile 2.0.65+
и AnkiDroid 2.17+.

## Text to Speech для нескольких полей и статического текста

Эта возможность требует Anki 2.1.50+, AnkiMobile 2.0.84+ или AnkiDroid 2.17+.

Если нужно, чтобы TTS озвучивал несколько полей и/или статический текст
из шаблона, используйте:

```
[anki:tts lang=en_US] This text should be read. Here is {{Field1}} and {{Field2}}[/anki:tts]

This is other text on the template. It is outside of the tags so it should not be read.
```

## Специальные поля

В шаблонах можно использовать специальные поля:

    Теги заметки: {{Tags}}

    Тип заметки: {{Type}}

    Колода карточки: {{Deck}}

    Подколода карточки: {{Subdeck}}

    Флаг карточки: {{CardFlag}}

    Тип карточки ("Forward" и т.д.): {{Card}}

    Содержимое шаблона лицевой стороны
    (работает только в шаблоне обратной стороны): {{FrontSide}}

`FrontSide` не воспроизводит автоматически аудио, которое было на лицевой
стороне карточки. Если нужно, чтобы одно и то же аудио автоматически
проигрывалось и спереди, и сзади, добавьте аудиополя на обратную сторону вручную.

Как и обычные поля, специальные поля чувствительны к регистру — нужно писать
`{{Tags}}`, а не `{{tags}}`.

## Поля-подсказки

Можно добавить поле на лицевую или обратную сторону карточки, но скрыть его,
пока вы явно не раскроете его. Это называется _поле-подсказка_.
Перед добавлением подсказок помните: чем проще ответить на вопрос в Anki,
тем ниже шанс вспомнить его в реальной ситуации. Перед продолжением полезно
прочитать о «принципе минимальной информации»:
<https://super-memory.com/articles/20rules.htm>.

Сначала добавьте поле для хранения подсказки, если его ещё нет.
Если не уверены, как это сделать, см. раздел [fields](../editing.md#customizing-fields).

Предположим, вы создали поле `MyField`. Чтобы включить его в карточку, но
скрыть по умолчанию, добавьте в шаблон:

    {{hint:MyField}}

Появится ссылка «show hint»; при нажатии содержимое поля будет показано
на карточке. (Если `MyField` пустое, не покажется ничего.)

Если раскрыть подсказку на вопросе, а затем показать ответ, подсказка снова
скроется. Если хотите, чтобы при показе ответа подсказка оставалась открытой,
удалите `{{FrontSide}}` из шаблона обратной стороны и вручную добавьте
нужные поля.

Сейчас нельзя использовать поле-подсказку для аудио — звук воспроизводится
вне зависимости от нажатия ссылки подсказки.

Если нужно изменить внешний вид или поведение, поле-подсказку придётся
реализовать самостоятельно. Мы не можем поддерживать такой сценарий, но
следующий код поможет начать:

    {{#Back}}
    <a class=hint href="#"
    onclick="this.style.display='none';document.getElementById('hint4753594160').style.display='inline-block';return false;">
    Show Back</a><div id="hint4753594160" class=hint style="display: none">{{Back}}</div>
    {{/Back}}

## Ссылки на словарь

Подстановки полей можно использовать и для создания ссылок на словарь.
Представьте, что вы изучаете язык, и ваш любимый онлайн-словарь позволяет
искать слово по URL вида:

    http://example.com/search?q=myword

Тогда можно добавить автоматическую ссылку в шаблон:

    {{Expression}}

    <a href="http://example.com/search?q={{Expression}}">check in dictionary</a>

Такой шаблон позволит искать выражение из каждой заметки по клику во время
повторения. Но есть важный нюанс — см. следующий раздел.

## Удаление HTML

Как и шаблоны, поля хранятся в формате HTML. В примере со словарной ссылкой
выше, если выражение содержит слово "myword" без форматирования, HTML будет
таким же: "myword". Но при наличии форматирования добавляется лишний HTML.
Например, если "myword" выделено жирным, фактический HTML будет
"&lt;b&gt;myword&lt;/b&gt;".

Это может создавать проблемы для словарных ссылок. В примере выше ссылка
получится такой:

    <a href="http://example.com/search?q=<b>myword</b>">check in dictionary</a>

Лишние символы в ссылке, скорее всего, «собьют» словарь, и совпадений вы не получите.

To solve this, Anki provides the ability to strip formatting from fields
when they are replaced. If you prefix a field name with text:, Anki will
not include any formatting. So a dictionary link that worked even with
formatted text would be:

    <a href="http://example.com/search?q={{text:Expression}}">check in dictionary</a>

## Right To Left Text

If you’re using a language that reads from right to left, you’ll need
to adjust the template like so:

    <div dir=rtl>{{FieldThatHasRTLTextInIt}}</div>

## Ruby Characters

Some languages commonly use annotations above the text to display the
pronunciation of characters. These annotations are known as
[ruby characters](https://en.wikipedia.org/wiki/Ruby_character).
In Japanese, these are known as [furigana](https://en.wikipedia.org/wiki/Furigana).

In Anki, you can display ruby characters by using the following syntax:

    Text[Ruby]

Suppose the text above is written in MyField. By default, if you simply use
`{{Myfield}}`, the field will be displayed as is. To properly position the
ruby characters above the text, use the `furigana` filter in the templates
like so:

    {{furigana:MyField}}

Here are some examples:

<!-- prettier-ignore -->
| Raw Text            | Rendered Text                                                                             |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `Text[Ruby]`        | <ruby><rb>Text</rb><rt>Ruby</rt></ruby>                                                   |
| `日本語[にほんご]`  | <ruby><rb>日本語</rb><rt>にほんご</rt></ruby>                                             |
| `世[よ]の 中[なか]` | <ruby><rb>世</rb><rt>よ</rt></ruby>の<ruby><rb>中</rb><rt>なか</rt></ruby>                |
| `世[よ]の中[なか]`  | <ruby><rb>世</rb><rt>よ</rt></ruby><ruby><rb>の中</rb><rt>なか</rt></ruby> _(incorrect!)_ |

Notice how the third example has a space before the 中 character. This is
necessary to specify that the ruby text applies only to that character.
If there was no space, the ruby text will be misplaced above the の character,
as shown in the fourth example.

### Additional Ruby Character Filters

In addition to the `furigana` filter, you can also only show certain parts
of the ruby text, with the `kana` and `kanji` filters. The `kana` filter will
only show the ruby text, while the `kanji` filter removes the ruby text
entirely.

<!-- prettier-ignore -->
| Raw Text           | Field Filter           | Rendered Text                                 |
| ------------------ | ---------------------- | --------------------------------------------- |
| `日本語[にほんご]` | `{{furigana:MyField}}` | <ruby><rb>日本語</rb><rt>にほんご</rt></ruby> |
| `日本語[にほんご]` | `{{kana:MyField}}`     | にほんご                                      |
| `日本語[にほんご]` | `{{kanji:MyField}}`    | 日本語                                        |

These names are, again, borrowed from Japanese.
The term [kana](https://en.wikipedia.org/wiki/Kana) represents the phonetic
system used to describe how words are pronounced, whereas the term
[kanji](https://en.wikipedia.org/wiki/Kanji) represents its Chinese characters.

## Media & LaTeX

Anki does not scan templates for media references, because it is slow to
do so. This has implications for including media on the template.

### Static Sounds/Images

If you wish to include images or sounds on your cards that are the same
for every card (e.g. a company logo at the top of each card):

1. Rename the file so it starts with an underscore, e.g "\_logo.jpg".
   The underscore tells Anki that the file is used by the template and
   it should be exported when sharing the deck.

2. Add a reference to the media on your front or back template, like:

<!-- -->

    <img src="_logo.jpg">

### Field References

Media references to fields are not supported. They may or may not display
during review, and will not work when checking for unused media,
importing/exporting, and so on. Examples that won’t work:

    <img src="{{Expression}}.jpg">

    [sound:{{Word}}]

    [latex]{{Field 1}}[/latex]

Instead, you should include the media references in the field. Please
see the [importing section](../importing/text-files.md#importing-media) for more information.

## Checking Your Answer

You can watch [a video about this feature](http://www.youtube.com/watch?v=5tYObQ3ocrw&yt:cc=on) on
YouTube.

The easiest way to check your answer is to click "Basic" at the top
left of the card adding screen, and select "Basic (type in the answer)".

If you have downloaded a shared deck and would like to type in the answer
with it, you can modify its card template. If it has a template like:

    {{Native Word}}

    {{FrontSide}}

    <hr id=answer>

    {{Foreign Word}}

To type in the foreign word and check if you are correct, you need to
edit your front template so that it looks like this:

    {{Native Word}}
    {{type:Foreign Word}}

Here, we have added `type:` in front of the field we want to
compare. Since FrontSide is on the back of the card, the type answer box
will appear on the back as well.

When reviewing, Anki will display a text box where you can type in the
answer, and upon hitting <kbd>Enter</kbd> or showing the answer, Anki will show you
which parts you got right and which parts you got wrong. The text box’s
font size will be the size you configured for that field (via the
“Fields” button when editing).

Note that the type answer boxes don't appear in the preview dialog or in AnkiWeb.

This feature does not change how the cards are answered, so it’s still
up to you to decide how well you remembered or not.

Only one typing comparison can be used on a card. If you add the above
text multiple times, it will not work. It also only supports a single
line, so it is not useful for comparing against a field that is
comprised of multiple lines.

Anki uses a monospaced font for the answer comparison so that the
“provided” and “correct” sections line up. If you wish to override the
font for the answer comparison, you can put the following at the bottom
of your styling section:

    code#typeans { font-family: "myfontname"; }

Which will affect the following HTML for the answer comparison:

    <code id=typeans>...</code>

Advanced users can override the default type-answer colors with the css
classes "typeGood", "typeBad" and "typeMissed". AnkiMobile supports
"typeGood" and "typeBad", but not "typeMissed".

If you wish to override the size of the typing box and don’t want to
change the font in the Fields dialog, you can override the default
inline style using `!important`, like so:

    #typeans { font-size: 50px !important; }

It is also possible to type in the answer for cloze deletion cards. To
do this, add `{{type:cloze:Text}}` to both the front and back
template, so the back looks something like this:

    {{cloze:Text}}
    {{type:cloze:Text}}
    {{Extra}}


If there are multiple sections elided, you can separate the answers in
the text box with a comma.

### Ignoring Diacritics

If you don't want Anki to compare accents on characters in your typed input with the correct answer, you can do so by using `type:nc` in your fields.

    {{type:nc:Front}}

This makes sure a difference in accents isn't marked as incorrect by Anki. 
For example, `بطيخ` would be treated the same as `بَطِّيخ` or `elite` would be treated same as `élite`.
