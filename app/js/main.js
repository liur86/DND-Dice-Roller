//Adds event listener to roll dice button
document.getElementById('random').addEventListener('click', rollDice);

//Rolls dice
function rollDice() {
  //Checks for integers present in number of dice boxes
  var numD2 = parseInt(document.getElementById('num-dice-d2').value);
  var numD4 = parseInt(document.getElementById('num-dice-d4').value);
  var numD6 = parseInt(document.getElementById('num-dice-d6').value);
  var numD8 = parseInt(document.getElementById('num-dice-d8').value);
  var numD10 = parseInt(document.getElementById('num-dice-d10').value);
  var numD12 = parseInt(document.getElementById('num-dice-d12').value);
  var numD20 = parseInt(document.getElementById('num-dice-d20').value);
  var numD100 = parseInt(document.getElementById('num-dice-d100').value);

  //Checks for plus or minus modifiers
  var modTypeD2 = document.getElementById('mod-type-d2');
  var valueTypeD2 = modTypeD2.options[modTypeD2.selectedIndex].value;

  var modTypeD4 = document.getElementById('mod-type-d4');
  var valueTypeD4 = modTypeD4.options[modTypeD4.selectedIndex].value;

  var modTypeD6 = document.getElementById('mod-type-d6');
  var valueTypeD6 = modTypeD6.options[modTypeD6.selectedIndex].value;

  var modTypeD8 = document.getElementById('mod-type-d8');
  var valueTypeD8 = modTypeD8.options[modTypeD8.selectedIndex].value;

  var modTypeD10 = document.getElementById('mod-type-d10');
  var valueTypeD10 = modTypeD10.options[modTypeD10.selectedIndex].value;

  var modTypeD12 = document.getElementById('mod-type-d12');
  var valueTypeD12 = modTypeD12.options[modTypeD12.selectedIndex].value;

  var modTypeD20 = document.getElementById('mod-type-d20');
  var valueTypeD20 = modTypeD20.options[modTypeD20.selectedIndex].value;

  var modTypeD100 = document.getElementById('mod-type-d100');
  var valueTypeD100 = modTypeD100.options[modTypeD100.selectedIndex].value;

  //Checks for modifier values
  var modD2 = parseInt(document.getElementById('modifier-d2').value);
  var modD4 = parseInt(document.getElementById('modifier-d4').value);
  var modD6 = parseInt(document.getElementById('modifier-d6').value);
  var modD8 = parseInt(document.getElementById('modifier-d8').value);
  var modD10 = parseInt(document.getElementById('modifier-d10').value);
  var modD12 = parseInt(document.getElementById('modifier-d12').value);
  var modD20 = parseInt(document.getElementById('modifier-d20').value);
  var modD100 = parseInt(document.getElementById('modifier-d100').value);

  //Initalizes and resets roll values
  var d2rolls = [];
  var d4rolls = [];
  var d6rolls = [];
  var d8rolls = [];
  var d10rolls = [];
  var d12rolls = [];
  var d20rolls = [];
  var d100rolls = [];

  //Checks if number of dice is an integer
  if (Number.isInteger(numD2)) {
    //Checks if modifier is a plus
    if (valueTypeD2 === 'plus' && Number.isInteger(modD2)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD2; i++) {
        d2rolls.push(roll(2) + modD2);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD2 === 'minus' && Number.isInteger(modD2)) {
      //Adds rolls to roll value array minus modifier
      for (let i = 0; i < numD2; i++) {
        d2rolls.push(roll(2) - modD2);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD2; i++) {
        d2rolls.push(roll(2));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD4)) {
    //Checks if modifier is a plus
    if (valueTypeD4 === 'plus' && Number.isInteger(modD4)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD4; i++) {
        d4rolls.push(roll(4) + modD4);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD4 === 'minus' && Number.isInteger(modD4)) {
      for (let i = 0; i < numD4; i++) {
        d4rolls.push(roll(4) - modD4);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD4; i++) {
        d4rolls.push(roll(4));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD6)) {
    //Checks if modifier is a plus
    if (valueTypeD6 === 'plus' && Number.isInteger(modD6)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD6; i++) {
        d6rolls.push(roll(6) + modD6);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD6 === 'minus' && Number.isInteger(modD6)) {
      for (let i = 0; i < numD6; i++) {
        d6rolls.push(roll(6) - modD6);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD6; i++) {
        d6rolls.push(roll(6));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD8)) {
    //Checks if modifier is a plus
    if (valueTypeD8 === 'plus' && Number.isInteger(modD8)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD8; i++) {
        d8rolls.push(roll(8) + modD8);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD2 === 'minus' && Number.isInteger(modD8)) {
      for (let i = 0; i < numD8; i++) {
        d8rolls.push(roll(8) - modD8);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD8; i++) {
        d8rolls.push(roll(8));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD10)) {
    //Checks if modifier is a plus
    if (valueTypeD10 === 'plus' && Number.isInteger(modD10)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD10; i++) {
        d10rolls.push(roll(10) + modD10);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD10 === 'minus' && Number.isInteger(modD10)) {
      for (let i = 0; i < numD10; i++) {
        d10rolls.push(roll(10) - modD10);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD10; i++) {
        d10rolls.push(roll(10));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD12)) {
    //Checks if modifier is a plus
    if (valueTypeD12 === 'plus' && Number.isInteger(modD12)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD12; i++) {
        d12rolls.push(roll(12) + modD12);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD12 === 'minus' && Number.isInteger(modD12)) {
      for (let i = 0; i < numD12; i++) {
        d12rolls.push(roll(12) - modD12);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD12; i++) {
        d12rolls.push(roll(12));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD20)) {
    //Checks if modifier is a plus
    if (valueTypeD20 === 'plus' && Number.isInteger(modD20)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD20; i++) {
        d20rolls.push(roll(20) + modD20);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD20 === 'minus' && Number.isInteger(modD20)) {
      for (let i = 0; i < numD20; i++) {
        d20rolls.push(roll(20) - modD20);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD20; i++) {
        d20rolls.push(roll(20));
      }
    }
  }

  //Checks if number of dice is an integer
  if (Number.isInteger(numD100)) {
    //Checks if modifier is a plus
    if (valueTypeD100 === 'plus' && Number.isInteger(modD100)) {
      //Adds rolls to roll value array plus modifier
      for (let i = 0; i < numD100; i++) {
        d100rolls.push(roll(100) + modD100);
      }
    }
    //Checks if modifier is a minus
    else if (valueTypeD100 === 'minus' && Number.isInteger(modD100)) {
      for (let i = 0; i < numD100; i++) {
        d100rolls.push(roll(100) - modD100);
      }
    }
    else {
      //Adds rolls to roll array with no modifier
      for (let i = 0; i < numD100; i++) {
        d100rolls.push(roll(100));
      }
    }
  }

  //Checks if d2 was rolled
  if (d2rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d2').innerHTML = "d2: " + d2rolls.join(', ') + "<br> Total: " + sum(d2rolls);
  }
  else {
    document.getElementById('results-d2').innerHTML = "";
  }

  //Checks if d4 was rolled
  if (d4rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d4').innerHTML = "d4: " + d4rolls.join(', ') + "<br> Total: " + sum(d4rolls);
  }
  else {
    document.getElementById('results-d4').innerHTML = "";
  }

  //Checks if d6 was rolled
  if (d6rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d6').innerHTML = "d6: " + d6rolls.join(', ') + "<br> Total: " + sum(d6rolls);
  }
  else {
    document.getElementById('results-d6').innerHTML = "";
  }

  //Checks if d8 was rolled
  if (d8rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d8').innerHTML = "d8: " + d8rolls.join(', ') + "<br> Total: " + sum(d8rolls);
  }
  else {
    document.getElementById('results-d8').innerHTML = "";
  }

  //Checks if d10 was rolled
  if (d10rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d10').innerHTML = "d10: " + d10rolls.join(', ') + "<br> Total: " + sum(d10rolls);
  }
  else {
    document.getElementById('results-d10').innerHTML = "";
  }

  //Checks if d12 was rolled
  if (d12rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d12').innerHTML = "d12: " + d12rolls.join(', ') + "<br> Total: " + sum(d12rolls);
  }
  else {
    document.getElementById('results-d12').innerHTML = "";
  }

  //Checks if d20 was rolled
  if (d20rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d20').innerHTML = "d20: " + d20rolls.join(', ') + "<br> Total: " + sum(d20rolls);
  }
  else {
    document.getElementById('results-d20').innerHTML = "";
  }

  //Checks if d100 was rolled
  if (d100rolls.length > 0) {
    //Shows roll results
    document.getElementById('results-d100').innerHTML = "d100: " + d100rolls.join(', ') + "<br> Total: " + sum(d100rolls);
  }
  else {
    document.getElementById('results-d100').innerHTML = "";
  }

  document.getElementById('total').innerHTML = "Overall Total: " + sum(d2rolls.concat(d4rolls, d6rolls, d8rolls, d10rolls, d12rolls, d20rolls, d100rolls));

  //Resets all input fields
  resetFields();
}

//Sums all elements in array
function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

//Rolls a random number
function roll(max) {
  return getRandomInt(1, max);
}

//Returns random int between min and max, inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Resets all input fields
function resetFields() {
  document.getElementById('num-dice-d2').value = "";
  document.getElementById('num-dice-d4').value = "";
  document.getElementById('num-dice-d6').value = "";
  document.getElementById('num-dice-d8').value = "";
  document.getElementById('num-dice-d10').value = "";
  document.getElementById('num-dice-d12').value = "";
  document.getElementById('num-dice-d20').value = "";
  document.getElementById('num-dice-d100').value = "";

  document.getElementById('mod-type-d2').selectedIndex = 0;
  document.getElementById('mod-type-d4').selectedIndex = 0;
  document.getElementById('mod-type-d6').selectedIndex = 0;
  document.getElementById('mod-type-d8').selectedIndex = 0;
  document.getElementById('mod-type-d10').selectedIndex = 0;
  document.getElementById('mod-type-d12').selectedIndex = 0;
  document.getElementById('mod-type-d20').selectedIndex = 0;
  document.getElementById('mod-type-d100').selectedIndex = 0;

  document.getElementById('modifier-d2').value = "";
  document.getElementById('modifier-d4').value = "";
  document.getElementById('modifier-d6').value = "";
  document.getElementById('modifier-d8').value = "";
  document.getElementById('modifier-d10').value = "";
  document.getElementById('modifier-d12').value = "";
  document.getElementById('modifier-d20').value = "";
  document.getElementById('modifier-d100').value = "";
}
