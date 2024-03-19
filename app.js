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
    title: "100L Semester 1",
    newCourse: courses,
    newUnit: courseUnit,
    addedCourse: addedCourses,
    addedUnit: addedUnits,
  });
});

app.get("/semester2", function (req, res) {
  res.render("GP Calculator", {
    title: "100LVL Semester 2",
    newCourse: courses2,
    newUnit: courseUnit2,
    addedCourse: addedCourses2,
    addedUnit: addedUnits2,
  });
});

app.post("/", function (req, res) {
  if (req.body.listSubmit == "100LVL") {
    var course2 = req.body.newCourse;
    var unit2 = req.body.newUnit;
    addedCourses2.push(course2);
    addedUnits2.push(unit2);
  } else {
    var course = req.body.newCourse;
    var unit = req.body.newUnit;
    addedCourses.push(course);
    addedUnits.push(unit);
  }
});

app.listen(3000, function (req, res) {
  console.log("Server started on Port 3000");
});
