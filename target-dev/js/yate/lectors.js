
var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    // func header(caption, buttonCaption) : xml
    M.f2 = function f2(m, c0, i0, l0, a0, v3, v4) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "header" + "\">" + scalar2xml( ( v3 ) ) + "</div>";
        if ((v4)) {
            r0 += "<a href=\"" + "#" + "\" class=\"" + "button new" + "\">" + scalar2xml( ( v4 ) ) + "</a>";
        }
        r0 += "<img style=\"" + "display:none;" + "\" class=\"" + "loader" + "\" src=\"" + "img/ajax-loader.gif" + "\"/>";
        r0 += "</div>";

        return r0;
    };

    // func post_caption(caption) : scalar
    M.f3 = function f3(m, c0, i0, l0, v5) {
        var r0 = '';

        return r0;
    };

    var j1 = [ ];

    var j2 = [ 0, 'single' ];

    var j3 = [ 0, 'lecture_index' ];

    var j4 = [ 0, 'lectures' ];

    var j5 = [ 0, 'lectors' ];

    var j6 = [ 0, 'edit' ];

    function p0(m, c0, i0, l0) {
        return !simpleBoolean('edit', c0);
    }

    var j7 = [ 0, 'lectors', 2, p0 ];

    var j9 = [ 0, 'cid' ];

    var j10 = [ 0, 'preview_url' ];

    var j11 = [ 0, 'expanded' ];

    var j12 = [ 0, 'photo_url' ];

    var j13 = [ 0, 'first_name' ];

    var j14 = [ 0, 'last_name' ];

    var j15 = [ 0, 'lector_id' ];

    var j17 = [ 0, 'native_id' ];

    var j18 = [ 0, 'tech_id' ];

    var j19 = [ 0, 'about' ];

    var j20 = [ 0, 'name' ];

    var j21 = [ 0, 'tech_url' ];

    var j22 = [ 0, 'video_url' ];

    var j23 = [ 0, 'slides_url' ];

    function p3(m, c0, i0, l0) {
        return simpleBoolean('edit', c0);
    }

    var j24 = [ 0, 'lectors', 2, p3 ];

    // match /
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( (selectNametest('lecture_index', c0, [])) )) {
            //  var fix : scalar
            var v6 = 0 + simpleScalar('lecture_index', c0);

            r0 += m.a(m, selectNametest('lectures', c0, []), 'edit', a0, v6)
        } else {
            r0 += closeAttrs(a0);
            if ((!simpleBoolean('single', c0))) {
                r0 += m.f('f2', c0, i0, l0, a0, "Список лекторов", "Добавить");
            }
        }
        r0 += m.a(m, selectNametest('lectors', c0, []), '', a0)

        return r0;
    };
    M.t1.j = 1;
    M.t1.a = 1;

    // match .lectors[ !.edit ]
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        function p1(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j8 = [ 0, '_id', 0, '*', 2, p1 ];

        //  var lector_id : nodeset
        var v7 = m.s(j8, c0);

        function p2(m, c0, i0, l0) {
            return cmpNN(selectNametest('lector_id', c0, []), v7);
        }

        var j16 = [ 1, 1, 0, 'lectures', 2, p2 ];

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lector post" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
        r0 += "<div class=\"" + "left" + "\">";
        r0 += "<img";
        a0.a = {
            'class': new yr.scalarAttr("avatar fold-handle")
        };
        a0.s = 'img';
        if (nodeset2boolean( (selectNametest('expanded', c0, [])) )) {
            a0.a[ "width" ] = new yr.scalarAttr(250);
            a0.a[ "src" ] = new yr.scalarAttr(simpleScalar('photo_url', c0));
        } else {
            a0.a[ "height" ] = new yr.scalarAttr(50);
            a0.a[ "width" ] = new yr.scalarAttr(50);
            a0.a[ "src" ] = new yr.scalarAttr(simpleScalar('preview_url', c0));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "</div>";
        r0 += "<div class=\"" + "content" + "\">";
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "caption fold-handle" + "\">" + nodeset2xml( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2xml( ( selectNametest('last_name', c0, []) ) ) + "</div>";
        r0 += "</div>";
        if (nodeset2boolean( (selectNametest('expanded', c0, [])) )) {
            //  var lector_lectures : nodeset
            var v8 = m.s(j16, c0);

            r0 += "<hr/>";
            if (nodeset2boolean( (selectNametest('native_id', c0, [])) )) {
                //  var url : scalar
                var v9 = "http://tech.yandex.ru/people/" + nodeset2scalar( ( selectNametest('tech_id', c0, []) ) ) + "/";

                r0 += "<p>" + "Cсылка на профиль в Яндексе: " + "<a href=\"" + scalar2attrvalue( ( v9 ) ) + "\">" + scalar2xml( ( v9 ) ) + "</a></p>";
            }
            if (nodeset2boolean( (selectNametest('about', c0, [])) )) {
                r0 += "<p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p>";
            }
            if (nodeset2boolean( (v8) )) {
                r0 += "<hr/>";
                r0 += "<div class=\"" + "float-wrapper" + "\">";
                r0 += "<div class=\"" + "caption" + "\">" + "Лекции:" + "</div>";
                r0 += "</div>";
                r0 += m.a(m, v8, '', a0)
            }
            r0 += "<hr/>";
            r0 += "<div class=\"" + "float-wrapper" + "\">";
            r0 += "<a class=\"" + "button delete" + "\" href=\"" + "#" + "\">" + "Удалить" + "</a>";
            r0 += "<a class=\"" + "button edit" + "\" href=\"" + "#" + "\">" + "Изменить" + "</a>";
            r0 += "<img style=\"" + "display:none;" + "\" class=\"" + "loader" + "\" src=\"" + "img/ajax-loader-gray.gif" + "\"/>";
            r0 += "</div>";
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t2.j = j7;
    M.t2.a = 0;

    // match .lectures
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lecture-name" + "\">" + nodeset2xml( ( selectNametest('name', c0, []) ) ) + ":" + "</div>";
        r0 += "<ul>";
        if (nodeset2boolean( (selectNametest('tech_url', c0, [])) )) {
            r0 += "<li>" + "Ссылка на лекцию: " + "<a href=\"" + nodeset2attrvalue( ( selectNametest('tech_url', c0, []) ) ) + "\">" + nodeset2xml( ( selectNametest('tech_url', c0, []) ) ) + "</a></li>";
        }
        if (nodeset2boolean( (selectNametest('video_url', c0, [])) )) {
            r0 += "<li>" + "Видео: " + "<a href=\"" + nodeset2attrvalue( ( selectNametest('video_url', c0, []) ) ) + "\">" + nodeset2xml( ( selectNametest('video_url', c0, []) ) ) + "</a></li>";
        }
        if (nodeset2boolean( (selectNametest('slides_url', c0, [])) )) {
            r0 += "<li>" + "Слайды: " + "<a href=\"" + nodeset2attrvalue( ( selectNametest('slides_url', c0, []) ) ) + "\">" + nodeset2xml( ( selectNametest('slides_url', c0, []) ) ) + "</a></li>";
        }
        r0 += "</ul>";

        return r0;
    };
    M.t3.j = j4;
    M.t3.a = 0;

    // match .lectors[ .edit ]
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        function p4(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j25 = [ 0, '_id', 0, '*', 2, p4 ];

        //  var lector_id : nodeset
        var v10 = m.s(j25, c0);

        function p5(m, c0, i0, l0) {
            return cmpNN(selectNametest('lector_id', c0, []), v10);
        }

        var j26 = [ 1, 1, 0, 'lectures', 2, p5 ];

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lector post" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
        r0 += "<form class=\"" + "edit-form" + "\">";
        if (nodeset2boolean( (v10) )) {
            r0 += "<input type=\"" + "hidden" + "\" name=\"" + "_id[$oid]" + "\" value=\"" + nodeset2attrvalue( ( v10 ) ) + "\"/>";
        }
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "caption" + "\">";
        if (nodeset2boolean( (v10) )) {
            r0 += "Редактирование лектора";
        } else {
            r0 += "Новый лектор";
        }
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<hr/>";
        r0 += "<input type=\"" + "hidden" + "\" name=\"" + "cid" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\"/>";
        r0 += "<table>";
        r0 += "<tbody>";
        r0 += "<tr>";
        r0 += "<td>" + "Имя:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "first_name" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('first_name', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Фамилия:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "last_name" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('last_name', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "tech.yandex.ru ID:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "native_id" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('native_id', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Ссылка на аватар:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "photo_url" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('photo_url', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Ссылка на превью:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "preview_url" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('preview_url', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "О себе:" + "</td>";
        r0 += "<td><textarea rows=\"" + "6" + "\" name=\"" + "about" + "\">" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</textarea></td>";
        r0 += "</tr>";
        r0 += "</tbody>";
        r0 += "</table>";
        r0 += "<hr/>";
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "caption lectures" + "\">" + "Лекции:" + "</div>";
        r0 += "<a href=\"" + "#" + "\" class=\"" + "button new-lecture" + "\">" + "Добавить" + "</a>";
        r0 += "</div>";
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("lecture-list")
        };
        a0.s = 'div';
        r0 += m.a(m, m.s(j26, c0), 'edit', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "<hr/>";
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<a class=\"" + "button cancel" + "\" href=\"" + "#" + "\">" + "Отмена" + "</a>";
        r0 += "<input class=\"" + "button submit" + "\" type=\"" + "submit" + "\" value=\"" + "Сохранить" + "\"/>";
        r0 += "<img style=\"" + "display:none;" + "\" class=\"" + "loader" + "\" src=\"" + "img/ajax-loader-gray.gif" + "\"/>";
        r0 += "</div>";
        r0 += "</form>";
        r0 += "</div>";

        return r0;
    };
    M.t4.j = j24;
    M.t4.a = 0;

    // match .lectures : edit
    M.t5 = function t5(m, c0, i0, l0, a0, v11) {
        v11 = (v11 === undefined) ? i0 : v11;
        var r0 = '';

        function p6(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j27 = [ 0, '_id', 0, '*', 2, p6 ];

        //  var lecture_id : nodeset
        var v12 = m.s(j27, c0);

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lecture-item" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
        r0 += "<hr/>";
        r0 += "<input type=\"" + "hidden" + "\" name=\"" + "lectures[" + scalar2attrvalue( ( v11 ) ) + "][cid]" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\"/>";
        if (nodeset2boolean( (v12) )) {
            r0 += "<input type=\"" + "hidden" + "\" name=\"" + "lectures[" + scalar2attrvalue( ( v11 ) ) + "][_id][$oid]" + "\" value=\"" + nodeset2attrvalue( ( v12 ) ) + "\"/>";
        }
        r0 += "<table>";
        r0 += "<tbody>";
        r0 += "<tr>";
        r0 += "<td>" + "Название:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "lectures[" + scalar2attrvalue( ( v11 ) ) + "][name]" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('name', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Ссылка на лекцию:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "lectures[" + scalar2attrvalue( ( v11 ) ) + "][tech_url]" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('tech_url', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Ссылка на видео:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "lectures[" + scalar2attrvalue( ( v11 ) ) + "][video_url]" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('video_url', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Ссылка на слайды:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "lectures[" + scalar2attrvalue( ( v11 ) ) + "][slides_url]" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('slides_url', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "</tbody>";
        r0 += "</table>";
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<a class=\"" + "button delete-lecture" + "\" href=\"" + "#" + "\">" + "Удалить" + "</a>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t5.j = j4;
    M.t5.a = 0;

    M.matcher = {
        "": {
            "": [
                "t1"
            ],
            "lectors": [
                "t4",
                "t2"
            ],
            "lectures": [
                "t3"
            ]
        },
        "edit": {
            "lectures": [
                "t5"
            ]
        }
    };
    M.imports = [];

    yr.register('lectors', M);

})();