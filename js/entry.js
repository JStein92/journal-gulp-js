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
