const display = document.getElementById('display');

    // Append a value to the display
    function appendValue(value) {
      display.value += value;
    }

    // Clear the display
    function clearDisplay() {
      display.value = '';
    }

    // Calculate the result
    function calculate() {
      try {
        // Use eval to calculate the result
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    }
  
    // Toggle between positive and negative values
function toggleSign() {
  if (display.value) {
    display.value = display.value.startsWith('-') 
      ? display.value.substring(1) 
      : '-' + display.value;
  }
}

// Calculate percentage
function calculatePercentage() {
  if (display.value) {
    display.value = parseFloat(display.value) / 100;
  }
}