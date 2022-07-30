//Write your pseduo code first! 

//listen for the value degrees in Celcius to be entered/submitted
document.querySelector('#convert').addEventListener('click', tempConvert)

//retrieve the value of temp in Celcius from the input
//assign the value of degrees Celcius to temp variable
function tempConvert() {
    let temp = document.querySelector('#tempCelcius').value 

    //Convert temp
    temp = temp * 9/5 +32
    
    //display value in F* in DOM
    document.querySelector('#displayAnswerHere').innerText = temp
}






