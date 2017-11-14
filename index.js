'use strict';

var style = require('./rules/style.js');
var order = require('./rules/order.js');
var rules = Object.assign(style, order);

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: rules,
};
