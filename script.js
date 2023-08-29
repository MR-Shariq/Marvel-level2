document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultsDiv = document.getElementById("results");
  
    calculateBtn.addEventListener("click", function() {
      const nameInputs = document.querySelectorAll(".student-name");
      const marksInputs = document.querySelectorAll(".student-marks");
  
      let totalMarks = 0;
      const students = [];
  
      for (let i = 0; i < nameInputs.length; i++) {
        const name = nameInputs[i].value;
        const marks = parseInt(marksInputs[i].value);
  
        totalMarks += marks;
  
        students.push({ name, marks });
      }
  
      const classAverage = totalMarks / nameInputs.length;
  
      const sortedStudents = students.sort((a, b) => b.marks - a.marks);
      let rankings = "Rankings:<br>";
  
      sortedStudents.forEach((student, index) => {
        const percentage = (student.marks / 100) * 100;
        rankings += `${index + 1}. ${student.name} - ${percentage.toFixed(2)}%<br>`;
      });
  
      const classAverageElement = document.getElementById("class-average");
      classAverageElement.innerHTML = `Class Average: ${classAverage.toFixed(2)}`;
  
      const rankingsElement = document.getElementById("rankings");
      rankingsElement.innerHTML = rankings;
    });
  });
  