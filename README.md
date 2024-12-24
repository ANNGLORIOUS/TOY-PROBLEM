# TOY-PROBLEMS Project

This project is a collection of interactive tools implemented as a web application to solve everyday computational problems. The main features include a **Student Grader**, a **Speed and Demerit Points Calculator**, and a **Net Salary Calculator**. The interface is user-friendly, with a built-in theme toggler for light and dark mode.

---

## Features

### 1. Theme Toggler
- A button to switch between dark mode and light mode.
- Updates the website's color scheme dynamically for better accessibility and user preference.

### 2. Student Grader
- Accepts student marks (0-100) and determines the grade based on the following criteria:
  - A: Above 79
  - B: 60 - 79
  - C: 50 - 59
  - D: 40 - 49
  - E: Below 40
- Displays the corresponding grade or an error message for invalid input.

### 3. Speed and Demerit Points Calculator
- Calculates the speed of a vehicle based on distance (in kilometers) and time (in hours).
- Determines whether the driver is within the speed limit (70 km/h) or assigns demerit points:
  - 1 demerit point for every 5 km/h above the speed limit.
  - Suspends the license if demerit points exceed 12.
- Displays appropriate messages for invalid inputs.

### 4. Net Salary Calculator
- Computes the net salary of an employee based on basic salary and benefits.
- Deducts:
  - Tax: 20% of gross salary
  - NHIF: 10% of gross salary
  - NSSF: 20% of gross salary
- Displays detailed calculations including gross salary, tax, NHIF, NSSF, and the net salary.

---

## Technologies Used

### Frontend
- **HTML**: Markup structure for the web application.
- **CSS**: Styling for light and dark mode, input fields, buttons, and overall layout.
- **JavaScript**: Core functionality for the interactive features.

---

## File Structure

```plaintext
.
|-- index.html         # Main HTML file
|-- toy.css            # Stylesheet for the application
|-- toy.js             # JavaScript for functionality
```

---

## How to Use

### Setup
1. Clone or download the project repository.
2. Open `index.html` in any modern web browser.

### Usage
1. **Theme Toggler**: Click the "Switch to Light/Dark Mode" button to toggle themes.
2. **Student Grader**:
   - Enter marks (0-100) in the input field.
   - Click "Get Grade" to see the result.
3. **Speed and Demerit Points Calculator**:
   - Enter distance (km) and time (hours).
   - Click "Calculate Speed" to view the speed and demerit points.
4. **Net Salary Calculator**:
   - Enter the basic salary and benefits.
   - Click "Calculate" to see detailed net salary calculations.

---

## Validation
- **Input Validation**: Ensures that user inputs are within the required range and type.
- **Error Handling**: Displays appropriate messages for invalid inputs.

---

## Customization
- Modify `toy.css` for additional styling or to change the color scheme.
- Extend the functionality by adding new sections in `index.html` and implementing logic in `toy.js`.

---

## Future Improvements
- Add more calculators or tools to the application.
- Allow users to export results to a PDF or save them locally.
- Implement localization for multilingual support.



