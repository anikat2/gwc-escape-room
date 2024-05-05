function hi() {
    if (document.getElementById("maidenName").value.toLowerCase() == "mummy") {
      document.getElementById("maidenName").style.backgroundColor = "green";
    } else {
      document.getElementById("maidenName").style.backgroundColor = "red";
    }
    
    if (document.getElementById("petName").value.toLowerCase() == "doggie") {
      document.getElementById("petName").style.backgroundColor = "green";
    } else {
      document.getElementById("petName").style.backgroundColor = "red";
    }  
    
    if (document.getElementById("streetName").value.toLowerCase() == "cherry") {
      document.getElementById("streetName").style.backgroundColor = "green";
    } else {
      document.getElementById("streetName").style.backgroundColor = "red";
    }
  
    if (document.getElementById("bookName").value.toLowerCase() == "the very hungry caterpillar") {
      document.getElementById("bookName").style.backgroundColor = "green";
    } else {
      document.getElementById("bookName").style.backgroundColor = "red";
    }
  }
  
  function show(){
    window.location.href = 'questions.html';
  }

  var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})