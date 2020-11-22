var charCount = parseInt(prompt("Please enter a number between 8 - 128"))


if(charcount >7 && charcount <= 128) {

  var finalchars=[]
  var includeNumber = confirm('password should include number?')
  var includeSymbols = confirm('password should include symbols?')
  var includeUpperCase = confirm 
  ('password should include uppercase letters?')
  var includeLowerCase = confirm ('password should include lowercase letters?')


  if (includeNumber) {
    for (var i = 0; numericNumber.length;++i)
finalchars.push (numericNumber[i])
  }
  if (includeNumber) {
    for (var i = 0; numericNumber.length;++i)
    finalchars.push (specialChar[i])
  }
if (includeNumber) {
    for (var i = 0; numericNumber.length; ++i)
    finalchars.push (upperCaseChar[i])
}
if (includeNumber) {
    for (var i = 0; numericNumber.length; ++i) 
    finalchars.push (lowerCaseChar)
}

  var flattenFinalChars = finalchars.flat()
var password = ''


  for (var i = 0; charcount;++i) {
    var randomIndex = math.floor (math.random() * flattenFinalChar.length)
  }
    var randomChar = flattenedFinalChars[randomIndex]

    password += randomchar
}

// Var list
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];


