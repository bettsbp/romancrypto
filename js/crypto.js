function crypto(message) {
 var noPunc = message.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`'~()]/g,"")

 var noSpace = noPunc.replace(/\s+/g, '')
 var lowerCase = noSpace.toLowerCase()
  alert(lowerCase);

 var charArray = lowerCase.split('')
 alert(charArray)

 var charCount = charArray.length
 alert(charCount)

 var squareRoot = Math.sqrt(charCount)
 alert(squareRoot)
 var secretArray = []
 for(var i = 0; i < charCount; i++) {
    secretArray.push(" ");
}
  secretArray.splice(0, 1, (charArray[0]));
  alert("the secret array is:" + secretArray)
 for (i=1; i < charArray.length; i++) {
   secretArray.splice(i, 1, charArray[i+squareRoot])
 }
    return secretArray
 alert("past the loop")
}
