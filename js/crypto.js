function crypto(message){
 var noPunc = message.replace(/[.,\/#!$%\^&\*;:{}<>=\-_`'~()]/g,"")
 var noSpace = noPunc.replace(/\s+/g, '')
 var lowerCase = noSpace.toLowerCase()
 var charCount = lowerCase.length
 var squareRoot = Math.sqrt(charCount)
 return(squareRoot)
 for (i=0; i>)
}
