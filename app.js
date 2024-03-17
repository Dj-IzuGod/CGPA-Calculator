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
var courses2 = [
  "MTH102",
  "PHY102",
  "CHM102",
  "BIO102",
  "GST102",
  "GST102",
  "ENG102",
  "ENG104",
];
var courseUnit2 = [4, 3, 3, 3, 2, 2, 1, 1];
var addedCourses2 = [];
var addedUnits2 = [];
var courseUnit = [4, 3, 3, 3, 2, 2, 1, 1];
var addedCourses = [];
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
    newCourse2: courses2,
    newUnit2: courseUnit2,
    addedCourse: addedCourses,
    addedUnit: addedUnits,
    addedCourse2: addedCourses2,
    addedUnit2: addedUnits2,
  });
});

app.post("/", function (req, res) {
  var course = req.body.newCourse;
  var caseCourse = course.toUpperCase();
  var caseCourse2 = course2.toUpperCase();
  var unit = req.body.newUnit;
  var course2 = req.body.newCourse2;
  var unit2 = req.body.newUnit2;
  addedCourses.push(caseCourse);
  addedUnits.push(unit);
  addedCourses2.push(caseCourse2);
  addedUnits2.push(unit2);
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
