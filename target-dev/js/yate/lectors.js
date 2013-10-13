
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

    var j2 = [ 0, 'lectors' ];

    var j3 = [ 1, 0 ];

    var j4 = [ 0, 'single' ];

    var j5 = [ 0, 'edit' ];

    function p0(m, c0, i0, l0) {
        return !simpleBoolean('edit', c0);
    }

    var j6 = [ 0, 'lectors', 2, p0 ];

    var j8 = [ 0, 'cid' ];

    var j9 = [ 0, 'preview_url' ];

    var j10 = [ 0, 'expanded' ];

    var j11 = [ 0, 'photo_url' ];

    var j12 = [ 0, 'first_name' ];

    var j13 = [ 0, 'last_name' ];

    var j14 = [ 0, 'lector_id' ];

    var j16 = [ 0, 'native_id' ];

    var j17 = [ 0, 'about' ];

    var j18 = [ 0, 'name' ];

    var j19 = [ 0, 'url' ];

    function p3(m, c0, i0, l0) {
        return simpleBoolean('edit', c0);
    }

    var j20 = [ 0, 'lectors', 2, p3 ];

    // match /
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( (selectNametest('single', c0, [])) )) {
            r0 += m.a(m, selectNametest('lectors', c0, []), '', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += m.f('f2', c0, i0, l0, a0, "Список лекторов", "Добавить");
            var items0 = selectNametest('lectors', c0, []);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.a(m, m.s(j3, c1), '', a0)
            }
        }

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

        var j7 = [ 0, '_id', 0, '*', 2, p1 ];

        //  var lector_id : nodeset
        var v6 = m.s(j7, c0);

        function p2(m, c0, i0, l0) {
            return cmpNN(selectNametest('lector_id', c0, []), v6);
        }

        var j15 = [ 1, 1, 0, 'lectures', 2, p2 ];

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
        r0 += "<div class=\"" + "caption-wrapper" + "\">";
        r0 += "<div class=\"" + "caption fold-handle" + "\">" + nodeset2xml( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2xml( ( selectNametest('last_name', c0, []) ) ) + "</div>";
        r0 += "</div>";
        if (nodeset2boolean( (selectNametest('expanded', c0, [])) )) {
            //  var lector_lectures : nodeset
            var v7 = m.s(j15, c0);

            r0 += "<hr/>";
            if (nodeset2boolean( (selectNametest('native_id', c0, [])) )) {
                //  var url : scalar
                var v8 = "http://tech.yandex.ru/people/" + nodeset2scalar( ( selectNametest('native_id', c0, []) ) ) + "/";

                r0 += "<p>" + "Cсылка на профиль в Яндексе: " + "<a href=\"" + scalar2attrvalue( ( v8 ) ) + "\">" + scalar2xml( ( v8 ) ) + "</a></p>";
            }
            if (nodeset2boolean( (selectNametest('about', c0, [])) )) {
                r0 += "<p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p>";
            }
            if (nodeset2boolean( (v7) )) {
                r0 += "<hr/>";
                r0 += "<div class=\"" + "caption-wrapper" + "\">";
                r0 += "<div class=\"" + "caption" + "\">" + "Лекции:" + "</div>";
                r0 += "</div>";
                var items0 = v7;
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    r0 += "<p>";
                    r0 += nodeset2xml( ( selectNametest('name', c1, []) ) ) + ": ";
                    r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('url', c1, []) ) ) + "\">" + nodeset2xml( ( selectNametest('url', c1, []) ) ) + "</a>";
                    r0 += "</p>";
                }
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
    M.t2.j = j6;
    M.t2.a = 0;

    // match .lectors[ .edit ]
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        function p4(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j21 = [ 0, '_id', 0, '*', 2, p4 ];

        //  var lector_id : nodeset
        var v9 = m.s(j21, c0);

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lector post" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
        r0 += "<form class=\"" + "edit-form" + "\">";
        if (nodeset2boolean( (v9) )) {
            r0 += "<input type=\"" + "hidden" + "\" name=\"" + "_id[$oid]" + "\" value=\"" + nodeset2attrvalue( ( v9 ) ) + "\"/>";
        }
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
        r0 += "</tbody>";
        r0 += "</table>";
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
    M.t3.j = j20;
    M.t3.a = 0;

    M.matcher = {
        "": {
            "": [
                "t1"
            ],
            "lectors": [
                "t3",
                "t2"
            ]
        }
    };
    M.imports = [];

    yr.register('lectors', M);

})();