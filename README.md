micro-templating
===================

[![Build Status](https://travis-ci.org/otiai10/micro-templating.svg?branch=master)](https://travis-ci.org/otiai10/micro-templating)

Respecting [micro-templating](http://ejohn.org/blog/javascript-micro-templating/)

# why

- Want to use [micro-templating](http://ejohn.org/blog/javascript-micro-templating/) on memory
- Want to find tmpl string by NOT `document.getElementById(tpl_name)` BUT `pool[tpl_name]`

# spec

```javascript
// you can generate this pool by using `gulp-micro-templating`
this.MicroTemplates = {"foo":"<a href=\"<%= url %>\"><%= name %></a>"};

var tmpl = require('micro-templating').tmpl;

var html = tmpl("foo", {url:"https://npmjs.org/~otiai10", name:"otiai10"});
// == <a href="https://npmjs.org/~otiai10">otiai10</a>
```
