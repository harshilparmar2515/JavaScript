<!DOCTYPE html>
<html>
<head>
  <title>Grade Calculator</title>
  <style>
    body { font-family: Arial; padding: 30px; text-align: center; background: #f0f8ff; }
    input { padding: 15px; font-size: 20px; width: 150px; border-radius: 8px; border: 2px solid #4CAF50; }
    button { padding: 15px 25px; font-size: 18px; background: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer; }
    button:hover { background: #45a049; }
    #result { font-size: 28px; margin-top: 20px; padding: 20px; border-radius: 10px; }
    .grade-A { background: #d4edda; color: #155724; }
    .grade-B { background: #fff3cd; color: #856404; }
    .grade-C { background: #f8d7da; color: #721c24; }
  </style>
</head>
<body>
  <h1>🎓 Grade Calculator</h1>
  <p>Enter marks (0-100):</p>
  <input type="number" id="marks" min="0" max="100" placeholder="85">
  <br><br>
  <button onclick="calculateGrade()">Get Grade</button>
  <div id="result"></div>

  <script>
    function calculateGrade() {
      let marks = parseInt(document.getElementById('marks').value);
      let result = document.getElementById('result');
      
      if (marks > 100 || marks < 0 || isNaN(marks)) {
        result.innerHTML = "❌ Enter valid marks (0-100)";
        result.className = "";
        return;
      }
      
      let grade;
      if (marks >= 90) grade = "A+ 🎉";
      else if (marks >= 80) grade = "A ✌️";
      else if (marks >= 70) grade = "B+ 👍";
      else if (marks >= 60) grade = "B 🙂";
      else if (marks >= 50) grade = "C 😐";
      else if (marks >= 40) grade = "D 😕";
      else grade = "F ❌";
      
      result.innerHTML = `Your Grade: <span style="font-size:36px;">${grade}</span><br>Marks: ${marks}/100`;
      result.className = `grade-${grade.charAt(0).toUpperCase()}`;
    }
    
    // Enter key support
    document.getElementById('marks').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') calculateGrade();
    });
  </script>
</body>
</html>
