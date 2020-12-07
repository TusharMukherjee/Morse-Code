var buttonTranslate = document.querySelector("#btn");
var inputText = document.querySelector("#input");
var outputText = document.querySelector("#output");

 var sURL = "https://api.funtranslations.com/translate/morse.json"

 function geturl(input){
     return sURL + "?" + "text=" + input
 }

 function handError(){
     alert("Sorry we have use the max 5 inputs. Try once again approx an hour")
}

function handTranslate(){
    var inText = inputText.value

    fetch(geturl(inText))
    .then(response => response.json())
    .then(json => {
                     var translatedText = json.contents.translated;
                     outputText.innerText = translatedText;

    })
    .catch(handError)
}
buttonTranslate.addEventListener("click",handTranslate) 