// Calculate the day of the year
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);


// Add links for today until the end of the year
var date = new Date();
document.body.innerHTML += "<p> Remaining Days </p>";
for (var i = day; i < 366; i++) {
  var link = "Plan/" + i + ".html";
  document.body.innerHTML += "<a href=\"" + link + "\">" + i + ", " + date.toDateString() + "</a>"
  document.body.innerHTML += "<br>"

  date.setDate(date.getDate() + 1);
}
document.body.innerHTML += "<br> <hr>";

// Add links for completed days
var date = new Date(now.getFullYear(), 0, 1);
document.body.innerHTML += "<p> Completed Days </p>";
for (var i = 1; i < day; i++) {
  var link = "Plan/" + i + ".html";
  document.body.innerHTML += "<a href=\"" + link + "\">" + i + ", " + date.toDateString() + "</a>"
  document.body.innerHTML += "<br>"
  date.setDate(date.getDate() + 1);
}