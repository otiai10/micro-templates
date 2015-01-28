// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(exports){
  var cache = {};
  exports.tmpl = function tmpl(str, data){
    // TODO: #1 optional namespace
    var pool = global['MicroTemplates'] || {};
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn;
    if (str && !/\W/.test(str)) {
       fn = cache[str] = cache[str] || tmpl(pool[str]);
    } else {
      var code =
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');";
     fn = new Function("obj", code);
    }

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})(module.exports);