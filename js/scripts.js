// business logic


// ROMAN NUMERAL CONVERTER
function toRoman(number) {

  var numbers = number.toString().split('')
  var thousand = ""
  var hundred = ""
  var ten = ""
  var one = ""
  var firstArray = []
  var finalNumber = ''

// Conditions for determining what kind / how big the number is

  if (number < 10) {
    one = 'I'.repeat(number)
    firstArray = [one]
  } else if (number < 100) {
    ten = 'X'.repeat(parseInt(numbers[0]))
    one = 'I'.repeat(parseInt(numbers[1]))
    firstArray = [ten, one]
  } else if (number >= 100 && number < 1000) {
    hundred = 'C'.repeat(parseInt(numbers[0]))
    ten = 'X'.repeat(parseInt(numbers[1]))
    one = 'I'.repeat(parseInt(numbers[2]))
    firstArray = [hundred, ten, one]
  } else if (number >= 1000 && number < 4000) {
    thousand = 'M'.repeat(parseInt(numbers[0]))
    hundred = 'C'.repeat(parseInt(numbers[1]))
    ten = 'X'.repeat(parseInt(numbers[2]))
    one = 'I'.repeat(parseInt(numbers[3]))
    firstArray = [thousand, hundred, ten, one]
  } else {
    alert("Please enter a number less than 4000.")
    return
  }

// Loop for converting the number into roman numerals

  for (i = 0; i < firstArray.length; i++) {
    var stringNine = (firstArray[i]).search("IIIIIIIII")
    if(stringNine >= 0){
      newElement = firstArray[i].replace('IIIIIIIII', 'IX')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringFive = (firstArray[i]).search("IIIII")
    if(stringFive >= 0){
      newElement = firstArray[i].replace('IIIII', 'V')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringFour = (firstArray[i]).search("IIII")
    if(stringFour >= 0){
      newElement = firstArray[i].replace('IIII', 'IV')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringNinety = (firstArray[i]).search("XXXXXXXXX")
    if(stringNinety >= 0){
      newElement = firstArray[i].replace('XXXXXXXXX', 'XC')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringFifty = (firstArray[i]).search("XXXXX")
    if(stringFifty >= 0){
      newElement = firstArray[i].replace('XXXXX', 'L')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringForty = (firstArray[i]).search("XXXX")
    if(stringForty >= 0){
      newElement = firstArray[i].replace('XXXX', 'XL')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringNineO = (firstArray[i]).search("CCCCCCCCC")
    if(stringNineO >= 0){
      newElement = firstArray[i].replace('CCCCCCCCC', 'CM')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringFiveO = (firstArray[i]).search("CCCCC")
    if(stringFiveO >= 0){
      newElement = firstArray[i].replace('CCCCC', 'D')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
    var stringFourO = (firstArray[i]).search("CCCC")
    if(stringFourO >= 0){
      newElement = firstArray[i].replace('CCCC', 'CD')
      firstArray.splice(i,1,newElement);
    } else {
      console.log("passed")
    }
  }
  finalNumber = firstArray.join('')
  alert(finalNumber)
}

// CRYPTOSQUARE

// user logic

// ROMAN NUMERAL CONVERTER

$(document).ready(function() {

  $('#ogNumber').submit(function(event) {
    event.preventDefault();

    var ogNumber = $('input#ogNumber').val();
    toRoman(ogNumber);

  })
})

// CRYPTOSQUARE
