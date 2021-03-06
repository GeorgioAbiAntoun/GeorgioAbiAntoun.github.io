var firstPage = document.getElementsByClassName("page1");
var secondPage = document.getElementsByClassName("page2");
var thirdPage = document.getElementsByClassName("page3");

//Declaring the elements where we need to change the name
var changeName = document.getElementsByClassName("changeName");

//Declaring the elements where the user needs to input value
var petName = document.getElementById("petName");
var breedSelector = document.getElementById("breedSelector");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var weightSelector = document.getElementById("weightSelector");

//Declaring the sections to show/hide
var couchPotato = document.getElementsByClassName("couchPotato");
var somewhatActive = document.getElementsByClassName("somewhatActive");
var active = document.getElementsByClassName("active");
var veryActive = document.getElementsByClassName("veryActive");
var energyBall = document.getElementsByClassName("energyBall");

var sections = [couchPotato, somewhatActive, active, veryActive, energyBall];

//Declaring the activity level radio buttons
var couchPotatoButton = document.getElementById("couchPotatoButton");
var somewhatActiveButton = document.getElementById("somewhatActiveButton");
var activeButton = document.getElementById("activeButton");
var veryActiveButton = document.getElementById("veryActiveButton");
var energyBallButton = document.getElementById("energyBallButton");


//Adding the corresponding event listeners
couchPotatoButton.addEventListener('click',()=>showSection(couchPotato));
somewhatActiveButton.addEventListener('click',()=>showSection(somewhatActive));
activeButton.addEventListener('click',()=>showSection(active));
veryActiveButton.addEventListener('click',()=>showSection(veryActive));
energyBallButton.addEventListener('click',()=>showSection(energyBall));

//Declaring the error message for each input element
petName.setCustomValidity("Please enter your pet's name");
breedSelector.setCustomValidity('Please select a breed!');
day.setCustomValidity('Please enter a day!');
month.setCustomValidity('Please enter a month!');
year.setCustomValidity('Please enter a year');
weightSelector.setCustomValidity("Please enter your pet's weight!");


//The following functions hides the error message while the user is changing the input
petName.addEventListener('input', function(){
  petName.setCustomValidity('');
  petName.reportValidity();
});

month.addEventListener('input', function() {
  month.setCustomValidity('');
  month.reportValidity();
});

year.addEventListener('input', function() {
  year.setCustomValidity('');
  year.reportValidity();
});

month.addEventListener('change', function() {
  month.setCustomValidity('');
  month.reportValidity();
});

year.addEventListener('change', function() {
  year.setCustomValidity('');
  year.reportValidity();
});

breedSelector.addEventListener('change', function() {
  breedSelector.setCustomValidity('');
  breedSelector.reportValidity();
});

weightSelector.addEventListener('change', function() {
  weightSelector.setCustomValidity('');
  weightSelector.reportValidity();
});

//This functions allows to wait for the animation to finish before executing the next command
function resolveAfterXMilliSecond(x) {
  console.log("starting animation")
  return new Promise(resolve => {
    setTimeout(function () {
      resolve("slow")
      console.log("animation done")
    }, x)
  })
}

//This function hide the first page without animation
function hideFirstPage() {
  for (var i = 0; i < firstPage.length; i++) {
    firstPage[i].style.display = "none";
  }
  for (var i = 0; i < secondPage.length; i++) {
    secondPage[i].style.display = "flex";
  }
}

//This function reduces the opacity of the first page but doesn't remove the element
function animateFirstPage() {
  for (var i = 0; i < firstPage.length; i++) {
    firstPage[i].classList.add("hide");
  }
}

//This function hide the second page without animation
function hideSecondPage() {

  for (var i = 0; i < secondPage.length; i++) {
    secondPage[i].style.display = "none";
  }
  for (var i = 0; i < thirdPage.length; i++) {
    thirdPage[i].style.display = "flex";
  }

}

//This function reduces the opacity of the second page but doesn't remove the element
function animateSecondPage() {
  for (var i = 0; i < secondPage.length; i++) {
    secondPage[i].classList.add("hide");
  }
}

//This function will validate input, animate the page and transition to the second page
async function animateRemoveFirst() {

  if (petName.value.trim().length == 0) { //This is to prevent users from entering an enmpty string or a sequence of space

    petName.reportValidity();
    
  }
  else if (breedSelector.value == "SelectBreed") {  //This is to force the user to select a valid breed

    breedSelector.reportValidity();

  } else {  //If the input is valid, the user will proceed to the next page

    for (var i = 0; i < changeName.length; i++) {//If all inputs on first page are valid, replace "your pet" by your actual pet's name, capitalized
      changeName[i].innerHTML = changeName[i].innerHTML.replace(/your pet/gi, (petName.value[0].toUpperCase() + petName.value.slice(1)) );
    }

    animateFirstPage();
    const slow = await resolveAfterXMilliSecond(100)
    hideFirstPage();
  }

}

//This function will validate input, animate the page and transition to the third page
async function animateRemoveSecond() {

  if (month.value == "selectMonth") { //Check if the user is entering a valid month, range check will be done from the HTML

    month.reportValidity();

  }else if (year.value == "selectYear") { //Check if the user is entering a valid year, range check will be done from the HTML

    year.reportValidity();

  }  else if (weightSelector.value == "WeightInKgs") { //This is to force the user to enter a valid weight

    weightSelector.reportValidity();

  }
  else {  //If all inputs are valid, proceed to the last page
    animateSecondPage();
    const slow = await resolveAfterXMilliSecond(100)
    hideSecondPage();
  }


}

function showSection(element){

  for(var i = 0; i < sections.length; i++){

    for(var j = 0; j < element.length; j++){
      if(sections[i] == element){
      
        sections[i][j].classList.remove("hide");
        sections[i][j].classList.add("show");
      }
      else{
        sections[i][j].classList.remove("show");
        sections[i][j].classList.add("hide");
  
      }

    }
  }

}

//Make dropdown input grey until that a user selects a valid option
var style = document.createElement('style');

var breedGrey = 'select[id=breedSelector]{color: #899197 !important;}';
var dayGrey = ' select[id=day] {color: #899197 !important;} ';
var monthGrey = ' select[id=month] {color: #899197 !important;} ';
var yearGrey = ' select[id=year] {color: #899197 !important;} ';
var weightGrey = ' select[id=weightSelector] {color: #899197 !important;} ';

style.innerHTML = breedGrey+dayGrey+monthGrey+yearGrey+weightGrey;
var ref = document.querySelector('script');
ref.parentNode.insertBefore(style, ref);


//Hide/show the breed size selector if the user selects Mixed Breed or not
$(document).ready(function () {
  $('#breedSelector').on('change', function () {

    if(this.value=='SelectBreed'){
      if(!(style.innerHTML.includes(breedGrey))){
        style.innerHTML = style.innerHTML + breedGrey;
      }      
    } else {

      if(style.innerHTML.includes(breedGrey)){
        style.innerHTML=style.innerHTML.replace(breedGrey,'');
      }
      
    }
    if (this.value == 'MixedBreed') {
      document.getElementById("breedSize").style.display = "flex";
    }
    else {
      document.getElementById("breedSize").style.display = "none";
    }
  });

  $('#day').on('change', function () {

    if(this.value=='selectDay'){
      if(!(style.innerHTML.includes(dayGrey))){
        style.innerHTML = style.innerHTML + dayGrey;
      }      
    } else {
      if(style.innerHTML.includes(dayGrey)){
        style.innerHTML=style.innerHTML.replace(dayGrey,'');
      } 
    }
  });

  $('#month').on('change', function () {

    if(this.value=='selectMonth'){
      if(!(style.innerHTML.includes(monthGrey))){
        style.innerHTML = style.innerHTML + monthGrey;
      }      
    } else {
      if(style.innerHTML.includes(monthGrey)){
        style.innerHTML=style.innerHTML.replace(monthGrey,'');
      } 
    }
  });

  $('#year').on('change', function () {

    if(this.value=='selectYear'){
      if(!(style.innerHTML.includes(yearGrey))){
        style.innerHTML = style.innerHTML + yearGrey;
      }      
    } else {
      if(style.innerHTML.includes(yearGrey)){
        style.innerHTML=style.innerHTML.replace(yearGrey,'');
      } 
    }
  });

  $('#weightSelector').on('change', function () {

    if(this.value=='WeightInKgs'){
      if(!(style.innerHTML.includes(weightGrey))){
        style.innerHTML = style.innerHTML + weightGrey;
      }      
    } else {
      if(style.innerHTML.includes(weightGrey)){
        style.innerHTML=style.innerHTML.replace(weightGrey,'');
      } 
    }
  });

  

});

//Hide placeholder when user clicks on input field
$(function(){
  $.each($('input'), function(index, value) {
   $(this).data('holder', $(this).attr('placeholder'));
 });

   $('input').focusin(function(){
       $(this).attr('placeholder','');
   });

   $('input').focusout(function(){
       $(this).attr('placeholder', $(this).data('holder'));
   });
})
