# Anki не подхватывает тему GTK в Gnome/Linux

Эту проблему можно обойти, явно указав Anki, какую тему GTK использовать.
Выполните в терминале следующие команды:

```shell
theme=$(gsettings get org.gnome.desktop.interface gtk-theme)
echo "gtk-theme-name=$theme" >> ~/.gtkrc-2.0
echo "export GTK2_RC_FILES=$HOME/.gtkrc-2.0" >> ~/.profile
```

После этого выйдите из системы и войдите снова, и Anki должен начать
использовать тему GTK.
