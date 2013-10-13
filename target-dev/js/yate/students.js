
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
    M.f4 = function f4(m, c0, i0, l0, a0, v8, v9) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "header" + "\">" + scalar2xml( ( v8 ) ) + "</div>";
        if ((v9)) {
            r0 += "<a href=\"" + "#" + "\" class=\"" + "button new" + "\">" + scalar2xml( ( v9 ) ) + "</a>";
        }
        r0 += "</div>";

        return r0;
    };

    // func post_caption(caption) : scalar
    M.f5 = function f5(m, c0, i0, l0, v10) {
        var r0 = '';

        return r0;
    };

    var j16 = [ ];

    var j17 = [ 0, 'students' ];

    var j18 = [ 1, 0 ];

    var j19 = [ 0, 'single' ];

    var j20 = [ 0, 'edit' ];

    function p1(m, c0, i0, l0) {
        return !simpleBoolean('edit', c0);
    }

    var j21 = [ 0, 'students', 2, p1 ];

    var j23 = [ 0, 'cid' ];

    var j24 = [ 0, 'preview' ];

    var j25 = [ 0, 'expanded' ];

    var j26 = [ 0, 'photo' ];

    var j27 = [ 0, 'first_name' ];

    var j28 = [ 0, 'last_name' ];

    var j29 = [ 0, 'profiles' ];

    var j30 = [ 0, 'city' ];

    var j31 = [ 0, 'about' ];

    function p3(m, c0, i0, l0) {
        return simpleBoolean('edit', c0);
    }

    var j32 = [ 0, 'students', 2, p3 ];

    var j34 = [ 0, 'profiles', 0, 'ya' ];

    var j35 = [ 0, 'profiles', 0, 'vk' ];

    var j36 = [ 0, 'profiles', 0, 'facebook' ];

    var j37 = [ 0, 'profiles', 0, 'github' ];

    // match /
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( (selectNametest('single', c0, [])) )) {
            r0 += m.a(m, selectNametest('students', c0, []), '', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += m.f('f4', c0, i0, l0, a0, "Список учащихся", "Добавить");
            var items0 = selectNametest('students', c0, []);
            for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                var c1 = items0[ i1 ];
                r0 += m.a(m, m.s(j18, c1), '', a0)
            }
        }

        return r0;
    };
    M.t3.j = 1;
    M.t3.a = 1;

    // match .students[ !.edit ]
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        function f6(m, c0, i0, l0, a0, v11) {
            var r0 = '';

            function p2(m, c0, i0, l0) {
                return c0.name == v11;
            }

            var j22 = [ 0, 'profiles', 0, '*', 2, p2 ];

            //  var sn_url : nodeset
            var v12 = m.s(j22, c0);

            r0 += closeAttrs(a0);
            if (nodeset2boolean( (v12) )) {
                r0 += "<a class=\"" + scalar2attrvalue( ( v11 ) ) + "\" href=\"" + nodeset2attrvalue( ( v12 ) ) + "\"></a>";
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
            a0.a[ "src" ] = new yr.scalarAttr(simpleScalar('photo', c0));
        } else {
            a0.a[ "height" ] = new yr.scalarAttr(50);
            a0.a[ "width" ] = new yr.scalarAttr(50);
            a0.a[ "src" ] = new yr.scalarAttr(simpleScalar('preview', c0));
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
                r0 += "<div class=\"" + "city" + "\">" + "Родной город: " + nodeset2xml( ( selectNametest('city', c0, []) ) ) + "</div>";
            }
            r0 += "<p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p>";
            r0 += "<hr/>";
            r0 += "<div class=\"" + "float-wrapper" + "\">";
            r0 += "<a class=\"" + "button delete" + "\" href=\"" + "#" + "\">" + "Удалить" + "</a>";
            r0 += "<a class=\"" + "button edit" + "\" href=\"" + "#" + "\">" + "Изменить" + "</a>";
            r0 += "</div>";
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t4.j = j21;
    M.t4.a = 0;

    // match .students[ .edit ]
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        function p4(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j33 = [ 0, '_id', 0, '*', 2, p4 ];

        //  var id : nodeset
        var v13 = m.s(j33, c0);

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "student post" + "\" data-cid=\"" + nodeset2attrvalue( ( selectNametest('cid', c0, []) ) ) + "\">";
        r0 += "<form class=\"" + "student-form" + "\">";
        if (nodeset2boolean( (v13) )) {
            r0 += "<input type=\"" + "hidden" + "\" name=\"" + "_id[$oid]" + "\" value=\"" + nodeset2attrvalue( ( v13 ) ) + "\"/>";
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
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "photo" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('photo', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Ссылка на превью:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "preview" + "\" value=\"" + nodeset2attrvalue( ( selectNametest('preview', c0, []) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "О себе:" + "</td>";
        r0 += "<td><textarea rows=\"" + "6" + "\" name=\"" + "about" + "\">" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</textarea></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Я.ру:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[ya]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j34, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Вконтакте:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[vk]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j35, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "Facebook:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[facebook]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j36, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "<tr>";
        r0 += "<td>" + "GitHub:" + "</td>";
        r0 += "<td><input type=\"" + "text" + "\" name=\"" + "profiles[github]" + "\" value=\"" + nodeset2attrvalue( ( m.s(j37, c0) ) ) + "\"/></td>";
        r0 += "</tr>";
        r0 += "</tbody>";
        r0 += "</table>";
        r0 += "<hr/>";
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<a class=\"" + "button cancel" + "\" href=\"" + "#" + "\">" + "Отмена" + "</a>";
        r0 += "<input class=\"" + "button submit" + "\" type=\"" + "submit" + "\" value=\"" + "Сохранить" + "\"/>";
        r0 += "</div>";
        r0 += "</form>";
        r0 += "</div>";

        return r0;
    };
    M.t5.j = j32;
    M.t5.a = 0;

    M.matcher = {
        "": {
            "": [
                "t3"
            ],
            "students": [
                "t5",
                "t4"
            ]
        }
    };
    M.imports = [];

    yr.register('students', M);

})();