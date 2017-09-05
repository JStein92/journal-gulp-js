function Entry(title, body) {
  this.title = title;
  this.body = body;
}

var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']

//
Entry.prototype.wordCount = function(stringToCount) {
  var bodyArry = stringToCount.split(" ");
  return bodyArry.length;
};

Entry.prototype.getTeaser = function(stringToCount) {
  var wordsInString = stringToCount.split(" ");
  var returnString = "";

  for (var i = 0; i < wordsInString.length; i++) {

    var word = wordsInString[i];
    var lastLetter = word[word.length-1];
    returnString += word + " ";
    if (lastLetter === "." || lastLetter === "!" || lastLetter === "?" || i === 7)
    {
      return returnString;
    }

  }

  return returnString;
}

Entry.prototype.consonantCount = function(stringToCount) {
  var bodyArry = stringToCount.split("");
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

Entry.prototype.vowelCount = function(stringToCount) {
  var bodyArry = stringToCount.split("");
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
