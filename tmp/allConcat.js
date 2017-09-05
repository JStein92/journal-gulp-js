var Entry = require("./../js/entry.js").entryModule;

$(function() {
  $('#entryform').submit(function(e) {
    e.preventDefault();
    $('.panel, .well').show();
    var title = $('#entry-title').val();
    var body = $('#entry-body').val();

    $('#title').text(title);
    $('#body').text(body);

    var newEntry = new Entry(title,body);
    var count = newEntry.wordCount(body);
    var vowelCount = newEntry.vowelCount(body);
    var consonantCount = newEntry.consonantCount(body);
    var teaserText = newEntry.getTeaser(body);

    $('#wordcount').text("Words: " + count);
    $('#vowelcount').text("Vowels: " + vowelCount);
    $('#consonantcount').text("Consonants: " + consonantCount);
    $('#teaser').text("Teaser: " + teaserText);
  });
});
