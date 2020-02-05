 (function() { function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "html,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\u003C\u002Fstyle\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"css\u002Ffoot.css\"\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"foot\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"text-align:center\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "貢獻者列表\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"credit\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"roles sm horizontal\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "主要貢獻者\u003C\u002Fdiv\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate ["Howard", "John Lin", "Jimmy Hsu", "wjwang", "kaing"]
;(function(){
  var $$obj = ["Howard", "John Lin", "Jimmy Hsu", "wjwang", "kaing"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var name = $$obj[pug_index0];
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"#\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var name = $$obj[pug_index0];
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"#\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var i = $$obj[pug_index1];
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"roles sm\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "工程師\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate ["Howard", "John Lin", "Jimmy Hsu", "wjwang", "kaing"]
;(function(){
  var $$obj = ["Howard", "John Lin", "Jimmy Hsu", "wjwang", "kaing"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var name = $$obj[pug_index2];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"#\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var name = $$obj[pug_index2];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"#\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var i = $$obj[pug_index1];
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"roles sm\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "工程師\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate ["Howard", "John Lin", "Jimmy Hsu", "wjwang", "kaing"]
;(function(){
  var $$obj = ["Howard", "John Lin", "Jimmy Hsu", "wjwang", "kaing"];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var name = $$obj[pug_index3];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"#\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var name = $$obj[pug_index3];
;pug_debug_line = 29;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"#\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbr\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"roles lg\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "協力社群\u003C\u002Fdiv\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"list\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"https:\u002F\u002Fgoodideas-studio.com\u002F\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\" style=\"background-image:url(assets\u002Fimg\u002Fgoodideas.png)\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "好想工作室\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\"\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\" style=\"background-image:url(assets\u002Fimg\u002Fgoodideas.png)\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "g0v 台南小松\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca class=\"role\" href=\"https:\u002F\u002Fg0v.tw\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"avatar\" style=\"background-image:url(https:\u002F\u002Fg0v.tw\u002Fimgs\u002Fg0v-horizontal-transparent-darkbackground-m.png)\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "台灣零時政府社群\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ccenter style=\"margin:3em 0\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv style=\"font-size:12px;color:#999\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "POWERED BY\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"https:\u002F\u002Fg0v.tw\u002Fimgs\u002Fg0v-horizontal-transparent-darkbackground-m.png\"\u003E\u003C\u002Fcenter\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 