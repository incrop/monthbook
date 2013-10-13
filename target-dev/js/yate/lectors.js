
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

    var j6 = [ 0, 'preview_url' ];

    var j7 = [ 0, 'expanded' ];

    var j8 = [ 0, 'photo_url' ];

    var j9 = [ 0, 'first_name' ];

    var j10 = [ 0, 'last_name' ];

    var j11 = [ 0, 'lector_id' ];

    var j13 = [ 0, 'about' ];

    var j14 = [ 0, 'name' ];

    var j15 = [ 0, 'url' ];

    // match /
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        if (nodeset2boolean( (selectNametest('single', c0, [])) )) {
            r0 += m.a(m, selectNametest('lectors', c0, []), '', a0)
        } else {
            r0 += closeAttrs(a0);
            r0 += m.f('f2', c0, i0, l0, a0, "Список лекторов");
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

    // match .lectors
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        function p0(m, c0, i0, l0) {
            return c0.name == "$oid";
        }

        var j5 = [ 0, '_id', 0, '*', 2, p0 ];

        //  var lector_id : nodeset
        var v6 = m.s(j5, c0);

        function p1(m, c0, i0, l0) {
            return cmpNN(selectNametest('lector_id', c0, []), v6);
        }

        var j12 = [ 1, 1, 0, 'lectures', 2, p1 ];

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "lector post" + "\" data-id=\"" + nodeset2attrvalue( ( v6 ) ) + "\">";
        r0 += "<div class=\"" + "left" + "\">";
        r0 += "<img";
        a0.a = {
            'class': new yr.scalarAttr("avatar")
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
        r0 += "<div class=\"" + "caption" + "\">" + nodeset2xml( ( selectNametest('first_name', c0, []) ) ) + " " + nodeset2xml( ( selectNametest('last_name', c0, []) ) ) + "</div>";
        r0 += "</div>";
        if (nodeset2boolean( (selectNametest('expanded', c0, [])) )) {
            //  var lector_lectures : nodeset
            var v7 = m.s(j12, c0);

            if (nodeset2boolean( (selectNametest('about', c0, [])) )) {
                r0 += "<hr/>";
                r0 += "<p>" + nodeset2xml( ( selectNametest('about', c0, []) ) ) + "</p>";
            }
            if (nodeset2boolean( (v7) )) {
                r0 += "<hr/>";
                r0 += "<div class=\"" + "caption" + "\">" + "Лекции:" + "</div>";
                var items0 = v7;
                for (var i1 = 0, l1 = items0.length; i1 < l1; i1++) {
                    var c1 = items0[ i1 ];
                    r0 += "<p>";
                    r0 += nodeset2xml( ( selectNametest('name', c1, []) ) ) + ": ";
                    r0 += "<a href=\"" + nodeset2attrvalue( ( selectNametest('url', c1, []) ) ) + "\">" + nodeset2xml( ( selectNametest('url', c1, []) ) ) + "</a>";
                    r0 += "</p>";
                }
            }
        }
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t2.j = j2;
    M.t2.a = 0;

    M.matcher = {
        "": {
            "": [
                "t1"
            ],
            "lectors": [
                "t2"
            ]
        }
    };
    M.imports = [];

    yr.register('lectors', M);

})();