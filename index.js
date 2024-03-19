document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");

  calculateButton.addEventListener("click", function () {
    const tableRows = document.querySelectorAll(".semester1Table tbody tr");

    let totalCreditUnits = 0;
    let totalGradePoints = 0;

    tableRows.forEach(function (row) {
      const credit = parseFloat(row.children[2].innerText);
      const grade = row.children[3].querySelector("select").value;

      let gradePoint;
      switch (grade) {
        case "a":
          gradePoint = 5.0;
          break;
        case "b":
          gradePoint = 4.0;
          break;
        case "c":
          gradePoint = 3.0;
          break;
        case "d":
          gradePoint = 2.0;
          break;
        case "e":
          gradePoint = 1.0;
          break;
        case "f":
          gradePoint = 0.0;
          break;
        default:
          gradePoint = 0.0;
      }

      totalCreditUnits += credit;
      totalGradePoints += credit * gradePoint;
    });

    const cgpa = totalGradePoints / totalCreditUnits;

    // Display the CGPA
    const cgpaDisplay = document.getElementById("cgpa");
    cgpaDisplay.textContent = "Your CGPA is: " + cgpa.toFixed(2);
  });
});
