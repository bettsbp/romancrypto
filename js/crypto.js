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
  // secretArray.splice(0, 1, (charArray[0]));
  alert("the secret array is:" + secretArray)
 for (i=0; i < charArray.length; i+=(squareRoot +1)) {
   secretArray.splice(i, 1, charArray[i])
    alert("this is the secret arrray at the 0i:" + secretArray)
 }
 for (i=(squareRoot-2); i < charArray.length; i+=(squareRoot +1)) {
   secretArray.splice(i+2, 1, charArray[i])
   alert("this is the secret arrray at the 1i:" + secretArray)
 }
 for (i=(squareRoot-1); i < charArray.length; i+=(squareRoot)) {
   secretArray.splice(i+4, 1, charArray[i])
   alert("this is the secret arrray at the 2i:" + secretArray)
 }
 for (i=(squareRoot); i < charArray.length; i+=(squareRoot +1)) {
   secretArray.splice(i-2, 1, charArray[i])
   alert("this is the secret arrray at the 3i:" + secretArray)
 }
 for (i=(squareRoot*2); i < charArray.length; i+=(squareRoot*i)) {
   secretArray.splice(i-4, 1, charArray[i])
   alert("this is the current secret arrray:" + secretArray)
 }
  return secretArray
  alert("past the loop")
}
