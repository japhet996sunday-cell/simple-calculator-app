// ===== GET INPUT VALUES =====
function calculate(operator) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result = 0;

  // ===== VALIDATION =====
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "Result: Enter valid numbers";
    return;
  }

  // ===== CALCULATION LOGIC =====
  if (operator === "+") {
    result = num1 + num2;
  } 
  else if (operator === "-") {
    result = num1 - num2;
  } 
  else if (operator === "*") {
    result = num1 * num2;
  } 
  else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
  }

  // ===== DISPLAY RESULT =====
  document.getElementById("result").textContent = "Result: " + result;
}
