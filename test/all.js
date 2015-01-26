require('mocha');
require('chai').should();
var tmpl = require('../').tmpl;

// TODO: #1
MicroTemplates = {
  tpl00: "<a href=\"<%= url %>\"><%= name %></a>"
};
describe('micro-template', function () {
  it('should execute micro-template', function() {
    var result = tmpl('tpl00', {url:'https://npmjs.org/~otiai10',name:'otiai10'});
    result.should.equal('<a href="https://npmjs.org/~otiai10">otiai10</a>');
  });
});