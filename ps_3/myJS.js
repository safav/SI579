/*
* Excercise 1
*
*/

const div = document.getElementById('color-block');
div.addEventListener('click', changeColor);


/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor() {
    //Write a condition determine what color it should be changed to
    const div = document.getElementById('color-block');
    const span = document.getElementById('color-name');
    if (div.style.backgroundColor === 'rgb(240, 128, 128)') {
        //change the background color using JS
        div.style.backgroundColor = 'green';
        //Change the text of the color using the span id color-name
        span.innerText = 'Green';
    }
    else {
        //change the background color using JS
        div.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        span.innerText = '#F08080';

    }
}




/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
const button = document.getElementById('convertbtn');
button.addEventListener('click', convertTemp);

function convertTemp() {
    //Calculate the temperature here
    const input = document.getElementById('f-input');
    const fahrenheit = (input.value - 32) * 5 / 9;
    //Send the calculated temperature to HTML
    const output = document.getElementById('c-output');
    output.innerText = fahrenheit;
}


