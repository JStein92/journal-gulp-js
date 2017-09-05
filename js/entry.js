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
