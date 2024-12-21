// Toggle between dark mode and light mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    const body = document.body;

    // Toggle the light-mode class
    body.classList.toggle("light-mode");

    // Update the button text based on the current mode
    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "Switch to Dark Mode";
    } else {
        themeToggle.textContent = "Switch to Light Mode";
    }
});

// Student Grader
function studentMarks(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60) {
        return "B";
    } else if (mark >= 50) {
        return "C";
    } else if (mark >= 40) {
        return "D";
    } else {
        return "E";
    }
}

function gradeGenerator(mark) {
    if (isNaN(mark) || mark < 0 || mark > 100) {
        return "Invalid input marks";
    }
    const grade = studentMarks(mark);
    return `The student's grade is: ${grade}`;
}

function displayGrade() {
    const mark = parseFloat(document.getElementById("marks").value);
    const result = gradeGenerator(mark);
    document.getElementById("gradeResult").textContent = result;
}

// Speed Calculator
function calculateSpeed() {
    const distance = parseFloat(document.getElementById("distance").value);
    const time = parseFloat(document.getElementById("time").value);

    if (isNaN(distance) || distance <= 0 || isNaN(time) || time <= 0) {
        document.getElementById("speedResult").textContent = "Please enter valid positive numbers for distance and time.";
        return;
    }

    const speed = distance / time;
    document.getElementById("speedResult").textContent = `Speed: ${speed.toFixed(2)} km/h`;

    checkSpeed(speed);
}

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    let resultMessage;

    if (speed < speedLimit) {
        resultMessage = "Ok";
    } else {
        const overSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(overSpeed / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            resultMessage = "License suspended";
        } else {
            resultMessage = `Points: ${demeritPoints}`;
        }
    }

    document.getElementById("speedResult").textContent += ` | ${resultMessage}`;
}

// Net Salary Calculator
function calculateNetSalary(basicSalary, benefits) {
    const taxRate = 0.2;
    const nhifRate = 0.1;
    const nssfRate = 0.2;

    const grossSalary = basicSalary + benefits;
    const tax = grossSalary * taxRate;
    const nhif = grossSalary * nhifRate;
    const nssf = grossSalary * nssfRate;

    const netSalary = grossSalary - (tax + nhif + nssf);

    return {
        grossSalary,
        tax,
        nhif,
        nssf,
        netSalary
    };
}

function displayNetSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value);

    if (isNaN(basicSalary) || basicSalary < 0 || isNaN(benefits) || benefits < 0) {
        document.getElementById("salaryResult").textContent = "Please enter valid numbers for basic salary and benefits.";
        return;
    }

    const result = calculateNetSalary(basicSalary, benefits);

    document.getElementById("salaryResult").innerHTML = `
        <strong>Net Salary Calculation Results:</strong><br>
        Gross Salary: ${result.grossSalary.toFixed(2)}<br>
        Tax (20%): ${result.tax.toFixed(2)}<br>
        NHIF Deductions (10%): ${result.nhif.toFixed(2)}<br>
        NSSF Deductions (20%): ${result.nssf.toFixed(2)}<br>
        <strong>Net Salary: ${result.netSalary.toFixed(2)}</strong>
    `;
}
