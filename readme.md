# Экзаменационное задание ШРИ 2013

## Выпускной альбом

Сайт где можно получить инфорамцию о ШРИ-2013.

## Функциональность

* Что-то о ШРИ
* Список всех студентов
    * Имя
    * Фотография
    * О себе
    * Ссылки на профили
    * _Дополнительно можно добавить другие поля на ваше усмотрение -- подумайте, чего не хватает, что ещё было бы полезно для задачи._
* Список всех лекций
    * Название
    * Описание
    * Ссылки на презентацию/видео
    * _Дополнительно можно добавить другие поля на ваше усмотрение -- подумайте, чего не хватает, что ещё было бы полезно для задачи._
* Опционально:
    * Возможность редактировать анкеты
        * Сохраняются либо в локальном хранилище
        * Либо делать простой бэкенд
    * Возможность комментировать лекции.
        * Комментарии сохраняются либо в локальном хранилище, либо можно подключить готовые решения для комментирования (например, Disqus, Facebook и т.п.).
    * Показать выборки по информации, например
        * Все фотографии студентов
        * Все ссылки на презентации
    * Показать все твиты с тегом #shri
    * Интегрировать клуб вКонтакте через API

## Технические требования

* Single Page Application
    * Возможность сформировать ссылку на студента/лекцию.
* Все данные должны лежать в едином JSON, формату которого стоит уделить особое внимание:
    * удобство использования из шаблонизатора
    * нормализованный вид данных
* Интерфейс должен строится по JSON-данным с помощью шаблонизатора.
* Полный цикл разработки с помощью Git и на [GitHub](http://wiki.yandex-team.ru/ui/frontend/training/school/GitHub):
    * знать что такое [git-flow](http://nvie.com/posts/a-successful-git-branching-model/)
    * история разработки должна быть полной и без мусора
    * уметь объяснить зачем был сделан каждый merge
    * если история плохо описана уметь рассказать как это исправить с наименьшими проблемами и описать возможные проблемы
    * уметь привести ту историю которая есть к git-flow модели
* Дизайн может быть любым, но постарайтесь сделать его как минимум аккуратным.
* _Не стесняйтесь сделать любые дополнительные фичи, например:_
    * мобильная версия, версия для печати
    * использование фреимворков для тестирования и/или CI
    * придумывать что-то дополнительное от себя


__Ссылка на презентацию на Я.Диске__ [http://yadi.sk/d/2Sv7RbGRA2p9q](http://yadi.sk/d/2Sv7RbGRA2p9q)