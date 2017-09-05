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
