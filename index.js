const seeMoreBtn = document.getElementById ("first-btn");
    seeMoreBtn.addEventListener ('click', function(){
      const carusolArea = document.getElementById("carusol-area");
      carusolArea.style.display = "none";
      const secondPart = document.getElementById("second-part");
      secondPart.style.display = "block";
      secondPart.style.marginLeft="300px"

      const MainPart= document.getElementById('main-part');
      MainPart.style.display='none'

      document.getElementById('final').style.display="none"
      document.getElementsByClassName('HR').style.display="none"
    })