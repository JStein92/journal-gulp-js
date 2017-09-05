(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

//
Entry.prototype.wordCount = function(body) {
  var bodyArry = body.split(" ");
  return bodyArry.length;
};

Entry.prototype.vowelCount = function(body) {
  var bodyArry = body.split("");
  var count = 0;



  for (var i = 0; i < bodyArry.length; i++) {
    if (bodyArry[i].toUpperCase() === "A" || bodyArry[i].toUpperCase() === "E" ||bodyArry[i].toUpperCase() === "I" ||bodyArry[i].toUpperCase() === "O" ||bodyArry[i].toUpperCase() === "U")
    {
      count ++;
    }
  };

  return count;

};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require("./../js/entry.js").entryModule;

$(function() {
  $('#entryform').submit(function(e) {
    e.preventDefault();
    var title = $('#entry-title').val();
    var body = $('#entry-body').val();

    $('#title').text("Title: " + title);
    $('#body').text("Entry: " + body);

    var newEntry = new Entry(title,body);
    var count = newEntry.wordCount(body);
    var vowelCount = newEntry.vowelCount(body);

    $('#wordcount').text("Word count: " + count);
    $('#vowelcount').text("Vowels: " + vowelCount);
  });
});

},{"./../js/entry.js":1}]},{},[2]);
