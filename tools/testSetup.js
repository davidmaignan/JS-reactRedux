/* eslint-disable no-var*/
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5
require('babel-register')();

// Disable webpack-specific features for tests since
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// Configure JSDOM and set global variables to simulate a browser environment for tests.
// var jsdom = require('jsdom').jsdom;
// global.document = jsdom('');
// global.window = document.defaultView;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;

var exposedProperties = ['window', 'navigator', 'document'];

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
