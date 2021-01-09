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

//Declaring the error message for each input element
petName.setCustomValidity("Please enter your pet's name");
breedSelector.setCustomValidity('Please select a breed!');
day.setCustomValidity('Day must be between 1 and 31!');
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
    const slow = await resolveAfterXMilliSecond(650)
    hideFirstPage();
  }

}

//This function will validate input, animate the page and transition to the third page
async function animateRemoveSecond() {

  if (day.value < 1 || day.value > 31) {  //Check if the user is entering a valid month, range check will be done from the JS

    day.reportValidity();
  }
  else if (month.value == "") { //Check if the user is entering a valid month, range check will be done from the HTML

    month.reportValidity();

  }else if (year.value == "") { //Check if the user is entering a valid year, range check will be done from the HTML

    year.reportValidity();

  }  else if (weightSelector.value == "" || weightSelector.value < 0 || weightSelector.value > 110) { //This is to force the user to enter a valid weight

    weightSelector.reportValidity();

  }
  else {  //If all input is valid, proceed to the last page
    animateSecondPage();
    const slow = await resolveAfterXMilliSecond(650)
    hideSecondPage();
  }


}

//Hide/show the breed size selector if the user selects Mixed Breed or not
$(document).ready(function () {
  $('#breedSelector').on('change', function () {
    if (this.value == 'MixedBreed') {
      document.getElementById("breedSize").style.display = "flex";
    }
    else {
      document.getElementById("breedSize").style.display = "none";
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
