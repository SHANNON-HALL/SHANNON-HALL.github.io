// Calculate the day of the year
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

var element = document.getElementById("test");

// Add links for today until the end of the year
var date = new Date();
document.getElementById("test").innerHTML += "<p> Remaining Days </p>";
for (var i = day; i < 366; i++) {
  var link = "Bible Reading Plan/Plan/" + i + ".html";
  element.innerHTML += "<a href=\"" + link + "\">" + i + ", " + date.toDateString() + "</a>"
  element.innerHTML += "<br>"

  date.setDate(date.getDate() + 1);
}
element.innerHTML += "<br> <hr>";

// Add links for completed days
var date = new Date(now.getFullYear(), 0, 1);
element.innerHTML += "<p> Completed Days </p>";
for (var i = 1; i < day; i++) {
  var link = "Bible Reading Plan/Plan/" + i + ".html";
  element.innerHTML += "<a href=\"" + link + "\">" + i + ", " + date.toDateString() + "</a>"
  element.innerHTML += "<br>"
  date.setDate(date.getDate() + 1);
}