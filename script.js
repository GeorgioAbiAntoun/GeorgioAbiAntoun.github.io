var firstPage = document.getElementsByClassName("page1");
var secondPage = document.getElementsByClassName("page2");
var thirdPage = document.getElementsByClassName("page3");

//Declaring the elements where the user needs to input value
var petName = document.getElementById("petName");
var breedSelector = document.getElementById("breedSelector");
var month = document.getElementById("month");
var year = document.getElementById("year");
var weightSelector = document.getElementById("weightSelector");

//Declaring the error message for each input element
petName.setCustomValidity("Please enter your pet's name");
breedSelector.setCustomValidity('Please select a breed!');
month.setCustomValidity('Please enter a month!');
year.setCustomValidity('Please enter a year');
weightSelector.setCustomValidity("Please enter your pet's weight!");





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

function hideFirstPage() {
  for (var i = 0; i < firstPage.length; i++) {
    firstPage[i].style.display = "none";
  }
  for (var i = 0; i < secondPage.length; i++) {
    secondPage[i].style.display = "flex";
  }
}

function animateFirstPage() {
  for (var i = 0; i < firstPage.length; i++) {
    firstPage[i].classList.add("hide");
  }
}

function hideSecondPage() {

  for (var i = 0; i < secondPage.length; i++) {
    secondPage[i].style.display = "none";
  }
  for (var i = 0; i < thirdPage.length; i++) {
    thirdPage[i].style.display = "flex";
  }

}

function animateSecondPage() {
  for (var i = 0; i < secondPage.length; i++) {
    secondPage[i].classList.add("hide");
  }
}

//This function will validate input, animate the page and transition to the second page
async function animateRemoveFirst() {

  if (petName.value.trim().length == 0) {

    petName.reportValidity();
  }
  else if (breedSelector.value == "SelectBreed") {

    breedSelector.reportValidity();

  } else {
    animateFirstPage();
    const slow = await resolveAfterXMilliSecond(650)
    hideFirstPage();
  }
}

//This function will validate input, animate the page and transition to the third page
async function animateRemoveSecond() {

  if (month.value == "") {

    month.reportValidity();
  }
  else if (year.value == "") {

    year.reportValidity();

  }
  else if (weightSelector.value == "WeightInLbs") {

    weightSelector.reportValidity();

  }
  else {
    animateSecondPage();
    const slow = await resolveAfterXMilliSecond(650)
    hideSecondPage();
  }


}

//Hide/show the breed size selector based if the user selects Mixed Breed or not
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