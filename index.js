var semesterCount = 0;

function addSemester() {
  semesterCount++;

  var semesterContainer = document.getElementById('semester-list');

  var semesterDiv = document.createElement('div');
  semesterDiv.className = 'semester';

  var semesterLabel = document.createElement('label');
  semesterLabel.textContent = 'Semester ' + semesterCount + ' SGPA:';
  var semesterInput = document.createElement('input');
  semesterInput.type = 'number';
  semesterInput.step = '0.01';

  semesterDiv.appendChild(semesterLabel);
  semesterDiv.appendChild(semesterInput);

  semesterContainer.appendChild(semesterDiv);
}

function calculateCGPA() {
  var sgpaList = [];

  var semesterInputs = document.getElementsByClassName('semester');

  for (var i = 0; i < semesterInputs.length; i++) {
    var sgpaInput = semesterInputs[i].querySelector('input');
    var sgpaValue = parseFloat(sgpaInput.value);

    if (!isNaN(sgpaValue)) {
      sgpaList.push(sgpaValue);
    }
  }

  var previousCGPA = parseFloat(document.getElementById('previous-cgpa').value) || 0.0;

  var creditHoursList = [20, 20, 22, 21, 22, 21, 18, 18];
  var totalCreditPoints = 0;
  var totalCreditHours = 162;

  for (var j = 0; j < sgpaList.length; j++) {
    var creditPoints = sgpaList[j] * creditHoursList[j];
    totalCreditPoints += creditPoints;
  }

  totalCreditPoints += previousCGPA * (totalCreditHours - sgpaList.length * 20);

  var cgpa = totalCreditPoints / totalCreditHours;

  var cgpaResult = document.getElementById('cgpa-result');
  cgpaResult.textContent = 'Your CGPA is: ' + cgpa.toFixed(2);
}
