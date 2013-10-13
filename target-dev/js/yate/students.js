
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
    M.f4 = function f4(m, c0, i0, l0, a0, v10, v11) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "header" + "\">" + scalar2xml( ( v10 ) ) + "</div>";
        if ((v11)) {
            r0 += "<a href=\"" + "#" + "\" class=\"" + "button new" + "\">" + scalar2xml( ( v11 ) ) + "</a>";
        }
        r0 += "<img style=\"" + "display:none;" + "\" class=\"" + "loader" + "\" src=\"" + "img/ajax-loader.gif" + "\"/>";
        r0 += "</div>";

        return r0;
    };

    // func post_caption(caption) : scalar
    M.f5 = function f5(m, c0, i0, l0, v12) {
        var r0 = '';

        return r0;
    };

    var j22 = [ ];

    var j23 = [ 0, 'students' ];

    var j24 = [ 1, 0 ];

    var j25 = [ 0, 'single' ];

    var j26 = [ 0, 'edit' ];

    function p5(m, c0, i0, l0) {
        return !simpleBoolean('edit', c0);
    }

    var j27 = [ 0, 'students', 2, p5 ];

    var j29 = [ 0, 'cid' ];

    var j30 = [ 0, 'preview_url' ];

    var j31 = [ 0, 'expanded' ];

    var j32 = [ 0, 'photo_url' ];

    var j33 = [ 0, 'first_name' ];

    var j34 = [ 0, 'last_name' ];

    var j35 = [ 0, 'profiles' ];

    var j36 = [ 0, 'city' ];

    var j37 = [ 0, 'about' ];

    function p7(m, c0, i0, l0) {
        return simpleBoolean('edit', c0);
    }

    var j38 = [ 0, 'students', 2, p7 ];

    var j40 = [ 0, 'profiles', 0, 'ya' ];

    var j41 = [ 0, 'profiles', 0, 'vk' ];

    var j42 = [ 0, 'profiles', 0, 'facebook' ];

    var j43 = [ 0, 'profiles', 0, 'github' ];

    // match /
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( (selectNametest('single', c0, [])) )) {
            r0 += m.a(m, selectNametest('students', c0, []), '', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += m.f('f4', c0, i0, l0, a0, "Список учащихся", "Добавить");
            var items0 = selectNametest('students', c0, []);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.a(m, m.s(j24, c1), '', a0)
            }
        }

        return r0;
    };
    M.t4.j = 1;
    M.t4.a = 1;

    // match .students[ !.edit ]
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        function f6(m, c0, i0, l0, a0, v13) {
            var r0 = '';

            function p6(m, c0, i0, l0) {
                return c0.name == v13;
            }

            var j28 = [ 0, 'profiles', 0, '*', 2, p6 ];

            //  var sn_url : nodeset
            var v14 = m.s(j28, c0);

            r0 += closeAttrs(a0);
            if (nodeset2boolean( (v14) )) {
                r0 += "<a class=\"" + scalar2attrvalue( ( v13 ) ) + "\" href=\"" + nodeset2attrvalue( ( v14 ) ) + "\"></a>";
            }

            return r0;
        }

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "student post" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
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
        if (nodeset2boolean( (selectNametest('profiles', c0, [])) )) {
            r0 += "<div class=\"" + "social" + "\">";
            r0 += f6(m, c0, i0, l0, a0, "ya");
            r0 += f6(m, c0, i0, l0, a0, "vk");
            r0 += f6(m, c0, i0, l0, a0, "facebook");
            r0 += f6(m, c0, i0, l0, a0, "github");
            r0 += "</div>";
        }
        r0 += "</div>";
        if (nodeset2boolean( (selectNametest('expanded', c0, [])) )) {
            r0 += "<hr/>";
            if (nodeset2boolean( (selectNametest('city', c0, [])) )) {
                r0 += "<p>" + "Родной город: " + nodeset2xml( ( selectNametest('city', c0, []) ) ) + "</p>";
            }
            if (nodeset2boolean( (selectNametest('about', c0, [])) )) {
                r0 += "<p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p>";
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
    M.t5.j = j27;
    M.t5.a = 0;

    // match .students[ .edit ]
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        function p8(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j39 = [ 0, '_id', 0, '*', 2, p8 ];

        //  var id : nodeset
        var v15 = m.s(j39, c0);

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "student post" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
        r0 += "<form class=\"" + "edit-form" + "\">";
        if (nodeset2boolean( (v15) )) {
            r0 += "<input type=\"" + "hidden" + "\" name=\"" + "_id[$oid]" + "\" value=\"" + nodeset2attrvalue( ( v15 ) ) + "\"/>";
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
        r0 += "<td>" + "Родной город:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "city" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('city', c0, []) ) ) + "\"/></td>";
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
        r0 += "<tr>";
        r0 += "<td>" + "Я.ру:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[ya]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j40, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Вконтакте:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[vk]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j41, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Facebook:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[facebook]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j42, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "GitHub:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[github]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j43, c0) ) ) + "\"/></td>";
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
    M.t6.j = j38;
    M.t6.a = 0;

    M.matcher = {
        "": {
            "": [
                "t4"
            ],
            "students": [
                "t6",
                "t5"
            ]
        }
    };
    M.imports = [];

    yr.register('students', M);

})();