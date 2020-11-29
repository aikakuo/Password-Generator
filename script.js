// character list
var lowerChar = 'abcdefghijklmnopqrstuvwxyz'

var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var numChar = '1234567890';

var symChar = '!@#$^&%*()+=-[]{}|:<>?,.';

//function to generate code
function generateMe() {
    var numberChoice = '';
    numberChoice = prompt("Please choose password length 8-128");
    
    if (numberChoice >7 && numberChoice <= 128) { 
      
      if (numberChoice)
      var numberC = confirm('Password should include number?')
      var symbolC = confirm('Password should include symbols?')
      var upperC = confirm('Password should include uppercase?')
      var lowerC = confirm('Password should include lowercase?')

  //character functions 

    var characters = '';
    characters += (lowerC ? lowerChar : '');
    characters += (upperC ? upperChar : '');
    characters += (symbolC ? symChar : '');
    characters += (numberC ? numChar : '');
  //new password 
    newPass = password(numberChoice, characters);

    document.getElementById("password").innerHTML = newPass;

    function password(l, characters) {
        var newPass = '';
        for (var i = 0; i < l; ++i) {
            newPass += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return newPass;
    }  
  } 
    if (lowerC === false && upperC === false && symbolC === false && numberC === false ) {
       alert('Please start again!')

    }
  //   function copyMe() {
  //     var copyText = document.getElementById('password');
  // copyText.select();
  // copyText.setSelectionRange(0, 99999)
  // document.execCommand("copy");
  // }
  }


