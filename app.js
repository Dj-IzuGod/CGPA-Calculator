const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var courses = [
  "MTH101",
  "PHY101",
  "CHM101",
  "BIO101",
  "GST101",
  "GST103",
  "ENG101",
  "ENG103",
];
var workItems = [];
var courseUnit = [4, 3, 3, 3, 2, 2, 1, 1];
var addedCourses = [""];
var addedCoursesCapital = addedCourses.toUpperCase();
var addedUnits = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  var today = new Date();

  var day = "";
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("GP Calculator", {
    listTitle: day,
    newCourse: courses,
    newUnit: courseUnit,
    addedCourse: addedCoursesCapital,
    addedUnit: addedUnits,
  });
});

app.post("/", function (req, res) {
  var course = req.body.newCourse;
  var unit = req.body.newUnit;

  addedCourses.push(course);
  addedUnits.push(unit);
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newList: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function (req, res) {
  console.log("Server started on Port 3000");
});
