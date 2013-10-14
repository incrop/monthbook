# Экзаменационное задание ШРИ 2013

Рабочая версия лежит на [gh-pages](http://incrop.github.io/monthbook/), [там же](http://incrop.github.io/monthbook/target-dev/)
можно посмотреть девелоперскую версию (без минификации).

Если что-то пошло не так, переход на [эту страницу](http://incrop.github.io/monthbook/target-dev/dev/backend-reset.html)
сбрасывает бэкенд в начальное состояние.

## Список технологий
* [backbone](http://backbonejs.org/) - клиентский MCV, роутинг
* [mongolab](https://mongolab.com/) - сервис для хранения даных на mongodb c rest интерфейсом
* [yate](https://github.com/pasaran/yate) - шаблонизация
* [jquery.serializeJSON](https://github.com/marioizquierdo/jquery.serializeJSON) -
сборка json из данных веб-формы
* [ImageMagick](http://www.imagemagick.org/) - нарезка превьюшек
* [grunt](http://gruntjs.com/) - сборка проекта
    * grunt-contrib-clean - удаление файлов
    * grunt-contrib-copy - копирование
    * grunt-env - установка окружения (dev/prod) для перпроцессинга
    * grunt-preprocess - препроцессинг html (разные js/css для разных окружений)
    * grunt-yate - сборка шаблонов
    * grunt-contrib-cssmin - минификация css
    * grunt-contrib-uglify - минификация js

