//Creates a copy of the quotes array that is independent of the original quotes array once the script is loaded.
//This will be used instead of the quotes array, so that we can remove objects from this array without losing
//the original data.
var quoteList = quotes.slice();



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Call the changeQuote function, which changes the quote every 30 seconds.
changeQuote();


function printQuote() {

    //A variable for the selected random quote and a variable for the html that will be generated with the object's information.
    var selectedQuote;
    var html;


    //Call the getRandomQuote function, store it in variable.
    selectedQuote = getRandomQuote();


    //Construct a string containing the different properties of the quote object.
    html = '<p class="quote">' + selectedQuote.quote + '</p>';
    html += '<p class="source">' + selectedQuote.source;
    //If the citation property exists on the object, add this to the html string.
    if (selectedQuote.citation != undefined) {
        html += '<span class="citation">' + selectedQuote.citation + '</span>';
    }
    //If the citation year exists on the object, add this to the html string.
    if (selectedQuote.year != undefined) {
        html += '<span class="year">' + selectedQuote.year + '</span> </p>';
    }
    //Add the category tag to the html string.
    html += '<p class="category">' + selectedQuote.category + '</p>';



    //Inject the Html in to the #quote-box.
    document.getElementById('quote-box').innerHTML = html;

    //Call the random color function, and set the body tag's background-color style to that random color.
    document.body.style.backgroundColor = getRandomColor();
    

}


function getRandomQuote() {
    //Variable that will hold the random number.
    var randomNumber;
    //Get the total number of quotes in the object.
    var availableQuotes = quoteList.length;
    //Variable that will hold the selected quote once the random number is generated, and used to select a quote from the list of available quotes.
    var selectedQuote;

    // Check if the list of available quotes is less than one.  If it is, concatinate the objects from the quotes array (the original data) on to the new array (quoteList).
    if (quoteList.length < 1) {
        quoteList = quotes.concat();
    }

    
    //Generate a random number based on how many quotes exist in the object.
    randomNumber = Math.floor(Math.random() * availableQuotes);

    //Store the quote using the index selected by the generated random number, and remove that object from the array.
    selectedQuote = quoteList.splice(quoteList[randomNumber], 1);

    //Log the selected quote to the console for the reviewer.
    console.log(selectedQuote[0]);

    //Return the selected random quote.
    return selectedQuote[0];
   
}


function getRandomColor() {
    //Creates variables of a random number between 0 and 255 that will be used as color values.
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    // A string that holds the values of the three randomly generated numbers, and formats them like the css background-color property of an rgb color.
    var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    //Return the color.
    return rgbColor;

    
}


function changeQuote() {
    //Runs the printQuote function every 30 seconds.
    setInterval(printQuote, 30000);

}

