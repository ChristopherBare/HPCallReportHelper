//array to hold the variables to count.
var array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//array of stores.
var stores = ["Best Buy", "Office Depot", "Office Max", "Staples", "Costco"];
//array of hours.
var hours = [1, 2, 3, 4, 5, 6, 7, 8];
//Text to copy to copyTextToClipboard
var text = "";
//Event listener for the save() function.
/*var exportDataButton = document.querySelector('.js-recap-copy-btn');
exportDataButton.addEventListener('click', function(event) {
  copyTextToClipboard(text);
});*/



/**
A function to take in the count
of the item input and increase it.
*/
function increase(int) {
  array[int]++;
  document.getElementById(int).innerHTML = array[int];
  document.getElementById(int + 20).innerHTML = array[int];
}
/**
A function to take in the count
of the item input and decrease it.
*/
function decrease(int) {
  array[int]--;
  if (array[int] < 0) {
    array[int] = 0;
  }
  document.getElementById(int).innerHTML = array[int];
  document.getElementById(int + 20).innerHTML = array[int];
}

/**
This copys the data from the session to your clipboard to be pasted into GroupMe. Formatted for a recap.
*/
function copyTextToClipboard() {
  //alert("This feature hasn't been implemented yet. Please stand by.");
  var textArea = document.createElement("textarea");
  // *** This styling is an extra step which is likely not required. ***
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //

  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';

  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;

  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';


  textArea.value = text;

  document.body.appendChild(textArea);

  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}

/**
This resets the main array of variables called array.
*/
function reset() {
  for (j = 0; j < array.length; j++) {
    array[j] = 0;
    document.getElementById(j).innerHTML = array[j];
    document.getElementById(j + 20).innerHTML = array[j];
  }
}
/**
Function that populates the text variable above.
*/
function setStoreType(store) {
  //  document.getElementById(storeType).innerHTML = stores[store - 100];
}

function setHours(hour) {
  //document.getElementById(ModalHours).innerHTML = hours[hour - 200];
}
