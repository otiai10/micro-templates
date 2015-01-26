gulp-micro-template
===================

[![Build Status](https://travis-ci.org/otiai10/micro-templates.svg?branch=master)](https://travis-ci.org/otiai10/micro-templates)

Respecting [micro-templating](http://ejohn.org/blog/javascript-micro-templating/)

# why

- Want to use [micro-templating](http://ejohn.org/blog/javascript-micro-templating/) on memory
- Want to find tmpl string by NOT `document.getElementById(tpl_name)` BUT `pool[tpl_name]`

# spec

```
// you can generate this pool by using `gulp-micro-templates`
this.MicroTemplates = {"foo":"<a href=\"<%= url %>\"><%= name %></a>"};

var tmpl = 
```
