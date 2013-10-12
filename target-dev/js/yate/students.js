
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

    var j16 = [ ];

    var j17 = [ 0, 'students' ];

    var j18 = [ 1, 0 ];

    var j19 = [ 0, 'single' ];

    var j20 = [ 0, '_id' ];

    var j21 = [ 0, 'preview' ];

    var j22 = [ 0, 'expanded' ];

    var j23 = [ 0, 'photo' ];

    var j24 = [ 0, 'profiles' ];

    var j25 = [ 0, 'profiles', 0, 'ya' ];

    var j26 = [ 0, 'profiles', 0, 'vk' ];

    var j27 = [ 0, 'profiles', 0, 'facebook' ];

    var j28 = [ 0, 'profiles', 0, 'github' ];

    var j29 = [ 0, 'first_name' ];

    var j30 = [ 0, 'last_name' ];

    var j31 = [ 0, 'about' ];

    // match /
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( (selectNametest('single', c0, [])) )) {
            r0 += m.a(m, selectNametest('students', c0, []), '', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += "<div class=\"" + "header" + "\">" + "Список учащихся" + "</div>";
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

    // match .students
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "student post" + "\" data-id=\"" + nodeset2attrvalue( ( selectNametest('_id', c0, []) ) ) + "\">";
        r0 += "<div class=\"" + "left" + "\">";
        r0 += "<img";
        a0.a = {
            'class': new yr.scalarAttr("avatar")
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
        if ((simpleBoolean('expanded', c0) && simpleBoolean('profiles', c0))) {
            r0 += "<div class=\"" + "social" + "\">";
            if (nodeset2boolean( (m.s(j25, c0)) )) {
                r0 += "<a class=\"" + "ya" + "\" href=\"" + nodeset2attrvalue( ( m.s(j25, c0) ) ) + "\"></a>";
            }
            if (nodeset2boolean( (m.s(j26, c0)) )) {
                r0 += "<a class=\"" + "vk" + "\" href=\"" + nodeset2attrvalue( ( m.s(j26, c0) ) ) + "\"></a>";
            }
            if (nodeset2boolean( (m.s(j27, c0)) )) {
                r0 += "<a class=\"" + "facebook" + "\" href=\"" + nodeset2attrvalue( ( m.s(j27, c0) ) ) + "\"></a>";
            }
            if (nodeset2boolean( (m.s(j28, c0)) )) {
                r0 += "<a class=\"" + "github" + "\" href=\"" + nodeset2attrvalue( ( m.s(j28, c0) ) ) + "\"></a>";
            }
            r0 += "</div>";
        }
        r0 += "</div>";
        r0 += "<div class=\"" + "content" + "\">";
        r0 += "<div class=\"" + "caption" + "\">" + nodeset2xml( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2xml( ( selectNametest('last_name', c0, []) ) ) + "</div>";
        if (nodeset2boolean( (selectNametest('expanded', c0, [])) )) {
            r0 += "<hr/>";
            r0 += "<p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p>";
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t4.j = j17;
    M.t4.a = 0;

    M.matcher = {
        "": {
            "": [
                "t3"
            ],
            "students": [
                "t4"
            ]
        }
    };
    M.imports = [];

    yr.register('students', M);

})();