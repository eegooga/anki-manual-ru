// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="intro.html">Введение</a></li><li class="chapter-item "><a href="background.html"><strong aria-hidden="true">1.</strong> Общая информация</a></li><li class="chapter-item "><a href="platform/intro.html"><strong aria-hidden="true">2.</strong> Примечания по платформам</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/windows/intro.html"><strong aria-hidden="true">2.1.</strong> Windows</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/windows/installing.html"><strong aria-hidden="true">2.1.1.</strong> Установка и обновление</a></li><li class="chapter-item "><a href="platform/windows/installation-issues.html"><strong aria-hidden="true">2.1.2.</strong> Проблемы установки</a></li><li class="chapter-item "><a href="platform/windows/startup-issues.html"><strong aria-hidden="true">2.1.3.</strong> Проблемы запуска</a></li><li class="chapter-item "><a href="platform/windows/display-issues.html"><strong aria-hidden="true">2.1.4.</strong> Проблемы отображения</a></li><li class="chapter-item "><a href="platform/windows/copy-and-paste.html"><strong aria-hidden="true">2.1.5.</strong> Проблемы копирования и вставки</a></li><li class="chapter-item "><a href="platform/windows/text-size.html"><strong aria-hidden="true">2.1.6.</strong> Размер текста</a></li><li class="chapter-item "><a href="platform/windows/permission-problems.html"><strong aria-hidden="true">2.1.7.</strong> Проблемы с правами доступа</a></li></ol></li><li class="chapter-item "><a href="platform/mac/intro.html"><strong aria-hidden="true">2.2.</strong> macOS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/mac/installing.html"><strong aria-hidden="true">2.2.1.</strong> Установка и обновление</a></li><li class="chapter-item "><a href="platform/mac/display-issues.html"><strong aria-hidden="true">2.2.2.</strong> Проблемы отображения</a></li></ol></li><li class="chapter-item "><a href="platform/linux/intro.html"><strong aria-hidden="true">2.3.</strong> Linux</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="platform/linux/installing.html"><strong aria-hidden="true">2.3.1.</strong> Установка и обновление</a></li><li class="chapter-item "><a href="platform/linux/missing-libraries.html"><strong aria-hidden="true">2.3.2.</strong> Отсутствующие библиотеки</a></li><li class="chapter-item "><a href="platform/linux/display-issues.html"><strong aria-hidden="true">2.3.3.</strong> Проблемы отображения</a></li><li class="chapter-item "><a href="platform/linux/blank-window.html"><strong aria-hidden="true">2.3.4.</strong> Пустое главное окно</a></li><li class="chapter-item "><a href="platform/linux/distro-packages.html"><strong aria-hidden="true">2.3.5.</strong> Пакеты дистрибутивов Linux</a></li><li class="chapter-item "><a href="platform/linux/gtk-theme.html"><strong aria-hidden="true">2.3.6.</strong> Некорректная тема GTK</a></li><li class="chapter-item "><a href="platform/linux/wayland.html"><strong aria-hidden="true">2.3.7.</strong> Wayland</a></li><li class="chapter-item "><a href="platform/linux/input-methods.html"><strong aria-hidden="true">2.3.8.</strong> Методы ввода</a></li></ol></li></ol></li><li class="chapter-item "><a href="getting-started.html"><strong aria-hidden="true">3.</strong> Начало работы</a></li><li class="chapter-item "><a href="getting-help.html"><strong aria-hidden="true">4.</strong> Получение помощи</a></li><li class="chapter-item "><a href="studying.html"><strong aria-hidden="true">5.</strong> Обучение</a></li><li class="chapter-item "><a href="editing.html"><strong aria-hidden="true">6.</strong> Добавление/редактирование</a></li><li class="chapter-item "><a href="templates/intro.html"><strong aria-hidden="true">7.</strong> Шаблоны карточек</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="templates/fields.html"><strong aria-hidden="true">7.1.</strong> Подстановки полей</a></li><li class="chapter-item "><a href="templates/generation.html"><strong aria-hidden="true">7.2.</strong> Генерация карточек</a></li><li class="chapter-item "><a href="templates/styling.html"><strong aria-hidden="true">7.3.</strong> Стили и HTML</a></li><li class="chapter-item "><a href="templates/errors.html"><strong aria-hidden="true">7.4.</strong> Проверки и ошибки</a></li></ol></li><li class="chapter-item "><a href="preferences.html"><strong aria-hidden="true">8.</strong> Настройки</a></li><li class="chapter-item "><a href="deck-options.html"><strong aria-hidden="true">9.</strong> Параметры колоды</a></li><li class="chapter-item "><a href="syncing.html"><strong aria-hidden="true">10.</strong> Синхронизация с AnkiWeb</a></li><li class="chapter-item "><a href="profiles.html"><strong aria-hidden="true">11.</strong> Профили</a></li><li class="chapter-item "><a href="browsing.html"><strong aria-hidden="true">12.</strong> Обзор (Browser)</a></li><li class="chapter-item "><a href="filtered-decks.html"><strong aria-hidden="true">13.</strong> Фильтрованные колоды</a></li><li class="chapter-item "><a href="searching.html"><strong aria-hidden="true">14.</strong> Поиск</a></li><li class="chapter-item "><a href="importing/intro.html"><strong aria-hidden="true">15.</strong> Импорт</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="importing/text-files.html"><strong aria-hidden="true">15.1.</strong> Текстовые файлы</a></li><li class="chapter-item "><a href="importing/packaged-decks.html"><strong aria-hidden="true">15.2.</strong> Пакетные колоды</a></li></ol></li><li class="chapter-item "><a href="exporting.html"><strong aria-hidden="true">16.</strong> Экспорт</a></li><li class="chapter-item "><a href="backups.html"><strong aria-hidden="true">17.</strong> Резервные копии</a></li><li class="chapter-item "><a href="files.html"><strong aria-hidden="true">18.</strong> Управление файлами</a></li><li class="chapter-item "><a href="stats.html"><strong aria-hidden="true">19.</strong> Статистика</a></li><li class="chapter-item "><a href="media.html"><strong aria-hidden="true">20.</strong> Медиа</a></li><li class="chapter-item "><a href="math.html"><strong aria-hidden="true">21.</strong> Математика и символы</a></li><li class="chapter-item "><a href="leeches.html"><strong aria-hidden="true">22.</strong> Сложные карточки (leeches)</a></li><li class="chapter-item "><a href="addons.html"><strong aria-hidden="true">23.</strong> Дополнения</a></li><li class="chapter-item "><a href="troubleshooting.html"><strong aria-hidden="true">24.</strong> Устранение неполадок</a></li><li class="chapter-item "><a href="sync-server.html"><strong aria-hidden="true">25.</strong> Сервер синхронизации</a></li><li class="chapter-item "><a href="misc.html"><strong aria-hidden="true">26.</strong> Разное</a></li><li class="chapter-item affix "><a href="contrib.html">Участие в разработке</a></li><li class="chapter-item affix "><a href="faqs.html">Часто задаваемые вопросы</a></li><li class="chapter-item affix "><a href="resources.html">Ресурсы</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
