/*this function hides a hidden portion of code automatically when the page is loaded */
function disappear() {
    let x = document.getElementById('feedback');
    if (x.style.display == "none") {
        x.style.display ="inline";
    } else {
        x.style.display = "none";
    }
}

/*function for the first rating button, once button is clicked, it registers the value of the button and stores it in an hidden text box on the page for later useage*/
function rtFunc1() {
    const one = document.getElementById('rt-btn1').value;
    document.getElementById('storage').value = (one); 
    
}

/*function for the first rating button, once button is clicked, it registers the value of the button and stores it in an hidden text box on the page for later useage*/
function rtFunc2() {
    const two = document.getElementById('rt-btn2').value;
    document.getElementById('storage').value = (two); 
    
}

/*function for the first rating button, once button is clicked, it registers the value of the button and stores it in an hidden text box on the page for later useage*/
function rtFunc3() {
    const three = document.getElementById('rt-btn3').value;
    document.getElementById('storage').value = (three); 
    
}

/*function for the first rating button, once button is clicked, it registers the value of the button and stores it in an hidden text box on the page for later useage*/
function rtFunc4() {
    const four = document.getElementById('rt-btn4').value;
    document.getElementById('storage').value = (four); 
    
}

/*function for the first rating button, once button is clicked, it registers the value of the button and stores it in an hidden text box on the page for later useage*/
function rtFunc5() {
    const five = document.getElementById('rt-btn5').value;
    document.getElementById('storage').value = (five); 
    
}

/*function for the first submit button, once button is clicked, it takes whatever value that has been stored in the hidden text box and prints it out on the next page as the rating number*/
function subBtn() {
    let rtValue = document.getElementById('storage').value;
    document.getElementById('newValue').innerHTML = (rtValue);

/*this line of code displays a hidden portion if code that can only be displayed if this function is called upon */
  let x = document.getElementById('feedback');
  let y = document.getElementById('rating');
  if (x.style.display == "inline" && y.style.display == "none") {
      x.style.display ="none";
      y.style.display = "inline";
  } else {
      x.style.display = "inline";
      y.style.display = "none";
  }
}

