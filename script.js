var firstPage = document.getElementsByClassName("page1");
var secondPage = document.getElementsByClassName("page2");
var thirdPage = document.getElementsByClassName("page3");


//This functions allows to wait for the animation to finish before executing the next command
function resolveAfterXMilliSecond(x) {
  console.log("starting slow promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow")
      console.log("slow promise is done")
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

function undoPage() {

  location.reload();

}

async function animateRemoveFirst() {
  //console.log('==SEQUENTIAL START==')
  animateFirstPage();
  const slow = await resolveAfterXMilliSecond(650)
  //console.log(slow) // 2. this runs 1 second after 1.
  hideFirstPage();
}

async function animateRemoveSecond() {
  //console.log('==SEQUENTIAL START==')
  animateSecondPage();
  const slow = await resolveAfterXMilliSecond(650)
  //console.log(slow) // 2. this runs 1 second after 1.
  hideSecondPage();
}

$(document).ready(function(){
  $('#breedSelector').on('change', function() {
    if ( this.value == 'MixedBreed')
    {
      document.getElementById("breedSize").style.display = "flex";
    }
    else  
    {
      document.getElementById("breedSize").style.display = "none";
    }
  });
});