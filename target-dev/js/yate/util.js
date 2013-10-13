
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
    M.f7 = function f7(m, c0, i0, l0, a0, v16, v17) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "header" + "\">" + scalar2xml( ( v16 ) ) + "</div>";
        if ((v17)) {
            r0 += "<a href=\"" + "#" + "\" class=\"" + "button new" + "\">" + scalar2xml( ( v17 ) ) + "</a>";
        }
        r0 += "<img style=\"" + "display:none;" + "\" class=\"" + "loader" + "\" src=\"" + "img/ajax-loader.gif" + "\"/>";
        r0 += "</div>";

        return r0;
    };

    // func post_caption(caption) : scalar
    M.f8 = function f8(m, c0, i0, l0, v18) {
        var r0 = '';

        return r0;
    };

    M.matcher = {};
    M.imports = [];

    yr.register('util', M);

})();