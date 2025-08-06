function vibrate() {

  if (navigator.vibrate) {

    navigator.vibrate(30);

  }

}

function appendToDisplay(value) {

  vibrate();

  document.getElementById("display").value += value;

}

function clearDisplay() {

  vibrate();

  document.getElementById("display").value = "";

}

function calculate() {

  vibrate();

  try {

    let expression = document.getElementById("display").value;

    // Convert % into *0.01

    expression = expression.replace(/(\d+)%/g, '($1*0.01)');

    const result = eval(expression);

    document.getElementById("display").value = result;

    addToHistory(expression, result);

  } catch (e) {

    document.getElementById("display").value = "Error";

  }

}

function addToHistory(expression, result) {

  const historyDiv = document.getElementById("history");

  const entry = document.createElement("div");

  entry.textContent = `${expression} = ${result}`;

  historyDiv.prepend(entry);

}
