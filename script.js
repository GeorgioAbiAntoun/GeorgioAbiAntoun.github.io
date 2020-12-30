var firstPage = document.getElementsByClassName("page1");
var secondPage = document.getElementsByClassName("page2");
var thirdPage = document.getElementsByClassName("page3");


function hideFirstPage() {

  for(var i=0; i<firstPage.length; i++) {
    firstPage[i].style.display = "none";
  }
  for(var i=0; i<secondPage.length; i++) {
    secondPage[i].style.display = "flex";
  }

}

function hideSecondPage() {
  
  for(var i=0; i<secondPage.length; i++) {
    secondPage[i].style.display = "none";
  }
  for(var i=0; i<thirdPage.length; i++) {
    thirdPage[i].style.display = "flex";
  }

}

function undoPage(){

  for(var i=0; i<firstPage.length; i++) {
    firstPage[i].style.display = "flex";
  }
  for(var i=0; i<secondPage.length; i++) {
    secondPage[i].style.display = "flex";
  }
  for(var i=0; i<thirdPage.length; i++) {
    thirdPage[i].style.display = "flex";
  }

}