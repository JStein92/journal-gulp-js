(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

//
Entry.prototype.wordCount = function(body) {
  var bodyArry = body.split(" ");
  return bodyArry.length;
};

Entry.prototype.consonantCount = function(body) {
  var bodyArry = body.split("");
  var count = 0;

  for (var i = 0; i < bodyArry.length; i++) {
    for (var j = 0; j < consonants.length; j++) {
      if (bodyArry[i].toUpperCase() === consonants[j]) {
        count++;
      }
    }
  }

  return count;
}

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
    var consonantCount = newEntry.consonantCount(body);

    $('#wordcount').text("Word count: " + count);
    $('#vowelcount').text("Vowels: " + vowelCount);
    $('#consonantcount').text("Consonants: " + consonantCount);
  });
});

},{"./../js/entry.js":1}]},{},[2]);
