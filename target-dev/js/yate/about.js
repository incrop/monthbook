
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
    M.f0 = function f0(m, c0, i0, l0, a0, v0, v1) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "float-wrapper" + "\">";
        r0 += "<div class=\"" + "header" + "\">" + scalar2xml( ( v0 ) ) + "</div>";
        if ((v1)) {
            r0 += "<a href=\"" + "#" + "\" class=\"" + "button new" + "\">" + scalar2xml( ( v1 ) ) + "</a>";
        }
        r0 += "</div>";

        return r0;
    };

    // func post_caption(caption) : scalar
    M.f1 = function f1(m, c0, i0, l0, v2) {
        var r0 = '';

        return r0;
    };

    var j0 = [ ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += m.f('f0', c0, i0, l0, a0, "О школе");
        r0 += "<div class=\"" + "post" + "\">";
        r0 += "<p>";
        r0 += "Школа разработки интерфейсов (ШРИ) организована";
        r0 += "компанией Яндекс в 2012 году для студентов ";
        r0 += "старших курсов и недавних выпускников вузов, желающих";
        r0 += "развиваться в области фронтенд-разработки веб-сервисов.";
        r0 += "</p>";
        r0 += "<p>";
        r0 += "Обучение в Школе разработки интерфейсов включает в себя две части. Курс лекций, посвященных различным аспектам ";
        r0 += "промышленной фронтенд-разработки, и более практическую часть, связанную непосредственно с разработкой. ";
        r0 += "Тех, кто успешно пройдёт практику, мы с удовольствием пригласим на работу или стажировку в Яндекс.";
        r0 += "</p>";
        r0 += "<p>";
        r0 += "На занятиях сотрудники Яндекса рассказывают об инструментах разработчика, о том, как лучше и эффективнее вести ";
        r0 += "работу в команде, о приёмах, которые позволяют сэкономить время, немного о дизайне. Практику ведут ведущие ";
        r0 += "фронтенд-разработчики Яндекса, разрабатывающие интерфейсы для Поиска, Почты, Карт, Маркета и других сервисов Яндекса.";
        r0 += "</p>";
        r0 += "<p>";
        r0 += "Все вопросы о Школе присылайте на адрес: intern@yandex-team.ru";
        r0 += "</p>";
        r0 += "</div>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        }
    };
    M.imports = [];

    yr.register('about', M);

})();